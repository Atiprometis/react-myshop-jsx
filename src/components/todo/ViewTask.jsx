import styleTodo from '../../style/todoapp.module.css'

import PropTypes from 'prop-types'


function ViewTask({data}) {
// console.log(data);
    // console.log('data:', JSON.stringify(data, null, 2));

    return ( 
        <>
            <div className='col-span-8 gap-3'>
                <div className="bg-red-500 p-4 h-dvh ">
                    {
                        data.map(item=>(
                            <div className='bg-green-800 p-4 ' key={item.id}>
                                <h2>{item.content} {item.item}</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
     );
}

ViewTask.propTypes = {
    data: PropTypes.array.isRequired,
  };

export default ViewTask;