import { useState } from 'react';
import TodoItem from './TodoItem';

interface TodoItem {
    id: number;
    task: string;
}

function TodoList() {
    const [todoList, setTodoList] = useState<TodoItem[]>([
        { id: 1, task: 'coding' },
        { id: 2, task: 'swimming' }
    ]);
  
    const [task, setTask] = useState<string>('');

    function addItem() {
        if (task.trim() === '') return;
        const newItem = { id: Date.now(), task };
        setTodoList([...todoList, newItem]);
        setTask('');
    }

    function removeItem(id: number) {
        setTodoList(todoList.filter((_, index) => index !== id));
    }

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
                {todoList.map((item) => (
                    <TodoItem
                        key={item.id}
                        task={item.task}
                        id={item.id}
                        removeItem={() => removeItem(item.id)}
                    />
                ))}
            </div>
        </>
    );
}

export default TodoList;
