import React, { Component } from "react";
import data from "../../db/data.json";

export default class Blog extends Component {
  state = {
    defaultData: [...data],
    blog: {},
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

              <textarea name="comment" id="comment"></textarea>

              <div className="buttons">
                <button className="btn-clear">Clear</button>
                <button className="btn-add">Add comment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
