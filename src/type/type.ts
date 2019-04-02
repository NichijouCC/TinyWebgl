export type TypedArrType = Float64ArrayConstructor | Float32ArrayConstructor | Int32ArrayConstructor | Int16ArrayConstructor | Int8ArrayConstructor | Uint32ArrayConstructor | Uint16ArrayConstructor | Uint8ArrayConstructor;

export type ArrayInfoType = number[] | ArrayBufferView | IArrayInfo;


export interface IArrayInfo
{
    buffer?: WebGLBuffer;

    value?: number[] | ArrayBufferView;
    type?: TypedArrType;
    componentSize?: number;
    // size?: number;
    componentDataType?: number;
    normalize?: boolean;
    offsetInBytes?: number;
    strideInBytes?: number;
    divisor?: number;
    drawType?: number;
}


export interface IVertexAttrib
{
    name: string;
    value: ArrayBufferView;

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

export interface IVertexIndex
{
    value: Uint16Array;

    buffer: WebGLBuffer;
    drawType: number;

    count: number;
    offset: number;
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