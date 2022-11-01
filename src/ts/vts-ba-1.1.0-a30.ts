
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

// TypeScript is in flux, so there may be a more stringent way to
// define types now or in the near future, but this is robust for now.

/**
 * Subset of non-negative integers.
 */
export type S1 = 1;

/**
 * Subset of non-negative integers.
 */
export type S2 = S1 | 2;

/**
 * Subset of non-negative integers.
 */
export type S3 = S2 | 3;

/**
 * Subset of non-negative integers.
 */
export type S4 = S3 | 4;

/**
 * Subset of non-negative integers.
 */
export type S5 = S4 | 5;

/**
 * Subset of non-negative integers.
 */
export type S6 = S5 | 6;

/**
 * Subset of non-negative integers.
 */
export type S7 = S6 | 7;

/**
 * Subset of non-negative integers.
 */
export type S8 = S7 | 8;

/**
 * Subset of non-negative integers.
 */
export type S9 = S8 | 9;

/**
 * Subset of non-negative integers.
 */
export type S10 = S9 | 10;

/**
 * Subset of non-negative integers.
 */
export type S11 = S10 | 11;

/**
 * Subset of non-negative integers.
 */
export type S12 = S11 | 12;

/**
 * Subset of non-negative integers.
 */
export type S13 = S12 | 13;

/**
 * Subset of non-negative integers.
 */
export type S14 = S13 | 14;

/**
 * Subset of non-negative integers.
 */
export type S15 = S14 | 15;

/**
 * Subset of non-negative integers.
 */
export type S16 = S15 | 16;

/**
 * Subset of non-negative integers.
 */
export type S17 = S16 | 17;

/**
 * Subset of non-negative integers.
 */
export type S18 = S17 | 18;

/**
 * Subset of non-negative integers.
 */
export type S19 = S18 | 19;

/**
 * Subset of non-negative integers.
 */
export type S20 = S19 | 20;

/**
 * Subset of non-negative integers.
 */
export type S21 = S20 | 21;

/**
 * Subset of non-negative integers.
 */
export type S22 = S21 | 22;

/**
 * Subset of non-negative integers.
 */
export type S23 = S22 | 23;

/**
 * Subset of non-negative integers.
 */
export type S24 = S23 | 24;

/**
 * Subset of non-negative integers.
 */
export type S25 = S24 | 25;

/**
 * Subset of non-negative integers.
 */
export type S26 = S25 | 26;

/**
 * Subset of non-negative integers.
 */
export type S27 = S26 | 27;

/**
 * Subset of non-negative integers.
 */
export type S28 = S27 | 28;

/**
 * Subset of non-negative integers.
 */
export type S29 = S28 | 29;

/**
 * Subset of non-negative integers.
 */
export type S30 = S29 | 30;

/**
 * Subset of non-negative integers.
 */
export type S31 = S30 | 31;

/**
 * Subset of non-negative integers.
 */
export type S32 = S31 | 32;

/**
 * Subset of non-negative integers.
 */
export type S33 = S32 | 33;

/**
 * Subset of non-negative integers.
 */
export type S34 = S33 | 34;

/**
 * Subset of non-negative integers.
 */
export type S35 = S34 | 35;

/**
 * Subset of non-negative integers.
 */
export type S36 = S35 | 36;

/**
 * Subset of non-negative integers.
 */
export type S37 = S36 | 37;

/**
 * Subset of non-negative integers.
 */
export type S38 = S37 | 38;

/**
 * Subset of non-negative integers.
 */
export type S39 = S38 | 39;

/**
 * Subset of non-negative integers.
 */
export type S40 = S39 | 40;

/**
 * Subset of non-negative integers.
 */
export type S41 = S40 | 41;

/**
 * Subset of non-negative integers.
 */
export type S42 = S41 | 42;

/**
 * Subset of non-negative integers.
 */
export type S43 = S42 | 43;

/**
 * Subset of non-negative integers.
 */
export type S44 = S43 | 44;

/**
 * Subset of non-negative integers.
 */
export type S45 = S44 | 45;

/**
 * Subset of non-negative integers.
 */
export type S46 = S45 | 46;

/**
 * Subset of non-negative integers.
 */
export type S47 = S46 | 47;

/**
 * Subset of non-negative integers.
 */
export type S48 = S47 | 48;

/**
 * Subset of non-negative integers.
 */
export type S49 = S48 | 49;

/**
 * Subset of non-negative integers.
 */
export type S50 = S49 | 50;

/**
 * Subset of non-negative integers.
 */
export type S51 = S50 | 51;

/**
 * Subset of non-negative integers.
 */
export type S52 = S51 | 52;

/**
 * Subset of non-negative integers.
 */
export type S53 = S52 | 53;

// ###############################################################
//
// Define brands for unsigned integer types in terms of the union set
// types.

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint1_brand { __ubrand__?: S1; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint2_brand { __ubrand__?: S2; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint3_brand { __ubrand__?: S3; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint4_brand { __ubrand__?: S4; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint5_brand { __ubrand__?: S5; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint6_brand { __ubrand__?: S6; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint7_brand { __ubrand__?: S7; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint8_brand { __ubrand__?: S8; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint9_brand { __ubrand__?: S9; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint10_brand { __ubrand__?: S10; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint11_brand { __ubrand__?: S11; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint12_brand { __ubrand__?: S12; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint13_brand { __ubrand__?: S13; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint14_brand { __ubrand__?: S14; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint15_brand { __ubrand__?: S15; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint16_brand { __ubrand__?: S16; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint17_brand { __ubrand__?: S17; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint18_brand { __ubrand__?: S18; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint19_brand { __ubrand__?: S19; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint20_brand { __ubrand__?: S20; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint21_brand { __ubrand__?: S21; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint22_brand { __ubrand__?: S22; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint23_brand { __ubrand__?: S23; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint24_brand { __ubrand__?: S24; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint25_brand { __ubrand__?: S25; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint26_brand { __ubrand__?: S26; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint27_brand { __ubrand__?: S27; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint28_brand { __ubrand__?: S28; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint29_brand { __ubrand__?: S29; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint30_brand { __ubrand__?: S30; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint31_brand { __ubrand__?: S31; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint32_brand { __ubrand__?: S32; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint33_brand { __ubrand__?: S33; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint34_brand { __ubrand__?: S34; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint35_brand { __ubrand__?: S35; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint36_brand { __ubrand__?: S36; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint37_brand { __ubrand__?: S37; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint38_brand { __ubrand__?: S38; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint39_brand { __ubrand__?: S39; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint40_brand { __ubrand__?: S40; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint41_brand { __ubrand__?: S41; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint42_brand { __ubrand__?: S42; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint43_brand { __ubrand__?: S43; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint44_brand { __ubrand__?: S44; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint45_brand { __ubrand__?: S45; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint46_brand { __ubrand__?: S46; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint47_brand { __ubrand__?: S47; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint48_brand { __ubrand__?: S48; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint49_brand { __ubrand__?: S49; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint50_brand { __ubrand__?: S50; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint51_brand { __ubrand__?: S51; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint52_brand { __ubrand__?: S52; }

/**
 * Brand for construction of branded unsigned integer type.
 */
export interface uint53_brand { __ubrand__?: S53; }

// ###############################################################
//
// Define brands for integer types in terms of the union set types.

/**
 * Brand for construction of branded signed integer type.
 */
export interface int2_brand { __ubrand__?: S2; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int3_brand { __ubrand__?: S3; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int4_brand { __ubrand__?: S4; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int5_brand { __ubrand__?: S5; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int6_brand { __ubrand__?: S6; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int7_brand { __ubrand__?: S7; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int8_brand { __ibrand__?: S8; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int9_brand { __ibrand__?: S9; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int10_brand { __ibrand__?: S10; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int11_brand { __ibrand__?: S11; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int12_brand { __ibrand__?: S12; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int13_brand { __ibrand__?: S13; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int14_brand { __ibrand__?: S14; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int15_brand { __ibrand__?: S15; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int16_brand { __ibrand__?: S16; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int17_brand { __ibrand__?: S17; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int18_brand { __ibrand__?: S18; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int19_brand { __ibrand__?: S19; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int20_brand { __ibrand__?: S20; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int21_brand { __ibrand__?: S21; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int22_brand { __ibrand__?: S22; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int23_brand { __ibrand__?: S23; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int24_brand { __ibrand__?: S24; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int25_brand { __ibrand__?: S25; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int26_brand { __ibrand__?: S26; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int27_brand { __ibrand__?: S27; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int28_brand { __ibrand__?: S28; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int29_brand { __ibrand__?: S29; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int30_brand { __ibrand__?: S30; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int31_brand { __ibrand__?: S31; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int32_brand { __ibrand__?: S32; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int33_brand { __ibrand__?: S33; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int34_brand { __ibrand__?: S34; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int35_brand { __ibrand__?: S35; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int36_brand { __ibrand__?: S36; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int37_brand { __ibrand__?: S37; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int38_brand { __ibrand__?: S38; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int39_brand { __ibrand__?: S39; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int40_brand { __ibrand__?: S40; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int41_brand { __ibrand__?: S41; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int42_brand { __ibrand__?: S42; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int43_brand { __ibrand__?: S43; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int44_brand { __ibrand__?: S44; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int45_brand { __ibrand__?: S45; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int46_brand { __ibrand__?: S46; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int47_brand { __ibrand__?: S47; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int48_brand { __ibrand__?: S48; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int49_brand { __ibrand__?: S49; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int50_brand { __ibrand__?: S50; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int51_brand { __ibrand__?: S51; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int52_brand { __ibrand__?: S52; }

/**
 * Brand for construction of branded signed integer type.
 */
export interface int53_brand { __ibrand__?: S53; }

/* eslint-enable @typescript-eslint/member-delimiter-style */
/* eslint-enable @typescript-eslint/brace-style */

// Unsigned integers of different bit sizes which allow implicit
// casting upwards, since the brand types allow implicit casting
// upwards.

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint1_t = number & uint1_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint2_t = number & uint2_brand;

/**
 * Unsigned "branded" integer type which allows implicit upward cast.
 */
export type uint3_t = number & uint3_brand;

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
export type int2_t = number & int2_brand;

/**
 * Signed "branded" integer type which allows implicit upward cast.
 */
export type int3_t = number & int3_brand;

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
 * Pointer/index to memory cell in WASM engine.
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
 * Radix of a non-negative integer in [2,64].
 */
export type radix_t =
    2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 |
    30 | 32 | 34 | 36 | 38 | 40 | 42 | 44 | 46 | 48 | 50 | 52 | 54 | 56
    | 58 | 60 | 62 | 64;

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
export type word_t = uint30_t;

/**
 * Raw representation of large integer consisting of multiple
 * words. Whether it is an integer in two's complement or not is
 * determined by the context.
 */
export type uli_t = word_t[];

// This library remains exactly within the bit boundary in some
// cases. It is useful to type results correspondingly and force the
// programmer to actively typecast results if needed. This is the
// purpose of the following types.

/**
 * Word of large integer, plus one bit in size. This is instantiated
 * by an integer type during compilation.
 */
export type word_a1_t = uint31_t;

/**
 * Word of large integer, plus two bits in size. This is instantiated
 * by an integer type during compilation.
 */
export type word_a2_t = uint32_t;

/**
 * Half a word of a large integer. This is instantiated by an integer
 * type during compilation.
 */
export type half_t = uint15_t;

/**
 * Half a word of a large integer, plus one bit in size. This is
 * instantiated by an integer type during compilation.
 */
export type half_a1_t = uint16_t;
export namespace verificatum {

    export namespace base {

        export const version: string = "1.1.0";

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
             * Returns bytes from the underlying source of randomness.
             *
             * @param len - Number of bytes to generate.
             * @returns Array of random bytes.
             */
            protected abstract getRandomUint8Array(len: size_t): Uint8Array;

            /**
             * Generates the given non-negative number of random bytes.
             *
             * @param len - Number of bytes to generate.
             */
            getBytes(len: size_t): uint8_t[] {
                const uia: Uint8Array = this.getRandomUint8Array(len);
                const a: int32_t[] = [];
                a.length = len;
                for (let i: size_t = 0; i < len; i++) {
                    a[i] = uia[i];
                }
                return a;
            }
        }

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
        export function divide(n: int32_t, d: int32_t): int32_t {
            return <int32_t>Math.floor(n / d);
        }

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
            import RandomSource = verificatum.base.RandomSource;
            import byteArrayToHex = verificatum.base.byteArrayToHex;
            import hexToArrayBuffer = verificatum.base.hexToArrayBuffer;
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
            export const WORDSIZE: size_t = 30;

            /**
             * The value 2^WORDSIZE.
             */
            export const TWO_POW_WORDSIZE: size_t = 0x40000000;

            /**
             * The word 2^WORDSIZE - 1, i.e., the all-one bit mask.
             */
            export const MASK_ALL: size_t = 0x3fffffff;

            // Size threshold for using Karatsuba in multiplication.
            const KARATSUBA_MUL_THRESHOLD: size_t = 30;

            // Size threshold for using Karatsuba in squaring.
            const KARATSUBA_SQR_THRESHOLD: size_t = 35;

            // Threshold for relative difference in size for using Karatsuba in
            // multiplication.
            const KARATSUBA_RELATIVE: float64_t = 0.8;

            /**
             * Indicates if WebAssembly is enabled or not.
             */
            export const wasm: boolean = true;

            /**
             * Maximal number of limbs in an uli_t.
             */
            export const MAX_LIMBS: size_t = 3500;

            /**
             * Maximum number of bits in an uli_t.
             */
            export const MAX_BITS: size_t = MAX_LIMBS * 30;

            // Enabled WASM code starts here.

            /**
             * Byte offset at which the register is allocated.
             */
            const intOffset0: size_t = 0;

            /**
             * Byte offset at which the register is allocated.
             */
            const intOffset1: size_t = intOffset0 + 2 * MAX_LIMBS;

            /**
             * Byte offset at which the register is allocated.
             */
            const intOffset2: size_t = intOffset1 + MAX_LIMBS;

            /**
             * First register (twice the length of the others).
             */
            let V0: Int32Array;

            /**
             * Second register.
             */
            let V1: Int32Array;

            /**
             * Third register.
             */
            let V2: Int32Array;

            /**
             * Type of muladd_loop() in C from WebAssembly/TypeScript.
             */
            type mal_type =
                (byteOffsetA: int32_t,
                 byteOffsetB: int32_t,
                 start: int32_t,
                 end: int32_t,
                 Y: int32_t,
                 i: int32_t,
                 c: int32_t) => int32_t;
            type mml_type =
                (byteOffsetA: int32_t,
                 byteOffsetB: int32_t,
                 byteOffsetC: int32_t,
                 len: int32_t,
                 xi: int32_t,
                 w: int32_t,
                 yw: int32_t,
                 i: int32_t) => void;

            type do_type = () => ptr_t;

            /**
             * muladd_loop() see description below.
             */
            export let muladd_loop: mal_type;

            /**
             * mul_mont_loop() see description below.
             */
            export let mul_mont_loop: mml_type;

            /**
             * Stores the default compiled implementation of the muladd_loop() as
             * a hexadecimal string.
             */
            const default_wasm: string = "0061736d01000000011e0460000060077f7f7f7f7f7f7f017f60087f7f7f7f7f7f7f7f006000017f0305040001020305030100020632087f0141c0bd070b7f004180080b7f004180080b7f0041c0bd030b7f004180080b7f0041c0bd070b7f0041000b7f0041010b07aa010c066d656d6f72790200115f5f7761736d5f63616c6c5f63746f727300000b6d756c6164645f6c6f6f700001046461746103010d6d756c5f6d6f6e745f6c6f6f7000020b646174615f6f666673657400030c5f5f64736f5f68616e646c6503020a5f5f646174615f656e6403030d5f5f676c6f62616c5f6261736503040b5f5f686561705f6261736503050d5f5f6d656d6f72795f6261736503060c5f5f7461626c655f6261736503070afb030402000b930101027e2006ad421e8621070240200220034e0d0020014102744180888080006a220120034102746a2106200041027420054102746a200241027422036a4180888080006a2102200120036a21032004ad2108034020022007421e8820023502007c200335020020087e7c2207a741ffffffff0371360200200241046a2102200341046a22032006490d000b0b2007421e88a70bd70204017f027e027f017e200041027420074102746a4180888080006a210802400240200341014e0d00420021090c010b200820014102744180888080006a3502002004ad220a7e2008280200220bad7c20024102744180888080006a220c350200200b20056c200620046c6a41ffffffff0371ad220d7e7c2209a741ffffffff03713602002009421e882109024020034101470d00200841046a21080c010b200c20034102746a2105200741027420004102746a41046a2106200141027441046a2101200241027441046a210341808880800021080340200820066a2204200920043502007c200820016a350200200a7e7c200820036a350200200d7e7c2209a741ffffffff03713602002009421e882109200841046a220820036a2005490d000b200741027420004102746a20086a41046a21080b2008200920083502007c2209421e883e020420082009a741ffffffff03713602000b08004180888080000b0058046e616d65013d0400115f5f7761736d5f63616c6c5f63746f7273010b6d756c6164645f6c6f6f70020d6d756c5f6d6f6e745f6c6f6f70030b646174615f6f6666736574071201000f5f5f737461636b5f706f696e74657200360970726f647563657273010c70726f6365737365642d6279010c5562756e747520636c616e670f31342e302e302d317562756e747531";

            /**
             * Initializes the WASM code to be callable from a WebAssembly instance.
             *
             * @param instance - Web Assembly instance.
             */
            function initialize_instance(instance: WebAssembly.Instance): void {
                // We avoid any asynchronous calls here by exploiting that the
                // assembly code is embedded in the code itself.

                /* eslint-disable @typescript-eslint/no-explicit-any */
                const e: any = instance.exports;
                /* eslint-enable @typescript-eslint/no-explicit-any */

                const memory: WebAssembly.Memory = <WebAssembly.Memory>e["memory"];
                const buffer: ArrayBuffer = memory.buffer;
                const data_offset: do_type = <do_type>e["data_offset"];

                // Initializes the global variables used by the WASM code.
                muladd_loop = <mal_type>e["muladd_loop"];
                mul_mont_loop = <mml_type>e["mul_mont_loop"];

                const byteOffset0: int32_t = data_offset();
                const byteOffset1: int32_t = byteOffset0 + 2 * MAX_LIMBS * 4;
                const byteOffset2: int32_t = byteOffset1 + MAX_LIMBS * 4;

                V0 = new Int32Array(buffer, byteOffset0, 2 * MAX_LIMBS);
                V1 = new Int32Array(buffer, byteOffset1, MAX_LIMBS);
                V2 = new Int32Array(buffer, byteOffset2, MAX_LIMBS);
            }

            /**
             * Initializes the WASM code.
             */
            export function initialize(): void;

            /**
             * Initializes the WASM code to be callable.
             *
             * @param wasmBuffer - ArrayBuffer containing the WASM code.
             */
            export function initialize(wasmBuffer?: ArrayBuffer): void {
                let buffer: ArrayBuffer;
                if (typeof wasmBuffer === "undefined") {
                    buffer = hexToArrayBuffer(default_wasm);
                } else {
                    buffer = <ArrayBuffer>wasmBuffer;
                }
                const module: WebAssembly.Module = new WebAssembly.Module(buffer);
                const instance: WebAssembly.Instance = new WebAssembly.Instance(module);
                initialize_instance(instance);
            }

            // Initialize with default WASM code if any.
            initialize();

            // Enabled WASM code ends here

            // Removed TypeScript code here.

            /**
             * Returns the sign extension mask of the given uli.
             *
             * @param x - Integer.
             */
            export function sign_mask(x: uli_t): word_t {
                return ((x[x.length - 1] & 0x20000000) == 0 ? 0 : 0x3fffffff);
            }

            /**
             * Sets x = 0.
             *
             * @param x - Variable.
             */
            export function setzero(x: uli_t): void {
                for (let i: size_t = 0; i < x.length; i++) {
                    x[i] = 0;
                }
            }

            /**
             * Allocates new variable initialized to zero with the given number of
             * limbs.
             *
             * @param limbs - Number of limbs.
             * @returns Zero with the given number of limbs.
             */
            export function new_uli(limbs: size_t): uli_t {
                const x: uli_t = [];
                x.length = limbs;
                setzero(x);
                return x;
            }

            /**
             * Sets w = x with sign extension.
             *
             * <p>
             *
             * ASSUMES: x has fewer words than w has limbs.
             *
             * @param w - Variable.
             * @param x - Signed integer.
             */
            export function set(w: uli_t, x: uli_t): void;

            /**
             * Sets w = x without sign extension, i.e., x is interpreted as the
             * least significant word of a non-negative integer.
             *
             * <p>
             *
             * ASSUMES: x has at least two limbs.
             *
             * @param w - Variable.
             * @param x - Value in [0,2^30 - 1].
             */
            export function set(w: uli_t, x: word_t): void;

            export function set(w: uli_t, x: uli_t | word_t): void {
                if (typeof x === "number") {
                    setzero(w);
                    let i: size_t = 0;
                    while (i < w.length && x != 0) {
                        w[i] = x & 0x3fffffff;
                        x >>= 30;
                        i++;
                    }
                } else {

                    const len: size_t = w.length < x.length ? w.length : x.length;
                    let i: size_t = 0;
                    while (i < len) {
                        w[i] = x[i];
                        i++;
                    }
                    const mask: word_t = ((x[x.length - 1] & 0x20000000) == 0 ? 0 : 0x3fffffff);
                    while (i < w.length) {
                        w[i] = mask;
                        i++;
                    }
                }
            }

            /**
             * Returns a copy of the input, possibly with additional limbs
             * with sign extension.
             *
             * @param x - Signed integer.
             * @param limbs - Number of limbs in the copy, if larger than the
             * number of limbs in x.
             * @returns Copy of x.
             */
            export function copy_uli(x: uli_t, limbs: size_t = 0): uli_t {

                const w: uli_t = new_uli(Math.max(x.length, limbs));
                set(w, x);
                return w;
            }

            /**
             * Returns the index of the most significant word in a non-negative
             * integer.
             *
             * @param x - Unsigned integer.
             * @returns Index of the most significant word in x.
             */
            export function msword(x: uli_t, mask: word_t = 0): size_t {

                for (let i: size_t = x.length - 1; i > 0; i--) {
                    if (x[i] !== mask) {
                        return i;
                    }
                }
                return 0;
            }

            /**
             * Resizes the variable to the smallest number of limbs that represent
             * the same integer in two's complement.
             *
             * @param x - Signed integer.
             */
            export function normalize(x: uli_t): void {

                if (x.length > 1) {
                    const mask: word_t = ((x[x.length - 1] & 0x20000000) == 0 ? 0 : 0x3fffffff);
                    const msw: size_t = msword(x, mask);
                    const mask_msb: word_t = mask & 0x20000000;
                    if ((x[msw] & 0x20000000) == mask_msb) {
                        x.length = msw + 1;
                    } else {
                        x.length = msw + 2;
                    }
                }
            }

            /**
             * Returns a normalized copy of x.
             *
             * @param x - Signed integer.
             */
            export function normalized(x: uli_t): uli_t {
                const y: uli_t = copy_uli(x);
                normalize(y);
                return y;
            }

            /**
             * Resizes the uli_t to the given number of limbs, either by
             * truncating or by adding leading words with sign extension.
             *
             * @param x - Signed integer.
             * @param limbs - New number of limbs.
             */
            export function resize(x: uli_t, limbs: size_t): void {

                const mask: word_t = ((x[x.length - 1] & 0x20000000) == 0 ? 0 : 0x3fffffff);
                let i: size_t = x.length;
                x.length = limbs;
                while (i < limbs) {
                    x[i] = mask;
                    i++;
                }
            }

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
            function change_wordsize(x: uint32_t[],
                                     xwordsize: size_t,
                                     ywordsize: size_t):
            uint32_t[] {

                const xmask_msb: int32_t = 1 << (xwordsize - 1);
                const ymask_all: int32_t = 0xffffffff >>> 32 - ywordsize;

                // Encodes bit position in x.
                let i: size_t = 0;
                let ib: size_t = 0;

                // Encodes bit position in y.
                let j: size_t = 0;
                let jb: size_t = 0;

                const ylen: size_t = Math.floor((xwordsize + ywordsize - 1) / ywordsize);

                // Array with new wordsize holding result.
                const y: int32_t[] = <int32_t[]><any[]>new_uli(ylen);

                while (i < x.length) {

                    // Insert as many bits as possible from x[i] into y[j].
                    y[j] |= ((x[i] >>> ib) << jb) & ymask_all;

                    // Number of inserted bits.
                    const bits: size_t = xwordsize - ib < ywordsize - jb ? xwordsize - ib : ywordsize - jb;

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
                const ymask_sign: int32_t =
                      (x[x.length - 1] & xmask_msb) != 0 ? ymask_all : 0;
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
            export function to_uint8_array(x: uli_t): uint8_t[] {
                /* eslint-disable @typescript-eslint/no-explicit-any */
                return <uint8_t[]><any[]>change_wordsize(x, 30, 8);
                /* eslint-enable @typescript-eslint/no-explicit-any */
            }

            /**
             * Returns a uli_t representation in two's complement of a normalized
             * uint8_t array in two's complement representation of an integer.
             *
             * @param x - Normalized uint8_t array two's complement representation
             * of an integer.
             * @returns Integer in two's complement representation.
             */
            export function from_uint8_array(x: uint8_t[]): uli_t {
                /* eslint-disable @typescript-eslint/no-explicit-any */
                return <uli_t><any[]>change_wordsize(x, 8, 30);
                /* eslint-enable @typescript-eslint/no-explicit-any */
            }

            /**
             * Returns a normalized non-negative integer with the given number of
             * nominal random bits.
             *
             * @param bitlen - Nominal number of bits.
             * @param rs - Source of randomness.
             */
            export function new_random(bitlen: size_t, rs: RandomSource): uli_t {
                const len: int32_t = Math.floor((bitlen + 7) / 8);
                const rem: int32_t = bitlen % 8;
                const bytes: uint8_t[] = rs.getBytes(len + 1);
                bytes[bytes.length - 1] = 0;
                bytes[bytes.length - 2] &= 0xff >>> ((8 - rem) % 8);
                const x: uli_t = from_uint8_array(bytes);
                normalize(x);
                return x;
            }

            /**
             * Sets w to a non-negative random integer with the given nominal
             * number of bits or as many there is room for in w as a non-negative
             * integer.
             *
             * @param w - Variable.
             * @param bitlen - Nominal number of bits.
             * @param rs - Source of randomness.
             */
            export function random(w: uli_t, bitlen: size_t, rs: RandomSource): void {
                const x: uli_t = new_random(bitlen, rs);
                set(w, x);
                w[w.length - 1] &= ~0x20000000;
            }

            /**
             * Sets x = 1.
             *
             * @param x - Variable.
             */
            export function setone(x: uli_t): void {
                setzero(x);
                x[0] = 1;
            }

            /**
             * Returns the index of the most significant bit of a non-negative
             * integer x.
             *
             * @param x - Unsigned integer.
             * @returns Index of the most significant bit of x.
             */
            export function msbit(x: uli_t): size_t {

                for (let i: size_t = x.length - 1; i >= 0; i--) {
                    if (x[i] !== 0) {

                        let msbit: size_t = (i + 1) * 30 - 1;

                        for (let mask: word_t = 0x20000000; mask > 0; mask >>>= 1) {
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
             * Returns the index of a the least significant set bit in a
             * non-negative integer or zero if it is zero.
             *
             * @param x - Unsigned integer.
             * @returns Index of a the least significant set bit in the input or
             * zero if the input is zero.
             */
            export function lsbit(x: uli_t): size_t {

                let i: size_t = 0;
                while (i < x.length && x[i] === 0) {
                    i++;
                }
                if (i == x.length) {
                    return 0;
                } else {
                    let j: size_t = 0;
                    while ((x[i] >>> j & 0x1) === 0) {
                        j++;
                    }
                    return i * 30 + j;
                }
            }

            /**
             * Returns 1 or 0 depending on if the bit at the index is set or
             * not. Accessing a bit outside the number of limbs returns the most
             * significant bit.
             *
             * @param x - Signed integer.
             * @param index - Index of bit.
             * @returns Bit at the given position.
             */
            export function getbit(x: uli_t, index: size_t): word_t {

                let i: size_t = Math.floor(index / 30);
                let b: size_t = index % 30;
                if (i >= x.length) {
                    i = x.length - 1;
                    b = 30 - 1;
                }
                return (x[i] >> b) & 0x1;
            }

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
            export function setbit(x: uli_t, index: size_t, bit: bin_t): void {

                const i: size_t = Math.floor(index / 30);
                const b: size_t = index % 30;
                if (bit == 1) {
                    x[i] |= 1 << b;
                } else if (bit == 0) {
                    x[i] &= (~(1 << b)) & 0x3fffffff;
                }
            }

            /**
             * Computes the Hamming weight of x.
             *
             * @param x - Value.
             * @returns Hamming weight of x.
             */
            export function weight_word(x: int32_t): uint5_t {
                x = x - ((x >>> 1) & 0x55555555);
                x = (x & 0x33333333) + ((x >>> 2) & 0x33333333);
                return ((x + (x >>> 4) & 0xf0f0f0f) * 0x1010101) >>> 24;
            }

            /**
             * Returns the number of bits set in a non-negative integer.
             *
             * @param x - Signed integer.
             * @returns Bits set in x.
             */
            export function weight(x: uli_t): int32_t {
                let count: size_t = 0;
                for (let i: size_t = 0; i < x.length; i++) {
                    count += weight_word(x[i]);
                }
                return count;
            }

            /**
             * Checks if all elements of the input are zero.
             *
             * @param x - Array of integers.
             * @returns True or false depending on if all elements are zero or not.
             */
            export function iszero(x: int32_t[], s: size_t = 0): boolean {

                for (let i: size_t = s; i < x.length; i++) {
                    if (x[i] !== 0) {
                        return false;
                    }
                }
                return true;
            }

            /**
             * Checks if the input is one.
             *
             * @param x - Signed integer.
             */
            export function isone(x: uli_t): boolean {

                if (x[0] != 1) {
                    return false;
                }
                for (let i: size_t = 1; i < x.length; i++) {
                    if (x[i] == 0) {
                        return false;
                    }
                }
                return true;
            }

            /**
             * Returns -1, 0, or 1 depending on if x < y, x == y, or
             * x > y, respectively.
             *
             * @param x - Unsigned integer.
             * @param y - Unsigned integer.
             * @returns Sign of x - y.
             */
            export function cmp(x: uli_t, y: uli_t): sign_t {

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
            export function shiftleft(x: uli_t, offset: size_t): void {

                if (offset <= 0) {
                    return;
                } else if (offset >= x.length * 30) {
                    setzero(x);
                    return;
                } else {
                    // Left shift words.
                    const wo: size_t = Math.floor(offset / 30);
                    if (wo > 0) {
                        let j: size_t = x.length - 1;
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
                    const bo: size_t = offset % 30;
                    const nbo: size_t = 30 - bo;

                    if (bo !== 0) {
                        for (let i: size_t = x.length - 1; i > 0; i--) {
                            const h: word_t = x[i] << bo & 0x3fffffff;
                            const l: word_t = x[i - 1] >>> nbo;
                            x[i] = h | l;
                        }
                        x[0] = x[0] << bo & 0x3fffffff;
                    }
                }
            }
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
            export function shiftright(x: uli_t, offset: size_t): void {

                if (offset <= 0) {
                    return;
                } else if (offset >= x.length * 30) {
                    setzero(x);
                    return;
                } else {
                    // Right shift words.
                    const wo: size_t = Math.floor(offset / 30);
                    if (wo > 0) {
                        let j: size_t = 0;
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
                    const bo: size_t = offset % 30;
                    const nbo: size_t = 30 - bo;

                    if (bo !== 0) {
                        for (let i: size_t = 0; i < x.length - 1; i++) {
                            const h: word_t = x[i] >>> bo;
                            const l: word_t = x[i + 1] << nbo & 0x3fffffff;
                            x[i] = h | l;
                        }
                        x[x.length - 1] = x[x.length - 1] >>> bo;
                    }
                }
            }
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
            export function add(w: uli_t, x: uli_t, y: uli_t, signed: bin_t = 1):
            void {

                let tmp: int32_t;
                let c: int32_t = 0;

                // Make sure that x is at least as long as y.
                if (x.length < y.length) {
                    const t: uli_t = x;
                    x = y;
                    y = t;
                }
                const xmask: word_t = signed * ((x[x.length - 1] & 0x20000000) == 0 ? 0 : 0x3fffffff);
                const ymask: word_t = signed * ((y[y.length - 1] & 0x20000000) == 0 ? 0 : 0x3fffffff);
                const wlen: size_t = w.length;
                const ylen: size_t = wlen < y.length ? wlen : y.length;
                const xlen: size_t = wlen < x.length ? wlen : x.length;

                // Add words of x and y with carry.
                let i: size_t = 0;
                while (i < ylen) {
                    tmp = x[i] + y[i] + c; w[i] = tmp & 0x3fffffff; c = tmp >> 30;
                    i++;
                }
                while (i < xlen) {
                    tmp = x[i] + ymask + c; w[i] = tmp & 0x3fffffff; c = tmp >> 30;
                    i++;
                }
                while (i < wlen) {
                    tmp = xmask + ymask + c; w[i] = tmp & 0x3fffffff; c = tmp >> 30;
                    i++;
                }
            }

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
            export function neg(w: uli_t, x: uli_t): void {

                let tmp: int32_t;

                let c: int32_t = 1;
                let i: size_t = 0;

                while (i < x.length) {
                    tmp = (x[i] ^ 0x3fffffff) + c; w[i] = tmp & 0x3fffffff; c = tmp >> 30;
                    i++;
                }
                while (i < w.length) {
                    tmp = 0x3fffffff + c; w[i] = tmp & 0x3fffffff; c = tmp >> 30;
                    i++;
                }
            }
            /* eslint-enable no-extra-parens */

            /**
             * Interprets x as an integer in two's complement representation,
             * replaces it by the absolute value in two's complement and returns
             * the sign of x.
             *
             * @param x - Signed integer.
             * @return Sign of x.
             */
            export function tosigned(x: uli_t): sign_t {

                let sign: sign_t;
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
            export function sub(w: uli_t, x: uli_t, y: uli_t): int32_t {

                let tmp: int32_t = 0;
                let c: int32_t = 0;

                // Subtract words of x and y with carry.
                let len: size_t = Math.min(w.length, x.length, y.length);

                let i: size_t = 0;
                while (i < len) {
                    tmp = x[i] - y[i] + c; w[i] = tmp & 0x3fffffff; c = tmp >> 30;
                    i++;
                }

                // Propagate carry along with one of x and y.
                if (x.length > y.length) {
                    len = w.length < x.length ? w.length : x.length;
                    while (i < len) {
                        tmp = x[i] + c; w[i] = tmp & 0x3fffffff; c = tmp >> 30;
                        i++;
                    }
                } else {
                    len = w.length < y.length ? w.length : y.length;
                    while (i < len) {
                        tmp = -y[i] + c; w[i] = tmp & 0x3fffffff; c = tmp >> 30;
                        i++;
                    }
                }

                // Propagate carry.
                while (i < w.length) {
                    tmp = w[i] + c; w[i] = tmp & 0x3fffffff; c = tmp >> 30;
                    i++;
                }
                return c;
            }

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
            export function square_naive(w: uli_t, x: uli_t): void {

                const n: size_t = msword(x) + 1;
                let c: int32_t;
                let sc: int32_t = 0;

                setzero(w);

                V0.set(w);
                V1.set(x);

                let i: size_t = 0;
                while (i < n) {

                    // This computes
                    // (c, w[2 * i]) = w[2 * i] + x[i] * x[i],
                    // where the result is interpreted as a pair of integers of
                    // sizes (30 + 1, 30):

                    const h: half_t = (V1[i] >>> 15);
                    let l: half_t = (V1[i] & 0x7fff);
                    const cross: word_a1_t = l * h << 1;

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
                    sc = muladd_loop(intOffset0,
                                     intOffset1,
                                     i + 1,
                                     n,
                                     V1[i] << 1,
                                     i,
                                     c) + sc;
                    V0[i + n] = sc & 0x3fffffff;
                    sc >>>= 30;

                    i++;
                }
                for (let q = 0; q < w.length; q++) { w[q] = V0[q]; }
            }
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
            function karatsuba_split(l: uli_t, h: uli_t, x: uli_t): void {

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
            export const square_karatsuba =
                (function(): (w: uli_t, x: uli_t, depth: size_t, len?: size_t) => void {

                // Scratch space indexed by depth. These arrays are resized as
                // needed in each call. In typical cryptographic applications big
                // integers have the same size, so no resize takes place.
                const scratch: uli_t[][] = [
                    [[], [], [], [], [], [], []],
                    [[], [], [], [], [], [], []],
                    [[], [], [], [], [], [], []]
                ];

                return function(w: uli_t, x: uli_t, depth: size_t, len?: size_t): void {
                    // Make sure that the arrays have proper sizes.
                    if (typeof len === "undefined") {
                        len = x.length;
                    }

                    // Access scratch space of this depth. Due to the depth-first
                    // structure of this algorithm no overwriting can take place.
                    const s: uli_t[] = scratch[depth];
                    const h: uli_t = s[0];
                    const l: uli_t = s[1];
                    const z2: uli_t = s[2];
                    const z1: uli_t = s[3];
                    const z0: uli_t = s[4];
                    const xdif: uli_t = s[5];

                    len += len & 0x1;
                    const hlen: size_t = len >>> 1;

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
                        square_karatsuba(z2, h, depth - 1);
                        square_karatsuba(z0, l, depth - 1);
                    }

                    if (cmp(h, l) < 0) {
                        sub(xdif, l, h);
                    } else {
                        sub(xdif, h, l);
                    }

                    if (depth < 1) {
                        square_naive(z1, xdif);
                    } else {
                        square_karatsuba(z1, xdif, depth - 1);
                    }

                    // Specialized loop to compute:
                    // b^2 * z2 + b * (z0 - z1 + z2) + z0
                    // where b = 2^(hlen * 30). We do it as follows:
                    // w = b^2 * z2 + b * (z0 + z2) + z0
                    // w = w - b * z1

                    const l0: size_t = w.length < hlen ? w.length : hlen;
                    const l1: size_t = w.length < len ? w.length : len;
                    const l2: size_t = w.length < len + hlen ? w.length : len + hlen;
                    const l3: size_t = w.length < 2 * len ? w.length : 2 * len;
                    const l4: size_t = l2;
                    const l5: size_t = l3;

                    let tmp: int32_t;
                    let c: int32_t = 0;
                    let i: size_t = 0;

                    while (i < l0) {
                        w[i] = z0[i];
                        i++;
                    }
                    while (i < l1) {
                        tmp = z0[i] + z0[i - hlen] + z2[i - hlen] + c; w[i] = tmp & 0x3fffffff; c = tmp >>> 30;
                        // This implies, so we can precisely add within 32 bits using
                        // *unsigned* right shift.
                        // tmp < 2^{30 + 2}
                        i++;
                    }
                    while (i < l2) {
                        tmp = z0[i - hlen] + z2[i - hlen] + z2[i - len] + c; w[i] = tmp & 0x3fffffff; c = tmp >>> 30;
                        // This implies, so we can precisely add within 32 bits using
                        // *unsigned* right shift.
                        // tmp < 2^(30 + 2)
                        i++;
                    }
                    while (i < l3) {
                        tmp = z2[i - len] + c; w[i] = tmp & 0x3fffffff; c = tmp >>> 30;
                        i++;
                    }

                    // We can ignore the positive carry here, since we know that
                    // the final result fits within 2 * len words, but we need to
                    // subtract z1 at the right position.

                    i = hlen;
                    c = 0;
                    while (i < l4) {
                        tmp = w[i] - z1[i - hlen] + c; w[i] = tmp & 0x3fffffff; c = tmp >> 30;
                        i++;
                    }
                    while (i < l5) {
                        tmp = w[i] + c; w[i] = tmp & 0x3fffffff; c = tmp >> 30;
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
            export function mul_naive(w: uli_t, x: uli_t, y: uli_t): void {

                const n: size_t = msword(x) + 1;
                const t: size_t = msword(y) + 1;

                setzero(w);

                V1.set(x);
                V0.set(w);

                for (let i: size_t = 0; i < t; i++) {
                    V0[i + n] = muladd_loop(intOffset0,
                                                      intOffset1,
                                                      0,
                                                      n,
                                                      y[i],
                                                      i,
                                                      0);
                }
                for (let q = 0; q < w.length; q++) { w[q] = V0[q]; }
            }

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
            export const mul_karatsuba =
                (function(): (w: uli_t, x: uli_t, y: uli_t, depth: size_t, len?: size_t) =>
                void {

                // Scratch space indexed by depth. These arrays are resized as
                // needed in each call. In typical cryptographic applications big
                // integers have the same size, so no resize takes place.
                const scratch: uli_t[][] = [
                    [[], [], [], [], [], [], [], [], [], [], []],
                    [[], [], [], [], [], [], [], [], [], [], []],
                    [[], [], [], [], [], [], [], [], [], [], []]
                ];

                return function(w: uli_t, x: uli_t, y: uli_t, depth: size_t, len?: size_t):
                void {
                    // Make sure that the lengths of the arrays are equal and
                    // even.
                    if (typeof len === "undefined") {
                        len = Math.max(x.length, y.length);
                    }

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

                    len += len % 2;
                    const hlen: size_t = len >>> 1;

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
                        mul_karatsuba(z2, hx, hy, depth - 1);
                        mul_karatsuba(z0, lx, ly, depth - 1);
                    }

                    add(xsum, hx, lx, 0);
                    add(ysum, hy, ly, 0);

                    if (depth < 1) {
                        mul_naive(tmp1, xsum, ysum);
                    } else {
                        mul_karatsuba(tmp1, xsum, ysum, depth - 1);
                    }

                    sub(tmp2, tmp1, z2);
                    sub(z1, tmp2, z0);

                    // Specialized loop to combine the results.

                    // Avoid increasing the length of w.
                    const l0: size_t = w.length < hlen ? w.length : hlen;
                    const l1: size_t = w.length < len ? w.length : len;
                    const l2: size_t = w.length < len + hlen + 2 ? w.length : len + hlen + 2;
                    const l3: size_t = w.length < 2 * len ? w.length : 2 * len;

                    let tmp: int32_t;
                    let c: int32_t = 0;
                    let i: size_t = 0;
                    while (i < l0) {
                        w[i] = z0[i];
                        i++;
                    }
                    while (i < l1) {
                        tmp = z0[i] + z1[i - hlen] + c; w[i] = tmp & 0x3fffffff; c = tmp >>> 30;
                        i++;
                    }
                    while (i < l2) {
                        tmp = z1[i - hlen] + z2[i - len] + c; w[i] = tmp & 0x3fffffff; c = tmp >>> 30;
                        i++;
                    }
                    while (i < l3) {
                        tmp = z2[i - len] + c; w[i] = tmp & 0x3fffffff; c = tmp >>> 30;
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
            export const reciprocal_word = (function(): (d: word_t) => word_t {

                // Temporary variables.
                const q: uli_t = [0, 0];
                const a: uli_t = [0, 0];
                const p: uli_t = [0, 0, 0];
                const r: uli_t = [0, 0, 0];
                const one: uli_t = [1];
                const zero: uli_t = [0];
                const dd: uli_t = [0, 0];

                return function(d: word_t): word_t {

                    // Shift needed for numerator to fit in 53 bits.
                    let s: size_t;

                    // N < 2^53
                    let N: number;

                    // Estimate of (r >> s) / d)
                    let A: int32_t;

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
            export const reciprocal_word_3by2 = (function(): (d: uli_t) => word_t {

                const t: uli_t = [0, 0];

                return function(d: uli_t): word_t {

                    let cross: int32_t;
                    let hx: int32_t;
                    let lx: int32_t;
                    let hy: int32_t;
                    let ly: int32_t;
                    let v: word_t = reciprocal_word(d[1]);

                    // p = d1 * v mod 2^30
                    let p: word_t = (((((d[1] & 0x7fff) * (v & 0x7fff)) | 0) + ((((((d[1] >>> 15) * (v & 0x7fff)) | 0) + (d[1] & 0x7fff) * (v >>> 15)) & 0x7fff) << 15)) & 0x3fffffff);

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
                    hx = (v >>> 15); lx = (v & 0x7fff); hy = (d[0] >>> 15); ly = (d[0] & 0x7fff); cross = ((hx * ly) | 0) + lx * hy; lx = ((lx * ly) | 0) + ((cross & 0x7fff) << 15); t[1] = (hx * hy + (cross >>> 15) + (lx >>> 30)) | 0; t[0] = lx & 0x3fffffff;

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
            export const div3by2 = (function(): (r: uli_t,
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

                    let hx: int32_t;
                    let lx: int32_t;
                    let hy: int32_t;
                    let ly: int32_t;
                    let tmp: int32_t = 0;

                    // (q1,q0) = v * u2
                    hx = (v >>> 15); lx = (v & 0x7fff); hy = (u[2] >>> 15); ly = (u[2] & 0x7fff); tmp = ((hx * ly) | 0) + lx * hy; lx = ((lx * ly) | 0) + ((tmp & 0x7fff) << 15); q[1] = (hx * hy + (tmp >>> 15) + (lx >>> 30)) | 0; q[0] = lx & 0x3fffffff;

                    // q = q + (u2,u1)
                    tmp = q[0] + u[1]; q[0] = tmp & 0x3fffffff; q[1] = (q[1] + u[2] + (tmp >>> 30)) & 0x3fffffff;

                    // r1 = u1 - q1 * d1 mod 2^30
                    hx = (q[1] >>> 15); lx = (q[1] & 0x7fff); hy = (d[1] >>> 15); ly = (d[1] & 0x7fff); tmp = ((hx * ly) | 0) + lx * hy; lx = ((lx * ly) | 0) + ((tmp & 0x7fff) << 15); r[1] = (hx * hy + (tmp >>> 15) + (lx >>> 30)) | 0; r[0] = lx & 0x3fffffff;
                    r[1] = (u[1] + 0x40000000 - r[0]) & 0x3fffffff;

                    // neg_t = d0 * q1
                    hx = (d[0] >>> 15); lx = (d[0] & 0x7fff); hy = (q[1] >>> 15); ly = (q[1] & 0x7fff); tmp = ((hx * ly) | 0) + lx * hy; lx = ((lx * ly) | 0) + ((tmp & 0x7fff) << 15); neg_t[1] = (hx * hy + (tmp >>> 15) + (lx >>> 30)) | 0; neg_t[0] = lx & 0x3fffffff;
                    neg(neg_t, neg_t);

                    // r = (r1,u0) - t - d mod 2^(2 * 30)
                    r[0] = u[0];
                    tmp = r[0] + neg_t[0]; r[0] = tmp & 0x3fffffff; r[1] = (r[1] + neg_t[1] + (tmp >>> 30)) & 0x3fffffff;
                    tmp = r[0] + neg_d[0]; r[0] = tmp & 0x3fffffff; r[1] = (r[1] + neg_d[1] + (tmp >>> 30)) & 0x3fffffff;

                    // q1 = q1 + 1 mod 2^30
                    q[1] = (q[1] + 1) & 0x3fffffff;

                    // r1 >= q0
                    if (r[1] >= q[0]) {

                        // q1 = q1 - 1 mod 2^30
                        q[1] = (q[1] + 0x3fffffff) & 0x3fffffff;

                        // r = r + d mod 2^(2 * 30)
                        tmp = r[0] + d[0]; r[0] = tmp & 0x3fffffff; r[1] = (r[1] + d[1] + (tmp >>> 30)) & 0x3fffffff;
                    }

                    // r >= d
                    if (r[1] > d[1] || (r[1] === d[1] && r[0] >= d[0])) {

                        // q1 = q1 + 1
                        q[1] = q[1] + 1;

                        // r = r - d
                        tmp = r[0] + neg_d[0]; r[0] = tmp & 0x3fffffff; r[1] = (r[1] + neg_d[1] + (tmp >>> 30)) & 0x3fffffff;
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
            export const div_qr = (function(): (w: uli_t, x: uli_t, y: uli_t) => void {

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
                const u: uli_t = [0, 0, 0, 0];

                // Top two words of ny.
                const d: uli_t = [0, 0, 0];

                // Negative of d in two's complement.
                const neg_d: uli_t = [0, 0, 0];

                // Remainder in 3by2 division.
                const r: uli_t = [0, 0, 0];

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
                    v = reciprocal_word_3by2(d);
                };

                // Returns true or false depending on if x >= s(y) or not, where
                // s(y) = y * 2^((n - t) * 30), i.e., s(y) is y shifted by
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
                            w[k] = div3by2(r, u, d, neg_d, v);
                        }

                        // Subtract scaled and shifted ny from x.
                        muladd_loop(intOffset1,
                                    intOffset2,
                                    0,
                                    t + 2,
                                    w[k],
                                    k,
                                    0);

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
                    for (let q = 0; q < x.length; q++) { x[q] = V1[q]; }
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
            export const modrandom =
                (function(): (w: uli_t, m: uli_t, rs: RandomSource, sd?: size_t) => void {

                const q: uli_t = [];
                const r: uli_t = [];

                return function(w: uli_t, m: uli_t, rs: RandomSource,
                                sd: size_t = 50): void {

                    const bitlen: size_t = m.length * 30 + sd;
                    const len: size_t = Math.floor((bitlen + 30 - 1) / 30);

                    if (q.length != len) {
                        resize(q, len);
                        resize(r, len + 2);
                    }
                    random(r, len, rs);
                    div_qr(q, r, m);
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
            export const modmul =
                (function(): (w: uli_t, x: uli_t, y: uli_t, m: uli_t) => void {
                // We use q to store quotients during modular reduction.
                const q: uli_t = [];

                return function(w: uli_t, x: uli_t, y: uli_t, m: uli_t): void {

                    if (q.length != m.length + 1) {
                        resize(q, m.length + 1);
                    }
                    // This squares if x == y.
                    mul(w, x, y, m.length);
                    div_qr(q, w, m);
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
            export function mul_mont(a: uli_t, x: uli_t, y: uli_t, m: uli_t,
                                     mn: size_t, w: word_t):
            void {

                // a = 0
                setzero(a);

                V0.set(a);
                V2.set(m);
                V1.set(y);

                // Position within a is thought of as the location of its least
                // significant word. We let the representation of a slide upwards
                // to simulate shifting.

                // yw = y[0] * w
                const yw: word_t = (((((y[0] & 0x7fff) * (w & 0x7fff)) | 0) + ((((((y[0] >>> 15) * (w & 0x7fff)) | 0) + (y[0] & 0x7fff) * (w >>> 15)) & 0x7fff) << 15)) & 0x3fffffff);

                // Loop invariant: a < 4 * m, i.e., we need one additional word to
                // store a. The loop invariant is satisfied when i = 0, since a =
                // 0 in this case.
                for (let i: size_t = 0; i < mn; i++) {

                    // u = a[i] * w + xi * yw mod 2^30
                    // a = a + y * x[i] + m * u
                    mul_mont_loop(intOffset0,
                                  intOffset1,
                                  intOffset2,
                                  mn,
                                  x[i],
                                  w,
                                  yw,
                                  i);

                    // We know that 0 <= x[i] < b and 0 <= u < b. Thus, we have:
                    // a < 4 * m + 2 * m * b and a = a / b is done using index i.
                    // The loop invariant is now satisfied, since b > 1 implies:
                    // a / b < (2 + 4/b) * m < 4 * m
                }

                // Now we do all mn right shifts at once and zero the rest. There
                // may be one additional word in case we have to subtract.
                V0.copyWithin(0, mn, mn + mn + 1);
                V0.fill(0, mn + 1, a.length);

                for (let q = 0; q < a.length; q++) { a[q] = V0[q]; }

                // Without right shifts a is bounded by 2 * m * m and we shift mn
                // positions. Thus, a < 2 * m which implies that 0 <= a < m or 0
                // <= a - m < m. The loop invariant is simplistic to be easy to
                // understand.

                // a = min(a, a - m)
                if (cmp(a, m) >= 0) {
                    sub(a, a, m);
                }
            }

            /**
             * Abstract class which represents a way to square and multiply
             * elements in a modular ring for use in exponentiation algorithms.
             */
            export abstract class ModPowCtx {

                // Modulus
                m: uli_t = [];

                // Number of words in modulus.
                mn: size_t;

                // Limbs in adjusted modulus.
                lim1: size_t;

                // Limbs in transformed elements.
                lim2: size_t;

                /**
                 * Creates a context from a modulus. A product of two integers
                 * with lim1 limbs can have at most 2 * lim1 limbs, but for
                 * modular reduction we need two extra limbs.
                 *
                 * @param m Modulus.
                 */
                constructor(m: uli_t) {

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

                /**
                 * Returns the appropriate size of a pre-computed table for
                 * windowing exponentiation.
                 *
                 * @param bitLength Number of bits in exponent.
                 */
                abstract getk(bitLength: size_t): size_t;

                /**
                 * Transforms an element to a form which this context can perform
                 * multiplications with.
                 *
                 * @param xt Transformed element.
                 * @param x Element.
                 */
                abstract set(xt: uli_t, x: uli_t): void;

                /**
                 * Recovers an element from a transformed element.
                 *
                 * @param x Element.
                 * @param xt Transformed element.
                 */
                abstract get(x: uli_t, xt: uli_t): void;

                /**
                 * Sets xt to the transformation of one.
                 *
                 * @param xt Transformed one.
                 */
                abstract setOne(xt: uli_t): void;

                /**
                 * Computes the transformed square of a transformed element.
                 *
                 * @param wt Transformed square.
                 * @param xt Transformed element.
                 */
                abstract square(wt: uli_t, xt: uli_t): void;

                /**
                 * Computes the transformed product of a transformed elements.
                 *
                 * @param wt Transformed square.
                 * @param xt Transformed element.
                 * @param yt Transformed element.
                 */
                abstract mul(wt: uli_t, xt: uli_t, yt: uli_t): void;
            }

            /**
             * Class which represents the straightforward way to square and
             * multiply in a modular ring for use in exponentiation algorithms.
             */
            export class ModularCtx extends ModPowCtx {

                getk(bitLength: size_t): size_t {
                    let k: size_t = 5;
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

                set(xt: uli_t, x: uli_t): void {
                    set(xt, x);
                }

                get(x: uli_t, xt: uli_t): void {
                    set(x, xt);
                }

                setOne(xt: uli_t): void {
                    setone(xt);
                }

                square(wt: uli_t, xt: uli_t): void {
                    modmul(wt, xt, xt, this.m);
                }

                mul(wt: uli_t, xt: uli_t, yt: uli_t): void {
                    modmul(wt, xt, yt, this.m);
                }

                static getCtx(m: uli_t): ModPowCtx {
                    return new ModularCtx(m);
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
             * References: HAC 14.82, 14.94.
             *
             * @param w - Array holding the result.
             * @param b - Basis integer.
             * @param e - Exponent.
             * @param m - Modulus.
             */
            export const modpow_sqrmul =
                (function(): (w: uli_t, b: uli_t, e: uli_t, m: uli_t,
                              getCtx: (m: uli_t) => ModPowCtx) => void {

                // const old_m: uli_t = [];
                const d: uli_t = [];
                const A: [uli_t, uli_t] = [[], []];

                return function(w: uli_t, b: uli_t, e: uli_t, m: uli_t,
                                getCtx: (m: uli_t) => ModPowCtx): void {

                    const ctx: ModPowCtx = getCtx(m);

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
                    let s: int32_t = 0;
                    ctx.setOne(A[s]);

                    for (let i: size_t = msbit(e); i >= 0; i--) {

                        // A = A^2 mod m
                        ctx.square(A[s ^ 1], A[s]);  s ^= 1;

                        // ith bit of e is 1
                        if (getbit(e, i) === 1) {

                            // A = A * d mod m
                            ctx.mul(A[s ^ 1], A[s], d);  s ^= 1;
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
            export const modpow_window =
                (function(): (w: uli_t, b: uli_t, e: uli_t, m: uli_t,
                              getCtx: (m: uli_t) => ModPowCtx) => void {

                // We use p to store squares, products, and their remainders, q to
                // store quotients during modular reduction, and A to store
                // intermediate results.
                const A: uli_t[] = [[], []];
                const D: uli_t[] = [];

                return function(w: uli_t, b: uli_t, e: uli_t, m: uli_t,
                                getCtx: (m: uli_t) => ModPowCtx): void {

                    const ctx: ModPowCtx = getCtx(m);

                    const msb: size_t = msbit(e) + 1;
                    const k: size_t = ctx.getk(msb);

                    // Initialize or resize temporary space as needed.
                    if (A[0].length !== ctx.lim2) {
                        resize(A[0], ctx.lim2);
                        resize(A[1], ctx.lim2);

                        for (let i: size_t = 0; i < D.length; i++) {
                            resize(D[i], ctx.lim1);
                        }
                    }

                    // Expand the table if needed.
                    if (D.length < (1 << k)) {
                        const len: size_t = D.length;
                        D.length = 1 << k;
                        for (let i: size_t = len; i < D.length; i++) {
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
                    for (let i: size_t = 1; i < 1 << (k - 1); i++) {
                        ctx.mul(A[0], D[2 * i - 1], D[2]);
                        set(D[2 * i + 1], A[0]);
                    }

                    // Set A = 1.
                    let s: size_t = 0;
                    ctx.setOne(A[s]);

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
                            ctx.square(A[s ^ 1], A[s]); s ^= 1;
                        }

                        // A = A * D[uh[0]] mod m.
                        if (uh[0] !== 0) {
                            ctx.mul(A[s ^ 1], A[s], D[uh[0]]); s ^= 1;
                        }

                        // A = A^E mod m, where E = 2^uh[1].
                        for (let j: size_t = 0; j < uh[1]; j++) {
                            ctx.square(A[s ^ 1], A[s]); s ^= 1;
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
            export const modpowprodtab_inner =
                (function(): (b: uli_t[], m: uli_t) => uli_t[] {

                // We use p to store products.
                const p: uli_t = [];

                return function(b: uli_t[], m: uli_t): uli_t[] {
                    // Initialize or resize temporary space as needed.
                    if (p.length !== 2 * m.length + 2) {
                        resize(p, 2 * m.length + 2);
                    }

                    // Make room for table and initialize all elements to one.
                    const t: uli_t[] = [];
                    for (let i: size_t = 0; i < 1 << b.length; i++) {
                        t[i] = new_uli(m.length);
                        t[i][0] = 1;
                    }

                    // Initialize parts of the table with the bases provided.
                    for (let i: size_t = 1, j: size_t = 0; i < t.length; i = i * 2, j++) {
                        set(t[i], b[j]);
                    }

                    // Perform precalculation using masking for efficiency.
                    for (let mask: int32_t = 1; mask < t.length; mask++) {

                        const onemask: int32_t = mask & -mask;
                        modmul(p, t[mask ^ onemask], t[onemask], m);
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
             * ASSUMES: e.length <= 30 and x.length >= bitsize, where
             * is the maximum bitsize of any of the inputs.
             *
             * @param x - Stores bit-wise concatenation of the inputs.
             * @param e - List of integers.
             * @param bitsize - Maximum bitsize of any of the inputs.
             */
            function concbits_inner(x: uli_t, e: uli_t[], bitsize: size_t): void {

                setzero(x);

                const w: uli_t = new_uli(e.length);

                // Bit position in each e[j], and word position in x.
                let k: size_t = 0;

                // Word position in each e[j].
                for (let i: size_t = 0; k < bitsize; i++) {

                    // Simulate leading zero of e[j] if needed.
                    for (let j: size_t = 0; j < w.length; j++) {
                        w[j] = i < e[j].length ? e[j][i] : 0;
                    }

                    // Bit position within e[j][i] for each j.
                    for (let b: size_t = 0; b < 30 && k < bitsize; b++, k++) {

                        // Bits at position i * 30 + b from all e[j].
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
             * ASSUMES: width <= 30, x[i].length >= msbit(e[i]) + 1 for
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
            export const modpowprod = (function(): (w: uli_t,
                                                    t: uli_t[][],
                                                    e: uli_t[],
                                                    m: uli_t,
                                                    width: size_t) => void {
                // We use x to store concatenated exponents and a dual
                // representation of A to store intermediate results.
                const x: uli_t[] = [];
                const A: [uli_t, uli_t] = [[], []];

                return function(w: uli_t,
                                t: uli_t[][],
                                e: uli_t[],
                                m: uli_t,
                                width: size_t): void {

                    // Initialize or resize temporary space as needed.
                    const len: size_t = 2 * m.length + 2;
                    if (A[0].length !== len) {
                        resize(A[0], len);
                        resize(A[1], len);
                    }

                    // Ensure that x has the right number of elements.
                    while (x.length < t.length) {
                        x.push([]);
                    }

                    // Maximal bitsize of any e[j].
                    const bitsize: size_t = max_msbit(e) + 1;

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
                        modmul(A[s ^ 1], A[s], A[s], m); s ^= 1;

                        for (let j: size_t = 0; j < t.length; j++) {

                            if (x[j][i] !== 0) {

                                // A = A * t[ j ][ x[j][i] ] mod m.
                                modmul(A[s ^ 1], A[s], t[j][ x[j][i] ], m); s ^= 1;
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
            export function slice(x: uli_t, s: size_t, e: size_t): uli_t {
                const m: size_t = msbit(x);

                // Avoid indexing out of bounds.
                e = e < m + 1 ? e : m + 1;

                // Copy and get rid of the lower bits.
                const w: uli_t = copy_uli(x);
                shiftright(w, s);

                // Get rid of higher words.
                const bitlen: size_t = e - s;
                let len: size_t = Math.floor((bitlen + 30 - 1) / 30);

                // Get rid of top-most bits.
                const topbits: size_t = bitlen % 30;
                if (topbits > 0) {
                    w[len - 1] &= 0x3fffffff >>> 30 - topbits;
                } else {
                    w[len] = 0;
                    len++;
                }
                w.length = len;
                return w;
            }

            /**
             * Returns a minimal hexadecimal representation in two's complement.
             *
             * @param x - Unsigned integer.
             * @returns Hexadecimal string representation of the array.
             */
            export function hex(x: uli_t): string {
                return byteArrayToHex(to_uint8_array(normalized(x)).reverse());
            }

            /**
             * Returns the integer represented by the input.
             *
             * @param s - Hexadecimal representation of an integer.
             * @returns Represented integer.
             */
            export function hex_to_li(s: string): uli_t {
                return from_uint8_array(hexToByteArray(s).reverse());
            }

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
            export const miller_rabin =
                (function(): (n: uli_t, t: size_t, rs: RandomSource) =>
            boolean {

                const one: uli_t = [1, 0];
                const two: uli_t = [0, 0];
                set(two, 2);
                const three: uli_t = [0, 0];
                set(three, 3);
                const five: uli_t = [0, 0, 0];
                set(five, 5);
                const r: uli_t = [];
                const n_1: uli_t = [];
                const a: uli_t = [];
                const y: [uli_t, uli_t] = [[], []];

                return function(n: uli_t, t: size_t, rs: RandomSource): boolean {

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
                    const s: size_t = lsbit(r);
                    shiftright(r, s);

                    // Iterate the test t times.
                    for (let i: size_t = 0; i < t; i++) {

                        // Random 2 <= a <= n - 2 (we need n
                        do {
                            modrandom(a, n_1, rs);
                        } while (cmp(a, two) < 0);

                        // y = a^r mod n
                        let b: bin_t = 0;
                        modpow_window(y[b], a, r, n, ModularCtx.getCtx);

                        // y != 1 and y != n - 1
                        if (cmp(y[b], one) != 0 && cmp(y[b], n_1) != 0) {

                            // while j <= s - 1 and y != n - 1
                            let j: size_t = 1;
                            while (j < s && cmp(y[b], n_1) != 0) {

                                // y = y^2 mod n
                                modmul(y[b ^ 1], y[b], y[b], n); b ^= 1;

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

        }

        export namespace li {
            import MASK_ALL = verificatum.arithm.uli.MASK_ALL;
            import ModularCtx = verificatum.arithm.uli.ModularCtx;
            import VerificatumObject = verificatum.base.VerificatumObject;
            import WORDSIZE = verificatum.arithm.uli.WORDSIZE;
            import new_uli = verificatum.arithm.uli.new_uli;
            import uli_add = verificatum.arithm.uli.add;
            import uli_cmp = verificatum.arithm.uli.cmp;
            import uli_copy_uli = verificatum.arithm.uli.copy_uli;
            import uli_div_qr = verificatum.arithm.uli.div_qr;
            import uli_hex = verificatum.arithm.uli.hex;
            import uli_iszero = verificatum.arithm.uli.iszero;
            import uli_lsbit = verificatum.arithm.uli.lsbit;
            import uli_modpow_window = verificatum.arithm.uli.modpow_window;
            import uli_msword = verificatum.arithm.uli.msword;
            import uli_mul = verificatum.arithm.uli.mul;
            import uli_normalize = verificatum.arithm.uli.normalize;
            import uli_resize = verificatum.arithm.uli.resize;
            import uli_set = verificatum.arithm.uli.set;
            import uli_setzero = verificatum.arithm.uli.setzero;
            import uli_shiftleft = verificatum.arithm.uli.shiftleft;
            import uli_shiftright = verificatum.arithm.uli.shiftright;
            import uli_square = verificatum.arithm.uli.square;
            import uli_sub = verificatum.arithm.uli.sub;

            /**
             * Container class for signed mutable integers with manual memory
             * management as for uli_t. Instantiated with sign and value, with a
             * length of the underlying array for an uninitialized instance, or
             * with no parameters.
             */
            export class SLI extends VerificatumObject {
                sign: sign_t;
                value: uli_t;
                length: size_t;

                /**
                 * Constructs an SLI.
                 *
                 * @param first - Empty, sign, or number of words in empty instance.
                 * @param second - Empty or array containing value.
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
                        this.value = new_uli(first);
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
            export function normalize(x: SLI): void {
                uli_normalize(x.value);
                x.length = x.value.length;
                if (x.length == 1 && x.value[0] == 0) {
                    x.sign = 0;
                }
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
             * ASSUMES: 0 <= |b| < 2^WORDSIZE.
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
                return new SLI(a.sign, uli_copy_uli(a.value, len));
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
             * c < 2^WORDSIZE, and a has at least L + 1 limbs.
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

                    const len: size_t = b.length;
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
            export function egcd_binary_reduce(u: SLI,
                                               A: SLI,
                                               B: SLI,
                                               x: SLI,
                                               y: SLI): void {

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
                        set(a, Math.abs(x.sign));
                        set(b, Math.abs(y.sign));
                        set(v, cmp(x, y) > 0 ? x : y);
                    } else {
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
                uli_modpow_window(w.value, b.value, e.value, m.value, ModularCtx.getCtx);
                if (uli_iszero(w.value)) {
                    w.sign = 0;
                } else {
                    w.sign = 1;
                }
            }

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
            export function jacobi(a: SLI, b: SLI): sign_t {
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

                        // Least significant 4 bits of a and b.
                        const aw: word_t = (a.value[0] & 0xf);
                        const bw: word_t = (b.value[0] & 0xf);

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

                const TWO: SLI = new SLI(2);
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

                // y = 2^WORDSIZE
                const y: SLI = new SLI(1, [0x0, 0x1]);

                // am + by = v = 1
                egcd(a, b, v, x, y);

                // -m^(-1) mod 2^WORDSIZE
                return ((1 << WORDSIZE) - a.value[0]) & MASK_ALL;
            }
        }

        import MASK_ALL = verificatum.arithm.uli.MASK_ALL;
        import ModPowCtx = verificatum.arithm.uli.ModPowCtx;
        import ModularCtx = verificatum.arithm.uli.ModularCtx;
        import RandomSource = verificatum.base.RandomSource;
        import SLI = verificatum.arithm.li.SLI;
        import WORDSIZE = verificatum.arithm.uli.WORDSIZE;
        import divide = verificatum.base.divide;
        import iszero = verificatum.arithm.uli.iszero;
        import li_add = verificatum.arithm.li.add;
        import li_cmp = verificatum.arithm.li.cmp;
        import li_div_qr = verificatum.arithm.li.div_qr;
        import li_egcd = verificatum.arithm.li.egcd;
        import li_equals = verificatum.arithm.li.equals;
        import li_hex = verificatum.arithm.li.hex;
        import li_jacobi = verificatum.arithm.li.jacobi;
        import li_modsqrt = verificatum.arithm.li.modsqrt;
        import li_mul = verificatum.arithm.li.mul;
        import li_normalize = verificatum.arithm.li.normalize;
        import li_set = verificatum.arithm.li.set;
        import li_square = verificatum.arithm.li.square;
        import li_sub = verificatum.arithm.li.sub;
        import modpowprod = verificatum.arithm.uli.modpowprod;
        import modpowprodtab = verificatum.arithm.uli.modpowprodtab;
        import neginvm_mont = verificatum.arithm.li.neginvm_mont;
        import new_uli = verificatum.arithm.uli.new_uli;
        import normalize = verificatum.arithm.uli.normalize;
        import ofSubclass = verificatum.base.ofSubclass;
        import ofType = verificatum.base.ofType;
        import to_uint8_array = verificatum.arithm.uli.to_uint8_array;
        import uli_copy_uli = verificatum.arithm.uli.copy_uli;
        import uli_div_qr = verificatum.arithm.uli.div_qr;
        import uli_from_uint8_array = verificatum.arithm.uli.from_uint8_array;
        import uli_getbit = verificatum.arithm.uli.getbit;
        import uli_iszero = verificatum.arithm.uli.iszero;
        import uli_lsbit = verificatum.arithm.uli.lsbit;
        import uli_miller_rabin = verificatum.arithm.uli.miller_rabin;
        import uli_modpow_sqrmul = verificatum.arithm.uli.modpow_sqrmul;
        import uli_modpow_window = verificatum.arithm.uli.modpow_window;
        import uli_msbit = verificatum.arithm.uli.msbit;
        import uli_mul_mont = verificatum.arithm.uli.mul_mont;
        import uli_neg = verificatum.arithm.uli.neg;
        import uli_new_random = verificatum.arithm.uli.new_random;
        import uli_new_uli = verificatum.arithm.uli.new_uli;
        import uli_normalize = verificatum.arithm.uli.normalize;
        import uli_random = verificatum.arithm.uli.random;
        import uli_resize = verificatum.arithm.uli.resize;
        import uli_set = verificatum.arithm.uli.set;
        import uli_setbit = verificatum.arithm.uli.setbit;
        import uli_setzero = verificatum.arithm.uli.setzero;
        import uli_shiftleft = verificatum.arithm.uli.shiftleft;
        import uli_shiftright = verificatum.arithm.uli.shiftright;
        import uli_sign_mask = verificatum.arithm.uli.sign_mask;
        import uli_slice = verificatum.arithm.uli.slice;
        import uli_to_uint8_array = verificatum.arithm.uli.to_uint8_array;
        import uli_tosigned = verificatum.arithm.uli.tosigned;
        import uli_wasm = verificatum.arithm.uli.wasm;
        import uli_weight = verificatum.arithm.uli.weight;

        export enum ModPowAlg {
            smart             = 0x00,
            modular           = 0x20,
            montgomery        = 0x30,
            sqrmul            = 0x02,
            window            = 0x03,
            modular_sqrmul    = 0x22,
            montgomery_sqrmul = 0x32,
            modular_window    = 0x23,
            montgomery_window = 0x33
        }

        /**
         * Class which represents Montgomery's way to square and
         * multiply in a modular ring for use in exponentiation algorithms.
         */
        export class MontgomeryCtx extends ModPowCtx {

            // Generic temporary variable with lim1 limbs.
            q: uli_t = [];

            // Generic temporary variable with lim2 limbs.
            r: uli_t = [];

            // Generic temporary variable with lim2 + 1 limbs.
            rr: uli_t = [];

            // Montgomery inverse of m.
            mw: word_t;

            // R mod m.
            Rmodm: uli_t = [];

            // R^2 mod m.
            R2modm: uli_t = [];

            // one using lim1 limbs.
            one: uli_t = [];

            /**
             * Creates a Montgomery context from a modulus.
             *
             * @param m Modulus.
             */
            constructor(m: uli_t) {
                super(m);

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

            getk(bitLength: size_t): size_t {
                let k: size_t = 4;
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

            set(xt: uli_t, x: uli_t): void {

                // xt = Mont(x, R^2 mod m, m)
                uli_set(this.q, x);
                uli_mul_mont(xt, this.q, this.R2modm, this.m, this.mn, this.mw);
            }

            get(x: uli_t, xt: uli_t): void {

                // x = Mont(xt, 1, m)
                uli_mul_mont(this.r, xt, this.one, this.m, this.mn, this.mw);
                uli_set(x, this.r);
            }

            setOne(xt: uli_t): void {

                // xt = R mod m
                uli_set(xt, this.Rmodm);
            }

            square(wt: uli_t, xt: uli_t): void {

                // wt = Mont(xt, xt, m)
                uli_mul_mont(wt, xt, xt, this.m, this.mn, this.mw);
            }

            mul(wt: uli_t, xt: uli_t, yt: uli_t): void {

                // wt = Mont(xt, xt, m)
                uli_mul_mont(wt, xt, yt, this.m, this.mn, this.mw);
            }

            static getCtx(m: uli_t): MontgomeryCtx {
                return new MontgomeryCtx(m);
            }
        }

        /**
         * Converts various representations of integers to and from instances
         * of LI with rigorous dynamic type checking and static typing as far
         * as is possible. This implementation is meant to be stringent, but
         * not necessarily fast. It does not treat powers of two as a special
         * case.
         */
        export class LIE {

            /**
             * Maximal radix.
             */
            static readonly MAX_RADIX = 64;

            /**
             * Maximal radix for strings of digits in standard alphabets.
             */
            static readonly MAX_STRING_RADIX = 36;

            /**
             * Returns the number of bytes needed to generate the
             * given number of bits.
             *
             * @param bitLength - Number of bits.
             * @returns Number of bytes needed.
             */
            static byteLengthRandom(bitLength: size_t): size_t {
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
            private static typeCheckRadix(radix: int32_t,
                                          maxRadix: int32_t = LIE.MAX_RADIX):
            radix_t {
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
                return <radix_t>radix;
            }

            /**
             * Verifies that a sign is an integer in {-1, 0, 1}.
             *
             * @returns The input sign.
             * @throws Error if the sign is not in {-1, 0, 1}.
             */
            private static typeCheckSign(sign: int32_t): sign_t {
                if (!Number.isInteger(sign)) {
                    throw Error("Sign is not an integer! (" + sign + ")");
                }
                if (!(sign == -1 || sign == 0 || sign == 1)) {
                    throw Error("Sign is not in {-1, 0, 1}! (" + sign + ")");
                }
                return <sign_t>sign;
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
            private static typeCheckUintArray<T>(value: float64_t[],
                                                 bound: uint30_t): T[] {
                if (value.length == 0) {
                    throw Error("Array has zero length!");
                }
                for (let i: size_t = 0; i < value.length; i++) {
                    if (!Number.isInteger(value[i])) {
                        throw Error("Element at index " + i + "is not an integer! " +
                                    "(" + value[i] + ")");
                    }
                    if (!(0 <= value[i] && value[i] <= bound)) {
                        throw Error("Integer at index " + i + " is out of bounds! " +
                                    "(" + value[i] + ")");
                    }
                }
                return <T[]><any[]>value;
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
            static fromSignValue(sign: int32_t, value: any[], radix: radix_t):
            [sign_t, uint30_t[]] {
                const tsign: sign_t = LIE.typeCheckSign(sign);
                const tvalue: uint30_t[] =
                      LIE.typeCheckUintArray<uint30_t>(value, radix - 1);

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
            private static fromRx(values: radix_t[], rx: LI): LI {
                if (values.length == 1) {
                    return LIE.fromNumber(values[0]);
                } else {
                    // We swap from small to big endian order here.
                    const m: size_t = divide(values.length, 2);
                    const h: LI = LIE.fromRx(values.slice(0, m), rx);
                    const l: LI = LIE.fromRx(values.slice(m, values.length), rx);
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
            private static toRx(li: LI, rx: LI, rxbits: size_t): int32_t[] {
                if (li.cmp(rx) < 0) {
                    return [LIE.toNumber(li)];
                } else {
                    // We swap from big to small endian order here.
                    const bits: size_t = uli_msbit(li.value) + 1;
                    const m: int32_t =
                          Math.max(1, Math.floor((bits + rxbits - 1) / rxbits) - 1);
                    const divisor: LI = rx.pow(m);
                    const [h, l]: [LI, LI] = li.divQR(divisor);
                    const ch: int32_t[] = LIE.toRx(h, rx, rxbits);
                    const cl: int32_t[] = LIE.toRx(l, rx, rxbits);
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
            static fromNumber(num: number): LI {
                if (!Number.isInteger(num)) {
                    throw Error("Value is not an integer! (" + num + ")");
                }
                let sign: sign_t;
                if (num < 0) {
                    sign = -1;
                } else if (num > 0) {
                    sign = 1;
                } else {
                    sign = 0;
                }
                num = Math.abs(num);
                // We ensure a leading 0.
                const len: size_t = divide((53 + WORDSIZE - 1 + 1), WORDSIZE);
                const value: uli_t = uli_new_uli(len);
                for (let i: size_t = 0; i < value.length; i++) {
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
            static toNumber(li: LI): number {
                const bytes: uint8_t[] = uli_to_uint8_array(li.value);
                let i: size_t = Math.min(6, bytes.length - 1);
                let num: number;
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
            static fromRadix([sign, value]: [sign_t, int32_t[]], radix: int32_t): LI {
                const tradix: radix_t = LIE.typeCheckRadix(radix);
                const tsign: sign_t = LIE.typeCheckSign(sign);
                const tvalue: radix_t[] =
                      LIE.typeCheckUintArray<radix_t>(value, tradix - 1);
                const rx: LI = LIE.fromNumber(tradix);
                const li: LI = LIE.fromRx(tvalue, rx);
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
            static toRadix(li: LI, radix: int32_t): [sign_t, int32_t[]] {
                const tradix: radix_t = LIE.typeCheckRadix(radix);
                const rx: LI = LIE.fromNumber(tradix);
                const a: int32_t[] = LIE.toRx(li.abs(), rx, uli_msbit(rx.value) + 1);
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
            static fromByteArray(bytes: uint8_t[]): [sign_t, uli_t] {

                bytes = [... LIE.typeCheckUintArray<uint8_t>(bytes, 0xff)];

                // Preliminary sign.
                let sign: sign_t;
                if ((bytes[0] & 0x80) != 0) {
                    sign = -1;
                } else {
                    sign = 1;
                }

                // Small to big endian.
                bytes.reverse();

                // Change wordsize from 8 to WORDSIZE.
                const value: uli_t = uli_from_uint8_array(bytes);

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

            private static readDigit(s: string, i: size_t, radix: radix_t): int32_t {
                const x: number = parseInt(s[i], radix);
                if (Number.isInteger(x)) {
                    return <int32_t>x;
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
            static fromString(s: string, radix: int32_t,
                              maxRadix: radix_t = LIE.MAX_STRING_RADIX): LI {
                const tradix: radix_t = LIE.typeCheckRadix(radix, maxRadix);
                if (s.length > 0) {

                    // Read negative sign if any.
                    let i: size_t = 0;
                    let sign: sign_t = 1;
                    if (s[i] == "-") {
                        sign = -1;
                        i++;
                    }

                    if (i == s.length) {
                        throw Error("Expected at least one digit!");
                    }

                    let x: int32_t = 0;
                    while (x == 0 && i < s.length) {
                        x = LIE.readDigit(s, i, tradix);
                        i++;
                    }

                    const value: int32_t[] = [];
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
            static fromRandomSource(bitLength: size_t, randomSource: RandomSource):
            [sign_t, uli_t] {
                if (Number.isInteger(bitLength) && bitLength > 0) {

                    const value: uli_t = uli_new_random(bitLength, randomSource);
                    const sign: sign_t = (value.length == 1 && value[0] == 0) ? 0 : 1;

                    return [sign, value];
                } else {
                    throw Error("The bitlength is non-positive! (" + bitLength + ")");
                }
            }
        }

        /**
         * Class for large immutable signed integers that handles memory
         * allocation and provides utility functions. All constructors perform
         * a complete dynamic type check of the inputs.
         */
        export class LI extends SLI {

            /**
             * Creates an instance from a sign and a magnitude without
             * typechecking the inputs.
             *
             * @param sign - Sign.
             * @param value - Magnitude.
             */
            static create(sign: sign_t, value: uli_t): LI {
                const li: LI = new LI();
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
            static ux(s: string): LI {
                return new LI("00" + s);
            }

            /**
             * Verifies that the input is a non-negative integer.
             *
             * @param num Value.
             * @return Non-negative integer.
             */
            private static typeCheckSize(num: number): size_t {
                if (Number.isInteger(num)) {
                    if (num >= 0) {
                        return <size_t>num;
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
            private static alloc(limbs: size_t): LI {
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
            public static fromNumber(num: int53_t): LI {
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
            public static getProbablePrime(bitLength: size_t, certainty: size_t,
                                           randomSource: RandomSource): LI {
                bitLength = LI.typeCheckSize(bitLength);
                certainty = LI.typeCheckSize(certainty);
                if (bitLength > 0) {
                    let li: LI;
                    do {
                        const len: size_t =
                              Math.floor((bitLength + WORDSIZE - 1) / WORDSIZE);
                        const p: uli_t = uli_new_uli(len);
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

            /**
             * Creates a new instance representing zero, i.e., a shallow copy of
             * zero. This is a way to enable unsafe creation of instances in
             * LI.alloc and LI.create.
             */
            constructor();

            /**
             * Converts a string in the given radix to an instance of LI. The
             * alphabet is defined by the JavaScript Number.parseInt() method
             * for radix in [2,36]. Use toRadix() and your own alphabet for
             * converting strings with larger radix. Negative integers start
             * with a minus character. Leading zeros are ignored.
             *
             * @param s - String to convert.
             * @param rx - Integer radix in [2,36].
             * @returns Integer as a sign value pair.
             */
            constructor(s: string, radix?: int32_t);

            /**
             * Creates an integer from a sign and array of words. A zero array
             * of {@link WORDSIZE}-bit words throws an error if the sign is
             * incorrect relative the words.
             *
             * @param sign - Sign of the integer.
             * @param value - Array of words representing a non-negative
             * integer in small endian order.
             */
            constructor(sign: sign_t, value: uli_t);

            /**
             * Creates a non-negative integer from a raw array of bytes.
             *
             * @param rawbytes - Array of words representing an non-negative
             * integer.
             */
            constructor(bytes: uint8_t[]);

            /**
             * Samples a random non-negative integer of the given nominal bit
             * length, i.e., additional leading bits may be zero by chance.
             *
             * @param bitLength - Number of randomly chosen bits in the
             * sampled integer.
             * @param randomSource - Source of randomness.
             */
            constructor(bitLength: size_t, randomSource: RandomSource);

            /* eslint-disable sonarjs/cognitive-complexity */
            /* eslint-disable @typescript-eslint/no-explicit-any */
            constructor(...args: any[]) {
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

                    let radix: number = 16;
                    if (args.length == 2) {
                        if (typeof args[1] == "number") {
                            radix = args[1];
                        } else {
                            throw Error("Radix is not a number! (" + args[1] + ")");
                        }
                    }
                    const li: LI = LIE.fromString(args[0], radix, 36);
                    this.sign = li.sign;
                    this.value = li.value;

                } else if (args.length == 2 && ofType(args[0], "number")) {

                    // Sign and value as an array of words.
                    if (Array.isArray(args[1])) {

                        const radix: radix_t = <radix_t>(1 << WORDSIZE);
                        [this.sign, this.value] =
                            <[sign_t, uli_t]>LIE.fromSignValue(args[0], args[1], radix);

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
            private static chooseModPowAlg(modulus: LI, alg: ModPowAlg): ModPowAlg {
                if ((alg & ModPowAlg.montgomery) == ModPowAlg.smart) {
                    if (uli_wasm && modulus.getBit(0) == 1) {
                        alg |= ModPowAlg.montgomery;
                    } else {
                        alg |= ModPowAlg.modular;
                    }
                } else if ((alg & ModPowAlg.montgomery) == ModPowAlg.montgomery
                           && modulus.getBit(0) == 0) {
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
            private static getModPowCtxFactory(alg: ModPowAlg):
            (m: uli_t) => ModPowCtx {
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
            private twos(): uli_t {
                if (this.sign < 0) {
                    const n: uli_t = uli_new_uli(this.value.length);
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
            public isProbablePrime(certainty: size_t, randomSource: RandomSource):
            boolean {
                const x: uli_t = this.abs().value;
                return uli_miller_rabin(x, certainty, randomSource);
            }

            /**
             * Returns a float64_t by interpreting the least significant 53
             * bits of this integer as the mantissa.
             *
             * @returns The 32 least significant bits of this integer in two's
             */
            public numberValue(): float64_t {
                return LIE.toNumber(this);
            }

            /**
             * Returns true or false depending on if this integer is zero or
             * not.
             *
             * @returns True or false depending on if this integer is zero or
             * not.
             */
            public isZero(): boolean {
                return this.sign == 0;
            }

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
            public equals(other: LI): boolean {
                return li_equals(this, other);
            }

            /**
             * Bit length of this integer.
             *
             * @returns Bit length of this integer.
             */
            public bitLength(): size_t {
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
            public bitCount(): size_t {
                if (this.sign < 0) {
                    const x: uli_t = this.twos();
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
            public getLSB(): size_t {
                return this.sign == 0 ? -1 : uli_lsbit(this.twos());
            }

            /**
             * Returns 1 or 0 depending on if the given bit is set or not in
             * the two's complement representation of this integer.
             *
             * @param index - Position of bit.
             * @returns 1 or 0 depending on if the given bit is set or not.
             */
            public getBit(index: size_t): bin_t {
                return <bin_t>uli_getbit(this.twos(), LI.typeCheckSize(index));
            }

            /**
             * Set the bit at the given index to a bit value of this integer
             * in two's complement representation.
             *
             * @parameter index - Index.
             * @parameter bit - Bit.
             */
            public setBit(index: size_t, bit: bin_t): LI {
                if (0 <= bit && bit < 2) {
                    const len: size_t = Math.floor((index + WORDSIZE - 1) / WORDSIZE);
                    const x: uli_t = uli_copy_uli(this.twos(), len);
                    uli_setbit(x, LI.typeCheckSize(index), bit);
                    const sign: sign_t = uli_tosigned(x);
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
            public flipBit(index: size_t): LI {
                const i: size_t = LI.typeCheckSize(index);
                return this.setBit(i, <bin_t>(this.getBit(i) ^ 1));
            }

            /**
             * Applies a commutative function f to words at each index of this
             * integer and the input integer. The output of f is computed
             * modulo 2^WORDSIZE.
             *
             * @param other - A second integer.
             * @return Resulting integer.
             */
            private word2(other: LI, f: (xw: word_t, yw: word_t) => word_t): LI {
                let x: uli_t = this.twos();
                let y: uli_t = other.twos();
                if (x.length < y.length) {
                    const t: uli_t = x;
                    x = y;
                    y = t;
                }
                const yw: word_t = uli_sign_mask(y);

                const value: uli_t = uli_new_uli(x.length);
                let i: sign_t = 0;
                while (i < y.length) {
                    value[i] = f(x[i], y[i]) & MASK_ALL;
                    i++;
                }
                while (i < x.length) {
                    value[i] = f(x[i], yw) & MASK_ALL;
                    i++;
                }

                const sign: sign_t = uli_tosigned(value);
                uli_normalize(value);

                return LI.create(sign, value);
            }

            /**
             * Applies the function f to words at each index of this
             * integer. The output of f is computed modulo 2^WORDSIZE.
             *
             * @return Resulting integer.
             */
            private word1(f: (xw: word_t) => word_t): LI {
                const x: uli_t = this.twos();

                const value: uli_t = uli_new_uli(x.length);
                for (let i: size_t = 0; i < x.length; i++) {
                    value[i] = f(x[i]) & MASK_ALL;
                }

                const sign: sign_t = uli_tosigned(value);
                uli_normalize(value);

                return LI.create(sign, value);
            }

            /**
             * Returns the bitwise AND of this integer and the input.
             *
             * @param other - Other integer.
             * @returns Bitwise AND of this integer and the input.
             */
            public and(other: LI): LI {
                return this.word2(other, (x: word_t, y: word_t) => x & y);
            }

            /**
             * Returns the bitwise OR of this integer and the input.
             *
             * @param other - Other integer.
             * @returns Bitwise OR of this integer and the input.
             */
            public or(other: LI): LI {
                return this.word2(other, (x: word_t, y: word_t) => x | y);
            }

            /**
             * Returns the bitwise XOR of this integer and the input.
             *
             * @param other - Other integer.
             * @returns Bitwise XOR of this integer and the input.
             */
            public xor(other: LI): LI {
                return this.word2(other, (x: word_t, y: word_t) => x ^ y);
            }

            /**
             * Returns the bitwise complement of this integer.
             *
             * @param other - Other integer.
             * @returns Bitwise complement of this integer.
             */
            public not(): LI {
                return this.word1((x: word_t) => (~x & MASK_ALL));
            }

            /**
             * Shifts this integer to the left.
             *
             * @param offset - Bit positions to shift.
             * @returns This integer shifted the given number of bits to the left.
             * @throws ArithmeticException - if the shift distance is
             * Integer.MIN_VALUE.
             */
            public shiftLeft(offset: size_t): LI {
                const os: size_t = LI.typeCheckSize(offset);
                const len: size_t =
                      this.length + divide((os + WORDSIZE - 1), WORDSIZE);
                const value: uli_t = uli_copy_uli(this.value, len);
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
            public shiftRight(offset: size_t): LI {
                const os: size_t = LI.typeCheckSize(offset);
                const value: uli_t = uli_copy_uli(this.value);
                uli_shiftright(value, os);
                uli_normalize(value);
                let sign: sign_t = this.sign;
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
            public shift(offset: int32_t): LI {
                const os: size_t = LI.typeCheckSize(offset);
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
            public abs(): LI {
                return LI.create(this.sign == 0 ? 0 : 1, this.value);
            }

            /**
             * Returns negative of this integer.
             * @returns -this.
             */
            public neg(): LI {
                return LI.create(<sign_t>(-this.sign), this.value);
            }

            /**
             * Computes sum of this integer and the input.
             *
             * @param term - Other integer.
             * @returns this + term.
             */
            public add(term: LI): LI {
                const len: size_t = Math.max(this.length, term.length) + 1;
                const res: LI = LI.alloc(len);
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
            public sub(term: LI): LI {
                const len: size_t = Math.max(this.length, term.length) + 1;
                const res: LI = LI.alloc(len);
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
            public mul(factor: LI): LI {
                const len: size_t = this.length + factor.length;
                const res: LI = LI.alloc(len);
                li_mul(res, this, factor);
                li_normalize(res);
                return res;
            }

            /**
             * Computes square of this integer.
             * @returns this * this.
             */
            public square(): LI {
                const len: size_t = 2 * this.length;
                const res: LI = LI.alloc(len + 1);
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
            public divQR(divisor: LI): [LI, LI] {

                if (divisor.sign === 0) {
                    throw Error("Attempt to divide by zero!");
                } else {

                    // All are normalized, so we can count limbs.
                    const len: size_t = this.length;
                    const dlen: size_t = divisor.length;
                    const qlen: size_t = Math.max(1, len - dlen) + 1;

                    // We require leading zeros and add 1 extra to each.
                    const remainder: LI = LI.alloc(len + 3);
                    li_set(remainder, this);
                    const quotient: LI = LI.alloc(qlen + 1);

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
            public div(divisor: LI): LI {
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
            public remainder(divisor: LI): LI {
                return this.divQR(divisor)[1];
            }

            /**
             * Computes integer remainder of this integer divided by
             * the input as a value in [0, modulus - 1].
             *
             * @param modulus - Divisor.
             * @returns Integer remainder.
             */
            public mod(modulus: LI): LI {
                if (modulus.sign > 0) {
                    const li: LI = this.remainder(modulus);
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
            public modAdd(term: LI, modulus: LI): LI {
                return this.add(term).mod(modulus);
            }

            /**
             * Syntactic sugar for this.sub(term).mod(modulus).
             *
             * @param term - Other integer.
             * @param modulus - Modulus.
             * @returns (this - term) mod modulus.
             */
            public modSub(term: LI, modulus: LI): LI {
                return this.sub(term).mod(modulus);
            }

            /**
             * Syntactic sugar for this.mul(factor).mod(modulus).
             *
             * @param term - Other integer.
             * @param modulus - Modulus.
             * @returns (this * term) mod modulus.
             */
            public modMul(factor: LI, modulus: LI): LI {
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
            public modPow(exponent: LI, modulus: LI,
                          alg: ModPowAlg = ModPowAlg.smart): LI {

                // modulus <= 0 is undefined.
                if (modulus.sign <= 0) {
                    throw Error("Non-positive modulus! (" +
                                modulus.toHexString() + ")");
                }

                // 0 < modulus
                let basis: LI = this.cmp(modulus) < 0 ? this : this.mod(modulus);

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

                    const b: uli_t = basis.value;
                    const e: uli_t = exponent.value;
                    const m: uli_t = modulus.value;
                    const w: uli_t = uli_new_uli(m.length);

                    // 0 < b < m, 0 < e
                    // w.length = b.length = m.length

                    alg = LI.chooseModPowAlg(modulus, alg);
                    const ctxFactory: (m: uli_t) => ModPowCtx =
                          LI.getModPowCtxFactory(alg);

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
            egcd(other: LI): [LI, LI, LI] {
                const len: size_t = Math.max(this.length, other.length) + 1;

                const a: LI = LI.alloc(len);
                const b: LI = LI.alloc(len);
                const v: LI = LI.alloc(len);

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
            public modInv(modulus: LI): LI {
                const x: LI = this.mod(modulus);
                const abv: [LI, LI, LI] = x.egcd(modulus);
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
            public jacobi(modulus: LI): sign_t {
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
            public modSqrt(prime: LI): LI {
                const res: LI = LI.alloc(prime.length);
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
            slice(start: size_t, end: size_t): LI {
                const s: size_t = LI.typeCheckSize(start);
                const e: size_t = LI.typeCheckSize(end);
                if (s < e) {
                    const value: uli_t = uli_slice(this.value, s, e);
                    uli_normalize(value);
                    let sign: sign_t = this.sign;
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
            public toByteArray(len?: size_t): uint8_t[] {
                const bytes: uint8_t[] = to_uint8_array(this.twos());
                if (typeof len != "undefined") {
                    const l: size_t = LI.typeCheckSize(len);
                    if (l > bytes.length) {
                        const bl: size_t = bytes.length;
                        const mask: uint8_t = (bytes[bl - 1] & 0x80) == 0 ? 0 : 0xff;
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
            public toHexString(): string {
                return li_hex(this);
            }

            /**
             * Raises this integer to the given exponent.
             *
             * @param exponent - Non-negative exponent in [0,2^30-1].
             * @returns Power of this integer.
             */
            public pow(exponent: int32_t): LI {
                if (Number.isInteger(exponent) &&
                    0 <= exponent && exponent < (1 << 30)) {
                    let mask: word_t = 1 << 29;
                    while ((exponent & mask) == 0) {
                        mask >>>= 1;
                    }
                    let A: LI = LI.ONE;
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
            override toString(radix: int32_t = 10): string {
                const [sign, value]: [int32_t, int32_t[]] =
                      LIE.toRadix(this, radix);
                let s: string = sign < 0 ? "-" : "";
                let i: size_t = 0;
                while (i < value.length - 1 && value[i] == 0) {
                    i++;
                }
                while (i < value.length) {
                    s += value[i].toString(radix);
                    i++;
                }
                return s;
            }

            /**
             * Representation of zero.
             */
            static ZERO: LI = LI.create(0, [0]);

            /**
             * Representation of one.
             */
            static ONE: LI = LI.create(1, [1]);

            /**
             * Representation of two.
             */
            static TWO: LI = LI.create(1, [2]);
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

                const value: uli_t = new_uli(this.modulus.length);
                modpowprod(value, this.t, e, this.modulus.value, this.width);
                normalize(value);
                let sign: sign_t;

                if (iszero(value)) {
                    sign = 0;
                } else {
                    sign = 1;
                }
                return new LI(sign, value);
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
                this.sliceSize = divide((bitLength + width - 1), width);

                // Create radix element.
                const powerBasis: LI = LI.ONE.shiftLeft(this.sliceSize);

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
        export class BigInteger {

            /**
             * Underlying instance of verificatum.arithm.LI.
             */
            li: LI;

            /**
             * The BigInteger constant zero.
             */
            static ZERO: BigInteger = new BigInteger(LI.ZERO);

            /**
             * The BigInteger constant one.
             */
            static ONE: BigInteger = new BigInteger(LI.ONE);

            /**
             * The BigInteger constant ten.
             */
            static TEN: BigInteger = new BigInteger("0A", 16);

            /**
             * Default number of repetitions of Miller-Rabin primality test.
             */
            static MILLER_RABIN_REPS: size_t = 100;

            /**
             * Random source associated with this class.
             */
            static randomSource: RandomSource;

            /**
             * Initializes the random source of this instance. This has to be
             * set to use invoke isProbablePrime(), nextProbablePrime(), and
             * to use the constructor to generate a random prime.
             *
             * @param randomSource - Source of randomness.
             */
            static setRandomSource(randomSource: RandomSource): void {
                BigInteger.randomSource = randomSource;
            }

            /**
             * Create a BigInteger wrapper of an instance of LI.
             *
             * @param s - Instance of LI.
             */
            constructor(li: LI);

            /**
             * Creates a non-negative integer from a raw array of bytes in
             * two's complement big endian representation.
             *
             * @param rawbytes - Array of words representing an non-negative
             * integer.
             */
            constructor(val: uint8_t[]);

            /**
             * Converts a string in the given radix to an instance of LI. The
             * alphabet is defined by the JavaScript Number.parseInt() method
             * for radix in [2,36]. Use LIE.toRadix(), your own alphabet, and
             * LI for converting strings with larger radix. Negative integers
             * start with a minus character. Leading zeros are ignored. By
             * default strings are assumed to be decimal strings.
             *
             * @param val - String to convert.
             * @param radix - Integer radix in [2,36].
             * @returns Integer as a sign value pair.
             */
            constructor(val: string, radix?: radix_t);

            /**
             * Returns a random integer that is prime with probability at
             * least 1 - 2^certainty using Miller-Rabin primality test. The
             * static function setRandomSource() must be called before this
             * constructor.
             *
             * @param bitLength - Bit length of generated prime.
             * @param randomSource - Source of randomness.
             * @param certainty - Determines probability of accepting a composite.
             * @returns Random integer that is most likely prime.
             */
            constructor(bitLength: size_t, certainty: size_t,
                        randomSource: RandomSource);

            /**
             * Creates an integer from a sign and array of words. A zero array
             * of {@link WORDSIZE}-bit words throws an error if the sign is
             * incorrect relative the words.
             *
             * @param sign - Sign of the integer.
             * @param value - Array of words representing a non-negative
             * integer in big endian order.
             */
            constructor(signum: sign_t, magnitude: uint8_t[]);

            /**
             * Samples a random non-negative integer of the given nominal bit
             * length, i.e., additional leading bits may be zero by chance.
             *
             * @param bitLength - Number of randomly chosen bits in the
             * sampled integer.
             * @param randomSource - Source of randomness.
             */
            constructor(bitLength: size_t, randomSource: RandomSource);

            constructor(...args: any[]) {
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
             * Returns the underlying instance of LI.
             */
            public toLI(): LI {
                return this.li;
            }

            /**
             * Returns the sign of this integer.
             *
             * @returns Signum of this integer.
             */
            public signum(): sign_t {
                return this.li.sign;
            }

            /**
             * Returns the absolute value of this integer.
             *
             * @returns Absolute value of this integer.
             */
            public abs(): BigInteger {
                return new BigInteger(this.li.abs());
            }

            /**
             * Returns negative of this integer.
             *
             * @returns -this.
             */
            public negate(): BigInteger {
                return new BigInteger(this.li.neg());
            }

            /**
             * Computes sum of this integer and the input.
             *
             * @param term - Other integer.
             * @returns this + term.
             */
            public add(term: BigInteger): BigInteger {
                return new BigInteger(this.li.add(term.li));
            }

            /**
             * Computes difference of this integer and the input.
             *
             * @param term - Other integer.
             * @returns this - term.
             */
            public subtract(term: BigInteger): BigInteger {
                return new BigInteger(this.li.sub(term.li));
            }

            /**
             * Computes product of this integer and the input.
             *
             * @param factor - Other integer.
             * @returns this * term.
             */
            public multiply(factor: BigInteger): BigInteger {
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
            public divideAndRemainder(divisor: BigInteger): [BigInteger, BigInteger] {
                const [q, r]: [LI, LI] = this.li.divQR(divisor.li);
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
            public divide(divisor: BigInteger): BigInteger {
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
            public remainder(divisor: BigInteger): BigInteger {
                return new BigInteger(this.li.remainder(divisor.li));
            }

            /**
             * Computes integer remainder of this integer divided by
             * the input as a value in [0, modulus - 1].
             *
             * @param modulus - Positive modulus.
             * @returns Integer remainder.
             */
            public mod(modulus: BigInteger): BigInteger {
                return new BigInteger(this.li.mod(modulus.li));
            }

            /**
             * Raises this integer to the given exponent.
             *
             * @param exponent - Non-negative exponent.
             * @returns Power of this integer.
             */
            public pow(exponent: int32_t): BigInteger {
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
            public modInverse(modulus: BigInteger): BigInteger {
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
            public modPow(exponent: BigInteger, modulus: BigInteger): BigInteger {
                return new BigInteger(this.li.modPow(exponent.li, modulus.li));
            }

            /**
             * Computes greatest common divisor.
             *
             * @param other - Other integer.
             * @returns Greatest common divisor of this integer and the input.
             */
            public gcd(other: BigInteger): BigInteger {
                return new BigInteger(this.li.egcd(other.li)[2]);
            }

            /**
             * Returns true or false depending on if this integer is likely to
             * be a prime or not, determined using Miller-Rabins primality
             * test with the given number of
             * repetitions. BigInteger.setRandomSource must be called before
             * using this method.
             *
             * @param certainty - Repetitions of Miller-Rabins test.
             * @returns True or false depending on if this integer is likely to
             * be a prime or not.
             */
            public isProbablePrime(certainty: size_t): boolean;

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
            public isProbablePrime(certainty: size_t, randomSource: RandomSource):
            boolean;

            public isProbablePrime(certainty: size_t, randomSource?: RandomSource):
            boolean {
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
            public nextProbablePrime(): BigInteger {
                if (typeof BigInteger.randomSource != "undefined") {
                    let li: LI = this.li.abs();

                    // Next odd integer.
                    if (li.getBit(0) == 0) {
                        li = li.add(LI.ONE);
                    } else {
                        li = li.add(LI.TWO);
                    }

                    // Iterate through odd integers from this point.
                    while (!li.isProbablePrime(BigInteger.MILLER_RABIN_REPS,
                                               BigInteger.randomSource)) {
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
            public compareTo(other: BigInteger): sign_t {
                return this.li.cmp(other.li);
            }

            /**
             * Checks if this integer is equal to the input.
             *
             * @param other - Other integer.
             * @returns true if and only if this integer equals the input.
             */
            public equals(other: BigInteger): boolean {
                return this.li.equals(other.li);
            }

            /**
             * Returns the minimum of this integer and the input or this
             * integer if they are equal.
             *
             * @param other - Other integer.
             * @returns Minimum of this integer and the input.
             */
            public min(other: BigInteger): BigInteger {
                return this.li.cmp(other.li) > 0 ? other : this;
            }

            /**
             * Returns the maximum of this integer and the input or this
             * integer if they are equal.
             *
             * @param other - Other integer.
             * @returns Maximum of this integer and the input.
             */
            public max(other: BigInteger): BigInteger {
                return this.li.cmp(other.li) < 0 ? other : this;
            }

            /**
             * Returns the String representation of this BigInteger in the
             * given radix. If the radix is outside the range from
             * Character.MIN_RADIX to Character.MAX_RADIX (inclusive), it will
             * default to 10 (as is the case for Integer.toString). The
             * digit-to-character mapping provided by Character.forDigit is
             * used, and a minus sign is prepended if appropriate. (This
             * representation is compatible with the (String, int)
             * constructor.)
             *
             * @param radix - radix of the String representation.
             * @returns String representation of this BigInteger in the given
             * radix.
             * @see Integer.toString(int, int32_t), Character.forDigit(int, int32_t),
             * BigInteger(java.lang.String, int32_t)
             */
            public toString(radix: radix_t): string;

            /**
             * Returns a string representation of this integer in the given
             * radix. The default is decimal and the radix must be an integer
             * in [2, 36].
             *
             * @returns String representation of this integer.
             */
            public toString(radix: radix_t = 10): string {
                return this.li.toString(radix);
            }

            /**
             * Returns this integer in big endian two's complement
             * representation, i.e., the most significant byte appears last
             * and has a leading signum bit.
             *
             * @returns Byte array representation of this integer.
             */
            public toByteArray(): uint8_t[] {
                return this.toByteArray();
            }

            /**
             * Returns the 32 least significant bits of this integer in two's
             * complement.
             *
             * @returns The 32 least significant bits of this integer in two's
             */
            public intValue(): int32_t {
                return this.li.numberValue() & 0xffffffff;
            }

            /**
             * This integer as a 16-bit signed integer.
             *
             * @returns This integer as a 16-bit signed integer.
             */
            public shortValue(): int16_t {
                return this.li.numberValue() & 0xffff;
            }

            /**
             * This integer as a 32-bit signed integer represented as a
             * JavaScript number.
             *
             * @returns This integer as a 32-bit signed integer represented as a
             * JavaScript number.
             */
            public byteValue(): int8_t {
                return this.li.numberValue() & 0xff;
            }

            /**
             * Shifts this integer to the left. A negative offset shifts the
             * absolute value to the left.
             *
             * @param offset - Bit positions to shift.
             * @returns This integer shifted the given number of bits to the left.
             */
            public shiftLeft(offset: int32_t): BigInteger {
                return new BigInteger(this.li.shift(offset));
            }

            /**
             * Shifts this integer to the right. A negative offset shifts the
             * absolute value to the left.
             *
             * @param offset - Bit positions to shift.
             * @returns This integer shifted the given number of bits to the right.
             */
            public shiftRight(offset: int32_t): BigInteger {
                return new BigInteger(this.li.shift(-offset));
            }

            /**
             * Returns the bitwise AND of this integer and the input.
             *
             * @param other - Other integer.
             * @returns Bitwise AND of this integer and the input.
             */
            public and(other: BigInteger): BigInteger {
                return new BigInteger(this.li.and(other.li));
            }

            /**
             * Returns the bitwise OR of this integer and the input.
             *
             * @param other - Other integer.
             * @returns Bitwise OR of this integer and the input.
             */
            public or(other: BigInteger): BigInteger {
                return new BigInteger(this.li.or(other.li));
            }

            /**
             * Returns the bitwise XOR of this integer and the input.
             *
             * @param other - Other integer.
             * @returns Bitwise XOR of this integer and the input.
             */
            public xor(other: BigInteger): BigInteger {
                return new BigInteger(this.li.xor(other.li));
            }

            /**
             * Returns the bitwise complement of this integer.
             *
             * @param other - Other integer.
             * @returns Bitwise complement of this integer.
             */
            public not(): BigInteger {
                return new BigInteger(this.li.not());
            }

            /**
             * Syntactic sugar for this.and(other.not()).
             *
             * @param other - Other integer.
             * @returns Bitwise and of this integer and the complement of the
             * input.
             */
            public andNot(other: BigInteger): BigInteger {
                return this.and(other.not());
            }

            /**
             * Returns true if the bit is set and false otherwise.
             *
             * @param index Index of bit.
             * @returns The bit as a boolean.
             */
            public testBit(index: size_t): boolean {
                return this.li.getBit(index) == 1;
            }

            /**
             * Sets the bit at the given index.
             *
             * @parameter index - Index.
             */
            public setBit(index: size_t): BigInteger {
                return new BigInteger(this.li.setBit(index, 1));
            }

            /**
             * Clears the bit at the given index.
             *
             * @parameter index - Index.
             */
            public clearBit(index: size_t): BigInteger {
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
            public flipBit(index: size_t): BigInteger {
                return new BigInteger(this.li.flipBit(index));
            }

            /**
             * Returns the index of the least significant set bit or -1 if
             * this integer is zero.
             *
             * @returns Index of the least significant set bit or -1 if
             * this integer is zero
             */
            public getLowestSetBit(): size_t {
                return this.li.getLSB();
            }

            /**
             * Bit length of this integer in two's complement excluding sign
             * bit.
             *
             * @returns Bit length of this integer.
             */
            public bitLength(): size_t {
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
            public bitCount(): size_t {
                return this.li.bitCount();
            }

            /**
             * Clones this integer.
             *
             * @returns Clone of this integer.
             */
            public clone(): BigInteger {

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
            public modPowInt(exponent: int32_t, modulus: BigInteger): BigInteger {
                if (exponent >= 0) {
                    const e: LI = new LI(Number(exponent).toString(16), 16);
                    return new BigInteger(this.li.modPow(e, modulus.li));
                } else {
                    throw Error("Negative exponent! (" + exponent + ")");
                }
            }
        }
    }

}

