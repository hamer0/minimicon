import RadioGroup from "../common/RadioGroup"
import Searchbar from "../common/Searchbar"
import { SVGCopyFormat, svgFormats } from "../tool/copy-svg";

interface ToolbarProps {
  onselectFormat: (format: SVGCopyFormat)=>void;
  onsearch: (searchTerm: string)=>void;
}
const Toolbar = ({onselectFormat, onsearch}:ToolbarProps) => {
    return (
      <div className="toolbar">
        <Searchbar onchange={onsearch}/>
        <RadioGroup
          inputName="Copy format"
          onchange={(value) => onselectFormat(value)}
          values={Object.keys(svgFormats)}
        />
      </div>
    )
  }

export default Toolbar