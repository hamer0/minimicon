export const svgToJSX = (svg: string) => {
    return svg;
}

export const jsxToRNSVG = (jsx: string) => {
    return jsx;
}

export const svgToRNSVG = (svg: string) => {
    return jsxToRNSVG(svgToJSX(svg));
}