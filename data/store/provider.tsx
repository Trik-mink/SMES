import React, { useReducer } from 'react'

import RootContext from "./context";
import goalReducer, { initialState } from './reducer';

function ProviderTotal({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(goalReducer, initialState);

    return (
        <RootContext.Provider value={[state, dispatch]}>
            {children}
        </RootContext.Provider>
    )
}

export default ProviderTotal