import CardList from "../containers/CardList";
import React, {Component} from "react";
import {connect} from 'react-redux';
import SearchBox from '../containers/SearchBox';
import "./App.css";
import Scroll from '../containers/Scroll' ;
import ErrorBoundry from "./ErrorBoundry";
import {setSearchField,requestRobots} from "../actions";

const  mapStateToProps =(state)=>{
        return{
            searchField: state.searchRobots.searchField,
            robots: state.requestRobotsReducer.robots,
            isPending:state.requestRobotsReducer.isPending,
            error:state.requestRobotsReducer.error
        }
    };
const mapDispatchToProps=(dispatch)=>{
  return {
        onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
        onRequestRobots:()=>dispatch(requestRobots())
  }
};
class App extends Component{

    componentDidMount() {
        this.props.onRequestRobots();
    }



    render(){
        const {searchField,robots,isPending}=this.props;
        const filteredList=
            robots.filter(
                robot=>{
                    return robot.name.toLowerCase().includes(searchField.toLowerCase());
                }
            );

        return isPending ? <h1 className={"tc"}>Loading .....</h1> :<div className={"tc"}>
            <h1 className={"f1"}>Robofriends</h1>
            <SearchBox searchChange={this.props.onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredList} />
                    {console.log(filteredList)}
                </ErrorBoundry>
            </Scroll></div>;




    }


}
export default connect(mapStateToProps,mapDispatchToProps)(App);