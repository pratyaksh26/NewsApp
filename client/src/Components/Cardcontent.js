import React from "react";
import '../Styles/Cardcontent.css'; // Import the CSS file


function Card(props) {
  return (
    <div className="everything-card">
      <div className="everything-card-content">
        <b className="title">{props.title}</b>
        <div className="everything-card-img-container">
          <img className="everything-card-img" src={props.imgUrl} alt="img" />
        </div>
        <div className="description">
          <p className="description-text">
            {props.description?.substring(0, 200)}
          </p>
        </div>
        <div className="info">
          <div className="source-info">
            <span className="font-semibold">Source:</span>
            <a
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {props.source.substring(0, 70)}
            </a>
          </div>
          <div className="origin">
            <p className="origin-item">
              <span className="font-semibold">Author:</span> {props.author}
            </p>
            <p className="origin-item">
              <span className="font-semibold">Published At:</span> {props.publishedAt}
            </p>
          </div>
        </div>
      </div>

      {/* New card content */}
      {/* <div className="card-flex">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${props.imageUrlLeft})` }}
          title={props.imageLeftTitle}
        ></div>
        <div className="card-content">
          <div className="content-header">
            <p className="text-sm text-gray">
              {props.memberIcon && (
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  {props.memberIcon}
                </svg>
              )}
              {props.memberText}
            </p>
            <div className="card-title">
              {props.cardTitle}
            </div>
            <p className="card-description">{props.cardDescription}</p>
          </div>
          <div className="author-info">
            {props.authorImage && (
              <img className="author-avatar" src={props.authorImage} alt="Avatar" />
            )}
            <div className="author-text">
              <p className="author-name">{props.authorName}</p>
              <p className="published-date">{props.publishedDate}</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Card;
