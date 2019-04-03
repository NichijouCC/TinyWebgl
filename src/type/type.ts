export type TypedArrType = Float64ArrayConstructor | Float32ArrayConstructor | Int32ArrayConstructor | Int16ArrayConstructor | Int8ArrayConstructor | Uint32ArrayConstructor | Uint16ArrayConstructor | Uint8ArrayConstructor;

export type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;

/**
 * attribute的数据源类型
 * 
 * todo: number 有存在的意义？
 */
export type ArrayTypeInfo = number | ArrayBufferView;

/**
 * 给创建attribute buffer足够的自由度;
 * 可以直接传buffer进来，自定义它的附加信息;
 * 
 * arraybuffer 类型字面不可读，舍弃掉.可以自行通过 IArrayInfo玩,
 */
export type FullArrayInfoType = ArrayTypeInfo | number[] | IArrayInfo;


export interface IcontextAtt
{
    premultipliedAlpha?: boolean;
    alpha?: boolean;
    stencil?: boolean
}

export interface IcontextOptions
{
    context?: string;
    contextAtts?: IcontextAtt;
    extentions?: string[];
}

/**
 * buffer和value 必须存在一个;
 * 
 */
export interface IArrayInfo
{
    buffer?: WebGLBuffer;

    value?: ArrayTypeInfo;

    componentSize?: number;

    componentDataType?: number;//gl.float
    normalize?: boolean;
    offsetInBytes?: number;
    strideInBytes?: number;
    divisor?: number;
    drawType?: number;

    /**
     * for index buffer
     */
    indexCount?: number;
    /**
     * for index buffer
     */
    indexOffset?: number;
}

export interface IVertexAttrib
{
    name: string;
    value?: ArrayTypeInfo;

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

export class IDrawInfo
{
    mode?: number;
    count?: number;
    offset?: number;
}

export interface IVertexIndex
{
    value?: ArrayTypeInfo;
    componentDataType?: number;

    buffer: WebGLBuffer;
    drawType?: number;

    count: number;
}


export interface IGeometryInfo
{
    atts: { [attName: string]: IVertexAttrib };
    indices?: IVertexIndex;
    count?: number;
    offset?: number;
    mode?: number;
}

export interface IUniformInfo
{
    name: string;
    type: number;
    location: WebGLUniformLocation;
    setter: (value: any) => void;
}

export interface IAttributeInfo
{
    name: string;
    location: number;
    setter: (value: IVertexAttrib) => void;
}


export interface IProgramInfo
{
    programName: string;
    program: WebGLProgram;
    uniformsDic: { [name: string]: IUniformInfo };
    attsDic: { [name: string]: IAttributeInfo };

}