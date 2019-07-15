import { IprogramState, IgeometryInfo } from "./Type";

import { IfboInfo } from "./FrameBuffer";

declare global {
    interface WebGLRenderingContext {
        _cachedFrameBuffer: IfboInfo;

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
    if (cleartag != 0) {
        gl.clear(cleartag);
    }
}

export function setViewPortWithCached(gl: WebGLRenderingContext, x: number, y: number, width: number, height: number) {
    let bechanged =
        gl._cachedViewPortX != x ||
        gl._cachedViewPortY != y ||
        gl._cachedViewPortWidth != width ||
        gl._cachedViewPortHeight != height;
    if (bechanged) {
        gl.viewport(x, y, width, height);
        gl._cachedViewPortX = x;
        gl._cachedViewPortY = y;
        gl._cachedViewPortWidth = width;
        gl._cachedViewPortHeight = height;
    }
}
export function setViewPort(gl: WebGLRenderingContext, x: number, y: number, width: number, height: number) {
    gl.viewport(x, y, width, height);
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

export function setCullFaceState(gl: WebGLRenderingContext, enableCullFace: boolean = true, cullBack: boolean = true) {
    if (enableCullFace) {
        gl.enable(gl.CULL_FACE);
        gl.cullFace(cullBack ? gl.BACK : gl.FRONT);
    } else {
        gl.disable(gl.CULL_FACE);
    }
}

export function setCullFaceStateWithCached(
    gl: WebGLRenderingContext,
    enableCullFace: boolean = true,
    cullBack: boolean = true,
) {
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

export function setDepthState(gl: WebGLRenderingContext, depthWrite: boolean = true, depthTest: boolean = true) {
    gl.depthMask(depthWrite);
    if (depthTest) {
        gl.enable(gl.DEPTH_TEST);
    } else {
        gl.disable(gl.DEPTH_TEST);
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

export function setBlendState(
    gl: WebGLRenderingContext,
    enableBlend: boolean = false,
    blendEquation: number = gl.FUNC_ADD,
    blendSrc: number = gl.ONE,
    blendDst: number = gl.ONE_MINUS_SRC_ALPHA,
) {
    if (enableBlend) {
        gl.enable(gl.BLEND);
        gl.blendEquation(blendEquation);
        gl.blendFunc(blendSrc, blendDst);
    }
}

export function setBlendStateWithCached(
    gl: WebGLRenderingContext,
    enableBlend: boolean = false,
    blendEquation: number = gl.FUNC_ADD,
    blendSrc: number = gl.ONE,
    blendDst: number = gl.ONE_MINUS_SRC_ALPHA,
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
export function setStencilState(
    gl: WebGLRenderingContext,
    enableStencilTest: boolean = false,
    stencilFunc: number = gl.ALWAYS,
    stencilRefValue: number = 1,
    stencilMask: number = 0xff,
    stencilFail: number = gl.KEEP,
    stencilPassZfail: number = gl.REPLACE,
    stencilFaileZpass: number = gl.KEEP,
) {
    if (enableStencilTest) {
        gl.enable(gl.STENCIL_TEST);
        gl.stencilFunc(stencilFunc, stencilRefValue, stencilMask);
        gl.stencilOp(stencilFail, stencilPassZfail, stencilFaileZpass);
    }
}
export function setStencilStateWithCached(
    gl: WebGLRenderingContext,
    enableStencilTest: boolean = false,
    stencilFunc: number = gl.ALWAYS,
    stencilRefValue: number = 1,
    stencilMask: number = 0xff,
    stencilFail: number = gl.KEEP,
    stencilPassZfail: number = gl.REPLACE,
    stencilFaileZpass: number = gl.KEEP,
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
    //---------------------------cullface
    setCullFaceState(gl, state.enableCullFace, state.cullBack);
    //----------------depth
    setDepthState(gl, state.depthWrite, state.depthTest);
    //------------------------blend
    setBlendState(gl, state.enableBlend, state.blendEquation, state.blendSrc, state.blendDst);
    //-------------------------stencil
    setStencilState(
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

export function setProgramStatesWithCached(gl: WebGLRenderingContext, state: IprogramState) {
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

// /**
//  *
//  * @param state 原始 webgl state
//  */
// // state 是给每个物体 render用的，是不想受前一个物体render影响，所以需要推断出完整的 webgl state，缺失的按照默认值
// function deduceFullShderState(state: IprogramState): IprogramState {
//     //----------------------------cull face
//     if (state.enableCullFace == null) {
//         state.enableCullFace = true;
//     }
//     if (state.enableCullFace) {
//         if (state.cullBack == null) {
//             state.cullBack = true;
//         }
//     }

//     //------------------depth
//     if (state.depthWrite == null) {
//         state.depthWrite = true;
//     }
//     if (state.depthTest == null) {
//         state.depthTest = true;
//     }
//     if (state.depthTest) {
//         if (state.depthTestFuc == null) {
//             state.depthTestFuc = GlConstants.LEQUAL;
//         }
//     }

//     //------------------ blend
//     if (state.enableBlend == true) {
//         if (state.blendEquation == null) {
//             state.blendEquation = GlConstants.FUNC_ADD;
//         }
//         if (state.blendSrc == null) {
//             state.blendSrc = GlConstants.ONE;
//         }
//         if (state.blendDst == null) {
//             state.blendDst = GlConstants.ONE_MINUS_SRC_ALPHA;
//         }
//     }

//     //---------------------stencil
//     if (state.enableStencilTest == true) {
//         if (state.stencilFunc == null) {
//             state.stencilFunc = GlConstants.ALWAYS;
//         }
//         if (state.stencilFail == null) {
//             state.stencilFail = GlConstants.KEEP;
//         }
//         if (state.stencilFaileZpass == null) {
//             state.stencilFaileZpass = GlConstants.KEEP;
//         }
//         if (state.stencilPassZfail == null) {
//             state.stencilPassZfail = GlConstants.REPLACE;
//         }
//         if (state.stencilRefValue == null) {
//             state.stencilRefValue = 1;
//         }
//         if (state.stencilMask == null) {
//             state.stencilMask = 0xff;
//         }
//     }

//     return state;
// }
