
const initialState = [{
  id: 1,
  todo: "Comprar Pan",
  done: false
}];

const todoReducer = (state = initialState, action) => {
  switch (action?.type) {
    case "addToDo":
      return [...state, action.payload];
    default:
      return state;
  }
}

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Comprar Leche",
  done: false
}

const addTodoAction = {
  type: "addToDo",
  payload: newTodo
}

todos = todoReducer(todos, addTodoAction);


console.log(todos);