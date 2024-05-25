import './css/bootstrap.css';
import { useTodos } from './hooks/useTodos';

function App() {
    const {visibleTodos, removeTodo, toggleTodo, toggleFilter, showCompleted, clearCompleted} = useTodos()
    
    return <div className="container">
        {visibleTodos.length < 1 ? (<div
            className="alert text-center alert-primary m-5"
            role="alert"
        >
           Aucune <strong>Tâche</strong> 
        </div>)

            :
            (<>
                <div className='mt-4 form-check'>
                    <input className="form-check-input" 
                    type="checkbox" 
                    onChange={toggleFilter}
                    checked={showCompleted}
                    id="checkbox" />
                    <label className="form-check-label" htmlFor="checkbox"> Afficher les tâches accomplie</label>
                </div>

                <ul className="list-group mt-2">
                    {visibleTodos.map((todo) => (
                    <li className="d-flex justify-content-between align-items-center  list-group-item"
                        key={todo.name}
                    >
                        <input className="form-check-input me-5" type="checkbox" onChange={(e)=>toggleTodo(todo)} checked={todo.checked} />
                        <span className='me-5'>{todo.name}</span>
                        <button 
                         type='button' 
                         style={{
                            visibility: (todo.checked)? 'visible' : 'hidden',
                            opacity: (todo.checked)? 1 : 0,
                            transition: 'opacity 1s ease'
                         }}
                         className='btn btn-danger' onClick={(e) => removeTodo(todo)} >Supprimer</button>
                    </li>))}
                </ul>
                <button
                    hidden={visibleTodos.length >= 1 ? false : true}
                    type="button"
                    className="btn btn-outline-success mt-3"
                    onClick={clearCompleted}
                >
                    Supprimer les tâches accomplies
                </button></>)
        }
    </div>
}

export default App;