import { useState } from "react";

export default function useCheck(init:string) {
  const [initial, setInitial] = useState(init);
  function print() {
    console.log("current value: ", initial);
  }

  return {
    initial,
    setInitial,
    print,
  };
}
