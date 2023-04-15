import style from "./home.module.scss"
import { useForm } from "react-hook-form"
import LoginFormulary from "../../components/loginFormulary/loginFormulary"

const Home = () => {
  const { register, handleSubmit } = useForm()
  return (
    <>
    
    <LoginFormulary/>    
    
    </>
  );
}
export default Home;


