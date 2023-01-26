import React from 'react';
import styled from '@emotion/styled';
import CustomBtn from './CustomBtn';
import { useState } from 'react';

export default function ListCard(props) {
  const { list } = props;
  const [anotherCard, setAnotherCard] = useState();
  const [cardItem, setCardItem] = useState();

  function addCardItem() {
    if (cardItem) {
      setAnotherCard(false);
      // card list
      list.cards.push({
        index: list.cards.length,
        title: cardItem,
      });
    }
    setCardItem('');
    console.log(list);
  }

  return (
    <CardWrapper>
      <div>
        <div className="list-title">
          <h3>{list.title}</h3>
        </div>
        <div className="list-content">
          {list?.cards?.map((item) => (
            <div key={item.length}>{item}</div>
          ))}
        </div>
        <div className="list-footer">
          {anotherCard ? (
            <div>
              <input
                type="text"
                placeholder="Enter a title for this card..."
                value={cardItem}
                onChange={(e) => setCardItem(e.target.value)}
                style={{
                  width: '220px',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  marginTop: '10px',
                }}
              >
                <CustomBtn
                  text="Add Card"
                  backgroundColor="var(--color-green09)"
                  fontColor="var(--color-purple20)"
                  fontSize="1rem"
                  width="100px"
                  height="40px"
                  onClick={() => {
                    addCardItem();
                  }}
                />
                <CustomBtn
                  text="X"
                  backgroundColor="var(--color-red08)"
                  fontColor="var(--color-purple20)"
                  fontSize="1rem"
                  width="40px"
                  height="40px"
                  onClick={() => setAnotherCard(false)}
                />
              </div>
            </div>
          ) : (
            <CustomBtn
              text="+ Add another card"
              backgroundColor="var(--color-purple08)"
              fontColor="var(--color-white)"
              fontSize="1rem"
              width="250px"
              height="40px"
              onClick={() => setAnotherCard(true)}
            />
          )}
        </div>
      </div>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  width: 250px;
  height: auto;
  background: #fff;
  color: var(--color-black);
  .list-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
`;
