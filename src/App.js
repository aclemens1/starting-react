import { useEffect, useReducer, useState } from 'react'

import '@fontsource/roboto/400.css'

import { CssBaseline, Container, Grid, Paper, Typography } from '@mui/material'

import { legacy_createStore as createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'

import PokemonTable from './components/PokemonTable'
import PokemonInfo from './components/PokemonInfo'
import PokemonFilter from './components/PokemonFilter'

const pokemonReducer = (state = {
  pokemon: [],
  filter: "",
  selectedPokemon: null
}, action) => {
  switch(action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload
      }
    case "SET_POKEMON":
      return {
        ...state,
        pokemon: action.payload
      }
    case "SET_SELECTED_POKEMON":
      return {
        ...state,
        selectedPokemon: action.payload
      }
    default:
      return state
  }
}

const store = createStore(pokemonReducer)

function App() {

  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemon)
  const selectedPokemon = useSelector(state => state.selectedPokemon)

  useEffect(() => {
    fetch('http://localhost:3000/starting-react/pokemon.json')
      .then((response) => response.json())
      .then((data) => dispatch({
        type: "SET_POKEMON",
        payload: data
      }))
  }, [])

  if (!pokemon) {
    return <div>Loading data...</div>
  }

  return (
    
      <Container maxWidth="md" sx={ { marginTop: 2, paddingBottom: 5 } }>
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Paper sx={ { padding: 2, marginBottom: 2 } }>
              <Typography variant="h4" component="h1">
                Pokemon Index
              </Typography>
            </Paper>
            <Paper sx={ { padding: 2 } }>
              <PokemonFilter />
              <Typography sx={ { marginTop: 3, marginBottom: 3 } }>
                Showing top 3 pokemons using the filter above (if any):
              </Typography>
              <PokemonTable />
            </Paper>
          </Grid>
          <Grid item xs={3} container alignItems={'stretch'}>
            <Paper sx={ { padding: 2, flexGrow: 1 } }>
              { selectedPokemon ? <PokemonInfo /> : <Typography color={'GrayText'}>Select a Pokemon</Typography> }
            </Paper>
          </Grid>
        </Grid>
      </Container>
    
  )

}

export default () => <Provider store={store}><App /></Provider>
