import {robots} from "../robots";
import CardList from "../containers/CardList";
import React, {Component} from "react";
import SearchBox from '../containers/SearchBox';
import "./App.css";
import Scroll from '../containers/Scroll' ;

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
        const {robots,SearchField}=this.state;
        const filteredList=
            robots.filter(
                robot=>{
                    return robot.name.toLowerCase().includes(SearchField.toLowerCase());
                }
            );

        return !robots.length ? <h1 className={"tc"}>Loading .....</h1> :<div className={"tc"}>
            <h1 className={"f1"}>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll><CardList robots={filteredList} /></Scroll></div>;




    }


}
export default App;