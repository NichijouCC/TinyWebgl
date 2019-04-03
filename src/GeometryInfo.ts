import { IVertexAttrib, IVertexIndex, ArrayInfoType, IArrayInfo, TypedArray, IGeometry, IDrawInfo } from "./type/type";
import { createIndexBufferInfo } from "./VertexIndex";
import { createAttributeBufferInfo } from "./VertexAttribute";

export class GeometryInfo implements IGeometry
{
    atts: { [attName: string]: IVertexAttrib } = {};
    indices: IVertexIndex;
    count?: number;
    offset?: number;
}

export function createGeometryInfoFromArray(gl: WebGLRenderingContext, arrs: { [keyName: string]: ArrayInfoType | IDrawInfo })
{
    let info = new GeometryInfo();
    Object.keys(arrs).forEach((attName) =>
    {
        let attInfo = arrs[attName];
        if (attName == "indices")
        {
            info.indices = createIndexBufferInfo(gl, attInfo as ArrayInfoType);
        } else if (attName == "draw")
        {
            let data = attInfo as IDrawInfo;
            info.count = data.count;
            info.offset = data.offset;
        }
        else
        {
            info.atts[attName] = createAttributeBufferInfo(gl, attName, attInfo as ArrayInfoType);
        }
    })
}


