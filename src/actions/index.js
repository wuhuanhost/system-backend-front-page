let nextTodoId = 0;
export const addTodo = text => ({
    type: "ADD_TODO",
    id: nextTodoId++,
    text
});
export const toggleTodo = id => ({
    type: "TOGGLE_TODO",
    id
});

export const userLogin = user => ({
    type: "SET_LOGGED_USER",
    user
});

export const userLogout = user => ({
    type: "SET_LOGGED_USER",
    user
});
