import { useForm } from "react-hook-form"
const Home = () => {
  const { register, handleSubmit } = useForm()
  return (
    <form onSubmit = { handleSubmit((data)=>{console.log(data)}) } >
      <input {...register("fieldName1")} />
      <input {...register("fieldName2")} />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Home;

// Output: Object { fieldName: "awesomes", fieldName1: "awesomes", fieldName2: 2 } //

