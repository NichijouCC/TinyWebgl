interface WebGLVertexArrayObject extends WebGLObject {}

interface WebGLRenderingContext {
  __defineSetter__(arg0: string, arg1: (val: any) => void): any
  __defineGetter__(arg0: string, arg1: (val: any) => void): any
  beWebgl2: boolean
  bindpoint: number
  addExtension(extName: string): void
  createVertexArray(): any
  bindVertexArray(vao?: WebGLVertexArrayObject | null): void
  deleteVertexArray(vao: WebGLVertexArrayObject): void

  vertexAttribDivisor(index: number, divisor: number): void
  drawElementsInstanced(
    mode: number,
    count: number,
    type: number,
    offset: number,
    instanceCount: number
  ): void
  drawArraysInstanced(mode: number, first: number, count: number, instanceCount: number): void
}
