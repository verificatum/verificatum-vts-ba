
# Copyright 2008-2022 Douglas Wikstrom
#
# Permission is hereby granted, free of charge, to any person
# obtaining a copy of this software and associated documentation files
# (the "Software"), to deal in the Software without restriction,
# including without limitation the rights to use, copy, modify, merge,
# publish, distribute, sublicense, and/or sell copies of the Software,
# and to permit persons to whom the Software is furnished to do so,
# subject to the following conditions:
#
# The above copyright notice and this permission notice shall be
# included in all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
# EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
# MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
# BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
# ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
# CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

# This forces us to remember to manually update the VTS-BA version in
# the package file if the version of VTS is updated.
VTS-BA_VERSION:=$(shell cat package.json | grep version | sed "s/[^:]*://; s/[\", ]//g")

# Source directory.
SRC=src

JS_SRC=$(SRC)/js

# Root of packages.
PACKAGES=packages
TS_SRC=$(SRC)/ts

# Documentation directory and generated temporary source directory
# needed to make TypeDoc work.
DOC=doc
DOC_SRC=doc_src

# These files are essentially a concatenation: of the library, testing
# routines, wrapper for Node's random generator, and a command line
# interface for testing only the arithmetic routines.
TSFILES=\
$(TS_SRC)/vts-bad-n-$(VTS-BA_VERSION)-p30.ts \
$(TS_SRC)/vts-bad-n-$(VTS-BA_VERSION)-a30.ts

tsfiles: $(TSFILES)
$(TSFILES) : $(TS_SRC)/vts-bad-n-%.ts: $(TS_SRC)/vts-ba-%.ts $(TS_SRC)/vts-bad-%.dts $(TS_SRC)/node-%.dts $(TS_SRC)/devnode.dts
	cat $^ > $@
	printf "\nverificatum.devnode.cli();\n" >> $@

JSFILES=$(shell echo $(TSFILES) | sed "s|$(TS_SRC)/|dist/|g; s|\.ts|\.js|g")

# Multitarget with multiple dependencies capture what tsc does.
jsfiles: $(JSFILES)
$(JSFILES): $(TSFILES)
	tsc
	npx js-beautify -r dist/*

# July, 2022: TypeScript adds an "export" even when module is not set in
# tsconfig.json. The TypeScript community appears to consider this to
# be correct, but it means that TypeScript compiles to JavaScript
# modules and not pure JavaScript. There is no flag in the TypeScript
# compiler to avoid this.
#
# Firefox does not like, e.g., like Chrome, allow web workers to load
# modules with: importScript('myscript.js', { type: "module" })
#
# We use the hack below to create modified versions of the library
# that are portable for web workers.
%w.js : %.js
	cat $< | sed "s|export \(var verificatum\)|\1|g" > $@

# TSDoc requires this hack to work.
$(DOC_SRC):
	@mkdir -p $(DOC_SRC)/$(TS_SRC)
	@cp tsconfig*.json $(DOC_SRC)
	@cp $(TS_SRC)/vts-ba-*.ts $(DOC_SRC)/$(TS_SRC)
	@find $(DOC_SRC) -type f -exec sed -i -e 's|TSDOC_MODULE|@module|g' {} \;

# TSDoc requires this hack to have links to line numbers.
$(DOC): $(DOC_SRC)
	cd $(DOC_SRC); npx typedoc --tsconfig tsconfig.json --entryPointStrategy expand --out ../$(DOC) .
	@find $(DOC) -type f -exec sed -i -e 's|\(<li>Defined in \)@verificatum/\([^:]*\):\([^<]*\)\(</li>\)|\1<a href="https://github.com/verificatum/verificatum-vts-ba-next/blob/master/src/ts/\2#L\3">\2:\3</a>\4|g' {} \;
#	rm -rf $(DOC_SRC)

# It is prudent to check all files independently.
check: $(JSFILES)
	@printf "\n"
	node dist/vts-bad-n-$(VTS-BA_VERSION)-p30.js test 5
	@printf "\n"
	node dist/vts-bad-n-$(VTS-BA_VERSION)-a30.js test 5

bench: $(JSFILES)
	node dist/vts-bad-n-$(VTS-BA_VERSION)-a30.js bench_arithm 5

lint: $(TS_DEVNODE)
	npx eslint $(SRC)

clean:
	@rm -f $(TSFILES)
	@rm -rf $(DOC) $(DOC_SRC)
	@find . -type f -name '*~' -print -delete
	@rm -rf dist
	@rm -f package-lock.json
