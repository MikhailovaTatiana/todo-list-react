import { useState } from "react";
import TodoItem from "./TodoItem";
import { taskData } from "../utils/taskData";

interface TodoItem {
    id: number;
    task: string;
    checked: boolean;
}

function TodoList() {
    const [todoList, setTodoList] = useState<TodoItem[]>(taskData);

    const [task, setTask] = useState<string>("");

    function addItem() {
        if (task.trim() === "") return;
        const newItem = {
            id: Date.now(),
            task,
            checked: false,
        };
        setTodoList([...todoList, newItem]);
        setTask("");
    }

    function removeItem(id: number) {
        setTodoList(todoList.filter(item => item.id !== id));
    }

    function toggleChecked(id: number) {
        setTodoList(
            todoList.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    }

    function deleteCheckedTasks() {
        setTodoList(todoList.filter((item) => !item.checked));
    }

    const hasCheckedTasks = todoList.some((item) => item.checked);

    return (
        <>
            <section className='input-container'>
                <input
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button onClick={() => addItem()}>Add</button>
            </section>
            <div className='list-container'>
                {todoList.length > 0 ? (
                    todoList.map((item) => (
                        <TodoItem
                            key={item.id}
                            id={item.id}
                            task={item.task}
                            checked={item.checked}
                            removeItem={() => removeItem(item.id)}
                            toggleChecked={() => toggleChecked(item.id)}
                        />
                    ))
                ) : (
                    <p>No tasks to display 🙂</p>
                )}
            </div>
            {hasCheckedTasks && (
                <button
                    className='removeAllBtn'
                    onClick={deleteCheckedTasks}
                >
                    Delete Checked Tasks
                </button>
            )}
        </>
    );
}

export default TodoList;
