import { GlobalStyle } from '../styleComponents';
import '../style.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import MentionsLegales from "./MentionsLegales";


export default function Accueil() {
  return (
<div className="containerAccueil">
  <Header className="header_EL"/>








<div className="grid-container-accueil_EL">

  <div className="row1">
  <img
          src="/images/amenagement_de_combles_photo_1_.jpg"
          alt='imgaccueil'
className=' img-fluid' 
 />









<div className="blocTextAccueil">


<div className="blocAccueilA">
  
  <div className="blocparagrapheisolation">
   <div className="styleprestationtitle1">ISOLATION</div> 
    <div>Cloisons</div>
    <div>Plafonds</div>
    <div>Faux plafonds</div>
    <div>Doublages</div>
  </div>
</div>



<div className="blocAccueilB">
  <div className="blocparagrapheisolation">
    <div className="styleprestationtitle1">MENUISERIES</div> 
    <div>Aluminium</div>
    <div>PVC</div>
    <div>Bois</div>
    <div>Pose de parquets</div>
  </div>
</div>




</div>




  </div>

  <div class="row2"><Footer/></div>
  <div class="row3">
<div>
  <Link to="/mentionslegales" style={{ textDecoration: 'none', display: 'flex', textAlign: 'center', fontSize: '4.5vw', color: 'darkgrey', margin: '0 auto', bottom:"0%",  }}>
    MENTIONS LEGALES
  </Link>
</div>
</div>
</div>
</div>
  );
}
