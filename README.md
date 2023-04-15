# JWT Authentication in Next.js

## 1. react-hook-form

First of all, we'll handle form inputs using the react-hook-form library.
A simple input looks like this:

```jsx
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
```