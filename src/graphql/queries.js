import { gql  } from "@apollo/client"

export const GET_TODOS = gql`
  query getTodos {
    todos {
      title
      status
      created_at
      id
      is_public
    }
  }
`;

// export const GET_TODOS = gql`
//   query  {
//     getTodos {
//       title
//       status
//       created_at
//       id
//       is_public
//     }
//   }
// `;

