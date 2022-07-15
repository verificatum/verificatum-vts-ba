
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

/* eslint-disable @typescript-eslint/brace-style */
/* eslint-disable @typescript-eslint/member-delimiter-style */

// ###############################################################
//
// Define union set types that allow implicit upward casting.

/**
 * Subset of non-negative integers.
 */
type S4 = 4;

/**
 * Subset of non-negative integers.
 */
type S5 = S4 | 5;

/**
 * Subset of non-negative integers.
 */
type S6 = S5 | 6;

/**
 * Subset of non-negative integers.
 */
type S7 = S6 | 7;

/**
 * Subset of non-negative integers.
 */
type S8 = S7 | 8;

/**
 * Subset of non-negative integers.
 */
type S9 = S8 | 9;

/**
 * Subset of non-negative integers.
 */
type S10 = S9 | 10;

/**
 * Subset of non-negative integers.
 */
type S11 = S10 | 11;

/**
 * Subset of non-negative integers.
 */
type S12 = S11 | 12;

/**
 * Subset of non-negative integers.
 */
type S13 = S12 | 13;

/**
 * Subset of non-negative integers.
 */
type S14 = S13 | 14;

/**
 * Subset of non-negative integers.
 */
type S15 = S14 | 15;

/**
 * Subset of non-negative integers.
 */
type S16 = S15 | 16;

/**
 * Subset of non-negative integers.
 */
type S17 = S16 | 17;

/**
 * Subset of non-negative integers.
 */
type S18 = S17 | 18;

/**
 * Subset of non-negative integers.
 */
type S19 = S18 | 19;

/**
 * Subset of non-negative integers.
 */
type S20 = S19 | 20;

/**
 * Subset of non-negative integers.
 */
type S21 = S20 | 21;

/**
 * Subset of non-negative integers.
 */
type S22 = S21 | 22;

/**
 * Subset of non-negative integers.
 */
type S23 = S22 | 23;

/**
 * Subset of non-negative integers.
 */
type S24 = S23 | 24;

/**
 * Subset of non-negative integers.
 */
type S25 = S24 | 25;

/**
 * Subset of non-negative integers.
 */
type S26 = S25 | 26;

/**
 * Subset of non-negative integers.
 */
type S27 = S26 | 27;

/**
 * Subset of non-negative integers.
 */
type S28 = S27 | 28;

/**
 * Subset of non-negative integers.
 */
type S29 = S28 | 29;

/**
 * Subset of non-negative integers.
 */
type S30 = S29 | 30;

/**
 * Subset of non-negative integers.
 */
type S31 = S30 | 31;

/**
 * Subset of non-negative integers.
 */
type S32 = S31 | 32;

/**
 * Subset of non-negative integers.
 */
type S33 = S32 | 33;

/**
 * Subset of non-negative integers.
 */
type S34 = S33 | 34;

/**
 * Subset of non-negative integers.
 */
type S35 = S34 | 35;

/**
 * Subset of non-negative integers.
 */
type S36 = S35 | 36;

/**
 * Subset of non-negative integers.
 */
type S37 = S36 | 37;

/**
 * Subset of non-negative integers.
 */
type S38 = S37 | 38;

/**
 * Subset of non-negative integers.
 */
type S39 = S38 | 39;

/**
 * Subset of non-negative integers.
 */
type S40 = S39 | 40;

/**
 * Subset of non-negative integers.
 */
type S41 = S40 | 41;

/**
 * Subset of non-negative integers.
 */
type S42 = S41 | 42;

/**
 * Subset of non-negative integers.
 */
type S43 = S42 | 43;

/**
 * Subset of non-negative integers.
 */
type S44 = S43 | 44;

/**
 * Subset of non-negative integers.
 */
type S45 = S44 | 45;

/**
 * Subset of non-negative integers.
 */
type S46 = S45 | 46;

/**
 * Subset of non-negative integers.
 */
type S47 = S46 | 47;

/**
 * Subset of non-negative integers.
 */
type S48 = S47 | 48;

/**
 * Subset of non-negative integers.
 */
type S49 = S48 | 49;

/**
 * Subset of non-negative integers.
 */
type S50 = S49 | 50;

/**
 * Subset of non-negative integers.
 */
type S51 = S50 | 51;

/**
 * Subset of non-negative integers.
 */
type S52 = S51 | 52;

/**
 * Subset of non-negative integers.
 */
type S53 = S52 | 53;

// ###############################################################
//
// Define brands for unsigned integer types in terms of the union set
// types.

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint4_brand { __ubrand__?: S4; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint5_brand { __ubrand__?: S5; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint6_brand { __ubrand__?: S6; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint7_brand { __ubrand__?: S7; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint8_brand { __ubrand__?: S8; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint9_brand { __ubrand__?: S9; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint10_brand { __ubrand__?: S10; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint11_brand { __ubrand__?: S11; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint12_brand { __ubrand__?: S12; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint13_brand { __ubrand__?: S13; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint14_brand { __ubrand__?: S14; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint15_brand { __ubrand__?: S15; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint16_brand { __ubrand__?: S16; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint17_brand { __ubrand__?: S17; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint18_brand { __ubrand__?: S18; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint19_brand { __ubrand__?: S19; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint20_brand { __ubrand__?: S20; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint21_brand { __ubrand__?: S21; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint22_brand { __ubrand__?: S22; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint23_brand { __ubrand__?: S23; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint24_brand { __ubrand__?: S24; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint25_brand { __ubrand__?: S25; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint26_brand { __ubrand__?: S26; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint27_brand { __ubrand__?: S27; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint28_brand { __ubrand__?: S28; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint29_brand { __ubrand__?: S29; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint30_brand { __ubrand__?: S30; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint31_brand { __ubrand__?: S31; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint32_brand { __ubrand__?: S32; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint33_brand { __ubrand__?: S33; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint34_brand { __ubrand__?: S34; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint35_brand { __ubrand__?: S35; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint36_brand { __ubrand__?: S36; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint37_brand { __ubrand__?: S37; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint38_brand { __ubrand__?: S38; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint39_brand { __ubrand__?: S39; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint40_brand { __ubrand__?: S40; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint41_brand { __ubrand__?: S41; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint42_brand { __ubrand__?: S42; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint43_brand { __ubrand__?: S43; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint44_brand { __ubrand__?: S44; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint45_brand { __ubrand__?: S45; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint46_brand { __ubrand__?: S46; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint47_brand { __ubrand__?: S47; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint48_brand { __ubrand__?: S48; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint49_brand { __ubrand__?: S49; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint50_brand { __ubrand__?: S50; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint51_brand { __ubrand__?: S51; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint52_brand { __ubrand__?: S52; }

/**
 * Brand for construction of branded unsigned integer type.
 */
interface uint53_brand { __ubrand__?: S53; }

// ###############################################################
//
// Define brands for integer types in terms of the union set types.

/**
 * Brand for construction of branded signed integer type.
 */
interface int4_brand { __ubrand__?: S4; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int5_brand { __ubrand__?: S5; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int6_brand { __ubrand__?: S6; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int7_brand { __ubrand__?: S7; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int8_brand { __ibrand__?: S8; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int9_brand { __ibrand__?: S9; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int10_brand { __ibrand__?: S10; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int11_brand { __ibrand__?: S11; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int12_brand { __ibrand__?: S12; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int13_brand { __ibrand__?: S13; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int14_brand { __ibrand__?: S14; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int15_brand { __ibrand__?: S15; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int16_brand { __ibrand__?: S16; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int17_brand { __ibrand__?: S17; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int18_brand { __ibrand__?: S18; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int19_brand { __ibrand__?: S19; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int20_brand { __ibrand__?: S20; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int21_brand { __ibrand__?: S21; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int22_brand { __ibrand__?: S22; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int23_brand { __ibrand__?: S23; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int24_brand { __ibrand__?: S24; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int25_brand { __ibrand__?: S25; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int26_brand { __ibrand__?: S26; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int27_brand { __ibrand__?: S27; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int28_brand { __ibrand__?: S28; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int29_brand { __ibrand__?: S29; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int30_brand { __ibrand__?: S30; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int31_brand { __ibrand__?: S31; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int32_brand { __ibrand__?: S32; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int33_brand { __ibrand__?: S33; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int34_brand { __ibrand__?: S34; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int35_brand { __ibrand__?: S35; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int36_brand { __ibrand__?: S36; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int37_brand { __ibrand__?: S37; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int38_brand { __ibrand__?: S38; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int39_brand { __ibrand__?: S39; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int40_brand { __ibrand__?: S40; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int41_brand { __ibrand__?: S41; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int42_brand { __ibrand__?: S42; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int43_brand { __ibrand__?: S43; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int44_brand { __ibrand__?: S44; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int45_brand { __ibrand__?: S45; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int46_brand { __ibrand__?: S46; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int47_brand { __ibrand__?: S47; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int48_brand { __ibrand__?: S48; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int49_brand { __ibrand__?: S49; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int50_brand { __ibrand__?: S50; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int51_brand { __ibrand__?: S51; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int52_brand { __ibrand__?: S52; }

/**
 * Brand for construction of branded signed integer type.
 */
interface int53_brand { __ibrand__?: S53; }

/* eslint-enable @typescript-eslint/member-delimiter-style */
/* eslint-enable @typescript-eslint/brace-style */

// Unsigned integers of different bit sizes which allow implicit
// casting upwards, since the brand types allow implicit casting
// upwards.

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint4_t = number & uint4_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint5_t = number & uint5_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint6_t = number & uint6_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint7_t = number & uint7_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint8_t = number & uint8_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint9_t = number & uint9_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint10_t = number & uint10_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint11_t = number & uint11_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint12_t = number & uint12_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint13_t = number & uint13_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint14_t = number & uint14_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint15_t = number & uint15_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint16_t = number & uint16_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint17_t = number & uint17_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint18_t = number & uint18_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint19_t = number & uint19_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint20_t = number & uint20_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint21_t = number & uint21_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint22_t = number & uint22_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint23_t = number & uint23_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint24_t = number & uint24_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint25_t = number & uint25_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint26_t = number & uint26_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint27_t = number & uint27_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint28_t = number & uint28_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint29_t = number & uint29_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint30_t = number & uint30_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint31_t = number & uint31_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint32_t = number & uint32_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint33_t = number & uint33_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint34_t = number & uint34_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint35_t = number & uint35_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint36_t = number & uint36_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint37_t = number & uint37_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint38_t = number & uint38_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint39_t = number & uint39_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint40_t = number & uint40_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint41_t = number & uint41_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint42_t = number & uint42_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint43_t = number & uint43_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint44_t = number & uint44_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint45_t = number & uint45_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint46_t = number & uint46_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint47_t = number & uint47_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint48_t = number & uint48_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint49_t = number & uint49_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint50_t = number & uint50_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint51_t = number & uint51_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint52_t = number & uint52_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint53_t = number & uint53_brand;

// ###############################################################
//
// Signed integers of different bit sizes which allow implicit casting
// upwards, since the brand types allow implicit casting upwards.

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int4_t = number & int4_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int5_t = number & int5_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int6_t = number & int6_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int7_t = number & int7_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int8_t = number & int8_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int9_t = number & int9_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int10_t = number & int10_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int11_t = number & int11_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int12_t = number & int12_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int13_t = number & int13_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int14_t = number & int14_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int15_t = number & int15_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int16_t = number & int16_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int17_t = number & int17_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int18_t = number & int18_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int19_t = number & int19_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int20_t = number & int20_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int21_t = number & int21_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int22_t = number & int22_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int23_t = number & int23_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int24_t = number & int24_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int25_t = number & int25_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int26_t = number & int26_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int27_t = number & int27_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int28_t = number & int28_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int29_t = number & int29_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int30_t = number & int30_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int31_t = number & int31_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int32_t = number & int32_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int33_t = number & int33_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int34_t = number & int34_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int35_t = number & int35_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int36_t = number & int36_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int37_t = number & int37_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int38_t = number & int38_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int39_t = number & int39_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int40_t = number & int40_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int41_t = number & int41_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int42_t = number & int42_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int43_t = number & int43_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int44_t = number & int44_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int45_t = number & int45_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int46_t = number & int46_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int47_t = number & int47_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int48_t = number & int48_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int49_t = number & int49_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int50_t = number & int50_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int51_t = number & int51_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int52_t = number & int52_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int53_t = number & int53_brand;

// ###############################################################

/**
 * Pointer to memory cell in WASM.
 */
export type ptr_t = int32_t;

/**
 * Hexadecimal string.
 */
export type hex_t = string;

/**
 * Floating point number, i.e., JavaScript "number".
 */
export type float64_t = number;

/**
 * Binary integer type.
 */
export type bin_t = 0 | 1;

/**
 * Sign as an integer.
 */
export type sign_t = -1 | 0 | 1;

/**
 * Non-negative integer used as size of arrays.
 */
export type size_t = uint32_t;

// ################################################################

// In contrast to the above, the type word_t may have different bit
// size depending on how the library is compiled. This applies to
// every limb of the derived type uli_t as well.
//
// This is the ONLY place where we define any types with macros.

/**
 * Word of large integer. This is instantiated by an integer type
 * during compilation.
 */
export type word_t = uint28_t;

/**
 * Word of large integer, plus one bit in size. This is instantiated
 * by an integer type during compilation.
 */
export type word_a1_t = uint29_t;

/**
 * Word of large integer, plus two bits in size. This is instantiated
 * by an integer type during compilation.
 */
export type word_a2_t = uint30_t;

/**
 * Half a word of a large integer. This is instantiated by an integer
 * type during compilation.
 */
export type half_t = uint14_t;

/**
 * Half a word of a large integer, plus one bit in size. This is
 * instantiated by an integer type during compilation.
 */
export type half_a1_t = uint15_t;

/**
 * Raw representation of non-negative large integer consisting of
 * multiple words.
 */
export type uli_t = word_t[];
export namespace verificatum {

    export namespace base {

        export const version: string = "1.0.0";

        /**
         * Base class for all objects in the library.
         */
        export class VerificatumObject {

            /**
             * Returns the name of this class.
             *
             * @returns Name of this class.
             */
            getName(): string {
                return this.constructor.name;
            }
        }

        /**
         * Abstract random source for cryptographic use.
         */
        export abstract class RandomSource {

            /**
             * Generates the given number of random bytes.
             *
             * @param len - Number of bytes to generate.
             */
            abstract getBytes(len: size_t): uint8_t[];
        }

        /**
         * Utility classes and functions.
         * TSDOC_MODULE
         */

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
        export function ofClass(obj: any, atype: any): boolean {
            if (typeof obj === "undefined") {
                return false;
            } else {
                return obj.constructor === atype;
            }
        }

        /**
         * Tests if an object is an instance of the given class, or a a
         * subclass of the given class.
         *
         * @param obj - Object to test.
         * @param atype - Class.
         * @returns True or false.
         */
        export function ofSubclass(obj: any, atype: any): boolean {
            while (obj != null && typeof obj != "undefined") {
                if (obj.constructor === atype) {
                    return true;
                } else {
                    obj = Object.getPrototypeOf(obj);
                }
            }
            return false;
        }

        /**
         * Tests if an object is an instance of the given class, array, or
         * primitive type.
         *
         * @param obj - Object to test.
         * @param atype - Class, "array", or a string admissable to the typeof
         * operator.
         * @returns True or false.
         */
        export function ofType(obj: any, atype: any): boolean {
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
        /* eslint-enable @typescript-eslint/explicit-module-boundary-types */
        /* eslint-enable @typescript-eslint/no-explicit-any */

        /**
         * Verifies that an array of numbers is an array of bytes.
         *
         * @param value - Array to be verified.
         * @returns True or false depending on if the array is a byte array or
         * not.
         */
        export function isByteArray(value: number[]): boolean {
            for (let i: size_t = 0; i < value.length; i++) {
                if (!Number.isInteger(value[i]) || (value[i] & 0xFF) != value[i]) {
                    return false;
                }
            }
            return true;
        }

        /**
         * Verifies that a string is a hexadecimal string.
         *
         * @param value - String to be verified.
         * @returns True or false depending on if the string is hexadecimal or
         * not.
         */
        export function isHexString(value: string): boolean {
            for (let i: size_t = 0; i < value.length; i++) {
                const x: size_t = value.charCodeAt(i);
                if (!((47 < x && x < 58)         // x in [0,9] Case insensitive
                      || (64 < x && x < 71)      // x in [A,F] hexadecimal character.
                      || (96 < x && x < 103))) { // x in [a,f]
                    return false;
                }
            }
            return true;
        }

        /**
         * Creates a list filled with the same value.
         *
         * @param value - Value to be repeated.
         * @param width - Number of repetitions.
         * @returns List containing the value.
         */
        export function fill<T>(value: T, width: size_t): T[] {
            const a: T[] = [];
            for (let i: size_t = 0; i < width; i++) {
                a[i] = value;
            }
            return a;
        }

        /**
         * Creates a list filled with the same value or the value
         * itself if a single repetition is requested.
         *
         * @param value - Value to be repeated.
         * @param width - Number of repetitions.
         * @returns List containing the value or the value itself if width == 1.
         */
        export function full<T>(value: T, width?: size_t): T | T[] {
            if (typeof width === "undefined" || width === 1) {
                return value;
            } else {
                return fill<T>(value, width);
            }
        }

        /**
         * Changes the wordsize of an array of words.
         *
         * @param words - Array of words.
         * @param orig_wordsize - Original bitsize of words (at most 32).
         * @param new_wordsize - Bitsize of output words (at most 32).
         * @returns Representation of the input array of bits with new
         * wordsize.
         */
        export function change_wordsize(words: uint32_t[],
                                        orig_wordsize: size_t,
                                        new_wordsize: size_t): uint32_t[] {
            const mask_all: int32_t = 0xFFFFFFFF >>> 32 - new_wordsize;

            // Array with new wordsize holding result.
            const new_words: uint8_t[] = [];
            new_words[0] = 0;

            // Encodes bit position in words.
            let j: size_t = 0;
            let jb: size_t = 0;

            // Encodes bit position in new_words.
            let i: size_t = 0;
            let ib: size_t = 0;

            while (j < words.length) {

                // Insert as many bits as possible from words[j] into new_words[i].
                new_words[i] |= words[j] >>> jb << ib & mask_all;

                // Number of inserted bits.
                const inserted_bits: size_t =
                      Math.min(orig_wordsize - jb, new_wordsize - ib);

                // Determine if we have filled new_words[i] and if so, then move on
                // to the beginning of the next word.
                ib = ib + inserted_bits;
                if (ib === new_wordsize) {
                    i++;
                    ib = 0;
                    new_words[i] = 0;
                }

                // Determine the number of remaining unused bits of words[j] and
                // if none are left, then move on to the beginning of the next
                // word.
                jb = jb + inserted_bits;
                if (jb === orig_wordsize) {
                    j++;
                    jb = 0;
                }
            }
            return new_words;
        }

        const digits: string = "0123456789abcdef";

        export function hexbyte(b: uint8_t): string {
            return digits[b >> 4 & 0xF] + digits[b & 0xF];
        }

        /**
         * Converts an ASCII string to a byte array.
         *
         * @param ascii - ASCII string.
         * @returns Corresponding byte array.
         */
        export function asciiToByteArray(ascii: string): uint8_t[] {
            const bytes: uint8_t[] = [];
            for (let i: size_t = 0; i < ascii.length; i++) {
                bytes.push(ascii.charCodeAt(i));
            }
            return bytes;
        }

        /**
         * Returns the input if it is already a byte array and converts it to
         * a byte array from an ASCII string otherwise.
         *
         * @param data - Data.
         * @returns Corresponding byte array.
         */
        export function asByteArray(data: string | uint8_t[]): uint8_t[] {
            if (typeof data === "string") {
                return asciiToByteArray(data);
            } else {
                return data;
            }
        }

        /**
         * Converts byte array to ASCII string.
         *
         * @param bytes - Input bytes.
         * @returns ASCII string corresponding to the input.
         */
        export function byteArrayToAscii(bytes: uint8_t[]): string {
            let ascii: string = "";
            for (let i: size_t = 0; i < bytes.length; i++) {
                ascii += String.fromCharCode(bytes[i]);
            }
            return ascii;
        }

        /**
         * Converts a byte array to its hexadecimal encoding.
         *
         * @param bytes - Input byte array.
         * @returns Hexadecimal representation of this array.
         */
        export function byteArrayToHex(bytes: uint8_t[]): hex_t {
            let hexString: string = "";
            for (let i: size_t = 0; i < bytes.length; i++) {
                hexString += hexbyte(bytes[i]);
            }
            return hexString;
        }

        /**
         * Converts a hexadecimal encoding of a byte array to the
         * byte array.
         *
         * @param hex - Hexadecimal encoding of byte array.
         * @returns Byte array corresponding to the input.
         */
        export function hexToByteArray(hex: string): uint8_t[] {

            // Correct hex strings of uneven length.
            if (hex.length % 2 === 1) {
                hex = "0" + hex;
            }

            // Convert bytes.
            const res: uint8_t[] = [];
            let i: size_t = 0;
            hex.replace(/(..)/g,
                        function(hex: string): string {
                            res[i++] = <uint8_t>parseInt(hex, 16);
                            return "";
                        });
            return res;
        }

        /**
         * Returns the input if it is already a byte array and converts it to
         * a byte array from an hexadecimal encoding otherwise.
         *
         * @param data - Data.
         * @returns Corresponding byte array.
         */
        export function hexAsByteArray(data: hex_t | uint8_t[]): uint8_t[] {
            if (typeof data === "string") {
                return hexToByteArray(data);
            } else {
                return data;
            }
        }

        export function hexToArrayBuffer(hex: string): ArrayBuffer {
            const byteArray: uint8_t[] = hexToByteArray(hex);
            const arrayBuffer: ArrayBuffer = new ArrayBuffer(byteArray.length);
            const array8: Uint8Array = new Uint8Array(arrayBuffer);
            array8.set(byteArray);
            return arrayBuffer;
        }

        /**
         * Returns true or false depending on if the two input
         * arrays hold identical elements or not.
         *
         * @param x - Array of elements.
         * @param y - Array of elements.
         * @returns Value of boolean equality predicate for arrays.
         */
        export function equalsArray(x: uint8_t[], y: uint8_t[]): boolean {
            if (x.length !== y.length) {
                return false;
            }
            for (let i: size_t = 0; i < x.length; i++) {
                if (x[i] !== y[i]) {
                    return false;
                }
            }
            return true;
        }

        /**
         * Generates random array of the given length and
         * wordsize.
         *
         * @param len - Number of nominal bits in random output.
         * @param wordsize - Number of bits in each word.
         * @param randomSource - Source of randomness.
         * @returns Array of randomly generated words.
         */
        export function randomArray(len: size_t,
                                    wordsize: size_t,
                                    randomSource: RandomSource): uint32_t[] {

            const no_bytes: size_t = Math.floor((len * wordsize + 7) / 8);
            const bytes: uint32_t[] = <uint32_t[]>randomSource.getBytes(no_bytes);

            const no_msbits: size_t = wordsize % 8;
            if (no_msbits !== 0) {
                bytes[no_bytes - 1] &= 0xFF >>> 8 - no_msbits;
            }

            if (wordsize === 8) {
                return bytes;
            } else {
                return change_wordsize(bytes, 8, wordsize);
            }
        }

        /**
         * Reads a 32-bit integer in little-endian byte order
         * from the given byte array.
         *
         * @param bytes - Source of bytes.
         * @param index - Offset for reading.
         */
        export function readUint32FromByteArray(bytes: uint8_t[], index?: size_t):
        uint32_t {
            if (typeof index === "undefined") {
                index = 0;
            }
            let value: uint32_t = 0;
            for (let i: size_t = index; i < index + 4; i++) {
                value <<= 8;
                value |= bytes[i];
            }
            return value >>> 0;
        }

        /**
         * Writes a 32-bit integer in little-endian byte order.
         *
         * @param destination - Destination of result.
         * @param value - Value to write.
         * @param index - Offset for writing.
         */
        export function setUint32ToByteArray(destination: uint8_t[],
                                             value: uint32_t,
                                             index: size_t): void {
            for (let i: size_t = index + 3; i >= index; i--) {
                destination[i] = value & 0xFF;
                value >>= 8;
            }
        }

        /**
         * Reads a 16-bit integer in little-endian byte order
         * from the given byte array.
         *
         * @param bytes - Source of bytes.
         * @param index - Offset for reading.
         */
        export function readUint16FromByteArray(bytes: uint8_t[], index: size_t):
        uint16_t {
            if (typeof index === "undefined") {
                index = 0;
            }
            let value: uint16_t = 0;
            for (let i: size_t = index; i < index + 2; i++) {
                value <<= 8;
                value |= bytes[i];
            }
            return value >>> 0;
        }

        /**
         * Writes a 16-bit integer in little-endian byte order.
         *
         * @param destination - Destination of result.
         * @param value - Value to write.
         * @param index - Offset for writing.
         */
        export function setUint16ToByteArray(destination: uint8_t[],
                                             value: uint16_t,
                                             index: size_t): void {
            for (let i: size_t = index + 1; i >= index; i--) {
                destination[i] = value & 0xFF;
                value >>= 8;
            }
        }

    }

    export namespace arithm {

        export namespace uli {
            import byteArrayToHex = verificatum.base.byteArrayToHex;
            import change_wordsize = verificatum.base.change_wordsize;
            import hexToByteArray = verificatum.base.hexToByteArray;

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
             * WORDSIZE bits, where WORDSIZE is any even number between 4 and 30
             * and there are hardcoded constants derived from this when the script
             * is generated, so do not attempt to change the wordsize in the
             * generated code. These wordsizes are natural since JavaScript only
             * allows bit operations on 32-bit signed integers. To see this, note
             * that although we can do arithmetic on floating point numbers, e.g.,
             * by setting WORDSIZE = 24 we could do multiplications directly, it
             * is expensive to recover parts of the result. Bit operations on
             * 32-bit integers are provided in Javascript, but they are
             * implemented on top of the native "number" datatype, i.e., numbers
             * are cast to 32-bit signed integers, the bit operation is applied,
             * and the result is cast back to a "number".
             *
             * <p>
             *
             * Using small wordsizes exposes certain types of arithmetic bugs, so
             * providing this is not merely for educational purposes, it is also
             * to lower the risk of structural bugs.
             *
             * <p>
             *
             * Functions are only implemented for unsigned integers and when
             * called from external functions they assume that any result
             * parameter is of a given length. All arithmetic functions guarantee
             * that any leading unused words are set to zero.
             *
             * <p>
             *
             * A "limb" is an element of an array that may or may not store any
             * single-precision integer. A word is a limb containing data, which
             * may be zero if there are limbs at higher indices holding
             * data. Thus, the number of limbs is the length of an array and the
             * number of words is the index of the most significant word in the
             * array plus one.
             *
             * <p>
             *
             * The workhorse routine is muladd_loop() which is generated for a
             * given fixed wordsize. This routine determines the speed of
             * multiplication and squaring. To a large extent it also determines
             * the speed of division, but here div3by2() also plays an important
             * role. These routines are generated from M4 macro code to allow
             * using hard coded wordsize dependent constants for increased
             * speed. The square_naive() routine also contains some generated
             * code.
             *
             * <p>
             *
             * JavaScript is inherently difficult to optimize, since the
             * JavaScript engines are moving targets, but it seems that the
             * built-in arrays in Javascript are faster than the new typed arrays
             * if they are handled properly. A first version of the library was
             * based on Uint32Array for which, e.g., allocation of a fixed-size
             * array is slower than a builtin array.
             *
             * <p>
             *
             * One notable observation is that it sometimes makes sense to inform
             * the interpreter that a JavaScript "number" / float is really a
             * 32-bit integer by saying, e.g., (x | 0) even if we are guaranteed
             * that x is a 32-bit integer. This is important when accessing
             * elements from arrays and it seems to prevent the interpreter from
             * converting to and from floats.
             *
             * <p>
             *
             * We avoid dynamic memory allocation almost entirely by keeping
             * scratch space as static variables of the functions. This is
             * implemented using immediate function evaluation in JavaScript, but
             * it is encapsulated to reduce complexity, i.e., calling functions
             * remain unaware of this. This approach works well in our
             * applications, since higher level routines work with integers of
             * fixed bit length;
             *
             * <p>
             *
             * <a href="http://cacr.uwaterloo.ca/hac">Handbook of Cryptography
             * (HAC), Alfred J. Menezes, Paul C. van Oorschot and Scott
             * A. Vanstone</a> gives a straightforward introduction to the basic
             * algorithms used and we try to follow their notation for easy
             * reference. Division exploits the techniques of <a
             * href="http://lkk.lysator.liu.se/~nisse/archive/draft-division-paper.pdf">
             * Improved division by invariant integers, Niels Moller and Torbjorn
             * Granlund (MG)</a>. This is needed to implement div3by2() efficiently.
             *
             * <p>
             *
             * <table style="text-align: left;">
             * <tr><th>Reference        </th><th> Operation</th><th> Comment</th></tr>
             * <tr><td>HAC 14.7.        </td><td> Addition</td><td></td></tr>
             * <tr><td>HAC 14.9.        </td><td> Subtraction</td><td></td></tr>
             * <tr><td>HAC 14.12.       </td><td> Multiplication</td><td> Uses Karatsuba.</td></tr>
             * <tr><td>HAC 14.16.       </td><td> Squaring</td><td> Uses Karatsuba.</td></tr>
             * <tr><td>HAC 14.20 and MG.</td><td> Division.</td><td> Uses reciprocals for invariant moduli.</td></tr>
             * <tr><td>HAC 14.83.       </td><td> Modular exponentiation</td><td> Left-to-right k-ary.</td></tr>
             * </table>
             * TSDOC_MODULE
             */

            // Removed WASM code here.

            // Enabled TypeScript code starts here.

            // Enabled TypeScript code ends here

            // ################### Constants ########################################

            /**
             * Wordsize in bits, i.e., the number of bits stored in each "number"
             * which make up a big integer.
             */
            export const WORDSIZE: size_t = 28;

            // Size threshold for using Karatsuba in multiplication.
            const KARATSUBA_MUL_THRESHOLD: size_t = 24;

            // Size threshold for using Karatsuba in squaring.
            const KARATSUBA_SQR_THRESHOLD: size_t = 35;

            // Threshold for relative difference in size for using Karatsuba in
            // multiplication.
            const KARATSUBA_RELATIVE: float64_t = 0.8;

            // Removed WASM code here.

            // Enabled TypeScript code starts here.
            /**
             * Indicates if WebAssembly is enabled or not.
             */
            export const wasm: boolean = false;

            /**
             * This is a placeholder to allow seamless optional embedding of WASM
             * code.
             */
            export function initialize(): void {
                return;
            }
            // Enabled TypeScript code ends here

            /**
             * Sets x = 0.
             *
             * @param x - Array to modify.
             */
            export function setzero(x: word_t[]): void {
                for (let i: size_t = 0; i < x.length; i++) {
                    x[i] = 0;
                }
            }

            /**
             * Sets w = x and truncates or pads with zeros as needed
             * depending on the number of limbs in w.
             *
             * <p>
             *
             * ASSUMES: x has fewer words than w has limbs.
             *
             * @param w - Array storing the result.
             * @param x - Array holding a value.
             */
            export function set(w: uli_t, x: uli_t): void;

            /**
             * Sets w = x and truncates or pads with zeros as needed
             * depending on the number of limbs in w.
             *
             * @param w - Array storing the result.
             * @param x - Integer value < 2^28.
             */
            export function set(w: uli_t, x: word_t): void;

            export function set(w: uli_t, x: uli_t | word_t): void {
                if (typeof x === "number") {
                    setzero(w);
                    w[0] = x & 0xfffffff;
                } else {
                    let i: size_t = 0;
                    while (i < Math.min(w.length, x.length)) {
                        w[i] = x[i];
                        i++;
                    }
                    while (i < w.length) {
                        w[i] = 0;
                        i++;
                    }
                }
            }

            /**
             * Allocates new array of the given length where all
             * elements are zero.
             *
             * @param len - Length of array.
             * @returns Array of the given length where all elements are zero.
             */
            export function newarray(len: size_t): uli_t {
                const x: uli_t = [];
                x.length = len;
                setzero(x);
                return x;
            }

            /**
             * Returns a copy of the given array.
             *
             * @param x - Original array.
             * @param len - Maximal length of copy.
             * @returns Copy of original array.
             */
            export function copyarray(x: uli_t, len?: size_t): uli_t {
                if (typeof len === "undefined") {
                    len = 0;
                }
                const w: uli_t = newarray(Math.max(x.length, len));
                set(w, x);
                return w;
            }

            /**
             * Resizes the array to the given number of limbs,
             * either by truncating or by adding leading zero words.
             *
             * @param x - Original array.
             * @param len - New length.
             */
            export function resize(x: uli_t, len: size_t): void {
                const xlen: size_t = x.length;
                x.length = len;
                if (len > xlen) {
                    for (let i: size_t = xlen; i < len; i++) {
                        x[i] = 0;
                    }
                }
            }

            /**
             * Truncates the input to the shortest possible array
             * that represents the same absolute value in two's complement, i.e.,
             * there is always a leading zero bit.
             *
             * @param x - Array to truncate.
             * @param mask_top - Mask for a given wordsize with only most
             * significant bit set.
             */
            export function normalize(x: uli_t, mask_top: word_t = 0x8000000): void {

                let l: size_t = x.length - 1;

                // There may be zeros to truncate.
                if (x[l] === 0) {

                    // Find index of most significant non-zero word.
                    while (l > 0 && x[l] === 0) {
                        l--;
                    }

                    // If most significant bit of this word is set, then we keep a
                    // leading zero word.
                    if ((x[l] & mask_top) !== 0) {
                        l++;
                    }
                    x.length = l + 1;

                    // We need to add a zero word to turn it into a positive integer
                    // in two's complement.
                } else if ((x[l] & mask_top) !== 0) {

                    x.length++;
                    x[x.length - 1] = 0;
                }
            }

            /**
             * Sets x = 1.
             *
             * @param x - Array to modify.
             */
            export function setone(x: uli_t): void {
                setzero(x);
                x[0] = 1;
            }

            /**
             * Returns the index of the most significant bit in x.
             *
             * @param x - Array containing bit.
             * @returns An index i such that 0 <= i < x.length * 28.
             */
            export function msbit(x: uli_t): size_t {

                for (let i: size_t = x.length - 1; i >= 0; i--) {

                    // Find index of most significant word.
                    if (x[i] !== 0) {

                        // Find index of most significant bit within the most
                        // significant word.
                        let msbit: size_t = (i + 1) * 28 - 1;

                        for (let mask: word_t = 0x8000000; mask !== 0; mask >>>= 1) {

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

            /**
             * Returns the lowest index of a set bit in the input or
             * zero if the input is zero.
             *
             * @param Array - containing bit.
             * @returns An index i such that 0 <= i < x.length * 28.
             */
            export function lsbit(x: uli_t): size_t {
                let i: size_t = 0;
                while (i < x.length && x[i] === 0) {
                    i++;
                }
                if (i === x.length) {

                    return 0;

                } else {

                    let j: size_t = 0;
                    while ((x[i] >>> j & 0x1) === 0) {
                        j++;
                    }

                    return i * 28 + j;
                }
            }

            /**
             * Returns the array index of the most significant word.
             *
             * @param x - Array containing word.
             * @returns An index i such that 0 <= i < x.length.
             */
            export function msword(x: uli_t): size_t {
                for (let i: size_t = x.length - 1; i > 0; i--) {
                    if (x[i] !== 0) {
                        return i;
                    }
                }
                return 0;
            }

            /**
             * Returns 1 or 0 depending on if the given bit is set or
             * not. Accessing a bit outside the number of limbs returns zero.
             *
             * @param x - Array containing bit.
             * @param index - Index of bit.
             * @returns Bit as a "number" at the given position.
             */
            export function getbit(x: uli_t, index: size_t): word_t {
                const wordIndex: size_t = Math.floor(index / 28);
                const bitIndex: size_t = index % 28;

                if (wordIndex >= x.length) {
                    return 0;
                }

                if ((x[wordIndex] & 1 << bitIndex) === 0) {
                    return 0;
                } else {
                    return 1;
                }
            }

            /**
             * Checks if the input represents the zero integer.
             *
             * @param x - Array to inspect.
             * @returns True or false depending on if x represents zero or not.
             */
            export function iszero(x: uli_t): boolean {
                for (let i: size_t = 0; i < x.length; i++) {
                    if (x[i] !== 0) {
                        return false;
                    }
                }
                return true;
            }

            /**
             * Returns -1, 0, or 1 depending on if x < y, x == y, or
             * x > y.
             *
             * <p>
             *
             * ASSUMES: x and y are positive.
             *
             * @param x - Left array.
             * @param x - Right array.
             * @returns Sign of comparison relation.
             */
            export function cmp(x: uli_t, y: uli_t): sign_t {

                // Make sure that x has at least as many words as y does, and
                // remember if we swapped them to correct the sign at the end.
                let sign: sign_t = 1;
                if (x.length < y.length) {
                    const t: uli_t = x;
                    x = y;
                    y = t;
                    sign = -1;
                }

                let i: size_t = x.length - 1;

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
                        return <sign_t>-sign;
                    }
                    i--;
                }
                return 0;
            }

            /**
             * Shifts the given number of bits within the array,
             * i.e., the allocated space is not expanded.
             *
             * <p>
             *
             * ASSUMES: offset >= 0.
             *
             * @param x - Array to be shifted.
             * @param offset - Number of bit positions to shift.
             */
            export function shiftleft(x: uli_t, offset: size_t): void {
                // No shifting.
                if (offset === 0) {
                    return;
                }

                // Too much shifting.
                if (offset >= x.length * 28) {
                    setzero(x);
                    return;
                }

                // Left shift words.
                const wordOffset: size_t = Math.floor(offset / 28);
                if (wordOffset > 0) {

                    let j: size_t = x.length - 1;
                    while (j >= wordOffset) {
                        x[j] = x[j - wordOffset];
                        j--;
                    }
                    while (j >= 0) {
                        x[j] = 0;
                        j--;
                    }
                }

                // Left shift bits within words.
                const bitOffset: size_t = offset % 28;
                const negBitOffset: size_t = 28 - bitOffset;

                if (bitOffset !== 0) {
                    for (let i: size_t = x.length - 1; i > 0; i--) {
                        const left: word_t = x[i] << bitOffset & 0xfffffff;
                        const right: word_t = x[i - 1] >>> negBitOffset;
                        x[i] = left | right;
                    }
                    x[0] = x[0] << bitOffset & 0xfffffff;
                }
            }

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
            export function shiftright(x: uli_t, offset: size_t): void {
                // No shifting.
                if (offset === 0) {
                    return;
                }

                // Too much shifting.
                if (offset >= x.length * 28) {
                    setzero(x);
                    return;
                }

                // Right shift words.
                const wordOffset: size_t = Math.floor(offset / 28);
                if (wordOffset > 0) {

                    let j: size_t = 0;
                    while (j < x.length - wordOffset) {
                        x[j] = x[j + wordOffset];
                        j++;
                    }
                    while (j < x.length) {
                        x[j] = 0;
                        j++;
                    }
                }

                // Right shift bits within words.
                const bitOffset: size_t = offset % 28;
                const negBitOffset: size_t = 28 - bitOffset;

                if (bitOffset !== 0) {
                    for (let i: size_t = 0; i < x.length - 1; i++) {

                        const left: word_t = x[i] >>> bitOffset;
                        const right: word_t = x[i + 1] << negBitOffset & 0xfffffff;

                        x[i] = left | right;
                    }
                    x[x.length - 1] = x[x.length - 1] >>> bitOffset;
                }
            }

            /**
             * Sets w = x + y.
             *
             * <p>
             *
             * ASSUMES: x and y are positive and have B and B' bits and w can
             * store (B + B' + 1) bits. A natural choice in general is to let w
             * have (L + L' + 1) limbs if x and y have L and L' limbs, but the
             * number of limbs can be arbitrary.
             *
             * <p>
             *
             * References: HAC 14.7.
             *
             * @param w - Array holding the result.
             * @param x - Left term.
             * @param y - Right term.
             */
            export function add(w: uli_t, x: uli_t, y: uli_t): void {
                let tmp: int32_t;
                let c: int32_t = 0;

                // Make sure that x is at least as long as y.
                if (x.length < y.length) {
                    const t: uli_t = x;
                    x = y;
                    y = t;
                }

                // Add words of x and y with carry.
                let i: size_t = 0;
                let len: size_t = Math.min(w.length, y.length);
                while (i < len) {
                    tmp = x[i] + y[i] + c;

                    w[i] = tmp & 0xfffffff;
                    c = tmp >> 28;
                    i++;
                }

                // Add x and carry.
                len = Math.min(w.length, x.length);
                while (i < len) {
                    tmp = x[i] + c;

                    w[i] = tmp & 0xfffffff;
                    c = tmp >> 28;
                    i++;
                }

                // Set carry and clear the rest.
                if (i < w.length) {
                    w[i] = c;
                    i++;
                }
                while (i < w.length) {
                    w[i] = 0;
                    i++;
                }
            }

            /* eslint-disable no-extra-parens */
            /**
             * Sets w to the negative of x in two's complement
             * representation using L * 28 bits, where L is the number of
             * limbs in w.
             *
             * <p>
             *
             * ASSUMES: w has at least as many limbs as x.
             *
             * @param w - Array holding the result.
             * @param x - Integer.
             */
            export function neg(w: uli_t, x: uli_t): void {
                let tmp: int32_t;

                let c: int32_t = 1;
                let i: size_t = 0;

                while (i < x.length) {
                    tmp = (x[i] ^ 0xfffffff) + c;
                    w[i] = tmp & 0xfffffff;
                    c = (tmp >> 28) & 0xfffffff;
                    i++;
                }
                while (i < w.length) {
                    tmp = 0xfffffff + c;
                    w[i] = tmp & 0xfffffff;
                    c = (tmp >> 28) & 0xfffffff;
                    i++;
                }
            }
            /* eslint-enable no-extra-parens */

            /**
             * Sets w = x - y if x >= y and otherwise it simply
             * propagates -1, i.e., 0xfffffff, through the remaining words of
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
             * @param w - Array holding the result.
             * @param x - Left term.
             * @param y - Right term.
             * @returns Finally carry.
             */
            export function sub(w: uli_t, x: uli_t, y: uli_t): int32_t {
                let tmp: int32_t = 0;
                let c: int32_t = 0;

                // Subtract words of x and y with carry.
                let len: size_t = Math.min(w.length, x.length, y.length);

                let i: size_t = 0;
                while (i < len) {
                    tmp = x[i] - y[i] + c;
                    w[i] = tmp & 0xfffffff;
                    c = tmp >> 28;
                    i++;
                }

                // Propagate carry along with one of x and y.
                if (x.length > y.length) {
                    len = Math.min(w.length, x.length);
                    while (i < len) {
                        tmp = x[i] + c;
                        w[i] = tmp & 0xfffffff;
                        c = tmp >> 28;
                        i++;
                    }
                } else {
                    len = Math.min(w.length, y.length);
                    while (i < len) {
                        tmp = -y[i] + c;
                        w[i] = tmp & 0xfffffff;
                        c = tmp >> 28;
                        i++;
                    }
                }

                // Propagate carry.
                while (i < w.length) {
                    w[i] = c & 0xfffffff;
                    c = tmp >> 28;
                    i++;
                }
                return c;
            }

            // Enabled TypeScript code starts here.
            /**
             * Specialized implementation of muladd_loop() for
             * 28-bit words. This is essentially a naive
             * double-precision multiplication computation done in a loop. This
             * code is quite sensitive to replacing the constants with variables,
             * which explains why it is generated from source with macros. Using
             * two's complement for temporary values this can be used as a
             * "mulsub_loop" as well.
             *
             * <p>
             *
             * Computes (pseudo-code) that due to limited precision and 32-bit
             * bound bit operations does not work in JavaScript:
             *
             * <pre>
             * for (var j = start; j < end; j++) {
             *     tmp = x[j] * Y + w[i + j] + c;
             *     w[i + j] = tmp & 0xfffffff;
             *     c = tmp >>> 28;
             * }
             * return c;
             * </pre>
             *
             * <p>
             *
             * Note that if Y < 2^(28 + 1), then the output carry c is
             * only guaranteed to be smaller than 2^(28 + 1), which does
             * not fit into a word.
             *
             * <p>
             *
             * ASSUMES: Y < 2^(28 + 1).
             *
             * @param w - Array holding additive terms as input and the output.
             * @param x - Array to be scaled.
             * @param start - Start index into x.
             * @param end - End index into x.
             * @param Y - Scalar.
             * @param i - Index into w.
             * @param c - Input carry.
             * @returns Finally carry.
             */
            /* eslint-disable prefer-const */
            export function muladd_loop(w: uli_t,
                                        x: uli_t,
                                        start: size_t,
                                        end: size_t,
                                        Y: int32_t,
                                        i: size_t,
                                        c: int32_t): int32_t {
                // Temporary variables in muladd.
                let hx: half_t;
                let lx: half_t;
                let cross: word_a2_t;

                // Extract upper and lower halves of Y.
                const hy: half_a1_t = (Y >>> 14);
                const ly: half_t = (Y & 0x3fff);

                // This implies:
                // hy < 2^(14 + 1)
                // ly < 2^14

                // The invariant of the loop is c < 2^(28 + 1).
                for (let j: size_t = start; j < end; j++) {

                    // M4_WORD_MULADD2
            // Extract upper half of x.
            hx = (x[j] >>> 14);
            // Extract lower half of x.
            lx = (x[j] & 0x3fff);

            // This implies:
            // hx < 2^14
            // lx < 2^14

            // Compute the sum of the cross terms.
            cross = (hx * ly + lx * hy) | 0;

            // This implies:
            // cross < 2^(28 + 2)

            // Partial computation from which the lower word can be
            // extracted.
            lx = (((w[j + i] | 0) + lx * ly + ((cross & 0x3fff) << 14)) | 0) + c;

            // This implies: so we can safely use bit operator on lx.
            // lx < 2^(28 + 2)

            // Complete the computation of the higher bits.
            c = ((lx >>> 28) + hx * hy + (cross >>> 14) ) | 0;

            // Extract the lower word of x * y.
            w[j + i] = lx & 0xfffffff;
                }

                // This is a (28 + 1)-bit word when Y is.
                return c;
            }
            /* eslint-enable prefer-const */
            // Enabled TypeScript code ends here

            /**
             * Sets w = x * y, where w has two limbs and x and y are words. This
             * is specialized similarly to muladd_loop and generated using the
             * same macro.
             *
             * @param w - Destination long.
             * @param x - Single word factor.
             * @param y - Single word factor.
             */
            /* eslint-disable prefer-const */
            export function word_mul(w: uli_t, x: word_t, y: word_t): void {
                let hx: half_t;
                let lx: half_t;
                let cross: word_a2_t;

                // Clear the result, since we are muladding.
                w[0] = 0;
                w[1] = 0;

                // Extract upper and lower halves of y.
                const hy: half_t = (y >>> 14);
                const ly: half_t = (y & 0x3fff);

                // M4_WORD_MULADD2
            // Extract upper half of x.
            hx = (x >>> 14);
            // Extract lower half of x.
            lx = (x & 0x3fff);

            // This implies:
            // hx < 2^14
            // lx < 2^14

            // Compute the sum of the cross terms.
            cross = (hx * ly + lx * hy) | 0;

            // This implies:
            // cross < 2^(28 + 2)

            // Partial computation from which the lower word can be
            // extracted.
            lx = (((w[0] | 0) + lx * ly + ((cross & 0x3fff) << 14)) | 0) + w[1];

            // This implies: so we can safely use bit operator on lx.
            // lx < 2^(28 + 2)

            // Complete the computation of the higher bits.
            w[1] = ((lx >>> 28) + hx * hy + (cross >>> 14) ) | 0;

            // Extract the lower word of x * y.
            w[0] = lx & 0xfffffff;
            }
            /* eslint-enable prefer-const */

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
             * @param w - Array holding the result.
             * @param x - Factor.
             */
            export function square_naive(w: uli_t, x: uli_t): void {
                const n: size_t = msword(x) + 1;
                let c: int32_t;
                let sc: int32_t = 0;

                setzero(w);

                let i: size_t = 0;
                while (i < n) {

                    // This computes
                    // (c, w[2 * i]) = w[2 * i] + x[i] * x[i],
                    // where the result is interpreted as a pair of integers of
                    // sizes (28 + 1, 28):

                    let l: half_t = x[i] & 0x3fff;
                    const h: half_t = x[i] >>> 14;
                    const cross: word_a1_t = l * h << 1;

                    // This implies:
                    // l, h < 2^14
                    // cross < 2^(28 + 1)

                    l = (w[i << 1] | 0) + l * l +
                        ((cross & 0x3fff) << 14);

                    // This implies, so we can safely use bit operators on l;
                    // l < 2^(28 + 2)

                    c = ((l >>> 28) + (cross >>> 14) + h * h) | 0;
                    w[i << 1] = l & 0xfffffff;

                    // This implies, which is a requirement for the loop.
                    // c < 2^(28 + 1)
                    //
                    // The standard way to do this would be to simply allow each
                    // w[i + n] to intermittently hold a WORDSIZE + 1 bit integer
                    // (or overflow register), but for 30-bit words this causes
                    // overflow in muladd_loop.
                    sc = muladd_loop(w,
                                     x,
                                     i + 1,
                                     n,
                                     x[i] << 1,
                                     i,
                                     c) + sc;
                    w[i + n] = sc & 0xfffffff;
                    sc >>>= 28;

                    i++;
                }
            }
            /* eslint-enable no-extra-parens */

            /**
             * Splits x into two parts l and h of equal and
             * predetermined size, i.e., the lengths of the lists l and h
             * determines how x is split.
             *
             * @param l - Array holding most significant words of x.
             * @param h - Array holding most significant words of x.
             * @param x - Original array.
             */
            function karatsuba_split(l: uli_t, h: uli_t, x: uli_t): void {

                const m: size_t = Math.min(l.length, x.length);
                let i: size_t = 0;

                while (i < m) {
                    l[i] = x[i];
                    i++;
                }
                while (i < l.length) {
                    l[i] = 0;
                    i++;
                }
                while (i < x.length) {
                    h[i - l.length] = x[i];
                    i++;
                }
                i -= l.length;
                while (i < l.length) {
                    h[i] = 0;
                    i++;
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
             * @param w - Array holding the result.
             * @param x - Factor.
             * @param depth - Recursion depth of the Karatsuba algorithm.
             */
            export const square_karatsuba =
                (function(): (w: uli_t,
                               x: uli_t,
                               depth: size_t,
                               len?: size_t) => void {

                // Scratch space indexed by depth. These arrays are resized as
                // needed in each call. In typical cryptographic applications big
                // integers have the same size, so no resize takes place.
                const scratch: uli_t[][] =
                      [
                          [
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[]
                          ],
                          [
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[]
                          ],
                          [
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[]
                          ]
                      ];

                return function(w: uli_t,
                                 x: uli_t,
                                 depth: size_t,
                                 len?: size_t): void {
                    // Access scratch space of this depth. Due to the depth-first
                    // structure of this algorithm no overwriting can take place.
                    const s: uli_t[] = scratch[depth];
                    const h: uli_t = s[0];
                    const l: uli_t = s[1];
                    const z2: uli_t = s[2];
                    const z1: uli_t = s[3];
                    const z0: uli_t = s[4];
                    const xdif: uli_t = s[5];

                    // Make sure that the arrays have proper sizes.
                    if (typeof len === "undefined") {
                        len = x.length;
                    }
                    len += len % 2;
                    const half_len: size_t = len >>> 1;

                    if (h.length !== half_len) {

                        resize(h, half_len);
                        resize(l, half_len);

                        resize(z2, len);
                        resize(z1, len);
                        resize(z0, len);

                        resize(xdif, half_len);
                    }

                    // Split the input x into higher and lower parts.
                    karatsuba_split(l, h, x);

                    if (depth < 1) {
                        square_naive(z2, h);
                        square_naive(z0, l);
                    } else {
                        square_karatsuba(z2, h, depth - 1);
                        square_karatsuba(z0, l, depth - 1);
                    }

                    // We guess which is bigger and correct the result if needed.
                    if (sub(xdif, h, l) < 0) {
                        sub(xdif, l, h);
                    }

                    if (depth < 1) {
                        square_naive(z1, xdif);
                    } else {
                        square_karatsuba(z1, xdif, depth - 1);
                    }

                    // Specialized loop to compute:
                    // b^2 * z2 + b * (z0 - z1 + z2) + z0
                    // where b = 2^(half_len * 28). We do it as follows:
                    // w = b^2 * z2 + b * (z0 + z2) + z0
                    // w = w - b * z1

                    const l0: size_t = Math.min(w.length, half_len);
                    const l1: size_t = Math.min(w.length, len);
                    const l2: size_t = Math.min(w.length, len + half_len);
                    const l3: size_t = Math.min(w.length, 2 * len);
                    const l4: size_t = Math.min(w.length, len + half_len);
                    const l5: size_t = Math.min(w.length, 2 * len);

                    let tmp: int32_t;
                    let c: int32_t = 0;
                    let i: size_t = 0;

                    while (i < l0) {
                        w[i] = z0[i];
                        i++;
                    }
                    while (i < l1) {

                        tmp = z0[i] + z0[i - half_len] + z2[i - half_len] + c;

                        // This implies, so we can safely add within 32 bits using
                        // unsigned left shift.
                        // tmp < 2^{28 + 2}

                        w[i] = tmp & 0xfffffff;
                        c = tmp >>> 28;
                        i++;
                    }
                    while (i < l2) {
                        tmp = z0[i - half_len] + z2[i - half_len] + z2[i - len] + c;

                        // This implies, so we can safely add within 32 bits using
                        // unsigned left shift.
                        // tmp < 2^(28 + 2)

                        w[i] = tmp & 0xfffffff;
                        c = tmp >>> 28;
                        i++;
                    }
                    while (i < l3) {
                        tmp = z2[i - len] + c;
                        w[i] = tmp & 0xfffffff;
                        c = tmp >>> 28;
                        i++;
                    }

                    // We can ignore the positive carry here, since we know that
                    // the final result fits within 2 * len words, but we need to
                    // subtract z1 at the right position.

                    i = half_len;
                    c = 0;
                    while (i < l4) {
                        tmp = w[i] - z1[i - half_len] + c;
                        w[i] = tmp & 0xfffffff;
                        c = tmp >> 28;
                        i++;
                    }
                    while (i < l5) {
                        tmp = w[i] + c;
                        w[i] = tmp & 0xfffffff;
                        c = tmp >> 28;
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
             * @param w - Array holding the result.
             * @param x - Factor.
             * @param len - Actual lengths of inputs. Useful when stored in longer arrays.
             */
            export function square(w: uli_t, x: uli_t, len?: size_t): void {
                // Only use Karatsuba if the inputs are big enough.
                const xlen: size_t = msword(x) + 1;
                if (xlen > KARATSUBA_SQR_THRESHOLD) {
                    square_karatsuba(w, x, 0, len);
                } else {
                    square_naive(w, x);
                }
            }

            /**
             * Sets w = x * y.
             *
             * <p>
             *
             * ASSUMES: x and y are both non-negative with L and L' limbs
             * respectively, and that w has at least L + L' limbs.
             *
             * <p>
             *
             * References: HAC 14.12.
             *
             * @param w - Array holding the result.
             * @param x - Left factor.
             * @param y - Right factor.
             */
            export function mul_naive(w: uli_t, x: uli_t, y: uli_t): void {
                const n: size_t = msword(x) + 1;
                const t: size_t = msword(y) + 1;

                setzero(w);

                for (let i: size_t = 0; i < t; i++) {
                    w[i + n] =
                        muladd_loop(w, x, 0, n, y[i], i, 0);
                }
            }

            /**
             * Sets w = x * y. The depth parameter determines the
             * recursive depth of function calls and must be less than 3.
             *
             * <p>
             *
             * ASSUMES: x and y are both non-negative, with L and L' limbs
             * respectively, and that w has at least L + L' limbs.
             *
             * <p>
             *
             * References: HAC <sectionsign>14.2,
             * https://en.wikipedia.org/wiki/Karatsuba_algorithm
             *
             * @param w - Array holding the result.
             * @param x - Left factor.
             * @param y - Right factor.
             * @param depth - Recursion depth of the Karatsuba algorithm.
             * @param len - Actual lengths of inputs. Useful when stored in longer arrays.
             */
            export const mul_karatsuba =
                (function(): (w: uli_t,
                               x: uli_t,
                               y: uli_t,
                               depth: size_t,
                               len?: size_t) => void {

                // Scratch space indexed by depth. These arrays are resized as
                // needed in each call. In typical cryptographic applications big
                // integers have the same size, so no resize takes place.
                const scratch: uli_t[][] =
                      [
                          [
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[]
                          ],
                          [
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[]
                          ],
                          [
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[],
                                  <uli_t>[]
                          ]
                      ];

                return function(w: uli_t,
                                 x: uli_t,
                                 y: uli_t,
                                 depth: size_t,
                                 len?: size_t): void {
                    // Access scratch space of this depth. Due to the depth-first
                    // structure of this algorithm no overwriting can take place.
                    const s: uli_t[] = scratch[depth];
                    const hx: uli_t = s[0];
                    const lx: uli_t = s[1];
                    const hy: uli_t = s[2];
                    const ly: uli_t = s[3];
                    const z2: uli_t = s[4];
                    const z1: uli_t = s[5];
                    const z0: uli_t = s[6];
                    const xsum: uli_t = s[7];
                    const ysum: uli_t = s[8];
                    const tmp1: uli_t = s[9];
                    const tmp2: uli_t = s[10];

                    setzero(w);

                    // Make sure that the lengths of the arrays are equal and
                    // even.
                    if (typeof len === "undefined") {
                        len = Math.max(x.length, y.length);
                    }
                    len += len % 2;
                    const half_len: size_t = len >>> 1;

                    if (hx.length !== half_len) {

                        resize(hx, half_len);
                        resize(lx, half_len);
                        resize(hy, half_len);
                        resize(ly, half_len);

                        resize(z2, len);
                        resize(z1, len + 2);
                        resize(z0, len);

                        resize(xsum, half_len + 1);
                        resize(ysum, half_len + 1);

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
                        mul_karatsuba(z2, hx, hy, depth - 1);
                        mul_karatsuba(z0, lx, ly, depth - 1);
                    }

                    add(xsum, hx, lx);
                    add(ysum, hy, ly);

                    if (depth < 1) {
                        mul_naive(tmp1, xsum, ysum);
                    } else {
                        mul_karatsuba(tmp1, xsum, ysum, depth - 1);
                    }

                    sub(tmp2, tmp1, z2);
                    sub(z1, tmp2, z0);

                    // Specialized loop to combine the results.

                    // Avoid increasing the length of w.
                    const l0: size_t = Math.min(w.length, half_len);
                    const l1: size_t = Math.min(w.length, len);
                    const l2: size_t = Math.min(w.length, len + half_len + 2);
                    const l3: size_t = Math.min(w.length, 2 * len);

                    let tmp: int32_t;
                    let c: int32_t = 0;
                    let i: size_t = 0;
                    while (i < l0) {
                        w[i] = z0[i];
                        i++;
                    }
                    while (i < l1) {
                        tmp = z0[i] + z1[i - half_len] + c;
                        w[i] = tmp & 0xfffffff;
                        c = tmp >>> 28;
                        i++;
                    }
                    while (i < l2) {
                        tmp = z1[i - half_len] + z2[i - len] + c;
                        w[i] = tmp & 0xfffffff;
                        c = tmp >>> 28;
                        i++;
                    }
                    while (i < l3) {
                        tmp = z2[i - len] + c;
                        w[i] = tmp & 0xfffffff;
                        c = tmp >>> 28;
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
             * ASSUMES: x and y are both non-negative with L and L' limbs
             * respectively, and that w has at least L + L' limbs.
             *
             * @param w - Array holding the result.
             * @param x - Left factor.
             * @param y - Right factor.
             * @param len - Actual lengths of inputs. Useful when stored in longer arrays.
             */
            export function mul(w: uli_t, x: uli_t, y: uli_t, len?: size_t): void {
                if (x === y) {
                    square(w, x, len);
                } else {

                    // Only use Karatsuba if the inputs are big enough and
                    // relatively balanced.
                    const xlen: size_t = msword(x) + 1;
                    const ylen: size_t = msword(y) + 1;
                    if (xlen > KARATSUBA_MUL_THRESHOLD &&
                        Math.min(xlen / ylen, ylen / xlen) > KARATSUBA_RELATIVE) {
                        mul_karatsuba(w, x, y, 0, len);
                    } else {
                        mul_naive(w, x, y);
                    }
                }
            }

            /* eslint-disable no-extra-parens */
            /**
             * Computes the 2-by-1 reciprocal of a word d.
             *
             * <p>
             *
             * ASSUMES: most significant bit of d is set, i.e., we have
             * 2^28/2 <= d < 2^28.
             *
             * <p>
             *
             * References: Functionally equivalent to RECIPROCAL_WORD in MG.
             *
             * @param d - Normalized divisor.
             * @returns 2-by-1 reciprocal of d.
             */
            export const reciprocal_word = (function(): (d: word_t) => word_t {

                // Temporary variables.
                const q: uli_t = [0, 0];
                const a: uli_t = [0, 0];
                const p: uli_t = [0, 0, 0];
                const r: uli_t = [0, 0, 0];
                const one: uli_t = [1];
                const zero: uli_t = [0];
                const dd: uli_t = [0];

                const two_masks: [word_t, word_t] = [0xfffffff, 0xfffffff];

                return function(d: word_t): word_t {

                    let s: size_t;
                    let N: int32_t;
                    let A: int32_t;
                    dd[0] = d;

                    set(r, two_masks);

                    setzero(q);
                    do {

                        // If r does not fit in a float, we shift it and the
                        // divisor before computing the estimated quotient.
                        s = Math.max(0, msbit(r) - 53);
                        N = r[1] * Math.pow(2, 28 - s) + (r[0] >> s);
                        A = Math.floor(N / d);

                        // Approximation of quotient as two-word integer.
                        a[0] = A & 0xfffffff;
                        a[1] = (A >>> 28);
                        shiftleft(a, s);

                        // p = a * d
                        mul(p, a, dd);

                        // Correct the estimate if needed. This should not happen,
                        // due to taking the floor, but floating point arithmetic
                        // is not robust over platforms, so let us be defensive.
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

                    // q = q - 2^28
                    return q[0] & 0xfffffff;
                };
            })();

            /**
             * Computes the 3-by-2 reciprocal of d, where d has two
             * limbs/words.
             *
             * <p>
             *
             * ASSUMES: most significant bit of d is set, i.e., we have
             * 2^(2 * 28)/2 <= d < 2^(2*28).
             *
             * <p>
             *
             * References: Algorithm RECIPROCAL_WORD_3BY2 in MG.
             *
             * @param d - Normalized divisor.
             * @returns 3-by-2 reciprocal of d.
             */
            export const reciprocal_word_3by2 =
                (function(): (d: uli_t) => word_t {

                const t: uli_t = [0, 0];

                return function(d: uli_t): word_t {
                    let v: word_t = reciprocal_word(d[1]);

                    // p = d1 * v mod 2^28
                    word_mul(t, d[1], v);

                    let p: word_t = t[0];

                    // p = p + d0 mod 2^28
                    p = (p + d[0]) & 0xfffffff;

                    // p < d0
                    if (p < d[0]) {
                        v--;

                        // p >= d1
                        if (p >= d[1]) {
                            v--;
                            p = p - d[1];
                        }
                        p = (p + 0x10000000 - d[1]) & 0xfffffff;
                    }

                    // t = p * d0
                    word_mul(t, v, d[0]);

                    // p = p + t1 mod 2^28
                    p = (p + t[1]) & 0xfffffff;

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

            /**
             * Computes q and r such that u = q * d + r, where d has
             * two limbs/words, d has three limbs/words, and 0 <= r < d.
             *
             * <p>
             *
             * ASSUMES: most significant bit of d is set, i.e., we have
             * 2^(2 * 28)/2 <= d < 2^(2*28).
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
            export const div3by2 =
                (function(): (r: uli_t,
                               u: uli_t,
                               d: uli_t,
                               neg_d: uli_t,
                               v: word_t) => word_t {

                // Temporary variables.
                const q: uli_t = [0, 0];
                const neg_t: uli_t = [0, 0];

                return function(r: uli_t,
                                 u: uli_t,
                                 d: uli_t,
                                 neg_d: uli_t,
                                 v: word_t): word_t {
                    let tmp: int32_t = 0;

                    // (q1,q0) = v * u2
                    word_mul(q, v, u[2]);

                    // q = q + (u2,u1)
                    // M4_LONG_ADD2
            tmp = q[0] + u[1];
            q[0] = tmp & 0xfffffff;
            q[1] = (q[1] + u[2] + (tmp >>> 28)) & 0xfffffff;

                    // r1 = u1 - q1 * d1 mod 2^28
                    word_mul(r, q[1], d[1]);
                    r[1] = (u[1] + 0x10000000 - r[0]) & 0xfffffff;

                    // neg_t = d0 * q1
                    word_mul(neg_t, d[0], q[1]);
                    neg(neg_t, neg_t);

                    // r = (r1,u0) - t - d mod 2^(2 * 28)
                    r[0] = u[0];
                    // M4_LONG_ADD2
            tmp = r[0] + neg_t[0];
            r[0] = tmp & 0xfffffff;
            r[1] = (r[1] + neg_t[1] + (tmp >>> 28)) & 0xfffffff;
                    // M4_LONG_ADD2
            tmp = r[0] + neg_d[0];
            r[0] = tmp & 0xfffffff;
            r[1] = (r[1] + neg_d[1] + (tmp >>> 28)) & 0xfffffff;

                    // q1 = q1 + 1 mod 2^28
                    q[1] = (q[1] + 1) & 0xfffffff;

                    // r1 >= q0
                    if (r[1] >= q[0]) {

                        // q1 = q1 - 1 mod 2^28
                        q[1] = (q[1] + 0xfffffff) & 0xfffffff;

                        // r = r + d mod 2^(2 * 28)
                        // M4_LONG_ADD2
            tmp = r[0] + d[0];
            r[0] = tmp & 0xfffffff;
            r[1] = (r[1] + d[1] + (tmp >>> 28)) & 0xfffffff;
                    }

                    // r >= d
                    if (r[1] > d[1] || (r[1] === d[1] && r[0] >= d[0])) {

                        // q1 = q1 + 1
                        q[1] = q[1] + 1;

                        // r = r - d
                        // M4_LONG_ADD2
            tmp = r[0] + neg_d[0];
            r[0] = tmp & 0xfffffff;
            r[1] = (r[1] + neg_d[1] + (tmp >>> 28)) & 0xfffffff;
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
             * ASSUMES: x and y are positive, x has L words and at least L + 2
             * limbs (i.e., two leading unused zero words), y has L' words, and q
             * has at least L'' = max{L - L', 0} + 1 limbs and will finally hold
             * a result with at most L'' words and a leading zero limb.
             *
             * <p>
             *
             * References: HAC 14.20.
             *
             * @param q - Holder of quotient.
             * @param x - Divident and holder of remainder at end of computation.
             * @param y - Divisor.
             */
            /* eslint-disable sonarjs/cognitive-complexity */
            export const div_qr =
                (function(): (w: uli_t, x: uli_t, y: uli_t) => void {

                // y from the previous call.
                let old_y: uli_t = [];

                // Normalized y.
                const ny: uli_t = [];

                // Negative of normalized y.
                const neg_ny: uli_t = [];

                // Bits shifted left to normalize.
                let normdist: size_t;

                // Index of most significant word of ny.
                let t: size_t;

                // Reciprocal for 3by2 division.
                let v: word_t;

                // Most significant 3 words of x shifted to accomodate for the
                // normalization of y.
                const u: uli_t = [0, 0, 0];

                // Top two words of ny.
                const d: uli_t = [0, 0];

                // Negative of d in two's complement.
                const neg_d: uli_t = [0, 0];

                // Remainder in 3by2 division.
                const r: uli_t = [0, 0];

                // Normalizes y and computes reciprocals.
                const initialize_y = function(y: uli_t): void {
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
                    normdist = (28 - (msbit(ny) + 1) % 28) % 28;

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
                    v = reciprocal_word_3by2(d);
                };

                // Returns true or false depending on if x >= s(y) or not, where
                // s(y) = y * 2^((n - t) * 28), i.e., s(y) is y shifted by
                // n - t words to the left, and n and t are the indices of the
                // most significant words of x and y respectively.
                const shiftleft_ge =
                    function(x: uli_t, n: size_t, y: uli_t, t: size_t): boolean {
                    let i: size_t = n;
                    let j: size_t = t;

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

                return function(w: uli_t, x: uli_t, y: uli_t): void {
                    let i: size_t;
                    let j: size_t;
                    let k: size_t;
                    let l: size_t;
                    let tmp: word_t;
                    let c: word_t;

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
                    const n: size_t = msword(x);

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

                            x[j] = tmp & 0xfffffff;
                            c = tmp >> 28;
                            i++;
                            j++;
                        }
                        w[n - t]++;
                    }

                    for (i = n; i >= t + 1; i--) {

                        // This remains constant within each execution of the loop
                        // and only used for notational convenience.
                        k = i - t - 1;

                        // Estimate w[k] using reciprocal for top two words of ny.
                        u[2] = x[i];
                        u[1] = i > 0 ? x[i - 1] : 0;
                        u[0] = i > 1 ? x[i - 2] : 0;

                        if (u[2] === d[1] && u[1] >= d[0]) {
                            w[k] = 0xfffffff;
                        } else {
                            w[k] = div3by2(r, u, d, neg_d, v);
                        }

                        // Subtract scaled and shifted ny from x.
                        muladd_loop(x, neg_ny, 0, t + 2, w[k], k, 0);

                        // We now expect x[i] to be zero, i.e., that we have
                        // canceled one word of x. In the unlikely event that the
                        // estimate of w[k] is too big, we need to correct the
                        // result by adding a scaled ny once to x.
                        //
                        // By construction 0 <= w[k] < 2^28. Thus, if w[k]
                        // is too big, then x[i] is -1 in two's complement, i.e.,
                        // equal to 0xfffffff.
                        if (x[k + t + 1] === 0xfffffff) {
                            l = 0;
                            j = k;
                            c = 0;
                            while (l < t + 1) {
                                tmp = x[j] + ny[l] + c;

                                x[j] = tmp & 0xfffffff;
                                c = tmp >> 28;
                                l++;
                                j++;
                            }
                            tmp = x[j] + c;
                            x[j] = tmp & 0xfffffff;
                            j++;
                            if (j < x.length) {
                                x[j] = 0;
                            }
                            w[k]--;
                        }
                    }

                    // Denormalize x.

                    shiftright(x, normdist);
                };
            })();
            /* eslint-enable sonarjs/cognitive-complexity */

            /**
             * Sets w = b^e mod m.
             *
             * <p>
             *
             * ASSUMES: b >= 0, e >= 0, and m > 1, and w, b and m have L limbs.
             *
             * <p>
             *
             * References: HAC 14.82.
             *
             * @param w - Array holding the result.
             * @param b - Basis integer.
             * @param e - Exponent.
             * @param m - Modulus.
             */
            export const modpow_naive =
                (function(): (w: uli_t, b: uli_t, e: uli_t, m: uli_t) => void {

                // We use p to store squares, products, and their remainders, q to
                // store quotients during modular reduction, and A to store
                // intermediate results.
                const p: uli_t = [];
                const q: uli_t = [];
                const A: uli_t = [];

                return function(w: uli_t, b: uli_t, e: uli_t, m: uli_t): void {
                    // Initialize or resize temporary space as needed.
                    if (A.length !== m.length) {
                        resize(p, 2 * m.length + 2);
                        resize(q, m.length);
                        resize(A, m.length);
                    }

                    // Index of most significant bit.
                    const n: size_t = msbit(e);

                    // We avoid one squaring.
                    if (getbit(e, n) === 1) {

                        set(p, b);
                        div_qr(q, p, m);
                        set(A, p);

                    }

                    // Iterate through the remaining bits of e starting from the
                    // most significant bit.
                    for (let i: size_t = n - 1; i >= 0; i--) {

                        // A = A^2 mod m.
                        square(p, A);

                        div_qr(q, p, m);
                        set(A, p);

                        if (getbit(e, i) === 1) {

                            // A = A * b mod m.
                            mul(p, A, b);
                            div_qr(q, p, m);
                            set(A, p);
                        }
                    }
                    set(w, A);
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
            function getuh(uh: uli_t, x: uli_t, i: size_t, wordsize: size_t): void {
                let bitIndex: size_t = i * wordsize;

                // Get the ith block of wordsize bits.
                uh[0] = 0;
                for (let j: size_t = 0; j < wordsize; j++) {
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
             * ASSUMES: 0 < b < m, e >= 0, and m > 1, and w, b and m have L limbs
             * and e may have an arbirary number of limbs.
             *
             * <p>
             *
             * References: HAC 14.83.
             *
             * @param w - Array holding the result.
             * @param b - Basis integer.
             * @param e - Exponent.
             * @param m - Modulus.
             */
            /* eslint-disable sonarjs/cognitive-complexity */
            export const modpow =
                (function(): (w: uli_t, b: uli_t, e: uli_t, m: uli_t) => void {

                // We use p to store squares, products, and their remainders, q to
                // store quotients during modular reduction, and A to store
                // intermediate results.
                const q: uli_t = [];
                const A: uli_t[] = [[], []];
                const B: uli_t[] = [];

                // Alias for cleaner notation.
                const p: uli_t = A[0];

                return function(w: uli_t, b: uli_t, e: uli_t, m: uli_t): void {
                    const msb: size_t = msbit(e) + 1;

                    // Thresholds for pre-computation. These are somewhat
                    // arbitrary, since the optimal thresholds are likely to
                    // differ with the wordsize and JavaScript engine.
                    let k: size_t = 2;
                    if (msb > 512) {
                        k++;
                    }
                    if (msb > 640) {
                        k++;
                    }
                    if (msb > 768) {
                        k++;
                    }
                    if (msb > 896) {
                        k++;
                    }
                    if (msb > 1280) {
                        k++;
                    }
                    if (msb > 2688) {
                        k++;
                    }
                    if (msb > 3840) {
                        k++;
                    }

                    // Initialize or resize temporary space as needed.
                    if (q.length !== m.length) {
                        resize(q, m.length);
                        resize(A[0], 2 * m.length + 2);
                        resize(A[1], 2 * m.length + 2);

                        for (let i: size_t = 0; i < B.length; i++) {
                            resize(B[i], m.length);
                        }
                    }

                    // Expand the table if needed.
                    if (B.length < (1 << k)) {
                        const len: size_t = B.length;
                        B.length = 1 << k;
                        for (let i: size_t = len; i < B.length; i++) {
                            B[i] = newarray(m.length);
                        }
                    }

                    // Precompute table
                    // B[0] = 1.
                    B[0][0] = 1;

                    // B[1] = b
                    set(B[1], b);

                    // B[2] = b^2 mod m
                    square(p, b, m.length);
                    div_qr(q, p, m);
                    set(B[2], p);

                    // B[i] = B[i - 1] * b^2 mod m for odd i
                    for (let i: size_t = 1; i < 1 << (k - 1); i++) {
                        mul(p, B[2 * i - 1], B[2], m.length);
                        div_qr(q, p, m);
                        set(B[2 * i + 1], p);
                    }

                    // Set A = 1.
                    let s: size_t = 0;
                    setzero(A[s]);
                    A[s][0] = 1;

                    // Iterate through the bits of e starting from the most
                    // significant block of bits.
                    const n: size_t = Math.floor((msb + k - 1) / k);

                    const uh: uli_t = [0, 0];
                    for (let i: size_t = n; i >= 0; i--) {

                        // Extract the ith block of bits w and represent it as w =
                        // 2^uh[1] * uh[0], with uh[0] odd and with uh[0] = uh[1]
                        // = 0 when w = 0.
                        getuh(uh, e, i, k);

                        // A = A^E mod m, where E = 2^(k - uh[1]).
                        for (let j: size_t = 0; j < k - uh[1]; j++) {
                            square(A[s ^ 1], A[s], m.length); s ^= 1;
                            div_qr(q, A[s], m);
                        }

                        // A = A * B[uh[0]] mod m.
                        if (uh[0] !== 0) {
                            mul(A[s ^ 1], A[s], B[uh[0]], m.length); s ^= 1;
                            div_qr(q, A[s], m);
                        }

                        // A = A^E mod m, where E = 2^uh[1].
                        for (let j: size_t = 0; j < uh[1]; j++) {
                            square(A[s ^ 1], A[s], m.length); s ^= 1;
                            div_qr(q, A[s], m);
                        }
                    }
                    set(w, A[s]);
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
             * @param b - List of bases.
             * @param m - Modulus.
             * @returns t Table for products.
             */
            export const modpowprodtab_inner =
                (function(): (b: uli_t[], m: uli_t) => uli_t[] {

                // We use p to store products and q to store quotients during
                // modular reduction.
                const p: uli_t = [];
                const q: uli_t = [];

                return function(b: uli_t[], m: uli_t): uli_t[] {
                    // Initialize or resize temporary space as needed.
                    if (q.length !== m.length) {
                        resize(p, 2 * m.length + 2);
                        resize(q, m.length);
                    }

                    // Make room for table and initialize all elements to one.
                    const t: uli_t[] = [];
                    for (let i: size_t = 0; i < 1 << b.length; i++) {
                        t[i] = newarray(m.length);
                        t[i][0] = 1;
                    }

                    // Initialize parts of the table with the bases provided.
                    for (let i: size_t = 1, j: size_t = 0; i < t.length; i = i * 2, j++) {
                        set(t[i], b[j]);
                    }

                    // Perform precalculation using masking for efficiency.
                    for (let mask: int32_t = 1; mask < t.length; mask++) {

                        const onemask: int32_t = mask & -mask;
                        mul(p, t[mask ^ onemask], t[onemask]);
                        div_qr(q, p, m);
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
             * positive, and width <= 28.
             *
             * @param b - List of bases.
             * @param m - Modulus.
             * @param width - Maximal number of bases used for each table.
             * @returns t Array of tables for products.
             */
            export function modpowprodtab(b: uli_t[], m: uli_t, width: size_t):
            uli_t[][] {
                const t: uli_t[][] = [];

                for (let i: size_t = 0, j: size_t = 0; j < b.length; i++, j += width) {
                    t[i] = modpowprodtab_inner(b.slice(j, j + width), m);
                }
                return t;
            }

            /**
             * Sets x to the bit-wise concatenation of the inputs, i.e., the jth
             * least significant bit of the ith word of the output is the ith bit
             * of e[j].
             *
             * <p>
             *
             * ASSUMES: e.length <= 28 and x.length >= bitsize, where
             * is the maximum bitsize of any of the inputs.
             *
             * @param x - Stores bit-wise concatenation of the inputs.
             * @param e - List of integers.
             * @param bitsize - Maximum bitsize of any of the inputs.
             */
            function concbits_inner(x: uli_t, e: uli_t[], bitsize: size_t): void {

                setzero(x);

                const w: uli_t = newarray(e.length);

                // Bit position in each e[j], and word position in x.
                let k: size_t = 0;

                // Word position in each e[j].
                for (let i: size_t = 0; k < bitsize; i++) {

                    // Simulate leading zero of e[j] if needed.
                    for (let j: size_t = 0; j < w.length; j++) {
                        w[j] = i < e[j].length ? e[j][i] : 0;
                    }

                    // Bit position within e[j][i] for each j.
                    for (let b: size_t = 0; b < 28 && k < bitsize; b++, k++) {

                        // Bits at position i * 28 + b from all e[j].
                        x[k] = 0;
                        for (let j: size_t = w.length - 1; j >= 0 ; j--) {
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
             * ASSUMES: width <= 28, x[i].length >= msbit(e[i]) + 1 for
             * all i, and x.length = (e.length + width-1) / width.
             *
             * @param x - Stores bit-wise concatenations of the inputs.
             * @param e - List of exponents.
             * @param bitsize - Maximum bitsize of any of the inputs.
             * @param width - Width of each block that is concatenated separately.
             */
            function concbits(x: uli_t[], e: uli_t[], bitsize: size_t, width: size_t):
            void {
                for (let i: size_t = 0, j: size_t = 0; j < e.length; i++, j += width) {
                    concbits_inner(x[i], e.slice(j, j + width), bitsize);
                }
            }

            /**
             * Returns maximal index of a most significant bit.
             *
             * @param e - Input non-negative integers.
             * @returns Maximal index of a most significant bit.
             */
            function max_msbit(e: uli_t[]): size_t {
                let m: size_t = 0;
                for (let i: size_t = 0; i < e.length; i++) {
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
             * @param w - Holds the result.
             * @param t - Tables of products.
             * @param e - List of exponents.
             * @param m - Modulus
             * @param width - Width of each block that is precomputed separately.
             */
            export const modpowprod = (function(): (w: uli_t,
                                                    t: uli_t[][],
                                                    e: uli_t[],
                                                    m: uli_t,
                                                    width: size_t) => void {

                // We use x to store concatenated exponents, q to store quotients
                // during modular reduction, and a dual representation of A to
                // store intermediate results.
                const x: uli_t[] = [];
                const q: uli_t = [];
                const A: [uli_t, uli_t] = [[], []];

                return function(w: uli_t,
                                t: uli_t[][],
                                e: uli_t[],
                                m: uli_t,
                                width: size_t): void {

                    // Maximal bitsize of any e[j].
                    const bitsize: size_t = max_msbit(e) + 1;

                    // Initialize or resize temporary space as needed.
                    if (q.length !== m.length) {
                        resize(q, m.length);
                        resize(A[0], 2 * m.length + 2);
                        resize(A[1], 2 * m.length + 2);
                    }

                    // Ensure that x has the right number of elements.
                    while (x.length < t.length) {
                        x.push([]);
                    }

                    // Ensure that each x[j] has the right length.
                    if (x[0].length < bitsize) {
                        for (let j = 0; j < t.length; j++) {
                            x[j].length = bitsize;
                        }
                    }

                    // Concatenate exponent bits within each block.
                    concbits(x, e, bitsize, width);

                    // Set A = 1.
                    let s: size_t = 0;
                    setone(A[s]);

                    for (let i: size_t = bitsize - 1; i >= 0; i--) {

                        // A = A^2 mod m.
                        square(A[s ^ 1], A[s]); s ^= 1;
                        div_qr(q, A[s], m);

                        for (let j: size_t = 0; j < t.length; j++) {

                            if (x[j][i] !== 0) {

                                // A = A * t[ j ][ x[j][i] ] mod m.
                                mul(A[s ^ 1], A[s], t[j][ x[j][i] ]); s ^= 1;
                                div_qr(q, A[s], m);
                            }
                        }
                    }
                    set(w, A[s]);
                };
            })();

            // /**
            //  * Computes a simultaneous exponentiation using a table
            //  * of pre-computed values t for k bases b[0],...,b[k-1] and modulus m,
            //  * i.e., it sets w = b[0]^e[0] * ... * b[k-1]^e[k-1].
            //  *
            //  * <p>
            //  *
            //  * ASSUMES: m > 1 has L limbs and e[i] has L limbs for i = 0,...,k - 1
            //  * and all inputs are positive, and that the table was computed with
            //  * the same number k of bases and the same modulusm.
            //  *
            //  * @param w - Holds the result.
            //  * @param t - Table of products.
            //  * @param e - List of k exponents.
            //  * @param m - Modulus
            //  */
            // export const modpowprod =
            //     (function(): (w: uli_t, t: uli_t[], e: uli_t[], m: uli_t) => void {

            //     // We use p to store squares, products, and their remainders, q to
            //     // store quotients during modular reduction, and A to store
            //     // intermediate results.
            //     const p: uli_t = [];
            //     const q: uli_t = [];
            //     const A: uli_t = [];

            //     return function(w: uli_t, t: uli_t[], e: uli_t[], m: uli_t): void {
            //         // Initialize or resize temporary space as needed.
            //         if (A.length !== m.length) {
            //             resize(p, 2 * m.length + 2);
            //             resize(q, m.length);
            //             resize(A, m.length);
            //         }

            //         // Determine maximal most significant bit position.
            //         let l: size_t = msbit(e[0]);
            //         for (let i: size_t = 1; i < e.length; i++) {
            //             l = Math.max(msbit(e[i]), l);
            //         }

            //         // Set A = 1.
            //         setone(A);

            //         for (let i: size_t = l; i >= 0; i--) {

            //             let x: word_t = 0;

            //             // A = A^2 mod m.
            //             square(p, A);
            //             div_qr(q, p, m);
            //             set(A, p);

            //             // Loop over exponents to form a word x from all the bits
            //             // at a given position.
            //             for (let j: size_t = 0; j < e.length; j++) {

            //                 if (getbit(e[j], i) === 1) {

            //                     x |= 1 << j;
            //                 }
            //             }

            //             // Look up product in pre-computed table if needed.
            //             if (x !== 0) {

            //                 // A = A * t[x] mod m.
            //                 mul(p, A, t[x]);
            //                 div_qr(q, p, m);
            //                 set(A, p);
            //             }
            //         }
            //         set(w, A);
            //     };
            // })();

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
            export function slice(x: uli_t, s: size_t, e: size_t): uli_t {
                const m: size_t = msbit(x);

                // Avoid indexing out of bounds.
                e = Math.min(e, m + 1);

                // Copy and get rid of the lower bits.
                const w: uli_t = copyarray(x);
                shiftright(w, s);

                // Get rid of higher words.
                const bitlen: size_t = e - s;
                w.length = Math.floor((bitlen + 28 - 1) / 28);

                // Get rid of top-most bits.
                const topbits: size_t = bitlen % 28;
                if (topbits > 0) {
                    w[w.length - 1] &= 0xfffffff >>> 28 - topbits;
                }
                return w;
            }

            /**
             * Returns a hexadecimal representation of this input
             * array by content, i.e., unused bits of each limb are dropped before
             * conversion.
             *
             * @param x - Array of words.
             * @returns Hexadecimal string representation of the array.
             */
            export function hex(x: uli_t): string {

                /* eslint-disable @typescript-eslint/no-explicit-any */
                const dense: uli_t = <uint8_t[]><any[]>change_wordsize(x, 28, 8);
                /* eslint-enable @typescript-eslint/no-explicit-any */

                normalize(dense);
                return byteArrayToHex(<uint8_t[]>dense.reverse());
            }

            /**
             * Returns the integer represented by the input.
             *
             * @param s - Hexadecimal representation of an integer.
             * @returns Represented integer.
             */
            export function hex_to_li(s: string): uli_t {
                const b: uli_t = hexToByteArray(s);
                const r: uli_t = b.reverse();
                return <uli_t>change_wordsize(r, 8, 28);
            }
        }

        export namespace li {
            import VerificatumObject = verificatum.base.VerificatumObject;
            import newarray = verificatum.arithm.uli.newarray;
            import uli_add = verificatum.arithm.uli.add;
            import uli_cmp = verificatum.arithm.uli.cmp;
            import uli_copyarray = verificatum.arithm.uli.copyarray;
            import uli_div_qr = verificatum.arithm.uli.div_qr;
            import uli_getbit = verificatum.arithm.uli.getbit;
            import uli_hex = verificatum.arithm.uli.hex;
            import uli_iszero = verificatum.arithm.uli.iszero;
            import uli_lsbit = verificatum.arithm.uli.lsbit;
            import uli_modpow = verificatum.arithm.uli.modpow;
            import uli_msbit = verificatum.arithm.uli.msbit;
            import uli_msword = verificatum.arithm.uli.msword;
            import uli_mul = verificatum.arithm.uli.mul;
            import uli_muladd_loop = verificatum.arithm.uli.muladd_loop;
            import uli_normalize = verificatum.arithm.uli.normalize;
            import uli_resize = verificatum.arithm.uli.resize;
            import uli_set = verificatum.arithm.uli.set;
            import uli_setzero = verificatum.arithm.uli.setzero;
            import uli_shiftleft = verificatum.arithm.uli.shiftleft;
            import uli_shiftright = verificatum.arithm.uli.shiftright;
            import uli_square = verificatum.arithm.uli.square;
            import uli_sub = verificatum.arithm.uli.sub;

            /**
             * Simple container class for signed mutable integers with manual
             * memory management as for uli_t. Instantiated with sign and value,
             * with a length of the underlying array for an uninitialized
             * instance, or with no parameters.
             *
             * @param first - Empty, sign, or number of words in empty instance.
             * @param second - Empty or array containing value.
             * @returns Instance of a container for signed integers.
             */
            export class SLI extends VerificatumObject {
                sign: sign_t;
                value: uli_t;
                length: size_t;

                /**
                 * Constructs an SLI.
                 *
                 * @param first
                 *
                 * @throws Error if an input is incorrectly formatted, but does
                 * not perform a full dynamic type check of the input.
                 */
                constructor(first?: sign_t | size_t, second?: uli_t) {
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
                        this.value = newarray(first);
                        this.length = this.value.length;
                    } else {
                        if (!(first == -1 || first == 0 || first == 1)) {
                            throw Error("First parameter is not a sign! (${first})");
                        }

                        this.sign = <sign_t>first;
                        this.value = second;
                        this.length = this.value.length;
                    }
                }
            }

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
             * <tr><td>HAC 2.149</td><td> Legendre symbol</td><td></td></tr>
             * <tr><td>HAC 14.36</td><td> Montgomery modular multiplication</td><td></td></tr>
             * <tr><td>HAC 14.61</td><td> Extended Euclidian algorithm (variation)</td><td></td></tr>
             * <tr><td>HAC 14.94</td><td> Montgomery modular exponentiation</td><td></td></tr>
             * </table>
             * TSDOC_MODULE
             */

            // Removed WASM code here.

            /**
             * Truncates the input to the shortest possible array
             * that represents the same absolute value in two's complement, i.e.,
             * there is always a leading zero bit.
             *
             * @param x - Array to be truncated.
             * @param mask_top - Word used to normalize.
             */
            export function normalize(x: SLI, mask_top?: word_t): void {
                uli_normalize(x.value, mask_top);
                x.length = x.value.length;
            }

            /**
             * Resizes the underlying array to the given length.
             *
             * @param a - SLI to be resized.
             * @param len - New length of SLI.
             */
            export function resize(a: SLI, len: size_t): void {
                uli_resize(a.value, len);
                a.length = a.value.length;
            }

            /**
             * Returns the sign of a number.
             *
             * @param n - A Javascript "number".
             * @returns Sign of number as -1, 0, or 1.
             */
            export function sign(n: int52_t): sign_t {
                if (n > 0) {
                    return 1;
                } else if (n === 0) {
                    return 0;
                } else {
                    return -1;
                }
            }

            /**
             * Sets a = b, where b is an SLI instance.
             *
             * <p>
             *
             * ASSUMES: b has L words and a has at least L limbs.
             *
             * @param a - SLI holding the result.
             * @param b - Integer value represented as a SLI.
             */
            export function set(a: SLI, b: SLI): void;

            /**
             * Sets a = b, where b is a "number".
             *
             * <p>
             *
             * ASSUMES: 0 <= |b| < 2^28.
             *
             * @param a - SLI holding the result.
             * @param b - Integer value represented as a "number".
             */
            export function set(a: SLI, b: word_t): void;

            export function set(a: SLI, b: SLI | word_t): void {
                if (typeof b === "number") {
                    a.sign = sign(b);
                    uli_set(a.value, Math.abs(b));
                } else {
                    a.sign = b.sign;
                    uli_set(a.value, b.value);
                }
            }

            /**
             * Returns a copy of a, where the length of the underlying array is
             * len if this increases its length.
             *
             * @param a - Original array.
             * @param len - Length of resulting SLI if it is larger than the
             * length of the original SLI.
             * @returns Copy of original SLI.
             */
            export function copy(a: SLI, len: size_t): SLI;

            /**
             * Returns a copy of a.
             *
             * @param a - Original array.
             * @returns Copy of original SLI.
             */
            export function copy(a: SLI): SLI;

            export function copy(a: SLI, len?: size_t): SLI {
                if (typeof len === "undefined") {
                    len = a.length;
                }
                return new SLI(a.sign, uli_copyarray(a.value, len));
            }

            /**
             * Returns -1, 0, or 1 depending on if a < b, a == b, or
             * a > b.
             *
             * @param a - Left SLI.
             * @param b - Right SLI.
             * @returns Value of comparison predicate on a and b.
             */
            export function cmp(a: SLI, b: SLI): sign_t {
                if (a.sign < b.sign) {
                    return -1;
                } else if (a.sign > b.sign) {
                    return 1;
                } else if (a.sign === 0) {
                    return 0;
                }
                return <sign_t>(uli_cmp(a.value, b.value) * a.sign);
            }

            /**
             * Returns true or false depending on if a = b or not.
             *
             * @param a - Left SLI.
             * @param b - Right SLI.
             * @returns True or false depending on if the SLIs represent the same
             * integer or not.
             */
            export function equals(a: SLI, b: SLI): boolean {
                return a.sign === b.sign && uli_cmp(a.value, b.value) === 0;
            }

            /**
             * Returns true or false depending on a = 0 or not.
             *
             * @param a - Integer represented as a SLI.
             * @returns True or false depending on if a is zero or not.
             */
            export function iszero(a: SLI): boolean {
                return a.sign === 0;
            }

            /**
             * Returns true or false depending on a = 1 or not.
             *
             * @param a - Integer represented as a SLI.
             * @returns True or false depending on if a is zero or not.
             */
            export function isone(a: SLI): boolean {
                return a.sign === 1 && a.value[0] === 1 && uli_msword(a.value) === 0;
            }

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
            export function shiftleft(a: SLI, offset: size_t): void {
                uli_shiftleft(a.value, offset);
            }

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
            export function shiftright(a: SLI, offset: size_t): void {
                uli_shiftright(a.value, offset);
                if (uli_iszero(a.value)) {
                    a.sign = 0;
                }
            }

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
            export function add(a: SLI, b: SLI, c: SLI): void {
                const w: uli_t = a.value;
                const x: uli_t = b.value;
                const y: uli_t = c.value;

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

                    const s: sign_t = uli_cmp(x, y);
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
            export function sub(a: SLI, b: SLI, c: SLI): void {
                const w: uli_t = a.value;
                const x: uli_t = b.value;
                const y: uli_t = c.value;

                // x - y  or  -x - -y.
                if (b.sign === c.sign) {

                    // x >= y.
                    if (uli_cmp(x, y) >= 0) {
                        uli_sub(w, x, y);
                        a.sign = b.sign;
                        // x < y.
                    } else {
                        uli_sub(w, y, x);
                        a.sign = <sign_t>(-b.sign);
                    }

                    // -x - y  or  x - -y.
                } else {

                    uli_add(w, x, y);
                    if (b.sign === 0) {
                        a.sign = <sign_t>(-c.sign);
                    } else {
                        a.sign = b.sign;
                    }
                }

                if (uli_iszero(w)) {
                    a.sign = 0;
                }
            }

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
            export const mul =
                (function(): (a: SLI, b: SLI, c: SLI, len?: size_t) => void {

                const t: uli_t = [];

                return function(a: SLI, b: SLI, c: SLI, len?: size_t): void {
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
                    a.sign = <sign_t>(b.sign * c.sign);
                };
            })();

            /**
             * Sets a = b * c, where c is a word.
             *
             * <p>
             *
             * ASSUMES: b has L limbs, c is a word such that 0 <=
             * c < 2^28, and a has at least L + 1 limbs.
             *
             * @param a - SLI holding the result.
             * @param b - Left factor.
             * @param c - Right factor.
             */
            export const mul_word =
                (function(): (a: SLI, b: SLI, c: word_t) => void {
                const C: SLI = new SLI(1);

                return function(a: SLI, b: SLI, c: word_t): void {
                    set(C, c);
                    mul(a, b, C);
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
            export function square(a: SLI, b: SLI): void {
                uli_square(a.value, b.value);
                a.sign = <sign_t>(b.sign * b.sign);
            }

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
            export function div_qr(q: SLI, a: SLI, b: SLI): void {
                let qsign: sign_t;
                let asign: sign_t;

                uli_div_qr(q.value, a.value, b.value);

                // Division without remainder.
                if (uli_iszero(a.value)) {

                    qsign = <sign_t>(a.sign * b.sign);
                    asign = 0;

                    // Division with remainder, so we need to round.
                } else {

                    if (a.sign * b.sign === 1) {
                        asign = a.sign;
                        qsign = a.sign;
                    } else {

                        // This is safe since a.value < b.value and a.value has at
                        // least one more limb than b.value.
                        uli_sub(a.value, b.value, a.value);

                        // This is safe, since q has an additional limb.
                        uli_add(q.value, q.value, [1]);
                        asign = b.sign;
                        qsign = a.sign;
                    }
                }
                q.sign = qsign;
                a.sign = asign;
            }

            /**
             * Sets a = b mod c (this is merely syntactic sugar for
             * div_qr).
             *
             * @param a - SLI holding the result.
             * @param b - Dividend.
             * @param c - Modulus.
             */
            export const mod =
                (function(): (a: SLI, b: SLI, c: SLI) => void {

                // Temporary space for quotient and remainder.
                const q: SLI = new SLI();
                const r: SLI = new SLI();

                return function(a: SLI, b: SLI, c: SLI): void {
                    // Resize temporary space if needed. This is conservative.
                    const qlen: size_t = b.length + 1;
                    if (q.length < qlen) {
                        resize(q, qlen);
                    }
                    const rlen: size_t = b.length + 2;
                    if (r.length < rlen) {
                        resize(r, rlen);
                    }

                    // Copy b to temporary remainder, reduce and set result.
                    set(r, b);
                    div_qr(q, r, c);
                    set(a, r);
                };
            })();

            // Help function for egcd. Consult HAC 14.61 (5th printing + errata)
            // for information.
            export function egcd_binary_reduce(u: SLI,
                                               A: SLI,
                                               B: SLI,
                                               x: SLI,
                                               y: SLI):
            void {

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

            /**
             * Sets a, b, and v such that a * x + b * y = v and v is
             * the greatest common divisor of x and y.
             *
             * <p>
             *
             * References: HAC 14.61 (5th printing + errata)
             *
             * @param a - Linear coefficient of Bezout expression.
             * @param b - Linear coefficient of Bezout expression.
             * @param v - Greatest common divisor of x and y.
             * @param x - Left integer.
             * @param y - Right integer.
             */
            export const egcd =
                (function(): (a: SLI, b: SLI, v: SLI, x: SLI, y: SLI) => void {

                // Temporary space.
                const xs: SLI = new SLI();
                const ys: SLI = new SLI();

                const A: SLI = new SLI();
                const B: SLI = new SLI();
                const C: SLI = new SLI();
                const D: SLI = new SLI();

                const u: SLI = new SLI();

                return function(a: SLI, b: SLI, v: SLI, x: SLI, y: SLI): void {
                    if (iszero(x) || iszero(y)) {

                        set(a, 0);
                        set(b, 0);
                        set(v, 0);
                        return;
                    }

                    const len: size_t = Math.max(x.length, y.length) + 1;
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
                    const common_twos: size_t =
                          Math.min(uli_lsbit(xs.value), uli_lsbit(ys.value));
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

                        } else {

                            sub(v, v, u);
                            sub(C, C, A);
                            sub(D, D, B);
                        }
                    }

                    set(a, C);
                    set(b, D);

                    shiftleft(v, common_twos);
                };
            })();

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
            export const modinv =
                (function(): (w: SLI, x: SLI, p: SLI) => void {

                // Temporary space.
                const a: SLI = new SLI();
                const b: SLI = new SLI();
                const v: SLI = new SLI();

                return function(w: SLI, x: SLI, p: SLI): void {

                    const len: size_t = Math.max(p.length, x.length);
                    if (a.length !== len) {
                        resize(a, len);
                        resize(b, len);
                        resize(v, len);
                    }

                    egcd(a, b, v, x, p);

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
            export function modpow(w: SLI, b: SLI, e: SLI, m: SLI): void {
                uli_modpow(w.value, b.value, e.value, m.value);
                w.sign = 1;
            }

            /**
             * Returns (a | b), i.e., the Legendre symbol of a modulo
             * b for an odd prime b. (This is essentially a GCD algorithm that
             * keeps track of the symbol.)
             *
             * <p>
             *
             * References: HAC 2.149.
             *
             * @param a - Integer modulo b.
             * @param b - An odd prime modulus.
             * @returns Legendre symbol of this instance modulo the input.
             */
            /* eslint-disable sonarjs/cognitive-complexity */
            export function legendre(a: SLI, b: SLI): sign_t {
                a = copy(a);
                b = copy(b);

                let s: sign_t = 1;
                for (;;) {

                    if (iszero(a)) {

                        return 0;

                    } else if (isone(a)) {

                        return s;

                    } else {

                        // a = 2^e * a'
                        const e: size_t = uli_lsbit(a.value);

                        // a = a'.
                        shiftright(a, e);

                        // Least significant words of a and b.
                        const aw: word_t = a.value[0];
                        const bw: word_t = b.value[0];

                        // e = 1 mod 2 and b = 3,5 mod 8.
                        if (e % 2 === 1 && (bw % 8 === 3 || bw % 8 === 5)) {
                            s = <sign_t>(-s);
                        }

                        // b = a = 3 mod 4.
                        if (bw % 4 === 3 && aw % 4 === 3) {
                            s = <sign_t>(-s);
                        }

                        // Corresponds to finding the GCD.
                        if (isone(a)) {
                            return s;
                        }

                        // Replacement for recursive call.
                        mod(b, b, a);

                        const t: SLI = a;
                        a = b;
                        b = t;
                    }
                }
            }
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
            export const modsqrt =
                (function(): (w: SLI, x: SLI, p: SLI) => void {

                const ONE: SLI = new SLI(1);
                set(ONE, 1);

                const TWO: SLI = new SLI(1);
                set(TWO, 2);

                const a: SLI = new SLI();
                const n: SLI = new SLI();
                const v: SLI = new SLI();
                const k: SLI = new SLI();
                const r: SLI = new SLI();
                const z: SLI = new SLI();
                const c: SLI = new SLI();
                const tmp: SLI = new SLI();

                return function(w: SLI, x: SLI, p: SLI): void {
                    const plen: size_t = uli_msword(p.value) + 1;
                    const len: size_t = 2 * plen + 2;

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

                    mod(a, x, p);

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
                    let s: size_t = uli_lsbit(k.value);
                    shiftright(k, s);

                    // k = k - 1
                    sub(k, k, ONE);

                    // k = k / 2
                    shiftright(k, 1);

                    // r = a^k mod p
                    modpow(r, a, k, p);

                    // n = r^2 mod p
                    mul(tmp, r, r);
                    mod(n, tmp, p);

                    // n = n * a mod p
                    mul(tmp, n, a);
                    mod(n, tmp, p);

                    // r = r * a mod p
                    mul(tmp, r, a);
                    mod(r, tmp, p);

                    if (isone(n)) {
                        set(w, r);
                        return;
                    }

                    // Generate a quadratic non-residue
                    set(z, 2);

                    // while z is a quadratic residue
                    while (legendre(z, p) === 1) {

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

                    let t: size_t = 0;
                    while (cmp(n, ONE) > 0) {

                        // k = n
                        set(k, n);

                        // t = s
                        t = s;
                        s = 0;

                        // k != 1
                        while (!isone(k)) {

                            // k = k^2 mod p
                            mul(tmp, k, k);
                            mod(k, tmp, p);

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
                        mul(tmp, r, c);
                        mod(r, tmp, p);

                        // c = c^2 mod p
                        mul(tmp, c, c);
                        mod(c, tmp, p);

                        // n = n * c mod p
                        mul(tmp, n, c);
                        mod(n, tmp, p);
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
            export function hex(a: SLI): string {
                let s: string = "";
                if (a.sign < 0) {
                    s = "-";
                }
                return s + uli_hex(a.value);
            }

            /**
             * Returns the Montomery inverse of m modulo 2^28, i.e., the
             * inverse w such that w = -m^(-1) mod 2^28.
             *
             * <p>
             *
             * ASSUMES: m is non-zero and odd.
             *
             * <p>
             *
             * @returns Montgomery inverse of m.
             */
            export function neginvm_mont(m: uli_t): word_t {

                // This is a naive implementation, but we cache the output in
                // calling functions so readability and conciseness takes
                // precendence.

                // Make room for result.
                const len: size_t = Math.max(2, m.length) + 1;
                const a: SLI = new SLI(len);
                const b: SLI = new SLI(len);
                const v: SLI = new SLI(len);

                // x = m
                const x: SLI = new SLI(1, m);

                // y = 2^28
                const y: SLI = new SLI(1, [0x0, 0x1]);

                // am + by = v = 1
                egcd(a, b, v, x, y);

                // -m^(-1) mod 2^28
                return (0x10000000 - a.value[0]) & 0xfffffff;
            }

            /**
             * Montgomery multiplication, i.e., it sets a = x * y * R^(-1) mod m,
             * where b = 2^28, R = b^n, and n is the number of limbs in
             * m, i.e., m < 2^n.
             *
             * <p>
             *
             * ASSUMES: m > 0 is odd and 0 <= x,y < m, m has L limbs of which at
             * least the top two words equal zero, a is distinct from x, y, and m
             * and have 2 * L limbs, and finally x and y must have at least L
             * limbs.
             *
             * <p>
             *
             * References: HAC 14.36.
             */
            export const mul_mont =
                (function(): (a: uli_t, x: uli_t, y: uli_t, m: uli_t) => void {

                // In applications m is typically re-used, so we avoid computing
                // m^(-1) mod
                let w: word_t;
                let old_m0: word_t;

                return function(a: uli_t, x: uli_t, y: uli_t, m: uli_t): void {
                    const L: size_t = m.length;

                    // Cache the Montgomery inverse of m mod b, since it is likely
                    // that we need it again soon.
                    if (old_m0 !== m[0]) {
                        w = neginvm_mont(m) | 0;
                        old_m0 = m[0];
                    }

                    // a = 0
                    uli_setzero(a);

                    // yw = y[0] * w
                    let yw: word_t = 0;
                    // M4_WORD_MODMUL
            yw = ((yw | 0) + (y[0] & 0x3fff) * (w & 0x3fff) + (((y[0] >>> 14) * (w & 0x3fff) + (y[0] & 0x3fff) * (w >>> 14)) << 14)) & 0xfffffff;

                    // Position within a thought of as the location of its least
                    // significant word. We let the representation of a slide
                    // upwards to simulate shifting.
                    let pos: size_t = 0;
                    const n: size_t = uli_msword(m) + 1;

                    // Loop invariant: a < 4 * m, i.e., we need one additional
                    // word to store a. The loop invariant is satisfied when i =
                    // 0, since a = 0 in this case.
                    for (let i: size_t = 0; i < n; i++) {

                        // u = (a[0] + x[i] * y[0]) * w mod b
                        // This implies that we have 0 <= u < b as an integer.
                        let u: word_t = 0;
                        // M4_WORD_MODMUL
            u = ((u | 0) + (a[pos] & 0x3fff) * (w & 0x3fff) + (((a[pos] >>> 14) * (w & 0x3fff) + (a[pos] & 0x3fff) * (w >>> 14)) << 14)) & 0xfffffff;
                        // M4_WORD_MODMUL
            u = ((u | 0) + (x[i] & 0x3fff) * (yw & 0x3fff) + (((x[i] >>> 14) * (yw & 0x3fff) + (x[i] & 0x3fff) * (yw >>> 14)) << 14)) & 0xfffffff;

                        // a = a + y * x[i]
                        uli_muladd_loop(a, y, 0, L, x[i], pos, 0);

                        // We know that 0 <= x[i] < b. Thus, we now have:
                        // a < 4 * m + m * b

                        // a = a + m * u
                        uli_muladd_loop(a, m, 0, L, u, pos, 0);

                        // We know that 0 <= u < b. Thus, we now have:
                        // a < 4 * m + 2 * m * b

                        // a = a / b
                        // Lazy right shift by 28 bits.
                        pos++;

                        // The loop invariant is now satisfied, since b > 1 implies:
                        // a / b < (2 + 4/b) * m < 4 * m
                    }

                    // Now we do all n right shifts at once.
                    for (let j: size_t = n; j < n + L; j++) { a[j + 0 - n] = a[j] | 0; }
                    for (let j: size_t = L; j < 2 * L; j++) { a[j] = 0; }

                    // Without right shifts a is bounded by 2 * m * m and we shift
                    // n positions. Thus, a < 2 * m which implies that 0 <= a < m
                    // or 0 <= a - m < m. The loop invariant is simplistic to be
                    // easy to understand.

                    // a = min(a, a - m)
                    if (uli_cmp(a, m) >= 0) {
                        uli_sub(a, a, m);
                    }
                };
            })();

            /**
             * Sets w = x^e mod m using Montgomery exponentiation.
             *
             * <p>
             *
             * ASSUMES: x >= 0, e >= 0, and m > 1 is odd, and w, x and m have L limbs.
             *
             * <p>
             *
             * References: HAC 14.94.
             *
             * @param w - Array holding the result.
             * @param x - Basis integer.
             * @param e - Exponent.
             * @param m - Modulus.
             */
            export const modpow_mont =
                (function(): (w: uli_t, x: uli_t, e: uli_t, m: uli_t) => void {

                // Only used as pointers for determining caching
                let old_n: size_t = 0;
                let old_x: uli_t = [];
                let old_m: uli_t = [];

                // Temporary variables which are reused if possible, and values
                // are cached if possible.
                //
                // We use a twin representation of A in the algorithm to avoid
                // that mont_mul() overwrites its input. We use the pattern
                //
                // mont_mul(A[b ^ 1], A[b], A[b], m);  b ^= 1;
                //
                // consistently to make sure that A[b] always holds the result. In
                // each call mont_mul(w, x, y, m) the inputs satisfy the
                // following:
                //
                // - w has 2 * l limbs and is distinct from x, y, and m
                // - m has l limbs and at most l - 2 words
                // - 0 <= x, y < m
                // - x and y has at least l limbs

                const mt: uli_t = [];

                // Temporary variable which is ignored.
                const q: uli_t = [];

                // R mod m
                const Rmodm: uli_t = [];

                // R^2 mod m
                const R2modm: uli_t = [];
                const xx: uli_t = [];
                const xt: uli_t = [];
                const A: [uli_t, uli_t] = [[], []];
                const one: uli_t = [];

                return function(w: uli_t, x: uli_t, e: uli_t, m: uli_t): void {
                    // Number of limbs needed to store m.
                    const n: size_t = uli_msword(m) + 1;

                    // We want two additional leading zero limbs.
                    const L: size_t = n + 2;

                    // Resize temporary space as needed and initialize values that
                    // are static.
                    if (n !== old_n) {

                        // Values in [0, m], but stored with L limbs, i.e., at
                        // least two leading zero words.
                        uli_resize(mt, L);
                        uli_resize(xx, L);
                        uli_resize(one, L);
                        uli_resize(Rmodm, L);

                        // Values in [0, m], but stored with 2 * L limbs.
                        uli_resize(xt, 2 * L);
                        uli_resize(R2modm, 2 * L);
                        uli_resize(A[0], 2 * L);
                        uli_resize(A[1], 2 * L);

                        // one = 1.
                        uli_setzero(one);
                        one[0] = 0x1;

                        // Ignored in further computations.
                        uli_resize(q, L + 2);

                        old_n = n;
                    }

                    // Cache computations that only depend on m.
                    if (m !== old_m) {

                        // mt = m, but with two leading zero limbs.
                        uli_set(mt, m);

                        // Rmodm = R mod m using L limbs.
                        uli_setzero(q);
                        uli_setzero(Rmodm);
                        Rmodm[n] = 1;
                        uli_div_qr(q, Rmodm, m);

                        // R2modm = R^2 mod m using 2 * L limbs.
                        uli_setzero(q);
                        uli_setzero(R2modm);
                        R2modm[2 * n] = 1;
                        uli_div_qr(q, R2modm, m);

                        old_m = m;
                    }

                    // Cache computations that depend on m and x.
                    if (x !== old_x) {

                        // xt = Mont(x, R^2 mod m, m)
                        uli_set(xx, x);
                        mul_mont(xt, xx, R2modm, mt);

                        old_x = x;
                    }

                    // Alternating bit for twin view of A
                    let b: int32_t = 0;

                    // A = R mod m
                    uli_set(A[b], Rmodm);

                    for (let i: size_t = uli_msbit(e); i >= 0; i--) {

                        // A = Mont(A, A, m)
                        mul_mont(A[b ^ 1], A[b], A[b], mt);  b ^= 1;

                        // ith bit of e is 1
                        if (uli_getbit(e, i) === 1) {

                            // A = Mont(A, xt, m)
                            mul_mont(A[b ^ 1], A[b], xt, mt);  b ^= 1;
                        }
                    }

                    // A = Mont(A, 1, m)
                    mul_mont(A[b ^ 1], A[b], one, mt);  b ^= 1;

                    // Make sure that the output holds the result. We are
                    // guaranteed that A[b] < m, so this is safe.
                    uli_set(w, A[b]);
                };
            })();

        }

        import RandomSource = verificatum.base.RandomSource;
        import SLI = verificatum.arithm.li.SLI;
        import change_wordsize = verificatum.base.change_wordsize;
        import hexToByteArray = verificatum.base.hexToByteArray;
        import iszero = verificatum.arithm.uli.iszero;
        import li_add = verificatum.arithm.li.add;
        import li_cmp = verificatum.arithm.li.cmp;
        import li_div_qr = verificatum.arithm.li.div_qr;
        import li_egcd = verificatum.arithm.li.egcd;
        import li_equals = verificatum.arithm.li.equals;
        import li_hex = verificatum.arithm.li.hex;
        import li_iszero = verificatum.arithm.li.iszero;
        import li_legendre = verificatum.arithm.li.legendre;
        import li_modpow_mont = verificatum.arithm.li.modpow_mont;
        import li_modsqrt = verificatum.arithm.li.modsqrt;
        import li_mul = verificatum.arithm.li.mul;
        import li_normalize = verificatum.arithm.li.normalize;
        import li_set = verificatum.arithm.li.set;
        import li_square = verificatum.arithm.li.square;
        import li_sub = verificatum.arithm.li.sub;
        import modpowprod = verificatum.arithm.uli.modpowprod;
        import modpowprodtab = verificatum.arithm.uli.modpowprodtab;
        import normalize = verificatum.arithm.uli.normalize;
        import ofType = verificatum.base.ofType;
        import uli_WORDSIZE = verificatum.arithm.uli.WORDSIZE;
        import uli_cmp = verificatum.arithm.uli.cmp;
        import uli_copyarray = verificatum.arithm.uli.copyarray;
        import uli_getbit = verificatum.arithm.uli.getbit;
        import uli_hex = verificatum.arithm.uli.hex;
        import uli_iszero = verificatum.arithm.uli.iszero;
        import uli_modpow = verificatum.arithm.uli.modpow;
        import uli_modpow_naive = verificatum.arithm.uli.modpow_naive;
        import uli_msbit = verificatum.arithm.uli.msbit;
        import uli_newarray = verificatum.arithm.uli.newarray;
        import uli_normalize = verificatum.arithm.uli.normalize;
        import uli_resize = verificatum.arithm.uli.resize;
        import uli_set = verificatum.arithm.uli.set;
        import uli_shiftleft = verificatum.arithm.uli.shiftleft;
        import uli_shiftright = verificatum.arithm.uli.shiftright;
        import uli_slice = verificatum.arithm.uli.slice;

        export enum ModPowAlg {
            naive = 0,
            window = 1,
            montgomery = 2
        }

        /**
         * Class for large immutable integers that handles memory
         * allocation and provided utility functions.
         */
        export class LI extends SLI {

            /**
             * Creates a zero with the given number of limbs internally.
             *
             * @param limbs - Number of limbs.
             */
            constructor(limbs: size_t);

            /**
             * Creates an integer from its hexadecimal string representation.
             *
             * @param hexString - Hexadecimal string which may begin with "-"
             * to indicate that the integer is negative.
             */
            constructor(hexString: string);

            /**
             * Creates an integer from a sign and array of words. A zero array
             * of {@link WORDSIZE}-bit words throws an error if the sign is
             * incorrect relative the words.
             *
             * @param sign - Sign of the integer.
             * @param value - Array of words representing a non-negative
             * integer.
             */
            constructor(sign: sign_t, value: uli_t);

            /**
             * Creates a non-negative integer from a raw array of 8-bit bytes.
             *
             * @param rawbytes - Array of words representing an non-negative
             * integer.
             */
            constructor(rawbytes: uli_t);

            /**
             * Samples a random integer of the given nominal bit length, i.e.,
             * additional leading bits may be zero by chance.
             *
             * @param bitLength - Number of bits in the sampled integer..
             * @param randomSource - Source of randomness.
             */
            constructor(bitLength: size_t, randomSource: RandomSource);

            /* eslint-disable @typescript-eslint/no-explicit-any */
            /* eslint-disable sonarjs/cognitive-complexity */
            constructor(...args: any[]) {
                super();

                let sign: sign_t;
                let value: uli_t;

                if (args.length == 1) {

                    // Array of words.
                    if (ofType(args[0], "array") &&
                        typeof args[0][0] === "number") {

                        let bytes: uint8_t[] = <uint8_t[]>args[0];
                        bytes = [...bytes].reverse();
                        value = <uli_t><any[]>change_wordsize(bytes, 8, uli_WORDSIZE);

                        if (uli_iszero(value)) {
                            sign = 0;
                        } else {
                            sign = 1;
                        }

                    // Number.
                    } else if (ofType(args[0], "number")) {

                        const limbs: size_t = <size_t>args[0];

                        sign = 0;
                        value = uli_newarray(limbs);

                    // Hexadecimal string.
                    } else if (ofType(args[0], "string")) {

                        let hex: string = <string>args[0];
                        let i: size_t = 0;

                        // Set the sign.
                        if (hex[i] === "-") {
                            sign = -1;
                            i++;
                        } else {
                            sign = 1;
                        }

                        // Ignore leading zeros.
                        while (i < hex.length && hex[i] === "0") {
                            i++;
                        }

                        // Set to zero or shorten input as appropriate.
                        if (i === hex.length) {
                            sign = 0;
                            hex = "00";
                        } else {
                            hex = hex.substring(i, hex.length);
                        }

                        // Convert to an array of bytes in reverse order and of proper
                        // wordsize.
                        const array: uint8_t[] = hexToByteArray(hex).reverse();
                        value = <uli_t><any[]>change_wordsize(array, 8, uli_WORDSIZE);

                    } else {
                        throw Error("Invalid parameters!");
                    }

                // Sign and value, or length and random source.
                } else if (args.length == 2) {

                    // Sign and value as an array of words.
                    if (ofType(args[1], "array")) {

                        sign = <sign_t>args[0];
                        value = <uli_t>args[1];

                        if (Math.abs(sign) > 1) {
                            throw Error("Illegal sign!");
                        }

                        for (let i: size_t = 0; i < value.length; i++) {
                            if ((value[i] & 0xfffffff) !== value[i]) {
                                throw Error("Illegal word at index " + i + "!");
                            }
                        }
                        if (uli_iszero(value) && sign !== 0) {
                            throw Error("A zero array must have a zero sign!");
                        } else if (!uli_iszero(value) && sign === 0) {
                            throw Error("A non-zero array must have a non-zero sign!");
                        }

                        // Bit length and RandomSource.
                    } else {
                        const bitLength: size_t = <size_t>args[0];
                        const randomSource: RandomSource = <RandomSource>args[1];

                        if (bitLength < 1) {
                            throw Error("Attempting to sample non-positive "
                                        + "bit length!");
                        }

                        const byteLength: size_t = LI.byteLengthRandom(bitLength);
                        const topZeros: size_t = (8 - bitLength % 8) % 8;

                        const data: uint8_t[] = randomSource.getBytes(byteLength);

                        data[0] &= 0xFF >>> topZeros;
                        const reversed: uint8_t[] = data.reverse();

                        value =
                            <uli_t><any[]>change_wordsize(reversed, 8, uli_WORDSIZE);

                        if (uli_iszero(value)) {
                            sign = 0;
                        } else {
                            sign = 1;
                        }
                    }
                } else {
                    throw Error("Wrong number of parameters! (" +
                                args.length + " instead of 1 or 2)");
                }
                this.sign = sign;
                this.value = value;
                this.length = this.value.length;
            }
            /* eslint-enable sonarjs/cognitive-complexity */
            /* eslint-enable @typescript-eslint/no-explicit-any */

            /**
             * Compares this integer with the input.
             *
             * @param other - Other integer.
             * @returns -1, 0, or 1 depending on if this integer is smaller than,
             * equal to, or greater than the input.
             */
            public cmp(other: LI): sign_t {
                return li_cmp(this, other);
            }

            /**
             * Checks if this integer is equal to the input.
             *
             * @param other - Other integer.
             * @returns true if and only if this integer equals the input.
             */
            equals(other: LI): boolean {
                return li_equals(this, other);
            }

            /**
             * Checks if this integer is zero.
             * @returns true or false depending on if this is zero or not.
             */
            iszero(): boolean {
                return li_iszero(this);
            }

            /**
             * Bit length of this integer.
             * @returns Bit length of this integer.
             */
            bitLength(): size_t {
                return uli_msbit(this.value) + 1;
            }

            /**
             * Returns 1 or 0 depending on if the given bit is set or
             * not.
             *
             * @param index - Position of bit.
             * @returns 1 or 0 depending on if the given bit is set or not.
             */
            getBit(index: size_t): word_t {
                return uli_getbit(this.value, index);
            }

            /**
             * Returns the absolute value of this integer.
             * @returns Absolute value of this integer.
             */
            abs(): LI {
                return new LI(1, uli_copyarray(this.value));
            }

            /**
             * Shifts this integer to the left.
             *
             * @param offset - Bit positions to shift.
             * @returns This integer shifted the given number of bits to the left.
             */
            shiftLeft(offset: size_t): LI {
                const len: size_t =
                      this.length
                      + Math.floor((offset + uli_WORDSIZE - 1) / uli_WORDSIZE);
                const value: uli_t = uli_copyarray(this.value);
                uli_resize(value, len);
                uli_shiftleft(value, offset);
                return new LI(this.sign, value);
            }

            /**
             * Shifts this integer to the right.
             *
             * @param offset - Bit positions to shift.
             * @returns This integer shifted the given number of bits to the right.
             */
            shiftRight(offset: size_t): LI {
                const value: uli_t = uli_copyarray(this.value);
                uli_shiftright(value, offset);
                uli_normalize(value);
                let sign: sign_t = this.sign;
                if (uli_iszero(value)) {
                    sign = 0;
                }
                return new LI(sign, value);
            }

            /**
             * Returns negative of this integer.
             * @returns -this.
             */
            neg(): LI {
                return new LI(<sign_t>(-this.sign), uli_copyarray(this.value));
            }

            /**
             * Computes sum of this integer and the input.
             *
             * @param term - Other integer.
             * @returns this + term.
             */
            add(term: LI): LI {
                const len: size_t = Math.max(this.length, term.length) + 1;
                const res: LI = new LI(len);
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
            sub(term: LI): LI {
                const len: size_t = Math.max(this.length, term.length) + 1;
                const res: LI = new LI(len);
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
            mul(factor: LI): LI {
                const len: size_t = this.length + factor.length;
                const res: LI = new LI(len);
                li_mul(res, this, factor);
                li_normalize(res);
                return res;
            }

            /**
             * Computes square of this integer.
             * @returns this * this.
             */
            square(): LI {
                const len: size_t = 2 * this.length;
                const res: LI = new LI(len);
                li_square(res, this);
                li_normalize(res);
                return res;
            }

            /**
             * Returns [q, r] such that q = this / divisor + r with
             * this / divisor and r rounded with sign, in particular, if divisor
             * is positive, then 0 <= r < divisor.
             *
             * @param divisor - Divisor.
             * @returns Quotient and divisor.
             */
            divQR(divisor: LI): [LI, LI] {

                if (divisor.sign === 0) {
                    throw Error("Attempt to divide by zero!");
                }

                const dlen: size_t = divisor.length;

                // Copy this with extra space, since li_div_qr is destructive.
                const remainder: LI = new LI(Math.max(this.length, dlen) + 2);
                li_set(remainder, this);

                // Make room for quotient.
                const qlen: size_t = Math.max(remainder.length - dlen, dlen, 0) + 1;
                const quotient: LI = new LI(qlen);

                // Compute result.
                li_div_qr(quotient, remainder, divisor);
                li_normalize(quotient);
                li_normalize(remainder);

                return [quotient, remainder];
            }

            /**
             * Computes integer quotient of this integer and the
             * input.
             *
             * @param divisor - Integer divisor.
             * @returns this / divisor for positive integers with rounding
             * according to signs.
             */
            div(divisor: LI): LI {
                return this.divQR(divisor)[0];
            }

            /**
             * Computes integer remainder of this integer divided by
             * the input as a value in [0, modulus - 1].
             *
             * @param modulus - Divisor.
             * @returns Integer remainder.
             */
            mod(modulus: LI): LI {
                return this.divQR(modulus)[1];
            }

            /**
             * Computes modular sum when this integer and the first
             * input are non-negative and the last input is positive.
             *
             * @param term - Other integer.
             * @param modulus - Modulus.
             * @returns (this + term) mod modulus.
             */
            modAdd(term: LI, modulus: LI): LI {
                return this.add(term).mod(modulus);
            }

            /**
             * Computes modular difference when this integer and the
             * first input are non-negative and the last input is positive.
             *
             * @param term - Other integer.
             * @param modulus - Modulus.
             * @returns (this - term) mod modulus.
             */
            modSub(term: LI, modulus: LI): LI {
                return this.sub(term).mod(modulus);
            }

            /**
             * Computes modular product when this integer and the first
             * input are non-negative and the last input is positive.
             *
             * @param term - Other integer.
             * @param modulus - Modulus.
             * @returns (this * term) mod modulus.
             */
            modMul(factor: LI, modulus: LI): LI {
                return this.mul(factor).mod(modulus);
            }

            /**
             * Computes modular power of this integer raised to the exponent
             * modulo the given modulus. This integer must be non-negative.
             *
             * @param exponent - Non-negative exponent.
             * @param modulus - Integer greater than one.
             * @param alg - Algorithm used. Montgomery exponentiation throws
             * an error if the modulus is even.
             * @returns this ^ exponent mod modulus for positive integers.
             */
            modPow(exponent: LI, modulus: LI, alg: ModPowAlg = ModPowAlg.window): LI {

                if (modulus.sign <= 0) {
                    throw Error("Non-positive modulus! (" +
                                modulus.toHexString() + ")");
                }
                // modulus > 0

                if (this.sign < 0) {
                    throw Error("Negative basis! (" + this.toHexString() + ")");
                }
                // modulus > 0 and 0 <= this

                if (exponent.sign < 0) {
                    throw Error("Negative exponent! (" + exponent.toHexString() + ")");
                }
                // modulus > 0 and 0 <= this and exponent >= 0

                const w: uli_t = uli_newarray(modulus.value.length);
                let b: uli_t = this.value;
                const e: uli_t = exponent.value;
                const m: uli_t = modulus.value;
                // m > 0, 0 <= b, and e >= 0

                // 0 <= b < m and b has the same number of limbs as m.
                if (uli_cmp(b, m) >= 0) {
                    b = this.divQR(modulus)[1].value;
                    uli_resize(b, m.length);
                } else if (b.length < m.length) {
                    b = uli_newarray(m.length);
                    uli_set(b, this.value);
                }
                // m > 0, 0 <= b < m, and e >= 0

                // b^e mod 1 = 0 for every 0 <= b < m and e >= 0.
                if (modulus.equals(LI.ONE)) {
                    return LI.ZERO;
                }
                // m > 1, 0 <= b < m, and e >= 0

                // b^0 mod m = 1 if b >= 0 and m > 0.
                if (exponent.sign === 0) {
                    return LI.ONE;
                }
                // m > 1, 0 <= b < m, and e > 0

                // 0^e mod m = 0 if e > 0 and m > 1.
                if (uli_iszero(b)) {
                    return LI.ZERO;
                }
                // m > 1, 0 < b < m, and e > 0

                switch (alg) {

                // Square and multiply.
                case ModPowAlg.naive:

                    uli_modpow_naive(w, b, e, m);
                    break;

                // Windowing exponentiation.
                case ModPowAlg.window:

                    uli_modpow(w, b, e, m);
                    break;

                // Montgomery exponentiation requires an odd modulus.
                case ModPowAlg.montgomery:

                    if ((m[0] & 0x1) == 1) {
                        li_modpow_mont(w, b, e, m);
                    } else {
                        throw Error("Montgomery exponentiation does not work" +
                                    "for even moduli! (m = 0x" + uli_hex(m) + ")");
                    }
                    break;
                }

                if (uli_iszero(w)) {
                    return LI.ZERO;
                } else {
                    uli_normalize(w);
                    return new LI(1, w);
                }
            }

            /**
             * Computes extended greatest common divisor.
             *
             * @param other - Other integer.
             * @returns Array [a, b, v] such that a * this + b * other = v and v is
             * the greatest common divisor of this and other.
             */
            egcd(other: LI): [LI, LI, LI] {
                const len: size_t = Math.max(this.length, other.length) + 1;

                const a: LI = new LI(len);
                const b: LI = new LI(len);
                const v: LI = new LI(len);

                li_egcd(a, b, v, this, other);

                li_normalize(a);
                li_normalize(b);
                li_normalize(v);

                return [a, b, v];
            }

            /**
             * Computes modular inverse of this integer modulo the
             * input prime.
             *
             * @param prime - Odd positive prime integer.
             * @returns Integer x such that x * this = 1 mod prime, where 0
             * <= x < prime.
             */
            modInv(prime: LI): LI {

                // There is no need to optimize this by using a stripped extended
                // greatest common divisor algorithm.
                const a: LI = this.egcd(prime)[0];
                if (a.sign < 0) {
                    return prime.add(a);
                } else {
                    return a;
                }
            }

            /**
             * Returns (this | prime), i.e., the Legendre symbol of
             * this modulo prime for an odd prime prime. (This is essentially a
             * GCD algorithm that keeps track of the symbol.)
             *
             * @param prime - An odd prime modulus.
             * @returns Legendre symbol of this instance modulo the input.
             */
            legendre(prime: LI): sign_t {
                return li_legendre(this.mod(prime), prime);
            }

            /**
             * Returns a square root of this integer modulo an odd
             * prime, where this integer is a quadratic residue modulo the prime.
             *
             * @param prime - An odd prime modulus.
             * @returns Square root of this integer modulo the input odd prime.
             */
            modSqrt(prime: LI): LI {
                const res: LI = new LI(prime.length);
                li_modsqrt(res, this, prime);
                li_normalize(res);
                return res;
            }

            /**
             * Returns the bits between the start index and end index
             * as an integer.
             *
             * @param start - Inclusive start index.
             * @param end - Exclusive end index.
             * @returns Bits between the start index and end index as an integer.
             */
            slice(start: size_t, end: size_t): LI {
                const value: uli_t = uli_slice(this.value, start, end);
                let sign: sign_t = this.sign;
                if (uli_iszero(value)) {
                    sign = 0;
                }
                return new LI(sign, value);
            }

            /**
             * Computes a byte array that represents the absolute
             * value of this integer. The parameter can be used to truncate the
             * most significant bytes or to ensure that a given number of bytes
             * are used, effectively padding the representation with zeros.
             *
             * @param byteSize - Number of bytes used in output.
             * @returns Resulting array.
             */
            toByteArray(byteSize?: size_t): uint8_t[] {
                const MASK_TOP_8: word_t = 0x80;

                // Convert the representation with uli_WORDSIZE words into a
                // representation with 8-bit words.
                /* eslint-disable @typescript-eslint/no-explicit-any */
                const dense: uint8_t[] =
                      <uint8_t[]><any[]>change_wordsize(this.value, uli_WORDSIZE, 8);
                /* eslint-enable @typescript-eslint/no-explicit-any */

                if (typeof byteSize === "undefined") {

                    // Remove or add as many leading bytes as needed.
                    uli_normalize(dense, MASK_TOP_8);
                } else {

                    // Reduce/increase the number of bytes as requested.
                    uli_resize(dense, byteSize);
                }
                return dense.reverse();
            }

            /**
             * Computes a hexadecimal representation of this integer.
             * @returns Hexadecimal representation of this integer.
             */
            toHexString(): string {
                return li_hex(this);
            }

            /**
             * Returns the number of bytes needed to generate the
             * given number of bits.
             *
             * @param bitLength - Number of bits.
             * @returns Number of bytes needed.
             */
            static byteLengthRandom(bitLength: size_t): size_t {
                return Math.floor((bitLength + 7) / 8);
            }

            /**
             * Representation of zero.
             */
            static ZERO: LI = new LI(0, [0]);

            /**
             * Representation of one.
             */
            static ONE: LI = new LI(1, [1]);

            /**
             * Representation of two.
             */
            static TWO: LI = new LI(1, [2]);
        }

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
        export class ModPowProd {

            static maxWidth: size_t = 16;

            noBases: size_t;
            width: size_t;
            t: uli_t[][];
            modulus: LI;

            /**
             * Creates a table for the given bases, modulus, and width.
             *
             * @param bases - List of bases.
             * @param modulus - Modulus.
             * @param width - Width of each subtable.
             */
            constructor(bases: LI[], modulus: LI, width: size_t) {

                const b: uli_t[] = [];
                for (let i: size_t = 0; i < bases.length; i++) {
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
            modPowProd(exponents: LI[]): LI {

                if (exponents.length !== this.noBases) {
                    throw Error("Wrong number of exponents! (" +
                                exponents.length + " != " + this.noBases + ")");
                }

                const e: uli_t[] = [];
                for (let i: size_t = 0; i < exponents.length; i++) {
                    e[i] = exponents[i].value;
                }

                const res: LI = new LI(this.modulus.length);
                modpowprod(res.value, this.t, e, this.modulus.value, this.width);

                if (iszero(res.value)) {
                    res.sign = 0;
                } else {
                    res.sign = 1;
                }
                normalize(res.value);
                return res;
            }
        }

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
        export class FixModPow {

            sliceSize: size_t;
            mpp: ModPowProd;

            constructor(basis: LI,
                        modulus: LI,
                        size: size_t,
                        width?: size_t) {

                const bitLength: size_t = modulus.bitLength();

                if (typeof width === "undefined") {
                    width = FixModPow.optimalWidth(bitLength, size);
                }

                // Determine the number of bits associated with each bases.
                this.sliceSize = Math.floor((bitLength + width - 1) / width);

                // Create radix element.
                const powerBasis: LI =
                      LI.ONE.shiftLeft(this.sliceSize);

                // Create generators.
                const bases: LI[] = [];
                bases[0] = basis;
                for (let i: size_t = 1; i < width; i++) {
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
            slice(exponent: LI): LI[] {

                const exponents: LI[] = [];

                const bitLength: size_t = exponent.bitLength();
                let offset: size_t = 0;
                let i: size_t = 0;

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
            modPow(exponent: LI): LI {
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
            static optimalWidth(bitLength: size_t, size: size_t): size_t {

                let width: size_t = 2;
                let cost: number = 1.5 * bitLength;
                let oldCost: number;
                do {

                    oldCost = cost;

                    // Amortized cost for table.
                    const t: float64_t = ((1 << width) - width + bitLength) / size;

                    // Cost for multiplication.
                    const m: float64_t = bitLength / width;

                    cost = t + m;

                    width++;

                } while (width <= 16 && cost < oldCost);

                // We reduce the theoretical value by one to account for the
                // overhead.
                return width - 1;
            }
        }

    }
}

