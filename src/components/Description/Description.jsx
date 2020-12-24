import React, { useState, useEffect, useRef } from "react";
import style from "./Description.module.css";
import { fetchDam } from "../../API";
import Aos from 'aos';
import "aos/dist/aos.css";

const Description = ({ navcarServer }) => {
  const [images, setImages] = useState({
    bg_Img:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1605096992/White_BG_n6rmgn.svg",
    circleOne:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1605696431/Bubble_1_kbguar.svg",
    circleTwo:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1605696431/Bubble_3_vx0vh0.svg",
    circleThree:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1605696431/Bubble_2_m4ragd.svg",
    profile_Img:  
      "https://res.cloudinary.com/oyindacodes/image/upload/v1605801368/MY_PHOTO_tmsf21.svg",
  });

  const [damPlatform, setdamPlatform] = useState([]);
  const [stopper, setStopper] = useState(null);

  const fetchAPI = async () => {
    setdamPlatform(await fetchDam());
  };
  useEffect(() => {
    fetchAPI();
  }, [stopper]);

  useEffect(()=>{
    Aos.init({
        duration:1000
    })
 })

  console.log(damPlatform);
  const { name, about } = damPlatform;
  //console.log(img);

  return (
    <section>
      <div className={style.container}>
        <div data-aos={'fade-up'} className={style.description}>
          <p className={style.para1}>Young And Creative</p>
          <h1>I'm {name}</h1>
          <p className={style.para_about}>{about}</p>
        </div>
        <img data-aos={'fade-up'} className={style.profileImg} src={images.profile_Img} alt="Profile image" />
      </div>
      <div className={style.cirles}>
        <img src={images.circleThree} alt="first  circle" />
        <img src={images.circleThree} alt="third  circle" />
        <img src={images.circleOne} alt="second  circle" />
        <img src={images.circleTwo} alt="second  circle" />
        <img src={images.circleTwo} alt="second  circle" />
        <img src={images.circleOne} alt="first  circle" />
        <img src={images.circleThree} alt="third  circle" />
        <img src={images.circleTwo} alt="second  circle" />
      </div>
    </section>
  );
};

export default Description;
