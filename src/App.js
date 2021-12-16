
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

  let api = `https://pokeapi.co/api/v2/pokemon/?offset=100&limit=100`

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

  const [pokemons, setPokemons] = useState([]);
  let results = pokemons;

















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
          </div>
        </div>
      </div>
    </div>


  );



}


