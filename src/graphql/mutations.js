import { gql } from "apollo-boost";

export const UPDATE_TODO = gql`
  mutation updateTodo($id: Int, $status: String) {
    update_todos(where: { id: { _eq: $id } }, _set: { status: $status }) {
      returning {
        status
        id
        title
      }
    }
  }
`;

// returns:
// {
//     "data": {
//       "update_todos": {
//         "returning": [
//           {
//             "status": "IN_PROGRESS",
//             "id": 1,
//             "title": "get hot"
//           }
//         ]
//       }
//     }
//   }

export const ADD_TODO = gql`
  mutation addTodo($title: String) {
    insert_todos(
      objects: { title: $title, is_public: false, status: "TODO", user_id: "1" }
    ) {
      returning {
        id
        status
        title
      }
    }
  }
`;

// returns: 
// {
//     "data": {
//       "insert_todos": {
//         "returning": [
//           {
//             "id": 5,
//             "status": "TODO",
//             "title": "start tipping"
//           }
//         ]
//       }
//     }
// }

export const DELETE_TODO = gql`
  mutation deleteTodo($id: Int) {
    delete_todos(where: { id: { _eq: $id } }) {
      returning {
        id
        title
      }
    }
  }
`;

// returns: 
// {
//     "data": {
//       "delete_todos": {
//         "returning": [
//           {
//             "id": 5,
//             "title": "start tipping"
//           }
//         ]
//       }
//     }
// }

