import React from 'react';
import ls from "local-storage";

import Message from '../Message';
import ChatInput from '../ChatInput';

import './Chatroom.scss';

const CN = 'chatroom';
const URL = 'ws://localhost:8080'

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
      // on connecting, do nothing but log it to the console
      console.log('connected');
    }

    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data);
      this.addMessage(message);
      console.log(this.state)
    }

    this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL),
      })
    }
  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }))

  submitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { username: this.state.username, message: messageString };
    console.log(message);
    this.ws.onopen = () => this.ws.send(JSON.stringify(message));
    this.addMessage(message);
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