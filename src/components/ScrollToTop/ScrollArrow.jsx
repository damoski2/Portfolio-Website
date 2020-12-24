import React, { useState } from 'react';
import '../FontawesomeIcons/FontawesomeIcons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import IconButton from '@material-ui/core/IconButton';
import style from './ScrollToTop.module.css';




const ScrollArrow = () => {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop=()=>{
        if(!showScroll && window.pageYOffset>400){
            setShowScroll(true)
        }else if(showScroll && window.pageYOffset <=400){
            setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };

    window.addEventListener('scroll',checkScrollTop);

    return (   
            <FontAwesomeIcon className={style.scrollTop} icon={faArrowCircleUp} onClick={scrollTop} style={{height: 50, width:35, display: showScroll ? 'flex' : 'none'}} />
    )
}

export default ScrollArrow
