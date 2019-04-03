import { IVertexAttrib, IVertexIndex, FullArrayInfoType, IArrayInfo, TypedArray, IGeometryInfo, IDrawInfo } from "./type/type";
import { createIndexBufferInfo } from "./VertexIndex";
import { createAttributeBufferInfo } from "./VertexAttribute";

export class GeometryInfo implements IGeometryInfo
{
    mode: number;
    atts: { [attName: string]: IVertexAttrib } = {};
    indices?: IVertexIndex;
    count?: number;
    offset?: number;
}


export function createGeometryInfoFromArray(gl: WebGLRenderingContext, arrs: { [keyName: string]: FullArrayInfoType | IDrawInfo }): IGeometryInfo
{
    let info = new GeometryInfo();
    Object.keys(arrs).forEach((attName) =>
    {
        let attInfo = arrs[attName];
        if (attName == "indices")
        {
            info.indices = createIndexBufferInfo(gl, attInfo as FullArrayInfoType);
        } else if (attName == "draw")
        {
            let data = attInfo as IDrawInfo;
            info.count = data.count;
            info.offset = data.offset;
        }
        else
        {
            info.atts[attName] = createAttributeBufferInfo(gl, attName, attInfo as FullArrayInfoType);
        }
    });
    return info;
}