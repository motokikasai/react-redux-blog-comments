import React, { Component } from "react";
import { connect } from "react-redux";

class Comments extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>

        <ul>
          {this.props.commentsListData.map((item, i) => {
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
            <button className="delete-cmt-btn">Delete</button>
          </div>
        </>
      );

      // `${comment} -- ${ownProps.title}`;
    }),
  };
};

export default connect(mapStateToProps)(Comments);
