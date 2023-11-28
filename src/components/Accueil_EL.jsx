
import { Carousel } from 'bootstrap';
import '../styleaccueillarge.css';
import Header_EL from './Header_EL';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';




export default function Accueil_EL() {

  const tableauElements = ['containerimg01','containerimg02','containerimg03'];
  const [elementActif, setElementActif] = useState(tableauElements[0]);


  useEffect(() => {
    const interval = setInterval(() => {
      // Trouver l'indice de l'élément actif dans le tableau
      const indiceActif = tableauElements.indexOf(elementActif);

      // Calculer l'indice du prochain élément (bouclage)
      const prochainIndice = (indiceActif + 1) % tableauElements.length;

      // Mettre à jour l'élément actif avec le prochain élément du tableau
      setElementActif(tableauElements[prochainIndice]);
    }, 8000); // 3 secondes

    return () => {
      clearInterval(interval);
    };
  }, [tableauElements]);







  return (
 <div className="grid-container-accueil_EL">
  <Header_EL />
  <div className='carouselAccueilEcranLarge'>



  {tableauElements.map((containerClass, index) => (
    <div
      key={index}
      className={` ${containerClass === elementActif ? 'active' : 'inactive'}`}
    >
      {/* Ajoutez du contenu à l'intérieur du bloc */}
      {containerClass === 'containerimg01' && (


    <div className="containerimg01">
      <div className="blocEnfantAContainerimg01"><img src="images/imageprestatiosnaccueil_EL.jpg" alt="Image 1" className='img_accueil_ELTest img-fluid' /></div>
     <div className="blocEnfantBContainerimg01">
      <div className='blocBorduresTexteBlocEnfantBContainerimg01'><div className="titreBlocEnfantBContainerimg01"><h2><Link className="titreBlocEnfant" to="/prestations">Découvrez mes prestations</Link></h2>
        <div className='texteBlocEnfantBContainerimg01'>
          <Link to="/prestations" className='text_containerimg01 styleAdditionnelText'><p>En tant que spécialiste de l'isolation, je vous offre un large éventail de services pour répondre à vos besoins.
           Mon expertise comprend l'isolation de Cloisons, Plafonds, Faux plafonds et Doublages, ainsi que des compétences avancées en Menuiserie avec Aluminium, PVC, Bois et Pose de parquets. 
           Mon objectif est de vous fournir des solutions de qualité qui amélioreront votre environnement.  <span style={{ fontWeight: "bold" }}>Cliquez ici</span> pour explorer l'ensemble de mes prestations et découvrez comment je peux contribuer à votre projet.
          </p></Link></div>
          </div>
        </div>
      </div>
    </div>)}










   {/* Ajoutez du contenu à l'intérieur du bloc */}
   {containerClass === 'containerimg02' && (
    <div className="containerimg02">
  <div className="blocEnfantAContainerimg02">
    <img 
      src="./images/galeireiconephotos2.jpg" 
      alt="Image 1" 
      className='img_accueil_ELTest2 img-fluid' 
    />
  </div>
  <div className="blocEnfantBContainerimg02">
    <div className='blocBorduresTexteBlocEnfantBContainerimg02'>
      <div className="titreBlocEnfantBContainerimg02">
        <h2><Link className="titreBlocEnfant" to="/galerie">FAITE UN TOUR PAR LA GALERIE</Link></h2>
        <div className='texteBlocEnfantBContainerimg02'>
          <Link to="/galerie" className='text_containerimg02 styleAdditionnelText'>
            <p>Donnez-vous un aperçu de mon savoir-faire à travers ma galerie qui illustre quelques chantiers réalisés. 
      Chaque image est le reflet de mon engagement pour la qualité et l'expertise dans chaque projet. Je vous encourage à jeter un œil et à découvrir l'étendue de mon expérience.
</p>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>)}





   {/* Ajoutez du contenu à l'intérieur du bloc */}
   {containerClass === 'containerimg03' && (
<div className="containerimg03">
  <div className="blocEnfantAContainerimg03">
    <img 
      src="./images/imagecontactaccueil_EL.jpg" 
      alt="Image 1" 
      className='img_accueil_ELTest3 img-fluid' 
    />
  </div>
  <div className="blocEnfantBContainerimg03">
    <div className='blocBorduresTexteBlocEnfantBContainerimg03'>
      <div className="titreBlocEnfantBContainerimg03">
        <h2><Link className="titreBlocEnfant3" to="/contact">CONTACTEZ MOI <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg></Link></h2>
        <div className='texteBlocEnfantBContainerimg03'>
          <Link to="/contact" className='text_containerimg02 styleAdditionnelText'>
            <p>Vous avez des questions ou besoin d'un devis personnalisé ? Je suis à votre entière disposition pour vous apporter toutes les informations dont vous pourriez avoir besoin. 
              N'hésitez pas à me contacter, et je m'engage à vous répondre dans les plus brefs délais. Votre projet mérite une attention particulière, et je suis là pour vous assurer un service sur mesure. 
              Rendez-vous sur ma page de contact.
</p>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>)}                                                              



</div>                                    
 ))}

<div className="grid-dportrait ">
            <div className='centrageLink'>
              <Link to="/mentionslegales"  className='mentionslegalesStyle'>
                MENTIONS LEGALES
              </Link>
            </div>
          </div>




  </div>
  <div className="grid-d ">
            <div className='centrageLink'>
              <Link to="/mentionslegales"  className='mentionslegalesStyle'>
                MENTIONS LEGALES
              </Link>
            </div>
          </div>
 </div>
   );
}
                                                                                      