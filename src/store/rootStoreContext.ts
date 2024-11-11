import { createContext, useContext } from "react";
import RootStore from "./rootStore";

export const rootStoreContext = createContext<RootStore | null>(null)

export const useStores = () => {
    const context = useContext(rootStoreContext)

    if(context === null) {
        throw new Error('App is not wrapped in provider')
    }

    return context;
}