import React, { Component } from "react";
import { connect } from "react-redux";

class Comments extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>

        <ul>
          {this.props.commentsListData.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);

  return {
    // commentsListData: state.comments
    commentsListData: state.comments.map((comment) => {
      return `${comment} -- ${ownProps.title}`;
    }),
  };
};

export default connect(mapStateToProps)(Comments);
