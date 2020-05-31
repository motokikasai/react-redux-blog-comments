import React, { Component } from "react";
import { connect } from "react-redux";
import data from "../../db/data.json";
import Comments from "../comments";

class Blog extends Component {
  state = {
    defaultData: [...data],
    blog: {},
    commentInput: "",
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
                onChange={(e) => {
                  this.setState({
                    commentInput: e.target.value,
                  });
                }}
              ></textarea>

              <div className="buttons">
                <button className="btn-clear">Clear</button>
                <button className="btn-add">Add comment</button>
              </div>
            </form>
          </div>

          {/* BLOG COMMENTS LIST */}
          <Comments title="My  notes List" />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   console.log(state);
//   // console.log(ownProps);

//   return {
//     commentsListData: state.comments.map((comment) => {
//       return `${comment} -- ${ownProps.title}`;
//     }),
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    addNewComment: (commentText) => {
      dispatch({
        type: "ADD_COMMENT",
        payload: {
          comment: commentText,
        },
      });
    },
  };
};

export default connect(/* mapStateToProps, */ mapDispatchToProps)(Blog);
