
const APIKeyDetails = `https://recruitment.hal.skygate.io/companies`;
const APIKeyIncomes = `https://recruitment.hal.skygate.io/incomes/`;

let companiesDb = [];

const FetchData = async () => {
   //Get data that include company's id required to make second API request
   let response = await fetch(APIKeyDetails);
   let data = await response.json();

   companiesDb = data;

   //Looping trough IDs to get incomes particulars
   for (let i = 0; i < data.length; i++) {
      let incomesData = await fetch(`${APIKeyIncomes}${data[i].id}`)

      let incomesResponse = await incomesData.json();
      let { incomes } = incomesResponse;
      companiesDb[i].incomes = incomes;
   }

   return companiesDb;
}

export default FetchData;


