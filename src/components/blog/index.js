import React, { Component } from "react";
import data from "../../db/data.json";

export default class Blog extends Component {
  state = {
    defaultData: [...data],
  };

  render() {
    return (
      <div>
        <h1>Blog Component</h1>
        <div className="blog-wrapper">
          <div className="blog-content">
            <div className="blog-title">title</div>
            <div className="blog-text">
              It should be possible for the user to add a comment on each blog
              post. The comment should be visible immediately after it was
              added. Each comment should display the contents of the comment the
              user typed and a date of when the comment was added, nicely
              formatted in a human readable form, in the German locale. The most
              recent comment should appear at the top of the comments list.
            </div>
          </div>
          <div className="comment">
            <form>
              <div className="textarea-title">Leave a comment</div>
              <label>
                <textarea
                  name="comment"
                  id="comment"
                  //   cols="40"
                  //   rows="5"
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
