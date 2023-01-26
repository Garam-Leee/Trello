import React from 'react';

class TrelloActionButton extends React.Component {
  rendeAddButton = () => {
    const { list } = this.props;
    const buttonText = list ? 'Add another list' : 'Add another card';
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? 'white' : 'inherit';
    const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit';
    return (
      <div
        style={{
          ...styles.openForButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
      >
        <p> + Add another card </p>
      </div>
    );
  };

  render() {
    return this.rendeAddButton();
  }
}

const styles = {
  openForButtonGroup: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
  },
};

export default TrelloActionButton;
