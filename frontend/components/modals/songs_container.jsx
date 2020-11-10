import { connect } from "react-redux";
import { fetchSong, clearSongs } from "../../actions/spotify_api_actions";
import React from "react";

class ModalClassSongs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
    this.generateSpotifySongs = this.generateSpotifySongs.bind(this);
  }

  componentDidMount() {
    this.generateSpotifySongs();
  }

  componentWillUnmount() {
    this.props.clearSongs();
  }

  generateSpotifySongs() {
    let accessToken = this.props.accessToken;
    let classSongs = this.props.classSongs;

    let funcs = classSongs.map((song) => {
      return this.props.fetchSong(accessToken, song.name);
    });

    Promise.all(funcs);
  }

  generateListOfArtists(songs) {
    let artistNames = [];
    //only populate first 4
    for (let i = 0; i < 4 && i < songs.length; i++) {
      let name = songs[i].artists[0].name;
      artistNames.push(<li key={i}>{name}</li>);
    }

    // let uniqueNames = []
    // artistNames.forEach(name => {
    //   if (!uniqueNames.includes(name)) {
    //     uniqueNames.push(name)
    //   }
    // })
    // return uniqueNames;

    return artistNames;
  }

  generatePlaylistListItem(spotSongs) {
    let rows = spotSongs.map((song) => (
      <li key={song.id} className="song-item">
        <div className="song-icon">
          <img className="song-icon-img" src={song.iconURL} alt="songicon" />
        </div>
        <div className="song-item-description">
          <h3 className="song-item-title">{song.name}</h3>
          <h4 className="song-item-artists">
            {/* try to make it show all artists later */}
            {song.artists[0].name}
          </h4>
        </div>
      </li>
    ));
    return rows;
  }

  render() {
    let artistNames = null;
    let songRowItems = null;
    let playlistHeader = null;
    let songsHeader = null;

    let spotSongsLength = Object.keys(this.props.spotifySongs).length;
    let classSongsLength = this.props.classSongs.length;
    if (spotSongsLength === classSongsLength && classSongsLength !== 0) {
      // let spotSongs = Object.values(this.props.spotifySongs);

      artistNames = this.generateListOfArtists(
        Object.values(this.props.spotifySongs)
      );
      songRowItems = this.generatePlaylistListItem(
        Object.values(this.props.spotifySongs)
      );
      playlistHeader = <h2 className="playlist-header">PLAYLIST</h2>;
      songsHeader = <h1 className="songs-header">FEATURING MUSIC BY</h1>;
    }
    return (
      <div className="modal-class-songs">
        {songsHeader}
        <ul className="songs-artist-names">{artistNames}</ul>
        <div className="songs-playlist-div">
          {playlistHeader}
          <ol className="songs-list">{songRowItems}</ol>
        </div>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    accessToken: window.localStorage.spotToken,
    spotifySongs: state.entities.songs,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchSong: (accessToken, songTitle) =>
      dispatch(fetchSong(accessToken, songTitle)),
    clearSongs: () => dispatch(clearSongs()),
  };
};

export default connect(mSTP, mDTP)(ModalClassSongs);
