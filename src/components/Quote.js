const Quote = (props) => {
    return (
      <div>

      <h3>{props.quote.author} wrote...</h3>
      <h3>{props.quote.content}</h3>

        <hr />
      </div>
    );
  };
  
  
  export default Quote;
  