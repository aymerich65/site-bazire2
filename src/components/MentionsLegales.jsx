import { Link } from "react-router-dom";    
import Header from './Header';
import Footer from './Footer';
import Header_EL from './Header_EL';
import '../styleMentionsLegales.css';
import React, { useEffect } from 'react';

export default function MentionsLegales() {

  useEffect(() => {
    document.title = "Mentions Légales";
  }, []);



  return (
    <>

    <div className='grid-container-mentionslegales'>
    <div className="grid-a bA">
    <Header/>
    </div>

<div className="mentionsLegalesContainer "> 

<h2>Mentions légales</h2>
        <p>
          Le site BAZIRE David Artisan plaquiste est édité par Aymerich MONTOYA.
          L'entreprise BAZIRE David est une entreprise individuelle immatriculée au Registre du Commerce et des Sociétés de Rouen sous le numéro 921 431 995 00015.
        </p>
        <p>Le directeur de la publication est BAZIRE David.</p>
        <p>Pour toute question ou demande d'information concernant le site, vous pouvez passer par l'espace contact </p>
        <h2>Hébergement</h2>
        <p>Ce site est hébergé par <strong>Hidora</strong>.</p>
        <p>Adresse de Hidora: Rue des Charmilles 8, 1203 Genève, Suisse</p>
        <h2>Propriété intellectuelle :</h2>
        <p>
  L'illustration de lien vers la page contact sur l'accueil et des prestations de menuiserie sur la page de prestations ont été générées avec le créateur d'images Bing Image Creator : <a className="amentionleg" href="https://www.bing.com/create?utm_source=bdmtools&utm_medium=siteweb&utm_campaign=bing-image-creator">https://www.bing.com/create?utm_source=bdmtools&utm_medium=siteweb&utm_campaign=bing-image-creator</a>.
</p>
<p>
  Les photos d'illustration des prestations d'isolation et de pose de planchers et parquets sont issues de la galerie d'images en ligne Freepik : <a className="amentionleg" href="https://fr.freepik.com/">https://fr.freepik.com/</a>.
</p>
        <h2>Données personnelles :</h2>
        <p>
  L'entreprise BAZIRE David utilise l'API "Resend" pour la gestion et le filtrage des emails envoyés via le site. Ce processus vise à renforcer la sécurité des emails avant leur réception par l'entreprise.
</p>
<div><Link to="/"  className="retourAccueil"> <svg xmlns="http://www.w3.org/2000/svg" width="3.5%" height="auto" fill="darkgrey" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg>Retour à l'accueil </Link></div>
</div>     
<div className="grid-c bC">
<Footer/>
</div>
<div className="grid-d ">
            <div className='centrageLink'>
              <Link to="/mentionslegales"  className='mentionslegalesStyle'>
               
              </Link>
            </div>
          </div>
 </div>  



 <div className="containerMentionLegalesEcranLArge ">
  <div className="blocEnfant">
 <Header_EL/>
 <div className="MentionLegalesEcranLArgeTexte"> 

<h2>Mentions légales</h2>
        <p>
          Le site BAZIRE David Artisan plaquiste est édité par Aymerich MONTOYA.
          L'entreprise BAZIRE David est une entreprise individuelle immatriculée au Registre du Commerce et des Sociétés de Rouen sous le numéro 921 431 995 00015.
        </p>
        <p>Le directeur de la publication est BAZIRE David.</p>
        <p>Pour toute question ou demande d'information concernant le site, vous pouvez passer par l'espace contact </p>
        <h2>Hébergement</h2>
        <p>Ce site est hébergé par <strong>Hidora</strong>.</p>
            <p>Adresse de Hidora: Rue des Charmilles 8, 1203 Genève, Suisse</p>
        <h2>Propriété intellectuelle :</h2>
        <p>
          Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit est interdite, sauf autorisation écrite préalable de l'entreprise BAZIRE David Artisan plaquiste.
        </p>
        <p>
  L'illustration de lien vers la page contact sur l'accueil et des prestations de menuiserie sur la page de prestations ont été générées avec le créateur d'images Bing Image Creator : <a href="https://www.bing.com/create?utm_source=bdmtools&utm_medium=siteweb&utm_campaign=bing-image-creator">https://www.bing.com/create?utm_source=bdmtools&utm_medium=siteweb&utm_campaign=bing-image-creator</a>.
</p>
<p>
  Les photos d'illustration des prestations d'isolation et de pose de planchers et parquets sont issues de la galerie d'images en ligne Freepik : <a href="https://fr.freepik.com/">https://fr.freepik.com/</a>.
</p>
<h2>Données personnelles :</h2>

        <p>
  L'entreprise BAZIRE David utilise l'API "Resend" pour la gestion et le filtrage des emails envoyés via le site. Ce processus vise à renforcer la sécurité des emails avant leur réception par l'entreprise.
</p>
</div>     
  </div></div>

 


</>
  );
}
