class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0]
    };
  }

  onListItemClick() {
    this.setState({
      //currentVideo: this.state.currentVideo[this.state.index];
      // possible pass function state down
    });
  }

  render() {
    
    return (
      <div>
          <Nav />
          <div className="col-md-7">
            <VideoPlayer video = {exampleVideoData[3]}/>
          </div>
          <div className="col-md-5">
            <VideoList videos = {exampleVideoData}/>
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
