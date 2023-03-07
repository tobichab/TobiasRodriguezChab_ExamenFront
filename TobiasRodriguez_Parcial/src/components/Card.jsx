import React from 'react'

const Card = ({data}) => {
  return (
    <div>
        <h3>Hola {data.Name} {data.Surname}!</h3>
        <p>Gracias por participar del sorteo por una copia de: {data.Favpc}. Podes canjear tu regalo gratis ingresando el siguiente codigo en la pagina: 36721</p>
    </div>
  )
}

export default Card