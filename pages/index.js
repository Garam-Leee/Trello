import React from 'react';
import TrelloList from '../src/component/TrelloList';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    const { lists } = this.props;
    return (
      <div>
        <h1>Home</h1>
        <div style={styles.listContainer}>
          {lists?.map((list, index) => (
            <TrelloList
              key={list.id + index}
              title={list.title}
              cards={list.cards}
            />
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(Home);
