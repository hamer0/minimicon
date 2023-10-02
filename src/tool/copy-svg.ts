export const svgToJSX = (svg: string) => {
    console.log("convert to jsx");
    return svg;
}

export const jsxToRNSVG = (jsx: string) => {
    console.log("convert to rnsvg");
    return jsx;
}

export const svgToRNSVG = (svg: string) => jsxToRNSVG(svgToJSX(svg));

type SVGCopyFormats = {[k:string]:(svg:string)=>string};
export const svgFormats: SVGCopyFormats = {
    "SVG": (svg: string) => svg,
    "JSX": svgToJSX,
    "React Native SVG": svgToRNSVG,
}

//

const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
}

export type SVGCopyFormat = keyof SVGCopyFormats;
export const copySVG = (svg: string, format: SVGCopyFormat) => {
    if (!svgFormats[format])
        console.error(`Invalid format '${format}'`);
    else 
        copyToClipboard(svgFormats[format](svg))
}
