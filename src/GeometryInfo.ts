import { IVertexAttrib, IVertexIndex, TypedArray, IGeometryInfo, IDrawInfo, TArrayInfo } from "./type";
import { createIndexBufferInfo } from "./VertexIndex";
import { createAttributeBufferInfo } from "./VertexAttribute";

export class GeometryInfo implements IGeometryInfo
{
    primitiveType: number;
    atts: { [attName: string]: IVertexAttrib } = {};
    indices?: IVertexIndex;

    // mode: number;
    count: number;
    offset: number;
}


export function createGeometryInfoFromArray(gl: WebGLRenderingContext, atts: { [keyName: string]: TArrayInfo }, indices?: TArrayInfo, primitiveType?: number): IGeometryInfo
{
    let info = new GeometryInfo();
    info.primitiveType = primitiveType ? primitiveType : gl.TRIANGLES;

    if (indices != null)
    {
        info.indices = createIndexBufferInfo(gl, indices);
        if (info.count == null)
        {
            info.count = info.indices.length;
        }
    }

    for (let attName in atts)
    {
        info.atts[attName] = createAttributeBufferInfo(gl, attName, atts[attName]);
        if (info.count == null)
        {
            info.count = info.atts[attName].length;
        }
    }
    return info;
}
