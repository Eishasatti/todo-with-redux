import React from "react";
import { useState } from "react";
import { BsPlusLg, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addtodo, updateSearch } from "../redux/actions";

import FilterButtons from "./FilterButtons";
import TodoList from "./TodoList";

const Todo = () => {
  const dispatch = useDispatch()

const handleAddTodo=(text)=>{
  dispatch(addtodo(text))

}
const handleSearchChange=(value)=>{
  setsearchTerm(value);
  dispatch(updateSearch(value));
}

const handleAddtodoClick= ()=>{
  if(newTodoText.trim()!==""){
handleAddTodo(newTodoText.trim());
setNewTodo("")

  }
}

  const [newTodoText, setNewTodo] = useState(" ");
  const[searchTerm, setsearchTerm]=useState(" ");
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded ">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        Personal Todo App
      </h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={newTodoText}
          onChange={(e)=> setNewTodo(e.target.value)}
          name="addTodoInput"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" 
        onClick={handleAddtodoClick}>
          <BsPlusLg />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <FilterButtons/>
        <div className="flex items-center mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e)=> handleSearchChange(e.target.value)}
          name="addTodoInput"
          placeholder="Search"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" >
          <BsSearch />
        </button>
        </div>
        
      </div>
      <TodoList/>
    </div>
  );
};

export default Todo;
