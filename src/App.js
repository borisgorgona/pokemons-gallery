
import React, { useState, useEffect } from 'react';
import './App.css';
import PageWrapper from './pageWrapper';



function RenderPokemon({ avatar, name, id }) {


  return (
    <figure>
      <a href="#"><img src={avatar} alt={name} /></a>
      <figcaption>{name} {id}</figcaption>
    </figure>


  );
}


export default function App() {


  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(1);


  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();
      console.log(json);

      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();

        console.log(json);
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });

    }

    getPokemons("https://pokeapi.co/api/v2/pokemon/?limit=200");



  }, [])


  return (
    <>


      <PageWrapper >

        <div className="prueba">

          {pokemons.length === 0 ? (
            <h3>Cargando...</h3>
          ) : (
            pokemons.map(el => (
              <RenderPokemon key={el.id} name={el.name} id={el.id} avatar={el.avatar} />
            )))
          }
        </div>
        <div><button onClick={() => setCount(count + 1)}>Load Pokemons</button>
          <h6>Peticion número {count}</h6>
        </div>

      </PageWrapper>



    </>

  );



}


