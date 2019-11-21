import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import changeImage from '../../actions/index';

import Buttons from './Buttons';

const mapStateToProps = (state) => ({
  imageSrc: state.mainReducer.imageSrc
});

const mapDispatchToProps = (dispatch) => ({
  changeImage: bindActionCreators(changeImage, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);