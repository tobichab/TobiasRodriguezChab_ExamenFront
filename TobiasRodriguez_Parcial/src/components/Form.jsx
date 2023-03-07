import React from 'react'
import Card from './Card'
import { useState } from 'react'

const Form = () => {

    
    const [data, setData] = useState({
        Name: '',
        Surname: '',
        Favpc: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const hS = (event) => {
        event.preventDefault()
        if(data.Name.length > 3 && data.Surname.length > 6) {
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }

  return (
    <div>
      
        {show ? <Card data = {data}/> :   
            <form onSubmit={hS}>
            <label>Name</label>
            <input type="text" value={data.Name.trim()} onChange={(e) => setData({...data, Name: e.target.value})}/>
            <label>Surname</label>
            <input type="text" value={data.Surname} onChange={(e) => setData({...data, Surname: e.target.value})}/>
            <label>Favorite pc game</label>
            <input type="text" value={data.Favpc} onChange={(e) => setData({...data, Favpc: e.target.value})}/>
            <button>Send</button>
            {error && 'Por favor chequea que la información sea correcta'}
        </form> }
    </div>
  )
}

export default Form