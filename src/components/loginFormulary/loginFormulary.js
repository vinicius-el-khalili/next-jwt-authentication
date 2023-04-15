import style from "./loginFormulary.module.scss"
import { useForm } from "react-hook-form"

const LoginFormulary = () => {
  const { register, handleSubmit } = useForm()
  const handleSignIn = (data) => {
    console.log(data)
  }
  return (
    <form 
    onSubmit = { handleSubmit(handleSignIn) } 
    className={style.form}>
      
      <label
      htmlFor="email-adress"
      className={style.label}>
      
        Email adress
      </label>
      
      <input 
      {...register("emailAdress")}
      className={style.input}
      type="email" 
      autoComplete="email" 
      required
      placeholder="Email address"/>

      <label 
      htmlFor="email-adress"
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


