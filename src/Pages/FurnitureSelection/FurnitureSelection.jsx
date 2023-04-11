import React, { useEffect, useState } from 'react'

import './FurnitureSelection.css'
import CardServices from '../../components/CardServices/CardServices';
import axios from 'axios';

const imgURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function FurnitureSelection() {
  const [furniturePics, setFurniturePics] = useState([])

  const getFurniturePics = async () => {
    axios
      .get(imgURL + "furniture", {
        headers: {
          Authorization: `${apiKey}`,
        },
      })
      .then((data) => {
        const photos = data.data.photos;

        console.log(photos);
        setFurniturePics(photos.slice(0,9));
      });
  };

  useEffect(() => {
    getFurniturePics()
  }, [])
  return (
    <div className='furnitureSelectionPage'>
      <h1 className='titleFurniturePage'>Seleção de móveis</h1>
      <section className='furniturePics'>
      {furniturePics.length > 0 &&(
        furniturePics.map((furniture, index) => (
          <CardServices title={furniture.alt} URLimg={furniture.src.medium}/>
        ))
      )}
      </section>
    </div>
  )
}

export default FurnitureSelection