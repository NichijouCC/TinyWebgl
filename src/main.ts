console.log("@@@@@@@@@@@@@");
import { initContext, setBuffersAndAttributes, drawBufferInfo } from "gl";
import { createGeometryInfoFromArray } from "./GeometryInfo";
import { createProgramInfo } from "./ProgramInfo";



window.onload = () =>
{
    let cc = document.getElementById("canvas") as HTMLCanvasElement;
    let gl = initContext(cc, { extentions: ["OES_vertex_array_object"] });

    let geometry = createGeometryInfoFromArray(gl,
        {
            "a_pos": [-0.5, -0.5, 0.5, -0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0],

        }, [0, 1, 2, 0, 3, 2]);

    let def_error_vs: string = "\
        attribute vec3 a_pos;\
        void main()\
        {\
            highp vec4 tmplet_1=vec4(a_pos.xyz,1.0);\
            gl_Position = tmplet_1;\
        }";

    let def_error_fs: string = "\
        void main()\
        {\
            gl_FragData[0] = vec4(1,0,0,1);\
        }";
    let program = createProgramInfo(gl, def_error_vs, def_error_fs, "def_error");


    let render = () =>
    {
        gl.clearColor(0.5, 0.1, 0.5, 1);
        gl.clearDepth(0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.useProgram(program.program);
        setBuffersAndAttributes(gl, geometry, program);
        drawBufferInfo(gl, geometry);

        requestAnimationFrame(() =>
        {
            render();
        });
    }
    render();

}