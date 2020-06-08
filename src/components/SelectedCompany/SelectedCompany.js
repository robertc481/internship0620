import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
   position: relative;
   display:flex;
   flex-direction:column;
   top:0;
   left: 0;
   width:100%;
   height: 100%;
   background-color: white;
   span{
      font-weight:bold;
   }
   input{
      margin: 5px 0;
      border:none;
      border-bottom:2px solid royalblue;

   }
   
`;
const StyledButton = styled.button`
cursor:pointer;
   margin: 0;
   padding: 0;
   position: relative;
   border:none;
   width:30px;
   height: 30px;
   background:none;
   top:2%;
   left: 2%;
   ::before,::after{
      position:absolute;
      left:0;
      content:'';
      width:100%;
      height: 10%;
      background-color: #000;
      transform-origin: 1px;
   }
   ::before{
      top:0;
      transform:translateY(3.75px) rotate(45deg);
   }
   ::after{
      bottom:0;
      transform:translateY(-3.75px) rotate(-45deg);
   }
`;
const StyledDetails = styled.article`
   position: relative;
   width: 90%;
   height: 90%;
   top: 50%;
   left:50%;
   transform:translate(-50%,-50%);
   display: flex;
   flex-direction:column;
   justify-content: center;
   align-items: center;
   h2,h3{
      text-align:center;
      span{
         color:royalblue;
      }
   }
`;
const StyledIncomesDetails = styled.aside`
display: flex;
justify-content: center;
height: 80%;
width: 100%;
div{
   width:33%;
   display: flex;
   flex-direction:column;
   justify-content: flex-start;
   align-items: center;
   h4{
   color:royalblue;
   text-align:center;

}
}
`;
const StyledInputsSection = styled.p`
label{
   margin:5px 5px;
}
`;


const SelectedCompany = ({ selectedCompany, setSelectedCompany }) => {
   const [startDate, setStartDate] = useState('2018-01-01');
   const [endDate, setEndDate] = useState('2020-12-31');

   const { name, city, id, incomes } = selectedCompany;
   const incomeInRangeOfDates = incomes.filter(income => income.date >= startDate && income.date <= endDate)
   const summedIncomes = incomeInRangeOfDates.reduce((acc, income) => acc + parseInt(income.value), 0);

   const lastMonthIncome = incomes.map(income => (income.date.match(/-12-/) ? parseInt(income.value) : 0)).filter(value => value !== 0).reduce((a, b) => a + b, 0);
   console.log(incomeInRangeOfDates.length)
   return (
      <StyledSection>
         <StyledButton onClick={() => setSelectedCompany({})}></StyledButton>
         <StyledDetails>
            <h2><span>{id}.</span>&nbsp;{name}</h2>
            <h3><span>Registered at:</span>&nbsp;{city}</h3>
            <span>Below You can change range of date used to calculate Total and Average incomes</span>
            <StyledInputsSection>
               <label htmlFor="input_startDate">Set start date:</label>
               <input
                  onChange={(e) => setStartDate(e.target.value)}
                  id="input_startDate"
                  type="date"
               />
               <label htmlFor="endDate">Set end date:</label>
               <input
                  onChange={(e) => setEndDate(e.target.value)}
                  id="endDate"
                  type="date" />
            </StyledInputsSection>
            <StyledIncomesDetails>
               <div>
                  <h4>Total Income :</h4>
                  <span>{`$${summedIncomes}`}</span>
               </div>
               <div>
                  <h4>Average Income :</h4>
                  <span>{`$${parseInt(Math.round(summedIncomes / incomeInRangeOfDates.length))}`}</span>
               </div>
               <div>
                  <h4>Last Month Income : </h4>
                  <span>{`$${lastMonthIncome}`}</span>
               </div>

            </StyledIncomesDetails>
         </StyledDetails>
      </StyledSection>
   )
}

export default SelectedCompany
