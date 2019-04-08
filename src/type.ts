export type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;

/**
 * vertex attribute/index 的数据源类型
 */
export type TArrayInfo = number[] | ArrayBufferView | IArrayInfo;


/**
 * webglcontext的 可选属性
 */
export interface IcontextAtt
{
    premultipliedAlpha?: boolean;
    alpha?: boolean;
    stencil?: boolean;
}
/**
 * 创建webglcontext的 附属信息
 */
export interface IcontextOptions
{
    context?: string;
    contextAtts?: IcontextAtt;
    extentions?: string[];
}

/**
 * buffer和value 必须存在一个;
 */
export interface IArrayInfo
{
    value?: number[] | ArrayBufferView;
    length?: number;

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
export interface IVertexAttrib
{
    name: string;
    value?: ArrayBufferView;
    length?: number;

    buffer: WebGLBuffer;
    drawType: number;

    componentSize: number;
    componentDataType: number;
    // size?: number;
    normalize: boolean;
    strideInBytes: number;
    offsetInBytes: number;
    divisor?: number;
}
/**
 * 调用draw api 时候可选参数
 */
export class IDrawInfo
{
    mode?: number;
    count?: number;
    offset?: number;
}
/**
 * 顶点索引信息
 */
export interface IVertexIndex
{
    name: string;
    value?: ArrayBufferView;
    length?: number;

    componentDataType: number;

    buffer: WebGLBuffer;
    drawType?: number;

}
/**
 * 模型信息
 */
export interface IGeometryInfo
{
    atts: { [attName: string]: IVertexAttrib };
    indices?: IVertexIndex;
    count: number;
    offset: number;
    primitiveType: number;
}
/**
 * shaderProgram 的uniform info
 */
export interface IUniformInfo
{
    name: string;
    type: number;
    location: WebGLUniformLocation;
    setter: (value: any) => void;
}
/**
 * shderprogram的 attribute info
 */
export interface IAttributeInfo
{
    name: string;
    location: number;
    setter: (value: IVertexAttrib) => void;
}
/**
 * shaderprogram
 */
export interface IBassProgramInfo
{
    programName: string;
    program: WebGLProgram;
    uniformsDic: { [name: string]: IUniformInfo };
    attsDic: { [name: string]: IAttributeInfo };

}

export interface IProgramState
{
    /**
     * 标志符号
     */
    beDeduce?: boolean;
    //-----------------------global state
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
    depth_Write?: boolean;

    /**
     * deafult =true;
     */
    depth_Test?: boolean;

    /**
     * common gl.LEQUAL, gl.ALWAYS ,gl.NEVER ,gl.LESS
     * 
     */
    depth_TestFuc?: number;

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
    blend_Equation?: number;

    /**
     * common：gl.ONE, gl.SRC_ALPHA，gl.ONE_MINUS_SRC_ALPHA
     * 
     * deault = gl.SRC_ALPHA;
     * 
     * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc
     */
    blend_Src?: number;

    /**
     * common：gl.ONE, gl.SRC_ALPHA，gl.ONE_MINUS_SRC_ALPHA
     * 
     *  deault = gl.ONE_MINUS_SRC_ALPHA;
     * 
     * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc
     */
    blend_Dst?: number;

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
    stencil_Mask?: number;
    /**
     * 
     */
    stencil_refValue?: number;

    /**
     *  gl.keep gl.REPLACE
     * 
     * default=gl.keep
     */
    stencil_PassZfail?: number;

    /**
     *  gl.keep gl.REPLACE
     * 
     * default=gl.keep
     */
    stencil_FaileZpass?: number;

    /**
     *  gl.keep gl.REPLACE
     * 
     * default=gl.keep
     */
    stencil_Fail?: number;
    /**
     * r , g , b ，a
     * 
     * default r=true ,g= true ,b= true, a=true
     */
    colorMask?: [];
}

export interface IProgramInfo extends IBassProgramInfo
{
    uniforms?: { [name: string]: any };
    states?: IProgramState;
}

// export interface IFullProgramInfo extends IBassProgramInfo
// {
//     states?: IProgramState;
//     uniforms: { [uniformName: string]: any };
// }

export interface IProgramInfoOptions
{
    program: IBassProgramInfo | {
        vs: string;
        fs: string;
        name: string;
    };
    uniforms?: { [name: string]: any };
    states?: IProgramState;
}

export interface IObject
{
    geometry: IGeometryInfo;
    program: IProgramInfo;
}

//---------------pixstore-------------------global state
// preMultiply_alpha?: boolean;
// flip_y?: boolean;


export interface ITextureInfo
{
    target?: number

    //----------------texParameteri-------------
    filter_max?: number;
    filter_min?: number;
    /**
     * 为了uv滚动
     */
    wrap_s?: number;
    wrap_t?: number;

    // arr:Uint8Array;
    // image:ImageData;

    //-----------------------------
    pixelFormat?: number;

    enableMipMap?: boolean;

    width?: number;

    height?: number;
}

export interface ITexViewDataInfo extends ITextureInfo
{
    // data: ArrayBufferView;
    /**
     * when data is A Uint8Array , pixelDatatype  can be gl.UNSIGNED_BYTE.
     * 
     * when data is A Uint16Array , pixelDatatype  can be gl.UNSIGNED_SHORT_5_6_5, gl.UNSIGNED_SHORT_4_4_4_4, gl.UNSIGNED_SHORT_5_5_5_1, gl.UNSIGNED_SHORT or ext.HALF_FLOAT_OES.
     * 
     * when data is A Uint32Array , pixelDatatype  can be is gl.UNSIGNED_INT or ext.UNSIGNED_INT_24_8_WEBGL.
     * 
     * when data is A Float32Array , pixelDatatype  can be gl.FLOAT.
     */
    pixelDatatype: number;

    width: number;

    height: number;

}

export interface ITexHtmlDataInfo extends ITextureInfo
{
    // data: HTMLImageElement | HTMLCanvasElement;

    pixelDatatype?: number;

    width?: number;

    height?: number;
}