import { IcontextOptions, IgeometryInfo, IprogramInfo, Iobject } from "./type";
import { setGeometryWithAdvanced, setGeometryWithCached, setGeometry } from "./geometryInfo";
import { setProgram, setProgramWithCached } from "./programInfo";

declare global {
    interface WebGLVertexArrayObject extends WebGLObject {}

    interface WebGLRenderingContext {
        beWebgl2: boolean;

        bindpoint: number;
        beActiveVao: boolean;
        beActiveInstance: boolean;

        addExtension(extName: string): void;
        createVertexArray(): any;
        bindVertexArray(vao?: WebGLVertexArrayObject | null): void;
        deleteVertexArray(vao: WebGLVertexArrayObject): void;

        vertexAttribDivisor(index: number, divisor: number): void;
        drawElementsInstanced(mode: number, count: number, type: number, offset: number, instanceCount: number): void;
        drawArraysInstanced(mode: number, first: number, count: number, instanceCount: number): void;
    }
}
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

export function setGeometryAndProgramWithCached(
    gl: WebGLRenderingContext,
    geometry: IgeometryInfo,
    program: IprogramInfo,
) {
    setGeometryWithAdvanced(gl, geometry, program);
    setProgramWithCached(gl, program);
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
    setGeometryAndProgramWithCached(gl, obj.geometry, obj.program);
    drawBufferInfo(gl, obj.geometry, instanceCount);
    if (gl.beActiveVao) {
        gl.bindVertexArray(null);
    }
}

export function createGlBuffer(gl: WebGLRenderingContext, target: number, viewData: ArrayBufferView): WebGLBuffer {
    let buffer = gl.createBuffer();
    gl.bindBuffer(target, buffer);
    gl.bufferData(target, viewData, gl.STATIC_DRAW);
    return buffer;
}

export * from "./geometryInfo";
export * from "./programInfo";
export * from "./glconstant";
export * from "./state";
export * from "./texture";
export * from "./helper";
