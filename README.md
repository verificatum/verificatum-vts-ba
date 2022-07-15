
Self-contained big integer arithmetic library in pure TypeScript with
zero dependencies. Complete documentation with explicit references to
the literature for arithmetic algorithms

## Installation

Installation instructions are given for Ubuntu. Adapt as needed.

```
# Building tools.
sudo apt install make

# Most recent version of node.
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
sudo apt install -y nodejs

# TypeScript globally.
sudo npm install -g typescript

# Install NPM development dependencies.
npm i

```

## Usage

Clone this repository and compile TypeScript yourself with your
favorite options and target or grab one of the compiled JavaScript
files in `compiled/`.

This repository is intentionally minimalistic, since any user is
likely to embed our source into an application with their own tool
chain.

## Source Code

The source code is compiled from a subset of the [Verificatum
TypeScript library
(VTS)](https://github.com/verificatum/verificatum-vts) repository and
found in `src/`. The files with the suffix `.dts` are not stand-alone
compilable TypeScript files. They are indended to be appended to the
library to build and run the test suite as explained in the
`Makefile`.

The postfix of each file indicates if pure TypeScript used, or
WebAssembly is used for the `muladd_loop` function. It also gives the
wordsize used internally, e.g., the postfix `p28` means that pure
TypeScript is used and that the wordsize is 28 bits. Both are internal
properties and should only influence running time and memory
requirements. The version with WebAssembly is roughly twice as fast
for large integer exponentiation, but it allocates complete pages of
memory.

## Contributing

You should feel free to submit pull requests to this repository, but
any good suggestions are then adopted in
[VTS](https://github.com/verificatum/verificatum-vts) and released
under MIT License in this repository whenever it is updated.

## About

We refer the reader to the upstream project [Verificatum TypeScript
library (VTS)](https://github.com/verificatum/verificatum-vts) for
technical information, history, and future. It may also be interesting
to look at the precursor of this library, [Verificatum JavaScript
Cryptographic library
(VJSC)](https://github.com/verificatum/verificatum-vjsc). Several of
the ad-hoc solutions we used are no longer necessary due to new
language features of JavaScript and TypeScript.

**We need a sponsor to release
[VTS](https://github.com/verificatum/verificatum-vts) under MIT
License. Contact us if you are interested in this.**

## License

All files in this repository is released under [MIT
License](https://mit-license.org).

```
Copyright 2008-2022 Douglas Wikstrom

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## Acknowledgments

We want to thank Swiss Post (https://gitlab.com/swisspost-evoting) for
the support for the release of the big integer arithmetic routines of
this library under MIT license.

We thank Torbjörn Granlund for helpful advise about the big integer
arithmetic code.
