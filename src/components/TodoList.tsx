import { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    const [todoList, setTodoList] = useState<string[]>(['coding', 'swimming']);
    const [task, setTask] = useState<string>('');

    function addItem() {
        if (task.trim() === '') return;
        setTodoList([...todoList, task]);
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
                {todoList.map((item, i) => (
                    <TodoItem
                        key={i}
                        task={item}
                        removeItem={() => removeItem(i)}
                    />
                ))}
            </div>
        </>
    );
}

export default TodoList;
