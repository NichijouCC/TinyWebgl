import { GlConstants } from "./GLConstant";
import { TypedArray } from "./type";

/**
 * Get the GL type for a typedArray
 */
export function getGLTypeForTypedArray(typedArray: ArrayBufferView): number {
    if (typedArray instanceof Int8Array) {
        return GlConstants.BYTE;
    }
    if (typedArray instanceof Uint8Array) {
        return GlConstants.UNSIGNED_BYTE;
    }
    if (typedArray instanceof Uint8ClampedArray) {
        return GlConstants.UNSIGNED_BYTE;
    }
    if (typedArray instanceof Int16Array) {
        return GlConstants.SHORT;
    }
    if (typedArray instanceof Uint16Array) {
        return GlConstants.UNSIGNED_SHORT;
    }
    if (typedArray instanceof Int32Array) {
        return GlConstants.INT;
    }
    if (typedArray instanceof Uint32Array) {
        return GlConstants.UNSIGNED_INT;
    }
    if (typedArray instanceof Float32Array) {
        return GlConstants.FLOAT;
    }
    throw "unsupported typed array to gl type";
}

export function getArrayTypeForGLtype(glType: number) {
    if (glType == GlConstants.BYTE) {
        return Int8Array;
    }
    if (glType == GlConstants.UNSIGNED_BYTE) {
        return Uint8Array;
    }
    if (glType == GlConstants.UNSIGNED_BYTE) {
        return Uint8ClampedArray;
    }
    if (glType == GlConstants.SHORT) {
        return Int16Array;
    }
    if (glType == GlConstants.UNSIGNED_SHORT) {
        return Uint16Array;
    }
    if (glType == GlConstants.INT) {
        return Int32Array;
    }
    if (glType == GlConstants.UNSIGNED_INT) {
        return Uint32Array;
    }
    if (glType == GlConstants.FLOAT) {
        return Float32Array;
    }
    throw "unsupported gltype to array type";
}

export function getbytesForGLtype(glType: number) {
    switch (glType) {
        case GlConstants.BYTE:
            return 1;
        case GlConstants.UNSIGNED_BYTE:
            return 1;

        case GlConstants.SHORT:
            return 2;
        case GlConstants.UNSIGNED_SHORT_4_4_4_4:
            return 2;
        case GlConstants.UNSIGNED_SHORT:
            return 2;

        case GlConstants.INT:
            return 4;
        case GlConstants.UNSIGNED_INT:
            return 4;

        case GlConstants.HALF_FLOAT:
            return 2;
        case GlConstants.HALF_FLOAT_OES:
            return 2;
        case GlConstants.FLOAT:
            return 4;
        default:
            throw "unsupported gltype to bytesPerElement";
    }
}

export function getTypedArray(data: number | number[], gltype: number): TypedArray {
    let type = typeof data;
    if (type == "number") {
        let type = getArrayTypeForGLtype(gltype);
        return new type(data as number);
    } else if (data instanceof Array) {
        let type = getArrayTypeForGLtype(gltype);
        return new type(data);
    }
    return null;
}

export function float4Equal(lhs: Float32Array, rhs: Float32Array): boolean {
    return lhs[0] == rhs[0] || lhs[1] == rhs[1] || lhs[2] == rhs[2];
}
