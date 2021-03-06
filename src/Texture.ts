import { ItexViewDataOption, ItexImageDataOption, ItextureInfo } from "./Type";

export function createTextureFromTypedArray(gl: WebGLRenderingContext, texOP: ItexViewDataOption): ItextureInfo {
    // deduceTextureTypedArrayOption(gl, data, texOP);
    let tex = gl.createTexture();
    let texDes = checkTextureOption(gl, texOP);

    gl.bindTexture(texDes.target, tex);
    gl.texParameteri(texDes.target, gl.TEXTURE_MAG_FILTER, texDes.filterMax);
    gl.texParameteri(texDes.target, gl.TEXTURE_MIN_FILTER, texDes.filterMin);
    gl.texParameteri(texDes.target, gl.TEXTURE_WRAP_S, texDes.wrapS);
    gl.texParameteri(texDes.target, gl.TEXTURE_WRAP_T, texDes.wrapT);

    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, texDes.flipY);

    if (texOP.mipmaps) {
        for (let i = 0; i < texOP.mipmaps.length; i++) {
            let levelData = texOP.mipmaps[i];
            gl.texImage2D(
                texDes.target,
                i,
                texDes.pixelFormat,
                levelData.width,
                levelData.height,
                0,
                texDes.pixelFormat,
                texDes.pixelDatatype,
                levelData.viewData,
            );
        }
    } else {
        gl.texImage2D(
            texDes.target,
            0,
            texDes.pixelFormat,
            texOP.width,
            texOP.height,
            0,
            texDes.pixelFormat,
            texDes.pixelDatatype,
            texOP.viewData,
        );
        if (texDes.enableMipMap) {
            gl.generateMipmap(texDes.target);
        }
    }

    return {
        texture: tex,
        texDes: texDes,
    };
}

export function createTextureFromImageSource(gl: WebGLRenderingContext, texOP: ItexImageDataOption): ItextureInfo {
    let tex = gl.createTexture();
    texOP.width = texOP.img.width;
    texOP.height = texOP.img.height;

    let texDes = checkTextureOption(gl, texOP);

    gl.bindTexture(texDes.target, tex);
    gl.texParameteri(texDes.target, gl.TEXTURE_MAG_FILTER, texDes.filterMax);
    gl.texParameteri(texDes.target, gl.TEXTURE_MIN_FILTER, texDes.filterMin);
    gl.texParameteri(texDes.target, gl.TEXTURE_WRAP_S, texDes.wrapS);
    gl.texParameteri(texDes.target, gl.TEXTURE_WRAP_T, texDes.wrapT);

    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, texDes.flipY);

    if (texOP.mipmaps != null) {
        for (let i = 0; i < texOP.mipmaps.length; i++) {
            let levelData = texOP.mipmaps[i];
            gl.texImage2D(
                texDes.target,
                i,
                texDes.pixelFormat,
                texDes.pixelFormat,
                texDes.pixelDatatype,
                levelData.img,
            );
        }
    } else {
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

function isPowerOf2(value: number) {
    return (value & (value - 1)) === 0;
}

function canGenerateMipmap(gl: WebGLRenderingContext, width: number, height: number) {
    if (!gl.beWebgl2) {
        return isPowerOf2(width) && isPowerOf2(height);
    }
    return true;
}

function canWrapReapeat(gl: WebGLRenderingContext, width: number, height: number) {
    if (!gl.beWebgl2) {
        return isPowerOf2(width) && isPowerOf2(height);
    }
    return true;
}

function filterFallback(gl: WebGLRenderingContext, filter: number): number {
    if (filter === gl.NEAREST || filter === gl.NEAREST_MIPMAP_LINEAR || filter === gl.NEAREST_MIPMAP_NEAREST) {
        return gl.NEAREST;
    }
    return gl.LINEAR;
}

function checkTextureOption(gl: WebGLRenderingContext, texOP: ItexImageDataOption | ItexViewDataOption) {
    let texdes = { ...texOP };

    texdes.target = (texOP && texOP.target) || gl.TEXTURE_2D;
    texdes.pixelFormat = (texOP && texOP.pixelFormat) || gl.RGBA;
    texdes.pixelDatatype = (texOP && texOP.pixelDatatype) || gl.UNSIGNED_BYTE;
    texdes.flipY = texOP && texOP.flipY != null ? texOP.flipY : true;

    let beCanWrapReapt = canWrapReapeat(gl, texdes.width, texdes.height);
    let beCanGenerateMipmap = canGenerateMipmap(gl, texdes.width, texdes.height);
    if (texdes.mipmaps != null) {
        texdes.enableMipMap = true;
    } else {
        texdes.enableMipMap = texOP.enableMipMap != false && beCanGenerateMipmap;
    }

    if (beCanWrapReapt) {
        texdes.wrapS = (texOP && texOP.wrapS) || gl.REPEAT;
        texdes.wrapT = (texOP && texOP.wrapT) || gl.REPEAT;
    } else {
        texdes.wrapS = texdes.wrapT = gl.CLAMP_TO_EDGE;
        if ((texOP && texOP.wrapS && texOP.wrapS == gl.REPEAT) || (texOP && texOP.wrapT && texOP.wrapT == gl.REPEAT)) {
            console.warn("texture repeat need Img size be power of 2!");
        }
    }
    if (texdes.enableMipMap) {
        texdes.filterMax = (texOP && texOP.filterMax) || gl.LINEAR;
        texdes.filterMin = (texOP && texOP.filterMin) || gl.NEAREST_MIPMAP_LINEAR;
    } else {
        texdes.filterMax = texOP && texOP.filterMax ? filterFallback(gl, texOP.filterMax) : gl.LINEAR;
        texdes.filterMin = texOP && texOP.filterMin ? filterFallback(gl, texOP.filterMax) : gl.LINEAR;

        if (texOP && texOP.filterMin && (texOP.filterMin != gl.NEAREST || texOP.filterMin != gl.LINEAR)) {
            console.warn("texture mimap filter need Img size be power of 2 And enable mimap option!");
        }
    }

    return texdes;
}
