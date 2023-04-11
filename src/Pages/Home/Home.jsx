import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import "./Home.css";
import CardServices from "../../components/CardServices/CardServices";

import Slider from "react-slick";

const imgURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY

function Home() {
  const [imgs, setImgs] = useState([]);
  const [img0, setImg0] = useState();
  const [imgWorkSmall, setImgWorkSmall] = useState([]);
  const [imgWorkBig, setImgWorkBig] = useState([]);
  const [peoplePics, setPeoplePics] = useState([]);
  const [imgDecorationProject, setImgDecorationProject] = useState();
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    lazyLoad: true,
  };
  const [contactEmail, setContactEmail] = useState();
  const [contactName, setContactName] = useState();
  const [contactMessage, setContactMessage] = useState();

  const getImgs = async () => {
    axios
      .get(imgURL + "houseinterior", {
        headers: {
          Authorization: `${apiKey}`,
        },
      })
      .then((data) => {
        const photos = data.data.photos;

        setImgs(photos);
        setImg0(photos[0]);
        setImgWorkSmall(photos.slice(1, 4));
        setImgWorkBig(photos.slice(5, 7));
        setImgDecorationProject(photos[7]);
      });
  };

  const getProfilePics = async () => {
    axios
      .get(imgURL + "people", {
        headers: {
          Authorization: `${apiKey}`,
        },
      })
      .then((data) => {
        const photos = data.data.photos;

        setPeoplePics(photos.slice(0, 3));
      });
  };

  useEffect(() => {
    getImgs();
    getProfilePics();
  }, []);

  const contact = () => {
    alert(`Mensagem enviada!`);
    console.log(contactEmail, contactName, contactMessage);
  };

  const emailContact = (email) => {
    setContactEmail(email);
  };

  const nameContact = (name) => {
    setContactName(name);
  };

  const messageContact = (message) => {
    setContactMessage(message);
  };

  return (
    <div className="homePage">
      {imgs.length > 0 && (
        <section className="mainContent">
          <h1>Design de Interiores em Itajaí, SC</h1>
          <p>
            Brazidesign, em Itajaí, SC, oferece design de interiores moderno e
            elegante. Nossos projetos são criados para proporcionar bem-estar,
            conforto e satisfação aos nossos clientes. Experiência e qualidade
            garantidas!
          </p>
        </section>
      )}
      {imgs.length > 0 && (
        <div
          className="imgMainContent"
          style={{
            width: "100%",
            position: "absolute",
            backgroundImage: `url(${img0.src.large})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            top: "4rem",
            opacity: "0.6",
          }}
        ></div>
      )}
      <section className="ourWork">
        <h1>Nosso Trabalho</h1>
        <section className="imgsOurWork">
          {imgWorkSmall.length > 0 &&
            imgWorkSmall.map((image, index) => (
              <img
                src={image.src.medium}
                index={index}
                className="imgWorkSmall"
              />
            ))}
          {imgWorkBig.length > 0 &&
            imgWorkBig.map((image, index) => (
              <img
                src={image.src.medium}
                className="imgWorkBig"
                index={index}
              />
            ))}
        </section>
      </section>
      <section className="aboutUs">
        <h2>Sobre Nós</h2>
        <p>
          Olá! Sou o proprietário da Brazidesign, uma empresa de design de
          interiores em Itajaí, Santa Catarina. A Brazidesign foi fundada em
          2008 e ativa desde então. Nosso objetivo é criar espaços funcionais e
          bem decorados para os nossos clientes. Nós trabalhamos com design de
          interiores comerciais e residenciais, desde pequenas reformas até
          grandes projetos de decoração.
        </p>
        <p>
          Todos os projetos são realizados por nossa equipe de profissionais
          qualificados. Nossos designers são qualificados para projetar e
          implementar espaços que atendam às necessidades e desejos de nossos
          clientes. Estamos comprometidos em atender às necessidades e desejos
          de nossos clientes com serviços de design de interiores de qualidade.
        </p>
      </section>
      <section className="ourServices">
        <h1 className="h1OurServices">Nossos Serviços</h1>
        {imgs.length > 0 && (
          <section className="cardsServicesContainer">
            <CardServices
              pageTo={"layoutproject"}
              title={"Projeto de Decoração"}
              description={
                "Serviço de projeto de decoração completa, desde a escolha dos móveis e acessórios até a finalização da obra."
              }
              URLimg={imgs[8].src.medium}
            />
            <CardServices
              pageTo={"plantsselection"}
              title={"Urban Jungle"}
              description={
                "Serviço de ajuda para decidir sobre a escolha das plantas e flores e vasos para sua casa."
              }
              URLimg={imgs[14].src.medium}
            />
            <CardServices
              pageTo={"furnitureselection"}
              URLimg={imgs[10].src.medium}
              description={
                "Serviço de ajuda para decidir os móveis de cada cômodo, avaliando o ambiente escolhido."
              }
              title={"Decoração por Cômodo"}
            />
          </section>
        )}
      </section>
      <section className="comments">
        {peoplePics.length > 0 && (
          <Slider {...settings} className="carousel">
            {peoplePics.map((image, index) => (
              <div index={index}>
                <img src={image.src.small} className="imgComments" />
                <h3 className="commentsComments">
                  {image.alt}
                  {image.alt}
                  {image.alt}
                  {image.alt}
                  {image.alt}
                  {image.alt}
                </h3>
                <p className="commentOwner">- {image.photographer}</p>
              </div>
            ))}
          </Slider>
        )}
      </section>
      <section className="contactForm">
        <div className="contactInputs">
          <label htmlFor="" className="labelName">Nome</label>
          <label htmlFor="" className="labelEmail">E-mail</label>
          <input
            type="text"
            className="normalInput nameInput"
            onChange={(e) => nameContact(e.target.value)}
          />
          <input
            type="email"
            className="normalInput emailInput"
            onChange={(e) => emailContact(e.target.value)}
          />
          <label htmlFor="" className="labelMessage">Mensagem</label>
          <input
            type="text"
            className="messageInput"
            onChange={(e) => messageContact(e.target.value)}
          />
          <button type="submit" onClick={contact} className="sendBtn">
            Enviar
          </button>
        </div>
        <div className="contactInfos">
          <h3>Formulário de Contato - Brazidesign</h3>
          <p>
            Envie-nos uma mensagem e nós entraremos em contato para discutir
            suas necessidades de design de interiores.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
