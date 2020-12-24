/* eslint-disable react/jsx-pascal-case */
import react, { useState, ReactFragment, useRef, useEffect } from "react";
import {
  NavCar,
  Description,
  Offers,
  First_Project,
  Second_Project,
  Third_Project,
  Company,
  Let_Talk,
  Navbar,
  About,
  Projects,
  PCaudio,
  Tinderclone,
  ContactPage,
  Loader,
  ScrollArrow,
} from "./components/index";
import style from "./App.module.css";
import { useSpring, animated } from "react-spring";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [state, toggle] = useState(false);
  const [about, setAbout] = useState(false);
  const [project, setProject] = useState(false);
  const [project2, setProject2] = useState(false);
  const [data, setData] = useState(false);
  const [contact, setContact] = useState(false);

  //Setting up Loader Algorithm
  const [navcarServer, setnavCarServer] = useState(false);
  const [aboutpageServer, setAboutPageServer] = useState(false);
  const [eCommerceServer, setEcommerceServer] = useState(false);
  const [dataServer, setDataServer] = useState(false);
  const [projectServer, setProjectServer] = useState(false);
  const [contactServer, setContactServer] = useState(false);
  const [homepageTimer, setHomePageTimer] = useState(false);


                                              /*IMAGE SLIDER ALGORITHM*/
  var projSelct;   
  var innerProj;               
  const maxH  = 3000;
  const minH = 2444;                        
  const [activateScroll, setActivateScroll] = useState(false);
  const ref = useRef();

  /*useEffect(()=>{ 
    checkScroll();
  },[activateScroll]);

  

  const checkScroll = ()=>{
      projSelct = ref.current.childNodes[2];
      innerProj = projSelct.childNodes[2];
      console.log(innerProj)
  }


  window.addEventListener('scroll',()=>{
    console.log(activateScroll);
    if(window.pageYOffset === 2444){
      setActivateScroll(true);
    }else if(window.pageYOffset >=3000){
      setActivateScroll(false);
    }else if(window.pageYOffset<2444){
      setActivateScroll(false);
    }
  })
  */













  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    <Router>
      <div className={style.App}>
        <Route
          path="/"
          exact
          render={(props) => (
            <div ref={ref}  >
              <Navbar
                x={x}
                toggle={toggle}
                state={state}
                about={about}
                project={project}
                contact={contact}
                setAbout={setAbout}
                setProject={setProject}
                setProject2={setProject2}
                setContact={setContact}
                setData={setData}
                setnavCarServer={setnavCarServer}
                setAboutPageServer={setAboutPageServer}
                setEcommerceServer={setEcommerceServer}
                setProjectServer={setProjectServer}
                setDataServer={setDataServer}
                setContactServer={setContactServer}
                setHomePageTimer={setHomePageTimer}
              />
              <NavCar
                x={x}
                toggle={toggle}
                state={state}
                about={about}
                project={project}
                project2={project2}
                navcarServer={navcarServer}
                setnavCarServer={setnavCarServer}
                setHomePageTimer={setHomePageTimer}
                homepageTimer={homepageTimer}
              />
              <ScrollArrow />
              <div style={{ display: homepageTimer ? "block" : "none" }}>
                <Description navcarServer={navcarServer} />
                <Offers navcarServer={navcarServer} />
                <First_Project activateScroll={activateScroll} setActivateScroll={setActivateScroll} navcarServer={navcarServer} id="firstProj" />
                <Second_Project navcarServer={navcarServer} />
                <Third_Project navcarServer={navcarServer} />
                <Company navcarServer={navcarServer} />
                <Let_Talk navcarServer={navcarServer} />
              </div>
            </div>
          )}
        />

        <Route
          path="/about"
          render={(props) => (
            <div>
              <Navbar
                x={x}
                toggle={toggle}
                state={state}
                about={about}
                project={project}
                contact={contact}
                setAbout={setAbout}
                setProject={setProject}
                setProject2={setProject2}
                setContact={setContact}
                setData={setData}
                setnavCarServer={setnavCarServer}
                setAboutPageServer={setAboutPageServer}
                setEcommerceServer={setEcommerceServer}
                setProjectServer={setProjectServer}
                setDataServer={setDataServer}
                setContactServer={setContactServer}
                setHomePageTimer={setHomePageTimer}
              />
              <About
                setAboutPageServer={setAboutPageServer}
                aboutpageServer={aboutpageServer}
                toggle={toggle}
              />
              <ScrollArrow />
            </div>
          )}
        />
        <Route
          path="/projects"
          render={(props) => (
            <div>
              <Navbar
                x={x}
                toggle={toggle}
                state={state}
                about={about}
                project={project}
                setAbout={setAbout}
                setProject={setProject}
                setProject2={setProject2}
                setContact={setContact}
                setData={setData}
                setnavCarServer={setnavCarServer}
                setAboutPageServer={setAboutPageServer}
                setEcommerceServer={setEcommerceServer}
                setProjectServer={setProjectServer}
                setDataServer={setDataServer}
                setContactServer={setContactServer}
                setHomePageTimer={setHomePageTimer}
              />
              <Projects
                projectServer={projectServer}
                setProjectServer={setProjectServer}
                projectServer={projectServer}
                toggle={toggle}
              />
              <ScrollArrow />
            </div>
          )}
        />
        <Route
          path="/project2"
          render={(props) => (
            <div>
              <Navbar
                x={x}
                toggle={toggle}
                state={state}
                about={about}
                project={project}
                setAbout={setAbout}
                setProject={setProject}
                setProject2={setProject2}
                setContact={setContact}
                setData={setData}
                setnavCarServer={setnavCarServer}
                setAboutPageServer={setAboutPageServer}
                setEcommerceServer={setEcommerceServer}
                setProjectServer={setProjectServer}
                setDataServer={setDataServer}
                setContactServer={setContactServer}
                setHomePageTimer={setHomePageTimer}
              />
              <PCaudio
                eCommerceServer={eCommerceServer}
                setEcommerceServer={setEcommerceServer}
                toggle={toggle}
              />
              <ScrollArrow />
            </div>
          )}
        />

        <Route
          path="/data"
          render={(props) => (
            <div>
              <Navbar
                x={x}
                toggle={toggle}
                state={state}
                about={about}
                project={project}
                setAbout={setAbout}
                setProject={setProject}
                setProject2={setProject2}
                setContact={setContact}
                setData={setData}
                setnavCarServer={setnavCarServer}
                setAboutPageServer={setAboutPageServer}
                setEcommerceServer={setEcommerceServer}
                setProjectServer={setProjectServer}
                setDataServer={setDataServer}
                setContactServer={setContactServer}
                setHomePageTimer={setHomePageTimer}
              />
              <Tinderclone
                dataServer={dataServer}
                setDataServer={setDataServer}
                toggle={toggle}
              />
              <ScrollArrow />
            </div>
          )}
        />
        <Route
          path="/contact"
          render={(props) => (
            <div>
              <Navbar
                x={x}
                toggle={toggle}
                state={state}
                about={about}
                project={project}
                setAbout={setAbout}
                setProject={setProject}
                setProject2={setProject2}
                setContact={setContact}
                setData={setData}
                setnavCarServer={setnavCarServer}
                setAboutPageServer={setAboutPageServer}
                setEcommerceServer={setEcommerceServer}
                setProjectServer={setProjectServer}
                setContactServer={setContactServer}
                setDataServer={setDataServer}
                setHomePageTimer={setHomePageTimer}
              />
              <ContactPage
                setContactServer={setContactServer}
                contactServer={contactServer}
                toggle={toggle}
              />
              <ScrollArrow />
            </div>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
