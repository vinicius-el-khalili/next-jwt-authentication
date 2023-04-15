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

Auth stands for authentication and authorization. Here's how it goes: Depending on the kind of request made to the server, some kind of authentication may be necessary.

Here's how a regular authentication process occurs:

1. User opens page for the first time
2. User "signs in" (Fires request to server thar returns with a secure cookie)
3. Client stores the secure cookie
4. From here on, all requests to the server will include the secure cookie.

Refs:

https://www.youtube.com/watch?v=h6wBYWWdyYQ

## Storage mechanisms

The two most common ways to store authentication data in the client side is through localStorage or Cookies. Let's talk about those.

Refs: 

https://web.dev/storage-for-the-web/

### Web Storage API: localStorage and sessionStorage

Web Storage API consists on localStorage and sessionStorage . Local Storage is stored in a SQLite file in a subfolder in the user's profile. Windows, for example, stores it at "\AppData\Local\Google\Chrome\User Data\Default\Local Storage".
localStorage is persistent (it maintains data after the browser is closed), while sessionStorage is non-persistent (does not maintain data after the browser is closed).


Refs:

https://developer.mozilla.org/en-US/docs/Web/API/Storage

https://blog.logrocket.com/localstorage-javascript-complete-guide/

https://www.geeksforgeeks.org/difference-between-local-storage-session-storage-and-cookies/

https://stackoverflow.com/questions/44133536/is-it-safe-to-store-a-jwt-in-localstorage-with-reactjs


### Cookies

Similarly to web storage api, cookies are stored in the local machine, but in the form of a text file. Cookies are nice, but very problematic. Using cookies, all data stored (relevant or not) is passed to the server in each request, causing band cluttering, performance issues and higher costs. This problem was solved by Web Storage API through the storage of data in the form key-value pairs (SQLite). Cookies can have a file size up to 4kB, while Web Storage API can store up to 5MB.

Refs:

https://blog.logrocket.com/javascript-developer-guide-browser-cookies/

https://allaboutcookies.org/what-is-a-cookie-file


### Cookies vs. Web Storage


"[...] Web Storage (localStorage/sessionStorage) is accessible through JavaScript on the same domain. This means that any JavaScript running on your site will have access to web storage, and because of this can be vulnerable to cross-site scripting (XSS) attacks. XSS, in a nutshell, is a type of vulnerability where an attacker can inject JavaScript that will run on your page. Basic XSS attacks attempt to inject JavaScript through form inputs, where the attacker puts <script>alert('You are Hacked');</script> into a form to see if it is run by the browser and can be viewed by other users."


"[...] Modern web apps include 3rd party JavaScript libraries for A/B testing, funnel/market analysis, and ads. We use package managers like Bower to import other peoples’ code into our apps.
What if only one of the scripts you use is compromised? Malicious JavaScript can be embedded on the page, and Web Storage is compromised. These types of XSS attacks can get everyone’s Web Storage that visits your site, without their knowledge. This is probably why a bunch of organizations advise not to store anything of value or trust any information in web storage. This includes session identifiers and tokens."

Refs:

https://www.pivotpointsecurity.com/local-storage-versus-cookies-which-to-use-to-securely-store-session-tokens/

https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage

https://blog.shahednasser.com/localstorage-vs-cookies-whats-the-difference/

https://stackoverflow.com/questions/44133536/is-it-safe-to-store-a-jwt-in-localstorage-with-reactjs

https://stackoverflow.com/questions/3220660/local-storage-vs-cookies



### Token-base Authentication

