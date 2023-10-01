import './Searchbar.css';

interface SearchbarProps {
    onchange: (text:string)=>void;
}

const Button = ({
    onchange,
}: SearchbarProps) => {
    return (
      <div className="searchbar__container">
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}>
            <path d="M8.67165 8.67158C9.64796 7.69527 9.64796 6.11236 8.67165 5.13604C7.69534 4.15973 6.11243 4.15973 5.13612 5.13604C4.15981 6.11236 4.15981 7.69527 5.13612 8.67158C6.11243 9.64789 7.69534 9.64789 8.67165 8.67158ZM8.67165 8.67158L11.5 11.5"/>
        </svg>
        <input
            id="searchbar" 
            className="searchbar__input"
            type="text" 
            placeholder="Search icons..."
            onChange={(e) => onchange(e.target.value.trim())}
        />
      </div>
    )
  }

export default Button