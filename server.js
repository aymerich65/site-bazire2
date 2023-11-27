require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const cors = require('cors'); // Importez le module cors

const { Resend } = require('resend'); // Assurez-vous que 'resend' est correctement installé et importé
const resend = new Resend(process.env.RESEND_API_KEY);



const xssFilters = require('xss-filters');
const { body, validationResult } = require('express-validator');


// ajout pr le dossier build
const path = require('path');





// Activez cors en tant que middleware global
app.use(cors());
app.use(express.json()); // Middleware pour analyser les données JSON dans la requête

app.get('/', (req, res) => {
  res.send('Bonjour depuis Express !');
});



app.post('/recup',[
  body('email').isEmail().customSanitizer(value => xssFilters.inHTMLData(value)),
  body('sujet').trim().escape().customSanitizer(value => xssFilters.inHTMLData(value)),
  body('textarea').customSanitizer(value => xssFilters.inHTMLData(value))
], (req, res) => {

  const { email, sujet, textarea } = req.body; // Utilisez "email" comme clé pour extraire l'e-mail du corps JSON
  console.log(`email de l'expéditeur : ${email}`);
  console.log(`texte de l'expéditeur : ${textarea}`);

  // Vous pouvez également extraire d'autres données du corps JSON si nécessaire
  // const { textarea } = req.body;
  // console.log(`texte reçu : ${textarea}`);



  // Insérez l'adresse email en début du champs de texte
   textareavalue = `De : ${email}\n\n${textarea}`;


  // Vous pouvez également extraire d'autres données du corps JSON si nécessaire
  // const { textarea } = req.body;
  // console.log(`texte reçu : ${textarea}`);

  (async function () {
    try {
      await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
         /* to: ['delivered@resend.dev'],*/
      to: ['baziredavid88@gmail.com'],
        subject: sujet,
        html: `De : ${email} <br> ${textarea}`,
      });
  
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  })();

  res.status(200).send("Données reçues avec succès."); // Répondre à la requête

});


// ajout pr le dossier build
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(port, () => {
  console.log(`Le serveur Express écoute sur le port ${port}`);
});