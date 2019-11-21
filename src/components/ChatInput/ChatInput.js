import React from 'react';

import './ChatInput.scss';

const CN = 'chat-input';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    }
  }

  render() {
    return (
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}
      >
        <input
          className={`${CN}__message-input`}
          type="text"
          placeholder={'Enter message...'}
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        />
        <input
          className={`${CN}__send-btn`}
          type="submit"
          value={'Send'}
        />
      </form>
    )
  }
}

export default ChatInput