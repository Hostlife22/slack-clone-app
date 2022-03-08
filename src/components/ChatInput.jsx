import { Button } from '@mui/material';
import firebase from 'firebase/compat/app';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection('rooms').doc(channelId).collection('messages').add({
      messages: input,
      timestap: firebase.firestore.FieldValue.serverTimestamp(),
      user: 'Serafim Sen',
      userImage: 'https://i.ytimg.com/vi/JEfu1djzXcE/hqdefault.jpg',
    });

    setInput('');
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button onClick={sendMessage} type="submit" hidden>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

ChatInput.propTypes = {
  channelId: PropTypes.string,
  channelName: PropTypes.string,
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
