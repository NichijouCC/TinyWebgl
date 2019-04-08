console.log("@@@@@@@@@@@@@");
import { initContext, setBuffersAndAttributes, drawBufferInfo, setProgram } from "./Twebgl";
import { createGeometryInfoFromArray } from "./GeometryInfo";
import { createBassProgramInfo, createProgramInfo } from "./ProgramInfo";
import { createTextureFromHtml } from "./Texture";
import { IProgramState } from "./type";



window.onload = () =>
{
    Demo_Instance.run();
}

export class Dome_MatWithTex
{
    static run()
    {
        let cc = document.getElementById("canvas") as HTMLCanvasElement;
        let gl = initContext(cc, { extentions: ["OES_vertex_array_object"] });
        let be2 = gl.beWebgl2;
        let geometry = createGeometryInfoFromArray(gl,
            {
                "a_pos": [-0.5, -0.5, 0.5, -0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0],
                "a_uv": [0, 1, 0, 0, 1, 0, 1, 1]

            }, [0, 1, 2, 0, 3, 2]);

        let def_error_vs: string = "\
            attribute vec3 a_pos;\
            void main()\
            {\
                highp vec4 tmplet_1=vec4(a_pos.xyz,1.0);\
                gl_Position = tmplet_1;\
            }";

        let def_error_fs: string = "\
            uniform highp vec4 _MainColor;\
            void main()\
            {\
                gl_FragData[0] = _MainColor;\
            }";

        let uniforms: { [key: string]: any } = {};
        uniforms["_MainColor"] = new Float32Array([0.5, 1, 0.5, 1]);
        let bassporgram = createBassProgramInfo(gl, def_error_vs, def_error_fs, "ssxx");

        let program = createProgramInfo(gl, { program: bassporgram, uniforms: uniforms });

        let def_vs: string = "\
            attribute vec3 a_pos;\
            attribute vec2 a_uv;\
            varying highp vec2 xlv_TEXCOORD0;   \
            void main()\
            {\
                highp vec4 tmplet_1=vec4(a_pos.xyz,1.0);\
                xlv_TEXCOORD0=a_uv;\
                gl_Position = tmplet_1;\
            }";

        let def_fs: string = "\
            uniform highp vec4 _MainColor;\
            varying highp vec2 xlv_TEXCOORD0;   \
            uniform sampler2D _MainTex;\
            void main()\
            {\
                lowp vec4 tmplet_3= texture2D(_MainTex, xlv_TEXCOORD0);\
                gl_FragData[0] = _MainColor*tmplet_3;\
            }";

        let state: IProgramState = { depth_Test: false }
        let imag = new Image();
        imag.src = "./dist/tes.png";
        imag.onload = () =>
        {
            uniforms["_MainTex"] = createTextureFromHtml(gl, imag);
            program = createProgramInfo(gl, { program: { vs: def_vs, fs: def_fs, name: "ssxxss" }, uniforms: uniforms, states: state });
        }

        let render = () =>
        {
            gl.clearColor(0.5, 0.1, 0.5, 1);
            gl.clearDepth(0);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            // gl.useProgram(program.program);
            setProgram(gl, program);
            setBuffersAndAttributes(gl, geometry, program);
            drawBufferInfo(gl, geometry);

            requestAnimationFrame(() =>
            {
                render();
            });
        }
        render();
    }
}

export class Demo_Instance
{
    static run()
    {
        let cc = document.getElementById("canvas") as HTMLCanvasElement;
        let gl = initContext(cc, { extentions: ["ANGLE_instanced_arrays"] });
        let be2 = gl.beWebgl2;
        let geometry = createGeometryInfoFromArray(gl,
            {
                "a_pos": [-0.5, -0.5, 0.5, -0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0],
                "a_offset": { value: [-0.3, 0, 0, 0, 0.3, 0], divisor: 1, componentSize: 2 }

            }, [0, 1, 2, 0, 3, 2]);

        let def_error_vs: string = "\
            attribute vec3 a_pos;\
            attribute vec2 a_offset;\
            void main()\
            {\
                highp vec4 tmplet_1=vec4(a_pos.xy*0.2+a_offset,a_pos.z,1.0);\
                gl_Position = tmplet_1;\
            }";

        let def_error_fs: string = "\
            uniform highp vec4 _MainColor;\
            void main()\
            {\
                gl_FragData[0] = _MainColor;\
            }";

        let uniforms: { [key: string]: any } = {};
        uniforms["_MainColor"] = new Float32Array([0.5, 1, 0.5, 1]);
        let bassporgram = createBassProgramInfo(gl, def_error_vs, def_error_fs, "ssxx");
        let program = createProgramInfo(gl, { program: bassporgram, uniforms: uniforms });

        let render = () =>
        {
            gl.clearColor(0.5, 0.1, 0.5, 1);
            gl.clearDepth(0);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            // gl.useProgram(program.program);
            setProgram(gl, program);
            setBuffersAndAttributes(gl, geometry, program);
            drawBufferInfo(gl, geometry, 3);

            requestAnimationFrame(() =>
            {
                render();
            });
        }
        render();
    }
}