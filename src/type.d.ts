export type AttribInfo = {
    value?: number[] | ArrayBufferView;
    numComponents?: number;
    size?: number;
    type?: number;
    normalize?: boolean;
    offset?: number;
    stride?: number;
    divisor?: number;
    buffer: WebGLBuffer;
    drawType?: number;
};
export type FullArraySpec = {
    value?: number[] | ArrayBufferView;
    data: number | number[] | ArrayBufferView;
    numComponents?: number;
    type?: Function;
    size?: number;
    normalize?: boolean;
    stride?: number;
    offset?: number;
    divisor?: number;
    attrib?: string;
    name?: string;
    attribName?: string;
    buffer?: WebGLBuffer;
};
export type ArraySpec = number | number[] | ArrayBufferView | FullArraySpec;
export type Arrays = {
    [key: string]: ArraySpec;
};
export type BufferInfo = {
    numElements: number;
    elementType?: number;
    indices?: WebGLBuffer;
    attribs?: {
        [key: string]: AttribInfo;
    };
};