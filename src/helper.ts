import { GLConstants } from "./glconstant";

/**
 * Get the GL type for a typedArray
 */
export function getGLTypeForTypedArray(typedArray): number
{
    if (typedArray instanceof Int8Array) { return GLConstants.BYTE; }
    if (typedArray instanceof Uint8Array) { return GLConstants.UNSIGNED_BYTE; }
    if (typedArray instanceof Uint8ClampedArray) { return GLConstants.UNSIGNED_BYTE; }
    if (typedArray instanceof Int16Array) { return GLConstants.SHORT; }
    if (typedArray instanceof Uint16Array) { return GLConstants.UNSIGNED_SHORT; }
    if (typedArray instanceof Int32Array) { return GLConstants.INT; }
    if (typedArray instanceof Uint32Array) { return GLConstants.UNSIGNED_INT; }
    if (typedArray instanceof Float32Array) { return GLConstants.FLOAT; }
    throw "unsupported typed array type";
}