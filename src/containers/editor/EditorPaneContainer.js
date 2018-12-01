import React, { Component } from "react";
import EditorPane from "components/editor/EditorPane";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as editorActions from "store/modules/editor";

class EditorPaneContainer extends Component {
  handleChangeInput = ({name, value}) => {
    const { EditorActions } = this.props;
    EditorActions.changeInput({name, value});
  }

  render() {
    const {title, tags, content} = this.props;
    const {handleChangeInput} = this;

    return (
      <EditorPane
        title={title}
        content={content}
        tags={tags}
        onChangeInput={handleChangeInput}
      />
    );
  }
}

export default connect(
  (state) => ({
    title: state.editor.get('title'),
    content: state.editor.get('content'),
    tags: state.editor.get('tags')
  }),
  (dispatch) => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(EditorPaneContainer);
