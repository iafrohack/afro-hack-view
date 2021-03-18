import 'babel-polyfill'; // import so that unit tests can be run
import {
  startsWith as _startsWith,
  split as _split,
  isEmpty as _isEmpty,
} from 'lodash';

/**
 * Helper class for stakeHolders Social
 */
export default class Social {
  static loadTwitterWidget() {
    /* eslint-disable */
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t.widgets.load();
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function (f) {
        t._e.push(f);
      };
      return t;
    }(document, "script", "twitter-wjs"));
    /* eslint-enable */
  }

  static getFacebookEmbedUrl(url, width, height) {
    const encodedUrl = encodeURIComponent(url);
    return `https://www.facebook.com/plugins/page.php?href=${encodedUrl}&tabs=timeline&width=${width}&height=${height}&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false`;
  }

  static getYoutubeEmbedUrl(youtubeName, youtubeUrl) {
    // Try get embed url from youtube username first
    if (!_isEmpty(youtubeName)) {
      return Social.getYoutubeEmbedUrlByYoutubeName(youtubeName);
    }

    // Get embed url from youtube url
    const youtubeNameFromUrl = Social.getYoutubeNameByUrl(youtubeUrl);
    return Social.getYoutubeEmbedUrlByYoutubeName(youtubeNameFromUrl);
  }

  static getYoutubeNameByUrl(url) {
    const urlComponents = _split(url, '/');
    return urlComponents[urlComponents.length - 1];
  }

  static getYoutubeEmbedUrlByYoutubeName(youtubeName) {
    // Case when we have channel Id: UCxxxxxxxx
    // https://stackoverflow.com/questions/39301196/embedding-most-recent-youtube-video-with-channel-id
    if (_startsWith(youtubeName, 'UC')) {
      const idSecondPart = youtubeName.substr(2, youtubeName.length);
      const channelId = `UU${idSecondPart}`;

      return Social.getYoutubeEmbedListUrl(channelId);
    }

    // Case when we have playlist Id: PLxxxxxxxx
    if (_startsWith(youtubeName, 'PL')) {
      return Social.getYoutubeEmbedListUrl(youtubeName);
    }

    // Case when we have full playlist url: https://www.youtube.com/playlist?list=PLxxxxxxxx
    const playListIndex = youtubeName.indexOf('list=');

    if (playListIndex > -1) {
      const listId = youtubeName.substr(playListIndex + 5, youtubeName.length);
      return Social.getYoutubeEmbedListUrl(listId);
    }

    // Case when we have username
    return `https://www.youtube.com/embed?listType=user_uploads&list=${youtubeName}`;
  }

  static getYoutubeEmbedListUrl(id) {
    return `https://www.youtube.com/embed/videoseries?list=${id}`;
  }
}
