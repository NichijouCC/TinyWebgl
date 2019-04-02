import { GLConstants } from "./glconstant";
import { IArrayInfo, ArrayInfoType, IVertexAttrib } from "./type/type";
import { getGLTypeForTypedArray } from "./helper";

//vertexAttribPointer(value.location, value.componentSize, value.componentDataType, value.normalize, value.strideInBytes, value.offsetInBytes);
export class VertexAttrib implements IVertexAttrib
{
    name: string;
    value: ArrayBufferView;

    buffer: WebGLBuffer;
    drawType: number = GLConstants.STATIC_DRAW;

    componentSize: number = 0;
    componentDataType: number = GLConstants.FLOAT;
    // size?: number;
    normalize: boolean = false;
    strideInBytes: number = 0;
    offsetInBytes: number = 0;
    divisor?: number;


    constructor(gl: WebGLRenderingContext, name: string, data: ArrayInfoType)
    {
        this.name = name;
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
                        this.value = new Float32Array(datavalue);
                    }
                }
                else if (datavalue instanceof ArrayBuffer)
                {
                    this.value = datavalue as ArrayBufferView;
                }
            }
            this.buffer = data.buffer;
            this.componentSize = data.componentSize | guessNumComponentsFromName(name);
            this.normalize = data.normalize ? data.normalize : false;
            this.strideInBytes = data.strideInBytes | 0;
            this.offsetInBytes = data.offsetInBytes | 0;
            this.drawType = data.drawType | GLConstants.STATIC_DRAW;

        } else
        {
            if (data instanceof Array)
            {
                this.value = new Float32Array(data);
            } else
            {
                this.value = data as ArrayBufferView;
            }
            // this.componentDataType = getGLTypeForTypedArray(this.value);
        }

        this.componentDataType = getGLTypeForTypedArray(this.value);

        if (this.buffer == null)
        {
            let buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, this.value, this.drawType);
        }
    }
}




const uvRE = /uv/;
const colorRE = /color/

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