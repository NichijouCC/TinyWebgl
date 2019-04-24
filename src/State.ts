import { IprogramState } from "./type";

import { GlConstants } from "./GLConstant";

export function setProgramStates(gl: WebGLRenderingContext, state: IprogramState) {
    if (state.beDeduce != true) {
        deduceFullShderState(state);
    }
    //---------------------------cullface
    if (state.enableCullFace) {
        gl.enable(gl.CULL_FACE);
        gl.cullFace(state.cullBack ? gl.BACK : gl.FRONT);
    } else {
        gl.disable(gl.CULL_FACE);
    }

    //----------------depth
    gl.depthMask(state.depthWrite);
    if (state.depthTest) {
        gl.enable(gl.DEPTH_TEST);
    } else {
        gl.disable(gl.DEPTH_TEST);
    }

    //------------------------blend
    if (state.enableBlend) {
        gl.enable(gl.BLEND);
        gl.blendEquation(state.blendEquation);
        gl.blendFunc(state.blendSrc, state.blendDst);
    }

    //-------------------------stencil
    if (state.enableStencilTest) {
        gl.enable(gl.STENCIL_TEST);
        gl.stencilFunc(state.stencilFunc, state.stencilRefValue, state.stencilMask);
        gl.stencilOp(state.stencilFail, state.stencilPassZfail, state.stencilFaileZpass);
    }
}
/**
 *
 * @param state 原始 webgl state
 */
// state 是给每个物体 render用的，是不想受前一个物体render影响，所以需要推断出完整的 webgl state，缺失的按照默认值
function deduceFullShderState(state: IprogramState): IprogramState {
    //----------------------------cull face
    if (state.enableCullFace == null) {
        state.enableCullFace = true;
    }
    if (state.enableCullFace) {
        if (state.cullBack == null) {
            state.cullBack = true;
        }
    }

    //------------------depth
    if (state.depthWrite == null) {
        state.depthWrite = true;
    }
    if (state.depthTest == null) {
        state.depthTest = true;
    }
    if (state.depthTest) {
        if (state.depthTestFuc == null) {
            state.depthTestFuc = GlConstants.LEQUAL;
        }
    }

    //------------------ blend
    if (state.enableBlend == true) {
        if (state.blendEquation == null) {
            state.blendEquation = GlConstants.FUNC_ADD;
        }
        if (state.blendSrc == null) {
            state.blendSrc = GlConstants.ONE;
        }
        if (state.blendDst == null) {
            state.blendDst = GlConstants.ONE_MINUS_SRC_ALPHA;
        }
    }

    //---------------------stencil
    if (state.enableStencilTest == true) {
        if (state.stencilFunc == null) {
            state.stencilFunc = GlConstants.ALWAYS;
        }
        if (state.stencilFail == null) {
            state.stencilFail = GlConstants.KEEP;
        }
        if (state.stencilFaileZpass == null) {
            state.stencilFaileZpass = GlConstants.KEEP;
        }
        if (state.stencilPassZfail == null) {
            state.stencilPassZfail = GlConstants.REPLACE;
        }
        if (state.stencilRefValue == null) {
            state.stencilRefValue = 1;
        }
        if (state.stencilMask == null) {
            state.stencilMask = 0xff;
        }
    }

    return state;
}
