import React from "react";
// import axios from "axios";
// import ReactDOM from "react-dom"
import SearchBar from "./SearchBar";
import unSplash from "../api/unSplash";
import ImageList from "./imageList";

class App extends React.Component {
   state = { images: [] };

   componentDidMount() {
      this.onSearchSubmit("car");
   }

   onSearchSubmit = async (term) => {
      const response = await unSplash.get("/search/photos/", {
         params: { query: term },
      });

      // console.log(response.data.results)
      // console.log(term)
      this.setState({ images: response.data.results });
   };

   render() {
      return (
         <div className="ui container" style={{ marginTop: "10px" }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            {/* Found:{this.state.images.length} images */}
            <ImageList images={this.state.images}></ImageList>
         </div>
      );
   }
}

export default App;
