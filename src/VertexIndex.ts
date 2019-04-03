import { IVertexIndex, TypedArray, FullArrayInfoType, IArrayInfo, ArrayTypeInfo } from "./type/type";
import { GLConstants } from "./GLConstant";
import { getTypedArray } from "./Helper";

export class VertexIndex implements IVertexIndex
{
    value?: ArrayTypeInfo;
    componentDataType?: number;

    buffer: WebGLBuffer;
    drawType?: number;

    count: number;
    // submit: Function;
}
export function createIndexBufferInfo(gl: WebGLRenderingContext, data: FullArrayInfoType): VertexIndex
{
    let info = new VertexIndex();
    if (data["value"] || data["buffer"])//be IArrayInfo
    {
        let realdata = data as IArrayInfo;
        info.componentDataType = realdata.componentDataType ? realdata.componentDataType : GLConstants.UNSIGNED_SHORT;

        if (realdata.buffer != null)
        {
            info.count = realdata.indexCount;
            if (realdata.indexCount == null)
            {
                console.error("indexCount is need when value if data.value is buffer");
            }
        } else
        {
            if (typeof realdata.value == "number")
            {
                info.value = realdata.value;
                info.count = realdata as number;
            } else
            {
                if (realdata.value instanceof Array)
                {
                    info.value = getTypedArray(realdata.value, info.componentDataType);
                }
                info.count = (info.value as TypedArray).length;
            }
        }
        info.drawType = realdata.drawType ? realdata.drawType : GLConstants.STATIC_DRAW;
    } else
    {
        info.componentDataType = GLConstants.UNSIGNED_SHORT;
        info.drawType = GLConstants.STATIC_DRAW;

        if (typeof data == "number")
        {
            info.value = data;
            info.count = data as number;
        } else
        {
            if (data instanceof Array)
            {
                info.value = getTypedArray(data, info.componentDataType);
            }
            info.count = (info.value as TypedArray).length;
        }
    }
    if (info.buffer == null)
    {
        let buffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, info.value as any, info.drawType);
        info.buffer = buffer;
    }
    return info;
}
