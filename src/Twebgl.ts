import {
  IcontextOptions,
  IGeometryInfo,
  IBassProgramInfo,
  IProgramState,
  IProgramInfo
} from './type'
import { setProgramState } from './State'

WebGLRenderingContext.prototype.addExtension = function(extname: string) {
  let ext = this.getExtension(extname)
  if (ext) {
    switch (extname) {
      case 'OES_vertex_array_object':
        this.bindVertexArray = ext.bindVertexArrayOES.bind(ext)
        this.createVertexArray = ext.createVertexArrayOES.bind(ext)
        this.deleteVertexArray = ext.deleteVertexArrayOES.bind(ext)
        break
      case 'ANGLE_instanced_arrays':
        this.vertexAttribDivisor = ext.vertexAttribDivisorANGLE.bind(ext)
        this.drawElementsInstanced = ext.drawElementsInstancedANGLE.bind(ext)
        this.drawArraysInstanced = ext.drawArraysInstancedANGLE.bind(ext)
        break

      default:
        console.warn('还未处理')
        break
    }
  }
}
Object.defineProperty(WebGLRenderingContext.prototype, 'beWebgl2', {
  get: function() {
    if (this.beWebgl2 == null) {
      let version = this.getParameter(this.VERSION)
      this.beWebgl2 = version.indexOf('WebGL 2.0') === 0
    }
    return this._beWebgl2
  },
  set: function(value: boolean) {
    this._beWebgl2 = value
  }
})

export function initContext(
  canvas: HTMLCanvasElement,
  options: IcontextOptions = {}
): WebGLRenderingContext {
  let type = options.context || 'webgl'
  let gl = canvas.getContext(type, options.contextAtts) as WebGLRenderingContext
  // gl.beWebgl2 = (type == "webgl2");
  if (options.extentions != null) {
    options.extentions.forEach(ext => {
      gl.addExtension(ext)
    })
  }

  // canvas.addEventListener('webglcontextlost', function (e)
  // {
  //     console.log(e);
  // }, false);

  return gl
}

export function setBuffersAndAttributes(
  gl: WebGLRenderingContext,
  geometry: IGeometryInfo,
  program: IBassProgramInfo
) {
  for (let attName in program.attsDic) {
    program.attsDic[attName].setter(geometry.atts[attName])
  }
  if (geometry.indices) {
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geometry.indices.buffer)
  }
}

/**
 * bing program 、set uniforms 、set webgl states
 * @param gl
 * @param program
 */
export function setProgram(gl: WebGLRenderingContext, program: IProgramInfo) {
  gl.useProgram(program.program)

  if (program.uniforms) {
    setProgramUniforms(program, program.uniforms)
  }
  if (program.states) {
    setProgramState(gl, program.states)
  }
}

export function setProgramUniforms(info: IBassProgramInfo, uniforms: { [name: string]: any }) {
  for (let key in uniforms) {
    let setter = info.uniformsDic[key].setter
    let value = uniforms[key]
    setter(value)
  }
}

export function drawBufferInfo(
  gl: WebGLRenderingContext,
  geometry: IGeometryInfo,
  instanceCount?: number
): void {
  if (geometry.indices != null) {
    if (instanceCount != null) {
      gl.drawElementsInstanced(
        geometry.primitiveType,
        geometry.count,
        geometry.indices.componentDataType,
        geometry.offset || 0,
        instanceCount
      )
    } else {
      gl.drawElements(
        geometry.primitiveType,
        geometry.count,
        geometry.indices.componentDataType,
        geometry.offset || 0
      )
    }
  } else {
    if (instanceCount != null) {
      gl.drawArraysInstanced(
        geometry.primitiveType,
        geometry.offset || 0,
        geometry.count,
        instanceCount
      )
    } else {
      gl.drawArrays(geometry.primitiveType, geometry.offset || 0, geometry.count)
    }
  }
}

export * from './GLConstant'
export * from './GeometryInfo'
export * from './Helper'
export * from './ProgramInfo'
export * from './State'
export * from './Texture'
