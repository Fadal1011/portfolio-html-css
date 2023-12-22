import {useRef , useState , useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from "@material-tailwind/react";
import linkDin from '../src/assets/linkedin.png'
import github from '../src/assets/github.png'
import gmail from '../src/assets/gmail.png'
import profil from '../src/assets/profil.jpg'
import profil2 from '../src/assets/profil2.jpg'
import Typed from 'typed.js';
import html from '../src/assets/html.png'
import css from '../src/assets/css-3.png'
import bootstrap from '../src/assets/bootstrap.png'
import angular from '../src/assets/angular.png'
import ionic from "../src/assets/ionic.png"
import js from "../src/assets/js.png"
import laravel from "../src/assets/laravel.png"
import mysql from "../src/assets/mysql.png"
import php from "../src/assets/php.png"
import Tailwind from "../src/assets/Tailwind CSS.png"
import typescript from "../src/assets/typescript.png"
import uml from "../src/assets/uml.png"
import uvs from "../src/assets/uvs.png"
import sonatel from "../src/assets/sonatel.png"
import bellaOrange from "../src/assets/bellaOrange.png"
import emoji from "../src/assets/emoji.png"
import gestionBoutique from "../src/assets/gestionBoutique.png"
import gestionCouture from "../src/assets/gestionCouture.png"
import mariage from "../src/assets/mariage.png"
import planning from "../src/assets/planning.png"
import PriseRendezVous from "../src/assets/PriseRendezVous.png"
import transaction from "../src/assets/transaction.png"
import venteVetement from "../src/assets/venteVetement.png"
import telephone from "../src/assets/telephone.png"
import mail from "../src/assets/e-mail.png"
import sun from "../src/assets/soleil.png"
import moon from "../src/assets/lune.png"

import './App.css'

library.add(faBars);


function App() {
  return <>
    <Home/>
    <About></About>
    <Skilss></Skilss>
    <Education></Education>
    <Project></Project>
    <Contact></Contact>
    </>
}


function Home(){
  return <div id="Home">
    <Navbar/>
    <Presenation></Presenation>
  </div>
}

function Navbar(){
  const [showNavbar, setShowNav] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  let etat = moon

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  const handleShowNavbar = () => {
    setShowNav(!showNavbar)
  }

  return <div className="navbar">
      {/* <button onClick={toggleDarkMode}>
        {darkMode ? 'Mode Clair' : 'Mode Sombre'}
      </button> */}
    <div className="logo">
      <h1>Fadal Ndiaye</h1>
    </div>
    <div id="nav" className={`nav-elements  ${showNavbar && 'active'}`}>
      <li><a href="#Home">Home</a></li>
      <li><a href="#About">About</a></li>
      <li><a href="#Skills">Skills</a></li>
      <li><a href="#Education">Education</a></li>
      <li><a href="#Project">Projects</a></li>
      <li><a href="#Contact">Contact</a></li>
      <div className="btn-theme">
        <button onClick={toggleDarkMode}>
            <img src={darkMode ? etat =moon : etat = sun} alt="" />
        </button>
      </div>
    </div>

      <FontAwesomeIcon icon="bars" id='OpenMenu' onClick={handleShowNavbar}/>
  </div>
}

function Presenation(){
  return <div className='presention'>
    <div className="content">
        <h2>Hi There</h2>
        <h1>I am <TypedText/></h1>
        <div className="rs">
          <ul>
            <li><a href=""><img src={linkDin} alt="" /></a></li>
            <li><a href=""><img src={github} alt="" /></a></li>
            <li><a href=""><img src={gmail} alt="" /></a></li>
          </ul>
        </div>
        <button className="contactButton"> Contact Me
            <div className="iconButton">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
            </div>
      </button>
    </div>

    <div className="profil">
      <img src={profil} alt="" className='animate-jump-in animate-once' />
    </div>
  </div>
}

function About(){
  return <div id="about">
    <div className="image">
      <img src={profil2} alt="" />
    </div>
    <div className="content">
      <h3>Who am i</h3>
      <h1>Im am Mouhamadou Fadal Ndiaye</h1>
      <p>
        Étudiant en développement Fullstack, 
        passionné par la programmation front-end et back-end.
        Maîtrise des langages HTML, CSS, JavaScript et TypeScript,
        ainsi que des frameworks Angular, Bootstrap et Tailwind.
        Connaissance du langage back-end PHP et du framework Laravel.
        je suis autonome et capable de ressoudre des complrexes.
      </p>
      <ul className="flex">
        <div>
          <li><span>Age:</span>25 ans</li>
          <li><span>Sexe:</span>Masculin</li>
        </div>
        <div>
          <li><span>Telephone:</span>+221 77 224 61 27</li>
          <li><span>Adresse:</span>Dakar Senegal</li>
        </div>
      </ul>
      
        <a href='../src/assets/Mouhamadou Fadal (2).pdf' download="Mouhamadou Fadal (2).pdf" class="buttonDownload">Download</a>
    </div>
  </div>
}


function Skilss(){
  return <div id="Skills">
    <h1 className='titleContainer'>My Skills</h1>
    <div className="typeLangage">
      <h2 className='title'>FrontEnd</h2>
      <div className="imageSkills">
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <img src={typescript} alt="" />
          <img src={angular} alt="" />
          <img src={Tailwind} alt="" />
          <img src={bootstrap} alt="" />
      </div>
    </div>

    <div className="typeLangage">
      <h2 className='title'>BackEnd-SGBD-visual modeling-Mobile</h2>
      <div className="imageSkills">
          <img src={uml} alt="" />
          <img src={mysql} alt="" />
          <img src={laravel} alt="" />
          <img src={php} alt="" />
          <img src={ionic} alt="" />
      </div>
    </div>
  </div>
}

function Education(){
  return <div id="experience">
  <h1 className='titleContainer'>Education</h1>
  <div className="box-container">
      <div className="box">
          <div className="content" data-aos="fade-left">
              <div className="school">
                  <img src={uvs} alt=""/>
                  <p>2019-2023</p>
              </div>
              <h3>Developpement Web</h3>
              <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quo delectus sequi tempora quidem vitae totam.
              </p>
          </div>
      </div>

      <div className="box">
          <div className="content" data-aos="fade-right">
              <div className="school">
                  <img src={sonatel} alt=""/>
                  <p>janvier-2023 - octobre-2023</p>
              </div>
              <h3>Developpement Web</h3>
              <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quo delectus sequi tempora quidem vitae totam.
              </p>
          </div>
      </div>
  </div>
</div>
}

function Project(){
  return <div id='project'>
       <h1 className='titleContainer'>Projects</h1>
       <div className="portfolio">
          <CarouselProjet></CarouselProjet>
       </div>
  </div>
}

function Contact(){
  return <div id="contact">
    <h1 className='titleContainer'>Contact me</h1>
    <div className="info">
        <p><span><img src={telephone} alt="" /></span>+221 77 224 61 27</p>
        <p><span><img src={mail} alt="" /></span>fndiaye1011@gmail.com</p>
    </div>
  </div>
}




function TypedText() {
  const typedTextRef = useRef();

  useEffect(() => {
    const options = {
      strings: ['Developper FrontEnd.', 'Developper BackEnd.','Developper FullStack.'],
      typeSpeed: 50,  // Vitesse de frappe du texte
      backSpeed: 30,  // Vitesse de suppression du texte
      loop: true,     // Répéter l'animation en boucle
    };

    const typed = new Typed(typedTextRef.current, options);

    // Nettoyer les ressources lors du démontage du composant
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedTextRef}></span>;
}

 
export function CarouselProjet() {
  return (
    <Carousel
      className="rounded-xl pb-9"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
  
  <div className='projectPresentation'>
          <div className="image">
              <img
                src={bellaOrange}
                alt="image 1"
                className="projetImage object-cover"
              />
          </div>

          <div className="content">
              <h1 className='Title'>Belle Orange</h1>
              <p>Il s'agit d'un projet scolaire que nous avions à Sonatel Academy, qui consiste à appliquer les bases du langage HTML et CSS, ainsi qu'à mettre en œuvre la responsivité du site.</p>
              <div className='technologieImg'>
                <img src={html} alt="" />
                <img src={css} alt="" />
              </div>
          </div>
      </div>
    
   
       <div className='projectPresentation'>
          <div className="image">
              <img
                src={emoji}
                alt="image 1"
                className="projetImage object-cover"
              />
          </div>

          <div className="content">
              <h1 className='Title'>Picman et Emoji</h1>
              <p>Il s'agit d'un petit projet HTML CSS qui permet de s'exercer aux transitions. Nous nous sommes inspirés du jeu Pac-Man et avons également recréé des emojis.</p>
              <div className='technologieImg'>
                <img src={html} alt="" />
                <img src={css} alt="" />
              </div>
          </div>
       </div>
  

       <div className='projectPresentation'>
          <div className="image">
              <img
                src={transaction}
                alt="image 1"
                className="projetImage object-cover"
              />
          </div>

          <div className="content">
              <h1 className='Title'>Gestion de Transaction</h1>
              <p>Il s'agit d'une application permettant de gérer les transactions des utilisateurs sur différents opérateurs. Ce projet a été développé en HTML, CSS et JavaScript.</p>
              <div className='technologieImg'>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
              </div>
          </div>
       </div>


       <div className='projectPresentation'>
          <div className="image">
              <img
                src={planning}
                alt="image 1"
                className="projetImage object-cover"
              />
          </div>

          <div className="content">
              <h1 className='Title'>Gestion de planning professeur</h1>
              <p>Il s'agit d'un projet visant à gérer les emplois du temps des enseignants dans une école. Ce projet a été développé en HTML, CSS et JavaScript. L'application permet de planifier et de gérer les horaires des enseignants de manière efficace.</p>
              <div className='technologieImg'>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
              </div>
          </div>
       </div>

       <div className='projectPresentation'>
          <div className="image">
              <img
                src={mariage}
                alt="image 1"
                className="projetImage object-cover"
              />
          </div>

          <div className="content">
              <h1 className='Title'>Service de decoration Mariage</h1>
              <p>Il s'agit d'un projet qui offre la possibilité de visiter un site web pour obtenir des services de décoration de mariage. Ce projet a été développé en utilisant HTML, CSS, JavaScript, PHP et MySQL.</p>
              <div className='technologieImg'>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={php} alt="" />
                <img src={mysql} alt="" />
              </div>
          </div>
       </div>

       <div className='projectPresentation'>
          <div className="image">
              <img
                src={venteVetement}
                alt="image 1"
                className="projetImage object-cover"
              />
          </div>

          <div className="content">
              <h1 className='Title'>E-commerce Vente de vetement</h1>
              <p>Il s'agit d'un projet de commerce électronique qui offre la possibilité de réaliser des ventes en ligne. Ce projet a été développé en utilisant HTML, CSS, JavaScript, PHP et MySQL. L'application permet aux utilisateurs de parcourir une sélection de produits, de les ajouter à leur panier d'achat et de passer une commande en ligne.</p>
              <div className='technologieImg'>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={php} alt="" />
                <img src={mysql} alt="" />
              </div>
          </div>
       </div>

       <div className='projectPresentation'>
          <div className="image">
              <img
                src={PriseRendezVous}
                alt="image 1"
                className="projetImage object-cover"
              />
          </div>

          <div className="content">
              <h1 className='Title'>Prise de rendez-vous chez le dentist</h1>
              <p>Il s'agit d'une application web permettant de prendre rendez-vous chez le dentiste. Elle a été développée en utilisant HTML, CSS, JavaScript, PHP et MySQL.</p>
              <div className='technologieImg'>
              <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={php} alt="" />
                <img src={mysql} alt="" />
              </div>
          </div>
       </div>

       <div className='projectPresentation'>
          <div className="image">
              <img
                src={gestionBoutique}
                alt="image 1"
                className="projetImage object-cover"
              />
          </div>

          <div className="content">
              <h1 className='Title'>Gestion de boutique</h1>
              <p>Il s'agit d'une application web qui permet aux commerçants d'enregistrer les commandes de leurs clients et de gérer leur inventaire de produits. Cette application a été développée en utilisant Angular, Laravel et Tailwind.</p>
              <div className='technologieImg'>
                <img src={angular} alt="" />
                <img src={Tailwind} alt="" />
                <img src={laravel} alt="" />
              </div>
          </div>
       </div>

       <div className='projectPresentation'>
          <div className="image">
              <img
                src={gestionCouture}
                alt="image 1"
                className="projetImage object-cover"
              />
          </div>

          <div className="content">
              <h1 className='Title'>Gestion de couture</h1>
              <p>Il s'agit d'une application web qui permet aux couturiers de gérer tous les détails de leur activité, tels que le nombre d'articles en vente, les articles en cours de confection, etc. Elle a été développée en utilisant Angular, Bootstrap et Laravel.</p>
              <div className='technologieImg'>
                <img src={angular} alt="" />
                <img src={bootstrap} alt="" />
                <img src={laravel} alt="" />
              </div>
          </div>
       </div>
    </Carousel>
  );
}

export default App
