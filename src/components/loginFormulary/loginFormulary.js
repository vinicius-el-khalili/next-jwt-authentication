import style from "./loginFormulary.module.scss"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const LoginFormulary = () => {

  const authContext = useContext(AuthContext)
  const { register, handleSubmit } = useForm()
  const handleSignIn = (data) => {
    console.log("handleSignIn(data)")
    authContext.signIn(data)
  }
  
  
  return (


    <form 
    onSubmit = { handleSubmit(handleSignIn) } 
    className={style.form}>
      
      <label
      className={style.label}>
      
        Email adress
      </label>
      
      <input 
      {...register("email")}
      className={style.input}
      type="email" 
      autoComplete="email" 
      required
      placeholder="Email address"/>

      <label 
      className={style.label}>

        Password
      </label>

      <input 
      {...register("password")} 
      className={style.input}
      type="password" 
      autoComplete="current-password" 
      required
      placeholder="Password"/>

      <button 
      className={style.button}
      type="submit">
      
          Submit
      </button>
      
    </form>

    
  );
}
export default LoginFormulary;


