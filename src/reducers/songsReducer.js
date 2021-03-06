const defaultState = {
  songPlaying: false,
  timeElapsed: 0,
  songId: 0,
  songPaused: true,
}

export const songsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_SONG_IDS':
      return {
        ...state,
        savedSongIds: action.savedSongIds,
      }

    case 'FETCH_SONGS_SUCCESS':
      return {
        ...state,
        songs: action.songs,
        fetchSongsError: false,
        viewType: 'songs',
      }

    case 'FETCH_ARTISTS_SUCCESS':
      return {
        ...state,
        myArtists: action.myArtists,
        fetchSongsError: false,
        viewType: 'songs',
      }

    case 'FETCH_SONGS_ERROR':
      return {
        ...state,
        fetchSongsError: true,
      }

    case 'SEARCH_SONGS_SUCCESS':
      return {
        ...state,
        searchedSongs: action.searchedSongs,
        searchSongsError: false,
        viewType: 'search',
      }

    case 'SEARCH_SONGS_ERROR':
      return {
        ...state,
        searchSongsError: true,
      }

    case 'ALBUM_TRACKS_SUCCESS':
      return {
        ...state,
        albumSongs: action.albumSongs,
        albumTracksError: false,
        viewType: 'songs',
      }

    case 'ALBUM_TRACKS_ERROR':
      return {
        ...state,
        albumTracksError: true,
      }

    case 'TOP_TRACKS_SUCCESS':
      return {
        ...state,
        topTracks: action.topTracks,
        topTracksError: false,
        viewType: 'songs',
      }

    case 'TOP_TRACKS_ERROR':
      return {
        ...state,
        topTracksError: true,
      }

    case 'PLAY_SONG':
      return {
        ...state,
        songPlaying: true,
        songDetails: action.song,
        songId: action.song.id,
        timeElapsed: 0,
        songPaused: false,
      }

    case 'STOP_SONG':
      return {
        ...state,
        songPlaying: false,
        songDetails: null,
        timeElapsed: 0,
        songPaused: true,
      }

    case 'PAUSE_SONG':
      return {
        ...state,
        songPaused: true,
      }

    case 'RESUME_SONG':
      return {
        ...state,
        songPaused: false,
      }

    case 'INCREASE_SONG_TIME':
      return {
        ...state,
        timeElapsed: action.time,
      }

    case 'CURRENT_PLAYING_SONG':
      return {
        ...state,
        CurrentPlayingSongList: action.CurrentPlayingSongList,
      }

    default:
      return state
  }
}

export default songsReducer
