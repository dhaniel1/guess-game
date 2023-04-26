import React from "react";

interface Iprop extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button = (props: Iprop) => {
  const { title, className, ...rest } = props;

  return <button className={className} {...rest}>{title}</button>;
};

export default Button;
