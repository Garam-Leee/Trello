import React, { useState } from 'react';
import styled from 'styled-components';
import CustomBtn from './CustomBtn';
export default function CustomCard(props) {
  const { title } = props;
  const [addCardState, setAddCardState] = useState(true);
  return (
    <CardWrapper>
      <div className="title-header">{title}</div>
      {addCardState && (
        <div>
          <CustomBtn
            text="Add another card"
            backgroundColor="var(--color-gray06)"
            fontColor="var(--color-white)"
            fontSize="13px"
            width="100%"
            height="30px"
            onClick={() => setAddCardState(false)}
          />
        </div>
      )}
      {addCardState == false && (
        <div>
          <input
            type="text"
            placeholder="Enter a title for this card..."
            style={{
              fontWeight: '400',
            }}
          />
          <div
            style={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <CustomBtn
              text="Add Card"
              backgroundColor="var(--color-gray06)"
              fontColor="var(--color-white)"
              fontSize="13px"
              width="100px"
              height="30px"
              onClick={() => setAddCardState(true)}
            />
            <CustomBtn
              text="Cencel"
              backgroundColor="var(--color-gray06)"
              fontColor="var(--color-white)"
              fontSize="13px"
              width="100px"
              height="30px"
              onClick={() => setAddCardState(true)}
            />
          </div>
        </div>
      )}
    </CardWrapper>
  );
}

export const CardWrapper = styled.div`
  width: 300px;
  height: 100%;
  min-height: 150px;
  background-color: var(--color-white);
  border-radius: 5px;
  margin: 0 0.5rem 0 0.5rem;
  padding: 0.5rem;
  text-align: left;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  word-break: break-word;

  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 17px;
    font-weight: 700;
    color: var(--color-black);
  }

  .title-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
`;
