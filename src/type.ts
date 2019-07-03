export type TypedArray =
    | Int8Array
    | Uint8Array
    | Uint8ClampedArray
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Float32Array
    | Float64Array;

/**
 * vertex attribute/index 的数据源类型
 */
export type TArrayInfo = number[] | ArrayBufferView | IarrayInfo;

/**
 * webglcontext的 可选属性
 */
export interface IcontextAtt {
    premultipliedAlpha?: boolean;
    alpha?: boolean;
    stencil?: boolean;
}
/**
 * 创建webglcontext的 附属信息
 */
export interface IcontextOptions {
    context?: string;
    contextAtts?: IcontextAtt;
    extentions?: string[];
}

/**
 * buffer和value 必须存在一个;
 */
export interface IarrayInfo {
    value?: number[] | ArrayBufferView;
    count?: number;

    buffer?: WebGLBuffer;
    drawType?: number;

    componentSize?: number;
    componentDataType?: number;
    // size?: number;
    normalize?: boolean;
    strideInBytes?: number;
    offsetInBytes?: number;
    divisor?: number;

    // indexCount?: number;
    // indexOffset?: number;
}
/**
 * 顶点属性信息
 */
export interface IvertexAttrib {
    name: string;
    viewBuffer?: ArrayBufferView;
    count?: number;

    glBuffer: WebGLBuffer;
    drawType: number;

    componentSize: number;
    componentDataType: number;
    // size?: number;
    normalize: boolean;
    bytesStride: number;
    bytesOffset: number;
    divisor?: number;
}
/**
 * 调用draw api 时候可选参数
 */
export class IDrawInfo {
    mode?: number;
    count?: number;
    offset?: number;
}
/**
 * 顶点索引信息
 */
export interface IvertexIndex {
    name: string;
    viewBuffer?: ArrayBufferView;
    count?: number;

    componentDataType: number;

    glBuffer: WebGLBuffer;
    drawType?: number;
}
/**
 * 模型信息
 */
export interface IgeometryInfo {
    readonly id: number;
    atts: { [attName: string]: IvertexAttrib };
    indices?: IvertexIndex;
    vaoDic: { [programeId: number]: WebGLVertexArrayObject };
    // vao?: WebGLVertexArrayObject;
    count: number;
    offset: number;
    primitiveType: number;
}
/**
 * shaderProgram 的uniform info
 */
export interface IuniformInfo {
    name: string;
    type: number;
    location: WebGLUniformLocation;
    setter: (value: any) => void;
}
/**
 * shderprogram的 attribute info
 */
export interface IattributeInfo {
    name: string;
    location: number;
    setter: (value: IvertexAttrib) => void;
}
/**
 * shaderprogram
 */
export interface IbassProgramInfo {
    readonly id: number;
    programName: string;
    program: WebGLProgram;
    uniformsDic: { [name: string]: IuniformInfo };
    attsDic: { [name: string]: IattributeInfo };
}

export interface IbassProgramOption {
    vs: string;
    fs: string;
    name?: string;
}

export interface IprogramState {
    /**
     * 标志符号
     */
    beDeduce?: boolean;
    // -----------------------global state
    // /**
    //  * CW(顺时针) = 0x0900,
    //  *
    //  * CCW(逆时针) = 0x0901,
    //  *
    //  *  webgl default value is gl.CCW， generally do not need change this
    //  */
    // frontFace?: number;

    /**
     * default= true
     */
    enableCullFace?: boolean;

    /**
     * default= true
     */
    cullBack?: boolean;

    /**
     * default =true;
     */
    depthWrite?: boolean;

    /**
     * deafult =true;
     */
    depthTest?: boolean;

    /**
     * common gl.LEQUAL, gl.ALWAYS ,gl.NEVER ,gl.LESS
     *
     */
    depthTestFuc?: number;

    /**
     * default =false
     */
    enableBlend?: boolean;

    /**
     * gl.FUNC_ADD: 源+目的地（默认值），
     * gl.FUNC_SUBTRACT: 源 - 目的地，
     * gl.FUNC_REVERSE_SUBTRACT: 目的地 - 源
     *
     * default = gl.FUNC_ADD;
     *
     * https://developer.mozilla.org/zh-CN/docs/Web/API/WebGLRenderingContext/blendEquation
     */
    blendEquation?: number;

    /**
     * common：gl.ONE, gl.SRC_ALPHA，gl.ONE_MINUS_SRC_ALPHA
     *
     * deault = gl.SRC_ALPHA;
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc
     */
    blendSrc?: number;

    /**
     * common：gl.ONE, gl.SRC_ALPHA，gl.ONE_MINUS_SRC_ALPHA
     *
     *  deault = gl.ONE_MINUS_SRC_ALPHA;
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc
     */
    blendDst?: number;

    /**
     * default = false
     */
    enableStencilTest?: boolean;

    /**
     * gl.NEVER:       Never pass.
     *
     * gl.LESS:         Pass if (ref & mask) <  (stencil & mask).
     *
     * gl.EQUAL:        Pass if (ref & mask) =  (stencil & mask).
     *
     * gl.LEQUAL:       Pass if (ref & mask) <= (stencil & mask).
     *
     * gl.GREATER:      Pass if (ref & mask) >  (stencil & mask).
     *
     * gl.NOTEQUAL:     Pass if (ref & mask) != (stencil & mask).
     *
     * gl.GEQUAL:       Pass if (ref & mask) >= (stencil & mask).
     *
     * gl.ALWAYS:       Always pass.
     *
     * default= gl.ALWAYS
     */
    stencilFunc?: number;

    /**
     * default = 0xFF
     */
    stencilMask?: number;
    /**
     *
     */
    stencilRefValue?: number;

    /**
     *  gl.keep gl.REPLACE
     *
     * default=gl.keep
     */
    stencilPassZfail?: number;

    /**
     *  gl.keep gl.REPLACE
     *
     * default=gl.keep
     */
    stencilFaileZpass?: number;

    /**
     *  gl.keep gl.REPLACE
     *
     * default=gl.keep
     */
    stencilFail?: number;
    /**
     * r , g , b ，a
     *
     * default r=true ,g= true ,b= true, a=true
     */
    colorMask?: [];
}

/**
 *  contain bassprogram（shader）、uniforms设参、states设参
 */
export interface IprogramInfo {
    bassProgram: IbassProgramInfo;
    uniforms?: { [name: string]: any };
    states?: IprogramState;
}

// export interface IFullProgramInfo extends IBassProgramInfo
// {
//     states?: IProgramState;
//     uniforms: { [uniformName: string]: any };
// }

export interface IprogramOptions {
    program: IbassProgramInfo | IbassProgramOption;
    uniforms?: { [name: string]: any };
    states?: IprogramState;
}

export interface IgeometryOptions {
    atts: { [keyName: string]: TArrayInfo };
    indices?: TArrayInfo;
    primitiveType?: number;
}

export interface Iobject {
    geometry: IgeometryInfo;
    program: IprogramInfo;
}

export interface ItextureInfo {
    texture: WebGLTexture;
    texDes: ItextureDesInfo;
}

// ---------------pixstore-------------------global state
// preMultiply_alpha?: boolean;
// flip_y?: boolean;

export interface ItextureDesInfo {
    target?: number;

    // ----------------texParameteri-------------
    filterMax?: number;
    filterMin?: number;
    /**
     * 为了uv滚动
     */
    wrapS?: number;
    wrapT?: number;

    // arr:Uint8Array;
    // image:ImageData;

    // -----------------------------
    pixelFormat?: number;

    enableMipMap?: boolean;

    width?: number;

    height?: number;
}

export interface ItexViewDataOption extends ItextureDesInfo {
    viewData: ArrayBufferView;
    /**
     * when data is A Uint8Array , pixelDatatype  can be gl.UNSIGNED_BYTE.
     *
     * when data is A Uint16Array , pixelDatatype  can be gl.UNSIGNED_SHORT_5_6_5, gl.UNSIGNED_SHORT_4_4_4_4, gl.UNSIGNED_SHORT_5_5_5_1, gl.UNSIGNED_SHORT or ext.HALF_FLOAT_OES.
     *
     * when data is A Uint32Array , pixelDatatype  can be is gl.UNSIGNED_INT or ext.UNSIGNED_INT_24_8_WEBGL.
     *
     * when data is A Float32Array , pixelDatatype  can be gl.FLOAT.
     */
    pixelDatatype?: number;

    width: number;

    height: number;

    mipmaps?: { width: number; height: number; viewData: ArrayBufferView };
}

export interface ItexImageDataOption extends ItextureDesInfo {
    img: TexImageSource;

    pixelDatatype?: number;

    width?: number;

    height?: number;

    mipmaps?: { img: TexImageSource };
}
