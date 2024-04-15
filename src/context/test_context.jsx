
import { createContext, useContext } from 'react'


const TestContext = createContext()

export const TestProvider = ({ children }) => {
    const testText = 'Ayomikun'

    return (
        <TestContext.Provider value={{
            testText
        }}>
            {children}
        </TestContext.Provider>
    )
}
// make sure use
// eslint-disable-next-line react-refresh/only-export-components
export const useTestContext = () => {
    return useContext(TestContext)
}