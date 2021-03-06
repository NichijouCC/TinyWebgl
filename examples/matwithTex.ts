import {
    createBassProgramInfo,
    createProgramInfo,
    setProgram,
    setGeometryWithAdvanced,
    drawBufferInfo,
    setUpWebgl,
    createTextureFromImageSource,
    createGeometryInfo,
    setGeometry,
} from "../src/twebgl";

import { IprogramState } from "../src/type";

export class DomeMatWithTex {
    static run() {
        let cc = document.getElementById("canvas") as HTMLCanvasElement;
        let gl = setUpWebgl(cc, { extentions: ["OES_vertex_array_object"] });
        // let be2 = gl;
        let geometry = createGeometryInfo(gl, {
            atts: {
                aPos: [-0.5, -0.5, 0.5, -0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0],
                aUv: [0, 1, 0, 0, 1, 0, 1, 1],
            },
            indices: [0, 1, 2, 0, 3, 2],
        });

        let defErrorVs =
            "\
              attribute vec3 aPos;\
              void main()\
              {\
                  highp vec4 tmplet_1=vec4(aPos.xyz,1.0);\
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

        let defVs =
            "\
              attribute vec3 aPos;\
              attribute vec2 aUv;\
              varying highp vec2 xlv_TEXCOORD0;   \
              void main()\
              {\
                  highp vec4 tmplet_1=vec4(aPos.xyz,1.0);\
                  xlv_TEXCOORD0=aUv;\
                  gl_Position = tmplet_1;\
              }";

        let defFs =
            "\
              uniform highp vec4 _MainColor;\
              varying highp vec2 xlv_TEXCOORD0;   \
              uniform sampler2D _MainTex;\
              void main()\
              {\
                  lowp vec4 tmplet_3= texture2D(_MainTex, xlv_TEXCOORD0);\
                  gl_FragData[0] = _MainColor*tmplet_3;\
              }";

        let state: IprogramState = { depthTest: false };
        let imag = new Image();
        imag.src = "./res/tes.png";
        imag.onload = () => {
            uniforms["_MainTex"] = createTextureFromImageSource(gl, { img: imag });
            program = createProgramInfo(gl, {
                program: { vs: defVs, fs: defFs, name: "ssxxss" },
                uniforms: uniforms,
                states: state,
            });
        };

        let render = () => {
            gl.clearColor(0.5, 0.1, 0.5, 1);
            gl.clearDepth(0);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            // gl.useProgram(program.program);
            setProgram(gl, program);
            setGeometry(gl, geometry, program);
            drawBufferInfo(gl, geometry);

            requestAnimationFrame(() => {
                render();
            });
        };
        render();
    }
}
