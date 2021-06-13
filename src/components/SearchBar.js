import React from "react";

class SearchBar extends React.Component {
   state = { term: "" };

   // onInputChange(event){
   //     console.log(event.target.value);
   // }

   // onFormSubmit(event){
   //     event.preventDefault()
   //     console.log(this.state.term)
   //     // Cannot read property 'state' of undefined  => when you try to print the submit value
   // }

   // solution  |
   //           V

   onFormSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit(this.state.term);
      // when we use props in function based components we have to use (this.props)
      console.log(this.state.term);
   };

   render() {
      return (
         <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
               <div className="field">
                  <label> Image search</label>
                  {/* <input type="text" onChange={this.onInputChange} value={this.state.term}/>   */}
                  <input
                     type="text"
                     onChange={(e) => this.setState({ term: e.target.value })}
                     value={this.state.term}
                  />
                  {/* or */}
                  {/* onChange={(event)=> console.log(event.target.value)} */}

                  {/* we don't use this.onInputChange() because if we do that it always render if any other thing available is the screen is get render */}
                  {/* event handler par hum () use nahi karte hai , always */}
               </div>
            </form>
         </div>
      );
   }
}

export default SearchBar;
