import { IvertexAttrib, TypedArray, IviewArr, IviewData } from "./Type";
import { GlConstants } from "./GlConstant";
import { getGLTypeForTypedArray, getArrayTypeForGLtype, getbytesForGLtype } from "./Helper";

export class VertexAtt implements IvertexAttrib {
    name: string;
    glBuffer: WebGLBuffer;

    viewBuffer?: ArrayBufferView;
    count?: number;

    componentSize: number;
    componentDataType: number;
    normalize: boolean;
    bytesOffset: number;
    bytesStride: number;
    divisor?: number;
    drawType: number;

    static fromViewArrayInfo(attName: string, data: IviewArr): VertexAtt {
        let newData = new VertexAtt();
        newData.name = attName;

        if (data instanceof Array) {
            newData.viewBuffer = new Float32Array(data);
        } else if (ArrayBuffer.isView(data)) {
            newData.viewBuffer = data;
        } else {
            let arraydata = data.value;
            if (arraydata instanceof Array) {
                let type = data.componentDataType ? getArrayTypeForGLtype(data.componentDataType) : Float32Array;
                newData.viewBuffer = new type(arraydata);
            } else {
                newData.viewBuffer = arraydata;
            }
        }

        let orginData = data as IviewData;

        if (orginData.componentDataType == null) {
            newData.componentDataType = newData.viewBuffer
                ? getGLTypeForTypedArray(newData.viewBuffer as TypedArray)
                : GlConstants.FLOAT;
        } else {
            newData.componentDataType = orginData.componentDataType;
        }

        newData.componentSize = orginData.componentSize ? orginData.componentSize : guessNumComponentsFromName(attName);
        newData.normalize = orginData.normalize != null ? orginData.normalize : false;
        newData.bytesOffset = orginData.bytesOffset ? orginData.bytesOffset : 0;
        newData.bytesStride = orginData.bytesStride ? orginData.bytesStride : 0;
        newData.drawType = orginData.drawType ? orginData.drawType : GlConstants.STATIC_DRAW;
        newData.divisor = orginData.divisor;

        if (orginData.count == null) {
            let elementBytes = getbytesForGLtype(newData.componentDataType) * newData.componentSize;
            newData.count = newData.viewBuffer
                ? (newData.viewBuffer as TypedArray).byteLength / elementBytes
                : undefined;
        } else {
            newData.count = orginData.count;
        }

        return newData;
    }
}

export function createAttributeBufferInfo(gl: WebGLRenderingContext, attName: string, data: IviewArr): IvertexAttrib {
    let vertexdata = VertexAtt.fromViewArrayInfo(attName, data);

    if (vertexdata.glBuffer == null) {
        let buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertexdata.viewBuffer, vertexdata.drawType);

        vertexdata.glBuffer = buffer;
    }
    return vertexdata;
}

export function updateAttributeBufferInfo(
    gl: WebGLRenderingContext,
    att: IvertexAttrib,
    value: ArrayBufferView,
): IvertexAttrib {
    gl.bindBuffer(gl.ARRAY_BUFFER, att.glBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, value, att.drawType);
    att.viewBuffer = value;
    return att;
}

export function setAttributeBuffer(gl: WebGLRenderingContext, value: IvertexAttrib, location: number) {
    gl.bindBuffer(gl.ARRAY_BUFFER, value.glBuffer);
    gl.enableVertexAttribArray(location);
    gl.vertexAttribPointer(
        location,
        value.componentSize,
        value.componentDataType,
        value.normalize,
        value.bytesStride,
        value.bytesOffset,
    );
    if (value.divisor !== undefined) {
        gl.vertexAttribDivisor(location, value.divisor);
    }
}

const uvRE = /(uv|texcoord)/;
const colorRE = /color/;
function guessNumComponentsFromName(name: string, length: number = null): number {
    let numComponents;
    name = name.toLowerCase();
    if (uvRE.test(name)) {
        numComponents = 2;
    } else if (colorRE.test(name)) {
        numComponents = 4;
    } else {
        numComponents = 3; // position, normals, indices ...
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
