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

// mutation updateTodo($id: Int, $status: String) {
//     update_todos( where: {id: {_eq: $id}}, _set: {status: $status}) {
//       returning {
//         status
//         id
//             title
//       }
//     }
//   }

