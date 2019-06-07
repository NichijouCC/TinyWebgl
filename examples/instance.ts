import {
    createGeometryInfo,
    createBassProgramInfo,
    createProgramInfo,
    setProgram,
    setGeometryWithAdvanced,
    drawBufferInfo,
    setUpWebgl,
    drawObject,
} from "../src/twebgl";

export class DemoInstance {
    static run() {
        let cc = document.getElementById("canvas") as HTMLCanvasElement;
        let gl = setUpWebgl(cc, { extentions: ["ANGLE_instanced_arrays"] });
        let geometry = createGeometryInfo(gl, {
            atts: {
                aPos: [-0.5, -0.5, 0.5, -0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0],
                aOffset: { value: [-0.3, 0, 0, 0, 0.3, 0], divisor: 1, componentSize: 2 },
            },
            indices: [0, 1, 2, 0, 3, 2],
        });

        let defErrorVs =
            "\
              attribute vec3 aPos;\
              attribute vec2 aOffset;\
              void main()\
              {\
                  highp vec4 tmplet_1=vec4(aPos.xy*0.2+aOffset,aPos.z,1.0);\
                  gl_Position = tmplet_1;\
              }";

        let defErrorFs =
            "\
              uniform highp vec4 _MainColor;\
              void main()\
              {\
                  gl_FragData[0] = _MainColor;\
              }";

        let uniforms: { [key: string]: any } = {};
        uniforms["_MainColor"] = new Float32Array([0.5, 1, 0.5, 1]);
        let bassporgram = createBassProgramInfo(gl, defErrorVs, defErrorFs, "ssxx");
        let program = createProgramInfo(gl, { program: bassporgram, uniforms: uniforms });

        let render = () => {
            gl.clearColor(0.5, 0.1, 0.5, 1);
            gl.clearDepth(0);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            // gl.useProgram(program.program);
            drawObject(gl, { geometry: geometry, program: program }, 3);

            requestAnimationFrame(() => {
                render();
            });
        };
        render();
    }
}
