import React from 'react'
import TableRow from '../TableRow/TableRow';

const headers = ['Id', 'Name', 'City', 'Total Income']

const TableHeaders = () => {
   return (
      <thead>
         <TableRow type='header' data={headers} />
      </thead>
   )
}

export default TableHeaders
