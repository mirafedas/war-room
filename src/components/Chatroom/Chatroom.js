import React from 'react';
import ls from "local-storage";

import Message from '../Message';
import ChatInput from '../ChatInput';

import './Chatroom.scss';

const CN = 'chatroom';
// const URL = 'ws://localhost:8080'
const URL = 'wss://server-www.herokuapp.com/';

class Chatroom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ls.get('username') || 'Groot',
      messages: [],
    }

    this.ws = new WebSocket(URL);
    this.formMessage = React.createRef();
    this.username = ls.get('username');
    console.log(this.state)
  }

  componentDidMount() {
    this.ws.onopen = () => {
      console.log('connected');
    }

    this.ws.onmessage = evt => {
      const message = JSON.parse(evt.data);
      this.addMessage(message);
      console.log(this.state)
    }

    this.ws.onclose = () => {
      console.log('disconnected')
      this.setState({
        ws: new WebSocket(URL),
      })
    }
  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }))

  submitMessage = messageString => {
    const message = { username: this.state.username, message: messageString };
    console.log(message);
    this.ws.send(JSON.stringify(message));
    this.addMessage(message);
    const { addMessages } = this.props;
    console.log(addMessages)
    addMessages(message);
  }

  render() {
    return (
      <div className={`${CN}__wrapper`}>
        <div className={`${CN}__messages`}>
        <ChatInput
          ws={this.ws}
          onSubmitMessage={messageString => this.submitMessage(messageString)}
        />
        <div className={`${CN}__messages-container`}>
          {this.state.messages.map((message, index) =>
            <Message
              key={index}
              message={message.message}
              username={message.username}
            />,
          )}
        </div>
        </div>
      </div>
    )
  }
}

export default Chatroom;