import { IcontextOptions, IGeometryInfo, IProgramInfo } from "./type/type";

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


export function initContext(canvas: HTMLCanvasElement, options: IcontextOptions = {}): WebGLRenderingContext
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


export function setBuffersAndAttributes(gl: WebGLRenderingContext, geometry: IGeometryInfo, program: IProgramInfo)
{
    for (let attName in program.attsDic)
    {
        program.attsDic[attName].setter(geometry.atts[attName]);
    }
    if (geometry.indices)
    {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geometry.indices.buffer);
    }
}

export function drawBufferInfo(gl: WebGLRenderingContext, geometry: IGeometryInfo, instanceCount?: number): void
{
    if (geometry.indices != null)
    {
        gl.drawElements(geometry.mode, geometry.count, geometry.indices.componentDataType, geometry.offset);
    } else
    {
        gl.drawArrays(geometry.mode, geometry.offset, geometry.count);
    }
}


