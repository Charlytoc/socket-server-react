import React, {useEffect, useState} from 'react';
import './App.css'
import { io } from 'socket.io-client'

const socket = io();

function App() {
  const [draft, setDraft] = useState<string>('');

  useEffect(()=>{
    socket.on('message', (message : string) => {
      setDraft(message);
      console.log("message received from backend", message);
      
    })
  }, [])

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);

    socket.emit('message', 'Hello world');

   
  }



  return (
    <>
      <p>Hello bro</p>

      <form onSubmit={handleSubmit} >
        <textarea name="" defaultValue={draft} id="" cols={20} rows={10}>
        </textarea>
        <button>
          Send
        </button>
      </form>
    </>
  )
}

export default App
