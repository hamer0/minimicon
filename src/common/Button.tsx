import { ReactNode } from "react";

interface ButtonProps {
    onclick?: ()=>void;
    children?: ReactNode;
}

const Button = ({
    onclick,
    children,
}: ButtonProps) => {
    return (
      <button className="Button" onClick={onclick}>{children}</button>
    )
  }

export default Button