import { IprogramState, IgeometryInfo } from "./type";

import { GlConstants } from "./GLConstant";

declare global {
    interface WebGLRenderingContext {
        _cachedGeometry: IgeometryInfo;
        _cachedProgram: WebGLProgram;
        _cachedEnableCullFace: boolean;
        _cachedCullFace: boolean;
        _cachedDepthWrite: boolean;
        _cachedDepthTest: boolean;
        _cachedEnableBlend: boolean;
        _cachedBlendEquation: number;
        _cachedBlendFuncSrc: number;
        _cachedBlendFuncDst: number;
        _cachedEnableStencilTest: boolean;
        _cachedStencilFunc: number;
        _cachedStencilRefValue: number;
        _cachedStencilMask: number;
        _cachedStencilFail: number;
        _cachedStencilPassZfail: number;
        _cachedStencilFaileZpass: number;

        _cachedViewPortX: number;
        _cachedViewPortY: number;
        _cachedViewPortWidth: number;
        _cachedViewPortHeight: number;

        _cacheColorMaskR: boolean;
        _cacheColorMaskG: boolean;
        _cacheColorMaskB: boolean;
        _cacheColorMaskA: boolean;
    }
}
export function setClear(
    gl: WebGLRenderingContext,
    clearDepth: boolean,
    clearColor: Float32Array | null,
    clearStencil: boolean = false,
) {
    let cleartag = 0;
    if (clearDepth) {
        gl.clearDepth(1.0);
        cleartag |= gl.DEPTH_BUFFER_BIT;
    }
    if (clearColor) {
        gl.clearColor(clearColor[0], clearColor[1], clearColor[2], clearColor[3]);
        cleartag |= gl.COLOR_BUFFER_BIT;
    }
    if (clearStencil) {
        gl.clearStencil(0);
        cleartag |= gl.STENCIL_BUFFER_BIT;
    }
    gl.clear(cleartag);
}

export function setViewPortWithCached(gl: WebGLRenderingContext, x: number, y: number, width: number, height: number) {
    let bechanged =
        gl._cachedViewPortX != x ||
        gl._cachedViewPortY != y ||
        gl._cachedViewPortWidth != width ||
        gl._cachedViewPortHeight != height;
    if (!bechanged) {
        gl.viewport(x, y, width, height);
        gl._cachedViewPortX = x;
        gl._cachedViewPortY = y;
        gl._cachedViewPortWidth = width;
        gl._cachedViewPortHeight = height;
    }
}

export function setColorMaskWithCached(
    gl: WebGLRenderingContext,
    maskR: boolean,
    maskG: boolean,
    maskB: boolean,
    maskA: boolean,
) {
    if (
        gl._cacheColorMaskR != maskR ||
        gl._cacheColorMaskG != maskG ||
        gl._cacheColorMaskB != maskB ||
        gl._cacheColorMaskA != maskA
    ) {
        gl.colorMask(maskR, maskG, maskB, maskA);
        gl._cacheColorMaskR = maskR;
        gl._cacheColorMaskG = maskG;
        gl._cacheColorMaskB = maskB;
        gl._cacheColorMaskA = maskA;
    }
}

export function setCullFaceStateWithCached(gl: WebGLRenderingContext, enableCullFace: boolean, cullBack: boolean) {
    if (gl._cachedEnableCullFace != enableCullFace) {
        gl._cachedEnableCullFace = enableCullFace;

        if (enableCullFace) {
            gl.enable(gl.CULL_FACE);

            if (gl._cachedCullFace != cullBack) {
                gl._cachedCullFace = cullBack;

                gl.cullFace(cullBack ? gl.BACK : gl.FRONT);
            }
        } else {
            gl.disable(gl.CULL_FACE);
        }
    } else {
        if (gl._cachedCullFace != cullBack) {
            gl._cachedCullFace = cullBack;

            gl.cullFace(cullBack ? gl.BACK : gl.FRONT);
        }
    }
}

export function setDepthStateWithCached(
    gl: WebGLRenderingContext,
    depthWrite: boolean = true,
    depthTest: boolean = true,
) {
    if (gl._cachedDepthWrite != depthWrite) {
        gl._cachedDepthWrite = depthWrite;
        gl.depthMask(depthWrite);
    }
    if (gl._cachedDepthTest != depthTest) {
        gl._cachedDepthTest = depthTest;
        if (depthTest) {
            gl.enable(gl.DEPTH_TEST);
        } else {
            gl.disable(gl.DEPTH_TEST);
        }
    }
}

export function setBlendStateWithCached(
    gl: WebGLRenderingContext,
    enableBlend: boolean = false,
    blendEquation: number = GlConstants.FUNC_ADD,
    blendSrc: number = GlConstants.ONE,
    blendDst: number = GlConstants.ONE_MINUS_SRC_ALPHA,
) {
    if (gl._cachedEnableBlend != enableBlend) {
        gl._cachedEnableBlend = enableBlend;
        if (enableBlend) {
            gl.enable(gl.BLEND);

            if (gl._cachedBlendEquation != blendEquation) {
                gl._cachedBlendEquation = blendEquation;
                gl.blendEquation(blendEquation);
            }
            if (gl._cachedBlendFuncSrc != blendSrc || gl._cachedBlendFuncDst != blendDst) {
                gl._cachedBlendFuncSrc = blendSrc;
                gl._cachedBlendFuncDst = blendDst;
                gl.blendFunc(blendSrc, blendDst);
            }
        } else {
            gl.disable(gl.BLEND);
        }
    }
}

export function setStencilStateWithCached(
    gl: WebGLRenderingContext,
    enableStencilTest: boolean,
    stencilFunc: number,
    stencilRefValue: number,
    stencilMask: number,
    stencilFail: number,
    stencilPassZfail: number,
    stencilFaileZpass: number,
) {
    if (gl._cachedEnableStencilTest != enableStencilTest) {
        gl._cachedEnableStencilTest = enableStencilTest;
        gl.enable(gl.STENCIL_TEST);
        if (
            gl._cachedStencilFunc != stencilFunc ||
            gl._cachedStencilRefValue != stencilRefValue ||
            gl._cachedStencilMask != stencilMask
        ) {
            gl._cachedStencilFunc = stencilFunc;
            gl._cachedStencilRefValue = stencilRefValue;
            gl._cachedStencilMask = stencilMask;
            gl.stencilFunc(stencilFunc, stencilRefValue, stencilMask);
        }

        if (
            gl._cachedStencilFail != stencilFail ||
            gl._cachedStencilPassZfail != stencilPassZfail ||
            gl._cachedStencilFaileZpass != stencilFaileZpass
        ) {
            gl._cachedStencilFail = stencilFail;
            gl._cachedStencilPassZfail = stencilPassZfail;
            gl._cachedStencilFaileZpass = stencilFaileZpass;
            gl.stencilOp(stencilFail, stencilPassZfail, stencilFaileZpass);
        }
    }
}

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

export function setProgramStatesWithCached(gl: WebGLRenderingContext, state: IprogramState) {
    if (state.beDeduce != true) {
        deduceFullShderState(state);
    }
    //---------------------------cullface
    setCullFaceStateWithCached(gl, state.enableCullFace, state.cullBack);
    //----------------depth
    setDepthStateWithCached(gl, state.depthWrite, state.depthTest);
    //------------------------blend
    setBlendStateWithCached(gl, state.enableBlend, state.blendEquation, state.blendSrc, state.blendDst);
    //-------------------------stencil
    setStencilStateWithCached(
        gl,
        state.enableStencilTest,
        state.stencilFunc,
        state.stencilRefValue,
        state.stencilMask,
        state.stencilFail,
        state.stencilPassZfail,
        state.stencilFaileZpass,
    );
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
