import React, { useEffect, useState } from 'react'
import "./PlantsSelection.css"

import plantIcon1 from "../../icons/8301058-removebg-preview.png"
import plantIcon2 from "../../icons/plantIcon.png"
import axios from 'axios';
import CardServices from '../../components/CardServices/CardServices';

const imgURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function PlantsSelection() {
  const [icon, setIcon] = useState(false)
  const [plantsPics, setPlantsPics] = useState([])
  const [treesPics, setTreesPics] = useState([])

  const getPlantsPics = async () => {
    axios
      .get(imgURL + "plants", {
        headers: {
          Authorization: `${apiKey}`,
        },
      })
      .then((data) => {
        const photos = data.data.photos;

        console.log(photos);
        setPlantsPics(photos.slice(0,9));
      });
  };

  const getTreesPics = async () => {
    axios
      .get(imgURL + "trees", {
        headers: {
          Authorization: `${apiKey}`,
        },
      })
      .then((data) => {
        const photos = data.data.photos;

        console.log(photos);
        setTreesPics(photos.slice(0,9));
      });
  };

  
  useEffect(() => {
    getPlantsPics()
    getTreesPics()

    const handleScroll = () => {
      if(window.scrollY > 900){
        setIcon(true)
      }else{
        setIcon(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  

  return (
    <div className='plantSelectionPage'>
      {icon ?
      <img src={plantIcon2} alt="" className='plantIcon2' /> : <img src={plantIcon1} className='plantIcon1' />}
      <h1>Urban Jungle</h1>
      <section className='plantsSection'>
        <h1>Plantas pequenas para apartamentos e interiores de casas</h1>
        <section className='plantsPics'>
        {plantsPics.map((plants) => 
          <CardServices title={plants.alt} URLimg={plants.src.medium}/>
        )}
        </section>
      </section>
      <section className='treesSection'>
          <h1>Árvores para áreas extenas</h1>
          <section className='treesPics'>
            {treesPics.map((trees) =>
            <CardServices title={trees.alt} URLimg={trees.src.medium}/>)}
          </section>
      </section>
    </div>
  )
}

export default PlantsSelection