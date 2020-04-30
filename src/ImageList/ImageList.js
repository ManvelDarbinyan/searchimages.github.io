import React from "react";
import { Link } from "react-router-dom";
import "./ImageList.css";

const ImageList = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.images.map((image) => {
          return (
            <div
              key={image.id}
              className="col-md-4"
              style={{ marginBottom: "2rem" }}
            >
              <div className="imageListContainer">
                <img
                  src={image.largeImageURL}
                  alt={image.tags}
                  className="imageListImage"
                />
              </div>
              <div className="imageDetails">
                <Link
                  to={{
                    pathname: `/image/${image.id}`,
                    state: { image },
                  }}
                >
                  <button>View</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ImageList;
