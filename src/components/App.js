import React from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions';
import styled from '@emotion/styled';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function App(props) {
  const { lists } = props;
  function onDragEnd(result) {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    console.log('asd', this);
    props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type,
      ),
    );
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <h2>Hello Youtube</h2>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {(provided) => (
          <ListContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {lists.map((list, index) => (
              <TrelloList
                listID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
                index={index}
              />
            ))}
            {provided.placeholder}
            <TrelloActionButton list />
          </ListContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);

// DragDropContext
// Drag and drop을 사용하고자 하는 어플리케이션의 영역을 감싸는 Wrapper 입니다

// Droppable
// Drag and drop에서 drop을 할 수 있는 영역이자, Draggable을 감싸는 Wrapper 입니다.

// Draggable
// Drag and Drop의 주체가 되는, Drag가 가능한 컴포넌트를 감싸는 Wrapper 입니다.

// DragDropContext
// 역할은 앞에서 간단히 소개한 그대로입니다. DragDropContext는 3개의 콜백 prop을 갖습니다.

// onDragStart
// drag가 시작되었을 때 호출됨

// onDragUpdate
// drag 진행중에 새로운 위치로 이동하는 등, 새로운 변화가 생겼을 때

// onDragEnd
// drag가 끝났을 때 호출됨
