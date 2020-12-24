import React,{useState,useEffect} from 'react';
import style from './Let_Talk.module.css';
import ReactRotatingText from 'react-rotating-text';
import { Link } from 'react-router-dom';
import { fetchDam } from '../../API';

 const Let_Talk = () => {
    const [benPlatform, setBenPlatform] = useState([]);
    const [stopper, setStopper] = useState(null);
  
    const fetchAPI = async () => {
      setBenPlatform(await fetchDam());
    };
    useEffect(() => {
      fetchAPI();
    },[stopper]);
  
    //console.log(benPlatform)
    const { titles } = benPlatform;

     const [images,setImages] = useState({
         mcBookImg:'https://res.cloudinary.com/oyindacodes/image/upload/v1605021641/Macbook_o9y5ch.svg',
     });

    return (
      <div className={style.carousel}>
      <div className={style.carousel2}>
      <div className={style.innerDiv}>
        
        <h1>
          <ReactRotatingText 
          items={["Have an Idea","Let's Work it Out"]}
          pause={2000}
          typingInterval={100}
          cursor={false}
          />
        </h1>
      </div>
      <Link className={style.lTlink} to="/contact">Let's Talk</Link>
      </div>
    </div>
    )
}

export default Let_Talk;
