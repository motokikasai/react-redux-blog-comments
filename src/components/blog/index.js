import React, { Component } from "react";
import { connect } from "react-redux";
import data from "../../db/data.json";
import Comments from "../comments";
import { v4 as uuidv4 } from "uuid";

class Blog extends Component {
  state = {
    defaultData: [...data],
    blog: {},
    commentInput: "",
    commentInputObject: {},
  };

  createMarkup = () => {
    return { __html: this.state.blog.htmlText };
  };

  componentDidMount() {
    this.state.defaultData.forEach((item) => {
      if (this.props.match.params.slug === item.slug) {
        return this.setState({
          blog: item,
        });
      }
    });
  }

  submitHandler = (e) => {
    e.preventDefault();

    if (!this.state.commentInput.trim()) {
      return false;
    }

    this.setState({
      commentInput: "",
    });

    // console.log(uuidv4());

    this.props.addNewComment(this.state.commentInputObject);
  };

  clearInputHandler = () => {
    console.log("cleared!");

    this.setState({
      commentInput: "",
    });
  };

  timeStamp = () => {
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

  render() {
    return (
      <div>
        <h1>{this.state.blog.title}</h1>
        <div className="blog-wrapper">
          <div className="blog-content">
            <div
              dangerouslySetInnerHTML={this.createMarkup()}
              className="blog-text"
            ></div>
          </div>
          <div className="comment">
            <form onSubmit={this.submitHandler}>
              <div className="textarea-title">Leave a comment</div>

              <textarea
                name="comment"
                id="comment"
                value={this.state.commentInput}
                onChange={(e) => {
                  this.setState({
                    commentInput: e.target.value,
                    commentInputObject: {
                      text: e.target.value,
                      id: uuidv4(),
                      timeStamp: 1234,
                    },
                  });
                }}
              ></textarea>

              <div className="buttons">
                <button className="btn-clear" onClick={this.clearInputHandler}>
                  Clear
                </button>
                <button className="btn-add">Add comment</button>
              </div>
            </form>
          </div>

          {/* BLOG COMMENTS LIST */}
          <Comments />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewComment: (commentObject) => {
      dispatch({
        type: "ADD_COMMENT",
        payload: {
          comment: commentObject.text,
          id: commentObject.id,
          timeStamp: commentObject.timeStamp,
        },
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Blog);
