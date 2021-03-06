import React, { useState, useEffect } from "react";
import style from "./Projects.module.css";
import { fetchDam } from "../../API";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ECommerce from "../ECommerce/ECommerce";
import ReactRotatingText from "react-rotating-text";
import { useSpring, animated } from "react-spring";
import Loader from "../Loader/Loader";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = ({ toggle, setProjectServer, projectServer }) => {
  const [benPlatform, setBenPlatform] = useState([]);
  const [stopper, setStopper] = useState(null);
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

  const fetchAPI = async () => {
    setTimeout(async () => {
      setBenPlatform(await fetchDam());
    }, 2000);
  };

  useEffect(() => {
    fetchAPI();
  }, [stopper]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  benPlatform ? setProjectServer(true) : setProjectServer(false);

  const { projPage } = benPlatform;
  console.log(projPage);

  return projPage ? (
    <Router>
      <Route
        exact
        path="/projects"
        render={(props) => (
          <section className={style.mainCnt}>
            <animated.div>
              <div>
                <div className={style.linkSmallScreen}>
                  <img src={images.logo} alt="logo" className={style.logo} />
                  <div className={style.hambuger2} onClick={() => toggle(true)}>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className={style.overallCnt}>
                  <div className={style.works}>
                    <img className={style.logo} src={images.logo} alt="logo" />
                    <p className={style.para}>Oyindacodes 2020 </p>
                  </div>
                  <div className={style.carousel}>
                    <div className={style.carousel2}>
                      <div className={style.innerDiv}>
                        <h1>
                          <ReactRotatingText
                            items={benPlatform.projectPageTitles}
                            pause={2000}
                            typingInterval={100}
                            cursor={false}
                          />
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className={style.contact}>
                    <div className={style.innerDiv2}>
                      <div
                        className={style.hambuger}
                        onClick={() => toggle(true)}
                      >
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <p className={style.para2}>Contact Me</p>
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
                  </div>
                </div>
              </div>
            </animated.div>
            <div data-aos={"fade-up"} className={style.projInfo}>
              <h1>{projPage.heading}</h1>
              <div className={style.detailsPara}>
                {projPage.details.map((para) => (
                  <p className={style.p_ara}>{para}</p>
                ))}
              </div>
            </div>
            <img
              data-aos={"fade-up"}
              className={style.ProjImg}
              src={projPage.img}
              alt="www"
            />

            <div data-aos={"fade-up"} className={style.ending}>
              <h1>Thanks For Watching</h1>
              <Link className={style.nextProj} to="/project2">
                Next Project
              </Link>
              <br></br>
              <a className={style.liveUrl} href="http://dashme-app.netlify.app">
                Live url
              </a>
            </div>
          </section>
        )}
      />

      <Route path="/project2" component={ECommerce} />
    </Router>
  ) : (
    <Loader projectServer={projectServer} />
  );
};

export default Projects;
