class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      videos: exampleVideoData,
      query: ''
    };
    this.onListItemClick = this.onListItemClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
  }

  componentDidMount() { 
    this.callSearchYouTube({key: window.YOUTUBE_API_KEY, max: 5, query: ''});
  }

  callSearchYouTube(options) {
    options.query = this.state.query;
    this.props.searchYouTube(options, function(data) {
      this.setState({
        videos: data
      });
    });
  }
  onListItemClick(i) {
    this.setState({
      index: i
    });
  }

  onInputChange(event) {
    console.log(event.currentTarget.value);
    this.setState({
      query: event.currentTarget.value
    });
  }

  onSearchClick() {
    console.log(this);
    this.callSearchYouTube({key: window.YOUTUBE_API_KEY, max: 5, query:''})
  }


  render() {
    return (
      <div>
          <Nav text = {this.state.query} searchFunction = {this.onSearchClick} inputFunction = {this.onInputChange}/>
          <div className="col-md-7">
            <VideoPlayer video = {this.state.videos[this.state.index]}/>
          </div>
          <div className="col-md-5">
            <VideoList videos = {this.state.videos} clickFunction = {this.onListItemClick}/>
          </div>
      </div>
    );
  }
}

// Pass in a onClick function as a key-value pair, for Video List to use?

// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video = {exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos = {exampleVideoData} />
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
