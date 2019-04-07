import { GLConstants } from "./GLConstant";
import { getGLTypeForTypedArray } from "./Helper";
import { ITextureInfo, ITexViewDataInfo, ITexHtmlDataInfo } from "./type";


export function createTextureFromTypedArray(gl: WebGLRenderingContext, data: ArrayBufferView, texOP: ITexViewDataInfo)
{
    deduceTextureTypedArrayOption(gl, data, texOP);
    let tex = gl.createTexture();
    gl.bindTexture(texOP.target, tex);
    gl.texParameteri(texOP.target, gl.TEXTURE_MAG_FILTER, texOP.filter_max);
    gl.texParameteri(texOP.target, gl.TEXTURE_MIN_FILTER, texOP.filter_min);
    gl.texParameteri(texOP.target, gl.TEXTURE_WRAP_S, texOP.wrap_s);
    gl.texParameteri(texOP.target, gl.TEXTURE_WRAP_T, texOP.wrap_t);

    gl.texImage2D(texOP.target, 0, texOP.pixelFormat, texOP.width, texOP.height, 0, texOP.pixelFormat, texOP.pixelDatatype, data);
}

export function createTextureFromHtml(gl: WebGLRenderingContext, data: HTMLImageElement | HTMLCanvasElement, texOP?: ITexHtmlDataInfo): WebGLTexture
{
    texOP = texOP != null ? texOP : {};
    deduceTextureHtmlOption(gl, data, texOP);
    let tex = gl.createTexture();
    gl.bindTexture(texOP.target, tex);
    gl.texParameteri(texOP.target, gl.TEXTURE_MAG_FILTER, texOP.filter_max);
    gl.texParameteri(texOP.target, gl.TEXTURE_MIN_FILTER, texOP.filter_min);
    gl.texParameteri(texOP.target, gl.TEXTURE_WRAP_S, texOP.wrap_s);
    gl.texParameteri(texOP.target, gl.TEXTURE_WRAP_T, texOP.wrap_t);

    gl.texImage2D(texOP.target, 0, texOP.pixelFormat, texOP.pixelFormat, texOP.pixelDatatype, data);

    return tex;
}

function dedeuceBaseTextureOption(gl: WebGLRenderingContext, texOP: ITextureInfo)
{
    texOP.target = texOP.target ? texOP.target : GLConstants.TEXTURE_2D;
    // texOP.wrap_s = texOP.wrap_s ? texOP.wrap_s : GLConstants.CLAMP_TO_EDGE;
    // texOP.wrap_t = texOP.wrap_t ? texOP.wrap_t : GLConstants.CLAMP_TO_EDGE;
    texOP.pixelFormat = texOP.pixelFormat ? texOP.pixelFormat : GLConstants.RGBA;

    if (texOP.enableMipMap && canGenerateMipmap(gl, texOP.width, texOP.height))
    {
        texOP.enableMipMap = true;
    } else
    {
        texOP.enableMipMap = false;
    }

    if (texOP.filter_max == null)
    {
        texOP.filter_max = texOP.enableMipMap ? GLConstants.LINEAR_MIPMAP_LINEAR : GLConstants.LINEAR
    }
    if (texOP.filter_min == null)
    {
        texOP.filter_min = texOP.enableMipMap ? GLConstants.LINEAR_MIPMAP_LINEAR : GLConstants.LINEAR;
    }

    if (texOP.wrap_s == null)
    {
        texOP.wrap_s = canWrap_reapeat(gl, texOP.width, texOP.height) ? GLConstants.REPEAT : GLConstants.CLAMP_TO_EDGE;
    }
    if (texOP.wrap_t == null)
    {
        texOP.wrap_t = canWrap_reapeat(gl, texOP.width, texOP.height) ? GLConstants.REPEAT : GLConstants.CLAMP_TO_EDGE;
    }
}


export function deduceTextureTypedArrayOption(gl: WebGLRenderingContext, data: ArrayBufferView, texOP: ITexViewDataInfo)
{
    dedeuceBaseTextureOption(gl, texOP);

    if (texOP.pixelDatatype == null)
    {
        texOP.pixelDatatype = getGLTypeForTypedArray(data);
    }
}

export function deduceTextureHtmlOption(gl: WebGLRenderingContext, data: HTMLImageElement | HTMLCanvasElement, texOP: ITexHtmlDataInfo)
{
    texOP.width = data.width;
    texOP.height = data.height;
    dedeuceBaseTextureOption(gl, texOP);
    if (texOP.pixelDatatype == null)
    {
        texOP.pixelDatatype = GLConstants.UNSIGNED_BYTE;
    }
}



function isPowerOf2(value)
{
    return (value & (value - 1)) === 0;
}

function canGenerateMipmap(gl: WebGLRenderingContext, width: number, height: number)
{
    if (!gl.beWebgl2)
    {
        return isPowerOf2(width) && isPowerOf2(height);
    }
    return true;
}

function canWrap_reapeat(gl: WebGLRenderingContext, width: number, height: number)
{
    if (!gl.beWebgl2)
    {
        return isPowerOf2(width) && isPowerOf2(height);
    }
    return true;
}