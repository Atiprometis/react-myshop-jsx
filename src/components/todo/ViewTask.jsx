import styleTodo from '../../style/todoapp.module.css'

import PropTypes from 'prop-types'

import React, { useState, useEffect } from 'react';


function ViewTask({data}) {


console.log('data'+data)



    const [texts,setText] = useState('');

    

    const handleChange= (id,e) =>{
        setText((prevTexts)=>({
            ...prevTexts,
            [id]:e.target.value
        }));
    }

    return ( 
        <>
            <div className='col-span-8 gap-3'>
                <div className=' h-dvh bg-slate-800'>
                    <div className="bg-slate-800  p-4 h-full ">
                                {
                                    data.map(item=>(
                                
                                        <div className='bg-zinc-600 p-4 ' key={item.id}>        
                                            <h2>{item.content} {item.item}</h2>
                                            <textarea type="text"
                                            className='w-full h-40 p-4 text-left align-top border border-gray-300 rounded-md'
                                            value={texts[item.id] || ''} 
                                            onChange={(e) => handleChange(item.id, e)}
                                            />
                                        </div>
                                    ))
                                    
                                }
                                <h1>{JSON.stringify(texts)}</h1>
                                
                        {
                            
                        }
                    </div>
                </div>
            </div>
        </>
     );
}

ViewTask.propTypes = {
    data: PropTypes.array.isRequired,
  };

export default ViewTask;