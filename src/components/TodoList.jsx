import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    const filteredTodos = useSelector((state) => {
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm.toLowerCase().trim();
        
        return todos.filter((todo) => {
            // Determine if the todo matches the filter
            const matchFilter = 
                (filter === "COMPLETED" && todo.completed) ||
                (filter === "INCOMPLETE" && !todo.completed) ||
                (filter === "ALL");  // Explicitly handle the "ALL" case
            
            // Determine if the todo matches the search term
            const matchSearch = todo.text.toLowerCase().includes(searchTerm);
            
            // Return true if both the filter and search match
            return matchFilter && matchSearch;
        });
    });

    return (
        <ul>
            <li className='my-2 text-sm italic'>All Your Notes Here</li>
            {filteredTodos.length > 0 ? (
                filteredTodos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} index={index} />
                ))
            ) : (
                <li className='my-2 text-sm italic'>No Todos Found</li>
            )}
        </ul>
    );
}

export default TodoList;
