import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "", // cart, checkout
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({children}) {

    const [userProgress, setUserPregress] = useState('')

    function showCart() {
        setUserPregress('cart')
    }

    function hideCart() {
        setUserPregress('')
    }

    function showCheckout() {
        setUserPregress('checkout')
    }

    function hideCheckout() {
        setUserPregress('')
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }

    return (
        <UserProgressContext.Provider value={userProgressCtx} >{children}</UserProgressContext.Provider>
    )
}

export default UserProgressContext
