import { GlConstants } from "./GLConstant";
import { getGLTypeForTypedArray } from "./Helper";
import { ItextureInfo, ItexViewDataInfo, ItexImageDataInfo } from "./type";

export function createTextureFromTypedArray(gl: WebGLRenderingContext, data: ArrayBufferView, texOP: ItexViewDataInfo) {
    deduceTextureTypedArrayOption(gl, data, texOP);
    let tex = gl.createTexture();
    gl.bindTexture(texOP.target, tex);
    gl.texParameteri(texOP.target, gl.TEXTURE_MAG_FILTER, texOP.filterMax);
    gl.texParameteri(texOP.target, gl.TEXTURE_MIN_FILTER, texOP.filterMin);
    gl.texParameteri(texOP.target, gl.TEXTURE_WRAP_S, texOP.wrapS);
    gl.texParameteri(texOP.target, gl.TEXTURE_WRAP_T, texOP.wrapT);

    gl.texImage2D(
        texOP.target,
        0,
        texOP.pixelFormat,
        texOP.width,
        texOP.height,
        0,
        texOP.pixelFormat,
        texOP.pixelDatatype,
        data,
    );
}

export function createTextureFromImageSource(
    gl: WebGLRenderingContext,
    data: TexImageSource,
    texOP?: ItexImageDataInfo,
): WebGLTexture {
    texOP = texOP != null ? texOP : {};
    deduceTextureimgSourceOption(gl, data, texOP);
    let tex = gl.createTexture();
    gl.bindTexture(texOP.target, tex);
    gl.texParameteri(texOP.target, gl.TEXTURE_MAG_FILTER, texOP.filterMax);
    gl.texParameteri(texOP.target, gl.TEXTURE_MIN_FILTER, texOP.filterMin);
    gl.texParameteri(texOP.target, gl.TEXTURE_WRAP_S, texOP.wrapS);
    gl.texParameteri(texOP.target, gl.TEXTURE_WRAP_T, texOP.wrapT);

    gl.texImage2D(texOP.target, 0, texOP.pixelFormat, texOP.pixelFormat, texOP.pixelDatatype, data);

    return tex;
}

function dedeuceBaseTextureOption(gl: WebGLRenderingContext, texOP: ItextureInfo) {
    texOP.target = texOP.target ? texOP.target : GlConstants.TEXTURE_2D;
    // texOP.wrap_s = texOP.wrap_s ? texOP.wrap_s : GLConstants.CLAMP_TO_EDGE;
    // texOP.wrap_t = texOP.wrap_t ? texOP.wrap_t : GLConstants.CLAMP_TO_EDGE;
    texOP.pixelFormat = texOP.pixelFormat ? texOP.pixelFormat : GlConstants.RGBA;

    if (texOP.enableMipMap && canGenerateMipmap(gl, texOP.width, texOP.height)) {
        texOP.enableMipMap = true;
    } else {
        texOP.enableMipMap = false;
    }

    if (texOP.filterMax == null) {
        texOP.filterMax = texOP.enableMipMap ? GlConstants.LINEAR_MIPMAP_LINEAR : GlConstants.LINEAR;
    }
    if (texOP.filterMin == null) {
        texOP.filterMin = texOP.enableMipMap ? GlConstants.LINEAR_MIPMAP_LINEAR : GlConstants.LINEAR;
    }

    if (texOP.wrapS == null) {
        texOP.wrapS = canWrapReapeat(gl, texOP.width, texOP.height) ? GlConstants.REPEAT : GlConstants.CLAMP_TO_EDGE;
    }
    if (texOP.wrapT == null) {
        texOP.wrapT = canWrapReapeat(gl, texOP.width, texOP.height) ? GlConstants.REPEAT : GlConstants.CLAMP_TO_EDGE;
    }
}

export function deduceTextureTypedArrayOption(
    gl: WebGLRenderingContext,
    data: ArrayBufferView,
    texOP: ItexViewDataInfo,
) {
    dedeuceBaseTextureOption(gl, texOP);

    if (texOP.pixelDatatype == null) {
        texOP.pixelDatatype = getGLTypeForTypedArray(data);
    }
}

export function deduceTextureimgSourceOption(
    gl: WebGLRenderingContext,
    data: TexImageSource,
    texOP: ItexImageDataInfo,
) {
    texOP.width = data.width;
    texOP.height = data.height;
    dedeuceBaseTextureOption(gl, texOP);
    if (texOP.pixelDatatype == null) {
        texOP.pixelDatatype = GlConstants.UNSIGNED_BYTE;
    }
}

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
