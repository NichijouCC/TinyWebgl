import { IcontextOptions, IgeometryInfo, IprogramInfo, Iobject } from "./type";
import { setGeometry } from "./geometryInfo";
import { setProgram } from "./programInfo";

WebGLRenderingContext.prototype.addExtension = function(extname: string): boolean {
    let ext = this.getExtension(extname);
    if (ext) {
        switch (extname) {
            case "OES_vertex_array_object":
                this.bindVertexArray = ext.bindVertexArrayOES.bind(ext);
                this.createVertexArray = ext.createVertexArrayOES.bind(ext);
                this.deleteVertexArray = ext.deleteVertexArrayOES.bind(ext);
                this.beActiveVao = true;
                return true;
            case "ANGLE_instanced_arrays":
                this.vertexAttribDivisor = ext.vertexAttribDivisorANGLE.bind(ext);
                this.drawElementsInstanced = ext.drawElementsInstancedANGLE.bind(ext);
                this.drawArraysInstanced = ext.drawArraysInstancedANGLE.bind(ext);
                this.beActiveInstance = true;
                return true;

            default:
                console.warn("Not handle in addExtension, type: " + extname);
                return false;
        }
    }
    return false;
};

Object.defineProperty(WebGLRenderingContext, "beWebgl2", {
    get: function() {
        if (this.beWebgl2 == null) {
            let version = this.getParameter(this.VERSION);
            this.beWebgl2 = version.indexOf("WebGL 2.0") === 0;
        }
        return this._beWebgl2;
    },
    set: function(value: boolean) {
        this._beWebgl2 = value;
    },
});

export function setUpWebgl(canvas: HTMLCanvasElement, options: IcontextOptions = {}): WebGLRenderingContext {
    let type = options.context || "webgl";
    let gl = canvas.getContext(type, options.contextAtts) as WebGLRenderingContext;
    if (options.extentions != null) {
        options.extentions.forEach(ext => {
            gl.addExtension(ext);
        });
    }
    if (type == "webgl2") {
        gl.beActiveInstance = true;
        gl.beActiveVao = true;
    }

    // canvas.addEventListener('webglcontextlost', function (e)
    // {
    //     console.log(e);
    // }, false);

    return gl;
}

export function setGeometryAndProgram(gl: WebGLRenderingContext, geometry: IgeometryInfo, program: IprogramInfo) {
    setProgram(gl, program);
    setGeometry(gl, geometry, program);
}

export function drawBufferInfo(gl: WebGLRenderingContext, geometry: IgeometryInfo, instanceCount?: number): void {
    if (geometry.indices != null) {
        if (instanceCount != null) {
            gl.drawElementsInstanced(
                geometry.primitiveType,
                geometry.count,
                geometry.indices.componentDataType,
                geometry.offset || 0,
                instanceCount,
            );
        } else {
            gl.drawElements(
                geometry.primitiveType,
                geometry.count,
                geometry.indices.componentDataType,
                geometry.offset || 0,
            );
        }
    } else {
        if (instanceCount != null) {
            gl.drawArraysInstanced(geometry.primitiveType, geometry.offset || 0, geometry.count, instanceCount);
        } else {
            gl.drawArrays(geometry.primitiveType, geometry.offset || 0, geometry.count);
        }
    }
}

export function drawObject(gl: WebGLRenderingContext, obj: Iobject, instanceCount?: number) {
    setProgram(gl, obj.program);
    let beUseVao = obj.geometry.vao != null;
    if (beUseVao) {
        gl.bindVertexArray(obj.geometry.vao);
    } else {
        setGeometry(gl, obj.geometry, obj.program);
    }
    drawBufferInfo(gl, obj.geometry, instanceCount);
    {
        // end draw
        if (beUseVao) {
            gl.bindVertexArray(null);
        }
    }
}
//------------program和vao是一一对应的，geometry可以有多个vao
/**
 * 创建vao将geometry和program绑定
 */
export function createVaoByPrograme(
    gl: WebGLRenderingContext,
    program: IprogramInfo,
    geometry: IgeometryInfo,
): WebGLVertexArrayObject {
    let vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    setGeometry(gl, geometry, program);
    gl.bindVertexArray(null);
    return vao;
}

export * from "./geometryInfo";
export * from "./programInfo";
export * from "./glconstant";
export * from "./state";
export * from "./texture";
export * from "./helper";
