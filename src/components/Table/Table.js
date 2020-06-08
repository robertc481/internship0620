import React, { useState } from 'react';
import TableHeaders from '../TableHeaders/TableHeaders';
import TableRow from '../TableRow/TableRow';
import styled, { keyframes } from 'styled-components';
import Pagination from '../Pagination/Pagination';
import Input from '../Input/Input';


const StyledTable = styled.table`
text-align:center;
border:2px solid royalblue;
border-collapse:collapse;
font-size:.7rem;


th{
   color:white;
   background-color: royalblue;
}
th,td,tr{
   border:2px solid royalblue;
   border-collapse:collapse;
   transition: .1s ease-in-out;
   
}
td{
   cursor:pointer;
}
tr:hover td {
   color:white;
   background-color: royalblue;

}
`;
const spin = keyframes`
from{
   transform:rotate(0deg)
}
   to{
      
      transform:rotate(360deg)
   }
`;
const StyledSpinner = styled.span`
   position:relative;
   display:block;
   width: 1.5rem;
   height: 1.5rem;
   background:none;
   border:3px solid black;
   margin-top:1rem;
   border-radius:50%;
   ::before{
      content:'';
      width: 100%;
      height: 20%;
      top:50%;
      left:50%;
      position:absolute;
      background-color: #fff;
      transform-origin:0% 50%;
      animation: ${spin} 1s linear infinite;
   }
`;
const StyledContainer = styled.section`
   display: flex;
   position: absolute;
   padding: 5px;
   justify-content:flex-start;
   align-content:center;
   flex-direction:column;
   width: 90%;
   height: 90%;
`;

const Table = ({ companiesData, loaded, setSelectedCompany }) => {
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage, setItemPerPage] = useState((window.innerWidth > 1000 ? 25 : 9));
   const [inputValue, setInputValue] = useState('');



   //Sorting data by income descending
   const sortDescending = (first, second) => first.incomes.reduce((acc, income) => acc + parseInt(income.value), 0) - second.incomes.reduce((acc, income) => acc + parseInt(income.value), 0);
   const sortedCompanies = companiesData.sort(sortDescending).reverse();

   //Filtering companies by name

   const filteredCompanies = sortedCompanies.filter(company => company.name.toLowerCase().includes(inputValue.toLowerCase()));

   //Pagination logic
   const lastCompany = currentPage * itemsPerPage;
   const firstCompany = lastCompany - itemsPerPage;
   const displayedCompanies = filteredCompanies.slice(firstCompany, lastCompany);
   const pageCount = sortedCompanies.length / itemsPerPage;


   window.addEventListener('resize', () => window.innerWidth > 1000 ? setItemPerPage(25) : setItemPerPage(9))
   return (loaded ?
      <StyledContainer>

         <Input onChange={(event) => setInputValue(event.target.value)} />
         <StyledTable>

            <TableHeaders />
            <tbody>
               {displayedCompanies.map((company, index) => <TableRow
                  data={company}
                  type='data'
                  key={`${company.name}_${index}`}
                  onClick={() => setSelectedCompany(company)}
               />)}
            </tbody>
         </StyledTable>
         <Pagination pageCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </StyledContainer>
      :
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>Hello <br /><StyledSpinner /><br /> Content is loading now... </h1>
   )
}

export default Table
