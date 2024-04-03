import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

import PokemonRow from './PokemonRow'

const PokemonTable = ( { pokemon, filter, setSelectedItem } ) => {
  
  const handleSelect = (pokemon) => {
    setSelectedItem(pokemon)
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
              .slice(0, 10)
              .map((pokemon) => (
                <PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={() => handleSelect(pokemon)} />
              ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )

}

export default PokemonTable