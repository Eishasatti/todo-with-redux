import { ADD_TODO, FILTER_TODOS, TOGGLE_TODO, REMOVE_TODO, MARK_COMPLETED, MARK_INCOMPLETE, UPDATE_SEARCH_TERM, MARK_ALL_COMPLETED } from "./actionType";

const initialState = {
    todos: [],
    filter: "ALL",
    searchTerm: ""
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, // Return the entire state
                todos: [...state.todos, { text: action.payload.text, completed: false }],
            };
        
        case TOGGLE_TODO:
            return {
                ...state, // Return the entire state
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        
        case REMOVE_TODO:
            return {
                ...state, // Return the entire state
                todos: state.todos.filter((_, index) => index !== action.payload.id),
            };
        
        case MARK_COMPLETED:
            return {
                ...state, // Return the entire state
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: true } : todo
                ),
            };
        
        case MARK_INCOMPLETE:
            return {
                ...state, // Return the entire state
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: false } : todo
                ),
            };

        case FILTER_TODOS:
            return {
                ...state, // Return the entire state
                filter: action.payload.filter,
            };
        
        case UPDATE_SEARCH_TERM:
            return {
                ...state, // Return the entire state
                searchTerm: action.payload.searchTerm,
            };

        case MARK_ALL_COMPLETED:
            return {
                ...state, // Return the entire state
                todos: state.todos.map(todo => ({ ...todo, completed: true })),
            };

        default:
            return state;
    }
};

export default todoReducer;
