import { useState } from "react";
import TodoItem from "./TodoItem";

const LIST = [
	{ name: "Buy milk", done: true },
	{ name: "Buy eggs", done: false },
	{ name: "Buy bread", done: true },
]

function TodoList() {
	const [inputValue, setInputValue] = useState("")
	function handleInput(e) {
		setInputValue(e.target.value)
	}
	function handleAdd() {
		if(inputValue === "" || inputValue.trim() === "") {
			return
		}
		LIST.push({
			name: inputValue,
			done: false
		})
		setInputValue("")
	}
	// Hooks



  return (
    <div className="w-80 h-80 border bg-gray-700 flex flex-col justify-start border-white rounded-md p-4">
			<div>🪴 Todo List</div>
			{
				LIST.map((item) => {
					return <TodoItem key={item.name} name={item.name} />
				})
			}
			<div className="flex justify-start items-center gap-2">
				+ <input value={inputValue} onChange={handleInput} placeholder="Enter tasks, ideas, notes" type="text" className="h-4 bg-gray-700 border-none flex-1" />
			</div>
			<div onClick={handleAdd} className="bg-white text-black w-14 h-6 hover:cursor-pointer">Add</div>
    </div>
  );
}

export default TodoList;
