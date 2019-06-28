import { GlConstants } from "./GLConstant";
import { getGLTypeForTypedArray } from "./Helper";
import { ItexViewDataOption, ItexImageDataOption, ItextureInfo } from "./type";

export function createTextureFromTypedArray(gl: WebGLRenderingContext, data: ArrayBufferView, texOP: ItexViewDataOption):ItextureInfo {
    // deduceTextureTypedArrayOption(gl, data, texOP);

    let target=texOP&&texOP.target||gl.TEXTURE_2D;
    let pixelFormat=texOP&&texOP.pixelFormat||gl.RGBA;
    let pixelDatatype=texOP&&texOP.pixelDatatype||gl.UNSIGNED_BYTE;
    let filterMax=texOP&&texOP.filterMax||gl.LINEAR;
    let filterMin=texOP&&texOP.filterMin||gl.LINEAR;
    let wrapS=texOP&&texOP.wrapS||gl.CLAMP_TO_EDGE;
    let wrapT=texOP&&texOP.wrapT||gl.CLAMP_TO_EDGE;

    let tex = gl.createTexture();
    gl.bindTexture(target, tex);
    gl.texParameteri(target, gl.TEXTURE_MAG_FILTER, filterMax);
    gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, filterMin);
    gl.texParameteri(target, gl.TEXTURE_WRAP_S, wrapS);
    gl.texParameteri(target, gl.TEXTURE_WRAP_T, wrapT);

    gl.texImage2D(
        target,
        0,
        pixelFormat,
        texOP.width,
        texOP.height,
        0,
        pixelFormat,
        pixelDatatype,
        data,
    );
    return {
        texture:tex,
        texDes:{...texOP,
                    target:target,
                    pixelFormat:pixelFormat,
                    pixelDatatype:pixelDatatype,
                    filterMin:filterMin,
                    filterMax:filterMax,
                    wrapS:wrapS,
                    wrapT:wrapT
                    }
            };}


export function createTextureFromImageSource(
    gl: WebGLRenderingContext,
    data: TexImageSource,
    texOP?: ItexImageDataOption,
): ItextureInfo{
    let tex = gl.createTexture();

    let target=texOP&&texOP.target||gl.TEXTURE_2D;
    let pixelFormat=texOP&&texOP.pixelFormat||gl.RGBA;
    let pixelDatatype=texOP&&texOP.pixelDatatype||gl.UNSIGNED_BYTE;

    let filterMax=texOP&&texOP.filterMax||gl.LINEAR;
    let filterMin=texOP&&texOP.filterMin||gl.LINEAR;
    let wrapS=texOP&&texOP.wrapS||gl.CLAMP_TO_EDGE;
    let wrapT=texOP&&texOP.wrapT||gl.CLAMP_TO_EDGE;

    gl.bindTexture(target, tex);
    gl.texParameteri(target, gl.TEXTURE_MAG_FILTER,texOP&&texOP.filterMax||gl.LINEAR);
    gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, texOP&&texOP.filterMin||gl.LINEAR);
    gl.texParameteri(target, gl.TEXTURE_WRAP_S, texOP&&texOP.wrapS||gl.CLAMP_TO_EDGE);
    gl.texParameteri(target, gl.TEXTURE_WRAP_T, texOP&&texOP.wrapT||gl.CLAMP_TO_EDGE);

    gl.texImage2D(target, 0,pixelFormat, pixelFormat, pixelDatatype, data);

    return {
        texture:tex,
        texDes:{...texOP,
                    target:target,
                    pixelFormat:pixelFormat,
                    pixelDatatype:pixelDatatype,
                    filterMin:filterMin,
                    filterMax:filterMax,
                    wrapS:wrapS,
                    wrapT:wrapT
                    }
            };}

function isPowerOf2(value: number) {
    return (value & (value - 1)) === 0;
}

function canGenerateMipmap(gl: WebGLRenderingContext, width: number, height: number) {
    if (!gl.beWebgl2) {
        return isPowerOf2(width) && isPowerOf2(height);
    }
    return true;
}

function canWrapReapeat(gl: WebGLRenderingContext, width: number, height: number) {
    if (!gl.beWebgl2) {
        return isPowerOf2(width) && isPowerOf2(height);
    }
    return true;
}
