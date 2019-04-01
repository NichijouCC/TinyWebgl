console.log("@@@@@@@@@@@@@");
import { initContext } from "gl";

window.onload = () =>
{
    let cc = document.getElementById("canvas") as HTMLCanvasElement;
    let gl = initContext(cc, { extentions: ["OES_vertex_array_object"] });

}