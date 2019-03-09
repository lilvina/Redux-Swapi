import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {getPeople} from "../actions";

class CharacterListView extends React.Component {

  componentDidMount() {
    // call our action
    this.props.getPeople()
  }

  render() {

    return (
      <div className="CharactersList_wrapper">
        <h2>Character List</h2>
        {this.props.fetching && (<p>LOADING...</p>)}
          <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    characters: state.charsReducer.characters,
    isWorking: state.charsReducer.isWorking
  })
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getPeople
  }
)(CharacterListView);
