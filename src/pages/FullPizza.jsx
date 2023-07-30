import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FullPizza = () => {
    const {id} = useParams()
    const [pizza, setPizza] = useState();

    console.log('pizza > ', pizza);

    useEffect(() => {

        async function fetchPizza () {
            try {
                const {data} = await axios.get('https://63fb84524e024687bf79fb74.mockapi.io/items/' + id)
                setPizza(data)
            } catch (error) {
                console.log(error);
            }
        }

        fetchPizza()
    }, [])
    console.log('pizza > ', pizza);

    if(!pizza) {
        return (
            <h1>Downloading ....</h1>
        )
    }

  return (
    <div className='container pizza-block'>
        <img className="pizza-block__image" src={pizza.imageUrl} alt="pizza" />
        <h4 className="pizza-block__title">{pizza.title}</h4>
        <div className="pizza-block__price">{pizza.price} $</div>
    </div>
  )
}

export default FullPizza