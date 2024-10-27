import { useDispatch, useSelector } from 'react-redux';
import { filterTodo, markAllCompleted } from '../redux/actions';

const FilterButtons = () => {
    const dispatch = useDispatch();

    const handleFilter = (filter) => {
        dispatch(filterTodo(filter));
        console.log("Filtered todo:", filter); // Debug log
    }

    const currentFilter = useSelector((state) => state.filter);

    return (
        <div className='flex space-x-4 items-center'>
            <select
                value={currentFilter}
                onChange={(e) => handleFilter(e.target.value)}
                className='text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none'>
                
                <option value="ALL">Default</option>
                <option value="COMPLETED">Completed</option>
                <option value="INCOMPLETE">Incomplete</option>
            </select>
            <button 
                onClick={() => dispatch(markAllCompleted())} 
                className='text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded'>
                Mark all completed
            </button>
        </div>
    );
}

export default FilterButtons;
