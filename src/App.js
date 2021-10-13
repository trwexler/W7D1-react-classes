import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import QuoteList from "./components/QuoteList";


//in JavaScript, Class is a template for a javascript object
class App extends Component {
  // in constructor is where we definestate
  
//   The constructor method is a special method:
//     It has to have the exact name "constructor"
//     It is executed automatically when a new object is created
//     It is used to initialize object properties

  // If you do not define a constructor method, JavaScript will add an empty constructor method. 
  constructor(){
        // MUST call super to have access to React's Component class and everything inside of its constructor
        super();
            //we define state using a singular state object and by assigning individual key-value pairs to it, rather than using useState as needed.
            //In JavaScript, "this" refers to the object is belongs to.

            this.state = {
              quotes: [],
              count: 0
            };
  }


  // This run on FIRST component render and NOT again!
  // Like a useEffect hook with [] passed in as a dependency

  componentDidMount() {
    axios.get("https://api.quotable.io/quotes?limit=10")
    .then((response)=>{
      console.log("response.data", response.data);
      console.log("response.data.results", response.data.results);
      this.setState({quotes: response.data.results})
    })
    .catch((err) => console.log(err));
  }


    // Every time a component updates, this function will run
  // Sort of like a useEffect with a dependency
    componentDidUpdate() {
      console.log("updated");
    } 


      // define method for the App class
    changeWord(){
      // We change state of class components using setState
      this.setState({word: "goodbye"});
    }



  // define method for the App class


  // the render method runs on original compnent render, then after every compnent update to state
  render() {
    console.log("inside render function");
    return (
      <div className="App">
        <h1>App</h1>
        <h2>count: {this.state.count}</h2>
        <button onClick={()=>this.setState({count: this.state.count+1})}>
        Increase Count
        </button>

        <h2>word: {this.state.word}</h2>
        <button onClick={() => this.changeWord()}>Change Word</button>

        <QuoteList quotes={this.state.quotes}/> 


        


      </div>
    );
  }
}

export default App;
