// import { combineReducers } from 'redux';

// import { CONSTANTS } from '../actions';

// let listID = 2;
// let cardID = 6;

// //initialState
// const x = [
//   {
//     title: 'Last Episode',
//     id: `list-${0}`,
//     cards: [
//       {
//         id: `card-${0}`,
//         text: 'we created a static list and a static card',
//       },
//       {
//         id: `card-${1}`,
//         text: 'we used a mix between material UI React and styled components',
//       },
//     ],
//   },
//   {
//     title: 'This Episode',
//     id: `list-${1}`,
//     cards: [
//       {
//         id: `card-${2}`,
//         text: 'we will create our first reducer',
//       },
//       {
//         id: `card-${3}`,
//         text: 'and render many cards on our list with static data',
//       },
//       {
//         id: `card-${4}`,
//         text: 'we will also make some little changes I forgot in the last episode (link tags for roboto font and icons,..)',
//       },
//       {
//         id: `card-${5}`,
//         text: 'we will also make some little changes I forgot in the last episode (link tags for roboto font and icons,..)',
//       },
//     ],
//   },
// ];

// // 추후에 다른 기능을 넣었을때 이전에 만들었던 기능들이 깨지지 않도록 하기 위해 initialState를 만들어준다.
// const listsReducer = (state = x, action) => {
//   switch (action.type) {
//     case CONSTANTS.ADD_LIST:
//       const newList = {
//         title: action.payload,
//         cards: [],
//         id: `list-${listID}`,
//       };
//       listID += 1;
//       return [...state, newList];

//     case CONSTANTS.ADD_CARD: {
//       const newCard = {
//         text: action.payload.text,
//         id: `card-${cardID}`,
//       };
//       cardID += 1;

//       console.log('action received', action);

//       // list의 id와 action의 payload의 listID가 같은지 확인한다.
//       const newState = state.find((list) => list.id === action.payload.listID);

//       // 같다면 기존의 list를 복사해주고 cards에 newCard를 추가해준다.
//       newState.cards.push(newCard);

//       // 그리고 state를 return 해준다.
//       // [...state] 를 해주는 이유는 state를 변경하지 않고 새로운 state를 만들어주기 위해서이다.
//       // 그리고 기존의 state를 변경하지 않는 이유는 state를 변경하면 react가 변경된 state를 인식하지 못하기 때문이다.
//       return [...state];
//     }

//     case CONSTANTS.DRAG_HAPPENED:
//       const {
//         droppableIdStart,
//         droppableIdEnd,
//         droppableIndexEnd,
//         droppableIndexStart,
//         draggableId,
//         type,
//       } = action.payload;

//       const newState = [...state];

//       console.log(type);

//       // list를 이동시키는 경우
//       if (type === 'list') {
//         // list를 이동시키는 경우는 list의 배열 순서를 바꿔주면 된다. 그리고 그대로 return 해주면 된다.
//         const list = newState.splice(droppableIndexStart, 1);
//         console.log('newState0', list);
//         // splice는 기존의 배열을 변경시키기 때문에 새로운 배열을 만들어주기 위해 ...을 사용해준다.
//         console.log('newState1', newState);
//         newState.splice(droppableIndexEnd, 0, ...list);
//         console.log('newState2', newState);

//         return newState;
//       }

//       // 같은 list에서 card를 이동시키는 경우
//       if (droppableIdStart === droppableIdEnd) {
//         // list를 찾음 (list는 state의 요소)
//         const list = state.find((list) => droppableIdStart === list.id);

//         // 이동시키려고 하는 카드
//         const card = list.cards.splice(droppableIndexStart, 1);

//         // 이동시키려고 하는 카드를 새로운 위치에 넣음
//         list.cards.splice(droppableIndexEnd, 0, ...card);
//       }

//       // 다른 list에서 card를 이동시키는 경우
//       if (droppableIdStart !== droppableIdEnd) {
//         // listStart는 이동시키려고 하는 카드가 있는 list
//         const listStart = state.find((list) => {
//           return droppableIdStart === list.id;
//         });

//         // 이동시키려고 하는 카드
//         const card = listStart.cards.splice(droppableIndexStart, 1);

//         // listEnd는 이동시키려고 하는 카드가 들어갈 list
//         const listEnd = state.find((list) => droppableIdEnd === list.id);

//         // 새로운 위치에 카드를 넣음
//         listEnd.cards.splice(droppableIndexEnd, 0, ...card);
//       }

//       return newState;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   lists: listsReducer,
// });

import { CONSTANTS } from '../actions';

let listID = 2;
let cardID = 6;

const initialState = [
  {
    title: 'Last Episode',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: 'we created a static list and a static card',
      },
      {
        id: `card-${1}`,
        text: 'we used a mix between material UI React and styled components',
      },
    ],
  },
  {
    title: 'This Episode',
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: 'we will create our first reducer',
      },
      {
        id: `card-${3}`,
        text: 'and render many cards on our list with static data',
      },
      {
        id: `card-${4}`,
        text: 'we will also make some little changes I forgot in the last episode (link tags for roboto font and icons,..)',
      },
      {
        id: `card-${5}`,
        text: 'we will also make some little changes I forgot in the last episode (link tags for roboto font and icons,..)',
      },
    ],
  },
];

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

      console.log('action received', action);

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

      console.log(type);

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
