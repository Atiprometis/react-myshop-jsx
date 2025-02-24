import { useParams } from 'react-router-dom'
import axios from 'axios'

import { useState, useEffect } from 'react';


function HomeEdit() {
    const { id } = useParams()

    const [todo,setTodo] = useState({
        name: '',
    });
  const BASE_URL = 'https://67b81d172bddacfb2710fd89.mockapi.io'


  async function fetchTodo(todoID) {
    try{
      const response = await axios.get(`${BASE_URL}/todo/${todoID}`);
      setTodo(response.data);

    }catch(error){
      console.log('error',error)
    }
  }

function changeName(event){
    setTodo((previousState)=>({
        ...previousState,
        name: event.target.value

    }))
}

async function updateName(){
    try {

      await axios.put(`${BASE_URL}/todo/${id}`,{
        name: todo.name
      }) 


      alert('update')
    } catch (error) {
      console.log('error',error)
    }
  }

    useEffect(() => {
        fetchTodo(id)
    }, [id]);
    return ( 
        <>
        <h1>HOME EDIT {id}</h1>
        <div>
        {todo.name}
        <input type="text" onChange={changeName} value={todo.name} />
        {todo.name}
        <button onClick={()=>updateName()}>updatename</button>
        </div>
        </>
     );
}

export default HomeEdit;