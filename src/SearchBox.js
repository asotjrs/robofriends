import React from "react";


const SearchBox=({searchField,searchChange})=>{
  return (<div className={"pa2"}>
    <input
      onChange={searchChange}
      className={"pa3 b--green bg--lightest-blue"
      } placeholder={"search robots"}
      type={"search"}/>
        </div>);

};
export default SearchBox;