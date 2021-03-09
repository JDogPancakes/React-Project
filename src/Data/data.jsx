import React, { useEffect,useMemo,useState } from 'react';
import Header from '../Shared/Header';
import axios from 'axios';

const Data = () => {
    const APILINK = 'https://gist.githubusercontent.com/zperrault/721859db1122bb7f9766/raw/aecc6afcc515d98c13f1429ab9f93fd4a8e239fd/dinosaurs.json';
    
    const [data,setData] = useState([]);
    const dinos = useMemo(()=> data, [data]);
    useEffect(() => {axios.get(APILINK).then(resp => {setData(resp.data)});
    },[]);
    
  
  
     const filterSearch = event => {
       event.persist();
       const value = event.target.value;
       axios.get(APILINK).then(resp =>{
  
       if (value.length === 0) {
         setData([...resp.data]);
       } else if (isNaN(value)) {
         //const regex = new RegExp(value);
         let regex = RegExp(document.getElementById("search").value);
         setData([...resp.data.filter(datum => (regex.test(datum.name.to) ))]);
       } 
      })
     };

     const filterDropdown = event => {
        event.persist();
        const value2 = event.target.value;
        axios.get(APILINK).then(resp =>{
        if (value2 === '0') {
           setData([...resp.data]);} 
        else {
            const regex = new RegExp(value2);
            setData([...resp.data.filter(datum => (regex.test(datum.diet) ))]);
        } 
      })
      };
  
    return (
      <>
        <Header title="Dino Species"/>
        <div className="container">
          <h2>Table of Dinos</h2>
          <hr/>
          <div className="row my-3 align-items-center justify-content-end">
          <div className="col-auto">
            <label htmlFor="dropdown" className="col-form-label">Sort By Diet</label>
          </div>
          <div>
            <select name="dropdown" onChange = {filterDropdown}>
                <option value= '0' selected >Any</option>
                <option value="Carnivorous">Carnivore</option>
                <option value="Herbivorous">Herbivore</option>
                <option value="Omnivorous">Omnivore</option>
            </select>
          </div>
            <div className="col-auto">
              <label htmlFor="filter" className="col-form-label">Name Filter</label>
            </div>
            <div className="col-auto">
              <input type="text" name="filter" id = "search" className="form-control" onChange = {filterSearch} />
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <td>Name</td>
                <td>Era</td>
                <td>Diet</td>
                <td>Regions</td>
                <td>Height (feet)</td>
                <td>Length (feet)</td>
              </tr>
            </thead>
            {dinos.map((dino, x) => (
                
            <tbody>
              <td>{dino.name}</td>
              <td>{dino.era}</td>
              <td>{dino.diet}</td>
              <td>{dino.regions}</td>
              <td>{dino.feetTall}</td>
              <td>{dino.feetLong}</td>
            </tbody>
            ))}
          </table>
        </div>
      </>
      );
    }
   
  export default Data;