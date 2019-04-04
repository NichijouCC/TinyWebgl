import { IVertexAttrib, IVertexIndex, FullArrayInfoType, IArrayInfo, TypedArray, IGeometryInfo, IDrawInfo } from "./type/type";
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


export function createGeometryInfoFromArray(gl: WebGLRenderingContext, atts: { [keyName: string]: FullArrayInfoType }, indices?: FullArrayInfoType, draw?: IDrawInfo): IGeometryInfo
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
            info.count = info.indices.count;
        }
    }

    for (let attName in atts)
    {
        info.atts[attName] = createAttributeBufferInfo(gl, attName, atts[attName]);
        if (info.count == null)
        {
            info.count = (info.atts[attName].value as TypedArray).length;
        }
    }
    return info;
}
