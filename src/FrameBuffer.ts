import { createTextureFromTypedArray } from "./Texture";

export interface IfboOption {
    width?: number;
    height?: number;
    attachments?: IfboAttachment[];
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
    attachments: any[];
    width: number;
    height: number;
}
/**
 * [WebGL1 only guarantees 3 combinations of attachments work](https://www.khronos.org/registry/webgl/specs/latest/1.0/#6.6).
 *
 * @param gl
 * @param op
 */
export function createFboInfo(gl: WebGLRenderingContext, op: IfboOption): IfboInfo {
    let fbo = gl.createFramebuffer();
    let width = op.width || gl.drawingBufferWidth;
    let height = op.height || gl.drawingBufferHeight;
    let colorAttachmentCount = 0;

    let fboInfo: IfboInfo = {
        framebuffer: fbo,
        width: width,
        height: height,
        attachments: [],
    };
    op.attachments.forEach(item => {
        //------------------attachment color/depth/stencil
        let attachmentPoint = getAttachmentPointByFormat(item.format);
        if (!attachmentPoint) {
            attachmentPoint = COLOR_ATTACHMENT0 + colorAttachmentCount++;
        }
        //------------------纹理、renderbuffer
        let attachment = item.attachment;
        if (!attachment) {
            if (isRenderbufferFormat(item.format)) {
                attachment = gl.createRenderbuffer();
                gl.bindRenderbuffer(gl.RENDERBUFFER, item);
                gl.renderbufferStorage(gl.RENDERBUFFER, item.format, width, height);
                fboInfo.attachments.push({ format: item.format, target: attachment, beRenderBuffer: true });
            } else {
                let op = item as ItexAttachment;
                let texinfo = createTextureFromTypedArray(gl, {
                    width: width,
                    height: height,
                    viewData: null,
                    pixelFormat: item.format || gl.RGBA,
                    wrapS: op.wrapS || gl.CLAMP_TO_EDGE,
                    wrapT: op.wrapT || gl.CLAMP_TO_EDGE,
                    filterMin: op.filterMin || gl.LINEAR,
                    filterMax: op.filterMax || gl.LINEAR,
                });
                attachment = texinfo.texture;
                fboInfo.attachments.push({ ...texinfo, beRenderBuffer: false });
            }
        }
        if (attachment instanceof WebGLRenderbuffer) {
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, attachmentPoint, gl.RENDERBUFFER, attachment);
        } else if (attachment instanceof WebGLTexture) {
            let op = item as ItexAttachment;
            gl.framebufferTexture2D(
                gl.FRAMEBUFFER,
                attachmentPoint,
                op.texTarget || gl.TEXTURE_2D,
                attachment,
                op.level || 0,
            );
        }
    });
    return fboInfo;
}

export function setFboInfo(gl: WebGLRenderingContext, fbo: IfboInfo) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo.framebuffer);
}
