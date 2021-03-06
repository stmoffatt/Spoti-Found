import AlbumList from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { currentPlayingSong } from '../../actions/songActions'

const mapStateToProps = state => {
  return {
    isLoggedIn: state.tokenReducer.isLoggedIn,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      currentPlayingSong,
    },
    dispatch,
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumList)
