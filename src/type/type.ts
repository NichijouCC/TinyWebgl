export type TypedArrType = Float64ArrayConstructor | Float32ArrayConstructor | Int32ArrayConstructor | Int16ArrayConstructor | Int8ArrayConstructor | Uint32ArrayConstructor | Uint16ArrayConstructor | Uint8ArrayConstructor;

export type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;

export type ArrayInfoType = number | number[] | ArrayBufferView | IArrayInfo;

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

export interface IArrayInfo
{
    buffer?: WebGLBuffer;

    value: number | number[] | ArrayBufferView;
    componentSize?: number;
    // size?: number;
    componentDataType?: number;//gl.float
    normalize?: boolean;
    offsetInBytes?: number;
    strideInBytes?: number;
    divisor?: number;
    drawType?: number;

    indexCount?: number;
    indexOffset?: number;
}


export interface IVertexAttrib
{
    name: string;
    value: TypedArray;

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
    count?: number;
    offset?: number;
}

export interface IVertexIndex
{
    value: TypedArray;
    componentDataType: number;

    buffer: WebGLBuffer;
    drawType: number;
}


export interface IGeometry
{
    atts: { [attName: string]: IVertexAttrib };
    indices: IVertexIndex;
    count?: number;
    offset?: number;
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