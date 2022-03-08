import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import React from 'react';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ChatInput from '../components/ChatInput';
import { selectRoomId } from '../features/appSlice';
import { db } from '../firebase';

function Chat() {
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(roomId && db.collection('rooms').doc(roomId));
  const [roomMessages] = useCollection(
    roomId && db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc'),
  );

  console.log(roomDetails?.data());
  console.log(roomMessages);

  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#{roomDetails?.data().name}</strong>
            </h4>
            <StarBorderOutlinedIcon />
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlinedIcon /> Details
            </p>
          </HeaderRight>
        </Header>
        <ChatMessages>{/* dsdsdf ds */}</ChatMessages>
        <ChatInput channelId={roomId} channelName={roomDetails?.data().name} />
      </>
    </ChatContainer>
  );
}

export default Chat;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 20px;
`;

const ChatMessages = styled.div``;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
