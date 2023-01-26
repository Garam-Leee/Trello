const initialState = [
  {
    title: 'List 1',
    id: 0,
    cards: [
      {
        id: 0,
        text: 'Card 1',
      },
      {
        id: 1,
        text: 'Card 2',
      },
    ],
  },
  {
    title: 'List 2',
    id: 0,
    cards: [
      {
        id: 0,
        text: 'Card 11',
      },
      {
        id: 1,
        text: 'Card 22',
      },
      {
        id: 2,
        text: 'Card 33',
      },
      {
        id: 3,
        text: 'Card 44',
      },
    ],
  },
  {
    title: 'List 3',
    id: 0,
    cards: [
      {
        id: 0,
        text: 'Card 111',
      },
      {
        id: 1,
        text: 'Card 222',
      },
    ],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;
