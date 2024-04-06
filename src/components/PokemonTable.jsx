import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

import { useSelector, useDispatch } from 'react-redux'

import PokemonRow from './PokemonRow'

const PokemonTable = () => {

  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemon)
  const filter = useSelector(state => state.filter)

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
