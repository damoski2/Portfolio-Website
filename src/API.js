import React from 'react';
import axios from "axios";

const url = "https://rampport-api.herokuapp.com";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";



export const fetchDam = async () => {

  try {
    const { data }  = await axios.get( url + '/api/damola');
    console.log(data);

    const benData = {
      id: data[0].id,
      name: data[0].name,
      titles: data[0].titles,
      aboutPageTitles: data[0].aboutPageTitles,
      projectPageTitles: data[0].projectPageTitles,
      img: data[0].img,
      about: data[0].about,
      offers: data[0].offers,
      sampleProj: data[0].sampleProj,
      company: data[0].company,
      aboutPage: data[0].aboutPage,
      projPage: data[0].projPage,
      proj2Page: data[0].proj2Page,
      tinderClone: data[0].tinderClone,
    };
    return benData;
  } catch (err) {
    console.log(err);
  }
};
