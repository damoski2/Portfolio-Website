import React, { useState, useEffect } from "react";
import style from "./Second_Project.module.css";
import { fetchDam } from "../../API";
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Second_Project = () => {
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

  //console.log(benData);
  var proj2;
  proj2 = benData.sampleProj ? benData.sampleProj[1] : null;
  console.log(proj2);

  return (
    <section className={style.container}>
      {proj2 ? (
        <div className={style.proj}>
          <div  data-aos={'fade-up'} className={style.ImageContainer}>
            <img className={style.img2} src={proj2.img2} alt="project Image2" />
            <img className={style.img1} src={proj2.img1} alt="project Image" />
          </div>
          <div  data-aos={'fade-up'} className={style.projectInfo}>
            <h1>{proj2.projName}</h1>
            <p>{proj2.projDesc}</p>
            <Link className={style.viewLink} to="/project2">View Project</Link>
          </div>
        </div>
      ) : (
        console.log("no")
      )}
    </section>
  );
};

export default Second_Project;
