const attributesToCamelCase = (str: string) => str.replace(/([-][a-z])/g, (match) => {
    return match.substring(1).toUpperCase(); // remove leading dash and capitalise the letter
});

const capitaliseTags = (str: string) => {
    const tagRegex = /<\s*\/?\s*([a-zA-Z]+)/g;

    return str.replace(tagRegex, (match, tagName) => {
        const capitalizedTagName = tagName.charAt(0).toUpperCase() + tagName.slice(1); //capitalise first letter
        const isClosingTag = match.charAt(1) === '/';

        return `<${isClosingTag ? '/' : ''}${capitalizedTagName}`;
    });
}

export const svgToJSX = (svg: string) => {;
    const jsx = attributesToCamelCase(svg);
    return jsx;
}

export const jsxToRNSVG = (jsx: string) => {
    const rnsvg = capitaliseTags(jsx);
    return rnsvg;
}

export const svgToRNSVG = (svg: string) => jsxToRNSVG(svgToJSX(svg));

type SVGCopyFormats = {[k:string]:(svg:string)=>string};
export const svgFormats: SVGCopyFormats = {
    "SVG": (svg: string) => svg,
    "JSX": svgToJSX,
    "React Native SVG": svgToRNSVG,
}

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
