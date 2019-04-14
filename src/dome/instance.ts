import {
  createGeometryInfoFromArray,
  createBassProgramInfo,
  createProgramInfo,
  setProgram,
  setBuffersAndAttributes,
  drawBufferInfo,
  setUpWebgl
} from '../twebgl'

export class Demo_Instance {
  static run() {
    let cc = document.getElementById('canvas') as HTMLCanvasElement
    let gl = setUpWebgl(cc, { extentions: ['ANGLE_instanced_arrays'] })
    let geometry = createGeometryInfoFromArray(
      gl,
      {
        a_pos: [-0.5, -0.5, 0.5, -0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0],
        a_offset: { value: [-0.3, 0, 0, 0, 0.3, 0], divisor: 1, componentSize: 2 }
      },
      [0, 1, 2, 0, 3, 2]
    )

    let def_error_vs: string =
      '\
              attribute vec3 a_pos;\
              attribute vec2 a_offset;\
              void main()\
              {\
                  highp vec4 tmplet_1=vec4(a_pos.xy*0.2+a_offset,a_pos.z,1.0);\
                  gl_Position = tmplet_1;\
              }'

    let def_error_fs: string =
      '\
              uniform highp vec4 _MainColor;\
              void main()\
              {\
                  gl_FragData[0] = _MainColor;\
              }'

    let uniforms: { [key: string]: any } = {}
    uniforms['_MainColor'] = new Float32Array([0.5, 1, 0.5, 1])
    let bassporgram = createBassProgramInfo(gl, def_error_vs, def_error_fs, 'ssxx')
    let program = createProgramInfo(gl, { program: bassporgram, uniforms: uniforms })

    let render = () => {
      gl.clearColor(0.5, 0.1, 0.5, 1)
      gl.clearDepth(0)
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

      // gl.useProgram(program.program);
      setProgram(gl, program)
      setBuffersAndAttributes(gl, geometry, program)
      drawBufferInfo(gl, geometry, 3)

      requestAnimationFrame(() => {
        render()
      })
    }
    render()
  }
}
