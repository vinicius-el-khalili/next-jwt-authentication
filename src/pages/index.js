import { useForm } from "react-hook-form"
const Home = () => {
  const { register, handleSubmit } = useForm()
  return (
    <form onSubmit = { handleSubmit((data)=>{console.log(data)}) } >
      <input name="name" {...register("fieldName")} />
    </form>
  );
  // Output: Object { fieldName: "hello world" } //
}
 
export default Home;