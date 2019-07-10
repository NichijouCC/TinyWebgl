import { createTextureFromTypedArray } from "./Texture";
import { setViewPortWithCached } from "./state";
import { ItextureInfo } from "./Type";

export interface IfboOption {
    width?: number;
    height?: number;
    /**
     * default =true
     */
    enableDepth?: boolean;
    /**
     * default =true
     */
    enableStencil?: boolean;
}

type IfboAttachment = ItexAttachment | IrenderBufferAttachment;

export interface ItexAttachment {
    layer?: number;
    level?: number;
    texTarget?: number;

    attachment?: any;
    format: number;
    filterMax?: number;
    filterMin?: number;
    wrapS?: number;
    wrapT?: number;
}

export interface IrenderBufferAttachment {
    attachment?: any;
    format: number;
}

/* PixelFormat */
const RGBA = 0x1908;

/* Framebuffer Object. */
const RGBA4 = 0x8056;
const RGB5_A1 = 0x8057;
const RGB565 = 0x8d62;
const COLOR_ATTACHMENT0 = 0x8ce0;

const DEPTH_COMPONENT = 0x1902;
const DEPTH_COMPONENT16 = 0x81a5;
const STENCIL_INDEX = 0x1901;
const STENCIL_INDEX8 = 0x8d48;
const DEPTH_STENCIL = 0x84f9;

const DEPTH_ATTACHMENT = 0x8d00;
const STENCIL_ATTACHMENT = 0x8d20;
const DEPTH_STENCIL_ATTACHMENT = 0x821a;

const attachmentsByFormat: { [fromat: number]: number } = {};
{
    attachmentsByFormat[DEPTH_COMPONENT] = DEPTH_ATTACHMENT;
    attachmentsByFormat[DEPTH_COMPONENT16] = DEPTH_ATTACHMENT;
    attachmentsByFormat[STENCIL_INDEX] = STENCIL_ATTACHMENT;
    attachmentsByFormat[STENCIL_INDEX8] = STENCIL_ATTACHMENT;
    attachmentsByFormat[DEPTH_STENCIL] = DEPTH_STENCIL_ATTACHMENT;
}
function getAttachmentPointByFormat(format: number) {
    return attachmentsByFormat[format];
}
const renderbufferFormats: { [format: number]: boolean } = {};
{
    renderbufferFormats[RGBA4] = true;
    renderbufferFormats[RGB5_A1] = true;
    renderbufferFormats[RGB565] = true;
    renderbufferFormats[DEPTH_STENCIL] = true;
    renderbufferFormats[DEPTH_COMPONENT16] = true;
    renderbufferFormats[STENCIL_INDEX] = true;
    renderbufferFormats[STENCIL_INDEX8] = true;
}
function isRenderbufferFormat(format: number) {
    return renderbufferFormats[format];
}

export interface IfboInfo {
    framebuffer: WebGLFramebuffer;
    // attachments: any[];
    width: number;
    height: number;

    depthStencil?: WebGLRenderbuffer;
    depth?: WebGLRenderbuffer;
    textureInfo: ItextureInfo;
}
/**
 * [WebGL1 only guarantees 3 combinations of attachments work](https://www.khronos.org/registry/webgl/specs/latest/1.0/#6.6).
 * https://webglfundamentals.org/webgl/lessons/webgl-render-to-texture.html
 *
 *
 * @param gl
 * @param op
 */
export function createFboInfo(gl: WebGLRenderingContext, op: IfboOption): IfboInfo {
    let fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    let width = op.width || gl.drawingBufferWidth;
    let height = op.height || gl.drawingBufferHeight;

    let texinfo = createTextureFromTypedArray(gl, {
        width: width,
        height: height,
        viewData: null,
        pixelFormat: gl.RGBA,
        wrapS: gl.CLAMP_TO_EDGE,
        wrapT: gl.CLAMP_TO_EDGE,
        filterMin: gl.LINEAR,
        filterMax: gl.LINEAR,
    });
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texinfo.texture, 0);
    let fboInfo: IfboInfo = {
        framebuffer: fbo,
        width: width,
        height: height,
        textureInfo: texinfo,
    };
    if (op.enableDepth && op.enableStencil) {
        let attachment = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, attachment);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width, height);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, attachment);
    } else if (op.enableDepth) {
        let attachment = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, attachment);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, attachment);
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return fboInfo;
}

export function setFboInfoWithCached(gl: WebGLRenderingContext, fbo: IfboInfo) {
    if (gl._cachedFrameBuffer != fbo) {
        if (fbo == null) {
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        } else {
            gl.bindFramebuffer(gl.FRAMEBUFFER, fbo.framebuffer);
            setViewPortWithCached(gl, 0, 0, fbo.width, fbo.height);
        }
        gl._cachedFrameBuffer = fbo;
    }
}

export function setFboInfo(gl: WebGLRenderingContext, fbo: IfboInfo) {
    if (fbo == null) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    } else {
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo.framebuffer);
        setViewPortWithCached(gl, 0, 0, fbo.width, fbo.height);
    }
}
