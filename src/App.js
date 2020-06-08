import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table/Table';
import fetchData from './utilities/fetchData';
import SelectedCompany from './components/SelectedCompany/SelectedCompany';

function App() {

  const [companiesData, setCompaniesData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState({});

  useEffect(() => {
    const getData = async () => await fetchData().then(data => { setCompaniesData(data); setLoaded(true) })

    getData()
  }, [])

  return (
    <main className="App">

      <Table loaded={loaded} companiesData={companiesData} setSelectedCompany={setSelectedCompany} />

      {
        selectedCompany.id
        &&
        <SelectedCompany
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
        />
      }
    </main>
  );
}

export default App;
