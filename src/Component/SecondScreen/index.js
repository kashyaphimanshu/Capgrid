import React, { useState } from "react";
import {Link} from "react-router-dom";
import './style.css';


const SecondScreen = (props) => {

    const [searchData , setSearchData]= useState("Name");
    const [filterData, setFilterData] = useState("");

    const showFilteredData=()=>{
        if(searchData==="Name"){
         return props.GridData.filter(val=>{
              return val.name.indexOf(filterData)>=0;
           })
           .map((val, id) => {
                return (<tr key={`${val.name}_${val.grade}`}><th scope="row">{id + 1}</th>
                    <td>{val.name}</td>
                    <td>{val.grade}</td>
                    <td>{val.percentage}</td>
                </tr>);
            });
        } else {
                return props.GridData.filter(val=>{
                     return val.grade.indexOf(filterData)>=0;
                  })
                  .map((val, id) => {
                       return (<tr key={`${val.name}_${val.grade}`}><th scope="row">{id + 1}</th>
                           <td>{val.name}</td>
                           <td>{val.grade}</td>
                           <td>{val.percentage}</td>
                          </tr>);
                   });

        }
    };

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
                                    </tr>);
                            })
                        )}
                    </tbody>
                </table>
                <div className="d-flex flex-row justify-content-end mr-4 pt-4">
           <Link to="/"> <button type="button" className="btn btn-outline-dark"  >Previous</button></Link>
            </div>
            </div>
        </div>
    </div>)
};

export default SecondScreen;