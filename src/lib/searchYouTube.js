var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'json',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true
    },
    success: function(data) {      
      callback(data.items);
      console.log("Success");
    }
  });
  /*var info;
  let key = options.key;
  let query = options.query;
  let max = options.max;
  $.get( "https://www.googleapis.com/youtube/v3/search", function(data) {
    info = data;
    console.log(info);
  });*/
};

window.searchYouTube = searchYouTube;
