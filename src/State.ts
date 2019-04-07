import { IProgramState } from "./type";

import { GLConstants } from "./GLConstant";



export function setProgramState(gl: WebGLRenderingContext, state: IProgramState)
{
    if (state.beDeduce != true)
    {
        deduceFullShderState(state);
    }
    //---------------------------cullface
    if (state.enableCullFace)
    {
        gl.enable(gl.CULL_FACE);
        gl.cullFace(state.cullBack ? gl.BACK : gl.FRONT);
    } else
    {
        gl.disable(gl.CULL_FACE);
    }

    //----------------depth
    gl.depthMask(state.depth_Write);
    if (state.depth_Test)
    {
        gl.enable(gl.DEPTH_TEST);
    } else
    {
        gl.disable(gl.DEPTH_TEST);
    }

    //------------------------blend
    if (state.enableBlend)
    {
        gl.enable(gl.BLEND);
        gl.blendEquation(state.blend_Equation);
        gl.blendFunc(state.blend_Src, state.blend_Dst);
    }

    //-------------------------stencil
    if (state.enableStencilTest)
    {
        gl.enable(gl.STENCIL_TEST);
        gl.stencilFunc(state.stencilFunc, state.stencil_refValue, state.stencil_Mask);
        gl.stencilOp(state.stencil_Fail, state.stencil_PassZfail, state.stencil_FaileZpass);
    }
}
/**
 *
 * @param state 原始 webgl state
 */
// state 是给每个物体 render用的，是不想受前一个物体render影响，所以需要推断出完整的 webgl state，缺失的按照默认值
function deduceFullShderState(state: IProgramState): IProgramState
{
    //----------------------------cull face
    if (state.enableCullFace == null)
    {
        state.enableCullFace = true;
    }
    if (state.enableCullFace)
    {
        if (state.cullBack == null)
        {
            state.cullBack = true;
        }
    }

    //------------------depth
    if (state.depth_Write == null)
    {
        state.depth_Write = true;
    }
    if (state.depth_Test == null)
    {
        state.depth_Test = true;
    }
    if (state.depth_Test)
    {
        if (state.depth_TestFuc == null)
        {
            state.depth_TestFuc = GLConstants.LEQUAL;
        }
    }

    //------------------ blend
    if (state.enableBlend == true)
    {
        if (state.blend_Equation == null)
        {
            state.blend_Equation = GLConstants.FUNC_ADD;
        }
        if (state.blend_Src == null)
        {
            state.blend_Src = GLConstants.ONE;
        }
        if (state.blend_Dst == null)
        {
            state.blend_Dst = GLConstants.ONE_MINUS_SRC_ALPHA;
        }
    }


    //---------------------stencil
    if (state.enableStencilTest == true)
    {
        if (state.stencilFunc == null)
        {
            state.stencilFunc = GLConstants.ALWAYS;
        }
        if (state.stencil_Fail == null)
        {
            state.stencil_Fail = GLConstants.KEEP;
        }
        if (state.stencil_FaileZpass == null)
        {
            state.stencil_FaileZpass = GLConstants.KEEP;
        }
        if (state.stencil_PassZfail == null)
        {
            state.stencil_PassZfail = GLConstants.REPLACE;
        }
        if (state.stencil_refValue == null)
        {
            state.stencil_refValue = 1;
        }
        if (state.stencil_Mask == null)
        {
            state.stencil_Mask = 0xFF;
        }
    }

    return state;
}