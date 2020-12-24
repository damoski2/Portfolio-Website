import React, { useState, useEffect,useRef } from "react";
import style from "./First_Project.module.css";
import { fetchDam } from "../../API";
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const First_Project = ({ activateScroll, setActivateScroll }) => {
  const [benData, setBenData] = useState([]);
  const [stopper, setStopper] = useState(null);
  const fetchAPI = async () => {
    setBenData(await fetchDam());
  };

  useEffect(() => {
    fetchAPI();
  }, [stopper]);

  useEffect(()=>{
    Aos.init({
        duration:1000
    })
 })


    activateScroll?console.log("active"):console.log("in active");

     const phoneAnim =  activateScroll? {
      marginLeft: '-10em',
      transition:'2s',
    }:{
      marginLeft:'-18.7em',
      transition:'2s'
    }   


  //console.log(benData);
  var proj1;
  proj1 = benData.sampleProj ? benData.sampleProj[0] : null;
  console.log(proj1);

  return (
    <section className={style.container}>
      {proj1 ? (
        <div className={style.proj}>
          <div data-aos={'fade-up'} className={style.ImageContainer}>
            <img className={style.img2} src={proj1.img2} alt="project Image2" />
            <img className={style.img1} src={proj1.img1} alt="project Image" />
          </div>
          <div data-aos={'fade-up'} className={style.projectInfo}>
            <h1>{proj1.projName}</h1>
            <p>{proj1.projDesc}</p>
            <Link className={style.viewLink} to="/projects">View Project</Link>
          </div>
        </div>
      ) : (
        console.log("no")
      )}
    </section>
  );
};

export default First_Project;
