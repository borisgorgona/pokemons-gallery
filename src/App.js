
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from 'react';

/*--------Modules from components------ */
import Search from './components/Search/Search';
import Card from "./components/Card/Card";
import Pagination from './components/Pagination/Pagination';
import Filter from './components/Filter/Filter';
import Navbar from './components/Navbar/Navbar';

/*------------------------------------- */








export default function App() {

  let api = `https://pokeapi.co/api/v2/pokemon/?limit=100`

  /*let api = `https://pokeapi.co/api/v2/pokedex/national`*/



  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();
      //console.log(json);

      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();

        //console.log(json);
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    }

    getPokemons(api);

  }, [api]);

  /*--------State to request Pokemons------------ */
  const [pokemons, setPokemons] = useState([]);

  // Sort Pokemons from smallest to largest
  let results = pokemons.sort((a, b) => a.id - b.id);
  //----------------------------------------------


  /*----------Driving Pokemons to Page---------- */
  let [pageNumber, updatePageNumber] = useState(1);
  const pokemonForPage = 20;

  /* ----- Load Pokemons to page ----------- */

  results = results.slice(
    (pageNumber - 1) * pokemonForPage,
    pageNumber * pokemonForPage
  );
  /*-------------------------------------------------- */


  //---------------Search Pokemons--------------------
  let [search, setSearch] = useState("");
  //--------------------------------------------------







  return (

    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <div className="container">
        <div className="row">
          Filter component will be placed here
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results={results} />
            </div>

            <div><button className={pageNumber === Math.ceil(pokemons.length / pokemonForPage) ? "OFF" : ''}
              onClick={() => updatePageNumber(pageNumber + 1)} >Load Pokemons </button>

            </div>
          </div>
        </div>
      </div>
    </div>


  );



}


