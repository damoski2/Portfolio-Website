import React,{useState,useEffect} from 'react';
import style from './Third_Project.module.css';
import { fetchDam } from "../../API";
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Third_Project = () => {
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
    var proj3;
    proj3 = benData.sampleProj ? benData.sampleProj[2] : null;
    console.log(proj3);

    
    return (
        <section className={style.container}>
      {proj3 ? (
        <div className={style.proj}>
          <div  data-aos={'fade-up'} className={style.ImageContainer}>
            <img className={style.img1} src={proj3.img1} alt="project Image" />
          </div>
          <div  data-aos={'fade-up'} className={style.projectInfo}>
            <h1>{proj3.projName}</h1>
            <p>{proj3.projDesc}</p>
            <Link className={style.viewLink} to="/data">View Project</Link>
          </div>
        </div>
      ) : (
        console.log("no")
      )}
    </section>
    )
}

export default Third_Project
