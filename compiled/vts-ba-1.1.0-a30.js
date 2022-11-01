// Copyright 2008-2022 Douglas Wikstrom
//
// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation
// files (the "Software"), to deal in the Software without
// restriction, including without limitation the rights to use, copy,
// modify, merge, publish, distribute, sublicense, and/or sell copies
// of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
// BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
export var verificatum;
(function(verificatum) {
    let base;
    (function(base) {
        base.version = "1.1.0";
        /**
         * Base class for all objects in the library.
         */
        class VerificatumObject {
            /**
             * Returns the name of this class.
             *
             * @returns Name of this class.
             */
            getName() {
                return this.constructor.name;
            }
        }
        base.VerificatumObject = VerificatumObject;
        /**
         * Abstract random source for cryptographic use.
         */
        class RandomSource {
            /**
             * Generates the given non-negative number of random bytes.
             *
             * @param len - Number of bytes to generate.
             */
            getBytes(len) {
                const uia = this.getRandomUint8Array(len);
                const a = [];
                a.length = len;
                for (let i = 0; i < len; i++) {
                    a[i] = uia[i];
                }
                return a;
            }
        }
        base.RandomSource = RandomSource;
        /**
         * Utility classes and functions.
         * TSDOC_MODULE
         */
        /**
         * Integer division rounded towards -infinity.
         *
         * @param n - Numerator.
         * @param d - Divisor.
         */
        function divide(n, d) {
            return Math.floor(n / d);
        }
        base.divide = divide;
        /* eslint-disable @typescript-eslint/no-explicit-any */
        /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
        /**
         * Tests if an object is an instance of the given class.
         *
         * @param obj - Object to test.
         * @param type - Class.
         * @returns True or false depending on the object is an instance of
         * the class or not.
         */
        function ofClass(obj, atype) {
            if (typeof obj === "undefined") {
                return false;
            } else {
                return obj.constructor === atype;
            }
        }
        base.ofClass = ofClass;
        /**
         * Tests if an object is an instance of the given class, or a a
         * subclass of the given class.
         *
         * @param obj - Object to test.
         * @param atype - Class.
         * @returns True or false.
         */
        function ofSubclass(obj, atype) {
            while (obj != null && typeof obj != "undefined") {
                if (obj.constructor === atype) {
                    return true;
                } else {
                    obj = Object.getPrototypeOf(obj);
                }
            }
            return false;
        }
        base.ofSubclass = ofSubclass;
        /**
         * Tests if an object is an instance of the given class, array, or
         * primitive type.
         *
         * @param obj - Object to test.
         * @param atype - Class, "array", or a string admissable to the typeof
         * operator.
         * @returns True or false.
         */
        function ofType(obj, atype) {
            if (typeof atype === "string") {
                if (atype === "array") {
                    return Array.isArray(obj);
                } else if (atype === "string") {
                    return typeof obj === atype || obj instanceof String;
                } else {
                    return typeof obj === atype;
                }
            } else {
                return ofClass(obj, atype);
            }
        }
        base.ofType = ofType;
        /* eslint-enable @typescript-eslint/explicit-module-boundary-types */
        /* eslint-enable @typescript-eslint/no-explicit-any */
        /**
         * Verifies that an array of numbers is an array of bytes.
         *
         * @param value - Array to be verified.
         * @returns True or false depending on if the array is a byte array or
         * not.
         */
        function isByteArray(value) {
            for (let i = 0; i < value.length; i++) {
                if (!Number.isInteger(value[i]) || (value[i] & 0xFF) != value[i]) {
                    return false;
                }
            }
            return true;
        }
        base.isByteArray = isByteArray;
        /**
         * Verifies that a string is a hexadecimal string.
         *
         * @param value - String to be verified.
         * @returns True or false depending on if the string is hexadecimal or
         * not.
         */
        function isHexString(value) {
            for (let i = 0; i < value.length; i++) {
                const x = value.charCodeAt(i);
                if (!((47 < x && x < 58) // x in [0,9] Case insensitive
                        ||
                        (64 < x && x < 71) // x in [A,F] hexadecimal character.
                        ||
                        (96 < x && x < 103))) { // x in [a,f]
                    return false;
                }
            }
            return true;
        }
        base.isHexString = isHexString;
        /**
         * Creates a list filled with the same value.
         *
         * @param value - Value to be repeated.
         * @param width - Number of repetitions.
         * @returns List containing the value.
         */
        function fill(value, width) {
            const a = [];
            for (let i = 0; i < width; i++) {
                a[i] = value;
            }
            return a;
        }
        base.fill = fill;
        /**
         * Creates a list filled with the same value or the value
         * itself if a single repetition is requested.
         *
         * @param value - Value to be repeated.
         * @param width - Number of repetitions.
         * @returns List containing the value or the value itself if width == 1.
         */
        function full(value, width) {
            if (typeof width === "undefined" || width === 1) {
                return value;
            } else {
                return fill(value, width);
            }
        }
        base.full = full;
        const digits = "0123456789abcdef";

        function hexbyte(b) {
            return digits[b >> 4 & 0xF] + digits[b & 0xF];
        }
        base.hexbyte = hexbyte;
        /**
         * Converts an ASCII string to a byte array.
         *
         * @param ascii - ASCII string.
         * @returns Corresponding byte array.
         */
        function asciiToByteArray(ascii) {
            const bytes = [];
            for (let i = 0; i < ascii.length; i++) {
                bytes.push(ascii.charCodeAt(i));
            }
            return bytes;
        }
        base.asciiToByteArray = asciiToByteArray;
        /**
         * Returns the input if it is already a byte array and converts it to
         * a byte array from an ASCII string otherwise.
         *
         * @param data - Data.
         * @returns Corresponding byte array.
         */
        function asByteArray(data) {
            if (typeof data === "string") {
                return asciiToByteArray(data);
            } else {
                return data;
            }
        }
        base.asByteArray = asByteArray;
        /**
         * Converts byte array to ASCII string.
         *
         * @param bytes - Input bytes.
         * @returns ASCII string corresponding to the input.
         */
        function byteArrayToAscii(bytes) {
            let ascii = "";
            for (let i = 0; i < bytes.length; i++) {
                ascii += String.fromCharCode(bytes[i]);
            }
            return ascii;
        }
        base.byteArrayToAscii = byteArrayToAscii;
        /**
         * Converts a byte array to its hexadecimal encoding.
         *
         * @param bytes - Input byte array.
         * @returns Hexadecimal representation of this array.
         */
        function byteArrayToHex(bytes) {
            let hexString = "";
            for (let i = 0; i < bytes.length; i++) {
                hexString += hexbyte(bytes[i]);
            }
            return hexString;
        }
        base.byteArrayToHex = byteArrayToHex;
        /**
         * Converts a hexadecimal encoding of a byte array to the
         * byte array.
         *
         * @param hex - Hexadecimal encoding of byte array.
         * @returns Byte array corresponding to the input.
         */
        function hexToByteArray(hex) {
            // Correct hex strings of uneven length.
            if (hex.length % 2 === 1) {
                hex = "0" + hex;
            }
            // Convert bytes.
            const res = [];
            let i = 0;
            hex.replace(/(..)/g, function(hex) {
                res[i++] = parseInt(hex, 16);
                return "";
            });
            return res;
        }
        base.hexToByteArray = hexToByteArray;
        /**
         * Returns the input if it is already a byte array and converts it to
         * a byte array from an hexadecimal encoding otherwise.
         *
         * @param data - Data.
         * @returns Corresponding byte array.
         */
        function hexAsByteArray(data) {
            if (typeof data === "string") {
                return hexToByteArray(data);
            } else {
                return data;
            }
        }
        base.hexAsByteArray = hexAsByteArray;

        function hexToArrayBuffer(hex) {
            const byteArray = hexToByteArray(hex);
            const arrayBuffer = new ArrayBuffer(byteArray.length);
            const array8 = new Uint8Array(arrayBuffer);
            array8.set(byteArray);
            return arrayBuffer;
        }
        base.hexToArrayBuffer = hexToArrayBuffer;
        /**
         * Returns true or false depending on if the two input
         * arrays hold identical elements or not.
         *
         * @param x - Array of elements.
         * @param y - Array of elements.
         * @returns Value of boolean equality predicate for arrays.
         */
        function equalsArray(x, y) {
            if (x.length !== y.length) {
                return false;
            }
            for (let i = 0; i < x.length; i++) {
                if (x[i] !== y[i]) {
                    return false;
                }
            }
            return true;
        }
        base.equalsArray = equalsArray;
        /**
         * Reads a 32-bit integer in little-endian byte order
         * from the given byte array.
         *
         * @param bytes - Source of bytes.
         * @param index - Offset for reading.
         */
        function readUint32FromByteArray(bytes, index) {
            if (typeof index === "undefined") {
                index = 0;
            }
            let value = 0;
            for (let i = index; i < index + 4; i++) {
                value <<= 8;
                value |= bytes[i];
            }
            return value >>> 0;
        }
        base.readUint32FromByteArray = readUint32FromByteArray;
        /**
         * Writes a 32-bit integer in little-endian byte order.
         *
         * @param destination - Destination of result.
         * @param value - Value to write.
         * @param index - Offset for writing.
         */
        function setUint32ToByteArray(destination, value, index) {
            for (let i = index + 3; i >= index; i--) {
                destination[i] = value & 0xFF;
                value >>= 8;
            }
        }
        base.setUint32ToByteArray = setUint32ToByteArray;
        /**
         * Reads a 16-bit integer in little-endian byte order
         * from the given byte array.
         *
         * @param bytes - Source of bytes.
         * @param index - Offset for reading.
         */
        function readUint16FromByteArray(bytes, index) {
            if (typeof index === "undefined") {
                index = 0;
            }
            let value = 0;
            for (let i = index; i < index + 2; i++) {
                value <<= 8;
                value |= bytes[i];
            }
            return value >>> 0;
        }
        base.readUint16FromByteArray = readUint16FromByteArray;
        /**
         * Writes a 16-bit integer in little-endian byte order.
         *
         * @param destination - Destination of result.
         * @param value - Value to write.
         * @param index - Offset for writing.
         */
        function setUint16ToByteArray(destination, value, index) {
            for (let i = index + 1; i >= index; i--) {
                destination[i] = value & 0xFF;
                value >>= 8;
            }
        }
        base.setUint16ToByteArray = setUint16ToByteArray;
    })(base = verificatum.base || (verificatum.base = {}));
    let arithm;
    (function(arithm) {
        let uli;
        (function(uli) {
            var byteArrayToHex = verificatum.base.byteArrayToHex;
            var hexToArrayBuffer = verificatum.base.hexToArrayBuffer;
            var hexToByteArray = verificatum.base.hexToByteArray;
            /**
             * Provides the core large integer arithmetic routines needed to
             * implement multiplicative groups and elliptic curve groups over
             * prime order fields. No additional functionality is provided.
             * Although the main goal of this module is to be well-documented and
             * clearly structured with proper encapsulation and without hidden
             * assumptions, this is quite hard in a few routines.
             *
             * <p>
             *
             * WARNING! This module must be used with care due to the assumptions
             * made by routines on inputs, but these assumptions are stated
             * explicitly for each function, so the code is easy to follow.
             *
             * <p>
             *
             * Integers are represented as arrays of numbers constrained to
             * WORDSIZE bits, where WORDSIZE is any even number between 2 and 30
             * (inclusive) and there are hardcoded constants derived from this
             * when the script is generated, so do not attempt to change the
             * wordsize in the generated code. These wordsizes are natural since
             * JavaScript only allows bit operations on signed 32-bit integers. To
             * see this, note that although we can do arithmetic on floating point
             * numbers, e.g., by setting WORDSIZE = 24 we could do multiplications
             * directly, it is expensive to recover parts of the result. Bit
             * operations on 32-bit integers are provided in Javascript, but they
             * are implemented on top of the native "number" datatype, i.e.,
             * numbers are cast (with sign) to 32-bit signed integers, the bit
             * operation is applied, and the result is cast back to a "number".
             *
             * <p>
             *
             * Using small wordsizes exposes certain types of arithmetic bugs, so
             * providing this is not merely for educational purposes, it is also
             * to lower the risk of structural bugs.
             *
             * <p>
             *
             * Functions are mainly implemented for unsigned integers and when
             * called from external functions they assume that any result
             * parameter is of a given length. Some routines deal with integers
             * interpreted in variable length htwo's complement. All arithmetic
             * functions guarantee that any leading unused words are set to zero.
             *
             * <p>
             *
             * A "limb" is an element of an array that may or may not store any
             * single-precision integer. A word is a limb containing data, which
             * may be zero if there are limbs at higher indices holding
             * data. Thus, the number of limbs is the length of an array and the
             * number of words is the index of the most significant word in the
             * array plus one. We make sure to hint to the engine to avoid using
             * sparse arrays by always initializing all elements.
             *
             * <p>
             *
             * The workhorse routine is muladd_loop() which is generated for a
             * given fixed wordsize. This routine determines the speed of
             * multiplication, squaring, division, and exponentiation. For
             * division div3by2() also plays an important role. These routines are
             * generated from M4 macro code to allow using hard coded wordsize
             * dependent constants for increased speed.
             *
             * <p>
             *
             * The M4 macros improve readability, make the code more robust, and
             * simplify experimentation much like snippets of assembler code do in
             * compiled code.
             *
             * <p>
             *
             * JavaScript is inherently difficult to optimize, since the
             * JavaScript engines hot-spot optimize and are moving
             * targets. However, it seems that the built-in arrays in Javascript
             * are faster than the new typed arrays if they are handled
             * properly.
             *
             * <p>
             *
             * One notable observation is that it sometimes makes sense to inform
             * the engine that a JavaScript "number" / float is really a 32-bit
             * integer by saying, e.g., (x | 0) even if we are guaranteed that x
             * is a 32-bit integer. This is important when accessing elements from
             * arrays and it seems to prevent the engine from emitting native code
             * that does dynamic type checking.
             *
             * <p>
             *
             * We avoid dynamic memory allocation almost entirely by keeping
             * scratch space as static variables of the functions. This is
             * implemented using immediate function evaluation in JavaScript, but
             * it is encapsulated to reduce complexity, i.e., calling functions
             * remain unaware of this. This approach works well in our
             * applications, since higher level routines work with integers of
             * fixed bit length.
             *
             * <p>
             *
             * The main implemented algorithms are listed below. <a
             * href="http://cacr.uwaterloo.ca/hac">Handbook of Cryptography,
             * Alfred J. Menezes, Paul C. van Oorschot and Scott A. Vanstone
             * (HAC)</a> gives a straightforward introduction to the basic
             * algorithms used and we try to follow their notation for easy
             * reference. Multiplication and squaring uses <a
             * href="https://en.wikipedia.org/wiki/Karatsuba_algorithm">Karatsuba's
             * algorithm (K)</a>. Division exploits ideas from <a
             * href="https://gmplib.org/~tege/division-paper.pdf">Improved
             * division by invariant integers, IEEE Transactions on Computers,
             * Niels Moller and Torbjorn Granlund (MG)</a>. This is needed to
             * implement div3by2() efficiently. Simultaneous and fixed-base
             * exponentiations rely on a generalization for wider inputs from <a
             * href="https://github.com/verificatum/verificatum-gmpmee">GMPMEE
             * (WG)</a>.
             *
             * <pre>
             * REFERENCE      | OPERATION                   | COMMENT
             * HAC 14.7       | Addition                    | Grade-school
             * HAC 14.9       | Subtraction                 | Grade-school
             * HAC 14.12, K   | Multiplication              | Karatsuba
             * HAC 14.16, K   | Squaring                    | Karatsuba
             * HAC 14.20, MG  | Division                    | Integer reciprocals
             * HAC 14.36      | Montgomery multiplication   | Avoids division
             * HAC 14.82      | Modular exponentiation      | Square and multiply
             * HAC 14.85      | Modular exponentiation      | Sliding window
             * HAC 14.94      | Modular exponentiation      | Montgomery
             * HAC 14.88, WG  | Simultaneous exponentiation | Orthogonal windowing
             * HAC 14.109, WG | Fixed-base exponentiation   | Windowing
             * HAC 4.24       | Primality test              | Miller-Rabin
             * </pre>
             * TSDOC_MODULE
             */
            // Enabled WASM code starts here.
            // Enabled WASM code ends here
            // Removed TypeScript code here.
            // ################### Constants ########################################
            /**
             * Wordsize in bits, i.e., the number of bits stored in each "number"
             * which make up a big integer.
             */
            uli.WORDSIZE = 30;
            /**
             * The value 2^WORDSIZE.
             */
            uli.TWO_POW_WORDSIZE = 0x40000000;
            /**
             * The word 2^WORDSIZE - 1, i.e., the all-one bit mask.
             */
            uli.MASK_ALL = 0x3fffffff;
            // Size threshold for using Karatsuba in multiplication.
            const KARATSUBA_MUL_THRESHOLD = 30;
            // Size threshold for using Karatsuba in squaring.
            const KARATSUBA_SQR_THRESHOLD = 35;
            // Threshold for relative difference in size for using Karatsuba in
            // multiplication.
            const KARATSUBA_RELATIVE = 0.8;
            /**
             * Indicates if WebAssembly is enabled or not.
             */
            uli.wasm = true;
            /**
             * Maximal number of limbs in an uli_t.
             */
            uli.MAX_LIMBS = 3500;
            /**
             * Maximum number of bits in an uli_t.
             */
            uli.MAX_BITS = uli.MAX_LIMBS * 30;
            // Enabled WASM code starts here.
            /**
             * Byte offset at which the register is allocated.
             */
            const intOffset0 = 0;
            /**
             * Byte offset at which the register is allocated.
             */
            const intOffset1 = intOffset0 + 2 * uli.MAX_LIMBS;
            /**
             * Byte offset at which the register is allocated.
             */
            const intOffset2 = intOffset1 + uli.MAX_LIMBS;
            /**
             * First register (twice the length of the others).
             */
            let V0;
            /**
             * Second register.
             */
            let V1;
            /**
             * Third register.
             */
            let V2;
            /**
             * Stores the default compiled implementation of the muladd_loop() as
             * a hexadecimal string.
             */
            const default_wasm = "0061736d01000000011e0460000060077f7f7f7f7f7f7f017f60087f7f7f7f7f7f7f7f006000017f0305040001020305030100020632087f0141c0bd070b7f004180080b7f004180080b7f0041c0bd030b7f004180080b7f0041c0bd070b7f0041000b7f0041010b07aa010c066d656d6f72790200115f5f7761736d5f63616c6c5f63746f727300000b6d756c6164645f6c6f6f700001046461746103010d6d756c5f6d6f6e745f6c6f6f7000020b646174615f6f666673657400030c5f5f64736f5f68616e646c6503020a5f5f646174615f656e6403030d5f5f676c6f62616c5f6261736503040b5f5f686561705f6261736503050d5f5f6d656d6f72795f6261736503060c5f5f7461626c655f6261736503070afb030402000b930101027e2006ad421e8621070240200220034e0d0020014102744180888080006a220120034102746a2106200041027420054102746a200241027422036a4180888080006a2102200120036a21032004ad2108034020022007421e8820023502007c200335020020087e7c2207a741ffffffff0371360200200241046a2102200341046a22032006490d000b0b2007421e88a70bd70204017f027e027f017e200041027420074102746a4180888080006a210802400240200341014e0d00420021090c010b200820014102744180888080006a3502002004ad220a7e2008280200220bad7c20024102744180888080006a220c350200200b20056c200620046c6a41ffffffff0371ad220d7e7c2209a741ffffffff03713602002009421e882109024020034101470d00200841046a21080c010b200c20034102746a2105200741027420004102746a41046a2106200141027441046a2101200241027441046a210341808880800021080340200820066a2204200920043502007c200820016a350200200a7e7c200820036a350200200d7e7c2209a741ffffffff03713602002009421e882109200841046a220820036a2005490d000b200741027420004102746a20086a41046a21080b2008200920083502007c2209421e883e020420082009a741ffffffff03713602000b08004180888080000b0058046e616d65013d0400115f5f7761736d5f63616c6c5f63746f7273010b6d756c6164645f6c6f6f70020d6d756c5f6d6f6e745f6c6f6f70030b646174615f6f6666736574071201000f5f5f737461636b5f706f696e74657200360970726f647563657273010c70726f6365737365642d6279010c5562756e747520636c616e670f31342e302e302d317562756e747531";
            /**
             * Initializes the WASM code to be callable from a WebAssembly instance.
             *
             * @param instance - Web Assembly instance.
             */
            function initialize_instance(instance) {
                // We avoid any asynchronous calls here by exploiting that the
                // assembly code is embedded in the code itself.
                /* eslint-disable @typescript-eslint/no-explicit-any */
                const e = instance.exports;
                /* eslint-enable @typescript-eslint/no-explicit-any */
                const memory = e["memory"];
                const buffer = memory.buffer;
                const data_offset = e["data_offset"];
                // Initializes the global variables used by the WASM code.
                uli.muladd_loop = e["muladd_loop"];
                uli.mul_mont_loop = e["mul_mont_loop"];
                const byteOffset0 = data_offset();
                const byteOffset1 = byteOffset0 + 2 * uli.MAX_LIMBS * 4;
                const byteOffset2 = byteOffset1 + uli.MAX_LIMBS * 4;
                V0 = new Int32Array(buffer, byteOffset0, 2 * uli.MAX_LIMBS);
                V1 = new Int32Array(buffer, byteOffset1, uli.MAX_LIMBS);
                V2 = new Int32Array(buffer, byteOffset2, uli.MAX_LIMBS);
            }
            /**
             * Initializes the WASM code to be callable.
             *
             * @param wasmBuffer - ArrayBuffer containing the WASM code.
             */
            function initialize(wasmBuffer) {
                let buffer;
                if (typeof wasmBuffer === "undefined") {
                    buffer = hexToArrayBuffer(default_wasm);
                } else {
                    buffer = wasmBuffer;
                }
                const module = new WebAssembly.Module(buffer);
                const instance = new WebAssembly.Instance(module);
                initialize_instance(instance);
            }
            uli.initialize = initialize;
            // Initialize with default WASM code if any.
            initialize();
            // Enabled WASM code ends here
            // Removed TypeScript code here.
            /**
             * Returns the sign extension mask of the given uli.
             *
             * @param x - Integer.
             */
            function sign_mask(x) {
                return ((x[x.length - 1] & 0x20000000) == 0 ? 0 : 0x3fffffff);
            }
            uli.sign_mask = sign_mask;
            /**
             * Sets x = 0.
             *
             * @param x - Variable.
             */
            function setzero(x) {
                for (let i = 0; i < x.length; i++) {
                    x[i] = 0;
                }
            }
            uli.setzero = setzero;
            /**
             * Allocates new variable initialized to zero with the given number of
             * limbs.
             *
             * @param limbs - Number of limbs.
             * @returns Zero with the given number of limbs.
             */
            function new_uli(limbs) {
                const x = [];
                x.length = limbs;
                setzero(x);
                return x;
            }
            uli.new_uli = new_uli;

            function set(w, x) {
                if (typeof x === "number") {
                    setzero(w);
                    let i = 0;
                    while (i < w.length && x != 0) {
                        w[i] = x & 0x3fffffff;
                        x >>= 30;
                        i++;
                    }
                } else {
                    const len = w.length < x.length ? w.length : x.length;
                    let i = 0;
                    while (i < len) {
                        w[i] = x[i];
                        i++;
                    }
                    const mask = ((x[x.length - 1] & 0x20000000) == 0 ? 0 : 0x3fffffff);
                    while (i < w.length) {
                        w[i] = mask;
                        i++;
                    }
                }
            }
            uli.set = set;
            /**
             * Returns a copy of the input, possibly with additional limbs
             * with sign extension.
             *
             * @param x - Signed integer.
             * @param limbs - Number of limbs in the copy, if larger than the
             * number of limbs in x.
             * @returns Copy of x.
             */
            function copy_uli(x, limbs = 0) {
                const w = new_uli(Math.max(x.length, limbs));
                set(w, x);
                return w;
            }
            uli.copy_uli = copy_uli;
            /**
             * Returns the index of the most significant word in a non-negative
             * integer.
             *
             * @param x - Unsigned integer.
             * @returns Index of the most significant word in x.
             */
            function msword(x, mask = 0) {
                for (let i = x.length - 1; i > 0; i--) {
                    if (x[i] !== mask) {
                        return i;
                    }
                }
                return 0;
            }
            uli.msword = msword;
            /**
             * Resizes the variable to the smallest number of limbs that represent
             * the same integer in two's complement.
             *
             * @param x - Signed integer.
             */
            function normalize(x) {
                if (x.length > 1) {
                    const mask = ((x[x.length - 1] & 0x20000000) == 0 ? 0 : 0x3fffffff);
                    const msw = msword(x, mask);
                    const mask_msb = mask & 0x20000000;
                    if ((x[msw] & 0x20000000) == mask_msb) {
                        x.length = msw + 1;
                    } else {
                        x.length = msw + 2;
                    }
                }
            }
            uli.normalize = normalize;
            /**
             * Returns a normalized copy of x.
             *
             * @param x - Signed integer.
             */
            function normalized(x) {
                const y = copy_uli(x);
                normalize(y);
                return y;
            }
            uli.normalized = normalized;
            /**
             * Resizes the uli_t to the given number of limbs, either by
             * truncating or by adding leading words with sign extension.
             *
             * @param x - Signed integer.
             * @param limbs - New number of limbs.
             */
            function resize(x, limbs) {
                const mask = ((x[x.length - 1] & 0x20000000) == 0 ? 0 : 0x3fffffff);
                let i = x.length;
                x.length = limbs;
                while (i < limbs) {
                    x[i] = mask;
                    i++;
                }
            }
            uli.resize = resize;
            /**
             * Changes the wordsize of a normalized non-negative integer from one
             * wordsize to another with sign extension.
             *
             * @param x - Unsigned integer.
             * @param xwordsize - Original bitsize of words (at most 32).
             * @param ywordsize - Bitsize of output words (at most 32).
             * @returns Representation of the input array of bits with new
             * wordsize.
             */
            function change_wordsize(x, xwordsize, ywordsize) {
                const xmask_msb = 1 << (xwordsize - 1);
                const ymask_all = 0xffffffff >>> 32 - ywordsize;
                // Encodes bit position in x.
                let i = 0;
                let ib = 0;
                // Encodes bit position in y.
                let j = 0;
                let jb = 0;
                const ylen = Math.floor((xwordsize + ywordsize - 1) / ywordsize);
                // Array with new wordsize holding result.
                const y = new_uli(ylen);
                while (i < x.length) {
                    // Insert as many bits as possible from x[i] into y[j].
                    y[j] |= ((x[i] >>> ib) << jb) & ymask_all;
                    // Number of inserted bits.
                    const bits = xwordsize - ib < ywordsize - jb ? xwordsize - ib : ywordsize - jb;
                    // Determine if we have filled y[j] and if so, then move on
                    // to the beginning of the next word.
                    jb = jb + bits;
                    if (jb === ywordsize) {
                        j++;
                        jb = 0;
                    }
                    // Determine the number of remaining unused bits of x[i] and
                    // if none are left, then move on to the next word.
                    ib = ib + bits;
                    if (ib === xwordsize) {
                        i++;
                        ib = 0;
                    }
                }
                const ymask_sign = (x[x.length - 1] & xmask_msb) != 0 ? ymask_all : 0;
                if (jb > 0) {
                    y[j] |= (ymask_sign << jb) & ymask_all;
                }
                return y;
            }
            /**
             * Returns a uint8_t array representation in two's complement of a
             * normalized integer in two's complement representation.
             *
             * @param x - Integer in two's complement representation.
             * @returns Byte array representation in two's complement of this
             * integer.
             */
            function to_uint8_array(x) {
                /* eslint-disable @typescript-eslint/no-explicit-any */
                return change_wordsize(x, 30, 8);
                /* eslint-enable @typescript-eslint/no-explicit-any */
            }
            uli.to_uint8_array = to_uint8_array;
            /**
             * Returns a uli_t representation in two's complement of a normalized
             * uint8_t array in two's complement representation of an integer.
             *
             * @param x - Normalized uint8_t array two's complement representation
             * of an integer.
             * @returns Integer in two's complement representation.
             */
            function from_uint8_array(x) {
                /* eslint-disable @typescript-eslint/no-explicit-any */
                return change_wordsize(x, 8, 30);
                /* eslint-enable @typescript-eslint/no-explicit-any */
            }
            uli.from_uint8_array = from_uint8_array;
            /**
             * Returns a normalized non-negative integer with the given number of
             * nominal random bits.
             *
             * @param bitlen - Nominal number of bits.
             * @param rs - Source of randomness.
             */
            function new_random(bitlen, rs) {
                const len = Math.floor((bitlen + 7) / 8);
                const rem = bitlen % 8;
                const bytes = rs.getBytes(len + 1);
                bytes[bytes.length - 1] = 0;
                bytes[bytes.length - 2] &= 0xff >>> ((8 - rem) % 8);
                const x = from_uint8_array(bytes);
                normalize(x);
                return x;
            }
            uli.new_random = new_random;
            /**
             * Sets w to a non-negative random integer with the given nominal
             * number of bits or as many there is room for in w as a non-negative
             * integer.
             *
             * @param w - Variable.
             * @param bitlen - Nominal number of bits.
             * @param rs - Source of randomness.
             */
            function random(w, bitlen, rs) {
                const x = new_random(bitlen, rs);
                set(w, x);
                w[w.length - 1] &= ~0x20000000;
            }
            uli.random = random;
            /**
             * Sets x = 1.
             *
             * @param x - Variable.
             */
            function setone(x) {
                setzero(x);
                x[0] = 1;
            }
            uli.setone = setone;
            /**
             * Returns the index of the most significant bit of a non-negative
             * integer x.
             *
             * @param x - Unsigned integer.
             * @returns Index of the most significant bit of x.
             */
            function msbit(x) {
                for (let i = x.length - 1; i >= 0; i--) {
                    if (x[i] !== 0) {
                        let msbit = (i + 1) * 30 - 1;
                        for (let mask = 0x20000000; mask > 0; mask >>>= 1) {
                            if ((x[i] & mask) === 0) {
                                msbit--;
                            } else {
                                return msbit;
                            }
                        }
                    }
                }
                return 0;
            }
            uli.msbit = msbit;
            /**
             * Returns the index of a the least significant set bit in a
             * non-negative integer or zero if it is zero.
             *
             * @param x - Unsigned integer.
             * @returns Index of a the least significant set bit in the input or
             * zero if the input is zero.
             */
            function lsbit(x) {
                let i = 0;
                while (i < x.length && x[i] === 0) {
                    i++;
                }
                if (i == x.length) {
                    return 0;
                } else {
                    let j = 0;
                    while ((x[i] >>> j & 0x1) === 0) {
                        j++;
                    }
                    return i * 30 + j;
                }
            }
            uli.lsbit = lsbit;
            /**
             * Returns 1 or 0 depending on if the bit at the index is set or
             * not. Accessing a bit outside the number of limbs returns the most
             * significant bit.
             *
             * @param x - Signed integer.
             * @param index - Index of bit.
             * @returns Bit at the given position.
             */
            function getbit(x, index) {
                let i = Math.floor(index / 30);
                let b = index % 30;
                if (i >= x.length) {
                    i = x.length - 1;
                    b = 30 - 1;
                }
                return (x[i] >> b) & 0x1;
            }
            uli.getbit = getbit;
            /**
             * Sets a bit to the given value. This may change the sign of x.
             *
             * <p>
             *
             * ASSUMES: 0 <= index < x.length
             *
             * @param x - Signed integer.
             * @param index - Index of bit.
             * @param bit - Bit.
             */
            function setbit(x, index, bit) {
                const i = Math.floor(index / 30);
                const b = index % 30;
                if (bit == 1) {
                    x[i] |= 1 << b;
                } else if (bit == 0) {
                    x[i] &= (~(1 << b)) & 0x3fffffff;
                }
            }
            uli.setbit = setbit;
            /**
             * Computes the Hamming weight of x.
             *
             * @param x - Value.
             * @returns Hamming weight of x.
             */
            function weight_word(x) {
                x = x - ((x >>> 1) & 0x55555555);
                x = (x & 0x33333333) + ((x >>> 2) & 0x33333333);
                return ((x + (x >>> 4) & 0xf0f0f0f) * 0x1010101) >>> 24;
            }
            uli.weight_word = weight_word;
            /**
             * Returns the number of bits set in a non-negative integer.
             *
             * @param x - Signed integer.
             * @returns Bits set in x.
             */
            function weight(x) {
                let count = 0;
                for (let i = 0; i < x.length; i++) {
                    count += weight_word(x[i]);
                }
                return count;
            }
            uli.weight = weight;
            /**
             * Checks if all elements of the input are zero.
             *
             * @param x - Array of integers.
             * @returns True or false depending on if all elements are zero or not.
             */
            function iszero(x, s = 0) {
                for (let i = s; i < x.length; i++) {
                    if (x[i] !== 0) {
                        return false;
                    }
                }
                return true;
            }
            uli.iszero = iszero;
            /**
             * Checks if the input is one.
             *
             * @param x - Signed integer.
             */
            function isone(x) {
                if (x[0] != 1) {
                    return false;
                }
                for (let i = 1; i < x.length; i++) {
                    if (x[i] == 0) {
                        return false;
                    }
                }
                return true;
            }
            uli.isone = isone;
            /**
             * Returns -1, 0, or 1 depending on if x < y, x == y, or
             * x > y, respectively.
             *
             * @param x - Unsigned integer.
             * @param y - Unsigned integer.
             * @returns Sign of x - y.
             */
            function cmp(x, y) {
                let sign = 1;
                if (x.length < y.length) {
                    const t = x;
                    x = y;
                    y = t;
                    sign = -1;
                }
                let i = x.length - 1;
                while (i >= y.length) {
                    if (x[i] === 0) {
                        i--;
                    } else {
                        return sign;
                    }
                }
                while (i >= 0) {
                    if (x[i] > y[i]) {
                        return sign;
                    } else if (x[i] < y[i]) {
                        return -sign;
                    }
                    i--;
                }
                return 0;
            }
            uli.cmp = cmp;
            /**
             * Shifts the given number of bits within the existing limbs, i.e.,
             * the allocated space is not expanded. Shifting may create an integer
             * with a leading one.
             *
             * <p>
             *
             * ASSUMES: offset >= 0.
             *
             * @param x - Signed integer.
             * @param offset - Number of bit positions to shift.
             */
            // This is slow and ugly, but easy to follow.
            /* eslint-disable sonarjs/cognitive-complexity */
            function shiftleft(x, offset) {
                if (offset <= 0) {
                    return;
                } else if (offset >= x.length * 30) {
                    setzero(x);
                    return;
                } else {
                    // Left shift words.
                    const wo = Math.floor(offset / 30);
                    if (wo > 0) {
                        let j = x.length - 1;
                        while (j >= wo) {
                            x[j] = x[j - wo];
                            j--;
                        }
                        while (j >= 0) {
                            x[j] = 0;
                            j--;
                        }
                    }
                    // Left shift bits within words.
                    const bo = offset % 30;
                    const nbo = 30 - bo;
                    if (bo !== 0) {
                        for (let i = x.length - 1; i > 0; i--) {
                            const h = x[i] << bo & 0x3fffffff;
                            const l = x[i - 1] >>> nbo;
                            x[i] = h | l;
                        }
                        x[0] = x[0] << bo & 0x3fffffff;
                    }
                }
            }
            uli.shiftleft = shiftleft;
            /* eslint-enable sonarjs/cognitive-complexity */
            /**
             * Shifts the given number of bits to the right within
             * the allocated space, i.e., the space is not reduced.
             *
             * <p>
             *
             * ASSUMES: offset >= 0.
             *
             * @param x - Array to be shifted.
             * @param offset - Number of bit positions to shift.
             */
            // This is slow and ugly, but easy to follow.
            /* eslint-disable sonarjs/cognitive-complexity */
            function shiftright(x, offset) {
                if (offset <= 0) {
                    return;
                } else if (offset >= x.length * 30) {
                    setzero(x);
                    return;
                } else {
                    // Right shift words.
                    const wo = Math.floor(offset / 30);
                    if (wo > 0) {
                        let j = 0;
                        while (j < x.length - wo) {
                            x[j] = x[j + wo];
                            j++;
                        }
                        while (j < x.length) {
                            x[j] = 0;
                            j++;
                        }
                    }
                    // Right shift bits within words.
                    const bo = offset % 30;
                    const nbo = 30 - bo;
                    if (bo !== 0) {
                        for (let i = 0; i < x.length - 1; i++) {
                            const h = x[i] >>> bo;
                            const l = x[i + 1] << nbo & 0x3fffffff;
                            x[i] = h | l;
                        }
                        x[x.length - 1] = x[x.length - 1] >>> bo;
                    }
                }
            }
            uli.shiftright = shiftright;
            /* eslint-enable sonarjs/cognitive-complexity */
            /**
             * Sets w = x + y mod 2^(w.length * 30) with sign extension
             * for x and y by default, without otherwise.
             *
             * <p>
             *
             * References: HAC 14.7.
             *
             * @param w - Variable which may be x or y.
             * @param x - Signed term.
             * @param y - Signed term.
             * param signed - Indicates unsigned addition.
             */
            function add(w, x, y, signed = 1) {
                let tmp;
                let c = 0;
                // Make sure that x is at least as long as y.
                if (x.length < y.length) {
                    const t = x;
                    x = y;
                    y = t;
                }
                const xmask = signed * ((x[x.length - 1] & 0x20000000) == 0 ? 0 : 0x3fffffff);
                const ymask = signed * ((y[y.length - 1] & 0x20000000) == 0 ? 0 : 0x3fffffff);
                const wlen = w.length;
                const ylen = wlen < y.length ? wlen : y.length;
                const xlen = wlen < x.length ? wlen : x.length;
                // Add words of x and y with carry.
                let i = 0;
                while (i < ylen) {
                    tmp = x[i] + y[i] + c;
                    w[i] = tmp & 0x3fffffff;
                    c = tmp >> 30;
                    i++;
                }
                while (i < xlen) {
                    tmp = x[i] + ymask + c;
                    w[i] = tmp & 0x3fffffff;
                    c = tmp >> 30;
                    i++;
                }
                while (i < wlen) {
                    tmp = xmask + ymask + c;
                    w[i] = tmp & 0x3fffffff;
                    c = tmp >> 30;
                    i++;
                }
            }
            uli.add = add;
            /* eslint-disable no-extra-parens */
            /**
             * Sets w to the negative of x in two's complement
             * representation using L * 30 bits, where L is the number of
             * limbs in w.
             *
             * <p>
             *
             * ASSUMES: w has at least as many limbs as x.
             *
             * @param w - Variable which may be x.
             * @param x - Signed integer.
             */
            function neg(w, x) {
                let tmp;
                let c = 1;
                let i = 0;
                while (i < x.length) {
                    tmp = (x[i] ^ 0x3fffffff) + c;
                    w[i] = tmp & 0x3fffffff;
                    c = tmp >> 30;
                    i++;
                }
                while (i < w.length) {
                    tmp = 0x3fffffff + c;
                    w[i] = tmp & 0x3fffffff;
                    c = tmp >> 30;
                    i++;
                }
            }
            uli.neg = neg;
            /* eslint-enable no-extra-parens */
            /**
             * Interprets x as an integer in two's complement representation,
             * replaces it by the absolute value in two's complement and returns
             * the sign of x.
             *
             * @param x - Signed integer.
             * @return Sign of x.
             */
            function tosigned(x) {
                let sign;
                if ((x[x.length - 1] & 0x20000000) != 0) {
                    sign = -1;
                    neg(x, x);
                } else if (iszero(x)) {
                    sign = 0;
                } else {
                    sign = 1;
                }
                return sign;
            }
            uli.tosigned = tosigned;
            /**
             * Sets w = x - y if x >= y and otherwise it simply
             * propagates -1, i.e., 0x3fffffff, through the remaining words of
             * w.
             *
             * <p>
             *
             * ASSUMES: for normal use x >= y, and x and y have B and B' bits and
             * w can store B bits. A natural choice is to use L >= L' limbs for x
             * and y respectively and L limbs for w, but the number of limbs can
             * be arbitrary.
             *
             * <p>
             *
             * References: HAC 14.9.
             *
             * @param w - Variable.
             * @param x - Unsigned term.
             * @param y - Unsigned term.
             * @returns Finally carry.
             */
            function sub(w, x, y) {
                let tmp = 0;
                let c = 0;
                // Subtract words of x and y with carry.
                let len = Math.min(w.length, x.length, y.length);
                let i = 0;
                while (i < len) {
                    tmp = x[i] - y[i] + c;
                    w[i] = tmp & 0x3fffffff;
                    c = tmp >> 30;
                    i++;
                }
                // Propagate carry along with one of x and y.
                if (x.length > y.length) {
                    len = w.length < x.length ? w.length : x.length;
                    while (i < len) {
                        tmp = x[i] + c;
                        w[i] = tmp & 0x3fffffff;
                        c = tmp >> 30;
                        i++;
                    }
                } else {
                    len = w.length < y.length ? w.length : y.length;
                    while (i < len) {
                        tmp = -y[i] + c;
                        w[i] = tmp & 0x3fffffff;
                        c = tmp >> 30;
                        i++;
                    }
                }
                // Propagate carry.
                while (i < w.length) {
                    tmp = w[i] + c;
                    w[i] = tmp & 0x3fffffff;
                    c = tmp >> 30;
                    i++;
                }
                return c;
            }
            uli.sub = sub;
            // Removed TypeScript code here.
            /* eslint-disable no-extra-parens */
            /**
             * Sets w = x * x.
             *
             * <p>
             *
             * ASSUMES: x is non-negative with L and L' limbs respectively, and
             * that w has at least L + L' limbs.
             *
             * <p>
             *
             * References: HAC 14.16.
             *
             * @param w - Unsigned integer.
             * @param x - Unsigned factor.
             */
            function square_naive(w, x) {
                const n = msword(x) + 1;
                let c;
                let sc = 0;
                setzero(w);
                V0.set(w);
                V1.set(x);
                let i = 0;
                while (i < n) {
                    // This computes
                    // (c, w[2 * i]) = w[2 * i] + x[i] * x[i],
                    // where the result is interpreted as a pair of integers of
                    // sizes (30 + 1, 30):
                    const h = (V1[i] >>> 15);
                    let l = (V1[i] & 0x7fff);
                    const cross = l * h << 1;
                    // This implies:
                    // l, h < 2^15
                    // cross < 2^(30 + 1)
                    l = (V0[i << 1] | 0) + l * l +
                        ((cross & 0x7fff) << 15);
                    // This implies, so we can safely use bit operators on l;
                    // l < 2^(30 + 2)
                    c = ((l >>> 30) + (cross >>> 15) + h * h) | 0;
                    V0[i << 1] = l & 0x3fffffff;
                    // This implies, which is a requirement for the loop.
                    // c < 2^(30 + 1)
                    //
                    // The standard way to do this would be to simply allow each
                    // w[i + n] to intermittently hold a WORDSIZE + 1 bit integer
                    // (or overflow register), but for 30-bit words this causes
                    // overflow in muladd_loop.
                    sc = uli.muladd_loop(intOffset0, intOffset1, i + 1, n, V1[i] << 1, i, c) + sc;
                    V0[i + n] = sc & 0x3fffffff;
                    sc >>>= 30;
                    i++;
                }
                for (let q = 0; q < w.length; q++) {
                    w[q] = V0[q];
                }
            }
            uli.square_naive = square_naive;
            /* eslint-enable no-extra-parens */
            /**
             * Splits x into two parts l and h of equal and
             * predetermined size, i.e., the lengths of the lists l and h
             * determines how x is split.
             *
             * @param l - Variable set to the least significant words of x.
             * @param h - Variable set to the most significant words of x.
             * @param x - Unsigned integer.
             */
            function karatsuba_split(l, h, x) {
                const lm = l.length < x.length ? l.length : x.length;
                let i = 0;
                while (i < lm) {
                    l[i] = x[i];
                    i++;
                }
                while (i < l.length) {
                    l[i] = 0;
                    i++;
                }
                const hm = h.length < x.length - i ? h.length : x.length - i;
                let j = 0;
                while (j < hm) {
                    h[j] = x[i];
                    j++;
                    i++;
                }
                while (j < h.length) {
                    h[j] = 0;
                    j++;
                }
            }
            /**
             * Sets w = x * x. The depth parameter determines the
             * recursive depth of function calls and must be less than 3.
             *
             * <p>
             *
             * ASSUMES: x is non-negative and has L limbs and w has at least 2 * L
             * limbs.
             *
             * <p>
             *
             * References: HAC <sectionsign>14.2,
             * https://en.wikipedia.org/wiki/Karatsuba_algorithm
             *
             * @param w - Variable.
             * @param x - Unsgined factor.
             * @param depth - Recursion depth of the Karatsuba algorithm.
             */
            /* eslint-disable sonarjs/cognitive-complexity */
            uli.square_karatsuba = (function() {
                // Scratch space indexed by depth. These arrays are resized as
                // needed in each call. In typical cryptographic applications big
                // integers have the same size, so no resize takes place.
                const scratch = [
                    [
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        []
                    ],
                    [
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        []
                    ],
                    [
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        []
                    ]
                ];
                return function(w, x, depth, len) {
                    // Make sure that the arrays have proper sizes.
                    if (typeof len === "undefined") {
                        len = x.length;
                    }
                    // Access scratch space of this depth. Due to the depth-first
                    // structure of this algorithm no overwriting can take place.
                    const s = scratch[depth];
                    const h = s[0];
                    const l = s[1];
                    const z2 = s[2];
                    const z1 = s[3];
                    const z0 = s[4];
                    const xdif = s[5];
                    len += len & 0x1;
                    const hlen = len >>> 1;
                    if (h.length != hlen) {
                        // Leading zero to ensure non-negative parts.
                        resize(h, hlen);
                        resize(l, hlen);
                        // Same size as x.
                        resize(z2, len);
                        resize(z1, len);
                        resize(z0, len);
                        // Half the size of x.
                        resize(xdif, hlen);
                    }
                    // Split the input x into higher and lower parts.
                    karatsuba_split(l, h, x);
                    if (depth < 1) {
                        square_naive(z2, h);
                        square_naive(z0, l);
                    } else {
                        uli.square_karatsuba(z2, h, depth - 1);
                        uli.square_karatsuba(z0, l, depth - 1);
                    }
                    if (cmp(h, l) < 0) {
                        sub(xdif, l, h);
                    } else {
                        sub(xdif, h, l);
                    }
                    if (depth < 1) {
                        square_naive(z1, xdif);
                    } else {
                        uli.square_karatsuba(z1, xdif, depth - 1);
                    }
                    // Specialized loop to compute:
                    // b^2 * z2 + b * (z0 - z1 + z2) + z0
                    // where b = 2^(hlen * 30). We do it as follows:
                    // w = b^2 * z2 + b * (z0 + z2) + z0
                    // w = w - b * z1
                    const l0 = w.length < hlen ? w.length : hlen;
                    const l1 = w.length < len ? w.length : len;
                    const l2 = w.length < len + hlen ? w.length : len + hlen;
                    const l3 = w.length < 2 * len ? w.length : 2 * len;
                    const l4 = l2;
                    const l5 = l3;
                    let tmp;
                    let c = 0;
                    let i = 0;
                    while (i < l0) {
                        w[i] = z0[i];
                        i++;
                    }
                    while (i < l1) {
                        tmp = z0[i] + z0[i - hlen] + z2[i - hlen] + c;
                        w[i] = tmp & 0x3fffffff;
                        c = tmp >>> 30;
                        // This implies, so we can precisely add within 32 bits using
                        // *unsigned* right shift.
                        // tmp < 2^{30 + 2}
                        i++;
                    }
                    while (i < l2) {
                        tmp = z0[i - hlen] + z2[i - hlen] + z2[i - len] + c;
                        w[i] = tmp & 0x3fffffff;
                        c = tmp >>> 30;
                        // This implies, so we can precisely add within 32 bits using
                        // *unsigned* right shift.
                        // tmp < 2^(30 + 2)
                        i++;
                    }
                    while (i < l3) {
                        tmp = z2[i - len] + c;
                        w[i] = tmp & 0x3fffffff;
                        c = tmp >>> 30;
                        i++;
                    }
                    // We can ignore the positive carry here, since we know that
                    // the final result fits within 2 * len words, but we need to
                    // subtract z1 at the right position.
                    i = hlen;
                    c = 0;
                    while (i < l4) {
                        tmp = w[i] - z1[i - hlen] + c;
                        w[i] = tmp & 0x3fffffff;
                        c = tmp >> 30;
                        i++;
                    }
                    while (i < l5) {
                        tmp = w[i] + c;
                        w[i] = tmp & 0x3fffffff;
                        c = tmp >> 30;
                        i++;
                    }
                    // Again, we ignore the carry.
                    // This guarantees that the result is correct even if w has
                    // more than L + L' words.
                    while (i < w.length) {
                        w[i] = 0;
                        i++;
                    }
                };
            })();
            /* eslint-enable sonarjs/cognitive-complexity */
            /**
             * Sets w = x * x.
             *
             * <p>
             *
             * ASSUMES: x is non-negative with L and L' limbs respectively, and
             * that w has at least L + L' limbs.
             *
             * <p>
             *
             * References: HAC 14.16.
             *
             * @param w - Variable.
             * @param x - Unsigned factor.
             * @param len - Actual lengths of inputs. Useful when stored in longer arrays.
             */
            function square(w, x, len) {
                // Only use Karatsuba if the inputs are big enough.
                const xlen = msword(x) + 1;
                if (xlen > KARATSUBA_SQR_THRESHOLD) {
                    uli.square_karatsuba(w, x, 0, len);
                } else {
                    square_naive(w, x);
                }
            }
            uli.square = square;
            /**
             * Sets w = x * y.
             *
             * <p>
             *
             * ASSUMES: x and y are both non-negative with W and W' limbs
             * respectively, and that w has at least W + W' limbs.
             *
             * <p>
             *
             * References: HAC 14.12.
             *
             * @param w - Variable.
             * @param x - Unsigned factor.
             * @param y - Unsigned factor.
             */
            function mul_naive(w, x, y) {
                const n = msword(x) + 1;
                const t = msword(y) + 1;
                setzero(w);
                V1.set(x);
                V0.set(w);
                for (let i = 0; i < t; i++) {
                    V0[i + n] = uli.muladd_loop(intOffset0, intOffset1, 0, n, y[i], i, 0);
                }
                for (let q = 0; q < w.length; q++) {
                    w[q] = V0[q];
                }
            }
            uli.mul_naive = mul_naive;
            /**
             * Sets w = x * y. The depth parameter determines the
             * recursive depth of function calls and must be less than 3.
             *
             * <p>
             *
             * ASSUMES: x and y are both non-negative, with W and W' limbs
             * respectively, and that w has at least W + W' limbs.
             *
             * <p>
             *
             * References: HAC <sectionsign>14.2,
             * https://en.wikipedia.org/wiki/Karatsuba_algorithm
             *
             * @param w - Variable.
             * @param x - Unsigned factor.
             * @param y - Unsigned factor.
             * @param depth - Recursion depth of the Karatsuba algorithm.
             * @param len - Actual lengths of inputs. Useful when stored in longer arrays.
             */
            uli.mul_karatsuba = (function() {
                // Scratch space indexed by depth. These arrays are resized as
                // needed in each call. In typical cryptographic applications big
                // integers have the same size, so no resize takes place.
                const scratch = [
                    [
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        []
                    ],
                    [
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        []
                    ],
                    [
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        []
                    ]
                ];
                return function(w, x, y, depth, len) {
                    // Make sure that the lengths of the arrays are equal and
                    // even.
                    if (typeof len === "undefined") {
                        len = Math.max(x.length, y.length);
                    }
                    // Access scratch space of this depth. Due to the depth-first
                    // structure of this algorithm no overwriting can take place.
                    const s = scratch[depth];
                    const hx = s[0];
                    const lx = s[1];
                    const hy = s[2];
                    const ly = s[3];
                    const z2 = s[4];
                    const z1 = s[5];
                    const z0 = s[6];
                    const xsum = s[7];
                    const ysum = s[8];
                    const tmp1 = s[9];
                    const tmp2 = s[10];
                    setzero(w);
                    len += len % 2;
                    const hlen = len >>> 1;
                    if (hx.length !== hlen) {
                        // Leading zero to ensure non-negative parts.
                        resize(hx, hlen);
                        resize(lx, hlen);
                        resize(hy, hlen);
                        resize(ly, hlen);
                        // Same size as x.
                        resize(z2, len);
                        resize(z1, len + 2);
                        resize(z0, len);
                        // Sum of two halves may give an extra word.
                        resize(xsum, hlen + 1);
                        resize(ysum, hlen + 1);
                        // Product of two such halves.
                        resize(tmp1, len + 2);
                        resize(tmp2, len + 2);
                    }
                    // Split the input x and y into higher and lower parts.
                    karatsuba_split(lx, hx, x);
                    karatsuba_split(ly, hy, y);
                    if (depth < 1) {
                        mul_naive(z2, hx, hy);
                        mul_naive(z0, lx, ly);
                    } else {
                        uli.mul_karatsuba(z2, hx, hy, depth - 1);
                        uli.mul_karatsuba(z0, lx, ly, depth - 1);
                    }
                    add(xsum, hx, lx, 0);
                    add(ysum, hy, ly, 0);
                    if (depth < 1) {
                        mul_naive(tmp1, xsum, ysum);
                    } else {
                        uli.mul_karatsuba(tmp1, xsum, ysum, depth - 1);
                    }
                    sub(tmp2, tmp1, z2);
                    sub(z1, tmp2, z0);
                    // Specialized loop to combine the results.
                    // Avoid increasing the length of w.
                    const l0 = w.length < hlen ? w.length : hlen;
                    const l1 = w.length < len ? w.length : len;
                    const l2 = w.length < len + hlen + 2 ? w.length : len + hlen + 2;
                    const l3 = w.length < 2 * len ? w.length : 2 * len;
                    let tmp;
                    let c = 0;
                    let i = 0;
                    while (i < l0) {
                        w[i] = z0[i];
                        i++;
                    }
                    while (i < l1) {
                        tmp = z0[i] + z1[i - hlen] + c;
                        w[i] = tmp & 0x3fffffff;
                        c = tmp >>> 30;
                        i++;
                    }
                    while (i < l2) {
                        tmp = z1[i - hlen] + z2[i - len] + c;
                        w[i] = tmp & 0x3fffffff;
                        c = tmp >>> 30;
                        i++;
                    }
                    while (i < l3) {
                        tmp = z2[i - len] + c;
                        w[i] = tmp & 0x3fffffff;
                        c = tmp >>> 30;
                        i++;
                    }
                    // This guarantees that the result is correct even if w has more
                    // than L + L' words.
                    while (i < w.length) {
                        w[i] = 0;
                        i++;
                    }
                };
            })();
            /**
             * Sets w = x * y.
             *
             * <p>
             *
             * ASSUMES: x and y are both non-negative with W and W' limbs
             * respectively, and that w has at least W + W' limbs.
             *
             * @param w - Variable.
             * @param x - Unsigned factor.
             * @param y - Unsigned factor.
             * @param len - Actual lengths of inputs. Useful when stored in longer arrays.
             */
            function mul(w, x, y, len) {
                if (x === y) {
                    square(w, x, len);
                } else {
                    // Only use Karatsuba if the inputs are big enough and
                    // relatively balanced.
                    const xlen = msword(x) + 1;
                    const ylen = msword(y) + 1;
                    if (xlen > KARATSUBA_MUL_THRESHOLD &&
                        Math.min(xlen / ylen, ylen / xlen) > KARATSUBA_RELATIVE) {
                        uli.mul_karatsuba(w, x, y, 0, len);
                    } else {
                        mul_naive(w, x, y);
                    }
                }
            }
            uli.mul = mul;
            /* eslint-disable no-extra-parens */
            /**
             * Computes the 2-by-1 reciprocal of a word d.
             *
             * <p>
             *
             * ASSUMES: most significant bit of d is set, i.e., we have
             * 2^30/2 <= d < 2^30.
             *
             * <p>
             *
             * References: Functionally equivalent to RECIPROCAL_WORD in MG.
             *
             * @param d - Normalized divisor.
             * @returns 2-by-1 reciprocal of d.
             */
            /* eslint-disable prefer-const */
            uli.reciprocal_word = (function() {
                // Temporary variables.
                const q = [0, 0];
                const a = [0, 0];
                const p = [0, 0, 0];
                const r = [0, 0, 0];
                const one = [1];
                const zero = [0];
                const dd = [0, 0];
                return function(d) {
                    // Shift needed for numerator to fit in 53 bits.
                    let s;
                    // N < 2^53
                    let N;
                    // Estimate of (r >> s) / d)
                    let A;
                    // d as a uli_t.
                    dd[0] = d;
                    // r = 2^(2 * 30) - 1.
                    r[1] = 0x3fffffff;
                    r[0] = 0x3fffffff;
                    // q = 0
                    q[1] = 0;
                    q[0] = 0;
                    do {
                        // If r does not fit in a float64_t, we right-shift r
                        // before computing the estimated quotient.
                        s = Math.max(0, msbit(r) - 53);
                        // a = Math.floor((r >> s) / d);   (pseudocode)
                        N = r[1] * Math.pow(2, 30 - s) + (r[0] >> s);
                        A = Math.floor(N / d);
                        // Approximation of quotient as two-word integer.
                        a[0] = A & 0x3fffffff;
                        a[1] = (A >>> 30);
                        shiftleft(a, s);
                        // p = a * d
                        mul(p, a, dd);
                        // Correct the estimated quotient and remainder if needed.
                        // This should not happen often.
                        while (cmp(p, r) > 0) {
                            sub(a, a, one);
                            sub(p, p, dd);
                        }
                        // r = r - q * d
                        sub(r, r, p);
                        add(q, q, a);
                    } while (cmp(a, zero) > 0);
                    // For code like this it is not robust to condition on r < d,
                    // since it is conceivable that A and hence a is zero despite
                    // that r > d. This turns out to not be the case here, but we
                    // write defensive code.
                    while (cmp(r, dd) >= 0) {
                        add(q, q, one);
                        sub(r, r, dd);
                    }
                    // q = q - 2^30
                    return q[0] & 0x3fffffff;
                };
            })();
            /* eslint-enable prefer-const */
            /**
             * Computes the 3-by-2 reciprocal of d, where d has two
             * limbs/words.
             *
             * <p>
             *
             * ASSUMES: most significant bit of d is set, i.e., we have
             * 2^(2 * 30)/2 <= d < 2^(2*30).
             *
             * <p>
             *
             * References: Algorithm RECIPROCAL_WORD_3BY2 in MG.
             *
             * @param d - Normalized divisor.
             * @returns 3-by-2 reciprocal of d.
             */
            /* eslint-disable prefer-const */
            uli.reciprocal_word_3by2 = (function() {
                const t = [0, 0];
                return function(d) {
                    let cross;
                    let hx;
                    let lx;
                    let hy;
                    let ly;
                    let v = uli.reciprocal_word(d[1]);
                    // p = d1 * v mod 2^30
                    let p = (((((d[1] & 0x7fff) * (v & 0x7fff)) | 0) + ((((((d[1] >>> 15) * (v & 0x7fff)) | 0) + (d[1] & 0x7fff) * (v >>> 15)) & 0x7fff) << 15)) & 0x3fffffff);
                    // p = p + d0 mod 2^30
                    p = (p + d[0]) & 0x3fffffff;
                    // p < d0
                    if (p < d[0]) {
                        v--;
                        // p >= d1
                        if (p >= d[1]) {
                            v--;
                            p = p - d[1];
                        }
                        p = (p + 0x40000000 - d[1]) & 0x3fffffff;
                    }
                    // t = p * d0
                    hx = (v >>> 15);
                    lx = (v & 0x7fff);
                    hy = (d[0] >>> 15);
                    ly = (d[0] & 0x7fff);
                    cross = ((hx * ly) | 0) + lx * hy;
                    lx = ((lx * ly) | 0) + ((cross & 0x7fff) << 15);
                    t[1] = (hx * hy + (cross >>> 15) + (lx >>> 30)) | 0;
                    t[0] = lx & 0x3fffffff;
                    // p = p + t1 mod 2^30
                    p = (p + t[1]) & 0x3fffffff;
                    if (p < t[1]) {
                        v--;
                        // (p,t0) >= (d1,d0)
                        if (p > d[1] || (p === d[1] && t[0] >= d[0])) {
                            v--;
                        }
                    }
                    return v;
                };
            })();
            /* eslint-enable prefer-const */
            /**
             * Computes q and r such that u = q * d + r, where d has two
             * limbs/words, u has three limbs and three words, and 0 <= r < d.
             *
             * <p>
             *
             * ASSUMES: most significant bit of d is set, i.e., we have
             * 2^(2 * 30)/2 <= d < 2^(2*30).
             *
             * <p>
             *
             * References: Algorithm DIV3BY2 in MG.
             *
             * @param r - Two-word integer that ends up holding the remainder.
             * @param u - Three-word dividend.
             * @param d - Normalized divisor.
             * @param neg_d - Negative of d in two's complement.
             * @param v - 3by2 reciprocal of d.
             * @returns Integer quotient q = u / d.
             */
            uli.div3by2 = (function() {
                // Temporary variables.
                const q = [0, 0];
                const neg_t = [0, 0];
                return function(r, u, d, neg_d, v) {
                    let hx;
                    let lx;
                    let hy;
                    let ly;
                    let tmp = 0;
                    // (q1,q0) = v * u2
                    hx = (v >>> 15);
                    lx = (v & 0x7fff);
                    hy = (u[2] >>> 15);
                    ly = (u[2] & 0x7fff);
                    tmp = ((hx * ly) | 0) + lx * hy;
                    lx = ((lx * ly) | 0) + ((tmp & 0x7fff) << 15);
                    q[1] = (hx * hy + (tmp >>> 15) + (lx >>> 30)) | 0;
                    q[0] = lx & 0x3fffffff;
                    // q = q + (u2,u1)
                    tmp = q[0] + u[1];
                    q[0] = tmp & 0x3fffffff;
                    q[1] = (q[1] + u[2] + (tmp >>> 30)) & 0x3fffffff;
                    // r1 = u1 - q1 * d1 mod 2^30
                    hx = (q[1] >>> 15);
                    lx = (q[1] & 0x7fff);
                    hy = (d[1] >>> 15);
                    ly = (d[1] & 0x7fff);
                    tmp = ((hx * ly) | 0) + lx * hy;
                    lx = ((lx * ly) | 0) + ((tmp & 0x7fff) << 15);
                    r[1] = (hx * hy + (tmp >>> 15) + (lx >>> 30)) | 0;
                    r[0] = lx & 0x3fffffff;
                    r[1] = (u[1] + 0x40000000 - r[0]) & 0x3fffffff;
                    // neg_t = d0 * q1
                    hx = (d[0] >>> 15);
                    lx = (d[0] & 0x7fff);
                    hy = (q[1] >>> 15);
                    ly = (q[1] & 0x7fff);
                    tmp = ((hx * ly) | 0) + lx * hy;
                    lx = ((lx * ly) | 0) + ((tmp & 0x7fff) << 15);
                    neg_t[1] = (hx * hy + (tmp >>> 15) + (lx >>> 30)) | 0;
                    neg_t[0] = lx & 0x3fffffff;
                    neg(neg_t, neg_t);
                    // r = (r1,u0) - t - d mod 2^(2 * 30)
                    r[0] = u[0];
                    tmp = r[0] + neg_t[0];
                    r[0] = tmp & 0x3fffffff;
                    r[1] = (r[1] + neg_t[1] + (tmp >>> 30)) & 0x3fffffff;
                    tmp = r[0] + neg_d[0];
                    r[0] = tmp & 0x3fffffff;
                    r[1] = (r[1] + neg_d[1] + (tmp >>> 30)) & 0x3fffffff;
                    // q1 = q1 + 1 mod 2^30
                    q[1] = (q[1] + 1) & 0x3fffffff;
                    // r1 >= q0
                    if (r[1] >= q[0]) {
                        // q1 = q1 - 1 mod 2^30
                        q[1] = (q[1] + 0x3fffffff) & 0x3fffffff;
                        // r = r + d mod 2^(2 * 30)
                        tmp = r[0] + d[0];
                        r[0] = tmp & 0x3fffffff;
                        r[1] = (r[1] + d[1] + (tmp >>> 30)) & 0x3fffffff;
                    }
                    // r >= d
                    if (r[1] > d[1] || (r[1] === d[1] && r[0] >= d[0])) {
                        // q1 = q1 + 1
                        q[1] = q[1] + 1;
                        // r = r - d
                        tmp = r[0] + neg_d[0];
                        r[0] = tmp & 0x3fffffff;
                        r[1] = (r[1] + neg_d[1] + (tmp >>> 30)) & 0x3fffffff;
                    }
                    return q[1];
                };
            })();
            /* eslint-enable no-extra-parens */
            /**
             * Sets q and r such that x = qy + r, except that r is
             * computed in place of x, so at the end of the execution x is
             * identified with r. WARNING! y is cached in its normalized form
             * along with its negation and reciprocal. This is pointer based,
             * i.e., it is assumed that the contents of y do not change. High
             * level routines must accomodate.
             *
             * <p>
             *
             * ASSUMES: x and y are positive, x has W words and at least W + 2
             * limbs (i.e., two leading unused zero words), y has L' words, and w
             * has at least L'' = max{W - L', 0} + 1 limbs and will finally hold
             * a result with at most L'' words and a leading zero limb.
             *
             * <p>
             *
             * References: HAC 14.20.
             *
             * @param q - Variable holding unsigned quotient at end of computation.
             * @param x - Unsigned divident and holder of remainder at end of computation.
             * @param y - Unsigned divisor.
             */
            /* eslint-disable sonarjs/cognitive-complexity */
            uli.div_qr = (function() {
                // y from the previous call.
                let old_y = [];
                // Normalized y.
                const ny = [];
                // Negative of normalized y.
                const neg_ny = [];
                // Bits shifted left to normalize.
                let normdist;
                // Index of most significant word of ny.
                let t;
                // Reciprocal for 3by2 division.
                let v;
                // Most significant 3 words of x shifted to accomodate for the
                // normalization of y.
                const u = [0, 0, 0, 0];
                // Top two words of ny.
                const d = [0, 0, 0];
                // Negative of d in two's complement.
                const neg_d = [0, 0, 0];
                // Remainder in 3by2 division.
                const r = [0, 0, 0];
                // Normalizes y and computes reciprocals.
                const initialize_y = function(y) {
                    if (y === old_y) {
                        return;
                    }
                    old_y = y;
                    // Make sure we have room for a normalized copy ny of y and a
                    // negative of ny.
                    if (neg_ny.length !== y.length + 1) {
                        resize(neg_ny, y.length + 1);
                        ny.length = y.length;
                    }
                    // Make copy of y.
                    set(ny, y);
                    // Determine a normalization distance.
                    normdist = (30 - (msbit(ny) + 1) % 30) % 30;
                    shiftleft(ny, normdist);
                    // Compute the negative of ny in two's complement, but drop
                    // the carry that equals -1 in the end. Note that neg_ny has
                    // one more limb than ny, which is safe since the carry is
                    // not used.
                    neg(neg_ny, ny);
                    // Index of most significant word of ny.
                    t = msword(ny);
                    // Extract top two words of y and their negative.
                    d[1] = ny[t];
                    d[0] = t > 0 ? ny[t - 1] : 0;
                    neg(neg_d, d);
                    // Sets the reciprocal of d.
                    v = uli.reciprocal_word_3by2(d);
                };
                // Returns true or false depending on if x >= s(y) or not, where
                // s(y) = y * 2^((n - t) * 30), i.e., s(y) is y shifted by
                // n - t words to the left, and n and t are the indices of the
                // most significant words of x and y respectively.
                const shiftleft_ge = function(x, n, y, t) {
                    let i = n;
                    let j = t;
                    while (j >= 0) {
                        if (x[i] > y[j]) {
                            return true;
                        } else if (x[i] < y[j]) {
                            return false;
                        }
                        i--;
                        j--;
                    }
                    // When the top t + 1 words of x and s(y) are identical, we
                    // would compare the remaining (n + 1) - (t + 1) = n - 1
                    // words, but the bottom offset words of s(y) are zero, so in
                    // this case x >= s(y).
                    return true;
                };
                return function(w, x, y) {
                    let i;
                    let j;
                    let k;
                    let l;
                    let tmp;
                    let c;
                    // Set quotient to zero.
                    setzero(w);
                    // If x < y, then simply return.
                    if (cmp(x, y) < 0) {
                        return;
                    }
                    // Initialize division with y. Normalization, reciprocals etc.
                    initialize_y(y);
                    // Left shift x to accomodate for normalization of y.
                    shiftleft(x, normdist);
                    // Index of most significant word of x.
                    const n = msword(x);
                    // Since x > ny, we know that n >= t > 0. Pseudo-code:
                    //
                    // while (x >= ny * 2^((n - t) * wordsize)) {
                    //     w[n - t] = w[n - t] + 1
                    //     x = x - ny * 2^((n - t) * wordsize)
                    // }
                    //
                    // Note that due to the normalization, for random inputs the
                    // number of executions of this loop is probably small.
                    while (shiftleft_ge(x, n, ny, t)) {
                        i = 0;
                        j = n - t;
                        c = 0;
                        while (i < t + 1) {
                            tmp = x[j] - ny[i] + c;
                            x[j] = tmp & 0x3fffffff;
                            c = tmp >> 30;
                            i++;
                            j++;
                        }
                        w[n - t]++;
                    }
                    V1.set(x);
                    V2.set(neg_ny);
                    for (i = n; i >= t + 1; i--) {
                        // This remains constant within each execution of the loop
                        // and only used for notational convenience.
                        k = i - t - 1;
                        // Estimate w[k] using reciprocal for top two words of ny.
                        u[2] = V1[i];
                        u[1] = i > 0 ? V1[i - 1] : 0;
                        u[0] = i > 1 ? V1[i - 2] : 0;
                        if (u[2] === d[1] && u[1] >= d[0]) {
                            w[k] = 0x3fffffff;
                        } else {
                            w[k] = uli.div3by2(r, u, d, neg_d, v);
                        }
                        // Subtract scaled and shifted ny from x.
                        uli.muladd_loop(intOffset1, intOffset2, 0, t + 2, w[k], k, 0);
                        // We now expect x[i] to be zero, i.e., that we have
                        // canceled one word of x. In the unlikely event that the
                        // estimate of w[k] is too big, we need to correct the
                        // result by adding a scaled ny once to x.
                        //
                        // By construction 0 <= w[k] < 2^30. Thus, if w[k]
                        // is too big, then x[i] is -1 in two's complement, i.e.,
                        // equal to 0x3fffffff.
                        if (V1[k + t + 1] === 0x3fffffff) {
                            l = 0;
                            j = k;
                            c = 0;
                            while (l < t + 1) {
                                tmp = V1[j] + ny[l] + c;
                                V1[j] = tmp & 0x3fffffff;
                                c = tmp >> 30;
                                l++;
                                j++;
                            }
                            tmp = V1[j] + c;
                            V1[j] = tmp & 0x3fffffff;
                            j++;
                            if (j < x.length) {
                                V1[j] = 0;
                            }
                            w[k]--;
                        }
                    }
                    // Denormalize x.
                    for (let q = 0; q < x.length; q++) {
                        x[q] = V1[q];
                    }
                    shiftright(x, normdist);
                };
            })();
            /* eslint-enable sonarjs/cognitive-complexity */
            /**
             * Sets w to a random integer modulo m > 0 with distribution
             * statistically close to uniform.
             *
             * @param w - Variable.
             * @param m - Modulus.
             * @param rs - Source of randomness.
             * @param sd - Determines statistical distance.
             */
            uli.modrandom = (function() {
                const q = [];
                const r = [];
                return function(w, m, rs, sd = 50) {
                    const bitlen = m.length * 30 + sd;
                    const len = Math.floor((bitlen + 30 - 1) / 30);
                    if (q.length != len) {
                        resize(q, len);
                        resize(r, len + 2);
                    }
                    random(r, len, rs);
                    uli.div_qr(q, r, m);
                    set(w, r);
                };
            })();
            /**
             * Sets w = x * y mod m.
             *
             * <p>
             *
             * ASSUMES: m > 1, 0 <= x,y < m and w has Wx + Wy + 2 limbs, where Wx
             * and Wy are the number of words in x and y respectively.
             *
             * @param w - Array holding the result.
             * @param x - Integer in 0 <= x < m.
             * @param m - Modulus.
             */
            uli.modmul = (function() {
                // We use q to store quotients during modular reduction.
                const q = [];
                return function(w, x, y, m) {
                    if (q.length != m.length + 1) {
                        resize(q, m.length + 1);
                    }
                    // This squares if x == y.
                    mul(w, x, y, m.length);
                    uli.div_qr(q, w, m);
                };
            })();
            /**
             * Montgomery multiplication, i.e., it sets a = x * y * R^(-1) mod m,
             * where b = 2^30, R = b^n, w is the Montgomery inverse of m,
             * and n is the number of words in m, i.e., m < 2^n.
             *
             * <p>
             *
             * ASSUMES: m > 0 is odd, 0 <= x,y < m, m has L limbs of which at
             * least the top two words equal zero, a is distinct from x,
             * y. Furthermore, m, x, and y must have L limbs and a 2 * L + 2
             * limbs.
             *
             * <p>
             *
             * References: HAC 14.36.
             */
            function mul_mont(a, x, y, m, mn, w) {
                // a = 0
                setzero(a);
                V0.set(a);
                V2.set(m);
                V1.set(y);
                // Position within a is thought of as the location of its least
                // significant word. We let the representation of a slide upwards
                // to simulate shifting.
                // yw = y[0] * w
                const yw = (((((y[0] & 0x7fff) * (w & 0x7fff)) | 0) + ((((((y[0] >>> 15) * (w & 0x7fff)) | 0) + (y[0] & 0x7fff) * (w >>> 15)) & 0x7fff) << 15)) & 0x3fffffff);
                // Loop invariant: a < 4 * m, i.e., we need one additional word to
                // store a. The loop invariant is satisfied when i = 0, since a =
                // 0 in this case.
                for (let i = 0; i < mn; i++) {
                    // u = a[i] * w + xi * yw mod 2^30
                    // a = a + y * x[i] + m * u
                    uli.mul_mont_loop(intOffset0, intOffset1, intOffset2, mn, x[i], w, yw, i);
                    // We know that 0 <= x[i] < b and 0 <= u < b. Thus, we have:
                    // a < 4 * m + 2 * m * b and a = a / b is done using index i.
                    // The loop invariant is now satisfied, since b > 1 implies:
                    // a / b < (2 + 4/b) * m < 4 * m
                }
                // Now we do all mn right shifts at once and zero the rest. There
                // may be one additional word in case we have to subtract.
                V0.copyWithin(0, mn, mn + mn + 1);
                V0.fill(0, mn + 1, a.length);
                for (let q = 0; q < a.length; q++) {
                    a[q] = V0[q];
                }
                // Without right shifts a is bounded by 2 * m * m and we shift mn
                // positions. Thus, a < 2 * m which implies that 0 <= a < m or 0
                // <= a - m < m. The loop invariant is simplistic to be easy to
                // understand.
                // a = min(a, a - m)
                if (cmp(a, m) >= 0) {
                    sub(a, a, m);
                }
            }
            uli.mul_mont = mul_mont;
            /**
             * Abstract class which represents a way to square and multiply
             * elements in a modular ring for use in exponentiation algorithms.
             */
            class ModPowCtx {
                /**
                 * Creates a context from a modulus. A product of two integers
                 * with lim1 limbs can have at most 2 * lim1 limbs, but for
                 * modular reduction we need two extra limbs.
                 *
                 * @param m Modulus.
                 */
                constructor(m) {
                    // Modulus
                    this.m = [];
                    this.m = m;
                    // Number of words in modulus.
                    this.mn = msword(m) + 1;
                    // Modular reduction of an integer in place requires two
                    // additional limbs.
                    this.lim1 = this.m.length + 1;
                    // A product of two n-limb integers has at most 2 * n limbs.
                    // Modular reduction of an integer in place requires two
                    // additional limbs.
                    this.lim2 = 2 * this.m.length + 2;
                }
            }
            uli.ModPowCtx = ModPowCtx;
            /**
             * Class which represents the straightforward way to square and
             * multiply in a modular ring for use in exponentiation algorithms.
             */
            class ModularCtx extends ModPowCtx {
                getk(bitLength) {
                    let k = 5;
                    if (bitLength > 768) {
                        k++;
                    }
                    if (bitLength > 1544) {
                        k++;
                    }
                    if (bitLength > 4104) {
                        k++;
                    }
                    return k;
                }
                set(xt, x) {
                    set(xt, x);
                }
                get(x, xt) {
                    set(x, xt);
                }
                setOne(xt) {
                    setone(xt);
                }
                square(wt, xt) {
                    uli.modmul(wt, xt, xt, this.m);
                }
                mul(wt, xt, yt) {
                    uli.modmul(wt, xt, yt, this.m);
                }
                static getCtx(m) {
                    return new ModularCtx(m);
                }
            }
            uli.ModularCtx = ModularCtx;
            /**
             * Sets w = b^e mod m.
             *
             * <p>
             *
             * ASSUMES: 0 < b < m, and 0 < e, and w, b and m have L limbs.
             *
             * <p>
             *
             * References: HAC 14.82, 14.94.
             *
             * @param w - Array holding the result.
             * @param b - Basis integer.
             * @param e - Exponent.
             * @param m - Modulus.
             */
            uli.modpow_sqrmul = (function() {
                // const old_m: uli_t = [];
                const d = [];
                const A = [
                    [],
                    []
                ];
                return function(w, b, e, m, getCtx) {
                    const ctx = getCtx(m);
                    // Resize temporary space as needed and initialize values that
                    // are static.
                    if (d.length != ctx.lim2) {
                        // Values in [0, m], but stored with lim2 limbs.
                        resize(d, ctx.lim1);
                        resize(A[0], ctx.lim2);
                        resize(A[1], ctx.lim2);
                    }
                    // d = transform(b).
                    ctx.set(A[0], b);
                    set(d, A[0]);
                    // A = transform(1).
                    let s = 0;
                    ctx.setOne(A[s]);
                    for (let i = msbit(e); i >= 0; i--) {
                        // A = A^2 mod m
                        ctx.square(A[s ^ 1], A[s]);
                        s ^= 1;
                        // ith bit of e is 1
                        if (getbit(e, i) === 1) {
                            // A = A * d mod m
                            ctx.mul(A[s ^ 1], A[s], d);
                            s ^= 1;
                        }
                    }
                    // w = inverseTransform(A).
                    ctx.get(w, A[s]);
                };
            })();
            /**
             * Extracts the ith block of wordsize bits w from x
             * (padding with zeros from the left) and sets uh such that:
             * w = uh[0] * 2^uh[1], with uh[0] odd and with uh[0] = uh[1] = 0
             * when w = 0.
             *
             * @param uh - Holds the representation of word.
             * @param x - Contains bits.
             * @param i - Index of block of bits.
             * @param wordsize - Number of bits in each block.
             */
            function getuh(uh, x, i, wordsize) {
                let bitIndex = i * wordsize;
                // Get the ith block of wordsize bits.
                uh[0] = 0;
                for (let j = 0; j < wordsize; j++) {
                    uh[0] = uh[0] | getbit(x, bitIndex) << j;
                    bitIndex++;
                }
                // Extract all factors of two.
                uh[1] = 0;
                if (uh[0] !== 0) {
                    while ((uh[0] & 0x1) === 0) {
                        uh[0] = uh[0] >>> 1;
                        uh[1]++;
                    }
                }
            }
            /**
             * Sets w = b^e mod m.
             *
             * <p>
             *
             * ASSUMES: 0 < b < m, and 0 < e, and w, b and m have L limbs.
             *
             * <p>
             *
             * References: HAC 14.85.
             *
             * @param w - Array holding the result.
             * @param b - Basis integer.
             * @param e - Exponent.
             * @param m - Modulus.
             */
            /* eslint-disable sonarjs/cognitive-complexity */
            uli.modpow_window = (function() {
                // We use p to store squares, products, and their remainders, q to
                // store quotients during modular reduction, and A to store
                // intermediate results.
                const A = [
                    [],
                    []
                ];
                const D = [];
                return function(w, b, e, m, getCtx) {
                    const ctx = getCtx(m);
                    const msb = msbit(e) + 1;
                    const k = ctx.getk(msb);
                    // Initialize or resize temporary space as needed.
                    if (A[0].length !== ctx.lim2) {
                        resize(A[0], ctx.lim2);
                        resize(A[1], ctx.lim2);
                        for (let i = 0; i < D.length; i++) {
                            resize(D[i], ctx.lim1);
                        }
                    }
                    // Expand the table if needed.
                    if (D.length < (1 << k)) {
                        const len = D.length;
                        D.length = 1 << k;
                        for (let i = len; i < D.length; i++) {
                            D[i] = new_uli(ctx.lim1);
                        }
                    }
                    // Precompute table
                    // D[0] = 1.
                    ctx.setOne(D[0]);
                    // D[1] = b
                    ctx.set(A[0], b);
                    set(D[1], A[0]);
                    // D[2] = b^2 mod m
                    ctx.square(A[0], D[1]);
                    set(D[2], A[0]);
                    // D[i] = D[i - 1] * b^2 mod m for odd i
                    for (let i = 1; i < 1 << (k - 1); i++) {
                        ctx.mul(A[0], D[2 * i - 1], D[2]);
                        set(D[2 * i + 1], A[0]);
                    }
                    // Set A = 1.
                    let s = 0;
                    ctx.setOne(A[s]);
                    // Iterate through the bits of e starting from the most
                    // significant block of bits.
                    const n = Math.floor((msb + k - 1) / k);
                    const uh = [0, 0];
                    for (let i = n; i >= 0; i--) {
                        // Extract the ith block of bits w and represent it as w =
                        // 2^uh[1] * uh[0], with uh[0] odd and with uh[0] = uh[1]
                        // = 0 when w = 0.
                        getuh(uh, e, i, k);
                        // A = A^E mod m, where E = 2^(k - uh[1]).
                        for (let j = 0; j < k - uh[1]; j++) {
                            ctx.square(A[s ^ 1], A[s]);
                            s ^= 1;
                        }
                        // A = A * D[uh[0]] mod m.
                        if (uh[0] !== 0) {
                            ctx.mul(A[s ^ 1], A[s], D[uh[0]]);
                            s ^= 1;
                        }
                        // A = A^E mod m, where E = 2^uh[1].
                        for (let j = 0; j < uh[1]; j++) {
                            ctx.square(A[s ^ 1], A[s]);
                            s ^= 1;
                        }
                    }
                    ctx.get(w, A[s]);
                };
            })();
            /* eslint-enable sonarjs/cognitive-complexity */
            /**
             * Returns a table of all possible modular products of a
             * list of bases. More precisely, given a list b of k bases and a
             * modulus m, it returns t, where t is the table computed as t[x]
             * = b[0]^x[0] * ... * b[k-1]^x[k-1] mod m, where x[i] is the ith bit
             * of the integer x.
             *
             * <p>
             *
             * We allow this method to allocate memory, since it is expected to be
             * used rarely relative the amount of computation performed and since
             * more than one table may be used simultaneously.
             *
             * <p>
             *
             * ASSUMES: m has L limbs and b[i] has L limbs and all inputs are
             * positive.
             *
             * <p>
             *
             * References: HAC 14.88
             *
             * @param b - List of bases.
             * @param m - Modulus.
             * @returns t Table for products.
             */
            uli.modpowprodtab_inner = (function() {
                // We use p to store products.
                const p = [];
                return function(b, m) {
                    // Initialize or resize temporary space as needed.
                    if (p.length !== 2 * m.length + 2) {
                        resize(p, 2 * m.length + 2);
                    }
                    // Make room for table and initialize all elements to one.
                    const t = [];
                    for (let i = 0; i < 1 << b.length; i++) {
                        t[i] = new_uli(m.length);
                        t[i][0] = 1;
                    }
                    // Initialize parts of the table with the bases provided.
                    for (let i = 1, j = 0; i < t.length; i = i * 2, j++) {
                        set(t[i], b[j]);
                    }
                    // Perform precalculation using masking for efficiency.
                    for (let mask = 1; mask < t.length; mask++) {
                        const onemask = mask & -mask;
                        uli.modmul(p, t[mask ^ onemask], t[onemask], m);
                        set(t[mask], p);
                    }
                    return t;
                };
            })();
            /**
             * Applies {@link modpowprodtab} to subsequences of a given width of
             * the input and returns the resulting tables as an array.
             *
             * <p>
             *
             * We allow this method to allocate memory, since it is expected to be
             * used rarely relative the amount of computation performed and since
             * more than one table may be used simultaneously.
             *
             * <p>
             *
             * ASSUMES: m has L limbs and b[i] has L limbs and all inputs are
             * positive, and width <= 30.
             *
             * <p>
             *
             * References: HAC 14.88
             *
             * @param b - List of bases.
             * @param m - Modulus.
             * @param width - Maximal number of bases used for each table.
             * @returns t Array of tables for products.
             */
            function modpowprodtab(b, m, width) {
                const t = [];
                for (let i = 0, j = 0; j < b.length; i++, j += width) {
                    t[i] = uli.modpowprodtab_inner(b.slice(j, j + width), m);
                }
                return t;
            }
            uli.modpowprodtab = modpowprodtab;
            /**
             * Sets x to the bit-wise concatenation of the inputs, i.e., the jth
             * least significant bit of the ith word of the output is the ith bit
             * of e[j].
             *
             * <p>
             *
             * ASSUMES: e.length <= 30 and x.length >= bitsize, where
             * is the maximum bitsize of any of the inputs.
             *
             * @param x - Stores bit-wise concatenation of the inputs.
             * @param e - List of integers.
             * @param bitsize - Maximum bitsize of any of the inputs.
             */
            function concbits_inner(x, e, bitsize) {
                setzero(x);
                const w = new_uli(e.length);
                // Bit position in each e[j], and word position in x.
                let k = 0;
                // Word position in each e[j].
                for (let i = 0; k < bitsize; i++) {
                    // Simulate leading zero of e[j] if needed.
                    for (let j = 0; j < w.length; j++) {
                        w[j] = i < e[j].length ? e[j][i] : 0;
                    }
                    // Bit position within e[j][i] for each j.
                    for (let b = 0; b < 30 && k < bitsize; b++, k++) {
                        // Bits at position i * 30 + b from all e[j].
                        x[k] = 0;
                        for (let j = w.length - 1; j >= 0; j--) {
                            x[k] <<= 1;
                            x[k] |= (w[j] >> b) & 1;
                        }
                    }
                }
            }
            /**
             * Applies {@link concbits} to subsequences of a given width of the
             * input and returns the resulting large integers as an array.
             *
             * <p>
             *
             * ASSUMES: width <= 30, x[i].length >= msbit(e[i]) + 1 for
             * all i, and x.length = (e.length + width-1) / width.
             *
             * @param x - Stores bit-wise concatenations of the inputs.
             * @param e - List of exponents.
             * @param bitsize - Maximum bitsize of any of the inputs.
             * @param width - Width of each block that is concatenated separately.
             */
            function concbits(x, e, bitsize, width) {
                for (let i = 0, j = 0; j < e.length; i++, j += width) {
                    concbits_inner(x[i], e.slice(j, j + width), bitsize);
                }
            }
            /**
             * Returns maximal index of a most significant bit.
             *
             * @param e - Input non-negative integers.
             * @returns Maximal index of a most significant bit.
             */
            function max_msbit(e) {
                let m = 0;
                for (let i = 0; i < e.length; i++) {
                    m = Math.max(m, msbit(e[i]));
                }
                return m;
            }
            /**
             * Computes a simultaneous exponentiation using tables of pre-computed
             * tables t for at most width bases each, but based on exactly k
             * bases, and modulus m, i.e., it sets w = b[0]^e[0] * ... *
             * b[k-1]^e[k-1], where e has length k.
             *
             * <p>
             *
             * ASSUMES: m > 1 has L limbs and each e[i] has L limbs and all inputs
             * are positive, and that the table was computed with the same number
             * of bases and the same modulus m.
             *
             * <p>
             *
             * References: HAC 14.88
             *
             * @param w - Holds the result.
             * @param t - Tables of products.
             * @param e - List of exponents.
             * @param m - Modulus
             * @param width - Width of each block that is precomputed separately.
             */
            uli.modpowprod = (function() {
                // We use x to store concatenated exponents and a dual
                // representation of A to store intermediate results.
                const x = [];
                const A = [
                    [],
                    []
                ];
                return function(w, t, e, m, width) {
                    // Initialize or resize temporary space as needed.
                    const len = 2 * m.length + 2;
                    if (A[0].length !== len) {
                        resize(A[0], len);
                        resize(A[1], len);
                    }
                    // Ensure that x has the right number of elements.
                    while (x.length < t.length) {
                        x.push([]);
                    }
                    // Maximal bitsize of any e[j].
                    const bitsize = max_msbit(e) + 1;
                    // Ensure that each x[j] has the right length.
                    if (x[0].length < bitsize) {
                        for (let j = 0; j < t.length; j++) {
                            x[j].length = bitsize;
                        }
                    }
                    // Concatenate exponent bits within each block.
                    concbits(x, e, bitsize, width);
                    // Set A = 1.
                    let s = 0;
                    setone(A[s]);
                    for (let i = bitsize - 1; i >= 0; i--) {
                        // A = A^2 mod m.
                        uli.modmul(A[s ^ 1], A[s], A[s], m);
                        s ^= 1;
                        for (let j = 0; j < t.length; j++) {
                            if (x[j][i] !== 0) {
                                // A = A * t[ j ][ x[j][i] ] mod m.
                                uli.modmul(A[s ^ 1], A[s], t[j][x[j][i]], m);
                                s ^= 1;
                            }
                        }
                    }
                    set(w, A[s]);
                };
            })();
            /**
             * Returns the bits between the start index and end index
             * as an integer.
             *
             * <p>
             *
             * ASSUMES: s <= most significant bit of x and s < e
             *
             * @param x - Integer to slice.
             * @param s - Inclusive start index.
             * @param e - Exclusive end index.
             * @returns Bits between the start index and end index as an integer.
             */
            function slice(x, s, e) {
                const m = msbit(x);
                // Avoid indexing out of bounds.
                e = e < m + 1 ? e : m + 1;
                // Copy and get rid of the lower bits.
                const w = copy_uli(x);
                shiftright(w, s);
                // Get rid of higher words.
                const bitlen = e - s;
                let len = Math.floor((bitlen + 30 - 1) / 30);
                // Get rid of top-most bits.
                const topbits = bitlen % 30;
                if (topbits > 0) {
                    w[len - 1] &= 0x3fffffff >>> 30 - topbits;
                } else {
                    w[len] = 0;
                    len++;
                }
                w.length = len;
                return w;
            }
            uli.slice = slice;
            /**
             * Returns a minimal hexadecimal representation in two's complement.
             *
             * @param x - Unsigned integer.
             * @returns Hexadecimal string representation of the array.
             */
            function hex(x) {
                return byteArrayToHex(to_uint8_array(normalized(x)).reverse());
            }
            uli.hex = hex;
            /**
             * Returns the integer represented by the input.
             *
             * @param s - Hexadecimal representation of an integer.
             * @returns Represented integer.
             */
            function hex_to_li(s) {
                return from_uint8_array(hexToByteArray(s).reverse());
            }
            uli.hex_to_li = hex_to_li;
            /**
             * Miller-Rabin test for the input integer using the given number of
             * repetition. We do not bother optimizing for small integers with
             * trial division.
             *
             * <p>
             *
             * ASSUMES: n >= 0 and t > 0
             *
             * <p>
             *
             * References: HAC 4.24
             *
             * @param n - Non-negative integer to test.
             * @param t - Repetitions.
             * @param rs - Source of randomness.
             * @returns True or false depending on if n is considered to be a prime or not.
             */
            /* eslint-disable sonarjs/cognitive-complexity */
            uli.miller_rabin = (function() {
                const one = [1, 0];
                const two = [0, 0];
                set(two, 2);
                const three = [0, 0];
                set(three, 3);
                const five = [0, 0, 0];
                set(five, 5);
                const r = [];
                const n_1 = [];
                const a = [];
                const y = [
                    [],
                    []
                ];
                return function(n, t, rs) {
                    // 0 and 1 are not prime, 2, 3, 5 are prime.
                    if ((n[0] & 0x1) == 0) {
                        return cmp(n, two) == 0;
                    } else if (cmp(n, one) == 0) {
                        return false;
                    } else if (cmp(n, three) == 0 || cmp(n, five) == 0) {
                        return true;
                    }
                    // n >= 7 is odd.
                    // Resize if needed.
                    if (n_1.length != n.length) {
                        resize(r, n.length);
                        resize(n_1, n.length);
                        resize(a, n.length);
                        resize(y[0], 2 * n.length + 2);
                        resize(y[1], 2 * n.length + 2);
                    }
                    // n_1 = n - 1 = 2^s * r with r odd.
                    sub(n_1, n, one);
                    set(r, n_1);
                    const s = lsbit(r);
                    shiftright(r, s);
                    // Iterate the test t times.
                    for (let i = 0; i < t; i++) {
                        // Random 2 <= a <= n - 2 (we need n
                        do {
                            uli.modrandom(a, n_1, rs);
                        } while (cmp(a, two) < 0);
                        // y = a^r mod n
                        let b = 0;
                        uli.modpow_window(y[b], a, r, n, ModularCtx.getCtx);
                        // y != 1 and y != n - 1
                        if (cmp(y[b], one) != 0 && cmp(y[b], n_1) != 0) {
                            // while j <= s - 1 and y != n - 1
                            let j = 1;
                            while (j < s && cmp(y[b], n_1) != 0) {
                                // y = y^2 mod n
                                uli.modmul(y[b ^ 1], y[b], y[b], n);
                                b ^= 1;
                                // if y == 1
                                if (isone(y[b])) {
                                    return false;
                                }
                                j++;
                            }
                            // y != n - 1
                            if (cmp(y[b], n_1) != 0) {
                                return false;
                            }
                        }
                    }
                    return true;
                };
            })();
            /* eslint-enable sonarjs/cognitive-complexity */
        })(uli = arithm.uli || (arithm.uli = {}));
        let li;
        (function(li) {
            var MASK_ALL = verificatum.arithm.uli.MASK_ALL;
            var ModularCtx = verificatum.arithm.uli.ModularCtx;
            var VerificatumObject = verificatum.base.VerificatumObject;
            var WORDSIZE = verificatum.arithm.uli.WORDSIZE;
            var new_uli = verificatum.arithm.uli.new_uli;
            var uli_add = verificatum.arithm.uli.add;
            var uli_cmp = verificatum.arithm.uli.cmp;
            var uli_copy_uli = verificatum.arithm.uli.copy_uli;
            var uli_div_qr = verificatum.arithm.uli.div_qr;
            var uli_hex = verificatum.arithm.uli.hex;
            var uli_iszero = verificatum.arithm.uli.iszero;
            var uli_lsbit = verificatum.arithm.uli.lsbit;
            var uli_modpow_window = verificatum.arithm.uli.modpow_window;
            var uli_msword = verificatum.arithm.uli.msword;
            var uli_mul = verificatum.arithm.uli.mul;
            var uli_normalize = verificatum.arithm.uli.normalize;
            var uli_resize = verificatum.arithm.uli.resize;
            var uli_set = verificatum.arithm.uli.set;
            var uli_setzero = verificatum.arithm.uli.setzero;
            var uli_shiftleft = verificatum.arithm.uli.shiftleft;
            var uli_shiftright = verificatum.arithm.uli.shiftright;
            var uli_square = verificatum.arithm.uli.square;
            var uli_sub = verificatum.arithm.uli.sub;
            /**
             * Container class for signed mutable integers with manual memory
             * management as for uli_t. Instantiated with sign and value, with a
             * length of the underlying array for an uninitialized instance, or
             * with no parameters.
             */
            class SLI extends VerificatumObject {
                /**
                 * Constructs an SLI.
                 *
                 * @param first - Empty, sign, or number of words in empty instance.
                 * @param second - Empty or array containing value.
                 * @throws Error if an input is incorrectly formatted, but does
                 * not perform a full dynamic type check of the input.
                 */
                constructor(first, second) {
                    super();
                    if (typeof first === "undefined") {
                        this.sign = 1;
                        this.value = [];
                        this.length = this.value.length;
                    } else if (typeof second === "undefined") {
                        if (first < 0) {
                            throw Error("First parameter is negative! (${first})");
                        }
                        this.sign = 1;
                        this.value = new_uli(first);
                        this.length = this.value.length;
                    } else {
                        if (!(first == -1 || first == 0 || first == 1)) {
                            throw Error("First parameter is not a sign! (${first})");
                        }
                        this.sign = first;
                        this.value = second;
                        this.length = this.value.length;
                    }
                }
            }
            li.SLI = SLI;
            /**
             * Thin layer on top of the uli module that provides mutable signed
             * integers with basic modular arithmetic along with a few low level
             * routines that requires signed integers to implement.
             *
             * <p>
             *
             * It also uses a minimal container class SLI that represents a
             * signed integer. All operations on are executed on pre-existing SLI
             * instances, so it is the responsibility of the programmer to ensure
             * that data fits inside the allocated space.
             *
             * <p>
             *
             * This approach is motivated by the need to preserve efficiency and
             * still encapsulate as much implementation details as possible.
             *
             * <p>
             *
             * <a href="http://cacr.uwaterloo.ca/hac">Handbook of Cryptography
             * (HAC), Alfred J. Menezes, Paul C. van Oorschot and Scott
             * A. Vanstone</a> gives a straightforward introduction to the basic
             * algorithms used and we try to follow their notation for easy
             * reference.
             *
             * <p>
             *
             * <table style="text-align: left;">
             * <tr><th>Reference        </th><th> Operation</th><th> Comment</th></tr>
             * <tr><td>HAC 2.149</td><td> Jacobi symbol</td><td></td></tr>
             * <tr><td>HAC 14.36</td><td> Montgomery modular multiplication</td><td></td></tr>
             * <tr><td>HAC 14.61</td><td> Extended Euclidian algorithm (variation)</td><td></td></tr>
             * <tr><td>HAC 14.94</td><td> Montgomery modular exponentiation</td><td></td></tr>
             * </table>
             * TSDOC_MODULE
             */
            /**
             * Truncates the input to the shortest possible array that represents
             * the same absolute value in two's complement. It sets the sign to
             * zero if necessary, but does not modify the sign otherwise.
             *
             * @param x - Signed integer.
             */
            function normalize(x) {
                uli_normalize(x.value);
                x.length = x.value.length;
                if (x.length == 1 && x.value[0] == 0) {
                    x.sign = 0;
                }
            }
            li.normalize = normalize;
            /**
             * Resizes the underlying array to the given length.
             *
             * @param a - SLI to be resized.
             * @param len - New length of SLI.
             */
            function resize(a, len) {
                uli_resize(a.value, len);
                a.length = a.value.length;
            }
            li.resize = resize;
            /**
             * Returns the sign of a number.
             *
             * @param n - A Javascript "number".
             * @returns Sign of number as -1, 0, or 1.
             */
            function sign(n) {
                if (n > 0) {
                    return 1;
                } else if (n === 0) {
                    return 0;
                } else {
                    return -1;
                }
            }
            li.sign = sign;

            function set(a, b) {
                if (typeof b === "number") {
                    a.sign = sign(b);
                    uli_set(a.value, Math.abs(b));
                } else {
                    a.sign = b.sign;
                    uli_set(a.value, b.value);
                }
            }
            li.set = set;

            function copy(a, len) {
                if (typeof len === "undefined") {
                    len = a.length;
                }
                return new SLI(a.sign, uli_copy_uli(a.value, len));
            }
            li.copy = copy;
            /**
             * Returns -1, 0, or 1 depending on if a < b, a == b, or
             * a > b.
             *
             * @param a - Left SLI.
             * @param b - Right SLI.
             * @returns Value of comparison predicate on a and b.
             */
            function cmp(a, b) {
                if (a.sign < b.sign) {
                    return -1;
                } else if (a.sign > b.sign) {
                    return 1;
                } else if (a.sign === 0) {
                    return 0;
                }
                return (uli_cmp(a.value, b.value) * a.sign);
            }
            li.cmp = cmp;
            /**
             * Returns true or false depending on if a = b or not.
             *
             * @param a - Left SLI.
             * @param b - Right SLI.
             * @returns True or false depending on if the SLIs represent the same
             * integer or not.
             */
            function equals(a, b) {
                return a.sign === b.sign && uli_cmp(a.value, b.value) === 0;
            }
            li.equals = equals;
            /**
             * Returns true or false depending on a = 0 or not.
             *
             * @param a - Integer represented as a SLI.
             * @returns True or false depending on if a is zero or not.
             */
            function iszero(a) {
                return a.sign === 0;
            }
            li.iszero = iszero;
            /**
             * Returns true or false depending on a = 1 or not.
             *
             * @param a - Integer represented as a SLI.
             * @returns True or false depending on if a is zero or not.
             */
            function isone(a) {
                return a.sign === 1 && a.value[0] === 1 && uli_msword(a.value) === 0;
            }
            li.isone = isone;
            /**
             * Shifts the given number of bits within the SLI,
             * i.e., the allocated space is not expanded.
             *
             * <p>
             *
             * ASSUMES: offset >= 0.
             *
             * @param x - SLI to be shifted.
             * @param offset - Number of bit positions to shift.
             */
            function shiftleft(a, offset) {
                uli_shiftleft(a.value, offset);
            }
            li.shiftleft = shiftleft;
            /**
             * Shifts the given number of bits to the right within
             * the allocated space, i.e., the space is not reduced.
             *
             * <p>
             *
             * ASSUMES: offset >= 0.
             *
             * @param x - SLI to be shifted.
             * @param offset - Number of bit positions to shift.
             */
            function shiftright(a, offset) {
                uli_shiftright(a.value, offset);
                if (uli_iszero(a.value)) {
                    a.sign = 0;
                }
            }
            li.shiftright = shiftright;
            /**
             * Sets a = b + c.
             *
             * <p>
             *
             * ASSUMES: b and c have B and B' bits and a can store B + B' + 1
             * bits, or B + B' bits depending on if the signs of b and c are equal
             * or not.
             *
             * @param a - SLI holding the result.
             * @param b - Left term.
             * @param c - Right term.
             */
            function add(a, b, c) {
                const w = a.value;
                const x = b.value;
                const y = c.value;
                // 0 + 0  or  x + y  or  -x + -y.
                if (b.sign === c.sign) {
                    if (b.sign === 0) {
                        a.sign = 0;
                        uli_setzero(w);
                    } else {
                        a.sign = b.sign;
                        uli_add(w, x, y);
                    }
                    // x + -y  or  -x + y
                } else {
                    const s = uli_cmp(x, y);
                    if (s > 0) {
                        a.sign = b.sign;
                        uli_sub(w, x, y);
                    } else if (s < 0) {
                        a.sign = c.sign;
                        uli_sub(w, y, x);
                    } else {
                        a.sign = 0;
                        uli_setzero(w);
                    }
                }
            }
            li.add = add;
            /**
             * Sets a = b - c.
             *
             * <p>
             *
             * ASSUMES: b and c have B and B' bits and a can store B + B' + 1
             * bits, or B + B' bits depending on if the signs of b and c are
             * distinct or not.
             *
             * @param a - SLI holding the result.
             * @param b - Left term.
             * @param c - Right term.
             */
            function sub(a, b, c) {
                const w = a.value;
                const x = b.value;
                const y = c.value;
                // x - y  or  -x - -y.
                if (b.sign === c.sign) {
                    // x >= y.
                    if (uli_cmp(x, y) >= 0) {
                        uli_sub(w, x, y);
                        a.sign = b.sign;
                        // x < y.
                    } else {
                        uli_sub(w, y, x);
                        a.sign = (-b.sign);
                    }
                    // -x - y  or  x - -y.
                } else {
                    uli_add(w, x, y);
                    if (b.sign === 0) {
                        a.sign = (-c.sign);
                    } else {
                        a.sign = b.sign;
                    }
                }
                if (uli_iszero(w)) {
                    a.sign = 0;
                }
            }
            li.sub = sub;
            /**
             * Sets a = b * c.
             *
             * <p>
             *
             * ASSUMES: b and c have L and L' limbs and a has at least L + L' limbs.
             *
             * @param a - SLI holding the result.
             * @param b - Left factor.
             * @param c - Right factor.
             */
            li.mul = (function() {
                const t = [];
                return function(a, b, c, len) {
                    if (a === b || a === c) {
                        if (t.length !== a.length) {
                            uli_resize(t, a.length);
                        }
                        uli_mul(t, b.value, c.value, len);
                        uli_set(a.value, t);
                    } else {
                        uli_mul(a.value, b.value, c.value, len);
                        a.length = a.value.length;
                    }
                    a.sign = (b.sign * c.sign);
                };
            })();
            /**
             * Sets a = b * c, where c is a word.
             *
             * <p>
             *
             * ASSUMES: b has L limbs, c is a word such that 0 <=
             * c < 2^WORDSIZE, and a has at least L + 1 limbs.
             *
             * @param a - SLI holding the result.
             * @param b - Left factor.
             * @param c - Right factor.
             */
            li.mul_word = (function() {
                const C = new SLI(1);
                return function(a, b, c) {
                    set(C, c);
                    li.mul(a, b, C);
                };
            })();
            /**
             * Sets a = b^2.
             *
             * <p>
             *
             * ASSUMES: b has L words and a has at least 2 * L limbs.
             *
             * @param a - SLI holding the result.
             * @param b - Factor.
             */
            function square(a, b) {
                uli_square(a.value, b.value);
                a.sign = (b.sign * b.sign);
            }
            li.square = square;
            /**
             * Computes q, r such that q = a / b + r with a / b and r rounded with
             * sign, in particular, if b is positive, then 0 <= r < b. Then it
             * sets a = r. We are faithful to the mathematical definition for
             * signs.
             *
             * <p>
             *
             * ASSUMES: a and b are positive, a has L words and at least L + 2
             * limbs (i.e., two leading unused zero words), b has L' limbs, and q
             * has at least L'' = max{L - L', L', 0} + 1 limbs and will finally
             * hold a result with at most L'' words and a leading zero limb.
             *
             * @param q - SLI holding the quotient.
             * @param a - Dividend.
             * @param b - Divisor.
             */
            function div_qr(q, a, b) {
                let qsign;
                let asign;
                uli_div_qr(q.value, a.value, b.value);
                // Division without remainder.
                if (uli_iszero(a.value)) {
                    qsign = (a.sign * b.sign);
                    asign = 0;
                    // Division with remainder.
                } else {
                    // Both have the same sign.
                    if (a.sign * b.sign === 1) {
                        asign = a.sign;
                        qsign = 1;
                        // They have different signs, so the quotient is negative.
                    } else {
                        asign = a.sign;
                        qsign = -1;
                    }
                }
                q.sign = qsign;
                a.sign = asign;
            }
            li.div_qr = div_qr;
            /**
             * Sets a = b mod c (this is merely syntactic sugar for
             * div_qr).
             *
             * @param a - SLI holding the result.
             * @param b - Dividend.
             * @param c - Modulus.
             */
            li.mod = (function() {
                // Temporary space for quotient and remainder.
                const q = new SLI();
                const r = new SLI();
                return function(a, b, c) {
                    const len = b.length;
                    if (r.length != len + 3) {
                        resize(r, len + 3);
                    }
                    if (q.length != len + 1) {
                        resize(q, len + 1);
                    }
                    // Copy b to temporary remainder, reduce and set result.
                    set(r, b);
                    div_qr(q, r, c);
                    if (r.sign < 0) {
                        add(a, c, r);
                    } else {
                        set(a, r);
                    }
                };
            })();
            // Help function for egcd. Consult HAC 14.61 (5th printing + errata)
            // for information.
            function egcd_binary_reduce(u, A, B, x, y) {
                while ((u.value[0] & 0x1) === 0) {
                    // u = u / 2.
                    shiftright(u, 1);
                    // A = 0 mod 2 and B = 0 mod 2.
                    if ((A.value[0] & 0x1) === 0 && (B.value[0] & 0x1) === 0) {
                        // A = A / 2 and B = B / 2.
                        shiftright(A, 1);
                        shiftright(B, 1);
                    } else {
                        // A = (A + y) / 2.
                        add(A, A, y);
                        shiftright(A, 1);
                        // B = (B - x) / 2.
                        sub(B, B, x);
                        shiftright(B, 1);
                    }
                }
            }
            li.egcd_binary_reduce = egcd_binary_reduce;
            /**
             * Sets a, b, and v such that a * x + b * y = v and v is
             * the greatest common divisor of x and y.
             *
             * <p>
             *
             * ASSUMES: x, y >= 0
             *
             * References: HAC 14.61 (5th printing + errata)
             *
             * @param a - Linear coefficient of Bezout expression.
             * @param b - Linear coefficient of Bezout expression.
             * @param v - Greatest common divisor of x and y.
             * @param x - Left integer.
             * @param y - Right integer.
             */
            /* eslint-disable sonarjs/cognitive-complexity */
            li.egcd = (function() {
                // Temporary space.
                const xs = new SLI();
                const ys = new SLI();
                const A = new SLI();
                const B = new SLI();
                const C = new SLI();
                const D = new SLI();
                const u = new SLI();
                return function(a, b, v, x, y) {
                    if (iszero(x) || iszero(y)) {
                        set(a, Math.abs(x.sign));
                        set(b, Math.abs(y.sign));
                        set(v, cmp(x, y) > 0 ? x : y);
                    } else {
                        const len = Math.max(x.length, y.length) + 1;
                        if (A.length !== len) {
                            resize(xs, len);
                            resize(ys, len);
                            resize(A, len);
                            resize(B, len);
                            resize(C, len);
                            resize(D, len);
                            resize(u, len);
                        }
                        set(xs, x);
                        set(ys, y);
                        set(A, 1);
                        set(B, 0);
                        set(C, 0);
                        set(D, 1);
                        // Extract all common factors of two.
                        const common_twos = Math.min(uli_lsbit(xs.value), uli_lsbit(ys.value));
                        shiftright(xs, common_twos);
                        shiftright(ys, common_twos);
                        set(u, xs);
                        set(v, ys);
                        // Use binary laws for greatest common divisors.
                        while (!iszero(u)) {
                            egcd_binary_reduce(u, A, B, xs, ys);
                            egcd_binary_reduce(v, C, D, xs, ys);
                            if (cmp(u, v) >= 0) {
                                sub(u, u, v);
                                sub(A, A, C);
                                sub(B, B, D);
                                // See errata for HAC.
                                if (B.sign > 0) {
                                    add(A, A, ys);
                                    sub(B, B, xs);
                                }
                            } else {
                                sub(v, v, u);
                                sub(C, C, A);
                                sub(D, D, B);
                                // See errata for HAC.
                                if (D.sign > 0) {
                                    add(C, C, ys);
                                    sub(D, D, xs);
                                }
                            }
                        }
                        set(a, C);
                        set(b, D);
                        shiftleft(v, common_twos);
                    }
                };
            })();
            /* eslint-enable sonarjs/cognitive-complexity */
            /**
             * Sets a such that w * x = 1 mod p.
             *
             * <p>
             *
             * ASSUMES: p > 0 is on odd prime.
             *
             * <p>
             *
             * References: HAC 14.61.
             *
             * @param w - SLI holding the result.
             * @param x - Integer to invert.
             * @param p - Positive odd prime modulus.
             */
            li.modinv = (function() {
                // Temporary space.
                const a = new SLI();
                const b = new SLI();
                const v = new SLI();
                return function(w, x, p) {
                    const len = Math.max(p.length, x.length);
                    if (a.length !== len) {
                        resize(a, len);
                        resize(b, len);
                        resize(v, len);
                    }
                    li.egcd(a, b, v, x, p);
                    if (a.sign < 0) {
                        add(w, p, a);
                    } else {
                        set(w, a);
                    }
                };
            })();
            /**
             * Sets w = b^e mod m.
             *
             * <p>
             *
             * ASSUMES: 0 < b < m, e > 0, and m > 1, m has L limbs, w has at least
             * L limbs, and b and e have arbitrary number of limbs.
             *
             * @param w - SLI holding the result.
             * @param b - Basis integer.
             * @param e - Exponent.
             * @param m - Modulus.
             */
            function modpow(w, b, e, m) {
                uli_modpow_window(w.value, b.value, e.value, m.value, ModularCtx.getCtx);
                if (uli_iszero(w.value)) {
                    w.sign = 0;
                } else {
                    w.sign = 1;
                }
            }
            li.modpow = modpow;
            /**
             * Returns (a | b), i.e., the Jacobi symbol of a modulo b for an odd
             * integer b > 2. (This is essentially a GCD algorithm that keeps track
             * of the residue symbol.)
             *
             * <p>
             *
             * References: HAC 2.149.
             *
             * @param a - Integer modulo b.
             * @param b - An odd prime modulus.
             * @returns Jacobi symbol of this instance modulo the input.
             */
            /* eslint-disable sonarjs/cognitive-complexity */
            function jacobi(a, b) {
                a = copy(a);
                b = copy(b);
                let s = 1;
                for (;;) {
                    if (iszero(a)) {
                        return 0;
                    } else if (isone(a)) {
                        return s;
                    } else {
                        // a = 2^e * a'
                        const e = uli_lsbit(a.value);
                        // a = a'.
                        shiftright(a, e);
                        // Least significant 4 bits of a and b.
                        const aw = (a.value[0] & 0xf);
                        const bw = (b.value[0] & 0xf);
                        // e = 1 mod 2 and b = 3,5 mod 8.
                        if (e % 2 === 1 && (bw % 8 === 3 || bw % 8 === 5)) {
                            s = (-s);
                        }
                        // b = a = 3 mod 4.
                        if (bw % 4 === 3 && aw % 4 === 3) {
                            s = (-s);
                        }
                        // Corresponds to finding the GCD.
                        if (isone(a)) {
                            return s;
                        }
                        // Replacement for recursive call.
                        li.mod(b, b, a);
                        const t = a;
                        a = b;
                        b = t;
                    }
                }
            }
            li.jacobi = jacobi;
            /* eslint-enable sonarjs/cognitive-complexity */
            /**
             * Sets w to an integer such that w^2 = x mod p, i.e., it
             * computes the square root of an integer modulo a positive odd prime
             * employing the Tonelli-Shanks algorithm.
             *
             * @param w - Holding the result.
             * @param x - Integer of which the square root is computed.
             * @param p - Positive odd prime modulus.
             */
            li.modsqrt = (function() {
                const ONE = new SLI(1);
                set(ONE, 1);
                const TWO = new SLI(2);
                set(TWO, 2);
                const a = new SLI();
                const n = new SLI();
                const v = new SLI();
                const k = new SLI();
                const r = new SLI();
                const z = new SLI();
                const c = new SLI();
                const tmp = new SLI();
                return function(w, x, p) {
                    const plen = uli_msword(p.value) + 1;
                    const len = 2 * plen + 2;
                    if (a.length !== len) {
                        resize(a, len);
                        resize(n, len);
                        resize(v, len);
                        resize(k, len);
                        resize(r, len);
                        resize(z, len);
                        resize(c, len);
                        resize(tmp, len);
                    }
                    li.mod(a, x, p);
                    if (iszero(a)) {
                        set(w, 0);
                        return;
                    }
                    if (equals(p, TWO)) {
                        set(w, a);
                        return;
                    }
                    // p = 3 mod 4
                    if ((p.value[0] & 0x3) === 0x3) {
                        // v = p + 1
                        add(v, p, ONE);
                        // v = v / 4
                        shiftright(v, 2);
                        // w = a^((p + 1) / 4) mod p
                        modpow(w, a, v, p);
                        return;
                    }
                    // Compute k and s, where p = 2^s * (2 * k + 1) + 1
                    // k = p - 1
                    sub(k, p, ONE);
                    // (p - 1) = 2^s * k
                    let s = uli_lsbit(k.value);
                    shiftright(k, s);
                    // k = k - 1
                    sub(k, k, ONE);
                    // k = k / 2
                    shiftright(k, 1);
                    // r = a^k mod p
                    modpow(r, a, k, p);
                    // n = r^2 mod p
                    li.mul(tmp, r, r);
                    li.mod(n, tmp, p);
                    // n = n * a mod p
                    li.mul(tmp, n, a);
                    li.mod(n, tmp, p);
                    // r = r * a mod p
                    li.mul(tmp, r, a);
                    li.mod(r, tmp, p);
                    if (isone(n)) {
                        set(w, r);
                        return;
                    }
                    // Generate a quadratic non-residue
                    set(z, TWO);
                    // while z is a quadratic residue
                    while (jacobi(z, p) === 1) {
                        // z = z + 1
                        add(z, z, ONE);
                    }
                    set(v, k);
                    // v = 2k
                    shiftleft(v, 1);
                    // v = 2k + 1
                    add(v, v, ONE);
                    // c = z^v mod p
                    modpow(c, z, v, p);
                    let t = 0;
                    while (cmp(n, ONE) > 0) {
                        // k = n
                        set(k, n);
                        // t = s
                        t = s;
                        s = 0;
                        // k != 1
                        while (!isone(k)) {
                            // k = k^2 mod p
                            li.mul(tmp, k, k);
                            li.mod(k, tmp, p);
                            // s = s + 1
                            s++;
                        }
                        // t = t - s
                        t -= s;
                        // v = 2^(t-1)
                        set(v, ONE);
                        shiftleft(v, t - 1);
                        // c = c^v mod p
                        modpow(tmp, c, v, p);
                        set(c, tmp);
                        // r = r * c mod p
                        li.mul(tmp, r, c);
                        li.mod(r, tmp, p);
                        // c = c^2 mod p
                        li.mul(tmp, c, c);
                        li.mod(c, tmp, p);
                        // n = n * c mod p
                        li.mul(tmp, n, c);
                        li.mod(n, tmp, p);
                    }
                    set(w, r);
                };
            })();
            /**
             * Returns a raw (no leading "0x" or similar) hexadecimal
             * representation of the input with sign indicated by a leading "-"
             * character if negative and capital characters.
             *
             * @param a - SLI to represent.
             * @returns Hexadecimal representation of SLI.
             */
            function hex(a) {
                let s = "";
                if (a.sign < 0) {
                    s = "-";
                }
                return s + uli_hex(a.value);
            }
            li.hex = hex;
            /**
             * Returns the Montomery inverse of m modulo 2^WORDSIZE, i.e., the
             * inverse w such that w = -m^(-1) mod 2^WORDSIZE.
             *
             * <p>
             *
             * ASSUMES: m is non-zero and odd.
             *
             * <p>
             *
             * @returns Montgomery inverse of m.
             */
            function neginvm_mont(m) {
                // This is a naive implementation, but we cache the output in
                // calling functions so readability and conciseness takes
                // precendence.
                // Make room for result.
                const len = Math.max(2, m.length) + 1;
                const a = new SLI(len);
                const b = new SLI(len);
                const v = new SLI(len);
                // x = m
                const x = new SLI(1, m);
                // y = 2^WORDSIZE
                const y = new SLI(1, [0x0, 0x1]);
                // am + by = v = 1
                li.egcd(a, b, v, x, y);
                // -m^(-1) mod 2^WORDSIZE
                return ((1 << WORDSIZE) - a.value[0]) & MASK_ALL;
            }
            li.neginvm_mont = neginvm_mont;
        })(li = arithm.li || (arithm.li = {}));
        var MASK_ALL = verificatum.arithm.uli.MASK_ALL;
        var ModPowCtx = verificatum.arithm.uli.ModPowCtx;
        var ModularCtx = verificatum.arithm.uli.ModularCtx;
        var RandomSource = verificatum.base.RandomSource;
        var SLI = verificatum.arithm.li.SLI;
        var WORDSIZE = verificatum.arithm.uli.WORDSIZE;
        var divide = verificatum.base.divide;
        var iszero = verificatum.arithm.uli.iszero;
        var li_add = verificatum.arithm.li.add;
        var li_cmp = verificatum.arithm.li.cmp;
        var li_div_qr = verificatum.arithm.li.div_qr;
        var li_egcd = verificatum.arithm.li.egcd;
        var li_equals = verificatum.arithm.li.equals;
        var li_hex = verificatum.arithm.li.hex;
        var li_jacobi = verificatum.arithm.li.jacobi;
        var li_modsqrt = verificatum.arithm.li.modsqrt;
        var li_mul = verificatum.arithm.li.mul;
        var li_normalize = verificatum.arithm.li.normalize;
        var li_set = verificatum.arithm.li.set;
        var li_square = verificatum.arithm.li.square;
        var li_sub = verificatum.arithm.li.sub;
        var modpowprod = verificatum.arithm.uli.modpowprod;
        var modpowprodtab = verificatum.arithm.uli.modpowprodtab;
        var neginvm_mont = verificatum.arithm.li.neginvm_mont;
        var new_uli = verificatum.arithm.uli.new_uli;
        var normalize = verificatum.arithm.uli.normalize;
        var ofSubclass = verificatum.base.ofSubclass;
        var ofType = verificatum.base.ofType;
        var to_uint8_array = verificatum.arithm.uli.to_uint8_array;
        var uli_copy_uli = verificatum.arithm.uli.copy_uli;
        var uli_div_qr = verificatum.arithm.uli.div_qr;
        var uli_from_uint8_array = verificatum.arithm.uli.from_uint8_array;
        var uli_getbit = verificatum.arithm.uli.getbit;
        var uli_iszero = verificatum.arithm.uli.iszero;
        var uli_lsbit = verificatum.arithm.uli.lsbit;
        var uli_miller_rabin = verificatum.arithm.uli.miller_rabin;
        var uli_modpow_sqrmul = verificatum.arithm.uli.modpow_sqrmul;
        var uli_modpow_window = verificatum.arithm.uli.modpow_window;
        var uli_msbit = verificatum.arithm.uli.msbit;
        var uli_mul_mont = verificatum.arithm.uli.mul_mont;
        var uli_neg = verificatum.arithm.uli.neg;
        var uli_new_random = verificatum.arithm.uli.new_random;
        var uli_new_uli = verificatum.arithm.uli.new_uli;
        var uli_normalize = verificatum.arithm.uli.normalize;
        var uli_random = verificatum.arithm.uli.random;
        var uli_resize = verificatum.arithm.uli.resize;
        var uli_set = verificatum.arithm.uli.set;
        var uli_setbit = verificatum.arithm.uli.setbit;
        var uli_setzero = verificatum.arithm.uli.setzero;
        var uli_shiftleft = verificatum.arithm.uli.shiftleft;
        var uli_shiftright = verificatum.arithm.uli.shiftright;
        var uli_sign_mask = verificatum.arithm.uli.sign_mask;
        var uli_slice = verificatum.arithm.uli.slice;
        var uli_to_uint8_array = verificatum.arithm.uli.to_uint8_array;
        var uli_tosigned = verificatum.arithm.uli.tosigned;
        var uli_wasm = verificatum.arithm.uli.wasm;
        var uli_weight = verificatum.arithm.uli.weight;
        let ModPowAlg;
        (function(ModPowAlg) {
            ModPowAlg[ModPowAlg["smart"] = 0] = "smart";
            ModPowAlg[ModPowAlg["modular"] = 32] = "modular";
            ModPowAlg[ModPowAlg["montgomery"] = 48] = "montgomery";
            ModPowAlg[ModPowAlg["sqrmul"] = 2] = "sqrmul";
            ModPowAlg[ModPowAlg["window"] = 3] = "window";
            ModPowAlg[ModPowAlg["modular_sqrmul"] = 34] = "modular_sqrmul";
            ModPowAlg[ModPowAlg["montgomery_sqrmul"] = 50] = "montgomery_sqrmul";
            ModPowAlg[ModPowAlg["modular_window"] = 35] = "modular_window";
            ModPowAlg[ModPowAlg["montgomery_window"] = 51] = "montgomery_window";
        })(ModPowAlg = arithm.ModPowAlg || (arithm.ModPowAlg = {}));
        /**
         * Class which represents Montgomery's way to square and
         * multiply in a modular ring for use in exponentiation algorithms.
         */
        class MontgomeryCtx extends ModPowCtx {
            /**
             * Creates a Montgomery context from a modulus.
             *
             * @param m Modulus.
             */
            constructor(m) {
                super(m);
                // Generic temporary variable with lim1 limbs.
                this.q = [];
                // Generic temporary variable with lim2 limbs.
                this.r = [];
                // Generic temporary variable with lim2 + 1 limbs.
                this.rr = [];
                // R mod m.
                this.Rmodm = [];
                // R^2 mod m.
                this.R2modm = [];
                // one using lim1 limbs.
                this.one = [];
                uli_resize(this.q, this.lim1 + 1);
                uli_resize(this.r, this.lim2);
                uli_resize(this.rr, this.lim2 + 1);
                // These are initialized one limb too large before reduction.
                uli_resize(this.one, this.lim1);
                uli_resize(this.Rmodm, this.lim1);
                uli_resize(this.R2modm, this.lim1);
                // one = 1 using lim1 limbs.
                uli_setzero(this.one);
                this.one[0] = 0x1;
                // Rmodm = R mod m
                uli_setzero(this.r);
                this.r[this.mn] = 1;
                uli_div_qr(this.q, this.r, m);
                uli_set(this.Rmodm, this.r);
                // R2modm = R^2 mod m
                uli_setzero(this.rr);
                this.rr[2 * this.mn] = 1;
                uli_div_qr(this.q, this.rr, m);
                uli_set(this.R2modm, this.rr);
                // mw = -m^(-1) mod 2^WORDSIZE
                this.mw = neginvm_mont(this.m);
            }
            getk(bitLength) {
                let k = 4;
                if (bitLength > 768) {
                    k++;
                }
                if (bitLength > 1544) {
                    k++;
                }
                if (bitLength > 4104) {
                    k++;
                }
                if (bitLength > 6144) {
                    k++;
                }
                return k;
            }
            set(xt, x) {
                // xt = Mont(x, R^2 mod m, m)
                uli_set(this.q, x);
                uli_mul_mont(xt, this.q, this.R2modm, this.m, this.mn, this.mw);
            }
            get(x, xt) {
                // x = Mont(xt, 1, m)
                uli_mul_mont(this.r, xt, this.one, this.m, this.mn, this.mw);
                uli_set(x, this.r);
            }
            setOne(xt) {
                // xt = R mod m
                uli_set(xt, this.Rmodm);
            }
            square(wt, xt) {
                // wt = Mont(xt, xt, m)
                uli_mul_mont(wt, xt, xt, this.m, this.mn, this.mw);
            }
            mul(wt, xt, yt) {
                // wt = Mont(xt, xt, m)
                uli_mul_mont(wt, xt, yt, this.m, this.mn, this.mw);
            }
            static getCtx(m) {
                return new MontgomeryCtx(m);
            }
        }
        arithm.MontgomeryCtx = MontgomeryCtx;
        /**
         * Converts various representations of integers to and from instances
         * of LI with rigorous dynamic type checking and static typing as far
         * as is possible. This implementation is meant to be stringent, but
         * not necessarily fast. It does not treat powers of two as a special
         * case.
         */
        class LIE {
            /**
             * Returns the number of bytes needed to generate the
             * given number of bits.
             *
             * @param bitLength - Number of bits.
             * @returns Number of bytes needed.
             */
            static byteLengthRandom(bitLength) {
                return divide((bitLength + 7), 8);
            }
            /**
             * Verifies that a radix is an integer in the range [2, maxRadix],
             * where maxRadix defaults to LIE.MAX_RADIX.
             *
             * @param maxRadix - Maximal radix allowed. This defaults to LIE.MAX_RADIX.
             * @returns The input radix.
             * @throws Error if the radix is not an integer in [2, maxRadix].
             */
            static typeCheckRadix(radix, maxRadix = LIE.MAX_RADIX) {
                if (!Number.isInteger(maxRadix) ||
                    !(2 <= maxRadix && maxRadix <= LIE.MAX_RADIX)) {
                    throw Error("Maximum radix must be in " +
                        "[2," + LIE.MAX_RADIX + "]! (" + maxRadix + ")");
                }
                if (!Number.isInteger(radix)) {
                    throw Error("Radix is not an integer! (" + radix + ")");
                }
                if (!(1 < radix && radix <= maxRadix)) {
                    throw Error("Radix outside of [2," + maxRadix + "]! " +
                        "(" + radix + ")");
                }
                return radix;
            }
            /**
             * Verifies that a sign is an integer in {-1, 0, 1}.
             *
             * @returns The input sign.
             * @throws Error if the sign is not in {-1, 0, 1}.
             */
            static typeCheckSign(sign) {
                if (!Number.isInteger(sign)) {
                    throw Error("Sign is not an integer! (" + sign + ")");
                }
                if (!(sign == -1 || sign == 0 || sign == 1)) {
                    throw Error("Sign is not in {-1, 0, 1}! (" + sign + ")");
                }
                return sign;
            }
            /**
             * Verifies that the input is an array of integers in [0, bound]
             * of positive length, where inclusive bound is at most 2^30 - 1.
             *
             * @param value - Array to be checked.
             * @param bound - Inclusive upper bound on the elements of the array
             * @returns The input array.
             * @throws Error if the array does not represent a normalized
             * non-negative integer in the given basis.
             */
            static typeCheckUintArray(value, bound) {
                if (value.length == 0) {
                    throw Error("Array has zero length!");
                }
                for (let i = 0; i < value.length; i++) {
                    if (!Number.isInteger(value[i])) {
                        throw Error("Element at index " + i + "is not an integer! " +
                            "(" + value[i] + ")");
                    }
                    if (!(0 <= value[i] && value[i] <= bound)) {
                        throw Error("Integer at index " + i + " is out of bounds! " +
                            "(" + value[i] + ")");
                    }
                }
                return value;
            }
            /**
             * Verify that (sign, value) is a valid representation of a
             * sign-value represented integer, where the value is a
             * non-negative integer in minimal two's complement
             * representation, i.e., it has at most WORDSIZE leading zero
             * bits.
             *
             * @param sign - Supposedly a sign.
             * @param value - Supposedly a non-negative integer in two's complement.
             */
            static fromSignValue(sign, value, radix) {
                const tsign = LIE.typeCheckSign(sign);
                const tvalue = LIE.typeCheckUintArray(value, radix - 1);
                if (uli_iszero(tvalue)) {
                    if (tsign != 0) {
                        throw Error("A zero magnitude must have a zero sign! " +
                            "(" + tsign + ")");
                    }
                } else if (tsign == 0) {
                    throw Error("A non-zero magnitude must have a non-zero sign! " +
                        "(" + sign + ")");
                }
                return [tsign, tvalue];
            }
            /**
             * Converts an unsigned integer represented in the given radix in
             * small endian order to an instance of LI.
             *
             * @param values - Representation in small endian order.
             * @param rx - Integer radix in [2,LIE.MAX_RADIX].
             * @returns Instance of LI representing the input integer.
             */
            static fromRx(values, rx) {
                if (values.length == 1) {
                    return LIE.fromNumber(values[0]);
                } else {
                    // We swap from small to big endian order here.
                    const m = divide(values.length, 2);
                    const h = LIE.fromRx(values.slice(0, m), rx);
                    const l = LIE.fromRx(values.slice(m, values.length), rx);
                    return rx.pow(values.length - m).mul(h).add(l);
                }
            }
            /**
             * Converts a non-negative integer to the given radix in small
             * endian order.
             *
             * @param li - Non-negative integer to convert.
             * @param rx - Integer radix in [2,LIE.MAX_RADIX].
             * @returns Integer as an array of digits in small endian order in
             * the given radix.
             */
            static toRx(li, rx, rxbits) {
                if (li.cmp(rx) < 0) {
                    return [LIE.toNumber(li)];
                } else {
                    // We swap from big to small endian order here.
                    const bits = uli_msbit(li.value) + 1;
                    const m = Math.max(1, Math.floor((bits + rxbits - 1) / rxbits) - 1);
                    const divisor = rx.pow(m);
                    const [h, l] = li.divQR(divisor);
                    const ch = LIE.toRx(h, rx, rxbits);
                    const cl = LIE.toRx(l, rx, rxbits);
                    while (cl.length < m) {
                        cl.unshift(0);
                    }
                    return ch.concat(cl);
                }
            }
            /**
             * Converts a JavaScript number to an instance of LI, the input
             * must be an integer in the set [-(2^53 - 1), 2^53 - 1].
             *
             * @param num Integer of type number.
             * @return Corresponding value as a LI.
             * @throws Error if the number is not an integer.
             */
            static fromNumber(num) {
                if (!Number.isInteger(num)) {
                    throw Error("Value is not an integer! (" + num + ")");
                }
                let sign;
                if (num < 0) {
                    sign = -1;
                } else if (num > 0) {
                    sign = 1;
                } else {
                    sign = 0;
                }
                num = Math.abs(num);
                // We ensure a leading 0.
                const len = divide((53 + WORDSIZE - 1 + 1), WORDSIZE);
                const value = uli_new_uli(len);
                for (let i = 0; i < value.length; i++) {
                    value[i] = num & MASK_ALL;
                    num = divide(num, (1 << WORDSIZE));
                }
                uli_normalize(value);
                return LI.create(sign, value);
            }
            /**
             * Returns the signed number formed by interpreting the least
             * significant 53 bits of the magnitude of the input as the mantissa
             * and setting the sign.
             *
             * @param li Integer to convert.
             */
            static toNumber(li) {
                const bytes = uli_to_uint8_array(li.value);
                let i = Math.min(6, bytes.length - 1);
                let num;
                if (i == 6) {
                    num = bytes[6] & 0x1f;
                    i--;
                } else {
                    num = 0;
                }
                while (i >= 0) {
                    num = (1 << 8) * num + bytes[i];
                    i--;
                }
                return li.sign * num;
            }
            /**
             * Converts a sign value representation of an integer in the given
             * radix in small endian order to an instance of LI. Any integer
             * radix in [2,LIE.MAX_RADIX] works.
             *
             * @param rx - Integer radix in [2,LIE.MAX_RADIX].
             * @returns Integer as an array of digits in small endian order in
             * the given radix.
             */
            static fromRadix([sign, value], radix) {
                const tradix = LIE.typeCheckRadix(radix);
                const tsign = LIE.typeCheckSign(sign);
                const tvalue = LIE.typeCheckUintArray(value, tradix - 1);
                const rx = LIE.fromNumber(tradix);
                const li = LIE.fromRx(tvalue, rx);
                li.sign = tsign;
                return li;
            }
            /**
             * Converts an integer to a sign-magnitude pair in the given radix
             * in small endian order. Any integer radix in [2,LIE.MAX_RADIX] works.
             *
             * @param rx - Integer radix in [2,LIE.MAX_RADIX].
             * @returns Integer as an array of digits in small endian order in
             * the given radix.
             */
            static toRadix(li, radix) {
                const tradix = LIE.typeCheckRadix(radix);
                const rx = LIE.fromNumber(tradix);
                const a = LIE.toRx(li.abs(), rx, uli_msbit(rx.value) + 1);
                return [li.sign, a];
            }
            /**
             * Converts an integer in two's complement byte array
             * representation to a sign value pair. Spurious leading bits are
             * ignored.
             *
             * @param bytes - Two's complement representation of an integer.
             * @returns Sign value pair representation of the input integer.
             * @throws Error if the input is not a normalized representation.
             */
            static fromByteArray(bytes) {
                bytes = [...LIE.typeCheckUintArray(bytes, 0xff)];
                // Preliminary sign.
                let sign;
                if ((bytes[0] & 0x80) != 0) {
                    sign = -1;
                } else {
                    sign = 1;
                }
                // Small to big endian.
                bytes.reverse();
                // Change wordsize from 8 to WORDSIZE.
                const value = uli_from_uint8_array(bytes);
                // Non-negative magnitude.
                if (sign < 0) {
                    uli_neg(value, value);
                }
                uli_normalize(value);
                if (uli_iszero(value)) {
                    sign = 0;
                }
                return [sign, value];
            }
            static readDigit(s, i, radix) {
                const x = parseInt(s[i], radix);
                if (Number.isInteger(x)) {
                    return x;
                } else {
                    throw Error("Character at index " + i +
                        " is not a digit! (" + s[i] + ")");
                }
            }
            /**
             * Converts a string in the given radix to a sign value representation
             * in small endian order.
             *
             * @param s - String to convert.
             * @param rx - Integer radix in [2,LIE.MAX_RADIX].
             * @returns Integer as a sign value pair.
             */
            static fromString(s, radix, maxRadix = LIE.MAX_STRING_RADIX) {
                const tradix = LIE.typeCheckRadix(radix, maxRadix);
                if (s.length > 0) {
                    // Read negative sign if any.
                    let i = 0;
                    let sign = 1;
                    if (s[i] == "-") {
                        sign = -1;
                        i++;
                    }
                    if (i == s.length) {
                        throw Error("Expected at least one digit!");
                    }
                    let x = 0;
                    while (x == 0 && i < s.length) {
                        x = LIE.readDigit(s, i, tradix);
                        i++;
                    }
                    const value = [];
                    value.push(x);
                    if (x == 0 && i == s.length) {
                        sign = 0;
                    }
                    while (i < s.length) {
                        value.push(LIE.readDigit(s, i, tradix));
                        i++;
                    }
                    return LIE.fromRadix([sign, value], tradix);
                } else {
                    throw Error("Empty string!");
                }
            }
            /**
             * Returns a sign value representation of a non-negative random
             * integer with the given nominal number of bits.
             *
             * @param bitLength - Positive nominal number of bits.
             * @param randomSource - Source of randomness.
             */
            static fromRandomSource(bitLength, randomSource) {
                if (Number.isInteger(bitLength) && bitLength > 0) {
                    const value = uli_new_random(bitLength, randomSource);
                    const sign = (value.length == 1 && value[0] == 0) ? 0 : 1;
                    return [sign, value];
                } else {
                    throw Error("The bitlength is non-positive! (" + bitLength + ")");
                }
            }
        }
        /**
         * Maximal radix.
         */
        LIE.MAX_RADIX = 64;
        /**
         * Maximal radix for strings of digits in standard alphabets.
         */
        LIE.MAX_STRING_RADIX = 36;
        arithm.LIE = LIE;
        /**
         * Class for large immutable signed integers that handles memory
         * allocation and provides utility functions. All constructors perform
         * a complete dynamic type check of the inputs.
         */
        class LI extends SLI {
            /* eslint-disable sonarjs/cognitive-complexity */
            /* eslint-disable @typescript-eslint/no-explicit-any */
            constructor(...args) {
                super();
                // Shallow copy of zero used to allocate instances internally.
                if (args.length == 0) {
                    this.sign = 0;
                    this.value = [0];
                    this.length = 1;
                    // Byte array in two's complement representation.
                } else if (args.length == 1 && ofType(args[0], "array")) {
                    [this.sign, this.value] =
                    LIE.fromByteArray(args[0]);
                    // String in a given radix. Default radix is 16.
                } else if (args.length < 3 && ofType(args[0], "string")) {
                    let radix = 16;
                    if (args.length == 2) {
                        if (typeof args[1] == "number") {
                            radix = args[1];
                        } else {
                            throw Error("Radix is not a number! (" + args[1] + ")");
                        }
                    }
                    const li = LIE.fromString(args[0], radix, 36);
                    this.sign = li.sign;
                    this.value = li.value;
                } else if (args.length == 2 && ofType(args[0], "number")) {
                    // Sign and value as an array of words.
                    if (Array.isArray(args[1])) {
                        const radix = (1 << WORDSIZE);
                        [this.sign, this.value] =
                        LIE.fromSignValue(args[0], args[1], radix);
                        // Bit length and RandomSource.
                    } else if (ofSubclass(args[1], RandomSource)) {
                        [this.sign, this.value] =
                        LIE.fromRandomSource(args[0], args[1]);
                    } else {
                        throw Error("Two invalid parameters!");
                    }
                } else {
                    if (args.length > 2) {
                        throw Error("Too many parameters! (" + args.length + ")");
                    } else {
                        throw Error("Invalid parameters! (" + args + ")");
                    }
                }
                this.length = this.value.length;
            }
            /**
             * Creates an instance from a sign and a magnitude without
             * typechecking the inputs.
             *
             * @param sign - Sign.
             * @param value - Magnitude.
             */
            static create(sign, value) {
                const li = new LI();
                li.sign = sign;
                li.value = value;
                li.length = li.value.length;
                return li;
            }
            /**
             * Creates an instance from a hexadecimal string representation of
             * a byte array in small endian order interpreted as a
             * non-negative integer.
             *
             * @param s - Hexadecimal string.
             */
            static ux(s) {
                return new LI("00" + s);
            }
            /**
             * Verifies that the input is a non-negative integer.
             *
             * @param num Value.
             * @return Non-negative integer.
             */
            static typeCheckSize(num) {
                if (Number.isInteger(num)) {
                    if (num >= 0) {
                        return num;
                    } else {
                        throw Error("Negative value! (" + num + ")");
                    }
                } else {
                    throw Error("Number is not an integer! (" + num + ")");
                }
            }
            /**
             * Allocates an instance that violates the invariant that every
             * instance has a normalized magnitude. WARNING! Do not use this.
             *
             * @param limbs - Number of limbs.
             */
            static alloc(limbs) {
                return LI.create(0, uli_new_uli(LI.typeCheckSize(limbs)));
            }
            /**
             * Converts a JavaScript integer, i.e., an integer in the set
             * [-(2^53 - 1), 2^53 - 1] to an instance of LI.
             *
             * @param num Integer of type number.
             * @return Corresponding value as a LI.
             * @throws Error if the input is not an integer.
             */
            static fromNumber(num) {
                return LIE.fromNumber(num);
            }
            /**
             * Returns a random integer that is prime with probability at
             * least 1 - 2^certainty using Miller-Rabin primality test.
             *
             * @param bitLength - Bit length of generated prime.
             * @param randomSource - Source of randomness.
             * @param certainty - Determines probability of accepting a composite.
             * @returns Random integer that is most likely prime.
             */
            static getProbablePrime(bitLength, certainty, randomSource) {
                bitLength = LI.typeCheckSize(bitLength);
                certainty = LI.typeCheckSize(certainty);
                if (bitLength > 0) {
                    let li;
                    do {
                        const len = Math.floor((bitLength + WORDSIZE - 1) / WORDSIZE);
                        const p = uli_new_uli(len);
                        uli_random(p, bitLength, randomSource);
                        uli_setbit(p, bitLength - 1, 1);
                        uli_normalize(p);
                        li = LI.create(uli_iszero(p) ? 0 : 1, p);
                    } while (!li.isProbablePrime(certainty, randomSource));
                    return li;
                } else {
                    throw Error("Zero bit length of random prime!");
                }
            }
            /* eslint-enable @typescript-eslint/no-explicit-any */
            /* eslint-enable sonarjs/cognitive-complexity */
            /**
             * Chooses a suitable modular power algorithm narrowed down by the
             * input.
             *
             * @param modulus - Modulus.
             * @param alg - Requested algorithm.
             * @throws Error if the requested algorithm is not feasible for
             * the given modulus.
             */
            static chooseModPowAlg(modulus, alg) {
                if ((alg & ModPowAlg.montgomery) == ModPowAlg.smart) {
                    if (uli_wasm && modulus.getBit(0) == 1) {
                        alg |= ModPowAlg.montgomery;
                    } else {
                        alg |= ModPowAlg.modular;
                    }
                } else if ((alg & ModPowAlg.montgomery) == ModPowAlg.montgomery &&
                    modulus.getBit(0) == 0) {
                    throw Error("Even modulus with Montgomery exponentiation! (" +
                        modulus.toHexString() + ")");
                }
                if ((alg & ModPowAlg.window) == ModPowAlg.smart) {
                    alg |= ModPowAlg.window;
                }
                return alg;
            }
            /**
             * Chooses a suitable modular power algorithm narrowed down by the
             * input.
             *
             * @param modulus - Modulus.
             * @param alg - Requested algorithm.
             * @throws Error if the requested algorithm is not feasible for
             * the given modulus.
             */
            static getModPowCtxFactory(alg) {
                if ((alg & ModPowAlg.montgomery) == ModPowAlg.montgomery) {
                    return MontgomeryCtx.getCtx;
                } else {
                    return ModularCtx.getCtx;
                }
            }
            /**
             * Returns this integer as a raw array of words in two's
             * complement and caches it.
             *
             * @return Two's complement representation of this integer.
             */
            twos() {
                if (this.sign < 0) {
                    const n = uli_new_uli(this.value.length);
                    uli_neg(n, this.value);
                    return n;
                } else {
                    return this.value;
                }
            }
            /**
             * Returns true or false depending on if this integer is likely
             * to be a prime or not, determined using Miller-Rabins primality
             * test with the given number of repetitions.
             *
             * @param certainty - Repetitions of Miller-Rabins test.
             * @param randomSource - Source of randomness.
             * @returns True or false depending on if this integer is likely to
             * be a prime or not.
             */
            isProbablePrime(certainty, randomSource) {
                const x = this.abs().value;
                return uli_miller_rabin(x, certainty, randomSource);
            }
            /**
             * Returns a float64_t by interpreting the least significant 53
             * bits of this integer as the mantissa.
             *
             * @returns The 32 least significant bits of this integer in two's
             */
            numberValue() {
                return LIE.toNumber(this);
            }
            /**
             * Returns true or false depending on if this integer is zero or
             * not.
             *
             * @returns True or false depending on if this integer is zero or
             * not.
             */
            isZero() {
                return this.sign == 0;
            }
            /**
             * Compares this integer with the input.
             *
             * @param other - Other integer.
             * @returns -1, 0, or 1 depending on if this integer is smaller than,
             * equal to, or greater than the input.
             */
            cmp(other) {
                return li_cmp(this, other);
            }
            /**
             * Checks if this integer is equal to the input.
             *
             * @param other - Other integer.
             * @returns true if and only if this integer equals the input.
             */
            equals(other) {
                return li_equals(this, other);
            }
            /**
             * Bit length of this integer.
             *
             * @returns Bit length of this integer.
             */
            bitLength() {
                return uli_msbit(this.value) + 1;
            }
            /**
             * Returns the number of bits in the two's complement
             * representation of this integer that differs from the sign
             * bit. This is the Hamming weight for non-negative numbers.
             *
             * @returns Number of bits in the two's complement
             * representation of this integer that differs from the sign
             * bit.
             */
            bitCount() {
                if (this.sign < 0) {
                    const x = this.twos();
                    return x.length * WORDSIZE - uli_weight(x);
                } else {
                    return uli_weight(this.value);
                }
            }
            /**
             * Returns the index of the least significant set bit or -1 if
             * this integer is zero.
             *
             * @returns Index of the least significant set bit or -1 if
             * this integer is zero
             */
            getLSB() {
                return this.sign == 0 ? -1 : uli_lsbit(this.twos());
            }
            /**
             * Returns 1 or 0 depending on if the given bit is set or not in
             * the two's complement representation of this integer.
             *
             * @param index - Position of bit.
             * @returns 1 or 0 depending on if the given bit is set or not.
             */
            getBit(index) {
                return uli_getbit(this.twos(), LI.typeCheckSize(index));
            }
            /**
             * Set the bit at the given index to a bit value of this integer
             * in two's complement representation.
             *
             * @parameter index - Index.
             * @parameter bit - Bit.
             */
            setBit(index, bit) {
                if (0 <= bit && bit < 2) {
                    const len = Math.floor((index + WORDSIZE - 1) / WORDSIZE);
                    const x = uli_copy_uli(this.twos(), len);
                    uli_setbit(x, LI.typeCheckSize(index), bit);
                    const sign = uli_tosigned(x);
                    uli_normalize(x);
                    return LI.create(sign, x);
                } else {
                    throw Error("Value is not a bit! (" + bit + ")");
                }
            }
            /**
             * Flips the bit at the given index.
             *
             * @parameter index - Index.
             */
            flipBit(index) {
                const i = LI.typeCheckSize(index);
                return this.setBit(i, (this.getBit(i) ^ 1));
            }
            /**
             * Applies a commutative function f to words at each index of this
             * integer and the input integer. The output of f is computed
             * modulo 2^WORDSIZE.
             *
             * @param other - A second integer.
             * @return Resulting integer.
             */
            word2(other, f) {
                let x = this.twos();
                let y = other.twos();
                if (x.length < y.length) {
                    const t = x;
                    x = y;
                    y = t;
                }
                const yw = uli_sign_mask(y);
                const value = uli_new_uli(x.length);
                let i = 0;
                while (i < y.length) {
                    value[i] = f(x[i], y[i]) & MASK_ALL;
                    i++;
                }
                while (i < x.length) {
                    value[i] = f(x[i], yw) & MASK_ALL;
                    i++;
                }
                const sign = uli_tosigned(value);
                uli_normalize(value);
                return LI.create(sign, value);
            }
            /**
             * Applies the function f to words at each index of this
             * integer. The output of f is computed modulo 2^WORDSIZE.
             *
             * @return Resulting integer.
             */
            word1(f) {
                const x = this.twos();
                const value = uli_new_uli(x.length);
                for (let i = 0; i < x.length; i++) {
                    value[i] = f(x[i]) & MASK_ALL;
                }
                const sign = uli_tosigned(value);
                uli_normalize(value);
                return LI.create(sign, value);
            }
            /**
             * Returns the bitwise AND of this integer and the input.
             *
             * @param other - Other integer.
             * @returns Bitwise AND of this integer and the input.
             */
            and(other) {
                return this.word2(other, (x, y) => x & y);
            }
            /**
             * Returns the bitwise OR of this integer and the input.
             *
             * @param other - Other integer.
             * @returns Bitwise OR of this integer and the input.
             */
            or(other) {
                return this.word2(other, (x, y) => x | y);
            }
            /**
             * Returns the bitwise XOR of this integer and the input.
             *
             * @param other - Other integer.
             * @returns Bitwise XOR of this integer and the input.
             */
            xor(other) {
                return this.word2(other, (x, y) => x ^ y);
            }
            /**
             * Returns the bitwise complement of this integer.
             *
             * @param other - Other integer.
             * @returns Bitwise complement of this integer.
             */
            not() {
                return this.word1((x) => (~x & MASK_ALL));
            }
            /**
             * Shifts this integer to the left.
             *
             * @param offset - Bit positions to shift.
             * @returns This integer shifted the given number of bits to the left.
             * @throws ArithmeticException - if the shift distance is
             * Integer.MIN_VALUE.
             */
            shiftLeft(offset) {
                const os = LI.typeCheckSize(offset);
                const len = this.length + divide((os + WORDSIZE - 1), WORDSIZE);
                const value = uli_copy_uli(this.value, len);
                uli_shiftleft(value, os);
                uli_normalize(value);
                return LI.create(this.sign, value);
            }
            /**
             * Shifts this integer to the right with sign extension, i.e., an
             * arithmetic right shift.
             *
             * @param offset - Bit positions to shift.
             * @returns This integer shifted the given number of bits to the right.
             * Integer.MIN_VALUE.
             */
            shiftRight(offset) {
                const os = LI.typeCheckSize(offset);
                const value = uli_copy_uli(this.value);
                uli_shiftright(value, os);
                uli_normalize(value);
                let sign = this.sign;
                if (uli_iszero(value)) {
                    sign = 0;
                }
                return LI.create(sign, value);
            }
            /**
             * Shifts this integer to the left for positive offsets and to the
             * right for negative offsets.
             *
             * @param offset - Bit positions to shift.
             * @returns This integer shifted the given number of bits to the left
             * or right depending on the sign of the offset.
             */
            shift(offset) {
                const os = LI.typeCheckSize(offset);
                if (os > 0) {
                    return this.shiftLeft(os);
                } else {
                    return this.shiftRight(-os);
                }
            }
            /**
             * Returns the absolute value of this integer.
             * @returns Absolute value of this integer.
             */
            abs() {
                return LI.create(this.sign == 0 ? 0 : 1, this.value);
            }
            /**
             * Returns negative of this integer.
             * @returns -this.
             */
            neg() {
                return LI.create((-this.sign), this.value);
            }
            /**
             * Computes sum of this integer and the input.
             *
             * @param term - Other integer.
             * @returns this + term.
             */
            add(term) {
                const len = Math.max(this.length, term.length) + 1;
                const res = LI.alloc(len);
                li_add(res, this, term);
                li_normalize(res);
                return res;
            }
            /**
             * Computes difference of this integer and the input.
             *
             * @param term - Other integer.
             * @returns this - term.
             */
            sub(term) {
                const len = Math.max(this.length, term.length) + 1;
                const res = LI.alloc(len);
                li_sub(res, this, term);
                li_normalize(res);
                return res;
            }
            /**
             * Computes product of this integer and the input.
             *
             * @param factor - Other integer.
             * @returns this * term.
             */
            mul(factor) {
                const len = this.length + factor.length;
                const res = LI.alloc(len);
                li_mul(res, this, factor);
                li_normalize(res);
                return res;
            }
            /**
             * Computes square of this integer.
             * @returns this * this.
             */
            square() {
                const len = 2 * this.length;
                const res = LI.alloc(len + 1);
                li_square(res, this);
                li_normalize(res);
                return res;
            }
            /**
             * Returns [q, r] such that q = this / divisor + r with
             * 0 <= |r| < divisor. Note that r may be negative, i.e., we round
             * division towards -infinity.
             *
             * @param divisor - Divisor.
             * @returns Quotient and divisor.
             */
            divQR(divisor) {
                if (divisor.sign === 0) {
                    throw Error("Attempt to divide by zero!");
                } else {
                    // All are normalized, so we can count limbs.
                    const len = this.length;
                    const dlen = divisor.length;
                    const qlen = Math.max(1, len - dlen) + 1;
                    // We require leading zeros and add 1 extra to each.
                    const remainder = LI.alloc(len + 3);
                    li_set(remainder, this);
                    const quotient = LI.alloc(qlen + 1);
                    // Compute result.
                    li_div_qr(quotient, remainder, divisor);
                    li_normalize(quotient);
                    li_normalize(remainder);
                    return [quotient, remainder];
                }
            }
            /**
             * Computes the integer quotient of this integer and the input.
             *
             * @param divisor - Integer divisor.
             * @returns this / divisor with rounding according to signs.
             */
            div(divisor) {
                return this.divQR(divisor)[0];
            }
            /**
             * Computes the integer remainder of this integer and the input. Note
             * that the remainder may be negative if this and divisor have
             * different signs.
             *
             * @param divisor - Integer divisor.
             * @returns this % divisor with rounding according to signs.
             */
            remainder(divisor) {
                return this.divQR(divisor)[1];
            }
            /**
             * Computes integer remainder of this integer divided by
             * the input as a value in [0, modulus - 1].
             *
             * @param modulus - Divisor.
             * @returns Integer remainder.
             */
            mod(modulus) {
                if (modulus.sign > 0) {
                    const li = this.remainder(modulus);
                    return li.sign < 0 ? li.add(modulus) : li;
                } else {
                    throw Error("Non-positive modulus! (" +
                        modulus.toHexString() + ")");
                }
            }
            /**
             * Syntactic sugar for this.add(term).mod(modulus).
             *
             * @param term - Other integer.
             * @param modulus - Modulus.
             * @returns (this + term) mod modulus.
             */
            modAdd(term, modulus) {
                return this.add(term).mod(modulus);
            }
            /**
             * Syntactic sugar for this.sub(term).mod(modulus).
             *
             * @param term - Other integer.
             * @param modulus - Modulus.
             * @returns (this - term) mod modulus.
             */
            modSub(term, modulus) {
                return this.sub(term).mod(modulus);
            }
            /**
             * Syntactic sugar for this.mul(factor).mod(modulus).
             *
             * @param term - Other integer.
             * @param modulus - Modulus.
             * @returns (this * term) mod modulus.
             */
            modMul(factor, modulus) {
                return this.mul(factor).mod(modulus);
            }
            /**
             * Computes modular power of this integer raised to the exponent
             * modulo the given modulus. This integer must be non-negative.
             *
             * @param exponent - Non-negative exponent.
             * @param modulus - Integer greater than one.
             * @param alg - Algorithm used.
             * @returns this^exponent mod modulus for positive integers.
             * @throws Error if Montgomery exponentiation is used with even
             * modulus, or if the exponent is negative and this integer is not
             * relatively prime to the modulus.
             */
            modPow(exponent, modulus, alg = ModPowAlg.smart) {
                // modulus <= 0 is undefined.
                if (modulus.sign <= 0) {
                    throw Error("Non-positive modulus! (" +
                        modulus.toHexString() + ")");
                }
                // 0 < modulus
                let basis = this.cmp(modulus) < 0 ? this : this.mod(modulus);
                // 0 <= basis < modulus
                if (exponent.sign < 0) {
                    // This throws an error if basis and modulus are not
                    // relatively prime.
                    basis = basis.modInv(modulus);
                    exponent = exponent.neg();
                }
                // 0 <= basis < modulus, 0 <= exponent
                if (modulus.value.length == 1 && modulus.value[0] == 1) {
                    // 0 ^ exponent mod 1 = 0
                    return LI.ZERO;
                    // 0 <= basis < modulus, 0 <= exponent
                } else if (exponent.sign == 0) {
                    // basis ^ 0 mod m = 1
                    return LI.ONE;
                    // 0 <= basis < modulus, 0 < exponent
                } else if (basis.sign == 0) {
                    // 0 ^ exponent mod modulus = 0
                    return LI.ZERO;
                    // 0 < basis < modulus, 0 < exponent
                } else {
                    const b = basis.value;
                    const e = exponent.value;
                    const m = modulus.value;
                    const w = uli_new_uli(m.length);
                    // 0 < b < m, 0 < e
                    // w.length = b.length = m.length
                    alg = LI.chooseModPowAlg(modulus, alg);
                    const ctxFactory = LI.getModPowCtxFactory(alg);
                    if ((alg & ModPowAlg.window) == ModPowAlg.sqrmul) {
                        uli_modpow_sqrmul(w, b, e, m, ctxFactory);
                    } else {
                        uli_modpow_window(w, b, e, m, ctxFactory);
                    }
                    uli_normalize(w);
                    return w.length == 1 && w[0] == 0 ? LI.ZERO : LI.create(1, w);
                }
            }
            /**
             * Computes extended greatest common divisor tuple [a, b, v] such
             * that a * this + b * other = v with v >= 0. If this = 0, then it
             * is guaranteed that a = 0, and correspondingly for other and b
             * to guarantee a unique minimal solution.
             *
             * @param other - Other integer.
             * @returns Typle [a, b, v] such that a * this + b * other = v.
             */
            egcd(other) {
                const len = Math.max(this.length, other.length) + 1;
                const a = LI.alloc(len);
                const b = LI.alloc(len);
                const v = LI.alloc(len);
                li_egcd(a, b, v, this.abs(), other.abs());
                a.sign *= this.sign;
                b.sign *= other.sign;
                li_normalize(a);
                li_normalize(b);
                li_normalize(v);
                return [a, b, v];
            }
            /**
             * Computes modular inverse of this integer modulo the input
             * modulus, which must be relative prime to this integer.
             *
             * @param modulus - Modulus.
             * @returns Integer 0 < x < modulus such that x * this = 1 mod modulus.
             * @throws Error if this integer is not relative prime with the
             * modulus.
             */
            modInv(modulus) {
                const x = this.mod(modulus);
                const abv = x.egcd(modulus);
                if (abv[2].value.length == 1 && abv[2].value[0] != 1) {
                    throw Error("This integer is not relative prime with the " +
                        "modulus! (" + abv[2].toHexString() + ")");
                } else if (abv[0].sign < 0) {
                    return modulus.add(abv[0]);
                } else {
                    return abv[0];
                }
            }
            /**
             * Returns (this | modulus), i.e., the Jacobi symbol of this
             * modulo modulus for an odd modulus > 2.
             *
             * @param modulus - An odd modulus > 2.
             * @returns Jacobi symbol of this instance modulo the input.
             */
            jacobi(modulus) {
                if (modulus.cmp(LI.TWO) > 0 && modulus.getBit(0) == 1) {
                    return li_jacobi(this.mod(modulus), modulus);
                } else {
                    throw Error("Modulus is not an odd integer greater than two! " +
                        "(" + modulus.toString() + ")");
                }
            }
            /**
             * Returns a square root of this integer modulo an odd
             * prime, where this integer is a quadratic residue modulo the prime.
             *
             * @param prime - An odd prime modulus.
             * @returns Square root of this integer modulo the input odd prime.
             */
            modSqrt(prime) {
                const res = LI.alloc(prime.length);
                li_modsqrt(res, this, prime);
                li_normalize(res);
                return res;
            }
            /**
             * Returns the bits between the start index and end index of the
             * absolute value of this intger as an integer.
             *
             * @param start - Inclusive start index.
             * @param end - Exclusive end index.
             * @returns Bits between the start index and end index of the
             * absolute integer of this integer as an integer.
             */
            slice(start, end) {
                const s = LI.typeCheckSize(start);
                const e = LI.typeCheckSize(end);
                if (s < e) {
                    const value = uli_slice(this.value, s, e);
                    uli_normalize(value);
                    let sign = this.sign;
                    if (uli_iszero(value)) {
                        sign = 0;
                    }
                    return LI.create(sign, value);
                } else {
                    throw Error("Invalid indices! (" + s + ", " + e + ")");
                }
            }
            /**
             * Returns this integer as a byte array in small endian two's
             * complement representation with sign extension if a larger
             * length is requested.
             *
             * @param len - Length of output, if larger than the needed number
             * of bytes it is sign extended, and if smaller it is truncated.
             * @returns Resulting array.
             */
            toByteArray(len) {
                const bytes = to_uint8_array(this.twos());
                if (typeof len != "undefined") {
                    const l = LI.typeCheckSize(len);
                    if (l > bytes.length) {
                        const bl = bytes.length;
                        const mask = (bytes[bl - 1] & 0x80) == 0 ? 0 : 0xff;
                        bytes.length = l;
                        for (let i = bl; i < l; i++) {
                            bytes[i] = mask;
                        }
                    } else if (l < bytes.length) {
                        bytes.length = l;
                    }
                }
                return bytes.reverse();
            }
            /**
             * Computes a hexadecimal representation of this integer.
             * @returns Hexadecimal representation of this integer.
             */
            toHexString() {
                return li_hex(this);
            }
            /**
             * Raises this integer to the given exponent.
             *
             * @param exponent - Non-negative exponent in [0,2^30-1].
             * @returns Power of this integer.
             */
            pow(exponent) {
                if (Number.isInteger(exponent) &&
                    0 <= exponent && exponent < (1 << 30)) {
                    let mask = 1 << 29;
                    while ((exponent & mask) == 0) {
                        mask >>>= 1;
                    }
                    let A = LI.ONE;
                    while (mask != 0) {
                        A = A.square();
                        if ((exponent & mask) != 0) {
                            A = A.mul(this);
                        }
                        mask >>= 1;
                    }
                    return A;
                } else {
                    throw Error("Exponent not integer in [0,2^30-1]! " +
                        "(" + exponent + ")");
                }
            }
            /**
             * Converts this integer to a string in the given radix. Negative
             * integers are indicated by a leading "-" character. The alphabet
             * for each digit is defined by the JavaScript Number.toString()
             * method for radix in [2,36]. Use LIE.toRadix() and your own
             * alphabet for converting to strings with larger radix.
             *
             * @param rx - Integer radix in [2,36], defaults to 10.
             * @returns Integer as an array of digits in small endian order in
             * the given radix, possibly with a leading "-" for negative integers.
             */
            toString(radix = 10) {
                const [sign, value] = LIE.toRadix(this, radix);
                let s = sign < 0 ? "-" : "";
                let i = 0;
                while (i < value.length - 1 && value[i] == 0) {
                    i++;
                }
                while (i < value.length) {
                    s += value[i].toString(radix);
                    i++;
                }
                return s;
            }
        }
        /**
         * Representation of zero.
         */
        LI.ZERO = LI.create(0, [0]);
        /**
         * Representation of one.
         */
        LI.ONE = LI.create(1, [1]);
        /**
         * Representation of two.
         */
        LI.TWO = LI.create(1, [2]);
        arithm.LI = LI;
        /**
         * Pre-computes values to be used for simultaneous exponentiation for
         * a given list b of k bases and a modulus m. The method {@link
         * ModPowProd.modPowProd} then takes a list of exponents e and outputs
         * the modular power product
         *
         * <p>
         *
         * g[0] ^ e[0] * ... * g[k - 1] ^ e[k - 1] mod m.
         *
         * <p>
         *
         * The number of exponents must match the number of bases for which
         * pre-computation is performed.
         */
        class ModPowProd {
            /**
             * Creates a table for the given bases, modulus, and width.
             *
             * @param bases - List of bases.
             * @param modulus - Modulus.
             * @param width - Width of each subtable.
             */
            constructor(bases, modulus, width) {
                const b = [];
                for (let i = 0; i < bases.length; i++) {
                    b[i] = bases[i].value;
                }
                this.noBases = bases.length;
                this.modulus = modulus;
                this.width = Math.min(width, ModPowProd.maxWidth);
                this.t = modpowprodtab(b, modulus.value, this.width);
            }
            /**
             * Computes a power-product using the given exponents.
             *
             * @param exponents - Exponents.
             * @returns Power product.
             */
            modPowProd(exponents) {
                if (exponents.length !== this.noBases) {
                    throw Error("Wrong number of exponents! (" +
                        exponents.length + " != " + this.noBases + ")");
                }
                const e = [];
                for (let i = 0; i < exponents.length; i++) {
                    e[i] = exponents[i].value;
                }
                const value = new_uli(this.modulus.length);
                modpowprod(value, this.t, e, this.modulus.value, this.width);
                normalize(value);
                let sign;
                if (iszero(value)) {
                    sign = 0;
                } else {
                    sign = 1;
                }
                return new LI(sign, value);
            }
        }
        ModPowProd.maxWidth = 16;
        arithm.ModPowProd = ModPowProd;
        /**
         * Fixed-basis exponentiation based on simultantaneous
         * exponentiation with exponent slicing.
         *
         * @param basis - Basis.
         * @param modulus - Modulus.
         * @param size - Expected number of exponentiations to compute.
         * @param width - If given this determines the width of the pre-computed
         * table, and otherwise it is chosen theoretically optimally.
         */
        class FixModPow {
            constructor(basis, modulus, size, width) {
                const bitLength = modulus.bitLength();
                if (typeof width === "undefined") {
                    width = FixModPow.optimalWidth(bitLength, size);
                }
                // Determine the number of bits associated with each bases.
                this.sliceSize = divide((bitLength + width - 1), width);
                // Create radix element.
                const powerBasis = LI.ONE.shiftLeft(this.sliceSize);
                // Create generators.
                const bases = [];
                bases[0] = basis;
                for (let i = 1; i < width; i++) {
                    bases[i] = bases[i - 1].modPow(powerBasis, modulus);
                }
                // Invoke the pre-computation of the simultaneous exponentiation
                // code.
                this.mpp = new ModPowProd(bases, modulus, width);
            }
            /**
             * Cuts an input integer into the appropriate number of
             * slices and outputs a list of integers such that the ith bit belongs
             * to the ith slice.
             *
             * @param exponent - Exponent.
             * @returns Array of exponents.
             */
            slice(exponent) {
                const exponents = [];
                const bitLength = exponent.bitLength();
                let offset = 0;
                let i = 0;
                while (i < this.mpp.width - 1 && offset < bitLength) {
                    exponents[i] = exponent.slice(offset, offset + this.sliceSize);
                    offset += this.sliceSize;
                    i++;
                }
                // There is no bound on the bit size of the last slice.
                if (offset < bitLength) {
                    exponents[i] = exponent.slice(offset, bitLength);
                    offset += this.sliceSize;
                    i++;
                }
                while (i < this.mpp.width) {
                    exponents[i] = LI.ZERO;
                    i++;
                }
                return exponents;
            }
            /**
             * Raises the fixed basis to the given exponent given the
             * fixed modulus.
             *
             * @param exponent - Exponent.
             * @returns Power of fixed basis to the given exponent.
             */
            modPow(exponent) {
                return this.mpp.modPowProd(this.slice(exponent));
            }
            /**
             * Takes the bit length of the exponents and the number
             * of exponentiations that we expect to compute and returns the
             * theoretically optimal width.
             *
             * @param bitLength - Expected bit length of exponents.
             * @param size - Expected number of exponentiations to compute.
             * @returns Theoretically optimal choice of width for the expected bit
             * length and number of exponentiations.
             */
            static optimalWidth(bitLength, size) {
                let width = 2;
                let cost = 1.5 * bitLength;
                let oldCost;
                do {
                    oldCost = cost;
                    // Amortized cost for table.
                    const t = ((1 << width) - width + bitLength) / size;
                    // Cost for multiplication.
                    const m = bitLength / width;
                    cost = t + m;
                    width++;
                } while (width <= 16 && cost < oldCost);
                // We reduce the theoretical value by one to account for the
                // overhead.
                return width - 1;
            }
        }
        arithm.FixModPow = FixModPow;
        /**
         * Drop-in replacement for the BigInteger class of Tom Wu's JSBN
         * library.
         *
         * <p>
         *
         * This implements the functionality of the Java class
         * java.math.BigInteger from JDK 8 faithfully when possible at
         * all. The class verificatum.arithm.LIE may also be relevant for
         * encoding purposes. Bit operations and printing in different radix
         * is implemented in a simplistic slow way in some cases. We recommend
         * using VTS-BA to implement any algorithms.
         *
         * <p>
         *
         * The following methods appear in java.math.BigInteger JDK 8, but do
         * not make sense in TypeScript/JavaScript.
         *
         * <pre>
         * public static long BigInteger valueOf(long)
         * public float floatValue()
         * public long longValue()
         * public double doubleValue()
         * public int hashCode()
         * </pre>
         */
        class BigInteger {
            constructor(...args) {
                if (args.length == 1) {
                    if (ofType(args[0], LI)) {
                        this.li = args[0];
                    } else if (typeof args[0] == "string") {
                        this.li = new LI(args[0], 10);
                    } else if (ofType(args[0], "array")) {
                        this.li = new LI(args[0].reverse());
                    } else {
                        this.li = new LI(args[0]);
                    }
                } else if (args.length == 2) {
                    this.li = new LI(args[0], args[1]);
                } else if (args.length == 3) {
                    this.li = LI.getProbablePrime(args[0], args[1], args[2]);
                } else {
                    throw Error("Invalid number of parameters! (" + args.length + ")");
                }
            }
            /**
             * Initializes the random source of this instance. This has to be
             * set to use invoke isProbablePrime(), nextProbablePrime(), and
             * to use the constructor to generate a random prime.
             *
             * @param randomSource - Source of randomness.
             */
            static setRandomSource(randomSource) {
                BigInteger.randomSource = randomSource;
            }
            /**
             * Returns the underlying instance of LI.
             */
            toLI() {
                return this.li;
            }
            /**
             * Returns the sign of this integer.
             *
             * @returns Signum of this integer.
             */
            signum() {
                return this.li.sign;
            }
            /**
             * Returns the absolute value of this integer.
             *
             * @returns Absolute value of this integer.
             */
            abs() {
                return new BigInteger(this.li.abs());
            }
            /**
             * Returns negative of this integer.
             *
             * @returns -this.
             */
            negate() {
                return new BigInteger(this.li.neg());
            }
            /**
             * Computes sum of this integer and the input.
             *
             * @param term - Other integer.
             * @returns this + term.
             */
            add(term) {
                return new BigInteger(this.li.add(term.li));
            }
            /**
             * Computes difference of this integer and the input.
             *
             * @param term - Other integer.
             * @returns this - term.
             */
            subtract(term) {
                return new BigInteger(this.li.sub(term.li));
            }
            /**
             * Computes product of this integer and the input.
             *
             * @param factor - Other integer.
             * @returns this * term.
             */
            multiply(factor) {
                return new BigInteger(this.li.mul(factor.li));
            }
            /**
             * Returns [q, r] such that q = this / divisor + r with
             * this / divisor and r rounded with sign, in particular, if divisor
             * is positive, then 0 <= r < divisor.
             *
             * @param divisor - Non-zero divisor.
             * @returns Quotient and divisor.
             */
            divideAndRemainder(divisor) {
                const [q, r] = this.li.divQR(divisor.li);
                return [new BigInteger(q), new BigInteger(r)];
            }
            /**
             * Computes the integer quotient of this integer and the
             * input. See divideAndRemainder().
             *
             * @param divisor - Integer divisor.
             * @returns this / divisor for integers with rounding
             * according to signs.
             */
            divide(divisor) {
                return new BigInteger(this.li.div(divisor.li));
            }
            /**
             * Computes integer remainder of this integer divided by the
             * input. The remainder may be negative when the parameters have
             * different signs. See divideAndRemainder().
             *
             * @param divisor - Non-zero divisor.
             * @returns Integer remainder.
             */
            remainder(divisor) {
                return new BigInteger(this.li.remainder(divisor.li));
            }
            /**
             * Computes integer remainder of this integer divided by
             * the input as a value in [0, modulus - 1].
             *
             * @param modulus - Positive modulus.
             * @returns Integer remainder.
             */
            mod(modulus) {
                return new BigInteger(this.li.mod(modulus.li));
            }
            /**
             * Raises this integer to the given exponent.
             *
             * @param exponent - Non-negative exponent.
             * @returns Power of this integer.
             */
            pow(exponent) {
                return new BigInteger(this.li.pow(exponent));
            }
            /**
             * Computes modular inverse of this integer modulo the input
             * modulus, which must be relative prime to this integer.
             *
             * @param modulus - Modulus.
             * @returns Integer x such that x * this = 1 mod modulus, where 0
             * <= x < modulus.
             */
            modInverse(modulus) {
                return new BigInteger(this.li.modInv(modulus.li));
            }
            /**
             * Computes modular power of this integer raised to the exponent
             * modulo the given modulus. The modulus must be non-negative and
             * this must either be non-negative or relatively prime with the
             * modulus.
             *
             * @param exponent - Exponent.
             * @param modulus - Integer greater than one.
             * @returns this^exponent mod modulus for positive integers.
             */
            modPow(exponent, modulus) {
                return new BigInteger(this.li.modPow(exponent.li, modulus.li));
            }
            /**
             * Computes greatest common divisor.
             *
             * @param other - Other integer.
             * @returns Greatest common divisor of this integer and the input.
             */
            gcd(other) {
                return new BigInteger(this.li.egcd(other.li)[2]);
            }
            isProbablePrime(certainty, randomSource) {
                if (typeof randomSource == "undefined") {
                    if (typeof BigInteger.randomSource != "undefined") {
                        randomSource = BigInteger.randomSource;
                    } else {
                        throw Error("The random source has not been initialized!");
                    }
                }
                return this.li.isProbablePrime(certainty, randomSource);
            }
            /**
             * Returns the smallest integer greater than the absolute value of
             * this integer that that passes the Miller-Rabin primality test
             * with BigInteger.MILLER_RABIN_REPS repetitions.
             *
             * @returns the first integer greater than this BigInteger that is
             * probably prime.
             * @throws ArithmeticException - this < 0.
             */
            nextProbablePrime() {
                if (typeof BigInteger.randomSource != "undefined") {
                    let li = this.li.abs();
                    // Next odd integer.
                    if (li.getBit(0) == 0) {
                        li = li.add(LI.ONE);
                    } else {
                        li = li.add(LI.TWO);
                    }
                    // Iterate through odd integers from this point.
                    while (!li.isProbablePrime(BigInteger.MILLER_RABIN_REPS, BigInteger.randomSource)) {
                        li = li.add(LI.TWO);
                    }
                    return new BigInteger(li);
                } else {
                    throw Error("The random source has not been initialized!");
                }
            }
            /**
             * Compares this integer with the input.
             *
             * @param other - Other integer.
             * @returns -1, 0, or 1 depending on if this integer is smaller than,
             * equal to, or greater than the input.
             */
            compareTo(other) {
                return this.li.cmp(other.li);
            }
            /**
             * Checks if this integer is equal to the input.
             *
             * @param other - Other integer.
             * @returns true if and only if this integer equals the input.
             */
            equals(other) {
                return this.li.equals(other.li);
            }
            /**
             * Returns the minimum of this integer and the input or this
             * integer if they are equal.
             *
             * @param other - Other integer.
             * @returns Minimum of this integer and the input.
             */
            min(other) {
                return this.li.cmp(other.li) > 0 ? other : this;
            }
            /**
             * Returns the maximum of this integer and the input or this
             * integer if they are equal.
             *
             * @param other - Other integer.
             * @returns Maximum of this integer and the input.
             */
            max(other) {
                return this.li.cmp(other.li) < 0 ? other : this;
            }
            /**
             * Returns a string representation of this integer in the given
             * radix. The default is decimal and the radix must be an integer
             * in [2, 36].
             *
             * @returns String representation of this integer.
             */
            toString(radix = 10) {
                return this.li.toString(radix);
            }
            /**
             * Returns this integer in big endian two's complement
             * representation, i.e., the most significant byte appears last
             * and has a leading signum bit.
             *
             * @returns Byte array representation of this integer.
             */
            toByteArray() {
                return this.toByteArray();
            }
            /**
             * Returns the 32 least significant bits of this integer in two's
             * complement.
             *
             * @returns The 32 least significant bits of this integer in two's
             */
            intValue() {
                return this.li.numberValue() & 0xffffffff;
            }
            /**
             * This integer as a 16-bit signed integer.
             *
             * @returns This integer as a 16-bit signed integer.
             */
            shortValue() {
                return this.li.numberValue() & 0xffff;
            }
            /**
             * This integer as a 32-bit signed integer represented as a
             * JavaScript number.
             *
             * @returns This integer as a 32-bit signed integer represented as a
             * JavaScript number.
             */
            byteValue() {
                return this.li.numberValue() & 0xff;
            }
            /**
             * Shifts this integer to the left. A negative offset shifts the
             * absolute value to the left.
             *
             * @param offset - Bit positions to shift.
             * @returns This integer shifted the given number of bits to the left.
             */
            shiftLeft(offset) {
                return new BigInteger(this.li.shift(offset));
            }
            /**
             * Shifts this integer to the right. A negative offset shifts the
             * absolute value to the left.
             *
             * @param offset - Bit positions to shift.
             * @returns This integer shifted the given number of bits to the right.
             */
            shiftRight(offset) {
                return new BigInteger(this.li.shift(-offset));
            }
            /**
             * Returns the bitwise AND of this integer and the input.
             *
             * @param other - Other integer.
             * @returns Bitwise AND of this integer and the input.
             */
            and(other) {
                return new BigInteger(this.li.and(other.li));
            }
            /**
             * Returns the bitwise OR of this integer and the input.
             *
             * @param other - Other integer.
             * @returns Bitwise OR of this integer and the input.
             */
            or(other) {
                return new BigInteger(this.li.or(other.li));
            }
            /**
             * Returns the bitwise XOR of this integer and the input.
             *
             * @param other - Other integer.
             * @returns Bitwise XOR of this integer and the input.
             */
            xor(other) {
                return new BigInteger(this.li.xor(other.li));
            }
            /**
             * Returns the bitwise complement of this integer.
             *
             * @param other - Other integer.
             * @returns Bitwise complement of this integer.
             */
            not() {
                return new BigInteger(this.li.not());
            }
            /**
             * Syntactic sugar for this.and(other.not()).
             *
             * @param other - Other integer.
             * @returns Bitwise and of this integer and the complement of the
             * input.
             */
            andNot(other) {
                return this.and(other.not());
            }
            /**
             * Returns true if the bit is set and false otherwise.
             *
             * @param index Index of bit.
             * @returns The bit as a boolean.
             */
            testBit(index) {
                return this.li.getBit(index) == 1;
            }
            /**
             * Sets the bit at the given index.
             *
             * @parameter index - Index.
             */
            setBit(index) {
                return new BigInteger(this.li.setBit(index, 1));
            }
            /**
             * Clears the bit at the given index.
             *
             * @parameter index - Index.
             */
            clearBit(index) {
                return new BigInteger(this.li.setBit(index, 0));
            }
            /**
             * Returns a BigInteger whose value is equivalent to this BigInteger
             * with the designated bit flipped. (Computes (this ^ (1<<n)).)
             *
             * @param n - index of bit to flip.
             * @returns this ^ (1<<n)
             * @throws ArithmeticException - n is negative.
             */
            flipBit(index) {
                return new BigInteger(this.li.flipBit(index));
            }
            /**
             * Returns the index of the least significant set bit or -1 if
             * this integer is zero.
             *
             * @returns Index of the least significant set bit or -1 if
             * this integer is zero
             */
            getLowestSetBit() {
                return this.li.getLSB();
            }
            /**
             * Bit length of this integer in two's complement excluding sign
             * bit.
             *
             * @returns Bit length of this integer.
             */
            bitLength() {
                return this.li.bitLength();
            }
            /**
             * Returns the number of bits in the two's complement
             * representation of this integer that differs from the sign
             * bit. This is the Hamming weight for non-negative numbers.
             *
             * @returns Number of bits in the two's complement
             * representation of this integer that differs from the sign
             * bit.
             */
            bitCount() {
                return this.li.bitCount();
            }
            /**
             * Clones this integer.
             *
             * @returns Clone of this integer.
             */
            clone() {
                // We do not need to clone deep, but we need to return a new
                // object to guarantee that instances of BigInteger are
                // distinct if this is exploited by the user.
                return new BigInteger(this.li);
            }
            /**
             * Computes modular power of this integer raised to the exponent
             * modulo the given modulus. This integer must be non-negative.
             *
             * @param exponent - Non-negative exponent.
             * @param modulus - Integer greater than one.
             * @returns this^exponent mod modulus for positive integers.
             */
            modPowInt(exponent, modulus) {
                if (exponent >= 0) {
                    const e = new LI(Number(exponent).toString(16), 16);
                    return new BigInteger(this.li.modPow(e, modulus.li));
                } else {
                    throw Error("Negative exponent! (" + exponent + ")");
                }
            }
        }
        /**
         * The BigInteger constant zero.
         */
        BigInteger.ZERO = new BigInteger(LI.ZERO);
        /**
         * The BigInteger constant one.
         */
        BigInteger.ONE = new BigInteger(LI.ONE);
        /**
         * The BigInteger constant ten.
         */
        BigInteger.TEN = new BigInteger("0A", 16);
        /**
         * Default number of repetitions of Miller-Rabin primality test.
         */
        BigInteger.MILLER_RABIN_REPS = 100;
        arithm.BigInteger = BigInteger;
    })(arithm = verificatum.arithm || (verificatum.arithm = {}));
})(verificatum || (verificatum = {}));