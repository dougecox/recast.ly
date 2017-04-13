class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      videos: exampleVideoData
    };
    this.onListItemClick = this.onListItemClick.bind(this);
  }

  onListItemClick(i) {
    this.setState({
      index: i
    });
  }

  render() {
    
    return (
      <div>
          <Nav />
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
