(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

    /* DataType */
    var BYTE = 0x1400;
    var UNSIGNED_BYTE = 0x1401;
    var SHORT = 0x1402;
    var UNSIGNED_SHORT = 0x1403;
    var INT = 0x1404;
    var UNSIGNED_INT = 0x1405;
    var FLOAT = 0x1406;
    var UNSIGNED_SHORT_4_4_4_4 = 0x8033;
    var UNSIGNED_SHORT_5_5_5_1 = 0x8034;
    var UNSIGNED_SHORT_5_6_5 = 0x8363;
    var HALF_FLOAT = 0x140b;
    var UNSIGNED_INT_2_10_10_10_REV = 0x8368;
    var UNSIGNED_INT_10F_11F_11F_REV = 0x8c3b;
    var UNSIGNED_INT_5_9_9_9_REV = 0x8c3e;
    var FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8dad;
    var UNSIGNED_INT_24_8 = 0x84fa;
    var glTypeToTypedArray = {};
    {
        var tt = glTypeToTypedArray;
        tt[BYTE] = Int8Array;
        tt[UNSIGNED_BYTE] = Uint8Array;
        tt[SHORT] = Int16Array;
        tt[UNSIGNED_SHORT] = Uint16Array;
        tt[INT] = Int32Array;
        tt[UNSIGNED_INT] = Uint32Array;
        tt[FLOAT] = Float32Array;
        tt[UNSIGNED_SHORT_4_4_4_4] = Uint16Array;
        tt[UNSIGNED_SHORT_5_5_5_1] = Uint16Array;
        tt[UNSIGNED_SHORT_5_6_5] = Uint16Array;
        tt[HALF_FLOAT] = Uint16Array;
        tt[UNSIGNED_INT_2_10_10_10_REV] = Uint32Array;
        tt[UNSIGNED_INT_10F_11F_11F_REV] = Uint32Array;
        tt[UNSIGNED_INT_5_9_9_9_REV] = Uint32Array;
        tt[FLOAT_32_UNSIGNED_INT_24_8_REV] = Uint32Array;
        tt[UNSIGNED_INT_24_8] = Uint32Array;
    }
    /**
     * Get the GL type for a typedArray
     */
    function getGLTypeForTypedArray(typedArray) {
        if (typedArray instanceof Int8Array) {
            return BYTE;
        }
        if (typedArray instanceof Uint8Array) {
            return UNSIGNED_BYTE;
        }
        if (typedArray instanceof Uint8ClampedArray) {
            return UNSIGNED_BYTE;
        }
        if (typedArray instanceof Int16Array) {
            return SHORT;
        }
        if (typedArray instanceof Uint16Array) {
            return UNSIGNED_SHORT;
        }
        if (typedArray instanceof Int32Array) {
            return INT;
        }
        if (typedArray instanceof Uint32Array) {
            return UNSIGNED_INT;
        }
        if (typedArray instanceof Float32Array) {
            return FLOAT;
        }
        throw "unsupported typed array to gl type";
    }
    function getArrayTypeForGLtype(glType) {
        if (glTypeToTypedArray[glType] != null) {
            return glTypeToTypedArray[glType];
        }
        throw "unsupported gltype to array type";
    }
    function getbytesForGLtype(glType) {
        if (glTypeToTypedArray[glType]) {
            return glTypeToTypedArray[glType].BYTES_PER_ELEMENT;
        }
        throw "unsupported gltype to bytesPerElement";
    }

    var UNSIGNED_SHORT$1 = 0x1403;
    var STATIC_DRAW = 0x88e4;
    var VertexIndex = /** @class */ (function () {
        function VertexIndex() {
        }
        VertexIndex.fromViewArrayInfo = function (data) {
            var newData = new VertexIndex();
            newData.name = "indices";
            if (data instanceof Array) {
                newData.viewBuffer = new Uint16Array(data);
            }
            else if (ArrayBuffer.isView(data)) {
                newData.viewBuffer = data;
            }
            else {
                var arraydata = data.value;
                if (arraydata instanceof Array) {
                    var type = data.componentDataType ? getArrayTypeForGLtype(data.componentDataType) : Uint16Array;
                    newData.viewBuffer = new type(arraydata);
                }
                else {
                    newData.viewBuffer = arraydata;
                }
            }
            var orginData = data;
            if (orginData.componentDataType == null) {
                newData.componentDataType = newData.viewBuffer
                    ? getGLTypeForTypedArray(newData.viewBuffer)
                    : UNSIGNED_SHORT$1;
            }
            else {
                newData.componentDataType = orginData.componentDataType;
            }
            if (orginData.count == null) {
                newData.count = newData.viewBuffer ? newData.viewBuffer.length : null;
            }
            else {
                newData.count = orginData.count;
            }
            newData.drawType = orginData.drawType ? newData.drawType : STATIC_DRAW;
            if (newData.count == null) {
                throw new Error("can not deduce geometry Indices count.");
            }
            // vertexData.count = newData.indexCount ? newData.indexCount : vertexData.length;
            return newData;
        };
        return VertexIndex;
    }());
    function createIndexBufferInfo(gl, data) {
        var vertexdata = VertexIndex.fromViewArrayInfo(data);
        if (vertexdata.glBuffer == null) {
            var buffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, vertexdata.viewBuffer, vertexdata.drawType);
            vertexdata.glBuffer = buffer;
        }
        return vertexdata;
    }

    var FLOAT$1 = 0x1406;
    var STATIC_DRAW$1 = 0x88e4;
    var VertexAtt = /** @class */ (function () {
        function VertexAtt() {
        }
        VertexAtt.fromViewArrayInfo = function (attName, data) {
            var newData = new VertexAtt();
            newData.name = attName;
            if (data instanceof Array) {
                newData.viewBuffer = new Float32Array(data);
            }
            else if (ArrayBuffer.isView(data)) {
                newData.viewBuffer = data;
            }
            else {
                var arraydata = data.value;
                if (arraydata instanceof Array) {
                    var type = data.componentDataType ? getArrayTypeForGLtype(data.componentDataType) : Float32Array;
                    newData.viewBuffer = new type(arraydata);
                }
                else {
                    newData.viewBuffer = arraydata;
                }
            }
            var orginData = data;
            if (orginData.componentDataType == null) {
                newData.componentDataType = newData.viewBuffer ? getGLTypeForTypedArray(newData.viewBuffer) : FLOAT$1;
            }
            else {
                newData.componentDataType = orginData.componentDataType;
            }
            newData.componentSize = orginData.componentSize ? orginData.componentSize : guessNumComponentsFromName(attName);
            newData.normalize = orginData.normalize != null ? orginData.normalize : false;
            newData.bytesOffset = orginData.bytesOffset ? orginData.bytesOffset : 0;
            newData.bytesStride = orginData.bytesStride ? orginData.bytesStride : 0;
            newData.drawType = orginData.drawType ? orginData.drawType : STATIC_DRAW$1;
            newData.divisor = orginData.divisor;
            newData.glBuffer = orginData.glBuffer;
            if (orginData.count == null) {
                var elementBytes = getbytesForGLtype(newData.componentDataType) * newData.componentSize;
                newData.count = newData.viewBuffer ? newData.viewBuffer.byteLength / elementBytes : undefined;
            }
            else {
                newData.count = orginData.count;
            }
            return newData;
        };
        return VertexAtt;
    }());
    function createAttributeBufferInfo(gl, attName, data) {
        var vertexdata = VertexAtt.fromViewArrayInfo(attName, data);
        if (vertexdata.glBuffer == null) {
            var buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, vertexdata.viewBuffer, vertexdata.drawType);
            vertexdata.glBuffer = buffer;
        }
        return vertexdata;
    }
    var uvRE = /(uv|texcoord)/;
    var colorRE = /color/;
    function guessNumComponentsFromName(name, length) {
        if (length === void 0) { length = null; }
        var numComponents;
        name = name.toLowerCase();
        if (uvRE.test(name)) {
            numComponents = 2;
        }
        else if (colorRE.test(name)) {
            numComponents = 4;
        }
        else {
            numComponents = 3; // position, normals, indices ...
        }
        // if (length % numComponents > 0)
        // {
        //     throw "Can not guess numComponents for attribute '" + name + "'. Tried " +
        //     numComponents + " but " + length +
        //     " values is not evenly divisible by " + numComponents +
        //     ". You should specify it.";
        // }
        return numComponents;
    }

    function setCullFaceState(gl, enableCullFace, cullBack) {
        if (enableCullFace === void 0) { enableCullFace = true; }
        if (cullBack === void 0) { cullBack = true; }
        if (enableCullFace) {
            gl.enable(gl.CULL_FACE);
            gl.cullFace(cullBack ? gl.BACK : gl.FRONT);
        }
        else {
            gl.disable(gl.CULL_FACE);
        }
    }
    function setDepthState(gl, depthWrite, depthTest) {
        if (depthWrite === void 0) { depthWrite = true; }
        if (depthTest === void 0) { depthTest = true; }
        gl.depthMask(depthWrite);
        if (depthTest) {
            gl.enable(gl.DEPTH_TEST);
        }
        else {
            gl.disable(gl.DEPTH_TEST);
        }
    }
    function setBlendState(gl, enableBlend, blendEquation, blendSrc, blendDst) {
        if (enableBlend === void 0) { enableBlend = false; }
        if (blendEquation === void 0) { blendEquation = gl.FUNC_ADD; }
        if (blendSrc === void 0) { blendSrc = gl.ONE; }
        if (blendDst === void 0) { blendDst = gl.ONE_MINUS_SRC_ALPHA; }
        if (enableBlend) {
            gl.enable(gl.BLEND);
            gl.blendEquation(blendEquation);
            gl.blendFunc(blendSrc, blendDst);
        }
    }
    function setStencilState(gl, enableStencilTest, stencilFunc, stencilRefValue, stencilMask, stencilFail, stencilPassZfail, stencilFaileZpass) {
        if (enableStencilTest === void 0) { enableStencilTest = false; }
        if (stencilFunc === void 0) { stencilFunc = gl.ALWAYS; }
        if (stencilRefValue === void 0) { stencilRefValue = 1; }
        if (stencilMask === void 0) { stencilMask = 0xff; }
        if (stencilFail === void 0) { stencilFail = gl.KEEP; }
        if (stencilPassZfail === void 0) { stencilPassZfail = gl.REPLACE; }
        if (stencilFaileZpass === void 0) { stencilFaileZpass = gl.KEEP; }
        if (enableStencilTest) {
            gl.enable(gl.STENCIL_TEST);
            gl.stencilFunc(stencilFunc, stencilRefValue, stencilMask);
            gl.stencilOp(stencilFail, stencilPassZfail, stencilFaileZpass);
        }
    }
    function setProgramStates(gl, state) {
        //---------------------------cullface
        setCullFaceState(gl, state.enableCullFace, state.cullBack);
        //----------------depth
        setDepthState(gl, state.depthWrite, state.depthTest);
        //------------------------blend
        setBlendState(gl, state.enableBlend, state.blendEquation, state.blendSrc, state.blendDst);
        //-------------------------stencil
        setStencilState(gl, state.enableStencilTest, state.stencilFunc, state.stencilRefValue, state.stencilMask, state.stencilFail, state.stencilPassZfail, state.stencilFaileZpass);
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

    var ShaderTypeEnum;
    (function (ShaderTypeEnum) {
        ShaderTypeEnum[ShaderTypeEnum["VS"] = 0] = "VS";
        ShaderTypeEnum[ShaderTypeEnum["FS"] = 1] = "FS";
    })(ShaderTypeEnum || (ShaderTypeEnum = {}));

    // export class GeometryInfo implements IgeometryInfo {
    //     vaoDic: { [programeId: number]: WebGLVertexArrayObject } = {};
    //     constructor() {
    //         this.id = GeometryInfo.nextID();
    //     }
    //     readonly id: number;
    //     primitiveType: number;
    //     atts: { [attName: string]: IvertexAttrib } = {};
    //     indices?: IvertexIndex;
    //     // mode: number;
    //     count: number;
    //     offset: number = 0;
    //     private static count = 0;
    //     static nextID() {
    //         return GeometryInfo.count++;
    //     }
    // }
    function createGeometryInfo$1(gl, op) {
        // let info = new GeometryInfo();
        var primitiveType = op.primitiveType != null ? op.primitiveType : gl.TRIANGLES;
        var info = {
            atts: {},
            vaoDic: {},
            offset: 0,
            count: null,
            primitiveType: primitiveType,
            name: op.name,
        };
        if (op.indices != null) {
            info.indices = createIndexBufferInfo(gl, op.indices);
            if (info.count == null) {
                info.count = info.indices.count;
            }
        }
        for (var attName in op.atts) {
            info.atts[attName] = createAttributeBufferInfo(gl, attName, op.atts[attName]);
            if (info.count == null) {
                info.count = info.atts[attName].count;
            }
        }
        return info;
    }
    function setGeometry$1(gl, geometry, program) {
        var programAtts = program.bassProgram.attsDic;
        for (var attName in programAtts) {
            if (geometry.atts[attName]) {
                programAtts[attName].setter(geometry.atts[attName]);
            }
        }
        if (geometry.indices) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geometry.indices.glBuffer);
        }
    }

    var ShaderTypeEnum$1;
    (function (ShaderTypeEnum) {
        ShaderTypeEnum[ShaderTypeEnum["VS"] = 0] = "VS";
        ShaderTypeEnum[ShaderTypeEnum["FS"] = 1] = "FS";
    })(ShaderTypeEnum$1 || (ShaderTypeEnum$1 = {}));
    function createProgramInfo$1(gl, op) {
        var bassProgram;
        if (!(op.program instanceof BassProgram$1)) {
            var bassprogramOp = op.program;
            bassProgram = createBassProgramInfo$1(gl, bassprogramOp.vs, bassprogramOp.fs, bassprogramOp.name);
        }
        else {
            bassProgram = op.program;
        }
        if (bassProgram) {
            var info = new Program$1();
            info.bassProgram = bassProgram;
            info.uniforms = op.uniforms;
            info.states = op.states;
            return info;
        }
        else {
            return null;
        }
    }
    /**
     * bing program 、set uniforms 、set webgl states
     * @param gl
     * @param program
     */
    function setProgram$1(gl, program) {
        gl.useProgram(program.bassProgram.program);
        if (program.uniforms) {
            setProgramUniforms$1(program.bassProgram, program.uniforms);
        }
        if (program.states) {
            setProgramStates(gl, program.states);
        }
    }
    function setProgramUniforms$1(info, uniforms) {
        for (var key in uniforms) {
            var setter = info.uniformsDic[key].setter;
            var value = uniforms[key];
            setter(value);
        }
    }
    var Program$1 = /** @class */ (function () {
        function Program() {
        }
        return Program;
    }());
    var BassProgram$1 = /** @class */ (function () {
        function BassProgram(programName, program, uniformsDic, attsDic) {
            this.id = BassProgram.nextID();
            this.programName = programName;
            this.program = program;
            this.uniformsDic = uniformsDic;
            this.attsDic = attsDic;
        }
        BassProgram.nextID = function () {
            return BassProgram.count++;
        };
        BassProgram.count = 0;
        return BassProgram;
    }());
    function createBassProgramInfo$1(gl, vs, fs, name) {
        var vsShader = createShader$1(gl, ShaderTypeEnum$1.VS, vs, name + "_vs");
        var fsShader = createShader$1(gl, ShaderTypeEnum$1.FS, fs, name + "_fs");
        if (vsShader && fsShader) {
            var item = gl.createProgram();
            gl.attachShader(item, vsShader.shader);
            gl.attachShader(item, fsShader.shader);
            gl.linkProgram(item);
            var check = gl.getProgramParameter(item, gl.LINK_STATUS);
            if (check == false) {
                var debguInfo = "ERROR: compile program Error!" + "VS:" + vs + "   FS:" + fs + "\n" + gl.getProgramInfoLog(item);
                console.error(debguInfo);
                gl.deleteProgram(item);
                return null;
            }
            else {
                var attsInfo = getAttributesInfo$1(gl, item);
                var uniformsInfo = getUniformsInfo$1(gl, item);
                return new BassProgram$1(name, item, uniformsInfo, attsInfo);
                // return { program: item, programName: name, uniformsDic: uniformsInfo, attsDic: attsInfo };
            }
        }
    }
    function getAttributesInfo$1(gl, program) {
        var attdic = {};
        var numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
        for (var i = 0; i < numAttribs; i++) {
            var attribInfo = gl.getActiveAttrib(program, i);
            if (!attribInfo)
                break;
            var attName = attribInfo.name;
            var attlocation = gl.getAttribLocation(program, attName);
            var func = getAttributeSetter$1(gl, attlocation);
            attdic[attName] = { name: attName, location: attlocation, setter: func };
        }
        return attdic;
    }
    function getUniformsInfo$1(gl, program) {
        var uniformDic = {};
        var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        var bindpoint = 0;
        for (var i = 0; i < numUniforms; i++) {
            var uniformInfo = gl.getActiveUniform(program, i);
            if (!uniformInfo)
                break;
            var name_1 = uniformInfo.name;
            var type = uniformInfo.type;
            var location_1 = gl.getUniformLocation(program, name_1);
            var beArray = false;
            // remove the array suffix.
            if (name_1.substr(-3) === "[0]") {
                beArray = true;
                // name = name.substr(0, name.length - 3);
            }
            if (location_1 == null)
                continue;
            var func = getUniformSetter$1(gl, type, beArray, location_1, bindpoint);
            uniformDic[name_1] = { name: name_1, location: location_1, type: type, setter: func };
        }
        return uniformDic;
    }
    var FRAGMENT_SHADER$1 = 0x8b30;
    var VERTEX_SHADER$1 = 0x8b31;
    function createShader$1(gl, type, source, name) {
        if (name === void 0) { name = null; }
        var target = type == ShaderTypeEnum$1.VS ? VERTEX_SHADER$1 : FRAGMENT_SHADER$1;
        var item = gl.createShader(target);
        gl.shaderSource(item, source);
        gl.compileShader(item);
        var check = gl.getShaderParameter(item, gl.COMPILE_STATUS);
        if (check == false) {
            var debug = type == ShaderTypeEnum$1.VS ? "ERROR: compile  VS Shader Error! VS:" : "ERROR: compile FS Shader Error! FS:";
            debug = debug + name + ".\n";
            console.error(debug + gl.getShaderInfoLog(item));
            gl.deleteShader(item);
            return null;
        }
        else {
            return { shaderType: type, shaderName: name, shader: item };
        }
    }
    function getUniformSetter$1(gl, uniformType, beArray, location, bindpoint) {
        switch (uniformType) {
            case gl.FLOAT:
                if (beArray) {
                    return function (value) {
                        gl.uniform1fv(location, value);
                    };
                }
                else {
                    return function (value) {
                        gl.uniform1f(location, value);
                    };
                }
                break;
            case gl.FLOAT_VEC2:
                return function (value) {
                    gl.uniform2fv(location, value);
                };
                break;
            case gl.FLOAT_VEC3:
                return function (value) {
                    gl.uniform3fv(location, value);
                };
                break;
            case gl.FLOAT_VEC4:
                return function (value) {
                    gl.uniform4fv(location, value);
                };
                break;
            case gl.INT:
            case gl.BOOL:
                if (beArray) {
                    return function (value) {
                        gl.uniform1iv(location, value);
                    };
                }
                else {
                    return function (value) {
                        gl.uniform1i(location, value);
                    };
                }
                break;
            case gl.INT_VEC2:
            case gl.BOOL_VEC2:
                return function (value) {
                    gl.uniform2iv(location, value);
                };
                break;
            case gl.INT_VEC3:
            case gl.BOOL_VEC3:
                return function (value) {
                    gl.uniform3iv(location, value);
                };
                break;
            case gl.INT_VEC4:
            case gl.BOOL_VEC4:
                return function (value) {
                    gl.uniform4fv(location, value);
                };
                break;
            case gl.FLOAT_MAT2:
                return function (value) {
                    gl.uniformMatrix2fv(location, false, value);
                };
            case gl.FLOAT_MAT3:
                return function (value) {
                    gl.uniformMatrix3fv(location, false, value);
                };
                break;
            case gl.FLOAT_MAT4:
                return function (value) {
                    gl.uniformMatrix4fv(location, false, value);
                };
                break;
            case gl.SAMPLER_2D:
                var currentBindPoint_1 = bindpoint++;
                return function (value) {
                    gl.activeTexture(gl.TEXTURE0 + currentBindPoint_1);
                    gl.bindTexture(gl.TEXTURE_2D, value.texture);
                    gl.uniform1i(location, currentBindPoint_1);
                };
            default:
                console.error("uniformSetter not handle type:" + uniformType + " yet!");
                break;
        }
    }
    function getAttributeSetter$1(gl, location) {
        return function (value) {
            gl.bindBuffer(gl.ARRAY_BUFFER, value.glBuffer);
            gl.enableVertexAttribArray(location);
            gl.vertexAttribPointer(location, value.componentSize, value.componentDataType, value.normalize, value.bytesStride, value.bytesOffset);
            if (value.divisor !== undefined) {
                gl.vertexAttribDivisor(location, value.divisor);
            }
        };
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function createTextureFromImageSource(gl, texOP) {
        var tex = gl.createTexture();
        texOP.width = texOP.img.width;
        texOP.height = texOP.img.height;
        var texDes = checkTextureOption(gl, texOP);
        gl.bindTexture(texDes.target, tex);
        gl.texParameteri(texDes.target, gl.TEXTURE_MAG_FILTER, texDes.filterMax);
        gl.texParameteri(texDes.target, gl.TEXTURE_MIN_FILTER, texDes.filterMin);
        gl.texParameteri(texDes.target, gl.TEXTURE_WRAP_S, texDes.wrapS);
        gl.texParameteri(texDes.target, gl.TEXTURE_WRAP_T, texDes.wrapT);
        if (texOP.mipmaps != null) {
            for (var i = 0; i < texOP.mipmaps.length; i++) {
                var levelData = texOP.mipmaps[i];
                gl.texImage2D(texDes.target, i, texDes.pixelFormat, texDes.pixelFormat, texDes.pixelDatatype, levelData.img);
            }
        }
        else {
            gl.texImage2D(texDes.target, 0, texDes.pixelFormat, texDes.pixelFormat, texDes.pixelDatatype, texOP.img);
            if (texDes.enableMipMap) {
                gl.generateMipmap(texDes.target);
            }
        }
        return {
            texture: tex,
            texDes: texDes,
        };
    }
    function isPowerOf2(value) {
        return (value & (value - 1)) === 0;
    }
    function canGenerateMipmap(gl, width, height) {
        if (!gl.beWebgl2) {
            return isPowerOf2(width) && isPowerOf2(height);
        }
        return true;
    }
    function canWrapReapeat(gl, width, height) {
        if (!gl.beWebgl2) {
            return isPowerOf2(width) && isPowerOf2(height);
        }
        return true;
    }
    function filterFallback(gl, filter) {
        if (filter === gl.NEAREST || filter === gl.NEAREST_MIPMAP_LINEAR || filter === gl.NEAREST_MIPMAP_NEAREST) {
            return gl.NEAREST;
        }
        return gl.LINEAR;
    }
    function checkTextureOption(gl, texOP) {
        var texdes = __assign({}, texOP);
        texdes.target = (texOP && texOP.target) || gl.TEXTURE_2D;
        texdes.pixelFormat = (texOP && texOP.pixelFormat) || gl.RGBA;
        texdes.pixelDatatype = (texOP && texOP.pixelDatatype) || gl.UNSIGNED_BYTE;
        var beCanWrapReapt = canWrapReapeat(gl, texdes.width, texdes.height);
        var beCanGenerateMipmap = canGenerateMipmap(gl, texdes.width, texdes.height);
        if (texdes.mipmaps != null) {
            texdes.enableMipMap = true;
        }
        else {
            texdes.enableMipMap = texOP.enableMipMap != false && beCanGenerateMipmap;
        }
        if (beCanWrapReapt) {
            texdes.wrapS = (texOP && texOP.wrapS) || gl.REPEAT;
            texdes.wrapT = (texOP && texOP.wrapT) || gl.REPEAT;
        }
        else {
            texdes.wrapS = texdes.wrapT = gl.CLAMP_TO_EDGE;
            if ((texOP && texOP.wrapS && texOP.wrapS == gl.REPEAT) || (texOP && texOP.wrapT && texOP.wrapT == gl.REPEAT)) {
                console.warn("texture repeat need Img size be power of 2!");
            }
        }
        if (texdes.enableMipMap) {
            texdes.filterMax = (texOP && texOP.filterMax) || gl.LINEAR;
            texdes.filterMin = (texOP && texOP.filterMin) || gl.NEAREST_MIPMAP_LINEAR;
        }
        else {
            texdes.filterMax = texOP && texOP.filterMax ? filterFallback(gl, texOP.filterMax) : gl.LINEAR;
            texdes.filterMin = texOP && texOP.filterMin ? filterFallback(gl, texOP.filterMax) : gl.LINEAR;
            if (texOP && texOP.filterMin && (texOP.filterMin != gl.NEAREST || texOP.filterMin != gl.LINEAR)) {
                console.warn("texture mimap filter need Img size be power of 2 And enable mimap option!");
            }
        }
        return texdes;
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

    WebGLRenderingContext.prototype.addExtension = function (extname) {
        var ext = this.getExtension(extname);
        if (ext) {
            switch (extname) {
                case "OES_vertex_array_object":
                    this.bindVertexArray = ext.bindVertexArrayOES.bind(ext);
                    this.createVertexArray = ext.createVertexArrayOES.bind(ext);
                    this.deleteVertexArray = ext.deleteVertexArrayOES.bind(ext);
                    this.beActiveVao = true;
                    return true;
                case "ANGLE_instanced_arrays":
                    this.vertexAttribDivisor = ext.vertexAttribDivisorANGLE.bind(ext);
                    this.drawElementsInstanced = ext.drawElementsInstancedANGLE.bind(ext);
                    this.drawArraysInstanced = ext.drawArraysInstancedANGLE.bind(ext);
                    this.beActiveInstance = true;
                    return true;
                case "WEBGL_depth_texture":
                    return true;
                default:
                    console.warn("Not handle in addExtension, type: " + extname);
                    return false;
            }
        }
        return false;
    };
    Object.defineProperty(WebGLRenderingContext, "beWebgl2", {
        get: function () {
            if (this.beWebgl2 == null) {
                var version = this.getParameter(this.VERSION);
                this.beWebgl2 = version.indexOf("WebGL 2.0") === 0;
            }
            return this._beWebgl2;
        },
        set: function (value) {
            this._beWebgl2 = value;
        },
    });
    function setUpWebgl(canvas, options) {
        if (options === void 0) { options = {}; }
        var type = options.context || "webgl";
        var gl = canvas.getContext(type, options.contextAtts);
        if (options.extentions != null) {
            options.extentions.forEach(function (ext) {
                gl.addExtension(ext);
            });
        }
        if (type == "webgl2") {
            gl.beActiveInstance = true;
            gl.beActiveVao = true;
        }
        // canvas.addEventListener('webglcontextlost', function (e)
        // {
        //     console.log(e);
        // }, false);
        return gl;
    }
    function drawBufferInfo(gl, geometry, instanceCount) {
        if (geometry.indices != null) {
            if (instanceCount != null) {
                gl.drawElementsInstanced(geometry.primitiveType, geometry.count, geometry.indices.componentDataType, geometry.offset || 0, instanceCount);
            }
            else {
                gl.drawElements(geometry.primitiveType, geometry.count, geometry.indices.componentDataType, geometry.offset || 0);
            }
        }
        else {
            if (instanceCount != null) {
                gl.drawArraysInstanced(geometry.primitiveType, geometry.offset || 0, geometry.count, instanceCount);
            }
            else {
                gl.drawArrays(geometry.primitiveType, geometry.offset || 0, geometry.count);
            }
        }
    }

    var DomeMatWithTex = /** @class */ (function () {
        function DomeMatWithTex() {
        }
        DomeMatWithTex.run = function () {
            var cc = document.getElementById("canvas");
            var gl = setUpWebgl(cc, { extentions: ["OES_vertex_array_object"] });
            // let be2 = gl;
            var geometry = createGeometryInfo$1(gl, {
                atts: {
                    aPos: [-0.5, -0.5, 0.5, -0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0],
                    aUv: [0, 1, 0, 0, 1, 0, 1, 1],
                },
                indices: [0, 1, 2, 0, 3, 2],
            });
            var defErrorVs = "\
              attribute vec3 aPos;\
              void main()\
              {\
                  highp vec4 tmplet_1=vec4(aPos.xyz,1.0);\
                  gl_Position = tmplet_1;\
              }";
            var defErrorFs = "\
              uniform highp vec4 _MainColor;\
              void main()\
              {\
                  gl_FragData[0] = _MainColor;\
              }";
            var uniforms = {};
            uniforms["_MainColor"] = new Float32Array([0.5, 1, 0.5, 1]);
            var bassporgram = createBassProgramInfo$1(gl, defErrorVs, defErrorFs, "ssxx");
            var program = createProgramInfo$1(gl, { program: bassporgram, uniforms: uniforms });
            var defVs = "\
              attribute vec3 aPos;\
              attribute vec2 aUv;\
              varying highp vec2 xlv_TEXCOORD0;   \
              void main()\
              {\
                  highp vec4 tmplet_1=vec4(aPos.xyz,1.0);\
                  xlv_TEXCOORD0=aUv;\
                  gl_Position = tmplet_1;\
              }";
            var defFs = "\
              uniform highp vec4 _MainColor;\
              varying highp vec2 xlv_TEXCOORD0;   \
              uniform sampler2D _MainTex;\
              void main()\
              {\
                  lowp vec4 tmplet_3= texture2D(_MainTex, xlv_TEXCOORD0);\
                  gl_FragData[0] = _MainColor*tmplet_3;\
              }";
            var state = { depthTest: false };
            var imag = new Image();
            imag.src = "./res/tes.png";
            imag.onload = function () {
                uniforms["_MainTex"] = createTextureFromImageSource(gl, { img: imag });
                program = createProgramInfo$1(gl, {
                    program: { vs: defVs, fs: defFs, name: "ssxxss" },
                    uniforms: uniforms,
                    states: state,
                });
            };
            var render = function () {
                gl.clearColor(0.5, 0.1, 0.5, 1);
                gl.clearDepth(0);
                gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
                // gl.useProgram(program.program);
                setProgram$1(gl, program);
                setGeometry$1(gl, geometry, program);
                drawBufferInfo(gl, geometry);
                requestAnimationFrame(function () {
                    render();
                });
            };
            render();
        };
        return DomeMatWithTex;
    }());

    console.log("@@@@@@@@@@@@@");
    window.onload = function () {
        // DemoInstance.run();
        // DemoVao.run();
        DomeMatWithTex.run();
    };

})));
//# sourceMappingURL=dome.js.map
