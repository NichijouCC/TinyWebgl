import { GLConstants } from "./GLConstant";
import { TypedArray } from "./type/type";

/**
 * Get the GL type for a typedArray
 */
export function getGLTypeForTypedArray(typedArray: ArrayBufferView): number
{
    if (typedArray instanceof Int8Array) { return GLConstants.BYTE; }
    if (typedArray instanceof Uint8Array) { return GLConstants.UNSIGNED_BYTE; }
    if (typedArray instanceof Uint8ClampedArray) { return GLConstants.UNSIGNED_BYTE; }
    if (typedArray instanceof Int16Array) { return GLConstants.SHORT; }
    if (typedArray instanceof Uint16Array) { return GLConstants.UNSIGNED_SHORT; }
    if (typedArray instanceof Int32Array) { return GLConstants.INT; }
    if (typedArray instanceof Uint32Array) { return GLConstants.UNSIGNED_INT; }
    if (typedArray instanceof Float32Array) { return GLConstants.FLOAT; }
    throw "unsupported typed array to gl type";
}


export function getArrayTypeForGLtype(glType: number)
{
    if (glType == GLConstants.BYTE) { return Int8Array; }
    if (glType == GLConstants.UNSIGNED_BYTE) { return Uint8Array; }
    if (glType == GLConstants.UNSIGNED_BYTE) { return Uint8ClampedArray; }
    if (glType == GLConstants.SHORT) { return Int16Array; }
    if (glType == GLConstants.UNSIGNED_SHORT) { return Uint16Array; }
    if (glType == GLConstants.INT) { return Int32Array; }
    if (glType == GLConstants.UNSIGNED_INT) { return Uint32Array; }
    if (glType == GLConstants.FLOAT) { return Float32Array; }
    throw "unsupported gltype to array type";
}

export function getbytesForGLtype(glType: number)
{
    switch (glType)
    {
        case GLConstants.BYTE: return 1;
        case GLConstants.UNSIGNED_BYTE: return 1;

        case GLConstants.SHORT: return 2;
        case GLConstants.UNSIGNED_SHORT_4_4_4_4: return 2;
        case GLConstants.UNSIGNED_SHORT: return 2;

        case GLConstants.INT: return 4;
        case GLConstants.UNSIGNED_INT: return 4;

        case GLConstants.HALF_FLOAT: return 2;
        case GLConstants.HALF_FLOAT_OES: return 2;
        case GLConstants.FLOAT: return 4;
        default:
            throw "unsupported gltype to bytesPerElement";
    }
}


export function getTypedArray(data: number | Array<number>, gltype: number): TypedArray
{
    let type = typeof data;
    if (type == "number")
    {
        let type = getArrayTypeForGLtype(gltype);
        return new type(data as number);
    }
    else if (data instanceof Array)
    {
        let type = getArrayTypeForGLtype(gltype);
        return new type(data);
    }
    return null;
}
