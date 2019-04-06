import { IVertexAttrib, TypedArray, TArrayInfo, IArrayInfo } from "./type/type";
import { GLConstants } from "./GLConstant";
import { getTypedArray, getGLTypeForTypedArray, getArrayTypeForGLtype } from "./Helper";

// export class VertexAtt implements IVertexAttrib
// {
//     name: string;
//     buffer: WebGLBuffer;

//     value: ArrayTypeInfo;
//     componentSize: number;
//     componentDataType: number;
//     normalize: boolean;
//     offsetInBytes: number;
//     strideInBytes: number;
//     divisor?: number;
//     drawType: number;
// }

export function deduceVertexAttArrayInfo(attName: string, data: TArrayInfo): IVertexAttrib
{
    let newData: IArrayInfo = {};
    if (data instanceof Array)
    {
        newData.value = new Float32Array(data);
    } else if (ArrayBuffer.isView(data))
    {
        newData.value = data;
    } else
    {
        let arraydata = data.value;
        if (arraydata instanceof Array)
        {
            let type = data.componentDataType ? getArrayTypeForGLtype(data.componentDataType) : Float32Array;
            newData.value = new type(arraydata);
        } else
        {
            newData.value = arraydata;
        }
    }

    //------------data is IarrayInfo now
    let vertexData = newData as IVertexAttrib;
    vertexData.name = attName;

    if (newData.componentDataType == null)
    {
        vertexData.componentDataType = newData.value ? getGLTypeForTypedArray(newData.value as TypedArray) : GLConstants.FLOAT;
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
    vertexData.componentSize = newData.componentSize ? newData.componentSize : guessNumComponentsFromName(attName);
    vertexData.normalize = newData.normalize != null ? newData.normalize : false;
    vertexData.offsetInBytes = newData.offsetInBytes ? newData.offsetInBytes : 0;
    vertexData.strideInBytes = newData.strideInBytes ? newData.strideInBytes : 0;
    vertexData.drawType = newData.drawType ? newData.drawType : GLConstants.STATIC_DRAW;

    return vertexData;
}

export function createAttributeBufferInfo(gl: WebGLRenderingContext, attName: string, data: TArrayInfo): IVertexAttrib
{
    let vertexdata = deduceVertexAttArrayInfo(attName, data);

    if (vertexdata.buffer == null)
    {
        let buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertexdata.value, vertexdata.drawType);

        vertexdata.buffer = buffer;
    }
    return vertexdata;
}

const uvRE = /uv/;
const colorRE = /color/;
function guessNumComponentsFromName(name: string, length: number = null): number
{
    let numComponents;
    if (uvRE.test(name))
    {
        numComponents = 2;
    } else if (colorRE.test(name))
    {
        numComponents = 4;
    } else
    {
        numComponents = 3;  // position, normals, indices ...
    }
    // if (length % numComponents > 0)
    // {
    //     throw "Can not guess numComponents for attribute '" + name + "'. Tried " +
    //     numComponents + " but " + length +
    //     " values is not evenly divisible by " + numComponents +
    //     ". You should specify it.";
    // }
    return numComponents;
}