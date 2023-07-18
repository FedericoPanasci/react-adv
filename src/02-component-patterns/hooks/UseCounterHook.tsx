import {useState} from 'react'

export const UseCounterHook = () => {

    const [counter, setCounter] = useState(0);

    const counterPlus = () => {
        setCounter(counter + 1);
    }
    const counterMinus = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }   

  return {
    counter, counterPlus, counterMinus
  }
}
