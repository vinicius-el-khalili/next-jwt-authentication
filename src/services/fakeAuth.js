import { v4 as uuid } from "uuid"


const delay = (amount=750) => new Promise (resolve => setTimeout(resolve, amount))


export async function signInRequest(data) {
    await delay()
    return {
        token:uuid(),
        user: {
            name: "David Bowie",
            email: "david.bowie@70s.show",
            avatarUrl: "https://gravatar.com/avatar/85246a56d15bfdf003adfbf22ac31ceb?s=400&d=robohash&r=x"
        }
    }

}
