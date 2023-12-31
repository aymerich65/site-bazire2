
import '../style.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import MentionsLegales from "./MentionsLegales";
import FooterPrestations from './FooterPrestations';
import '../styleprestations.css';
import Header_EL from './Header_EL';
import React, { useEffect} from 'react';

export default function Prestation() {

  useEffect(() => {
    document.title = "Prestations";
  }, []);

  return (
<div className='prestationOrientationXxl'>
  <div className='containerEnfantduContainerPagePrestation'>
   <Header className="headerPrestation"/>
    <Header_EL className="header_EL"/> 
    
 
     <h1 className='prestationFirstTitles'>Mes prestations</h1>
    <div className='grid-container-prestations grid-container-prestations-EL'>
<div className="grid-b bB">


    <p>Je suis un spécialiste en isolation placo pour des projets de construction neuve ou de rénovation. En outre, je suis également un professionnel qualifié dans la pose de menuiseries en intérieur et en extérieur, 
    que ce soit en PVC, en aluminium ou en bois. Enfin, je suis également expérimenté dans la pose de plancher et de parquet. Avec plus de 20 ans d'expérience dans le secteur du bâtiment, je suis en mesure de fournir 
    des solutions efficaces pour tous vos projets de construction et de rénovation.</p>
  
<div className='containerimgPrestationMenuiserie'>
<img src='/images/illustrationmenuiserie.jpg' className='imgPrestationMenuiserie'/>
</div>
<h2 className='prestationTitlesSansJaune'>Menuiseries</h2>
<p>Les menuiseries sont un élément clé de tout projet de construction ou de rénovation. Que vous cherchiez à installer de nouvelles portes ou fenêtres en PVC, en aluminium ou en bois, je peux vous aider à trouver la 
    solution la mieux adaptée à vos besoins. Grâce à mon expertise et à mon expérience dans le domaine de la menuiserie, je suis en mesure de vous offrir des conseils précis pour vous aider à choisir les produits les 
    plus adaptés à votre projet.</p>

    <div className='containerimgPrestationMenuiserie'>
<img src='/images/illustration_isolation.jpg' className='imgPrestationMenuiserie'/>
</div>
<h2 className='prestationTitlesSansJaune' >Isolation</h2>
<p>L'isolation est un élément important de tout projet de construction ou de rénovation, car elle permet de réduire les coûts de chauffage et de climatisation tout en améliorant le confort thermique. Je suis spécialisé 
    dans l'isolation des cloisons, des plafonds, des faux plafonds et des doublages. Je peux vous aider à choisir les matériaux d'isolation les plus adaptés à vos besoins et à votre budget, tout en vous garantissant des 
    performances thermiques optimales.</p>

    <div className='containerimgPrestationMenuiserie'>
<img src='/images/illustrationplanchet.jpg' className='imgPrestationMenuiserie'/>
</div>
    <h2 className='prestationTitlesSansJaune' >Planchers et parquets</h2>
<p>La pose de plancher et de parquet est un travail de précision qui nécessite une grande expertise et un souci du détail. Avec plus de 20 ans d'expérience dans ce domaine, je peux vous offrir des conseils personnalisés 
    pour choisir le type de plancher ou de parquet le mieux adapté à vos besoins. Que vous cherchiez à installer un plancher en bois massif, en stratifié ou en vinyle, je suis en mesure de vous fournir un travail de 
    qualité supérieure qui répondra à toutes vos attentes.</p>
<p>En conclusion, si vous cherchez un spécialiste de l'isolation placo, de la pose de menuiseries en intérieur et en extérieur, et de la pose de plancher et de parquet, vous pouvez compter sur mes 20 années d'expérience 
    dans le secteur du bâtiment. Contactez-moi dès maintenant pour en savoir plus sur mes services et pour discuter de votre projet.</p>
  </div>

<div className="grid-c bC">
<FooterPrestations className="blocFooter "/>

</div>


<div className="grid-d  ">
            <div className='centrageLink'>
              <Link to="/mentionslegales"  className='mentionslegalesStyle'>
                MENTIONS LEGALES
              </Link>
            </div>
          </div>
          <div className=" grid-dmobile ">
            <div className='centrageLink'>
              <Link to="/mentionslegales"  className='mentionslegalesStyle'>
                MENTIONS LEGALES
              </Link>
            </div>
          </div>
      
      
      
 </div>     
      
   















</div>

      </div>

  );
}




