import React, { useEffect } from 'react';
import BarsChart from './BarsChart';
import Header from "../Header/Header.js";
import "../Header/header.css";
import "../GraphicResults/graphicresults.css";

const GraphicResults = () => {
  return (
    <div>
        <Header/><br></br>
    <div className='contenedor-principal'>
      <h1 className="text-center mb-4">Graficos historial</h1>
      <div className='contenedor-grafico'>
      <BarsChart/>
      </div>
    </div>
    </div>
  );
};

export default GraphicResults;


