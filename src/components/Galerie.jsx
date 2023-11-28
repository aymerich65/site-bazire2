import React, { useState,useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from './Header';
import MentionsLegales from './MentionsLegales';
import { Link } from 'react-router-dom';
import FooterPrestations from './FooterPrestations';
import Header_EL from './Header_EL';
import '../stylegalerie.css';
import FooterGalerie from './FooterGalerie'


export default function Galerie() {

  useEffect(() => {
    document.title = "Galerie";
  }, []);


  const myImages = [
    {
      src: 'images/amenagement_de_combles_photo_1_.jpg',
      alt: 'Image 1',
      description: 'Aménagement de combles.',
      ajust: 'center',
    },
    {
      src: 'images/amenagement_de_combles_photo_2_.jpg',
      alt: 'Image 2',
      description: 'Aménagement de combles.',
    },
    {
      src: 'images/amenagement_de_combles_photo_3_.jpg',
      alt: 'Image 3',
      description: 'Aménagement de combles.',
      ajust: 'center',
    },
    {
      src: 'images/implantion_cloisons.jpg',
      alt: 'Image 4',
      description: 'Implantation de cloisons sur pavillon neuf.',
    },
    {
      src: 'images/pose_d\'un_revetement.jpg',
      alt: 'Image 5',
      description: 'Pose d\'un revêtement de sol en dalles vinyles 30x60',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function avancer() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % myImages.length);
  }

  function reculer() {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + myImages.length) % myImages.length);
  }

  return (
    <>
    <div>
      <Header className="header" />


      <div className='grid-container-galerie galerie'>
        <div className="grid-b bBgalerie" style={{ overflow: 'hidden', maxWidth: '100%', height: '100%', marginBottom: '100vh' }} >
          <Carousel showArrows={true} showThumbs={false} selectedItem={currentIndex} onChange={setCurrentIndex} className='carousel'>
            {myImages.map((image, index) => (
              <div key={index}>
                <img src={image.src} alt={image.alt} />
                <div className="blocImgGalerieDescription">
                  <p >{image.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="grid-c bC">
          <FooterGalerie />
        </div>
        <div className="grid-dmobile ">
            <div className='centrageLink'>
              <Link to="/mentionslegales"  className='mentionslegalesStyle'>
                MENTIONS LEGALES
              </Link>
            </div>
          </div>
      </div>
</div>







<div className='ContainerGalerie'>   
  <div className='ContainerGalerieEnfant'>
     <Header_EL className="header_EL"/> 
      <div className='blocgalerie_EL'>    
        <div className='titreGalerie  align-items-center'> <h1 className=''>GALERIE </h1><svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  className="bi bi-camera-fill " viewBox="0 0 16 16">
  <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
</svg></div>
  {myImages.map((photo, index) => (
    <div key={index} className='divParentImggalerie_EL'>
      <div className={photo.ajust ?'divParentImggalerie_ELajustCenter' :null}>
        <img src={photo.src} alt={photo.alt} className='styleimggalerie_EL  blocAimggalerie_EL'/>
        <div className='blocBimggalerie_ELtexte '><p>{photo.description}</p></div></div>
    </div>
  ))}

</div>
    <div className="grid-d ">
            <div className='centrageLink'>
              <Link to="/mentionslegales"  className='mentionslegalesStyle'>
                MENTIONS LEGALES
              </Link>
            </div>
          </div>
          </div>
</div>




    </>
  );
}
