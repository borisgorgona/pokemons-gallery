
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

  /* -------------State to request Pokemons ---------*/
  const [pokemons, setPokemons] = useState([]);
  /* ------------------------------------------------------------- */

  /* ----------Driving to Pokemons to Page----------- */
  const [paginaActual, setPaginaActual] = useState(1);
  const TOTAL_POR_PAGINA = 20;

  /*----------------------------------------------------- */





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

    getPokemons("https://pokeapi.co/api/v2/pokemon/?limit=75");



  }, [])


  /* Sort the Pokemons from smallest to largest  */
  let loadPokemons = pokemons.sort((a, b) => a.id - b.id);


  /* ----- Load Pokemons to page ----------- */

  loadPokemons = loadPokemons.slice(
    (paginaActual - 1) * TOTAL_POR_PAGINA,
    paginaActual * TOTAL_POR_PAGINA
  );
  /*-------------------------------------------------- */


  return (
    <>


      <PageWrapper >

        <div className="prueba">

          {loadPokemons.length === 0 ? (
            <h3>Cargando...</h3>
          ) : (
            loadPokemons.map(el => (
              <RenderPokemon key={el.id} name={el.name} id={el.id} avatar={el.avatar} />
            )))
          }
        </div>
        <div><button className={paginaActual === Math.ceil(pokemons.length / TOTAL_POR_PAGINA) ? "OFF" : ''}
          onClick={() => setPaginaActual(paginaActual + 1)} >Load Pokemons </button>

        </div>

      </PageWrapper>



    </>

  );



}


