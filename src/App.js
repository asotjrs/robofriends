import {robots} from "./robots";
import CardList from "./CardList";
import React, {Component} from "react";
import SearchBox from './SearchBox';
import "./App.css";
import Scroll from "./Scroll";

class App extends Component{
    constructor(){
        super();
        this.state={
            'robots':[],
            'SearchField':''
        }
    }
    componentDidMount() {
        fetch(
            "https://jsonplaceholder.typicode.com/users").then(
            result=>result.json()).then(
            users=>this.setState({'robots':users}));

    }

    onSearchChange=(event)=>{
        this.setState({'SearchField':event.target.value});


    };

    render(){
        const filteredList=
            this.state.robots.filter(
                robot=>{
                    return robot.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
                }
            );
        if (this.state.robots.length===0){
            return <h1 className={"tc"}>Loading .....</h1>
        }else {
            return <div className={"tc"}>
                <h1 className={"f1"}>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll><CardList robots={filteredList} /></Scroll>


            </div>;
        }


    }


}
export default App;