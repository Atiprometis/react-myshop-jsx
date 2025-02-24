import { Link } from 'react-router-dom'
import style from '../style/about.module.css'


import  { useState, useEffect } from 'react';

import axios from 'axios';


function HomePage() {
  const [todo,setTodo] = useState([]);
  const BASE_URL = 'https://67b81d172bddacfb2710fd89.mockapi.io'
  const [isLoading,setIsLoading] = useState(true);

  async function fetchTodo() {
    try{
      const response = await axios.get('https://67b81d172bddacfb2710fd89.mockapi.io/todo');
      setTodo(response.data);
      setIsLoading(false);
    }catch(error){
      console.log('error',error)
    }
  }

  async function deleteTodo(id){
    try {
      setIsLoading(true)
      await axios.delete(`${BASE_URL}/todo/${id}`) 
      await fetchTodo()
      setIsLoading(false)
    } catch (error) {
      console.log('error',error)
    }
  }

  useEffect( () => {
    fetchTodo()
  }, [])

    return (
      <>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading &&
      <div>
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 ">
        <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Page not found</h1>
            <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</Link>
            <Link to="/product" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></Link>
            <h1 className={style.blue}>asdasdasdas</h1>
            </div>
        </div>
        </main>
        <div>
          {
            todo.map((todo,index) => (
            <div key={index}>
              {todo.name}
              {todo.id}
              <Link to={`/todo/${todo.id}`}><button>edit</button></Link>
              
              <button
              onClick={async ()=>{
               await deleteTodo(todo.id)
              } }
              >delete</button>
            </div>
            ))
          }
        </div>
      </div>
      }
        
      </>
    )
  }
  
  export default HomePage