import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Card, Button } from '@mui/material';
import { addList, addCard } from '../actions';
import Textarea from 'react-textarea-autosize';

function TrelloActionButton(props) {
  const { list } = props;
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState('');
  const buttonText = list ? 'Add another list' : 'Add another card';
  const buttonTextOpacity = list ? 1 : 0.5;
  const buttonTextColor = list ? 'white' : 'inherit';
  const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit';
  const placeholder = list
    ? 'Enter list title...'
    : 'Enter a title for this card...';
  const buttonTitle = list ? 'Add List' : 'Add Card';

  function openForm() {
    setFormOpen(true);
  }

  function closeForm(e) {
    setFormOpen(false);
  }

  function handleInputChange(e) {
    setText(e.target.value);
  }

  function handleAddList() {
    const { dispatch } = props;

    if (text) {
      setText('');
      dispatch(addList(text));
    }
  }

  function handleAddCard() {
    const { dispatch, listID } = props;
    if (text) {
      setText('');
      dispatch(addCard(listID, text));
    }
  }

  return (
    <>
      {formOpen == true ? (
        <div>
          <Card
            style={{
              minHeight: 85,
              minWidth: 272,
              padding: '6px 8px 2px',
            }}
          >
            <Textarea
              placeholder={placeholder}
              autoFocus
              onBlur={closeForm}
              value={text}
              onChange={handleInputChange}
              style={{
                resize: 'none',
                width: '100%',
                overflow: 'hidden',
                outline: 'none',
                border: 'none',
              }}
            />
          </Card>
          <div style={styles.formButtonGroup}>
            <Button
              onMouseDown={list ? handleAddList : handleAddCard}
              variant="contained"
              style={{ color: 'white', backgroundColor: '#5aac44' }}
            >
              {buttonTitle}
            </Button>
          </div>
        </div>
      ) : (
        <div
          onClick={openForm}
          style={{
            ...styles.openFormButtonGroup,
            opacity: buttonTextOpacity,
            color: buttonTextColor,
            backgroundColor: buttonTextBackground,
          }}
        >
          <p>{buttonText}</p>
        </div>
      )}
    </>
  );
}

const styles = {
  openFormButtonGroup: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
  },
  formButtonGroup: {
    marginTop: 8,
    display: 'flex',
    alignItems: 'center',
  },
};

export default connect()(TrelloActionButton);
