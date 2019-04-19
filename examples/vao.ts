///<reference path="../dist/types/Global.d.ts" />
import {
    setUpWebgl,
    createGeometryInfoFromArray,
    createBassProgramInfo,
    createProgramInfo,
    createVaoInfo,
    setProgram,
    drawBufferInfo,
} from "../src/twebgl";

// import { setUpWebgl, createGeometryInfoFromArray, createBassProgramInfo, createProgramInfo, createVaoInfo, setProgram, drawBufferInfo } from "../src/twebgl";

export class DemoVao {
    static run() {
        let cc = document.getElementById("canvas") as HTMLCanvasElement;
        let gl = setUpWebgl(cc, { extentions: ["OES_vertex_array_object"] });
        let geometry = createGeometryInfoFromArray(
            gl,
            {
                aPos: [-0.5, -0.5, 0.5, -0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0],
            },
            [0, 1, 2, 0, 3, 2],
        );

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

        geometry.vao = createVaoInfo(gl, program, geometry);
        let render = () => {
            gl.clearColor(0.5, 0.1, 0.5, 1);
            gl.clearDepth(0);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            setProgram(gl, program);
            // setBuffersAndAttributes(gl, geometry, program);
            gl.bindVertexArray(geometry.vao);
            drawBufferInfo(gl, geometry);
            gl.bindVertexArray(null);
            requestAnimationFrame(() => {
                render();
            });
        };
        render();
    }
}
