import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

import PokemonRow from './PokemonRow'
import PokemonContext from '../PokemonContext'
import { useContext } from 'react'

const PokemonTable = () => {

  const {
    state: { pokemon, filter },
    dispatch
  } = useContext(PokemonContext)
  
  const handleSelect = (pokemon) => {
    dispatch( {
      type: "SET_SELECTED_POKEMON",
      payload: pokemon
    })
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            pokemon
              .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
              .slice(0, 3)
              .map((pokemon) => (
                <PokemonRow pokemon={pokemon}
                  key={pokemon.id}
                  onSelect={(pokemon) => handleSelect(pokemon)} />
              ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )

}

export default PokemonTable
