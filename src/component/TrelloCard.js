import React from 'react';
import { Card, Typography } from '@mui/material';
const TrelloCard = ({ text }) => {
  return (
    <Card style={styles.cardContainer}>
      <Typography gutterBottom component="div">
        {text}
      </Typography>
    </Card>
  );
};

const styles = {
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 3,
    padding: 8,
    marginBottom: 8,
  },
};

export default TrelloCard;
