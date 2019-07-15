import { IvertexIndex, TypedArray, IviewArr } from "./Type";
import { getGLTypeForTypedArray, getArrayTypeForGLtype } from "./Helper";

const UNSIGNED_SHORT = 0x1403;
const STATIC_DRAW = 0x88e4;
export class VertexIndex implements IvertexIndex {
    name: string;
    viewBuffer?: ArrayBufferView;
    count?: number;

    componentDataType: number;

    glBuffer: WebGLBuffer;
    drawType: number;

    static fromViewArrayInfo(data: IviewArr): VertexIndex {
        let newData = new VertexIndex();
        newData.name = "indices";
        if (data instanceof Array) {
            newData.viewBuffer = new Uint16Array(data);
        } else if (ArrayBuffer.isView(data)) {
            newData.viewBuffer = data;
        } else {
            let arraydata = data.value;
            if (arraydata instanceof Array) {
                let type = data.componentDataType ? getArrayTypeForGLtype(data.componentDataType) : Uint16Array;
                newData.viewBuffer = new type(arraydata);
            } else {
                newData.viewBuffer = arraydata;
            }
        }

        let orginData = data as IvertexIndex;

        if (orginData.componentDataType == null) {
            newData.componentDataType = newData.viewBuffer
                ? getGLTypeForTypedArray(newData.viewBuffer)
                : UNSIGNED_SHORT;
        } else {
            newData.componentDataType = orginData.componentDataType;
        }
        if (orginData.count == null) {
            newData.count = newData.viewBuffer ? (newData.viewBuffer as TypedArray).length : null;
        } else {
            newData.count = orginData.count;
        }
        newData.drawType = orginData.drawType ? newData.drawType : STATIC_DRAW;

        if (newData.count == null) {
            throw new Error("can not deduce geometry Indices count.");
        }

        // vertexData.count = newData.indexCount ? newData.indexCount : vertexData.length;
        return newData;
    }
}

export function createIndexBufferInfo(gl: WebGLRenderingContext, data: IviewArr): IvertexIndex {
    let vertexdata = VertexIndex.fromViewArrayInfo(data);
    if (vertexdata.glBuffer == null) {
        let buffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, vertexdata.viewBuffer, vertexdata.drawType);
        vertexdata.glBuffer = buffer;
    }
    return vertexdata;
}

export function setIndexBuffer(gl: WebGLRenderingContext, indexbuffer: IvertexIndex) {
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexbuffer.glBuffer);
}
