import { IVertexAttrib, IVertexIndex, TypedArray, IGeometryInfo, IDrawInfo, ArrayTypeInfo } from "./type/type";
import { createIndexBufferInfo } from "./VertexIndex";
import { createAttributeBufferInfo } from "./VertexAttribute";

export class GeometryInfo implements IGeometryInfo
{
    atts: { [attName: string]: IVertexAttrib } = {};
    indices?: IVertexIndex;

    mode: number;
    count: number;
    offset: number;
}


export function createGeometryInfoFromArray(gl: WebGLRenderingContext, atts: { [keyName: string]: ArrayTypeInfo }, indices?: ArrayTypeInfo, draw?: IDrawInfo): IGeometryInfo
{
    let info = new GeometryInfo();

    if (draw != null)
    {
        info.mode = draw.mode || gl.TRIANGLES;
        info.count = draw.count;
        info.offset = draw.offset || 0;
    } else
    {
        info.mode = gl.TRIANGLES;
        info.offset = 0;
    }
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
