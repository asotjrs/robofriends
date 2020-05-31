import {robots} from "./robots";
import CardList from "./CardList";
import React, {Component} from "react";
import SearchBox from './SearchBox'


class App extends Component{
    constructor(){
        super();
        this.state={
            'robots':robots,
            'SearchField':''
        }
    }
    onSearchChange(event){
        this.setState({'SearchField':event.target.value})

    }
    render(){
       const filteredList=()=>{ this.state.robots.filter(
           robot=>{
               return robot.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
           }
       )

       };
       return <div className={"tc"}>
            <h1>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredList} />
        </div>;

    }


}
export default App;