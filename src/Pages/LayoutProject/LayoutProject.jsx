import React, { useEffect, useState } from "react";
import "./LayoutProject.css";
import axios from "axios";
import CardServices from "../../components/CardServices/CardServices";

const imgURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function LayoutProject() {
  const [poolPics, setPoolPìcs] = useState();
  const [garagePics, setGaragePics] = useState();
  const [apartmentPics, setApartmentPics] = useState();

  const getPoolPics = async () => {
    axios
      .get(imgURL + "pool house", {
        headers: {
          Authorization: `${apiKey}`,
        },
      })
      .then((data) => {
        const photos = data.data.photos;

        console.log(photos);
        setPoolPìcs(photos[4]);
      });
  };

  const getGaragePics = async () => {
    axios
      .get(imgURL + "garage house", {
        headers: {
          Authorization: `${apiKey}`,
        },
      })
      .then((data) => {
        const photos = data.data.photos;

        console.log(photos);
        setGaragePics(photos[8]);
      });
  };

  const getApartmentPics = async () => {
    axios
      .get(imgURL + "apartment", {
        headers: {
          Authorization: `${apiKey}`,
        },
      })
      .then((data) => {
        const photos = data.data.photos;

        console.log(photos);
        setApartmentPics(photos[0]);
      });
  };

  useEffect(() => {
    getPoolPics();
    getGaragePics();
    getApartmentPics();
  }, []);

  return (
    <div className="layoutPage">
      <section className="titleLayout">
        <h1>Projetos de Decoração</h1>
      </section>
      
      <section className="projectsLayout">
        {poolPics && 
        <CardServices
        title={"Projeto da Área de Lazer"}
        description={
          "Serviço de projeto de decoração e layout da área de lazer, desde a escolha dos móveis e acessórios até a finalização da obra."
        }
        URLimg={poolPics.src.medium}
      />}
        {garagePics && <CardServices
        title={"Projeto de Garagem"}
        description={
          "Serviço de projeto de decoração e layout da garagem, desde a escolha dos móveis e acessórios até a finalização da obra."
        }
        URLimg={garagePics.src.medium}
      />}
        {apartmentPics && <CardServices
        title={"Projeto de Apartamento"}
        description={
          "Serviço de projeto de decoração e layout so apartamento inteiro, desde a escolha dos móveis e acessórios até a finalização da obra."
        }
        URLimg={apartmentPics.src.medium}
      />}
      </section>
    </div>
  );
}

export default LayoutProject;
