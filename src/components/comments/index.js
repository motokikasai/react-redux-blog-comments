import React, { Component } from "react";
import { connect } from "react-redux";

class Comments extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.commentsListData.map((item, i) => {
            console.log(item);

            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const timeStamp = () => {
  const event = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  return event.toLocaleDateString("de-DE", options);
};

const mapStateToProps = (state, ownProps) => {
  return {
    // commentsListData: state.comments
    commentsListData: state.comments.map((comment) => {
      return (
        <>
          <div className="time-stamp">
            <div className="time-stamp-output">{timeStamp()}</div>
          </div>
          <div className="comment-body">{comment}</div>
          <div className="delete-cmt">
            <button
              className="delete-cmt-btn"
              // onClick={this.props.deleteComment}
            >
              Delete
            </button>
          </div>
        </>
      );
    }),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (id) => {
      dispatch({
        type: "DELETE_COMMENT",
        id: id,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
