import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const getTime = (date) =>
  new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short' }).format(date);

function Message({ message, timestamp, user, userImage }) {
  return (
    <MesageContainer>
      <img src={userImage} alt={user} />
      <MessageInfo>
        <h4>
          {user} <span>{getTime(timestamp?.toDate())}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MesageContainer>
  );
}

Message.propTypes = {
  message: PropTypes.string,
  timestamp: PropTypes.object,
  user: PropTypes.string,
  userImage: PropTypes.string,
};

export default Message;

const MesageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;

  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;
