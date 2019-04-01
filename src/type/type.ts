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
