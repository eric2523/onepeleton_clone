import React from 'react'

const LightIconIndex  = () => {
  return (
    <>
      <ul className="media-icons-list">
        <li key="1">
          <a href="https://www.facebook.com/onepeloton">
            <i className="fab fa-facebook-square media-icons"></i>
          </a>
        </li>
        <li key="2">
          <a href="https://www.instagram.com/onepeloton">
            <i className="fab fa-instagram media-icons"></i>
          </a>
        </li>
        <li key="3">
          <a href="https://twitter.com/onepeloton">
            <i className="fab fa-twitter media-icons"></i>
          </a>
        </li>
        <li key="4">
          <a href="https://www.youtube.com/c/onepeloton">
            <i className="fab fa-youtube media-icons"></i>
          </a>
        </li>
      </ul>
    </>
  );
}

export default LightIconIndex;