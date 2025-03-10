import { useContext } from "react";
import { InputContext, todoContextObj } from "../store/input-context";

export function useInputContext(): todoContextObj {
  const context = useContext<todoContextObj>(InputContext);

  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");

  return context;
}
