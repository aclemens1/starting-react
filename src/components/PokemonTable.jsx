import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

import PokemonRow from './PokemonRow'
import useStore from '../store'

const PokemonTable = () => {

  const pokemon = useStore(state => state.pokemon)
  const filter = useStore(state => state.filter)
  const setSelectedPokemon = useStore(state => state.setSelectedPokemon)

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
                  onSelect={setSelectedPokemon} />
              ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )

}

export default PokemonTable
