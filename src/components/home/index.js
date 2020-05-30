import React, { Component } from "react";
import data from "../../db/data.json";
import { Link } from "react-router-dom";

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
            {this.state.defaultData.map(({ title, id, slug }) => {
              return (
                <Link to={`/${slug}`}>
                  <li key={id}>
                    <h3 className="blog-title">{title}</h3>
                    <div className="snippet-body">
                      No comments yet, be the first post
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
