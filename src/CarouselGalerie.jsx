  import React, { useState, useEffect } from 'react';

export default function CarouselGalerie(){

      const imagesAccueil = [
        'amenagement_de_combles_photo_1_.jpg',
        'amenagement_de_combles_photo_2_.jpg',
        'amenagement_de_combles_photo_3_.jpg',
      ];
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === imagesAccueil.length - 1 ? 0 : prevIndex + 1
          );
        }, 5000);
    
        // Nettoyez l'intervalle lorsque le composant est démonté
        return () => {
          clearInterval(timer);
        };
      }, []);
    
      return (
        <div>
          <img 
            src={`/images/${imagesAccueil[currentImageIndex]}`}
            alt={`Image ${currentImageIndex + 1}`}
            className="fullscreen-image"
          />
        </div>
      );
    };
    

