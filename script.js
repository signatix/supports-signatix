body {
  background: #f5f6fa;
  min-height: 100vh;
  margin: 0;
  padding: 1rem;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.03);
  padding: 1.5rem;
  max-width: 32rem;
  width: 100%;
  border: 4px solid #e6007e;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 5rem;
  height: 5rem;
  margin-bottom: 0.5rem;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  object-fit: contain;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
  color: #e6007e;
}

.subtitle {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #232323;
}

.subtitle-note {
  font-size: 0.95em;
  color: #888;
}

form {
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

select, button {
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  border: 1px solid #e6007e;
  box-sizing: border-box;
}

select:focus, button:focus {
  outline: none;
  border-color: #00adee;
  box-shadow: 0 0 0 2px #00adee44;
}

button {
  background: #e6007e;
  color: #fff;
  font-weight: bold;
  margin-top: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

button:hover {
  background: #00adee;
}

#resultat {
  width: 100%;
}

.support-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Renommé en .support-item si vous avez changé la classe dans le JS, sinon s'applique à .support-list li */
.support-item, .support-list li { /* Appliquons aux deux pour flexibilité */
  display: flex; /* Active Flexbox */
  justify-content: space-between; /* Espace entre les détails et la vignette */
  align-items: flex-start; /* Aligne les éléments en haut */
  margin-bottom: 1rem;
  padding: 0.8em;
  border: 1px solid #ddd; /* Lighter border for each item */
  border-radius: 4px;
  background-color: #fdfdfd; /* Slight background to distinguish items */
}

.support-details {
  flex-grow: 1; /* Permet aux détails de prendre l'espace disponible */
  margin-right: 1em; /* Espace entre les détails et la vignette */
}


.support-title {
  font-weight: bold;
  color: #e6007e;
}

.support-price {
  color: #232323;
  font-size: 0.9em;
}

.support-delay {
  color: #777;
  font-size: 0.9em;
}

.support-link {
  display: inline-block;
  margin-top: 0.5em;
  padding: 0.5em 1em;
  background-color: #e6007e; /* Signatix pink */
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9em;
  transition: background-color 0.2s;
}

.support-link:hover {
  background-color: #c4006b; /* Darker pink on hover */
}

.support-thumbnail {
  flex-shrink: 0; /* Empêche la vignette de rétrécir */
  width: 100px; /* Largeur fixe pour la vignette, ajustez selon vos besoins */
}

.support-thumbnail img {
  width: 100%; /* L'image prend toute la largeur de son conteneur .support-thumbnail */
  height: auto; /* Maintient le ratio de l'image */
  border-radius: 3px;
  border: 1px solid #eee; /* Légère bordure autour de l'image */
}

/* Class for error messages, replacing text-red-500 */
.error-message {
  color: #e53935; /* A standard red for errors */
  margin-top: 1em;
  font-weight: bold;
  text-align: center;
}

/* Class for the title of the recommendations section */
.recommendation-title {
  font-size: 1.2rem;
  color: #e6007e; /* Signatix pink */
  font-weight: bold;
  margin-bottom: 0.8em;
  text-align: left; /* Align to left for list context */
}

/* Responsive - pour petits écrans */
@media (max-width: 600px) {
  .container {
    max-width: 100%;
    padding: 0.8rem;
    border-width: 2px;
  }
  .logo {
    width: 3.5rem;
    height: 3.5rem;
  }
  .title {
    font-size: 1.3rem;
  }
  .support-item, .support-list li {
    flex-direction: column; /* Empile les détails et la vignette sur petits écrans */
  }
  .support-thumbnail {
    width: 80px; /* Réduit la taille de la vignette sur mobile */
    margin-top: 0.5em; /* Ajoute un espace si empilé */
    align-self: center; /* Centre la vignette si empilée */
  }
}

