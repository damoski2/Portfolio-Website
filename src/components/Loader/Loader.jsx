import React from "react";
import style from "./Loader.module.css";

const Loader = ({navcarServer, aboutpageServer, eCommerceServer,projectServer, contactServer,dataServer}) => {
  
  if(navcarServer || aboutpageServer || eCommerceServer || projectServer || contactServer || dataServer){
    document.body.style.overflow = "scroll"
  }else{
    document.body.style.overflow = "hidden"
  }



 

  return (
    <section className={style.Loader}>
      <div class={style.spinner}>
        <div class={style.double_bounce1}></div>
        <div class={style.double_bounce2}></div>
      </div>
    </section>
  );
};

export default Loader;
