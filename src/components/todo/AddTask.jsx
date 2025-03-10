import styleTodo from '../../style/todoapp.module.css'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react';

function AddTask({ addData }) {

    const [data,setData] = useState([
        {id:1,content:'1',item:'mimi'},
        {id:2,content:'2',item:'mimi2'},
        {id:3,content:'3',item:'mimi3'}
    ]);
 

    const addTasks = () =>{
        console.log('data'+data)
        const newTasks = [{ id: data.length + 1, content: 'item' + (data.length + 1) }];
        setData([...data,...newTasks]);
        // console.log('newTasks'+newTasks)
    };

    const readTasks =(item) =>{
        // console.log(item);
        addData(item);
    };

useEffect(() => {
    
}, [data]);

    return ( 
        <>
            <div className='col-span-4 gap-3'>
                <div className=' h-dvh bg-slate-800'>
                    <div className="bg-slate-800 p-2 h-full  flex flex-col items-end">
                    <button onClick={addTasks} className=' w-1/4 m-2 '>+</button>
                        <div className='w-full'>

                            {
                                data.map(datass=>(
                                    <div className="bg-zinc-600 p-4 w-full" onClick={ () => readTasks(datass)} key={datass.id}>
                                    {datass.content}{datass.item}
                                </div>
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </>
     );
}

AddTask.propTypes = {
    data: PropTypes.array.isRequired,
  };

export default AddTask;