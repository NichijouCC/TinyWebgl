import { IVertexIndex, TypedArray, TArrayInfo, IArrayInfo } from "./type";
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

export function deduceVertexIndexArrayInfo(data: TArrayInfo): IVertexIndex
{
    let newData: IVertexIndex = {} as IVertexIndex;
    newData.name = "indices";
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

    let orginData = data as IVertexIndex;

    if (orginData.componentDataType == null)
    {
        newData.componentDataType = newData.value ? getGLTypeForTypedArray(newData.value as TypedArray) : GLConstants.UNSIGNED_SHORT;
    } else
    {
        newData.componentDataType = orginData.componentDataType;
    }
    if (orginData.length == null)
    {
        newData.length = newData.value ? (newData.value as TypedArray).length : null;
    } else
    {
        newData.length = orginData.length;
    }
    newData.drawType = orginData.drawType ? newData.drawType : GLConstants.STATIC_DRAW;


    if (newData.length == null)
    {
        throw "can not deduce geometry Indices length.";
    }

    // vertexData.count = newData.indexCount ? newData.indexCount : vertexData.length;
    return newData;
}

export function createIndexBufferInfo(gl: WebGLRenderingContext, data: TArrayInfo): IVertexIndex
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
