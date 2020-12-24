import React, { useState, useEffect } from "react";
import style from "./ContactPage.module.css";
import ReactRotatingText from "react-rotating-text";
import { fetchDam } from "../../API";
import { useSpring, animated } from "react-spring";
import axios from "axios";
import Loader from '../Loader/Loader';
import Aos from 'aos';
import "aos/dist/aos.css";

const ContactPage = ({ toggle, setContactServer,contactServer }) => {
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
    AstroImg:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1605530347/Astronaut_fczk7e.svg",
    gitImg:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1606221517/github-seeklogo.com_w7n0ml.svg",  
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let holder;

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
        duration: 3000
    })
 })

  benPlatform ? setContactServer(true): setContactServer(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, message, name });

    await axios({
      method: "POST",
      url: "https://damola-server.herokuapp.com/send",
      data: {
        name: name,
        email: email,
        message: message,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      res.data.msg === "success"
        ? alert("Message Sent")
        : alert("Message failed to send");
      resetForm();
    });
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
  const { aboutPage } = benPlatform;

  return aboutPage? (
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
              <p className={style.para}>Oyindacodes 2020</p>
            </div>
            <div className={style.carousel}>
              <div className={style.carousel2}>
                <div className={style.innerDiv}>
                  <h1>
                    <ReactRotatingText
                      items={["Contact Me"]}
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
      <div data-aos={'fade-up'} className={style.contactCnt}>
        <img  src={images.AstroImg} alt="Astronaut image" />
        <div className={style.formDiv}>
          <form onSubmit={handleSubmit}>
            <div className={style.InsideDiv}>
              <div className={style.name}>
                <label>Your-Name</label>
                <input
                  style={{fontFamily:'Sofia Pro'}}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                />
              </div>
              <div className={style.Email}>
                <label>Your-Email</label>
                <input
                 style={{fontFamily:'Sofia Pro'}}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                />
              </div>
            </div>
            <div className={style.message}>
              <label>Your-Message</label>
              <textarea
                style={{fontFamily:'Sofia Pro'}}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
              />
            </div>
            <input style={{fontFamily:'Sofia Pro'}} type="submit"  value="Send Message" />
          </form>
        </div>
      </div>
    </section>
  ):(
    <Loader contactServer={contactServer} />
  )
};

export default ContactPage;
