import {
    IbassProgramInfo,
    IvertexAttrib,
    IattributeInfo,
    IuniformInfo,
    IprogramOptions,
    IprogramInfo,
    IbassProgramOption,
    IprogramState,
    ItextureInfo,
} from "./Type";
import { setProgramStates, setProgramStatesWithCached } from "./state";

export enum ShaderTypeEnum {
    VS,
    FS,
}

export function createProgramInfo(gl: WebGLRenderingContext, op: IprogramOptions): Program {
    let bassProgram;
    if (!(op.program instanceof BassProgram)) {
        let bassprogramOp = op.program as IbassProgramOption;
        bassProgram = createBassProgramInfo(gl, bassprogramOp.vs, bassprogramOp.fs, bassprogramOp.name);
    } else {
        bassProgram = op.program;
    }
    if (bassProgram) {
        let info = new Program();
        info.bassProgram = bassProgram;
        info.uniforms = op.uniforms;
        info.states = op.states;
        return info;
    } else {
        return null;
    }
}

/**
 * bing program 、set uniforms 、set webgl states
 * @param gl
 * @param program
 */
export function setProgram(gl: WebGLRenderingContext, program: IprogramInfo) {
    gl.useProgram(program.bassProgram.program);

    if (program.uniforms) {
        setProgramUniforms(program.bassProgram, program.uniforms);
    }
    if (program.states) {
        setProgramStates(gl, program.states);
    }
}

export function setProgramWithCached(gl: WebGLRenderingContext, program: IprogramInfo) {
    if (gl._cachedProgram != program.bassProgram.program) {
        gl._cachedProgram = program.bassProgram.program;

        gl.useProgram(program.bassProgram.program);
    }
    if (program.uniforms) {
        setProgramUniforms(program.bassProgram, program.uniforms);
    }
    if (program.states) {
        setProgramStatesWithCached(gl, program.states);
    }
}

export function setProgramUniforms(info: IbassProgramInfo, uniforms: { [name: string]: any }) {
    for (let key in uniforms) {
        let setter = info.uniformsDic[key].setter;
        let value = uniforms[key];
        setter(value);
    }
}
class Program implements IprogramInfo {
    bassProgram: IbassProgramInfo;
    uniforms?: { [name: string]: any };
    states?: IprogramState;
}

class BassProgram implements IbassProgramInfo {
    readonly id: number;
    programName: string;
    program: WebGLProgram;
    uniformsDic: { [name: string]: IuniformInfo };
    attsDic: { [name: string]: IattributeInfo };

    constructor(
        programName: string,
        program: WebGLProgram,
        uniformsDic: { [name: string]: IuniformInfo },
        attsDic: { [name: string]: IattributeInfo },
    ) {
        this.id = BassProgram.nextID();
        this.programName = programName;
        this.program = program;
        this.uniformsDic = uniformsDic;
        this.attsDic = attsDic;
    }

    private static count = 0;
    static nextID() {
        return BassProgram.count++;
    }
}

export function createBassProgramInfo(gl: WebGLRenderingContext, vs: string, fs: string, name: string): BassProgram {
    let vsShader = createShader(gl, ShaderTypeEnum.VS, vs, name + "_vs");
    let fsShader = createShader(gl, ShaderTypeEnum.FS, fs, name + "_fs");
    if (vsShader && fsShader) {
        let item = gl.createProgram();
        gl.attachShader(item, vsShader.shader);
        gl.attachShader(item, fsShader.shader);
        gl.linkProgram(item);
        let check = gl.getProgramParameter(item, gl.LINK_STATUS);
        if (check == false) {
            let debguInfo =
                "ERROR: compile program Error!" + "VS:" + vs + "   FS:" + fs + "\n" + gl.getProgramInfoLog(item);
            console.error(debguInfo);
            gl.deleteProgram(item);
            return null;
        } else {
            let attsInfo = getAttributesInfo(gl, item);
            let uniformsInfo = getUniformsInfo(gl, item);
            return new BassProgram(name, item, uniformsInfo, attsInfo);
            // return { program: item, programName: name, uniformsDic: uniformsInfo, attsDic: attsInfo };
        }
    }
}

export function getAttributesInfo(
    gl: WebGLRenderingContext,
    program: WebGLProgram,
): { [attName: string]: IattributeInfo } {
    let attdic: { [attName: string]: IattributeInfo } = {};
    let numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
    for (let i = 0; i < numAttribs; i++) {
        let attribInfo = gl.getActiveAttrib(program, i);
        if (!attribInfo) break;
        let attName = attribInfo.name;
        let attlocation = gl.getAttribLocation(program, attName);
        let func = getAttributeSetter(gl, attlocation);

        attdic[attName] = { name: attName, location: attlocation, setter: func };
    }
    return attdic;
}

export function getUniformsInfo(gl: WebGLRenderingContext, program: WebGLProgram): { [name: string]: IuniformInfo } {
    let uniformDic: { [name: string]: IuniformInfo } = {};
    let numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

    let bindpoint = 0;
    for (let i = 0; i < numUniforms; i++) {
        let uniformInfo = gl.getActiveUniform(program, i);
        if (!uniformInfo) break;

        let name = uniformInfo.name;
        let type = uniformInfo.type;
        let location = gl.getUniformLocation(program, name);

        let beArray = false;
        // remove the array suffix.
        if (name.substr(-3) === "[0]") {
            beArray = true;
            // name = name.substr(0, name.length - 3);
        }
        if (location == null) continue;

        let func = getUniformSetter(gl, type, beArray, location, bindpoint);
        uniformDic[name] = { name: name, location: location, type: type, setter: func };
    }
    return uniformDic;
}

const FRAGMENT_SHADER = 0x8b30;
const VERTEX_SHADER = 0x8b31;

export function createShader(gl: WebGLRenderingContext, type: ShaderTypeEnum, source: string, name: string = null) {
    let target = type == ShaderTypeEnum.VS ? VERTEX_SHADER : FRAGMENT_SHADER;
    let item = gl.createShader(target);

    gl.shaderSource(item, source);
    gl.compileShader(item);
    let check = gl.getShaderParameter(item, gl.COMPILE_STATUS);
    if (check == false) {
        let debug =
            type == ShaderTypeEnum.VS ? "ERROR: compile  VS Shader Error! VS:" : "ERROR: compile FS Shader Error! FS:";
        debug = debug + name + ".\n";
        console.error(debug + gl.getShaderInfoLog(item));
        gl.deleteShader(item);
        return null;
    } else {
        return { shaderType: type, shaderName: name, shader: item };
    }
}

export function getUniformSetter(
    gl: WebGLRenderingContext,
    uniformType: number,
    beArray: boolean,
    location: WebGLUniformLocation,
    bindpoint: number,
) {
    switch (uniformType) {
        case gl.FLOAT:
            if (beArray) {
                return (value: any) => {
                    gl.uniform1fv(location, value);
                };
            } else {
                return (value: any) => {
                    gl.uniform1f(location, value);
                };
            }
            break;
        case gl.FLOAT_VEC2:
            return (value: Float32Array) => {
                gl.uniform2fv(location, value);
            };
            break;
        case gl.FLOAT_VEC3:
            return (value: Float32Array) => {
                gl.uniform3fv(location, value);
            };
            break;
        case gl.FLOAT_VEC4:
            return (value: Float32Array) => {
                gl.uniform4fv(location, value);
            };
            break;
        case gl.INT:
        case gl.BOOL:
            if (beArray) {
                return (value: number[]) => {
                    gl.uniform1iv(location, value);
                };
            } else {
                return (value: number) => {
                    gl.uniform1i(location, value);
                };
            }
            break;
        case gl.INT_VEC2:
        case gl.BOOL_VEC2:
            return (value: number[]) => {
                gl.uniform2iv(location, value);
            };
            break;
        case gl.INT_VEC3:
        case gl.BOOL_VEC3:
            return (value: number[]) => {
                gl.uniform3iv(location, value);
            };
            break;
        case gl.INT_VEC4:
        case gl.BOOL_VEC4:
            return (value: number[]) => {
                gl.uniform4fv(location, value);
            };
            break;
        case gl.FLOAT_MAT2:
            return (value: Float32Array) => {
                gl.uniformMatrix2fv(location, false, value);
            };
        case gl.FLOAT_MAT3:
            return (value: Float32Array) => {
                gl.uniformMatrix3fv(location, false, value);
            };
            break;
        case gl.FLOAT_MAT4:
            return (value: Float32Array) => {
                gl.uniformMatrix4fv(location, false, value);
            };
            break;
        case gl.SAMPLER_2D:
            let currentBindPoint = bindpoint++;
            return (value: ItextureInfo) => {
                gl.activeTexture(gl.TEXTURE0 + currentBindPoint);
                gl.bindTexture(gl.TEXTURE_2D, value.texture);
                gl.uniform1i(location, currentBindPoint);
            };
        default:
            console.error("uniformSetter not handle type:" + uniformType + " yet!");
            break;
    }
}

export function getAttributeSetter(gl: WebGLRenderingContext, location: number) {
    return (value: IvertexAttrib) => {
        gl.bindBuffer(gl.ARRAY_BUFFER, value.glBuffer);
        gl.enableVertexAttribArray(location);
        gl.vertexAttribPointer(
            location,
            value.componentSize,
            value.componentDataType,
            value.normalize,
            value.bytesStride,
            value.bytesOffset,
        );
        if (value.divisor !== undefined) {
            gl.vertexAttribDivisor(location, value.divisor);
        }
    };
}
