import { IVertexIndex, TypedArray, ArrayInfoType, IArrayInfo } from "./type/type";
import { GLConstants } from "./GLConstant";
import { getTypedArray } from "./Helper";

export class VertexIndex implements IVertexIndex
{
    value: TypedArray;
    componentDataType: number;

    buffer: WebGLBuffer;
    drawType: number;

    count: number;
    offset: number;
}
export function createIndexBufferInfo(gl: WebGLRenderingContext, data: ArrayInfoType): VertexIndex
{
    let info = new VertexIndex();
    if (data["value"])//be IArrayInfo
    {
        let realdata = data as IArrayInfo;
        info.componentDataType = realdata.componentDataType ? realdata.componentDataType : GLConstants.UNSIGNED_SHORT;

        if (ArrayBuffer.isView(realdata.value))
        {
            info.value = realdata.value as TypedArray;
        } else
        {
            info.value = getTypedArray(realdata.value, info.componentDataType);
        }
        info.drawType = realdata.drawType ? realdata.drawType : GLConstants.STATIC_DRAW;
        info.count = realdata.indexCount ? realdata.indexCount : info.value.length;
        info.offset = realdata.indexOffset ? realdata.indexOffset : 0;
    } else
    {
        info.componentDataType = GLConstants.UNSIGNED_SHORT;
        info.drawType = GLConstants.STATIC_DRAW;

        if (ArrayBuffer.isView(data))
        {
            info.value = data as TypedArray;
        } else
        {
            info.value = getTypedArray(data as number | Array<number>, GLConstants.UNSIGNED_SHORT);
        }
        info.count = info.value.length;
        info.offset = 0;
    }
    {
        let buffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, info.value, info.drawType);
        info.buffer = buffer;
    }

    return info;
}
