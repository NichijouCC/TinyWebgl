import { IvertexAttrib, IvertexIndex, IgeometryInfo, TArrayInfo } from "./type";
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

export function createGeometryInfoFromArray(
    gl: WebGLRenderingContext,
    atts: { [keyName: string]: TArrayInfo },
    indices?: TArrayInfo,
    primitiveType?: number,
): IgeometryInfo {
    let info = new GeometryInfo();
    info.primitiveType = primitiveType ? primitiveType : gl.TRIANGLES;
    if (indices != null) {
        info.indices = createIndexBufferInfo(gl, indices);
        if (info.count == null) {
            info.count = info.indices.count;
        }
    }

    for (let attName in atts) {
        info.atts[attName] = createAttributeBufferInfo(gl, attName, atts[attName]);
        if (info.count == null) {
            info.count = info.atts[attName].count;
        }
    }
    return info;
}
