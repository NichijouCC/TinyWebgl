import { GLConstants } from "./glconstant";
import { IArrayInfo, ArrayInfoType } from "./type/type";

//vertexAttribPointer(value.location, value.componentSize, value.componentDataType, value.normalize, value.strideInBytes, value.offsetInBytes);
export class VertexAttrib
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
                    }
                }
                else if (datavalue instanceof ArrayBuffer)
                {
                    this.value = datavalue as ArrayBufferView;
                }
            }
            this.buffer = data.buffer;
            this.componentSize = data.componentSize | guessNumComponentsFromName(name);
            // this.componentDataType = data.componentDataType | GLConstants.FLOAT;
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
            this.componentDataType = getGLTypeForTypedArray(this.value);
        }

        if (this.buffer == null)
        {
            let buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, this.value, this.drawType);
        }
    }
}

/**
 * Get the GL type for a typedArray
 */
function getGLTypeForTypedArray(typedArray): number
{
    if (typedArray instanceof Int8Array) { return GLConstants.BYTE; }
    if (typedArray instanceof Uint8Array) { return GLConstants.UNSIGNED_BYTE; }
    if (typedArray instanceof Uint8ClampedArray) { return GLConstants.UNSIGNED_BYTE; }
    if (typedArray instanceof Int16Array) { return GLConstants.SHORT; }
    if (typedArray instanceof Uint16Array) { return GLConstants.UNSIGNED_SHORT; }
    if (typedArray instanceof Int32Array) { return GLConstants.INT; }
    if (typedArray instanceof Uint32Array) { return GLConstants.UNSIGNED_INT; }
    if (typedArray instanceof Float32Array) { return GLConstants.FLOAT; }
    throw "unsupported typed array type";
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