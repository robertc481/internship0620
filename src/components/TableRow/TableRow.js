import React from 'react';

const TableCell = ({ type, children }) => type === 'data' ? <td>{children}</td> : <th>{children}</th>;


const TableRow = (props) => {
   const { id, name, city, incomes } = props.data;
   return (

      <tr onClick={props.onClick}>

         {props.type === 'header' ?
            props.data.map(detail => <TableCell type={props.type} key={`${props.type}_${detail}`}>{detail}</TableCell>)
            :
            (<>
               <TableCell type='data'>{id}</TableCell>
               <TableCell type='data'>{name}</TableCell>
               <TableCell type='data'>{city}</TableCell>
               <TableCell type='data'>{`$${incomes.reduce((acc, income) => acc + parseInt(income.value), 0)}`}</TableCell>

            </>
            )

         }
      </tr>
   )
}

export default TableRow;
