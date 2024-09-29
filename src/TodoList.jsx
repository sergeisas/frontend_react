import { useState } from "react";

import TodoTable from "./TodoTable";

function TodoList() {

    const [desc, setDesc] = useState("");
    const [priority, setPriority] = useState("");
    const [date, setDate] = useState("");
    const [todos, setTodos] = useState([]);


    const handleDescChange = (event) => {
        setDesc(event.target.value);
    };
    const handlePriorityChange = (event) => {
        setPriority(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const addTodo = () => {
        if (desc.trim() !== "" && date.trim() !== "") {
            setTodos([...todos, { description: desc,priority: priority, date: date }]);
            setDesc("");
            setPriority("");
            setDate("");
        }
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index));
    };

    return (
        <>
            <input 
                placeholder="Description" 
                onChange={handleDescChange} 
                value={desc} 
            />
           <select value={priority} onChange={handlePriorityChange}> {/* Dropdown for priority */}
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <input 
                type="text"
                placeholder="Date (YYYY-MM-DD)" 
                onChange={handleDateChange} 
                value={date} 
            />
            <button onClick={addTodo}>Add</button>
            <TodoTable todos={todos} onDelete={deleteTodo}/>
        </>
    );

}

export default TodoList;