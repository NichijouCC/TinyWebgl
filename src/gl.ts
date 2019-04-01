import { VertexAttrib } from "./attribute";
import { ArrayInfoType } from "./type/type";
import { MeshInfo } from "./meshInfo";
import { VertexIndex } from "./index";

type contextAtts = { premultipliedAlpha?: boolean, alpha?: boolean, stencil?: boolean };
type glRobotOps = { context?: string, contextAtts?: contextAtts, extentions?: string[] };

declare global
{
    interface WebGLVertexArrayObject extends WebGLObject
    {
    }

    interface WebGLRenderingContext
    {
        beWebgl2: boolean;
        addExtension(extName: string);
        createVertexArray(): any;
        bindVertexArray(vao?: WebGLVertexArrayObject | null): void;
        deleteVertexArray(vao: WebGLVertexArrayObject): void;
    }
}

WebGLRenderingContext.prototype.addExtension = function (extname: string)
{
    let ext = this.getExtension(extname);
    if (ext)
    {
        switch (extname)
        {
            case "OES_vertex_array_object":
                this.bindVertexArray = ext.bindVertexArrayOES.bind(ext);
                this.createVertexArray = ext.createVertexArrayOES.bind(ext);
                this.deleteVertexArray = ext.deleteVertexArrayOES.bind(ext);
                break;
            default:
                console.warn("还未处理");
                break;
        }
    }
};


export function initContext(canvas: HTMLCanvasElement, options: glRobotOps = {}): WebGLRenderingContext
{
    let type = options.context || "webgl";
    let gl = <WebGLRenderingContext>canvas.getContext(type, options.contextAtts);
    gl.beWebgl2 = (type == "webgl2");

    if (options.extentions != null)
    {
        options.extentions.forEach((ext) =>
        {
            gl.addExtension(ext);
        });
    }
    return gl;

}
type attribsOps = { position?: ArrayInfoType, uv?: ArrayInfoType, color?: ArrayInfoType };
export function creatBufferInfoFromArray(gl: WebGLRenderingContext, arrs: { [keyName: string]: ArrayInfoType })
{
    let meshinfo = new MeshInfo();
    meshinfo.atts = {};

    Object.keys(arrs).forEach((attName) =>
    {
        let attInfo = arrs[attName];
        if (attName == "indices")
        {
            meshinfo.indices = new VertexIndex(gl, attInfo);
        } else
        {
            meshinfo.atts[attName] = new VertexAttrib(gl, attName, attInfo);
        }
    })
}

export function createAttribsFromArrays(gl: WebGLRenderingContext, arrs: { [attName: string]: ArrayInfoType })
{
    let atts: { [key: string]: VertexAttrib } = {};
    Object.keys(arrs).forEach((attName) =>
    {
        if (attName != "indices")
        {
            let attInfo = arrs[attName];
            atts[attName] = new VertexAttrib(gl, attName, attInfo);
        }
    })
}