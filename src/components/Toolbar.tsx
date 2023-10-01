import RadioGroup from "../common/RadioGroup"
import Searchbar from "../common/Searchbar"

interface ToolbarProps {
  onsearch: (searchTerm: string)=>void;
}
const Toolbar = ({onsearch}:ToolbarProps) => {
    return (
      <div className="toolbar">
        <Searchbar onchange={onsearch}/>
        <RadioGroup
          inputName="Copy Format"
          values={["SVG", "JSX", "React Native SVG"]}
        />
      </div>
    )
  }

export default Toolbar