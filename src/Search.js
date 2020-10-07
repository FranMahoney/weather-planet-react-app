import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Search.css";

export default function Search() {
  return (
    <div className="row">
      <div className="col-6">
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
              autoComplete="off"
              id="search-text-input"
            />
          </div>
          <button type="button" value="Search" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
      <div className="col-6">
        <button type="button" className="btn btn-success" id="location-button">
          Current Location
        </button>
      </div>
    </div>
  );
}
