import "./App.css";
import TodoList from "./components/TodoList";

function App() {

    return (
        <div className='app'>
            <header>
                <h1>My TODO List</h1>
            </header>
            <main>
                <TodoList />
            </main> 
        </div>
    );
}

export default App;
