import React, { useState } from "react";
import {Link} from "react-router-dom";
import './style.css';



const FirstScreen = (props) => {

    const [searchData , setSearchData]= useState("Name");
    const [filterData, setFilterData] = useState("");
    const [selectedData, setSelectedData]= useState([]);
    const [selectedIndex, setSelectedIndex]= useState([]);

    const setNextScreenData=(event,id)=>{
        
        if(event.target.checked){
          selectedData.push(props.GridData[id]);
          setSelectedData([...selectedData]);
          selectedIndex.push(id);
          setSelectedIndex(selectedIndex);
        } else {
           const index= selectedIndex.indexOf(id);
           selectedData.splice(index,1);
           setSelectedData([...selectedData]);
           selectedIndex.splice(index,1);
           setSelectedIndex(selectedIndex);
        }
        };

    const showFilteredData=()=>{
        if(searchData==="Name"){
         return props.GridData.filter(val=>{
              return val.name.toLowerCase().indexOf(filterData.toLowerCase())>=0;
           })
           .map((val, id) => {
                return (<tr key={`${val.name}_${val.grade}`}><th scope="row">{id + 1}</th>
                    <td>{val.name}</td>
                    <td>{val.grade}</td>
                    <td>{val.percentage}</td>
                    <td><input type="checkbox" onClick={(event)=>setNextScreenData(event,id)} /></td></tr>);
            });
        } else {
                return props.GridData.filter(val=>{
                     return val.grade.toLowerCase().indexOf(filterData.toLowerCase())>=0;
                  })
                  .map((val, id) => {
                       return (<tr key={`${val.name}_${val.grade}`}><th scope="row">{id + 1}</th>
                           <td>{val.name}</td>
                           <td>{val.grade}</td>
                           <td>{val.percentage}</td>
                           <td><input type="checkbox" onClick={(event)=>setNextScreenData(event,id)} /></td></tr>);
                   });

        }
    }

    return (<div className="mainscreen d-flex flex-row justify-content-center mt-5 " >
        <div className="card datascreen">
            <div className="d-flex flex-row justify-content-start my-3">
                <label className="pr-3 ml-5 labelHeading">{searchData} : </label>
                <input className="form-control " type="text" onChange={(event)=>{setFilterData(event.target.value)}} placeholder="Search Data" style={{ width: '200px' }} />
            </div>
            <div className="dropdown d-flex flex-row justify-content-end mr-5 pb-2 filter">
                <button className="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown">
                </button>
                <div className="dropdown-menu" >
                   {searchData==="Grade"?(<button className="dropdown-item" type="button"  onClick={()=>setSearchData("Name")}>Name</button>): null}
                   {searchData==="Name"?( <button className="dropdown-item" type="button" onClick={()=>setSearchData("Grade")}>Grade</button>): null} 
                </div>
            </div>
            <div className="griddata ">
                <table className="table table-striped" >
                    <thead>
                        <tr>
                            <th scope="col ">Sr. No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Grade</th>
                            <th scope="col">%</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        { filterData.length? showFilteredData() :
                        (
                            props.GridData.map((val, id) => {
                                return (<tr key={`${val.name}_${val.grade}`}><th scope="row">{id + 1}</th>
                                    <td>{val.name}</td>
                                    <td>{val.grade}</td>
                                    <td>{val.percentage}</td>
                                    <td><input type="checkbox" onClick={(event)=>setNextScreenData(event,id)} /></td></tr>);
                            })
                        )}
                    </tbody>
                </table>
            </div>
            <div className="d-flex flex-row justify-content-end mr-4 pt-4">
           <Link to="/records"> <button type="button" className="btn btn-outline-dark" disabled={selectedData.length? false: true}  onClick={()=> props.UpdateRecords(selectedData)}>Next</button></Link>
            </div>
        </div>
    </div>)
};

export default FirstScreen;