import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

import PokemonRow from './PokemonRow'
import store from '../store'
import { observer } from 'mobx-react'

const PokemonTable = () => {

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
            store.filteredPokemon.slice(0, 3).map((pokemon) => (
              <PokemonRow pokemon={pokemon}
                key={pokemon.id}
                onSelect={(pokemon) => store.setSelectedPokemon(pokemon)} />
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )

}

export default observer(PokemonTable)
