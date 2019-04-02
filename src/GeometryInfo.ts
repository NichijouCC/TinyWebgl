import { IVertexAttrib, IVertexIndex } from "./type/type";

export interface IGeometry
{
    atts: { [attName: string]: IVertexAttrib };
    indices: IVertexIndex;
}

export class GeometryInfo implements IGeometry
{
    atts: { [attName: string]: IVertexAttrib } = {};
    indices: IVertexIndex;
}