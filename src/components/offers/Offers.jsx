import React, { useState, useEffect } from "react";
import style from "./Offers.module.css";
import { fetchDam } from "../../API";
import Aos from 'aos';
import "aos/dist/aos.css";


const Offers = ({navcarServer}) => {
  const [images, setImages] = useState({
    greenBg:
      "https://res.cloudinary.com/oyindacodes/image/upload/v1605096989/Green_Back_r8vdru.svg",
  });
  const [benData, setbenData] = useState([]);
  const [offerArr, setOfferArr] = useState([]);
  const [stopper, setStopper] = useState(null);

  const fetchAPI = async () => {
    setbenData(await fetchDam());
    //setOfferArr(await benData.offers);
  };


  useEffect(() => {
    fetchAPI();
  }, [stopper]);

  useEffect(()=>{
    Aos.init({
        duration:1000
    })
 })

  console.log(benData);
  const { offers } = benData;
  console.log(offers);

  return (
    <section  style={{background:` rgb(243, 122, 122)`}} className={style.container}>
      {offers ? (
        offers.map((item,index) => 
        <div data-aos={'fade-up'} key={index} className={style.col}>
            <img src={item.img} />
            <p className={style.heading}>{item.heading}</p>
            <p className={style.details}>{item.details}</p>
        </div>)
      ) : (
        <div>{console.log("no offers")}</div>
      )}
    </section>
  );
};

export default Offers;
