# WebglLib

将webgl 的绘制简化，即减少api 调用，使绘制变得简洁/易使用，但是不是以丢失webgl自由度为代价的。

## 代码样例

### 绘制样例
```
setProgram(gl, program);
setBuffersAndAttributes(gl, geometry, program);
drawBufferInfo(gl, geometry);
```

### 处理 shader资源_1
```
<!-- let vsShader = createShader(gl, ShaderTypeEnum.VS, vs_str, name + "_vs");
let fsShader = createShader(gl, ShaderTypeEnum.FS, fs_str, name + "_fs");
let item = gl.createProgram();
gl.attachShader(item, vsShader.shader);
gl.attachShader(item, fsShader.shader);
gl.linkProgram(item); -->

/*
 * 除了得到program，attributes、uiforms信息也会整理出来
 */
let bassprogram = createBassProgramInfo(gl, defErrorVs, defErrorFs, programName);

```

### 处理 shader资源_2
整合program /uniforms/sates
```
<!-- let uniforms: { [key: string]: any } = {};
uniforms["_MainColor"] = new Float32Array([0.5, 1, 0.5, 1]);
let bassporgram = createBassProgramInfo(gl, defErrorVs, defErrorFs, "ssxx");
let state: IProgramState = { depth_Test: false } -->

let program = createProgramInfo(gl, { program: bassporgram, uniforms: uniforms ,states: state});
或者
let  program = createProgramInfo(gl, { program: { vs: defVs, fs: defFs, name: "ssxxss" }, uniforms: uniforms, states: state });
```

### 处理geometry资源

```
let geometry = createGeometryInfoFromArray(gl,
    {
        "aPos": [-0.5, -0.5, 0.5, -0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0],
        "aUv": [0, 1, 0, 0, 1, 0, 1, 1]

    }, [0, 1, 2, 0, 3, 2]);
```









