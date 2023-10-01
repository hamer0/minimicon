import './IconView.css';

interface IconView {
    iconData?: {name:string, svg:string}[]
    searchTerm: string;
}
const IconView = ({searchTerm, iconData}:IconView) => {
    const iconsView = searchTerm !== "" ? iconData?.filter(iconData => searchTerm.split(" ").some((word) => iconData.name.includes(word))) : iconData;

    return (
        <div className='icon-view__container'>
            {iconsView &&
            (iconsView.length > 0
                ? <div className="icon-view">
                    {iconsView.map(iconData => <IconCard key={iconData.name} label={iconData.name} svg={iconData.svg} />)}
                  </div>
                : <NoResults searchTerm={searchTerm}/>
            )}
        </div>
    );
}

export default IconView

interface IconCardProps {
    label: string;
    svg: string;
}
const IconCard = ({label, svg}: IconCardProps) => {
    return (
        <div className="icon-card">
            <div onClick={()=> navigator.clipboard.writeText(svg)} className='icon-card__frame'>
                <div className="icon-card__icon" dangerouslySetInnerHTML={{__html: svg}}></div>
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