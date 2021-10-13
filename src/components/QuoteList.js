/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Quote from "./Quote";

class QuoteList extends Component {
  // must call super(props) in constructor of components that receive props

  constructor(props){
      super(props);
  }

  render() {
    return (
      <div>

          {
              this.props.quotes.map((quote, index)=>(
                  <Quote quote={quote} key={index}/>
              ))
          }


      </div>
    );
  }
}

export default QuoteList;
