import { useState } from 'react';
import { SVGCopyFormat, copySVG } from '../tool/copy-svg';
import './IconView.css';

interface IconView {
    iconData?: {name:string, svg:string}[]
    searchTerm: string;
    copyFormat: SVGCopyFormat;
}
const IconView = ({
    searchTerm,
    iconData,
    copyFormat,
}:IconView) => {
    const iconsView = searchTerm !== "" ? iconData?.filter(iconData => searchTerm.split(" ").some((word) => iconData.name.includes(word))) : iconData;

    return (
        <div className='icon-view__container'>
            {iconsView &&
            (iconsView.length > 0
                ? <div className="icon-view">
                    {iconsView.map(iconData => 
                        <IconCard 
                            key={iconData.name}
                            label={iconData.name} 
                            svg={iconData.svg} 
                            onclick={()=> copySVG(iconData.svg, copyFormat) }
                        />)}
                  </div>
                : <NoResults searchTerm={searchTerm}/>
            )}
        </div>
    );
}

export default IconView

interface IconCardProps {
    onclick: ()=>void;
    label: string;
    svg: string;
}
const IconCard = ({
    onclick,
    label,
    svg
}: IconCardProps) => {
    const [copytextVisible, setCopytextVisible] = useState(false);
    
    const handleClick = () => {
        onclick();
        setCopytextVisible(true);
        setTimeout(() => setCopytextVisible(false), 1500)
    }

    return (
        <div className="icon-card">
            <div onClick={handleClick} className='icon-card__frame'>
                <div className="icon-card__icon" dangerouslySetInnerHTML={{__html: svg}}></div>
                {copytextVisible && <span className="icon-card__copytext">
                    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="black" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5.5 9C6.5 9.5 7 10.5 7 10.5C8 8.50002 9.5 6.5 11 5.5"/>
                    </svg>
                    Copied!
                </span>}
            </div>
            <h3 className='icon-card__label'>{label}</h3>
        </div>
    )
}

interface NoResultsProps {
    searchTerm: string;
}

const NoResults = ({searchTerm}:NoResultsProps) => {
    return(
        <div className='icon-view__no-results'>
            Sorry, no results for "{searchTerm}"
        </div>
    )
}