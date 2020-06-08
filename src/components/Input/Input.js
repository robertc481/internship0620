import React from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
   width: 60%;
   height:5%;
   background:none;
   border:2px solid royalblue;
   margin:5px auto ;
   :focus{
      border-color:royalblue;
      outline:royalblue;
   }
`;

const Input = ({ onChange }) => {
   return <StyledInput placeholder='Search in table...' onChange={onChange} />
}

export default Input
