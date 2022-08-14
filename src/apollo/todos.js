import { gql } from "@apollo/client/core";

export const ALL_TODO = gql`
  query AllTodos {
    todos: allTodos {
      title
      id
      completed
    }
  }
`;

export const ADD_TODO = gql`
  mutation AddTodo($title: String!, $user_id: ID!, $completed: Boolean!) {
    newTodo: createTodo(
      title: $title
      user_id: $user_id
      completed: $completed
    ) {
      title
      user_id
      completed
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $completed: Boolean!) {
    updateTodo(id: $id, completed: $completed) {
      id
      completed
      title
    }
  }
`;

export const DELETE_TODO = gql`
  mutation RemoveTodo($id: ID!) {
    removeTodo(id: $id) {
      id
    }
  }
`;
