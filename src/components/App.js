import CardList from "../containers/CardList";
import React, {Component} from "react";
import {connect} from 'react-redux';
import SearchBox from '../containers/SearchBox';
import "./App.css";
import Scroll from '../containers/Scroll' ;
import ErrorBoundry from "./ErrorBoundry";
import {setSearchField} from "../actions";

const  mapStateToProps =(state)=>{
        return{
            searchField: state.searchField
        }
    };
const mapDispatchToProps=(dispatch)=>{
  return {
        onSearchChange:(event)=>dispatch(setSearchField(event.target.value))
  }
};
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            'robots':[]
        }
    }



    componentDidMount() {
        fetch(
            "https://jsonplaceholder.typicode.com/users").then(
            result=>result.json()).then(
            users=>this.setState({'robots':users}));

    }



    render(){
        const {robots}=this.state;
        const {searchField, onSearchChange}=this.props;
        const filteredList=
            robots.filter(
                robot=>{
                    return robot.name.toLowerCase().includes(searchField.toLowerCase());
                }
            );

        return !robots.length ? <h1 className={"tc"}>Loading .....</h1> :<div className={"tc"}>
            <h1 className={"f1"}>Robofriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredList} />
                </ErrorBoundry>
            </Scroll></div>;




    }


}
export default connect(mapStateToProps,mapDispatchToProps)(App);