import { IvertexAttrib, IvertexIndex, IgeometryInfo, IgeometryOptions, IprogramInfo } from "./type";
import { createIndexBufferInfo } from "./vertexIndex";
import { createAttributeBufferInfo } from "./vertexAttribute";

export class GeometryInfo implements IgeometryInfo {
    primitiveType: number;
    atts: { [attName: string]: IvertexAttrib } = {};
    indices?: IvertexIndex;

    // mode: number;
    count: number;
    offset: number;
}

export function createGeometryInfo(gl: WebGLRenderingContext, op: IgeometryOptions): IgeometryInfo {
    let info = new GeometryInfo();
    info.primitiveType = op.primitiveType ? op.primitiveType : gl.TRIANGLES;
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

export function setGeometry(gl: WebGLRenderingContext, geometry: IgeometryInfo, program: IprogramInfo) {
    for (let attName in program.attsDic) {
        program.attsDic[attName].setter(geometry.atts[attName]);
    }
    if (geometry.indices) {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geometry.indices.glBuffer);
    }
}
