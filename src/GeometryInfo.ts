import { IvertexAttrib, IvertexIndex, IgeometryInfo, IgeometryOptions, IprogramInfo } from "./Type";
import { createIndexBufferInfo } from "./vertexIndex";
import { createAttributeBufferInfo } from "./vertexAttribute";

// export class GeometryInfo implements IgeometryInfo {
//     vaoDic: { [programeId: number]: WebGLVertexArrayObject } = {};
//     constructor() {
//         this.id = GeometryInfo.nextID();
//     }
//     readonly id: number;
//     primitiveType: number;
//     atts: { [attName: string]: IvertexAttrib } = {};
//     indices?: IvertexIndex;
//     // mode: number;
//     count: number;
//     offset: number = 0;

//     private static count = 0;
//     static nextID() {
//         return GeometryInfo.count++;
//     }
// }

export function createGeometryInfo(gl: WebGLRenderingContext, op: IgeometryOptions): IgeometryInfo {
    // let info = new GeometryInfo();
    let primitiveType = op.primitiveType != null ? op.primitiveType : gl.TRIANGLES;
    let info: IgeometryInfo = {
        atts: {},
        vaoDic: {},
        offset: 0,
        count: null,
        primitiveType: primitiveType,
        name: op.name,
    };
    if (op.indices != null) {
        info.indices = createIndexBufferInfo(gl, op.indices);
        if (info.count == null) {
            info.count = info.indices.count;
        }
    }
    for (let attName in op.atts) {
        info.atts[attName] = createAttributeBufferInfo(gl, attName, op.atts[attName]);
        if (info.count == null) {
            info.count = info.atts[attName].count;
        }
    }
    return info;
}
/**
 *  tips : setProgrameWithcached need behind (setGeometryWithAdvanced/setGeometryWithCached)，when draw obj
 * @param gl
 * @param geometry
 * @param program
 */
export function setGeometryWithAdvanced(gl: WebGLRenderingContext, geometry: IgeometryInfo, program: IprogramInfo) {
    let bechanged = gl._cachedGeometry != geometry || gl._cachedProgram != program.bassProgram.program;
    if (bechanged) {
        if (geometry.vaoDic[program.bassProgram.id]) {
            gl.bindVertexArray(geometry.vaoDic[program.bassProgram.id]);
        } else {
            if (gl.beActiveVao) {
                let vao = createVaoByPrograme(gl, program, geometry);
                gl.bindVertexArray(vao);
                geometry.vaoDic[program.bassProgram.id] = vao;
            } else {
                setGeometry(gl, geometry, program);
            }
        }
        gl._cachedGeometry = geometry;
    }
}

export function setGeometry(gl: WebGLRenderingContext, geometry: IgeometryInfo, program: IprogramInfo) {
    let programAtts = program.bassProgram.attsDic;
    for (let attName in programAtts) {
        if (geometry.atts[attName]) {
            programAtts[attName].setter(geometry.atts[attName]);
        } else {
            //todo
        }
    }
    if (geometry.indices) {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geometry.indices.glBuffer);
    }
}
/**
 * tips : setProgrameWithcached need behind (setGeometryWithAdvanced/setGeometryWithCached)，when draw obj
 * @param gl
 * @param geometry
 * @param program
 */
export function setGeometryWithCached(gl: WebGLRenderingContext, geometry: IgeometryInfo, program: IprogramInfo) {
    if (gl._cachedGeometry != geometry || gl._cachedProgram != program.bassProgram.program) {
        setGeometry(gl, geometry, program);
        gl._cachedGeometry = geometry;
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
