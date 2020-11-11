import React from 'react'

const LightIconIndex  = () => {
  return (
    <>
      <ul className="media-icons-list">
        <li key="1">
          <a target="_blank" href="https://www.facebook.com/onepeloton">
            <i className="fab fa-facebook-square media-icons"></i>
          </a>
        </li>
        <li key="2">
          <a target="_blank" href="https://www.instagram.com/onepeloton">
            <i className="fab fa-instagram media-icons"></i>
          </a>
        </li>
        <li key="3">
          <a target="_blank" href="https://twitter.com/onepeloton">
            <i className="fab fa-twitter media-icons"></i>
          </a>
        </li>
        <li key="4">
          <a target="_blank" href="https://www.youtube.com/c/onepeloton">
            <i className="fab fa-youtube media-icons"></i>
          </a>
        </li>
      </ul>
    </>
  );
}

export default LightIconIndex;