import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import YTSearch from "youtube-api-search";

const API_KEY = "AIzaSyDFJTiO3naCIOz5Af3LGsQtsCI5Dfyt8qo";

class App extends Component {
	constructor(props) {
		super(props);

        this.state = { videos: [] };
        
        //object
		YTSearch({ key: API_KEY, term: "plants" }, (videos) =>{
            this.setState({videos: videos});

            //this.setState({videos});

		});
	}
	render() {
		return (
			<div>
				<SearchBar />
                <VideoList videos = {this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector(".container"));
