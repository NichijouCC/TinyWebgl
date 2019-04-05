import { IVertexIndex, TypedArray, ArrayTypeInfo, IArrayInfo } from "./type/type";
import { GLConstants } from "./GLConstant";
import { getTypedArray, getGLTypeForTypedArray, getArrayTypeForGLtype } from "./Helper";

// export class VertexIndex implements IVertexIndex
// {
//     value?: ArrayTypeInfo;
//     componentDataType?: number;

//     buffer: WebGLBuffer;
//     drawType?: number;

//     count: number;
//     // submit: Function;
// }

export function deduceVertexIndexArrayInfo(data: ArrayTypeInfo): IVertexIndex
{
    let newData: IArrayInfo = {};
    if (data instanceof Array)
    {
        newData.value = new Uint16Array(data);
    } else if (ArrayBuffer.isView(data))
    {
        newData.value = data;
    } else
    {
        let arraydata = data.value;
        if (arraydata instanceof Array)
        {
            let type = data.componentDataType ? getArrayTypeForGLtype(data.componentDataType) : Uint16Array;
            newData.value = new type(arraydata);
        } else
        {
            newData.value = arraydata;
        }
    }

    //------------data is IarrayInfo now
    let vertexData = newData as IVertexIndex;
    vertexData.name = "indices";
    if (newData.componentDataType == null)
    {
        vertexData.componentDataType = newData.value ? getGLTypeForTypedArray(newData.value as TypedArray) : GLConstants.UNSIGNED_SHORT;
    } else
    {
        vertexData.componentDataType = newData.componentDataType;
    }
    if (newData.length == null)
    {
        vertexData.length = newData.value ? (newData.value as TypedArray).length : null;
    } else
    {
        vertexData.length = newData.length;
    }
    vertexData.drawType = newData.drawType ? newData.drawType : GLConstants.STATIC_DRAW;

    // vertexData.count = newData.indexCount ? newData.indexCount : vertexData.length;
    return vertexData;
}

export function createIndexBufferInfo(gl: WebGLRenderingContext, data: ArrayTypeInfo): IVertexIndex
{
    let vertexdata = deduceVertexIndexArrayInfo(data);
    if (vertexdata.buffer == null)
    {
        let buffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, vertexdata.value, vertexdata.drawType);
        vertexdata.buffer = buffer;
    }
    return vertexdata;
}
