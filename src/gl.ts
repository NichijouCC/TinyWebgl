import { IcontextOptions, IGeometryInfo, IBassProgramInfo, IProgramState } from "./type/type";

declare global
{
    interface WebGLVertexArrayObject extends WebGLObject
    {
    }

    interface WebGLRenderingContext
    {
        __defineSetter__(arg0: string, arg1: (val: any) => void): any;
        __defineGetter__(arg0: string, arg1: (val: any) => void): any;
        beWebgl2: any;
        addExtension(extName: string);
        createVertexArray(): any;
        bindVertexArray(vao?: WebGLVertexArrayObject | null): void;
        deleteVertexArray(vao: WebGLVertexArrayObject): void;

        vertexAttribDivisor(index: number, divisor: number): void;
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

WebGLRenderingContext.prototype.__defineGetter__("beWebgl2", function ()
{
    if (this._bewebgl2 == null)
    {
        let version = this.getParameter(this.VERSION);
        this._bewebgl2 = version.indexOf("WebGL 2.0") === 0;
        return this._bewebgl2;
    }
    return this._bewebgl2;
});
WebGLRenderingContext.prototype.__defineSetter__("beWebgl2", function (val)
{
    this._bewebgl2 = val;
});

export function initContext(canvas: HTMLCanvasElement, options: IcontextOptions = {}): WebGLRenderingContext
{
    let type = options.context || "webgl";
    let gl = <WebGLRenderingContext>canvas.getContext(type, options.contextAtts);
    // gl.beWebgl2 = (type == "webgl2");
    if (options.extentions != null)
    {
        options.extentions.forEach((ext) =>
        {
            gl.addExtension(ext);
        });
    }

    // canvas.addEventListener('webglcontextlost', function (e)
    // {
    //     console.log(e);
    // }, false);

    return gl;

}

export function setBuffersAndAttributes(gl: WebGLRenderingContext, geometry: IGeometryInfo, program: IBassProgramInfo)
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
