import { GlobalStyle } from '../styleComponents';
import '../style.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import MentionsLegales from "./MentionsLegales";
import Header_EL from './Header_EL'
import Accueil_El  from './Accueil_EL';
import '../styleAccueilMobile.css';
import React, { useEffect } from 'react';

export default function Accueil() {

    useEffect(() => {
      document.title = "Accueil";
    }, []);



  return (
    <div className='containerPage'>
   <div className='containerEnfantduContainerPage'>
    <Accueil_El/>
<div className="containerAccueil ">
  <Header className="header"/> 
  <div className="grid-container-accueil">

  <div className="row1">
  <img
          src="/images/imageprestatiosnaccueil.jpg"   
          alt='imgaccueil'
className=' img-fluid' 
 />
   <img
          src="/images/imageprestatiosnaccueilplate.jpg"   
          alt='imgaccueil'
className=' img-fluid2' 
 />

</div>

  <div  className="row2"><Footer/></div>
  <div  className="row3Accueil MentionLegalesMobileStyle">
<div className='row3BlocEnfantMentionLegalesAccueilMobile'>
  <Link to="/mentionslegales" >
    MENTIONS LEGALES
  </Link>
</div>
</div>
  
  </div>

</div>
</div>
</div>
  );
}
