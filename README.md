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

## Auth?

Auth stands for authentication and authorization. Here's how it goes: Depending on the kind of request made to the server, some kind of authentication may be necessary. Otherwise, any punk can request the server to implode itself into a black hole or some shit. So yeah...

Here's how a regular authentication process occurs: Authentication data of some sort (email, password, id etc.) is passed from the client to the server through a request. Then, the server deals it and returns a response. It's that simple.


## Storage mechanisms

The two most common ways to store authentication data in the client side is through Web Storage API or Cookies. Let's talk about those. 

### Web Storage API

Web Storage API consists on localStorage and sessionStorage . Local Storage is stored in a SQLite file in a subfolder in the user's profile. Windows, for example, stores it at "\AppData\Local\Google\Chrome\User Data\Default\Local Storage". Session storage is also a SQLite file, but it's not stored on the machine.
localStorage is persistent (it maintains data after the browser is closed), while sessionStorage is non-persistent (only stores data for the current sesssion).


Reference: <a>https://blog.logrocket.com/localstorage-javascript-complete-guide/</a>

### Cookies

Similarly to web storage api, cookies are stored in the local machine, but in the form of a text file. Cookies are nice, but very problematic. Using cookies, all data stored (relevant or not) is passed to the server in each request, causing band cluttering, performance issues and higher costs. This problem was solved by Web Storage API through the storage of data in the form key-value pairs (SQLite). Cookies can have a file size up to 4kB, while Web Storage API can store up to 5MB. Also, cookies are more susceptible to cyber attacks than Web Storage API.

Overall, cookies are handy when transfering high-frequency light-weight non-sensitive data, but it doesn't stand a chance against Web Storage API when dealing with more complex implementations.

References:

1. https://blog.logrocket.com/javascript-developer-guide-browser-cookies/

2. https://allaboutcookies.org/what-is-a-cookie-file

3. https://goadopt.io/blog/diferenca-cookies-local-storage-session-storage/

4. https://www.geeksforgeeks.org/difference-between-local-storage-session-storage-and-cookies/

5. https://web.dev/storage-for-the-web/

### Tokens

