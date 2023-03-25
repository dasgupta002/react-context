import { createContext, useState } from 'react'

export const AppContext = createContext()

const ProviderWrapper = ({ children }) => {
    const [theme, setTheme] = useState('light')

    const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light')
    
    return (
        <AppContext.Provider value = {{ theme, toggle }}>
            { children }
        </AppContext.Provider>
    )
}
 
export default ProviderWrapper