(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

    /**
     * Enum containing WebGL Constant values by name.
     * for use without an active WebGL context, or in cases where certain constants are unavailable using the WebGL context
     * (For example, in [Safari 9]{@link https://github.com/AnalyticalGraphicsInc/cesium/issues/2989}).
     *
     * These match the constants from the [WebGL 1.0]{@link https://www.khronos.org/registry/webgl/specs/latest/1.0/}
     * and [WebGL 2.0]{@link https://www.khronos.org/registry/webgl/specs/latest/2.0/}
     * specifications.
     */
    var GlConstants;
    (function (GlConstants) {
        GlConstants[GlConstants["DEPTH_BUFFER_BIT"] = 256] = "DEPTH_BUFFER_BIT";
        GlConstants[GlConstants["STENCIL_BUFFER_BIT"] = 1024] = "STENCIL_BUFFER_BIT";
        GlConstants[GlConstants["COLOR_BUFFER_BIT"] = 16384] = "COLOR_BUFFER_BIT";
        GlConstants[GlConstants["POINTS"] = 0] = "POINTS";
        GlConstants[GlConstants["LINES"] = 1] = "LINES";
        GlConstants[GlConstants["LINE_LOOP"] = 2] = "LINE_LOOP";
        GlConstants[GlConstants["LINE_STRIP"] = 3] = "LINE_STRIP";
        GlConstants[GlConstants["TRIANGLES"] = 4] = "TRIANGLES";
        GlConstants[GlConstants["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
        GlConstants[GlConstants["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
        GlConstants[GlConstants["ZERO"] = 0] = "ZERO";
        GlConstants[GlConstants["ONE"] = 1] = "ONE";
        GlConstants[GlConstants["SRC_COLOR"] = 768] = "SRC_COLOR";
        GlConstants[GlConstants["ONE_MINUS_SRC_COLOR"] = 769] = "ONE_MINUS_SRC_COLOR";
        GlConstants[GlConstants["SRC_ALPHA"] = 770] = "SRC_ALPHA";
        GlConstants[GlConstants["ONE_MINUS_SRC_ALPHA"] = 771] = "ONE_MINUS_SRC_ALPHA";
        GlConstants[GlConstants["DST_ALPHA"] = 772] = "DST_ALPHA";
        GlConstants[GlConstants["ONE_MINUS_DST_ALPHA"] = 773] = "ONE_MINUS_DST_ALPHA";
        GlConstants[GlConstants["DST_COLOR"] = 774] = "DST_COLOR";
        GlConstants[GlConstants["ONE_MINUS_DST_COLOR"] = 775] = "ONE_MINUS_DST_COLOR";
        GlConstants[GlConstants["SRC_ALPHA_SATURATE"] = 776] = "SRC_ALPHA_SATURATE";
        GlConstants[GlConstants["FUNC_ADD"] = 32774] = "FUNC_ADD";
        GlConstants[GlConstants["BLEND_EQUATION"] = 32777] = "BLEND_EQUATION";
        GlConstants[GlConstants["BLEND_EQUATION_RGB"] = 32777] = "BLEND_EQUATION_RGB";
        GlConstants[GlConstants["BLEND_EQUATION_ALPHA"] = 34877] = "BLEND_EQUATION_ALPHA";
        GlConstants[GlConstants["FUNC_SUBTRACT"] = 32778] = "FUNC_SUBTRACT";
        GlConstants[GlConstants["FUNC_REVERSE_SUBTRACT"] = 32779] = "FUNC_REVERSE_SUBTRACT";
        GlConstants[GlConstants["BLEND_DST_RGB"] = 32968] = "BLEND_DST_RGB";
        GlConstants[GlConstants["BLEND_SRC_RGB"] = 32969] = "BLEND_SRC_RGB";
        GlConstants[GlConstants["BLEND_DST_ALPHA"] = 32970] = "BLEND_DST_ALPHA";
        GlConstants[GlConstants["BLEND_SRC_ALPHA"] = 32971] = "BLEND_SRC_ALPHA";
        GlConstants[GlConstants["CONSTANT_COLOR"] = 32769] = "CONSTANT_COLOR";
        GlConstants[GlConstants["ONE_MINUS_CONSTANT_COLOR"] = 32770] = "ONE_MINUS_CONSTANT_COLOR";
        GlConstants[GlConstants["CONSTANT_ALPHA"] = 32771] = "CONSTANT_ALPHA";
        GlConstants[GlConstants["ONE_MINUS_CONSTANT_ALPHA"] = 32772] = "ONE_MINUS_CONSTANT_ALPHA";
        GlConstants[GlConstants["BLEND_COLOR"] = 32773] = "BLEND_COLOR";
        GlConstants[GlConstants["ARRAY_BUFFER"] = 34962] = "ARRAY_BUFFER";
        GlConstants[GlConstants["ELEMENT_ARRAY_BUFFER"] = 34963] = "ELEMENT_ARRAY_BUFFER";
        GlConstants[GlConstants["ARRAY_BUFFER_BINDING"] = 34964] = "ARRAY_BUFFER_BINDING";
        GlConstants[GlConstants["ELEMENT_ARRAY_BUFFER_BINDING"] = 34965] = "ELEMENT_ARRAY_BUFFER_BINDING";
        GlConstants[GlConstants["STREAM_DRAW"] = 35040] = "STREAM_DRAW";
        GlConstants[GlConstants["STATIC_DRAW"] = 35044] = "STATIC_DRAW";
        GlConstants[GlConstants["DYNAMIC_DRAW"] = 35048] = "DYNAMIC_DRAW";
        GlConstants[GlConstants["BUFFER_SIZE"] = 34660] = "BUFFER_SIZE";
        GlConstants[GlConstants["BUFFER_USAGE"] = 34661] = "BUFFER_USAGE";
        GlConstants[GlConstants["CURRENT_VERTEX_ATTRIB"] = 34342] = "CURRENT_VERTEX_ATTRIB";
        GlConstants[GlConstants["FRONT"] = 1028] = "FRONT";
        GlConstants[GlConstants["BACK"] = 1029] = "BACK";
        GlConstants[GlConstants["FRONT_AND_BACK"] = 1032] = "FRONT_AND_BACK";
        GlConstants[GlConstants["CULL_FACE"] = 2884] = "CULL_FACE";
        GlConstants[GlConstants["BLEND"] = 3042] = "BLEND";
        GlConstants[GlConstants["DITHER"] = 3024] = "DITHER";
        GlConstants[GlConstants["STENCIL_TEST"] = 2960] = "STENCIL_TEST";
        GlConstants[GlConstants["DEPTH_TEST"] = 2929] = "DEPTH_TEST";
        GlConstants[GlConstants["SCISSOR_TEST"] = 3089] = "SCISSOR_TEST";
        GlConstants[GlConstants["POLYGON_OFFSET_FILL"] = 32823] = "POLYGON_OFFSET_FILL";
        GlConstants[GlConstants["SAMPLE_ALPHA_TO_COVERAGE"] = 32926] = "SAMPLE_ALPHA_TO_COVERAGE";
        GlConstants[GlConstants["SAMPLE_COVERAGE"] = 32928] = "SAMPLE_COVERAGE";
        GlConstants[GlConstants["NO_ERROR"] = 0] = "NO_ERROR";
        GlConstants[GlConstants["INVALID_ENUM"] = 1280] = "INVALID_ENUM";
        GlConstants[GlConstants["INVALID_VALUE"] = 1281] = "INVALID_VALUE";
        GlConstants[GlConstants["INVALID_OPERATION"] = 1282] = "INVALID_OPERATION";
        GlConstants[GlConstants["OUT_OF_MEMORY"] = 1285] = "OUT_OF_MEMORY";
        GlConstants[GlConstants["CW"] = 2304] = "CW";
        GlConstants[GlConstants["CCW"] = 2305] = "CCW";
        GlConstants[GlConstants["LINE_WIDTH"] = 2849] = "LINE_WIDTH";
        GlConstants[GlConstants["ALIASED_POINT_SIZE_RANGE"] = 33901] = "ALIASED_POINT_SIZE_RANGE";
        GlConstants[GlConstants["ALIASED_LINE_WIDTH_RANGE"] = 33902] = "ALIASED_LINE_WIDTH_RANGE";
        GlConstants[GlConstants["CULL_FACE_MODE"] = 2885] = "CULL_FACE_MODE";
        GlConstants[GlConstants["FRONT_FACE"] = 2886] = "FRONT_FACE";
        GlConstants[GlConstants["DEPTH_RANGE"] = 2928] = "DEPTH_RANGE";
        GlConstants[GlConstants["DEPTH_WRITEMASK"] = 2930] = "DEPTH_WRITEMASK";
        GlConstants[GlConstants["DEPTH_CLEAR_VALUE"] = 2931] = "DEPTH_CLEAR_VALUE";
        GlConstants[GlConstants["DEPTH_FUNC"] = 2932] = "DEPTH_FUNC";
        GlConstants[GlConstants["STENCIL_CLEAR_VALUE"] = 2961] = "STENCIL_CLEAR_VALUE";
        GlConstants[GlConstants["STENCIL_FUNC"] = 2962] = "STENCIL_FUNC";
        GlConstants[GlConstants["STENCIL_FAIL"] = 2964] = "STENCIL_FAIL";
        GlConstants[GlConstants["STENCIL_PASS_DEPTH_FAIL"] = 2965] = "STENCIL_PASS_DEPTH_FAIL";
        GlConstants[GlConstants["STENCIL_PASS_DEPTH_PASS"] = 2966] = "STENCIL_PASS_DEPTH_PASS";
        GlConstants[GlConstants["STENCIL_REF"] = 2967] = "STENCIL_REF";
        GlConstants[GlConstants["STENCIL_VALUE_MASK"] = 2963] = "STENCIL_VALUE_MASK";
        GlConstants[GlConstants["STENCIL_WRITEMASK"] = 2968] = "STENCIL_WRITEMASK";
        GlConstants[GlConstants["STENCIL_BACK_FUNC"] = 34816] = "STENCIL_BACK_FUNC";
        GlConstants[GlConstants["STENCIL_BACK_FAIL"] = 34817] = "STENCIL_BACK_FAIL";
        GlConstants[GlConstants["STENCIL_BACK_PASS_DEPTH_FAIL"] = 34818] = "STENCIL_BACK_PASS_DEPTH_FAIL";
        GlConstants[GlConstants["STENCIL_BACK_PASS_DEPTH_PASS"] = 34819] = "STENCIL_BACK_PASS_DEPTH_PASS";
        GlConstants[GlConstants["STENCIL_BACK_REF"] = 36003] = "STENCIL_BACK_REF";
        GlConstants[GlConstants["STENCIL_BACK_VALUE_MASK"] = 36004] = "STENCIL_BACK_VALUE_MASK";
        GlConstants[GlConstants["STENCIL_BACK_WRITEMASK"] = 36005] = "STENCIL_BACK_WRITEMASK";
        GlConstants[GlConstants["VIEWPORT"] = 2978] = "VIEWPORT";
        GlConstants[GlConstants["SCISSOR_BOX"] = 3088] = "SCISSOR_BOX";
        GlConstants[GlConstants["COLOR_CLEAR_VALUE"] = 3106] = "COLOR_CLEAR_VALUE";
        GlConstants[GlConstants["COLOR_WRITEMASK"] = 3107] = "COLOR_WRITEMASK";
        GlConstants[GlConstants["UNPACK_ALIGNMENT"] = 3317] = "UNPACK_ALIGNMENT";
        GlConstants[GlConstants["PACK_ALIGNMENT"] = 3333] = "PACK_ALIGNMENT";
        GlConstants[GlConstants["MAX_TEXTURE_SIZE"] = 3379] = "MAX_TEXTURE_SIZE";
        GlConstants[GlConstants["MAX_VIEWPORT_DIMS"] = 3386] = "MAX_VIEWPORT_DIMS";
        GlConstants[GlConstants["SUBPIXEL_BITS"] = 3408] = "SUBPIXEL_BITS";
        GlConstants[GlConstants["RED_BITS"] = 3410] = "RED_BITS";
        GlConstants[GlConstants["GREEN_BITS"] = 3411] = "GREEN_BITS";
        GlConstants[GlConstants["BLUE_BITS"] = 3412] = "BLUE_BITS";
        GlConstants[GlConstants["ALPHA_BITS"] = 3413] = "ALPHA_BITS";
        GlConstants[GlConstants["DEPTH_BITS"] = 3414] = "DEPTH_BITS";
        GlConstants[GlConstants["STENCIL_BITS"] = 3415] = "STENCIL_BITS";
        GlConstants[GlConstants["POLYGON_OFFSET_UNITS"] = 10752] = "POLYGON_OFFSET_UNITS";
        GlConstants[GlConstants["POLYGON_OFFSET_FACTOR"] = 32824] = "POLYGON_OFFSET_FACTOR";
        GlConstants[GlConstants["TEXTURE_BINDING_2D"] = 32873] = "TEXTURE_BINDING_2D";
        GlConstants[GlConstants["SAMPLE_BUFFERS"] = 32936] = "SAMPLE_BUFFERS";
        GlConstants[GlConstants["SAMPLES"] = 32937] = "SAMPLES";
        GlConstants[GlConstants["SAMPLE_COVERAGE_VALUE"] = 32938] = "SAMPLE_COVERAGE_VALUE";
        GlConstants[GlConstants["SAMPLE_COVERAGE_INVERT"] = 32939] = "SAMPLE_COVERAGE_INVERT";
        GlConstants[GlConstants["COMPRESSED_TEXTURE_FORMATS"] = 34467] = "COMPRESSED_TEXTURE_FORMATS";
        GlConstants[GlConstants["DONT_CARE"] = 4352] = "DONT_CARE";
        GlConstants[GlConstants["FASTEST"] = 4353] = "FASTEST";
        GlConstants[GlConstants["NICEST"] = 4354] = "NICEST";
        GlConstants[GlConstants["GENERATE_MIPMAP_HINT"] = 33170] = "GENERATE_MIPMAP_HINT";
        GlConstants[GlConstants["BYTE"] = 5120] = "BYTE";
        GlConstants[GlConstants["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
        GlConstants[GlConstants["SHORT"] = 5122] = "SHORT";
        GlConstants[GlConstants["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
        GlConstants[GlConstants["INT"] = 5124] = "INT";
        GlConstants[GlConstants["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
        GlConstants[GlConstants["FLOAT"] = 5126] = "FLOAT";
        GlConstants[GlConstants["DEPTH_COMPONENT"] = 6402] = "DEPTH_COMPONENT";
        GlConstants[GlConstants["ALPHA"] = 6406] = "ALPHA";
        GlConstants[GlConstants["RGB"] = 6407] = "RGB";
        GlConstants[GlConstants["RGBA"] = 6408] = "RGBA";
        GlConstants[GlConstants["LUMINANCE"] = 6409] = "LUMINANCE";
        GlConstants[GlConstants["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
        GlConstants[GlConstants["UNSIGNED_SHORT_4_4_4_4"] = 32819] = "UNSIGNED_SHORT_4_4_4_4";
        GlConstants[GlConstants["UNSIGNED_SHORT_5_5_5_1"] = 32820] = "UNSIGNED_SHORT_5_5_5_1";
        GlConstants[GlConstants["UNSIGNED_SHORT_5_6_5"] = 33635] = "UNSIGNED_SHORT_5_6_5";
        GlConstants[GlConstants["FRAGMENT_SHADER"] = 35632] = "FRAGMENT_SHADER";
        GlConstants[GlConstants["VERTEX_SHADER"] = 35633] = "VERTEX_SHADER";
        GlConstants[GlConstants["MAX_VERTEX_ATTRIBS"] = 34921] = "MAX_VERTEX_ATTRIBS";
        GlConstants[GlConstants["MAX_VERTEX_UNIFORM_VECTORS"] = 36347] = "MAX_VERTEX_UNIFORM_VECTORS";
        GlConstants[GlConstants["MAX_VARYING_VECTORS"] = 36348] = "MAX_VARYING_VECTORS";
        GlConstants[GlConstants["MAX_COMBINED_TEXTURE_IMAGE_UNITS"] = 35661] = "MAX_COMBINED_TEXTURE_IMAGE_UNITS";
        GlConstants[GlConstants["MAX_VERTEX_TEXTURE_IMAGE_UNITS"] = 35660] = "MAX_VERTEX_TEXTURE_IMAGE_UNITS";
        GlConstants[GlConstants["MAX_TEXTURE_IMAGE_UNITS"] = 34930] = "MAX_TEXTURE_IMAGE_UNITS";
        GlConstants[GlConstants["MAX_FRAGMENT_UNIFORM_VECTORS"] = 36349] = "MAX_FRAGMENT_UNIFORM_VECTORS";
        GlConstants[GlConstants["SHADER_TYPE"] = 35663] = "SHADER_TYPE";
        GlConstants[GlConstants["DELETE_STATUS"] = 35712] = "DELETE_STATUS";
        GlConstants[GlConstants["LINK_STATUS"] = 35714] = "LINK_STATUS";
        GlConstants[GlConstants["VALIDATE_STATUS"] = 35715] = "VALIDATE_STATUS";
        GlConstants[GlConstants["ATTACHED_SHADERS"] = 35717] = "ATTACHED_SHADERS";
        GlConstants[GlConstants["ACTIVE_UNIFORMS"] = 35718] = "ACTIVE_UNIFORMS";
        GlConstants[GlConstants["ACTIVE_ATTRIBUTES"] = 35721] = "ACTIVE_ATTRIBUTES";
        GlConstants[GlConstants["SHADING_LANGUAGE_VERSION"] = 35724] = "SHADING_LANGUAGE_VERSION";
        GlConstants[GlConstants["CURRENT_PROGRAM"] = 35725] = "CURRENT_PROGRAM";
        GlConstants[GlConstants["NEVER"] = 512] = "NEVER";
        GlConstants[GlConstants["LESS"] = 513] = "LESS";
        GlConstants[GlConstants["EQUAL"] = 514] = "EQUAL";
        GlConstants[GlConstants["LEQUAL"] = 515] = "LEQUAL";
        GlConstants[GlConstants["GREATER"] = 516] = "GREATER";
        GlConstants[GlConstants["NOTEQUAL"] = 517] = "NOTEQUAL";
        GlConstants[GlConstants["GEQUAL"] = 518] = "GEQUAL";
        GlConstants[GlConstants["ALWAYS"] = 519] = "ALWAYS";
        GlConstants[GlConstants["KEEP"] = 7680] = "KEEP";
        GlConstants[GlConstants["REPLACE"] = 7681] = "REPLACE";
        GlConstants[GlConstants["INCR"] = 7682] = "INCR";
        GlConstants[GlConstants["DECR"] = 7683] = "DECR";
        GlConstants[GlConstants["INVERT"] = 5386] = "INVERT";
        GlConstants[GlConstants["INCR_WRAP"] = 34055] = "INCR_WRAP";
        GlConstants[GlConstants["DECR_WRAP"] = 34056] = "DECR_WRAP";
        GlConstants[GlConstants["VENDOR"] = 7936] = "VENDOR";
        GlConstants[GlConstants["RENDERER"] = 7937] = "RENDERER";
        GlConstants[GlConstants["VERSION"] = 7938] = "VERSION";
        GlConstants[GlConstants["NEAREST"] = 9728] = "NEAREST";
        GlConstants[GlConstants["LINEAR"] = 9729] = "LINEAR";
        GlConstants[GlConstants["NEAREST_MIPMAP_NEAREST"] = 9984] = "NEAREST_MIPMAP_NEAREST";
        GlConstants[GlConstants["LINEAR_MIPMAP_NEAREST"] = 9985] = "LINEAR_MIPMAP_NEAREST";
        GlConstants[GlConstants["NEAREST_MIPMAP_LINEAR"] = 9986] = "NEAREST_MIPMAP_LINEAR";
        GlConstants[GlConstants["LINEAR_MIPMAP_LINEAR"] = 9987] = "LINEAR_MIPMAP_LINEAR";
        GlConstants[GlConstants["TEXTURE_MAG_FILTER"] = 10240] = "TEXTURE_MAG_FILTER";
        GlConstants[GlConstants["TEXTURE_MIN_FILTER"] = 10241] = "TEXTURE_MIN_FILTER";
        GlConstants[GlConstants["TEXTURE_WRAP_S"] = 10242] = "TEXTURE_WRAP_S";
        GlConstants[GlConstants["TEXTURE_WRAP_T"] = 10243] = "TEXTURE_WRAP_T";
        GlConstants[GlConstants["TEXTURE_2D"] = 3553] = "TEXTURE_2D";
        GlConstants[GlConstants["TEXTURE"] = 5890] = "TEXTURE";
        GlConstants[GlConstants["TEXTURE_CUBE_MAP"] = 34067] = "TEXTURE_CUBE_MAP";
        GlConstants[GlConstants["TEXTURE_BINDING_CUBE_MAP"] = 34068] = "TEXTURE_BINDING_CUBE_MAP";
        GlConstants[GlConstants["TEXTURE_CUBE_MAP_POSITIVE_X"] = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X";
        GlConstants[GlConstants["TEXTURE_CUBE_MAP_NEGATIVE_X"] = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X";
        GlConstants[GlConstants["TEXTURE_CUBE_MAP_POSITIVE_Y"] = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y";
        GlConstants[GlConstants["TEXTURE_CUBE_MAP_NEGATIVE_Y"] = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y";
        GlConstants[GlConstants["TEXTURE_CUBE_MAP_POSITIVE_Z"] = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z";
        GlConstants[GlConstants["TEXTURE_CUBE_MAP_NEGATIVE_Z"] = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
        GlConstants[GlConstants["MAX_CUBE_MAP_TEXTURE_SIZE"] = 34076] = "MAX_CUBE_MAP_TEXTURE_SIZE";
        GlConstants[GlConstants["TEXTURE0"] = 33984] = "TEXTURE0";
        GlConstants[GlConstants["TEXTURE1"] = 33985] = "TEXTURE1";
        GlConstants[GlConstants["TEXTURE2"] = 33986] = "TEXTURE2";
        GlConstants[GlConstants["TEXTURE3"] = 33987] = "TEXTURE3";
        GlConstants[GlConstants["TEXTURE4"] = 33988] = "TEXTURE4";
        GlConstants[GlConstants["TEXTURE5"] = 33989] = "TEXTURE5";
        GlConstants[GlConstants["TEXTURE6"] = 33990] = "TEXTURE6";
        GlConstants[GlConstants["TEXTURE7"] = 33991] = "TEXTURE7";
        GlConstants[GlConstants["TEXTURE8"] = 33992] = "TEXTURE8";
        GlConstants[GlConstants["TEXTURE9"] = 33993] = "TEXTURE9";
        GlConstants[GlConstants["TEXTURE10"] = 33994] = "TEXTURE10";
        GlConstants[GlConstants["TEXTURE11"] = 33995] = "TEXTURE11";
        GlConstants[GlConstants["TEXTURE12"] = 33996] = "TEXTURE12";
        GlConstants[GlConstants["TEXTURE13"] = 33997] = "TEXTURE13";
        GlConstants[GlConstants["TEXTURE14"] = 33998] = "TEXTURE14";
        GlConstants[GlConstants["TEXTURE15"] = 33999] = "TEXTURE15";
        GlConstants[GlConstants["TEXTURE16"] = 34000] = "TEXTURE16";
        GlConstants[GlConstants["TEXTURE17"] = 34001] = "TEXTURE17";
        GlConstants[GlConstants["TEXTURE18"] = 34002] = "TEXTURE18";
        GlConstants[GlConstants["TEXTURE19"] = 34003] = "TEXTURE19";
        GlConstants[GlConstants["TEXTURE20"] = 34004] = "TEXTURE20";
        GlConstants[GlConstants["TEXTURE21"] = 34005] = "TEXTURE21";
        GlConstants[GlConstants["TEXTURE22"] = 34006] = "TEXTURE22";
        GlConstants[GlConstants["TEXTURE23"] = 34007] = "TEXTURE23";
        GlConstants[GlConstants["TEXTURE24"] = 34008] = "TEXTURE24";
        GlConstants[GlConstants["TEXTURE25"] = 34009] = "TEXTURE25";
        GlConstants[GlConstants["TEXTURE26"] = 34010] = "TEXTURE26";
        GlConstants[GlConstants["TEXTURE27"] = 34011] = "TEXTURE27";
        GlConstants[GlConstants["TEXTURE28"] = 34012] = "TEXTURE28";
        GlConstants[GlConstants["TEXTURE29"] = 34013] = "TEXTURE29";
        GlConstants[GlConstants["TEXTURE30"] = 34014] = "TEXTURE30";
        GlConstants[GlConstants["TEXTURE31"] = 34015] = "TEXTURE31";
        GlConstants[GlConstants["ACTIVE_TEXTURE"] = 34016] = "ACTIVE_TEXTURE";
        GlConstants[GlConstants["REPEAT"] = 10497] = "REPEAT";
        GlConstants[GlConstants["CLAMP_TO_EDGE"] = 33071] = "CLAMP_TO_EDGE";
        GlConstants[GlConstants["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
        GlConstants[GlConstants["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
        GlConstants[GlConstants["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
        GlConstants[GlConstants["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
        GlConstants[GlConstants["INT_VEC2"] = 35667] = "INT_VEC2";
        GlConstants[GlConstants["INT_VEC3"] = 35668] = "INT_VEC3";
        GlConstants[GlConstants["INT_VEC4"] = 35669] = "INT_VEC4";
        GlConstants[GlConstants["BOOL"] = 35670] = "BOOL";
        GlConstants[GlConstants["BOOL_VEC2"] = 35671] = "BOOL_VEC2";
        GlConstants[GlConstants["BOOL_VEC3"] = 35672] = "BOOL_VEC3";
        GlConstants[GlConstants["BOOL_VEC4"] = 35673] = "BOOL_VEC4";
        GlConstants[GlConstants["FLOAT_MAT2"] = 35674] = "FLOAT_MAT2";
        GlConstants[GlConstants["FLOAT_MAT3"] = 35675] = "FLOAT_MAT3";
        GlConstants[GlConstants["FLOAT_MAT4"] = 35676] = "FLOAT_MAT4";
        GlConstants[GlConstants["SAMPLER_2D"] = 35678] = "SAMPLER_2D";
        GlConstants[GlConstants["SAMPLER_CUBE"] = 35680] = "SAMPLER_CUBE";
        GlConstants[GlConstants["VERTEX_ATTRIB_ARRAY_ENABLED"] = 34338] = "VERTEX_ATTRIB_ARRAY_ENABLED";
        GlConstants[GlConstants["VERTEX_ATTRIB_ARRAY_SIZE"] = 34339] = "VERTEX_ATTRIB_ARRAY_SIZE";
        GlConstants[GlConstants["VERTEX_ATTRIB_ARRAY_STRIDE"] = 34340] = "VERTEX_ATTRIB_ARRAY_STRIDE";
        GlConstants[GlConstants["VERTEX_ATTRIB_ARRAY_TYPE"] = 34341] = "VERTEX_ATTRIB_ARRAY_TYPE";
        GlConstants[GlConstants["VERTEX_ATTRIB_ARRAY_NORMALIZED"] = 34922] = "VERTEX_ATTRIB_ARRAY_NORMALIZED";
        GlConstants[GlConstants["VERTEX_ATTRIB_ARRAY_POINTER"] = 34373] = "VERTEX_ATTRIB_ARRAY_POINTER";
        GlConstants[GlConstants["VERTEX_ATTRIB_ARRAY_BUFFER_BINDING"] = 34975] = "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING";
        GlConstants[GlConstants["IMPLEMENTATION_COLOR_READ_TYPE"] = 35738] = "IMPLEMENTATION_COLOR_READ_TYPE";
        GlConstants[GlConstants["IMPLEMENTATION_COLOR_READ_FORMAT"] = 35739] = "IMPLEMENTATION_COLOR_READ_FORMAT";
        GlConstants[GlConstants["COMPILE_STATUS"] = 35713] = "COMPILE_STATUS";
        GlConstants[GlConstants["LOW_FLOAT"] = 36336] = "LOW_FLOAT";
        GlConstants[GlConstants["MEDIUM_FLOAT"] = 36337] = "MEDIUM_FLOAT";
        GlConstants[GlConstants["HIGH_FLOAT"] = 36338] = "HIGH_FLOAT";
        GlConstants[GlConstants["LOW_INT"] = 36339] = "LOW_INT";
        GlConstants[GlConstants["MEDIUM_INT"] = 36340] = "MEDIUM_INT";
        GlConstants[GlConstants["HIGH_INT"] = 36341] = "HIGH_INT";
        GlConstants[GlConstants["FRAMEBUFFER"] = 36160] = "FRAMEBUFFER";
        GlConstants[GlConstants["RENDERBUFFER"] = 36161] = "RENDERBUFFER";
        GlConstants[GlConstants["RGBA4"] = 32854] = "RGBA4";
        GlConstants[GlConstants["RGB5_A1"] = 32855] = "RGB5_A1";
        GlConstants[GlConstants["RGB565"] = 36194] = "RGB565";
        GlConstants[GlConstants["DEPTH_COMPONENT16"] = 33189] = "DEPTH_COMPONENT16";
        GlConstants[GlConstants["STENCIL_INDEX"] = 6401] = "STENCIL_INDEX";
        GlConstants[GlConstants["STENCIL_INDEX8"] = 36168] = "STENCIL_INDEX8";
        GlConstants[GlConstants["DEPTH_STENCIL"] = 34041] = "DEPTH_STENCIL";
        GlConstants[GlConstants["RENDERBUFFER_WIDTH"] = 36162] = "RENDERBUFFER_WIDTH";
        GlConstants[GlConstants["RENDERBUFFER_HEIGHT"] = 36163] = "RENDERBUFFER_HEIGHT";
        GlConstants[GlConstants["RENDERBUFFER_INTERNAL_FORMAT"] = 36164] = "RENDERBUFFER_INTERNAL_FORMAT";
        GlConstants[GlConstants["RENDERBUFFER_RED_SIZE"] = 36176] = "RENDERBUFFER_RED_SIZE";
        GlConstants[GlConstants["RENDERBUFFER_GREEN_SIZE"] = 36177] = "RENDERBUFFER_GREEN_SIZE";
        GlConstants[GlConstants["RENDERBUFFER_BLUE_SIZE"] = 36178] = "RENDERBUFFER_BLUE_SIZE";
        GlConstants[GlConstants["RENDERBUFFER_ALPHA_SIZE"] = 36179] = "RENDERBUFFER_ALPHA_SIZE";
        GlConstants[GlConstants["RENDERBUFFER_DEPTH_SIZE"] = 36180] = "RENDERBUFFER_DEPTH_SIZE";
        GlConstants[GlConstants["RENDERBUFFER_STENCIL_SIZE"] = 36181] = "RENDERBUFFER_STENCIL_SIZE";
        GlConstants[GlConstants["FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE"] = 36048] = "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE";
        GlConstants[GlConstants["FRAMEBUFFER_ATTACHMENT_OBJECT_NAME"] = 36049] = "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME";
        GlConstants[GlConstants["FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL"] = 36050] = "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL";
        GlConstants[GlConstants["FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE"] = 36051] = "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE";
        GlConstants[GlConstants["COLOR_ATTACHMENT0"] = 36064] = "COLOR_ATTACHMENT0";
        GlConstants[GlConstants["DEPTH_ATTACHMENT"] = 36096] = "DEPTH_ATTACHMENT";
        GlConstants[GlConstants["STENCIL_ATTACHMENT"] = 36128] = "STENCIL_ATTACHMENT";
        GlConstants[GlConstants["DEPTH_STENCIL_ATTACHMENT"] = 33306] = "DEPTH_STENCIL_ATTACHMENT";
        GlConstants[GlConstants["NONE"] = 0] = "NONE";
        GlConstants[GlConstants["FRAMEBUFFER_COMPLETE"] = 36053] = "FRAMEBUFFER_COMPLETE";
        GlConstants[GlConstants["FRAMEBUFFER_INCOMPLETE_ATTACHMENT"] = 36054] = "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
        GlConstants[GlConstants["FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"] = 36055] = "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
        GlConstants[GlConstants["FRAMEBUFFER_INCOMPLETE_DIMENSIONS"] = 36057] = "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
        GlConstants[GlConstants["FRAMEBUFFER_UNSUPPORTED"] = 36061] = "FRAMEBUFFER_UNSUPPORTED";
        GlConstants[GlConstants["FRAMEBUFFER_BINDING"] = 36006] = "FRAMEBUFFER_BINDING";
        GlConstants[GlConstants["RENDERBUFFER_BINDING"] = 36007] = "RENDERBUFFER_BINDING";
        GlConstants[GlConstants["MAX_RENDERBUFFER_SIZE"] = 34024] = "MAX_RENDERBUFFER_SIZE";
        GlConstants[GlConstants["INVALID_FRAMEBUFFER_OPERATION"] = 1286] = "INVALID_FRAMEBUFFER_OPERATION";
        GlConstants[GlConstants["UNPACK_FLIP_Y_WEBGL"] = 37440] = "UNPACK_FLIP_Y_WEBGL";
        GlConstants[GlConstants["UNPACK_PREMULTIPLY_ALPHA_WEBGL"] = 37441] = "UNPACK_PREMULTIPLY_ALPHA_WEBGL";
        GlConstants[GlConstants["CONTEXT_LOST_WEBGL"] = 37442] = "CONTEXT_LOST_WEBGL";
        GlConstants[GlConstants["UNPACK_COLORSPACE_CONVERSION_WEBGL"] = 37443] = "UNPACK_COLORSPACE_CONVERSION_WEBGL";
        GlConstants[GlConstants["BROWSER_DEFAULT_WEBGL"] = 37444] = "BROWSER_DEFAULT_WEBGL";
        // WEBGL_compressed_texture_s3tc
        GlConstants[GlConstants["COMPRESSED_RGB_S3TC_DXT1_EXT"] = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT";
        GlConstants[GlConstants["COMPRESSED_RGBA_S3TC_DXT1_EXT"] = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT";
        GlConstants[GlConstants["COMPRESSED_RGBA_S3TC_DXT3_EXT"] = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT";
        GlConstants[GlConstants["COMPRESSED_RGBA_S3TC_DXT5_EXT"] = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT";
        // WEBGL_compressed_texture_pvrtc
        GlConstants[GlConstants["COMPRESSED_RGB_PVRTC_4BPPV1_IMG"] = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG";
        GlConstants[GlConstants["COMPRESSED_RGB_PVRTC_2BPPV1_IMG"] = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG";
        GlConstants[GlConstants["COMPRESSED_RGBA_PVRTC_4BPPV1_IMG"] = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG";
        GlConstants[GlConstants["COMPRESSED_RGBA_PVRTC_2BPPV1_IMG"] = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG";
        // WEBGL_compressed_texture_etc1
        GlConstants[GlConstants["COMPRESSED_RGB_ETC1_WEBGL"] = 36196] = "COMPRESSED_RGB_ETC1_WEBGL";
        // Desktop OpenGL
        GlConstants[GlConstants["DOUBLE"] = 5130] = "DOUBLE";
        // WebGL 2
        GlConstants[GlConstants["READ_BUFFER"] = 3074] = "READ_BUFFER";
        GlConstants[GlConstants["UNPACK_ROW_LENGTH"] = 3314] = "UNPACK_ROW_LENGTH";
        GlConstants[GlConstants["UNPACK_SKIP_ROWS"] = 3315] = "UNPACK_SKIP_ROWS";
        GlConstants[GlConstants["UNPACK_SKIP_PIXELS"] = 3316] = "UNPACK_SKIP_PIXELS";
        GlConstants[GlConstants["PACK_ROW_LENGTH"] = 3330] = "PACK_ROW_LENGTH";
        GlConstants[GlConstants["PACK_SKIP_ROWS"] = 3331] = "PACK_SKIP_ROWS";
        GlConstants[GlConstants["PACK_SKIP_PIXELS"] = 3332] = "PACK_SKIP_PIXELS";
        GlConstants[GlConstants["COLOR"] = 6144] = "COLOR";
        GlConstants[GlConstants["DEPTH"] = 6145] = "DEPTH";
        GlConstants[GlConstants["STENCIL"] = 6146] = "STENCIL";
        GlConstants[GlConstants["RED"] = 6403] = "RED";
        GlConstants[GlConstants["RGB8"] = 32849] = "RGB8";
        GlConstants[GlConstants["RGBA8"] = 32856] = "RGBA8";
        GlConstants[GlConstants["RGB10_A2"] = 32857] = "RGB10_A2";
        GlConstants[GlConstants["TEXTURE_BINDING_3D"] = 32874] = "TEXTURE_BINDING_3D";
        GlConstants[GlConstants["UNPACK_SKIP_IMAGES"] = 32877] = "UNPACK_SKIP_IMAGES";
        GlConstants[GlConstants["UNPACK_IMAGE_HEIGHT"] = 32878] = "UNPACK_IMAGE_HEIGHT";
        GlConstants[GlConstants["TEXTURE_3D"] = 32879] = "TEXTURE_3D";
        GlConstants[GlConstants["TEXTURE_WRAP_R"] = 32882] = "TEXTURE_WRAP_R";
        GlConstants[GlConstants["MAX_3D_TEXTURE_SIZE"] = 32883] = "MAX_3D_TEXTURE_SIZE";
        GlConstants[GlConstants["UNSIGNED_INT_2_10_10_10_REV"] = 33640] = "UNSIGNED_INT_2_10_10_10_REV";
        GlConstants[GlConstants["MAX_ELEMENTS_VERTICES"] = 33000] = "MAX_ELEMENTS_VERTICES";
        GlConstants[GlConstants["MAX_ELEMENTS_INDICES"] = 33001] = "MAX_ELEMENTS_INDICES";
        GlConstants[GlConstants["TEXTURE_MIN_LOD"] = 33082] = "TEXTURE_MIN_LOD";
        GlConstants[GlConstants["TEXTURE_MAX_LOD"] = 33083] = "TEXTURE_MAX_LOD";
        GlConstants[GlConstants["TEXTURE_BASE_LEVEL"] = 33084] = "TEXTURE_BASE_LEVEL";
        GlConstants[GlConstants["TEXTURE_MAX_LEVEL"] = 33085] = "TEXTURE_MAX_LEVEL";
        GlConstants[GlConstants["MIN"] = 32775] = "MIN";
        GlConstants[GlConstants["MAX"] = 32776] = "MAX";
        GlConstants[GlConstants["DEPTH_COMPONENT24"] = 33190] = "DEPTH_COMPONENT24";
        GlConstants[GlConstants["MAX_TEXTURE_LOD_BIAS"] = 34045] = "MAX_TEXTURE_LOD_BIAS";
        GlConstants[GlConstants["TEXTURE_COMPARE_MODE"] = 34892] = "TEXTURE_COMPARE_MODE";
        GlConstants[GlConstants["TEXTURE_COMPARE_FUNC"] = 34893] = "TEXTURE_COMPARE_FUNC";
        GlConstants[GlConstants["CURRENT_QUERY"] = 34917] = "CURRENT_QUERY";
        GlConstants[GlConstants["QUERY_RESULT"] = 34918] = "QUERY_RESULT";
        GlConstants[GlConstants["QUERY_RESULT_AVAILABLE"] = 34919] = "QUERY_RESULT_AVAILABLE";
        GlConstants[GlConstants["STREAM_READ"] = 35041] = "STREAM_READ";
        GlConstants[GlConstants["STREAM_COPY"] = 35042] = "STREAM_COPY";
        GlConstants[GlConstants["STATIC_READ"] = 35045] = "STATIC_READ";
        GlConstants[GlConstants["STATIC_COPY"] = 35046] = "STATIC_COPY";
        GlConstants[GlConstants["DYNAMIC_READ"] = 35049] = "DYNAMIC_READ";
        GlConstants[GlConstants["DYNAMIC_COPY"] = 35050] = "DYNAMIC_COPY";
        GlConstants[GlConstants["MAX_DRAW_BUFFERS"] = 34852] = "MAX_DRAW_BUFFERS";
        GlConstants[GlConstants["DRAW_BUFFER0"] = 34853] = "DRAW_BUFFER0";
        GlConstants[GlConstants["DRAW_BUFFER1"] = 34854] = "DRAW_BUFFER1";
        GlConstants[GlConstants["DRAW_BUFFER2"] = 34855] = "DRAW_BUFFER2";
        GlConstants[GlConstants["DRAW_BUFFER3"] = 34856] = "DRAW_BUFFER3";
        GlConstants[GlConstants["DRAW_BUFFER4"] = 34857] = "DRAW_BUFFER4";
        GlConstants[GlConstants["DRAW_BUFFER5"] = 34858] = "DRAW_BUFFER5";
        GlConstants[GlConstants["DRAW_BUFFER6"] = 34859] = "DRAW_BUFFER6";
        GlConstants[GlConstants["DRAW_BUFFER7"] = 34860] = "DRAW_BUFFER7";
        GlConstants[GlConstants["DRAW_BUFFER8"] = 34861] = "DRAW_BUFFER8";
        GlConstants[GlConstants["DRAW_BUFFER9"] = 34862] = "DRAW_BUFFER9";
        GlConstants[GlConstants["DRAW_BUFFER10"] = 34863] = "DRAW_BUFFER10";
        GlConstants[GlConstants["DRAW_BUFFER11"] = 34864] = "DRAW_BUFFER11";
        GlConstants[GlConstants["DRAW_BUFFER12"] = 34865] = "DRAW_BUFFER12";
        GlConstants[GlConstants["DRAW_BUFFER13"] = 34866] = "DRAW_BUFFER13";
        GlConstants[GlConstants["DRAW_BUFFER14"] = 34867] = "DRAW_BUFFER14";
        GlConstants[GlConstants["DRAW_BUFFER15"] = 34868] = "DRAW_BUFFER15";
        GlConstants[GlConstants["MAX_FRAGMENT_UNIFORM_COMPONENTS"] = 35657] = "MAX_FRAGMENT_UNIFORM_COMPONENTS";
        GlConstants[GlConstants["MAX_VERTEX_UNIFORM_COMPONENTS"] = 35658] = "MAX_VERTEX_UNIFORM_COMPONENTS";
        GlConstants[GlConstants["SAMPLER_3D"] = 35679] = "SAMPLER_3D";
        GlConstants[GlConstants["SAMPLER_2D_SHADOW"] = 35682] = "SAMPLER_2D_SHADOW";
        GlConstants[GlConstants["FRAGMENT_SHADER_DERIVATIVE_HINT"] = 35723] = "FRAGMENT_SHADER_DERIVATIVE_HINT";
        GlConstants[GlConstants["PIXEL_PACK_BUFFER"] = 35051] = "PIXEL_PACK_BUFFER";
        GlConstants[GlConstants["PIXEL_UNPACK_BUFFER"] = 35052] = "PIXEL_UNPACK_BUFFER";
        GlConstants[GlConstants["PIXEL_PACK_BUFFER_BINDING"] = 35053] = "PIXEL_PACK_BUFFER_BINDING";
        GlConstants[GlConstants["PIXEL_UNPACK_BUFFER_BINDING"] = 35055] = "PIXEL_UNPACK_BUFFER_BINDING";
        GlConstants[GlConstants["FLOAT_MAT2X3"] = 35685] = "FLOAT_MAT2X3";
        GlConstants[GlConstants["FLOAT_MAT2X4"] = 35686] = "FLOAT_MAT2X4";
        GlConstants[GlConstants["FLOAT_MAT3X2"] = 35687] = "FLOAT_MAT3X2";
        GlConstants[GlConstants["FLOAT_MAT3X4"] = 35688] = "FLOAT_MAT3X4";
        GlConstants[GlConstants["FLOAT_MAT4X2"] = 35689] = "FLOAT_MAT4X2";
        GlConstants[GlConstants["FLOAT_MAT4X3"] = 35690] = "FLOAT_MAT4X3";
        GlConstants[GlConstants["SRGB"] = 35904] = "SRGB";
        GlConstants[GlConstants["SRGB8"] = 35905] = "SRGB8";
        GlConstants[GlConstants["SRGB8_ALPHA8"] = 35907] = "SRGB8_ALPHA8";
        GlConstants[GlConstants["COMPARE_REF_TO_TEXTURE"] = 34894] = "COMPARE_REF_TO_TEXTURE";
        GlConstants[GlConstants["RGBA32F"] = 34836] = "RGBA32F";
        GlConstants[GlConstants["RGB32F"] = 34837] = "RGB32F";
        GlConstants[GlConstants["RGBA16F"] = 34842] = "RGBA16F";
        GlConstants[GlConstants["RGB16F"] = 34843] = "RGB16F";
        GlConstants[GlConstants["VERTEX_ATTRIB_ARRAY_INTEGER"] = 35069] = "VERTEX_ATTRIB_ARRAY_INTEGER";
        GlConstants[GlConstants["MAX_ARRAY_TEXTURE_LAYERS"] = 35071] = "MAX_ARRAY_TEXTURE_LAYERS";
        GlConstants[GlConstants["MIN_PROGRAM_TEXEL_OFFSET"] = 35076] = "MIN_PROGRAM_TEXEL_OFFSET";
        GlConstants[GlConstants["MAX_PROGRAM_TEXEL_OFFSET"] = 35077] = "MAX_PROGRAM_TEXEL_OFFSET";
        GlConstants[GlConstants["MAX_VARYING_COMPONENTS"] = 35659] = "MAX_VARYING_COMPONENTS";
        GlConstants[GlConstants["TEXTURE_2D_ARRAY"] = 35866] = "TEXTURE_2D_ARRAY";
        GlConstants[GlConstants["TEXTURE_BINDING_2D_ARRAY"] = 35869] = "TEXTURE_BINDING_2D_ARRAY";
        GlConstants[GlConstants["R11F_G11F_B10F"] = 35898] = "R11F_G11F_B10F";
        GlConstants[GlConstants["UNSIGNED_INT_10F_11F_11F_REV"] = 35899] = "UNSIGNED_INT_10F_11F_11F_REV";
        GlConstants[GlConstants["RGB9_E5"] = 35901] = "RGB9_E5";
        GlConstants[GlConstants["UNSIGNED_INT_5_9_9_9_REV"] = 35902] = "UNSIGNED_INT_5_9_9_9_REV";
        GlConstants[GlConstants["TRANSFORM_FEEDBACK_BUFFER_MODE"] = 35967] = "TRANSFORM_FEEDBACK_BUFFER_MODE";
        GlConstants[GlConstants["MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS"] = 35968] = "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS";
        GlConstants[GlConstants["TRANSFORM_FEEDBACK_VARYINGS"] = 35971] = "TRANSFORM_FEEDBACK_VARYINGS";
        GlConstants[GlConstants["TRANSFORM_FEEDBACK_BUFFER_START"] = 35972] = "TRANSFORM_FEEDBACK_BUFFER_START";
        GlConstants[GlConstants["TRANSFORM_FEEDBACK_BUFFER_SIZE"] = 35973] = "TRANSFORM_FEEDBACK_BUFFER_SIZE";
        GlConstants[GlConstants["TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN"] = 35976] = "TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN";
        GlConstants[GlConstants["RASTERIZER_DISCARD"] = 35977] = "RASTERIZER_DISCARD";
        GlConstants[GlConstants["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS"] = 35978] = "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS";
        GlConstants[GlConstants["MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS"] = 35979] = "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS";
        GlConstants[GlConstants["INTERLEAVED_ATTRIBS"] = 35980] = "INTERLEAVED_ATTRIBS";
        GlConstants[GlConstants["SEPARATE_ATTRIBS"] = 35981] = "SEPARATE_ATTRIBS";
        GlConstants[GlConstants["TRANSFORM_FEEDBACK_BUFFER"] = 35982] = "TRANSFORM_FEEDBACK_BUFFER";
        GlConstants[GlConstants["TRANSFORM_FEEDBACK_BUFFER_BINDING"] = 35983] = "TRANSFORM_FEEDBACK_BUFFER_BINDING";
        GlConstants[GlConstants["RGBA32UI"] = 36208] = "RGBA32UI";
        GlConstants[GlConstants["RGB32UI"] = 36209] = "RGB32UI";
        GlConstants[GlConstants["RGBA16UI"] = 36214] = "RGBA16UI";
        GlConstants[GlConstants["RGB16UI"] = 36215] = "RGB16UI";
        GlConstants[GlConstants["RGBA8UI"] = 36220] = "RGBA8UI";
        GlConstants[GlConstants["RGB8UI"] = 36221] = "RGB8UI";
        GlConstants[GlConstants["RGBA32I"] = 36226] = "RGBA32I";
        GlConstants[GlConstants["RGB32I"] = 36227] = "RGB32I";
        GlConstants[GlConstants["RGBA16I"] = 36232] = "RGBA16I";
        GlConstants[GlConstants["RGB16I"] = 36233] = "RGB16I";
        GlConstants[GlConstants["RGBA8I"] = 36238] = "RGBA8I";
        GlConstants[GlConstants["RGB8I"] = 36239] = "RGB8I";
        GlConstants[GlConstants["RED_INTEGER"] = 36244] = "RED_INTEGER";
        GlConstants[GlConstants["RGB_INTEGER"] = 36248] = "RGB_INTEGER";
        GlConstants[GlConstants["RGBA_INTEGER"] = 36249] = "RGBA_INTEGER";
        GlConstants[GlConstants["SAMPLER_2D_ARRAY"] = 36289] = "SAMPLER_2D_ARRAY";
        GlConstants[GlConstants["SAMPLER_2D_ARRAY_SHADOW"] = 36292] = "SAMPLER_2D_ARRAY_SHADOW";
        GlConstants[GlConstants["SAMPLER_CUBE_SHADOW"] = 36293] = "SAMPLER_CUBE_SHADOW";
        GlConstants[GlConstants["UNSIGNED_INT_VEC2"] = 36294] = "UNSIGNED_INT_VEC2";
        GlConstants[GlConstants["UNSIGNED_INT_VEC3"] = 36295] = "UNSIGNED_INT_VEC3";
        GlConstants[GlConstants["UNSIGNED_INT_VEC4"] = 36296] = "UNSIGNED_INT_VEC4";
        GlConstants[GlConstants["INT_SAMPLER_2D"] = 36298] = "INT_SAMPLER_2D";
        GlConstants[GlConstants["INT_SAMPLER_3D"] = 36299] = "INT_SAMPLER_3D";
        GlConstants[GlConstants["INT_SAMPLER_CUBE"] = 36300] = "INT_SAMPLER_CUBE";
        GlConstants[GlConstants["INT_SAMPLER_2D_ARRAY"] = 36303] = "INT_SAMPLER_2D_ARRAY";
        GlConstants[GlConstants["UNSIGNED_INT_SAMPLER_2D"] = 36306] = "UNSIGNED_INT_SAMPLER_2D";
        GlConstants[GlConstants["UNSIGNED_INT_SAMPLER_3D"] = 36307] = "UNSIGNED_INT_SAMPLER_3D";
        GlConstants[GlConstants["UNSIGNED_INT_SAMPLER_CUBE"] = 36308] = "UNSIGNED_INT_SAMPLER_CUBE";
        GlConstants[GlConstants["UNSIGNED_INT_SAMPLER_2D_ARRAY"] = 36311] = "UNSIGNED_INT_SAMPLER_2D_ARRAY";
        GlConstants[GlConstants["DEPTH_COMPONENT32F"] = 36012] = "DEPTH_COMPONENT32F";
        GlConstants[GlConstants["DEPTH32F_STENCIL8"] = 36013] = "DEPTH32F_STENCIL8";
        GlConstants[GlConstants["FLOAT_32_UNSIGNED_INT_24_8_REV"] = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV";
        GlConstants[GlConstants["FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING"] = 33296] = "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING";
        GlConstants[GlConstants["FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE"] = 33297] = "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE";
        GlConstants[GlConstants["FRAMEBUFFER_ATTACHMENT_RED_SIZE"] = 33298] = "FRAMEBUFFER_ATTACHMENT_RED_SIZE";
        GlConstants[GlConstants["FRAMEBUFFER_ATTACHMENT_GREEN_SIZE"] = 33299] = "FRAMEBUFFER_ATTACHMENT_GREEN_SIZE";
        GlConstants[GlConstants["FRAMEBUFFER_ATTACHMENT_BLUE_SIZE"] = 33300] = "FRAMEBUFFER_ATTACHMENT_BLUE_SIZE";
        GlConstants[GlConstants["FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE"] = 33301] = "FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE";
        GlConstants[GlConstants["FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE"] = 33302] = "FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE";
        GlConstants[GlConstants["FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE"] = 33303] = "FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE";
        GlConstants[GlConstants["FRAMEBUFFER_DEFAULT"] = 33304] = "FRAMEBUFFER_DEFAULT";
        GlConstants[GlConstants["UNSIGNED_INT_24_8"] = 34042] = "UNSIGNED_INT_24_8";
        GlConstants[GlConstants["DEPTH24_STENCIL8"] = 35056] = "DEPTH24_STENCIL8";
        GlConstants[GlConstants["UNSIGNED_NORMALIZED"] = 35863] = "UNSIGNED_NORMALIZED";
        GlConstants[GlConstants["DRAW_FRAMEBUFFER_BINDING"] = 36006] = "DRAW_FRAMEBUFFER_BINDING";
        GlConstants[GlConstants["READ_FRAMEBUFFER"] = 36008] = "READ_FRAMEBUFFER";
        GlConstants[GlConstants["DRAW_FRAMEBUFFER"] = 36009] = "DRAW_FRAMEBUFFER";
        GlConstants[GlConstants["READ_FRAMEBUFFER_BINDING"] = 36010] = "READ_FRAMEBUFFER_BINDING";
        GlConstants[GlConstants["RENDERBUFFER_SAMPLES"] = 36011] = "RENDERBUFFER_SAMPLES";
        GlConstants[GlConstants["FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER"] = 36052] = "FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER";
        GlConstants[GlConstants["MAX_COLOR_ATTACHMENTS"] = 36063] = "MAX_COLOR_ATTACHMENTS";
        GlConstants[GlConstants["COLOR_ATTACHMENT1"] = 36065] = "COLOR_ATTACHMENT1";
        GlConstants[GlConstants["COLOR_ATTACHMENT2"] = 36066] = "COLOR_ATTACHMENT2";
        GlConstants[GlConstants["COLOR_ATTACHMENT3"] = 36067] = "COLOR_ATTACHMENT3";
        GlConstants[GlConstants["COLOR_ATTACHMENT4"] = 36068] = "COLOR_ATTACHMENT4";
        GlConstants[GlConstants["COLOR_ATTACHMENT5"] = 36069] = "COLOR_ATTACHMENT5";
        GlConstants[GlConstants["COLOR_ATTACHMENT6"] = 36070] = "COLOR_ATTACHMENT6";
        GlConstants[GlConstants["COLOR_ATTACHMENT7"] = 36071] = "COLOR_ATTACHMENT7";
        GlConstants[GlConstants["COLOR_ATTACHMENT8"] = 36072] = "COLOR_ATTACHMENT8";
        GlConstants[GlConstants["COLOR_ATTACHMENT9"] = 36073] = "COLOR_ATTACHMENT9";
        GlConstants[GlConstants["COLOR_ATTACHMENT10"] = 36074] = "COLOR_ATTACHMENT10";
        GlConstants[GlConstants["COLOR_ATTACHMENT11"] = 36075] = "COLOR_ATTACHMENT11";
        GlConstants[GlConstants["COLOR_ATTACHMENT12"] = 36076] = "COLOR_ATTACHMENT12";
        GlConstants[GlConstants["COLOR_ATTACHMENT13"] = 36077] = "COLOR_ATTACHMENT13";
        GlConstants[GlConstants["COLOR_ATTACHMENT14"] = 36078] = "COLOR_ATTACHMENT14";
        GlConstants[GlConstants["COLOR_ATTACHMENT15"] = 36079] = "COLOR_ATTACHMENT15";
        GlConstants[GlConstants["FRAMEBUFFER_INCOMPLETE_MULTISAMPLE"] = 36182] = "FRAMEBUFFER_INCOMPLETE_MULTISAMPLE";
        GlConstants[GlConstants["MAX_SAMPLES"] = 36183] = "MAX_SAMPLES";
        GlConstants[GlConstants["HALF_FLOAT"] = 5131] = "HALF_FLOAT";
        GlConstants[GlConstants["HALF_FLOAT_OES"] = 36193] = "HALF_FLOAT_OES";
        GlConstants[GlConstants["RG"] = 33319] = "RG";
        GlConstants[GlConstants["RG_INTEGER"] = 33320] = "RG_INTEGER";
        GlConstants[GlConstants["R8"] = 33321] = "R8";
        GlConstants[GlConstants["RG8"] = 33323] = "RG8";
        GlConstants[GlConstants["R16F"] = 33325] = "R16F";
        GlConstants[GlConstants["R32F"] = 33326] = "R32F";
        GlConstants[GlConstants["RG16F"] = 33327] = "RG16F";
        GlConstants[GlConstants["RG32F"] = 33328] = "RG32F";
        GlConstants[GlConstants["R8I"] = 33329] = "R8I";
        GlConstants[GlConstants["R8UI"] = 33330] = "R8UI";
        GlConstants[GlConstants["R16I"] = 33331] = "R16I";
        GlConstants[GlConstants["R16UI"] = 33332] = "R16UI";
        GlConstants[GlConstants["R32I"] = 33333] = "R32I";
        GlConstants[GlConstants["R32UI"] = 33334] = "R32UI";
        GlConstants[GlConstants["RG8I"] = 33335] = "RG8I";
        GlConstants[GlConstants["RG8UI"] = 33336] = "RG8UI";
        GlConstants[GlConstants["RG16I"] = 33337] = "RG16I";
        GlConstants[GlConstants["RG16UI"] = 33338] = "RG16UI";
        GlConstants[GlConstants["RG32I"] = 33339] = "RG32I";
        GlConstants[GlConstants["RG32UI"] = 33340] = "RG32UI";
        GlConstants[GlConstants["VERTEX_ARRAY_BINDING"] = 34229] = "VERTEX_ARRAY_BINDING";
        GlConstants[GlConstants["R8_SNORM"] = 36756] = "R8_SNORM";
        GlConstants[GlConstants["RG8_SNORM"] = 36757] = "RG8_SNORM";
        GlConstants[GlConstants["RGB8_SNORM"] = 36758] = "RGB8_SNORM";
        GlConstants[GlConstants["RGBA8_SNORM"] = 36759] = "RGBA8_SNORM";
        GlConstants[GlConstants["SIGNED_NORMALIZED"] = 36764] = "SIGNED_NORMALIZED";
        GlConstants[GlConstants["COPY_READ_BUFFER"] = 36662] = "COPY_READ_BUFFER";
        GlConstants[GlConstants["COPY_WRITE_BUFFER"] = 36663] = "COPY_WRITE_BUFFER";
        GlConstants[GlConstants["COPY_READ_BUFFER_BINDING"] = 36662] = "COPY_READ_BUFFER_BINDING";
        GlConstants[GlConstants["COPY_WRITE_BUFFER_BINDING"] = 36663] = "COPY_WRITE_BUFFER_BINDING";
        GlConstants[GlConstants["UNIFORM_BUFFER"] = 35345] = "UNIFORM_BUFFER";
        GlConstants[GlConstants["UNIFORM_BUFFER_BINDING"] = 35368] = "UNIFORM_BUFFER_BINDING";
        GlConstants[GlConstants["UNIFORM_BUFFER_START"] = 35369] = "UNIFORM_BUFFER_START";
        GlConstants[GlConstants["UNIFORM_BUFFER_SIZE"] = 35370] = "UNIFORM_BUFFER_SIZE";
        GlConstants[GlConstants["MAX_VERTEX_UNIFORM_BLOCKS"] = 35371] = "MAX_VERTEX_UNIFORM_BLOCKS";
        GlConstants[GlConstants["MAX_FRAGMENT_UNIFORM_BLOCKS"] = 35373] = "MAX_FRAGMENT_UNIFORM_BLOCKS";
        GlConstants[GlConstants["MAX_COMBINED_UNIFORM_BLOCKS"] = 35374] = "MAX_COMBINED_UNIFORM_BLOCKS";
        GlConstants[GlConstants["MAX_UNIFORM_BUFFER_BINDINGS"] = 35375] = "MAX_UNIFORM_BUFFER_BINDINGS";
        GlConstants[GlConstants["MAX_UNIFORM_BLOCK_SIZE"] = 35376] = "MAX_UNIFORM_BLOCK_SIZE";
        GlConstants[GlConstants["MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS"] = 35377] = "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS";
        GlConstants[GlConstants["MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS"] = 35379] = "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS";
        GlConstants[GlConstants["UNIFORM_BUFFER_OFFSET_ALIGNMENT"] = 35380] = "UNIFORM_BUFFER_OFFSET_ALIGNMENT";
        GlConstants[GlConstants["ACTIVE_UNIFORM_BLOCKS"] = 35382] = "ACTIVE_UNIFORM_BLOCKS";
        GlConstants[GlConstants["UNIFORM_TYPE"] = 35383] = "UNIFORM_TYPE";
        GlConstants[GlConstants["UNIFORM_SIZE"] = 35384] = "UNIFORM_SIZE";
        GlConstants[GlConstants["UNIFORM_BLOCK_INDEX"] = 35386] = "UNIFORM_BLOCK_INDEX";
        GlConstants[GlConstants["UNIFORM_OFFSET"] = 35387] = "UNIFORM_OFFSET";
        GlConstants[GlConstants["UNIFORM_ARRAY_STRIDE"] = 35388] = "UNIFORM_ARRAY_STRIDE";
        GlConstants[GlConstants["UNIFORM_MATRIX_STRIDE"] = 35389] = "UNIFORM_MATRIX_STRIDE";
        GlConstants[GlConstants["UNIFORM_IS_ROW_MAJOR"] = 35390] = "UNIFORM_IS_ROW_MAJOR";
        GlConstants[GlConstants["UNIFORM_BLOCK_BINDING"] = 35391] = "UNIFORM_BLOCK_BINDING";
        GlConstants[GlConstants["UNIFORM_BLOCK_DATA_SIZE"] = 35392] = "UNIFORM_BLOCK_DATA_SIZE";
        GlConstants[GlConstants["UNIFORM_BLOCK_ACTIVE_UNIFORMS"] = 35394] = "UNIFORM_BLOCK_ACTIVE_UNIFORMS";
        GlConstants[GlConstants["UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES"] = 35395] = "UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES";
        GlConstants[GlConstants["UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER"] = 35396] = "UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER";
        GlConstants[GlConstants["UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER"] = 35398] = "UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER";
        GlConstants[GlConstants["INVALID_INDEX"] = 4294967295] = "INVALID_INDEX";
        GlConstants[GlConstants["MAX_VERTEX_OUTPUT_COMPONENTS"] = 37154] = "MAX_VERTEX_OUTPUT_COMPONENTS";
        GlConstants[GlConstants["MAX_FRAGMENT_INPUT_COMPONENTS"] = 37157] = "MAX_FRAGMENT_INPUT_COMPONENTS";
        GlConstants[GlConstants["MAX_SERVER_WAIT_TIMEOUT"] = 37137] = "MAX_SERVER_WAIT_TIMEOUT";
        GlConstants[GlConstants["OBJECT_TYPE"] = 37138] = "OBJECT_TYPE";
        GlConstants[GlConstants["SYNC_CONDITION"] = 37139] = "SYNC_CONDITION";
        GlConstants[GlConstants["SYNC_STATUS"] = 37140] = "SYNC_STATUS";
        GlConstants[GlConstants["SYNC_FLAGS"] = 37141] = "SYNC_FLAGS";
        GlConstants[GlConstants["SYNC_FENCE"] = 37142] = "SYNC_FENCE";
        GlConstants[GlConstants["SYNC_GPU_COMMANDS_COMPLETE"] = 37143] = "SYNC_GPU_COMMANDS_COMPLETE";
        GlConstants[GlConstants["UNSIGNALED"] = 37144] = "UNSIGNALED";
        GlConstants[GlConstants["SIGNALED"] = 37145] = "SIGNALED";
        GlConstants[GlConstants["ALREADY_SIGNALED"] = 37146] = "ALREADY_SIGNALED";
        GlConstants[GlConstants["TIMEOUT_EXPIRED"] = 37147] = "TIMEOUT_EXPIRED";
        GlConstants[GlConstants["CONDITION_SATISFIED"] = 37148] = "CONDITION_SATISFIED";
        GlConstants[GlConstants["WAIT_FAILED"] = 37149] = "WAIT_FAILED";
        GlConstants[GlConstants["SYNC_FLUSH_COMMANDS_BIT"] = 1] = "SYNC_FLUSH_COMMANDS_BIT";
        GlConstants[GlConstants["VERTEX_ATTRIB_ARRAY_DIVISOR"] = 35070] = "VERTEX_ATTRIB_ARRAY_DIVISOR";
        GlConstants[GlConstants["ANY_SAMPLES_PASSED"] = 35887] = "ANY_SAMPLES_PASSED";
        GlConstants[GlConstants["ANY_SAMPLES_PASSED_CONSERVATIVE"] = 36202] = "ANY_SAMPLES_PASSED_CONSERVATIVE";
        GlConstants[GlConstants["SAMPLER_BINDING"] = 35097] = "SAMPLER_BINDING";
        GlConstants[GlConstants["RGB10_A2UI"] = 36975] = "RGB10_A2UI";
        GlConstants[GlConstants["INT_2_10_10_10_REV"] = 36255] = "INT_2_10_10_10_REV";
        GlConstants[GlConstants["TRANSFORM_FEEDBACK"] = 36386] = "TRANSFORM_FEEDBACK";
        GlConstants[GlConstants["TRANSFORM_FEEDBACK_PAUSED"] = 36387] = "TRANSFORM_FEEDBACK_PAUSED";
        GlConstants[GlConstants["TRANSFORM_FEEDBACK_ACTIVE"] = 36388] = "TRANSFORM_FEEDBACK_ACTIVE";
        GlConstants[GlConstants["TRANSFORM_FEEDBACK_BINDING"] = 36389] = "TRANSFORM_FEEDBACK_BINDING";
        GlConstants[GlConstants["COMPRESSED_R11_EAC"] = 37488] = "COMPRESSED_R11_EAC";
        GlConstants[GlConstants["COMPRESSED_SIGNED_R11_EAC"] = 37489] = "COMPRESSED_SIGNED_R11_EAC";
        GlConstants[GlConstants["COMPRESSED_RG11_EAC"] = 37490] = "COMPRESSED_RG11_EAC";
        GlConstants[GlConstants["COMPRESSED_SIGNED_RG11_EAC"] = 37491] = "COMPRESSED_SIGNED_RG11_EAC";
        GlConstants[GlConstants["COMPRESSED_RGB8_ETC2"] = 37492] = "COMPRESSED_RGB8_ETC2";
        GlConstants[GlConstants["COMPRESSED_SRGB8_ETC2"] = 37493] = "COMPRESSED_SRGB8_ETC2";
        GlConstants[GlConstants["COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2"] = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2";
        GlConstants[GlConstants["COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"] = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2";
        GlConstants[GlConstants["COMPRESSED_RGBA8_ETC2_EAC"] = 37496] = "COMPRESSED_RGBA8_ETC2_EAC";
        GlConstants[GlConstants["COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"] = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC";
        GlConstants[GlConstants["TEXTURE_IMMUTABLE_FORMAT"] = 37167] = "TEXTURE_IMMUTABLE_FORMAT";
        GlConstants[GlConstants["MAX_ELEMENT_INDEX"] = 36203] = "MAX_ELEMENT_INDEX";
        GlConstants[GlConstants["TEXTURE_IMMUTABLE_LEVELS"] = 33503] = "TEXTURE_IMMUTABLE_LEVELS";
        // Extensions
        GlConstants[GlConstants["MAX_TEXTURE_MAX_ANISOTROPY_EXT"] = 34047] = "MAX_TEXTURE_MAX_ANISOTROPY_EXT";
    })(GlConstants || (GlConstants = {}));

    function setProgramState(gl, state) {
        if (state.beDeduce != true) {
            deduceFullShderState(state);
        }
        //---------------------------cullface
        if (state.enableCullFace) {
            gl.enable(gl.CULL_FACE);
            gl.cullFace(state.cullBack ? gl.BACK : gl.FRONT);
        }
        else {
            gl.disable(gl.CULL_FACE);
        }
        //----------------depth
        gl.depthMask(state.depthWrite);
        if (state.depthTest) {
            gl.enable(gl.DEPTH_TEST);
        }
        else {
            gl.disable(gl.DEPTH_TEST);
        }
        //------------------------blend
        if (state.enableBlend) {
            gl.enable(gl.BLEND);
            gl.blendEquation(state.blendEquation);
            gl.blendFunc(state.blendSrc, state.blendDst);
        }
        //-------------------------stencil
        if (state.enableStencilTest) {
            gl.enable(gl.STENCIL_TEST);
            gl.stencilFunc(state.stencilFunc, state.stencilRefValue, state.stencilMask);
            gl.stencilOp(state.stencilFail, state.stencilPassZfail, state.stencilFaileZpass);
        }
    }
    /**
     *
     * @param state 原始 webgl state
     */
    // state 是给每个物体 render用的，是不想受前一个物体render影响，所以需要推断出完整的 webgl state，缺失的按照默认值
    function deduceFullShderState(state) {
        //----------------------------cull face
        if (state.enableCullFace == null) {
            state.enableCullFace = true;
        }
        if (state.enableCullFace) {
            if (state.cullBack == null) {
                state.cullBack = true;
            }
        }
        //------------------depth
        if (state.depthWrite == null) {
            state.depthWrite = true;
        }
        if (state.depthTest == null) {
            state.depthTest = true;
        }
        if (state.depthTest) {
            if (state.depthTestFuc == null) {
                state.depthTestFuc = GlConstants.LEQUAL;
            }
        }
        //------------------ blend
        if (state.enableBlend == true) {
            if (state.blendEquation == null) {
                state.blendEquation = GlConstants.FUNC_ADD;
            }
            if (state.blendSrc == null) {
                state.blendSrc = GlConstants.ONE;
            }
            if (state.blendDst == null) {
                state.blendDst = GlConstants.ONE_MINUS_SRC_ALPHA;
            }
        }
        //---------------------stencil
        if (state.enableStencilTest == true) {
            if (state.stencilFunc == null) {
                state.stencilFunc = GlConstants.ALWAYS;
            }
            if (state.stencilFail == null) {
                state.stencilFail = GlConstants.KEEP;
            }
            if (state.stencilFaileZpass == null) {
                state.stencilFaileZpass = GlConstants.KEEP;
            }
            if (state.stencilPassZfail == null) {
                state.stencilPassZfail = GlConstants.REPLACE;
            }
            if (state.stencilRefValue == null) {
                state.stencilRefValue = 1;
            }
            if (state.stencilMask == null) {
                state.stencilMask = 0xff;
            }
        }
        return state;
    }

    /**
     * Get the GL type for a typedArray
     */
    function getGLTypeForTypedArray(typedArray) {
        if (typedArray instanceof Int8Array) {
            return GlConstants.BYTE;
        }
        if (typedArray instanceof Uint8Array) {
            return GlConstants.UNSIGNED_BYTE;
        }
        if (typedArray instanceof Uint8ClampedArray) {
            return GlConstants.UNSIGNED_BYTE;
        }
        if (typedArray instanceof Int16Array) {
            return GlConstants.SHORT;
        }
        if (typedArray instanceof Uint16Array) {
            return GlConstants.UNSIGNED_SHORT;
        }
        if (typedArray instanceof Int32Array) {
            return GlConstants.INT;
        }
        if (typedArray instanceof Uint32Array) {
            return GlConstants.UNSIGNED_INT;
        }
        if (typedArray instanceof Float32Array) {
            return GlConstants.FLOAT;
        }
        throw "unsupported typed array to gl type";
    }
    function getArrayTypeForGLtype(glType) {
        if (glType == GlConstants.BYTE) {
            return Int8Array;
        }
        if (glType == GlConstants.UNSIGNED_BYTE) {
            return Uint8Array;
        }
        if (glType == GlConstants.UNSIGNED_BYTE) {
            return Uint8ClampedArray;
        }
        if (glType == GlConstants.SHORT) {
            return Int16Array;
        }
        if (glType == GlConstants.UNSIGNED_SHORT) {
            return Uint16Array;
        }
        if (glType == GlConstants.INT) {
            return Int32Array;
        }
        if (glType == GlConstants.UNSIGNED_INT) {
            return Uint32Array;
        }
        if (glType == GlConstants.FLOAT) {
            return Float32Array;
        }
        throw "unsupported gltype to array type";
    }
    function getbytesForGLtype(glType) {
        switch (glType) {
            case GlConstants.BYTE:
                return 1;
            case GlConstants.UNSIGNED_BYTE:
                return 1;
            case GlConstants.SHORT:
                return 2;
            case GlConstants.UNSIGNED_SHORT_4_4_4_4:
                return 2;
            case GlConstants.UNSIGNED_SHORT:
                return 2;
            case GlConstants.INT:
                return 4;
            case GlConstants.UNSIGNED_INT:
                return 4;
            case GlConstants.HALF_FLOAT:
                return 2;
            case GlConstants.HALF_FLOAT_OES:
                return 2;
            case GlConstants.FLOAT:
                return 4;
            default:
                throw "unsupported gltype to bytesPerElement";
        }
    }

    var VertexIndex = /** @class */ (function () {
        function VertexIndex() {
        }
        VertexIndex.fromTarrayInfo = function (data) {
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
                    : GlConstants.UNSIGNED_SHORT;
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
            newData.drawType = orginData.drawType ? newData.drawType : GlConstants.STATIC_DRAW;
            if (newData.count == null) {
                throw new Error("can not deduce geometry Indices count.");
            }
            // vertexData.count = newData.indexCount ? newData.indexCount : vertexData.length;
            return newData;
        };
        return VertexIndex;
    }());
    function createIndexBufferInfo(gl, data) {
        var vertexdata = VertexIndex.fromTarrayInfo(data);
        if (vertexdata.glBuffer == null) {
            var buffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, vertexdata.viewBuffer, vertexdata.drawType);
            vertexdata.glBuffer = buffer;
        }
        return vertexdata;
    }

    var VertexAtt = /** @class */ (function () {
        function VertexAtt() {
        }
        VertexAtt.fromTarrayInfo = function (attName, data) {
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
                newData.componentDataType = newData.viewBuffer
                    ? getGLTypeForTypedArray(newData.viewBuffer)
                    : GlConstants.FLOAT;
            }
            else {
                newData.componentDataType = orginData.componentDataType;
            }
            newData.componentSize = orginData.componentSize ? orginData.componentSize : guessNumComponentsFromName(attName);
            newData.normalize = orginData.normalize != null ? orginData.normalize : false;
            newData.bytesOffset = orginData.bytesOffset ? orginData.bytesOffset : 0;
            newData.bytesStride = orginData.bytesStride ? orginData.bytesStride : 0;
            newData.drawType = orginData.drawType ? orginData.drawType : GlConstants.STATIC_DRAW;
            newData.divisor = orginData.divisor;
            if (orginData.count == null) {
                var elementBytes = getbytesForGLtype(newData.componentDataType) * newData.componentSize;
                newData.count = newData.viewBuffer
                    ? newData.viewBuffer.byteLength / elementBytes
                    : undefined;
            }
            else {
                newData.count = orginData.count;
            }
            return newData;
        };
        return VertexAtt;
    }());
    function createAttributeBufferInfo(gl, attName, data) {
        var vertexdata = VertexAtt.fromTarrayInfo(attName, data);
        if (vertexdata.glBuffer == null) {
            var buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, vertexdata.viewBuffer, vertexdata.drawType);
            vertexdata.glBuffer = buffer;
        }
        return vertexdata;
    }
    var uvRE = /uv/;
    var colorRE = /color/;
    function guessNumComponentsFromName(name, length) {
        if (length === void 0) { length = null; }
        var numComponents;
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

    var GeometryInfo = /** @class */ (function () {
        function GeometryInfo() {
            this.atts = {};
        }
        return GeometryInfo;
    }());
    function createGeometryInfoFromArray(gl, atts, indices, primitiveType) {
        var info = new GeometryInfo();
        info.primitiveType = primitiveType ? primitiveType : gl.TRIANGLES;
        if (indices != null) {
            info.indices = createIndexBufferInfo(gl, indices);
            if (info.count == null) {
                info.count = info.indices.count;
            }
        }
        for (var attName in atts) {
            info.atts[attName] = createAttributeBufferInfo(gl, attName, atts[attName]);
            if (info.count == null) {
                info.count = info.atts[attName].count;
            }
        }
        return info;
    }

    var ShaderTypeEnum;
    (function (ShaderTypeEnum) {
        ShaderTypeEnum[ShaderTypeEnum["VS"] = 0] = "VS";
        ShaderTypeEnum[ShaderTypeEnum["FS"] = 1] = "FS";
    })(ShaderTypeEnum || (ShaderTypeEnum = {}));
    function createProgramInfo(gl, op) {
        var info;
        if (op.program.program != null) {
            var bassprogram = op.program;
            info = {};
            info.program = bassprogram.program;
            info.attsDic = bassprogram.attsDic;
            info.uniformsDic = bassprogram.uniformsDic;
        }
        else {
            var bassprogramOp = op.program;
            info = createBassProgramInfo(gl, bassprogramOp.vs, bassprogramOp.fs, bassprogramOp.name);
        }
        if (op.uniforms) {
            info.uniforms = op.uniforms;
        }
        if (op.states) {
            info.states = op.states;
        }
        return info;
    }
    function createBassProgramInfo(gl, vs, fs, name) {
        var vsShader = createShader(gl, ShaderTypeEnum.VS, vs, name + "_vs");
        var fsShader = createShader(gl, ShaderTypeEnum.FS, fs, name + "_fs");
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
                var attsInfo = getAttributesInfo(gl, item);
                var uniformsInfo = getUniformsInfo(gl, item);
                return { program: item, programName: name, uniformsDic: uniformsInfo, attsDic: attsInfo };
            }
        }
    }
    function getAttributesInfo(gl, program) {
        var attdic = {};
        var numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
        for (var i = 0; i < numAttribs; i++) {
            var attribInfo = gl.getActiveAttrib(program, i);
            if (!attribInfo)
                break;
            var attName = attribInfo.name;
            var attlocation = gl.getAttribLocation(program, attName);
            var func = getAttributeSetter(gl, attlocation);
            attdic[attName] = { name: attName, location: attlocation, setter: func };
        }
        return attdic;
    }
    function getUniformsInfo(gl, program) {
        var uniformDic = {};
        var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        gl.bindpoint = 0;
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
            var bindpoint = gl["bindpoint"];
            var func = getUniformSetter(gl, type, beArray, location_1, bindpoint);
            uniformDic[name_1] = { name: name_1, location: location_1, type: type, setter: func };
        }
        return uniformDic;
    }
    function createShader(gl, type, source, name) {
        if (name === void 0) { name = null; }
        var target = type == ShaderTypeEnum.VS ? GlConstants.VERTEX_SHADER : GlConstants.FRAGMENT_SHADER;
        var item = gl.createShader(target);
        gl.shaderSource(item, source);
        gl.compileShader(item);
        var check = gl.getShaderParameter(item, gl.COMPILE_STATUS);
        if (check == false) {
            var debug = type == ShaderTypeEnum.VS ? "ERROR: compile  VS Shader Error! VS:" : "ERROR: compile FS Shader Error! FS:";
            debug = debug + name + ".\n";
            console.error(debug + gl.getShaderInfoLog(item));
            gl.deleteShader(item);
            return null;
        }
        else {
            return { shaderType: type, shaderName: name, shader: item };
        }
    }
    function getUniformSetter(gl, uniformType, beArray, location, bindpoint) {
        switch (uniformType) {
            case gl.FLOAT:
                if (beArray) {
                    return function (value) {
                        gl.uniform1f(location, value);
                    };
                }
                else {
                    return function (value) {
                        gl.uniform1fv(location, value);
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
                return function (value) {
                    gl.activeTexture(gl.TEXTURE0 + bindpoint);
                    gl.bindTexture(gl.TEXTURE_2D, value);
                    gl.uniform1i(location, bindpoint);
                    gl["bindpoint"] = gl["bindpoint"] + 1;
                };
            default:
                console.error("uniformSetter not handle type:" + uniformType + " yet!");
                break;
        }
    }
    function getAttributeSetter(gl, location) {
        return function (value) {
            gl.bindBuffer(gl.ARRAY_BUFFER, value.glBuffer);
            gl.enableVertexAttribArray(location);
            gl.vertexAttribPointer(location, value.componentSize, value.componentDataType, value.normalize, value.bytesStride, value.bytesOffset);
            if (value.divisor !== undefined) {
                gl.vertexAttribDivisor(location, value.divisor);
            }
        };
    }

    WebGLRenderingContext.prototype.addExtension = function (extname) {
        var ext = this.getExtension(extname);
        if (ext) {
            switch (extname) {
                case "OES_vertex_array_object":
                    this.bindVertexArray = ext.bindVertexArrayOES.bind(ext);
                    this.createVertexArray = ext.createVertexArrayOES.bind(ext);
                    this.deleteVertexArray = ext.deleteVertexArrayOES.bind(ext);
                    break;
                case "ANGLE_instanced_arrays":
                    this.vertexAttribDivisor = ext.vertexAttribDivisorANGLE.bind(ext);
                    this.drawElementsInstanced = ext.drawElementsInstancedANGLE.bind(ext);
                    this.drawArraysInstanced = ext.drawArraysInstancedANGLE.bind(ext);
                    break;
                default:
                    console.warn("还未处理");
                    break;
            }
        }
    };
    Object.defineProperty(WebGLRenderingContext.prototype, "beWebgl2", {
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
        // canvas.addEventListener('webglcontextlost', function (e)
        // {
        //     console.log(e);
        // }, false);
        return gl;
    }
    function setBuffersAndAttributes(gl, geometry, program) {
        for (var attName in program.attsDic) {
            program.attsDic[attName].setter(geometry.atts[attName]);
        }
        if (geometry.indices) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geometry.indices.glBuffer);
        }
    }
    /**
     * bing program 、set uniforms 、set webgl states
     * @param gl
     * @param program
     */
    function setProgram(gl, program) {
        gl.useProgram(program.program);
        if (program.uniforms) {
            setProgramUniforms(program, program.uniforms);
        }
        if (program.states) {
            setProgramState(gl, program.states);
        }
    }
    function setProgramUniforms(info, uniforms) {
        for (var key in uniforms) {
            var setter = info.uniformsDic[key].setter;
            var value = uniforms[key];
            setter(value);
        }
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

    var DemoInstance = /** @class */ (function () {
        function DemoInstance() {
        }
        DemoInstance.run = function () {
            var cc = document.getElementById("canvas");
            var gl = setUpWebgl(cc, { extentions: ["ANGLE_instanced_arrays"] });
            var geometry = createGeometryInfoFromArray(gl, {
                aPos: [-0.5, -0.5, 0.5, -0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0],
                aOffset: { value: [-0.3, 0, 0, 0, 0.3, 0], divisor: 1, componentSize: 2 },
            }, [0, 1, 2, 0, 3, 2]);
            var defErrorVs = "\
              attribute vec3 aPos;\
              attribute vec2 aOffset;\
              void main()\
              {\
                  highp vec4 tmplet_1=vec4(aPos.xy*0.2+aOffset,aPos.z,1.0);\
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
            var bassporgram = createBassProgramInfo(gl, defErrorVs, defErrorFs, "ssxx");
            var program = createProgramInfo(gl, { program: bassporgram, uniforms: uniforms });
            var render = function () {
                gl.clearColor(0.5, 0.1, 0.5, 1);
                gl.clearDepth(0);
                gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
                // gl.useProgram(program.program);
                setProgram(gl, program);
                setBuffersAndAttributes(gl, geometry, program);
                drawBufferInfo(gl, geometry, 3);
                requestAnimationFrame(function () {
                    render();
                });
            };
            render();
        };
        return DemoInstance;
    }());

    console.log("@@@@@@@@@@@@@");
    window.onload = function () {
        DemoInstance.run();
    };

})));
//# sourceMappingURL=dome.js.map
