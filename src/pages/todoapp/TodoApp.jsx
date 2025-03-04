import styleTodo from '../../style/todoapp.module.css'

import AddTask from '../../components/todo/AddTask'
import ViewTask from '../../components/todo/ViewTask'

import React, { useState, useEffect } from 'react';

function TodoApp() {

    const [data,setData] = useState([]);

    const addData = ( getData ) =>{
        setData([getData])
    }

    return (  
        <>
        <div className={styleTodo.bodytodo}>
            <h1>todo</h1>
            <div className='grid lg:grid-cols-12 gap-4'>
                
            <AddTask addData={addData}/>
            <ViewTask data={data}/>
            </div>
        </div>
        </>
    );
}

export default TodoApp;