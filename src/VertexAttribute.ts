import { IVertexAttrib, TypedArray, FullArrayInfoType, IArrayInfo, ArrayTypeInfo } from "./type/type";
import { GLConstants } from "./GLConstant";
import { getTypedArray } from "./Helper";

export class VertexAtt implements IVertexAttrib
{
    name: string;
    buffer: WebGLBuffer;

    value: ArrayTypeInfo;
    componentSize: number;
    componentDataType: number;
    normalize: boolean;
    offsetInBytes: number;
    strideInBytes: number;
    divisor?: number;
    drawType: number;
}



export function createAttributeBufferInfo(gl: WebGLRenderingContext, attName: string, data: FullArrayInfoType): VertexAtt
{
    let info = new VertexAtt();
    info.name = attName;
    if (data["value"] || data["buffer"])//be IArrayInfo
    {
        let realdata = data as IArrayInfo;
        info.componentDataType = realdata.componentDataType ? realdata.componentDataType : GLConstants.FLOAT;
        info.componentSize = realdata.componentSize ? realdata.componentSize : guessNumComponentsFromName(attName);
        if (realdata.normalize != null)
        {
            info.normalize = realdata.normalize;
        } else
        {
            info.normalize = false;
        }
        info.offsetInBytes = realdata.offsetInBytes ? realdata.offsetInBytes : 0;
        info.strideInBytes = realdata.strideInBytes ? realdata.strideInBytes : 0;
        info.drawType = realdata.drawType ? realdata.drawType : GLConstants.STATIC_DRAW;

        // if (ArrayBuffer.isView(realdata.value))
        // {
        //     info.value = realdata.value as TypedArray;
        // } else
        // {
        //     info.value = getTypedArray(realdata.value, info.componentDataType);
        // }
        if (realdata.buffer != null)
        {
            info.buffer = realdata.buffer;
        } else
        {
            if (realdata.value != null && realdata.value instanceof Array)
            {
                info.value = getTypedArray(realdata.value, info.componentDataType);
            } else
            {
                info.value = realdata.value;
            }
        }
    } else
    {
        info.componentDataType = GLConstants.FLOAT;
        info.componentSize = guessNumComponentsFromName(attName);
        info.normalize = false;
        info.offsetInBytes = 0;
        info.strideInBytes = 0;
        info.drawType = GLConstants.STATIC_DRAW;

        // if (ArrayBuffer.isView(data))
        // {
        //     info.value = data as TypedArray;
        // } else
        // {
        //     info.value = getTypedArray(data as number | Array<number>, GLConstants.FLOAT);
        // }
        if (data instanceof Array)
        {
            info.value = getTypedArray(data as Array<number>, info.componentDataType);
        } else
        {
            info.value = data as number | ArrayBufferView;
        }
    }
    if (info.buffer == null)
    {
        let buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, info.value as any, info.drawType);

        info.buffer = buffer;
    }
    return info;
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