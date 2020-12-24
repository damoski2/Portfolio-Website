import React, { useState, useEffect,useRef } from "react";
import style from "./Nav-Car.module.css";
import ReactRotatingText from "react-rotating-text";
import { fetchDam } from "../../API";
import { useSpring, animated } from "react-spring";
import Loader from '../Loader/Loader';


const NavCar = ({ x, toggle, state, about, project, project2,setnavCarServer, navcarServer,setHomePageTimer,homepageTimer }) => {
  const [benPlatform, setBenPlatform] = useState([]);
  const [stopper, setStopper] = useState(null);
 // const[confirmWholePage, setConfirmWholePage] =useState(false);

  /*useEffect(()=>{
    var textWrapper = ref1.current;
     if(textWrapper){
       console.log(textWrapper)
       textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

       anime.timeline({loop: true})
      .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
      }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
     }else{
       console.log("unavailable")
     }
  },[ref1])*/


  //console.log(benPlatform)

  ///aboutDetails? titles =["Rampion Tech"]: titles=tempArr;

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

  benPlatform ? setnavCarServer(true) : setnavCarServer(false);
  const { proj2Page, img, offers, sampleProj } = benPlatform;
  if(offers){
    var offerImg1 = offers[0].img;
    var offerImg2 = offers[1].img;
    var offerImg3 = offers[2].img;
  }

  if(sampleProj){
    var sampleImg1 = sampleProj[0].img1;
    var sampleImg2 = sampleProj[1].img1;
    var sampleImg3 = sampleProj[2].img1;
  }

  if(proj2Page && img && offers && sampleProj && offerImg1 && offerImg2 && offerImg3 && sampleImg1 && sampleImg2 && sampleImg3 ) setHomePageTimer(true);

  return  proj2Page?(
    <section>
      <div>
        <div className={style.linkSmallScreen}>
          <img src={images.logo} alt="logo" className={style.logo} />
          <div className={style.hambuger2} onClick={() => toggle(true)}>
            <div></div>
            <div></div>
            <div className={style.thirdDiv}></div>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.works}>
            <img className={style.logo} src={images.logo} alt="logo" />
            <p className={style.para}>Oyindacodes 2020</p>
          </div>
          <div className={style.carousel}>
            <div className={style.carousel2}>
            <div className={style.innerDiv}>
              
              <h1>
                <ReactRotatingText 
                items={benPlatform.titles}
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
    </section>
  ):(
    <Loader navcarServer={navcarServer} />
  )
};

export default NavCar;
