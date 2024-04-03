import { TableCell, TableRow } from '@mui/material'

import Button from '@mui/material/Button'

const PokemonRow = ({ pokemon, onSelect }) => {

  const handleSelect = () => {
    onSelect(pokemon)
  }

  return ( 
    <TableRow>
      <TableCell>{pokemon.name.english}</TableCell>
      <TableCell>{pokemon.type.join(', ')}</TableCell>
      <TableCell><Button variant="outlined" onClick={handleSelect}>Select</Button></TableCell>
    </TableRow>
  )
  
}

export default PokemonRow
