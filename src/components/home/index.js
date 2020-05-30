import React, { Component } from "react";
import data from "../../db/data.json";

export default class Home extends Component {
  state = {
    defaultData: [...data],
  };

  render() {
    return (
      <div>
        <div>
          <h1>Blog Overview</h1>
        </div>
        <div className="content-list">
          <ul>
            {this.state.defaultData.map((blog) => {
              return (
                <li key={blog.id}>
                  <h3 className="blog-title">{blog.title}</h3>
                  <div className="snippet-body">
                    No comments yet, be the first post
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
