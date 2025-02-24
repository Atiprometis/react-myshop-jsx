import style from '../../style/todoapp.module.css'

import AddTask from '../../components/todo/AddTask'
import ViewTask from '../../components/todo/ViewTask'
function TodoApp() {
    return (  
        <>
        <h1>todo</h1>
        <div className=' grid grid-rows-12'>
        <AddTask/>
        <ViewTask/>
        </div>
        </>
    );
}

export default TodoApp;