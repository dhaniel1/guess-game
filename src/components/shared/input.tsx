import React from "react";
interface Iprop extends React.InputHTMLAttributes<HTMLInputElement> {
  // type: React.HTMLInputTypeAttribute; This is redundant code
}

const Input = (props: Iprop) => {
  const { type, className, ...rest } = props;
  return <input type={type} className={className} {...rest} />;
};

export default Input;
