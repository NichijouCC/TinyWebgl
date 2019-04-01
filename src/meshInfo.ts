import { VertexIndex } from "./index";
import { VertexAttrib } from "./attribute";

export class MeshInfo
{
    atts: { [attName: string]: VertexAttrib };
    indices: VertexIndex;
}