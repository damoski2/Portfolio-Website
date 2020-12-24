import React, { useState, useEffect } from "react";
import style from "./About.module.css";
import { fetchDam } from "../../API";
import ReactRotatingText from "react-rotating-text";
import { useSpring, animated } from "react-spring";
import Navbar from '../Navbar/Navbar';
import Loader from '../Loader/Loader';
import Aos from 'aos';
import "aos/dist/aos.css";

const About = ({ toggle , state, x,setAboutPageServer, aboutpageServer}) => {


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
    setTimeout( async()=>{
      setBenPlatform(await fetchDam());
    },2000)
  };
  useEffect(() => {
    fetchAPI();
  }, [stopper]);

  useEffect(()=>{
    Aos.init({
        duration:1000
    })
 })

  benPlatform? setAboutPageServer(true):setAboutPageServer(false);
  const { aboutPage } = benPlatform;

  return aboutPage ? (
    <section>
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
              <p className={style.para}>Oyindacodes 2020</p>
            </div>
            <div className={style.carousel}>
            <div className={style.carousel2}>
            <div className={style.innerDiv}>
              
              <h1>
                <ReactRotatingText 
                items={benPlatform.aboutPageTitles}
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
                <div className={style.hambuger} onClick={() => toggle(true)}>
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
      <div className={style.container}>
        <div data-aos={'fade-up'} className={style.mainAbout}>
          <h1 className={style.headingPara}>{aboutPage.heading}</h1>
          <p className={style.p_ara}>{aboutPage.details}</p>
          <br />
          <br />
          <a className={style.webLink} href="http://rampion-tech.netlify.app">
            Visit our Site
          </a>
        </div>
      </div>
    </section>
  ) : (
    <Loader aboutpageServer={aboutpageServer} />
  );
};

export default About;
