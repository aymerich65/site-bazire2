
import { useForm } from "react-hook-form";
import '../style.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'; // Importez useState

export default function Formulaire_EcranLarge() {
  const { register, handleSubmit } = useForm();
  const [isMailSent, setIsMailSent] = useState(false); // Ajout de l'état pour le suivi de l'envoi de l'email

  const envoiData = async (data) => {
    console.log(data);

    try {
      const response = await fetch("http://localhost:3001/recup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la requête.");
      }

      setIsMailSent(true); // Mise à jour de l'état si l'email est envoyé avec succès

      // Le reste de votre traitement ici (si nécessaire)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contactform">
      {isMailSent ?<div className="confirmationEnvoiEmail">Email expédié</div> :(<>
      <div className="blocContactContainerA"><h1>Besoin d'un renseignement? Contactez moi:</h1></div>
      <div className="blocContactContainerB">
        <form onSubmit={handleSubmit(envoiData)}>
            <label htmlFor="email">Votre email:</label><br/>
            <input type="email" id="email" name="email" {...register("email")} /><br/>
            <label htmlFor="sujet">Sujet:</label><br/>
            <input type="sujet" id="sujet" name="sujet" {...register("sujet")} /><br/>
            <label htmlFor="textarea">Votre texte:</label><br/>
            <textarea id="textarea" name="textarea" className="textareaEL" {...register("textarea")} /><br/>
            <button type="submit">Envoyer</button>
        </form>
    </div>
</>)}
    </div>

  );
}
