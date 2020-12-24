import React, { useState, useEffect, useRef } from "react";
import style from "./Company.module.css";
import { fetchDam } from "../../API";
import useWindowSize from "../../hooks/Hooks";
import Aos from "aos";
import "aos/dist/aos.css";

const Company = () => {
  const [benData, setBenData] = useState([]);
  const [stopper, setStopper] = useState(null);
  const [images, setImages] = useState({
    bg_Img:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1605096992/White_BG_n6rmgn.svg",
    circleOne:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1605696431/Bubble_1_kbguar.svg",
    circleTwo:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1605696431/Bubble_3_vx0vh0.svg",
    circleThree:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1605696431/Bubble_2_m4ragd.svg",
  });

  const fetchAPI = async () => {
    setBenData(await fetchDam());
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  const size = useWindowSize();
  const skewRef = useRef();
  const innerRef = useRef();
  useEffect(() => {
    console.log(size.height);
    fetchAPI();
    document.body.style.height = `${skewRef.current.height}px`;
  }, [size.height]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  const skewConfig = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const skewScrolling = () => {
    skewConfig.current = window.scrollY;
    skewConfig.previous +=
      (skewConfig.current - skewConfig.previous) * skewConfig.ease;
    skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100;

    const diff = skewConfig.current - skewConfig.rounded;
    const acc = diff / size.width;
    const velocity = +acc;
    const skew = velocity * 7.5;

    //skewRef.current.style.transform = `translate3d(0, -${skewConfig.rounded}px,0) skewY(${skew}deg)`;
  };

  //console.log(benData);
  var { company } = benData;
  console.log(company);

  let currentPixel = window.pageYOffset;
  let speedHolder;
  const looper = () => {
    const newPixel = window.pageYOffset;
    const diff = newPixel - currentPixel;
    const speed = diff * 55;
    currentPixel = newPixel;
    requestAnimationFrame(looper);
  };

  window.onload = looper();

  return (
    <section ref={skewRef} className={style.container}>
      {company ? (
        <div ref={innerRef} className={style.company}>
          <img
            data-aos={'fade-up'}
            src={company.img}
            alt="Comapny_Image"
          />
          <div
            data-aos={'fade-up'}
            className={style.comapnyInfo}
          >
            <h1>{company.heading}</h1>
            <p>{company.details}</p>
          </div>
        </div>
      ) : (
        console.log("nope")
      )}
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

export default Company;
