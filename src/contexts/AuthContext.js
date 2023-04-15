import { createContext } from "react"
import { signInRequest } from "../services/simulateAuthReponse"

export const AuthContext = createContext({})

export function AuthProvider({children}) {

    
    const isAuthenticated = false
    
    
    async function signIn({ email, password }) {
        const { token, user } = await signInRequest({
            email,
            password
        })
        console.log(email,password,token,user)
    }

    //https://youtu.be/pvrKHpXGO8E?t=1883    

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            signIn
        }}>

            {children}
        </AuthContext.Provider>
    )
}