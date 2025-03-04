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

//     const data =[
//     {id:1,content:'1',item:'mimi'},
//     {id:2,content:'2',item:'mimi2'},
//     {id:3,content:'3',item:'mimi3'}
// ]

useEffect(() => {
    
}, [data]);

    return ( 
        <>
            <div className='col-span-4 gap-3'>
                <button onClick={addTasks}>click</button>
                <div className="bg-blue-500 p-4 h-dvh ">Item 1
                    <div>

                        {
                            data.map(datass=>(
                                <div className="bg-green-500 p-4  " onClick={ () => readTasks(datass)} key={datass.id}>
                                {datass.content}{datass.item}
                            </div>
                            ))
                        }
                        
                        {/* {data.map(datatask=>(
                            <div className="bg-red-300 p-4  " key={datatask.id}>
                                {datatask.content}{datatask.id}
                            </div>
                        ))} */}
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