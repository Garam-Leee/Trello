import { CONSTANTS } from '../actions';

let listID = 0;
let cardID = 0;

const initialState = [];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`,
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`,
      };
      cardID += 1;

      const newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });

      return newState;
    }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
        type,
      } = action.payload;

      const newState = [...state];

      // list를 이동시키는 경우
      if (type === 'list') {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        // list를 찾음 (list는 state의 요소)
        const list = state.find((list) => droppableIdStart === list.id);

        // 이동시키려고 하는 카드
        const card = list.cards.splice(droppableIndexStart, 1);

        // 이동시키려고 하는 카드를 새로운 위치에 넣음
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      // other list
      if (droppableIdStart !== droppableIdEnd) {
        // listStart는 이동시키려고 하는 카드가 있는 list
        const listStart = state.find((list) => {
          return droppableIdStart === list.id;
        });

        // 이동시키려고 하는 카드
        const card = listStart.cards.splice(droppableIndexStart, 1);

        // listEnd는 이동시키려고 하는 카드가 들어갈 list
        const listEnd = state.find((list) => droppableIdEnd === list.id);

        // 새로운 위치에 카드를 넣음
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    default:
      return state;
  }
};

export default listsReducer;
