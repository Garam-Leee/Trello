// import React from 'react';
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';
// import { sort } from '../src/actions/listsAction';
// import { connect } from 'react-redux';
// import TrelloActionButton from '../src/components/TrelloActionButton';
// import TrelloList from '../src/components/TrelloList';
// import styled from '@emotion/styled';

// const mapStateToProps = (state) => ({
//   lists: state.lists,
// });

// function index(props) {
//   const { lists } = props;
//   function onDragEnd(result) {
//     const { destination, source, draggableId } = result;
//     const props = this.props;
//     if (!destination) {
//       return;
//     }
//     console.log('onDragEnd', this);
//     props.dispatch(
//       sort(
//         source.droppableId,
//         destination.droppableId,
//         source.index,
//         destination.index,
//         draggableId,
//         source.droppableId,
//       ),
//     );
//   }

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <h2>Hello Youtube</h2>
//       <Droppable droppableId="all-lists" direction="horizontal" type="list">
//         {(provided) => (
//           <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
//             {lists.map((list, index) => (
//               <TrelloList
//                 listID={list.id}
//                 key={list.id}
//                 title={list.title}
//                 cards={list.cards}
//                 index={index}
//               />
//             ))}
//             {provided.placeholder}
//             <TrelloActionButton list />
//           </ListContainer>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// }

// const ListContainer = styled.div`
//   display: flex;
//   flex-direction: row;
// `;
// export default connect(mapStateToProps)(index);

import React from 'react';
import App from '../src/components/App';
export default function index() {
  return <App />;
}
