import { IVertexIndex, TypedArray, TArrayInfo } from './type'
import { GLConstants } from './GLConstant'
import { getGLTypeForTypedArray, getArrayTypeForGLtype } from './Helper'

export class VertexIndex implements IVertexIndex {
  name: string
  viewBuffer?: ArrayBufferView
  count?: number

  componentDataType: number

  glBuffer: WebGLBuffer
  drawType: number

  static fromTarrayInfo(data: TArrayInfo): VertexIndex {
    let newData = new VertexIndex()
    newData.name = 'indices'
    if (data instanceof Array) {
      newData.viewBuffer = new Uint16Array(data)
    } else if (ArrayBuffer.isView(data)) {
      newData.viewBuffer = data
    } else {
      let arraydata = data.value
      if (arraydata instanceof Array) {
        let type = data.componentDataType
          ? getArrayTypeForGLtype(data.componentDataType)
          : Uint16Array
        newData.viewBuffer = new type(arraydata)
      } else {
        newData.viewBuffer = arraydata
      }
    }

    let orginData = data as IVertexIndex

    if (orginData.componentDataType == null) {
      newData.componentDataType = newData.viewBuffer
        ? getGLTypeForTypedArray(newData.viewBuffer as TypedArray)
        : GLConstants.UNSIGNED_SHORT
    } else {
      newData.componentDataType = orginData.componentDataType
    }
    if (orginData.count == null) {
      newData.count = newData.viewBuffer ? (newData.viewBuffer as TypedArray).length : null
    } else {
      newData.count = orginData.count
    }
    newData.drawType = orginData.drawType ? newData.drawType : GLConstants.STATIC_DRAW

    if (newData.count == null) {
      throw new Error('can not deduce geometry Indices count.')
    }

    // vertexData.count = newData.indexCount ? newData.indexCount : vertexData.length;
    return newData
  }
}

export function createIndexBufferInfo(gl: WebGLRenderingContext, data: TArrayInfo): IVertexIndex {
  let vertexdata = VertexIndex.fromTarrayInfo(data)
  if (vertexdata.glBuffer == null) {
    let buffer = gl.createBuffer()
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, vertexdata.viewBuffer, vertexdata.drawType)
    vertexdata.glBuffer = buffer
  }
  return vertexdata
}
