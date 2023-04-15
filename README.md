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

## Let's talk about Auth

Auth stands for authentication and authorization. Some kind of authentication data (like an id, or a key) is somehow stored in the client session.

Usually, authentication data is stored on the client side through Web Storage API, Cookies or Tokens.

Web Storage API consists on localStorage and sessionStorage . Local Storage is stored in a SQLite file in a subfolder in the user's profile. Windows, for example, stores it at "\AppData\Local\Google\Chrome\User Data\Default\Local Storage". Session storage is also a SQLite file, but it's not stored on the machine. Basically, localStorage maintains data after the browser is closed, while sessionStorage only stores data for the current sesssion.

Here's a great article about local storage: <a>https://blog.logrocket.com/localstorage-javascript-complete-guide/<a>

