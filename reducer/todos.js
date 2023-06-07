// actions.js
export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo,
});

export const deleteTodo = (todoId) => ({
    type: 'DELETE_TODO',
    payload: todoId,
});

export const completeTodo = (todoId) => ({
    type: 'COMPLETE_TODO',
    payload: todoId,
});

// reducers.js
const initialState = {
    todos: [],
};

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        case 'COMPLETE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload ? { ...todo, status: 'complete' } : todo
                ),
            };
        default:
            return state;
    }
};
