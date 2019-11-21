import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { addMessages } from "../../actions";

import Chatroom from './Chatroom';

const mapDispatchToProps = (dispatch) => ({
  addMessages: bindActionCreators(addMessages, dispatch),
});

export default connect(null, mapDispatchToProps)(Chatroom);