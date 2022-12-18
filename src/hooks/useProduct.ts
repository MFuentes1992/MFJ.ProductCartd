import { useState } from "react"


export const useProduct = () => {
 const [ counter, setCounter] = useState<number>(0);

 const incrementBy = (n: number) => {
    setCounter((prev) => Math.max(prev + n, 0));
 }

 return { counter, incrementBy };

}