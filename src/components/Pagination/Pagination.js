import React from 'react'
import styled from 'styled-components';

const StyledNav = styled.nav`
   display:flex;
   position:absolute;
   bottom:0;
   right:0;
   justify-content:flex-end;
   align-items:center;
   width:100%;
   margin:5px 0;
   button{
      margin:0 5px;
      cursor:pointer;
   }
   div{
      margin:0 5px;
      transition:.2s ease-in-out ;
      cursor:pointer;
      display:none;
      visibility:hidden;
      
   }
   .visible{
      display:block;
      visibility:visible;
   }
   .active{
      color:royalblue;
      border-bottom:2px solid royalblue;
      
   }
   span:first-child{
      color:royalblue;
   }

`;

const Pagination = ({ pageCount, currentPage, setCurrentPage }) => {
   let pageNumbers = [];
   for (let i = 1; i <= pageCount; i++) { pageNumbers.push(i) }

   return (
      <StyledNav>


         <button onClick={() => setCurrentPage(1)}>
            &#9668;
         </button>

         <button disabled={currentPage === 1 ? true : false} onClick={() => setCurrentPage(currentPage - 1)}>
            &larr;
         </button>
         <span>{`${currentPage} of ${pageNumbers.length}`}</span>

         <button disabled={currentPage === pageNumbers.length ? true : false} onClick={() => setCurrentPage(currentPage + 1)}>
            &rarr;
         </button>
         <button onClick={() => setCurrentPage(pageNumbers.length)}>
            &#9658;
         </button>
      </StyledNav>
   )
}

export default Pagination
