import { useState } from "react";
import { Outlet } from "react-router-dom";
export default function Layout({ home }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isServerHovered, setIsServerHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleServerMouseEnter = () => {
    setIsServerHovered(true);
  };

  const handleServerMouseLeave = () => {
    setIsServerHovered(false);
  };
  return (
    <>
      <div className="header-top">
        <div className="title">
          <img className="img-manga" src="/images/Ellipse 1.svg"></img>
          <h3>MangaSocial</h3>
        </div>
        <div className="menu-header">
          <div
            className="comic"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p>Comic</p>
            <img
              className="arrow-img"
              src={
                isHovered ? "/images/Polygon cam.svg" : "/images/Polygon 1.svg"
              }
              alt="Arrow"
            />
          </div>

          <p>Genres</p>
          <p>Popular</p>

          <div
            className="server"
            onMouseEnter={handleServerMouseEnter}
            onMouseLeave={handleServerMouseLeave}
          >
            <p>Server</p>
            <img
              className="arrow-img"
              src={
                isServerHovered
                  ? "/images/Polygon cam.svg"
                  : "/images/Polygon 1.svg"
              }
              alt="Arrow"
            />
          </div>
          <p className="contact">Contact us</p>
        </div>
        <div className="avatar_search">
          <img src="/images/search.svg "></img>
          <input type="text" placeholder="Search"></input>
          <div className="avatar">
            <img src="/images/usersquare.svg"></img>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}
