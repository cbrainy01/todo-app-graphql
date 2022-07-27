import { ApolloClient } from "apollo-client";
import { InMemoryCache, HttpLink, gql, createHttpLink } from "@apollo/client"
// import { gql } from "@apollo/client";

const httpLink = createHttpLink({
    uri: "https://whole-elf-60.hasura.app/v1/graphql"
})

const client = new ApolloClient({
    // link: "https://whole-elf-60.hasura.app/v1/graphql",
    link: httpLink,
    cache: new InMemoryCache(),
})

client.query({
    query: gql`
        query getTodos{
            todos {
            title
            status
            created_at
            id
            is_public
            }
        }
    ` 
}).then( data => console.log("data: ") )

export default client;