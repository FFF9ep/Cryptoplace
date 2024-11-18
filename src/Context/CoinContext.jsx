const { createContext } = require("react");

export const CoinText = createContext();

const CoinContextProvider = (props) => {

    const contextValue = {
        
    }

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}