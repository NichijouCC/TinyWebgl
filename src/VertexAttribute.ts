import { IVertexAttrib, TypedArray, TArrayInfo } from './type'
import { GLConstants } from './GLConstant'
import { getGLTypeForTypedArray, getArrayTypeForGLtype, getbytesForGLtype } from './Helper'

export class VertexAtt implements IVertexAttrib {
  name: string
  glBuffer: WebGLBuffer

  viewBuffer?: ArrayBufferView
  count?: number

  componentSize: number
  componentDataType: number
  normalize: boolean
  bytesOffset: number
  bytesStride: number
  divisor?: number
  drawType: number

  static fromTarrayInfo(attName: string, data: TArrayInfo): VertexAtt {
    let newData = new VertexAtt()
    newData.name = attName

    if (data instanceof Array) {
      newData.viewBuffer = new Float32Array(data)
    } else if (ArrayBuffer.isView(data)) {
      newData.viewBuffer = data
    } else {
      let arraydata = data.value
      if (arraydata instanceof Array) {
        let type = data.componentDataType
          ? getArrayTypeForGLtype(data.componentDataType)
          : Float32Array
        newData.viewBuffer = new type(arraydata)
      } else {
        newData.viewBuffer = arraydata
      }
    }

    let orginData = data as IVertexAttrib

    if (orginData.componentDataType == null) {
      newData.componentDataType = newData.viewBuffer
        ? getGLTypeForTypedArray(newData.viewBuffer as TypedArray)
        : GLConstants.FLOAT
    } else {
      newData.componentDataType = orginData.componentDataType
    }

    newData.componentSize = orginData.componentSize
      ? orginData.componentSize
      : guessNumComponentsFromName(attName)
    newData.normalize = orginData.normalize != null ? orginData.normalize : false
    newData.bytesOffset = orginData.bytesOffset ? orginData.bytesOffset : 0
    newData.bytesStride = orginData.bytesStride ? orginData.bytesStride : 0
    newData.drawType = orginData.drawType ? orginData.drawType : GLConstants.STATIC_DRAW
    newData.divisor = orginData.divisor

    if (orginData.count == null) {
      let elementBytes = getbytesForGLtype(newData.componentDataType) * newData.componentSize
      newData.count = newData.viewBuffer
        ? (newData.viewBuffer as TypedArray).byteLength / elementBytes
        : undefined
    } else {
      newData.count = orginData.count
    }

    return newData
  }
}

export function createAttributeBufferInfo(
  gl: WebGLRenderingContext,
  attName: string,
  data: TArrayInfo
): IVertexAttrib {
  let vertexdata = VertexAtt.fromTarrayInfo(attName, data)

  if (vertexdata.glBuffer == null) {
    let buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, vertexdata.viewBuffer, vertexdata.drawType)

    vertexdata.glBuffer = buffer
  }
  return vertexdata
}

const uvRE = /uv/
const colorRE = /color/
function guessNumComponentsFromName(name: string, length: number = null): number {
  let numComponents
  if (uvRE.test(name)) {
    numComponents = 2
  } else if (colorRE.test(name)) {
    numComponents = 4
  } else {
    numComponents = 3 // position, normals, indices ...
  }
  // if (length % numComponents > 0)
  // {
  //     throw "Can not guess numComponents for attribute '" + name + "'. Tried " +
  //     numComponents + " but " + length +
  //     " values is not evenly divisible by " + numComponents +
  //     ". You should specify it.";
  // }
  return numComponents
}
