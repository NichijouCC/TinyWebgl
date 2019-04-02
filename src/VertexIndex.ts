import { ArrayInfoType, IArrayInfo, IVertexIndex } from "./type/type";
import { GLConstants } from "./glconstant";
import { getGLTypeForTypedArray } from "./helper";

export class VertexIndex implements IVertexIndex
{
    value: Uint16Array;

    buffer: WebGLBuffer;
    drawType: number = GLConstants.STATIC_DRAW;

    componentDataType: number = GLConstants.UNSIGNED_SHORT;
    count: number;
    offset: number = 0;

    constructor(gl: WebGLRenderingContext, data: ArrayInfoType)
    {
        if (data["value"])
        {
            data = data as IArrayInfo;
            let datavalue = data.value;
            if (datavalue != null)
            {
                if (datavalue instanceof Array)
                {
                    if (data.type != null)
                    {
                        let type = data.type;
                        this.value = new type(datavalue);
                    } else
                    {
                        this.value = new Uint16Array(datavalue);
                    }
                }
                else
                {
                    this.value = datavalue as Uint16Array;
                }
            }
            this.buffer = data.buffer;
            this.drawType = data.drawType | GLConstants.STATIC_DRAW;
        } else
        {
            if (data instanceof Array)
            {
                this.value = new Uint16Array(data);
            } else
            {
                this.value = data as Uint16Array;
            }
        }

        this.componentDataType = getGLTypeForTypedArray(this.value);
        this.count = this.value.length;
        if (this.buffer == null)
        {
            let buffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.value, this.drawType);
        }
    }
}