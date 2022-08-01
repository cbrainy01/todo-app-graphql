import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { GET_TODOS } from "./queries";

const httpLink = createHttpLink({
    uri: "https://whole-elf-60.hasura.app/v1/graphql",
    headers: {
        'x-hasura-admin-secret': process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET
    }
})

// const client = () => {
//     return new ApolloClient({
//     link: httpLink,
//     cache: new InMemoryCache(),
//     })
// } 

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})

// client().query({
//     query: GET_TODOS 
// })
// .then( data => { console.log("api data: ", data); return data } )
// .then(r => console.log("r: ", r.json()))

// client.query({
//     query: GET_TODOS 
// }).then( data => { console.log("api data: ", data); return data } )
// .then(r => console.log("r: ", r.json()))

export default client;