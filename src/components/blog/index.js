import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
      <div>
        <h1>Blog Component</h1>
        <div className="blog-wrapper">
          <div className="blog-content">Lorem</div>
          <div className="comment">
            <form>
              <div>Leave a comment</div>
              <label>
                <textarea
                  name="comment"
                  id="comment"
                  cols="50"
                  rows="5"
                ></textarea>
              </label>
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
