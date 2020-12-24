import React, { useState } from "react";
import style from "./Navbar.module.css";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

const Navbar = ({
  x,
  toggle,
  state,
  about,
  project,
  contact,
  setAbout,
  setProject,
  setProject2,
  setContact,
  setnavCarServer,
  setAboutPageServer,
  setEcommerceServer,
  setProjectServer,
  setDataServer,
  setData,
  setHomePageTimer,
  setContactServer,
}) => {
  const [images, setImages] = useState({
    logo:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1605096991/logo_nh5kui.svg",
    Fb_Img:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1605096988/facebook_yuritk.svg",
    Ig_Img:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1605096990/instagram_pevhyd.svg",
    be_Img:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1605096988/behance_ukv0je.svg",
    lk_Img:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1605096990/linkedin-3_p4yh62.svg",
    tw_Img:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1605096993/twitter_prkdsa.svg",
    mouseImg:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1605096992/mouse_qwtl1u.svg",
    mcBookImg:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1605021641/Macbook_o9y5ch.svg",
    gitImg:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1606221517/github-seeklogo.com_w7n0ml.svg",
  });

  const setExLinks = () => {
    setAbout(false);
    setProject(false);
    setProject2(false);
    setContact(false);
    toggle(false);
    setDataServer(false);
    setAboutPageServer(false);
    setContactServer(false);
    setEcommerceServer(false);
    setProjectServer(false);
  };

  const setExLinks1 = () => {
    setAbout(true);
    toggle(false);
    setProject(false);
    setProject2(false);
    setContact(false);
    setnavCarServer(false);
    setEcommerceServer(false);
    setProjectServer(false);
    setDataServer(false);
    setContactServer(false);
    setHomePageTimer(false);
  };

  const setExtLinks2 = () => {
    setProject(true);
    setProject2(false);
    setAbout(false);
    toggle(false);
    setContact(false);
    setAboutPageServer(false);
    setnavCarServer(false);
    setEcommerceServer(false);
    setDataServer(false);
    setContactServer(false);
    setHomePageTimer(false);
  };

  const setExtLinks3 = () => {
    toggle(false);
    setAbout(false);
    setProject(false);
    setProject2(true);
    setContact(false);
    setAboutPageServer(false);
    setProjectServer(false);
    setnavCarServer(false);
    setDataServer(false);
    setContactServer(false);
    setHomePageTimer(false);
  };

  const setExtLinks4 = () => {
    setContact(true);
    toggle(false);
    setAbout(false);
    setProject(false);
    setProject2(false);
    setAboutPageServer(false);
    setProjectServer(false);
    setnavCarServer(false);
    setEcommerceServer(false);
    setDataServer(false);
    setHomePageTimer(false);
  };

  const setExtLinks5 = () => {
    setData(true);
    toggle(false);
    setAbout(false);
    setProject(false);
    setProject2(false);
    setContact(false);
    setAboutPageServer(false);
    setProjectServer(false);
    setnavCarServer(false);
    setEcommerceServer(false);
    setContactServer(false);
    setHomePageTimer(false);
  };

  return (
    <animated.div
      style={{
        opacity: x.interpolate({ range: [0, 1], output: [0, 1] }),
        transform: x
          .interpolate({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          })
          .interpolate((x) => `scale(${x})`),
        display: state
          ? x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
              })
              .interpolate((x) => `block`)
          : x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
              })
              .interpolate((x) => `none`),
      }}
      className={style.container}
    >
      <IconButton
        onClick={() => toggle(false)}
        className={style.closeBtn}
        style={{ border: "1px solid #fff" }}
      >
        <CloseIcon style={{ color: "#fff" }} />
      </IconButton>
      <div className={style.linkDiv}>
        <div>
          <p>Home</p>
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => setExLinks()}
            to="/"
          >
            Oyindacodes
          </Link>
        </div>
        <div>
          <p>About</p>
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => setExLinks1()}
            to="/about"
          >
            Rampion Tech
          </Link>
        </div>
        <div className={style.multiLinkDiv}>
          <p>My Works</p>
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => setExtLinks2()}
            to="/projects"
          >
            Dash Me
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => setExtLinks3()}
            to="/project2"
          >
            PC-audio
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="/data"
            onClick={() => setExtLinks5()}
          >
            Tinder clone
          </Link>
        </div>
        <div>
          <p>Contacts</p>
          <Link
            style={{ textDecoration: "none" }}
            to="/contact"
            onClick={() => setExtLinks4()}
          >
            Let's talk
          </Link>
        </div>
        <div className={style.links}>
          <a href="https://www.instagram.com/oyindamolaakogun/">
            <img
              src={images.Ig_Img}
              className={style.linkImg}
              alt="Instagram logo"
            />
          </a>
          <a href="https://twitter.com/AkogunOyindamo3">
            <img
              src={images.tw_Img}
              className={style.linkImg}
              alt="twitter logo"
            />
          </a>
          <a href="https://www.facebook.com/oyindamola.akogun/">
            <img
              src={images.Fb_Img}
              className={style.linkImg}
              alt="Facebook logo"
            />
          </a>

          <a href="https://github.com/damoski2">
            <img
              src={images.gitImg}
              className={style.linkImg}
              alt="github logo"
            />
          </a>

          <a href="" target="_blank">
            <img
              src={images.lk_Img}
              className={style.linkImg}
              alt="Linkedin logo"
            />
          </a>
        </div>
      </div>
    </animated.div>
  );
};

export default Navbar;
