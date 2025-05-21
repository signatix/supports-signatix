// S'assure que le DOM est chargé avant d'exécuter le script
// (Bien que `defer` s'en charge aussi, c'est une bonne pratique si on n'utilise pas `defer` ou pour des modules)
document.addEventListener('DOMContentLoaded', () => {
  // Vérifie si l'objet recommandations est bien chargé (depuis data.js)
  if (typeof recommandations === 'undefined') {
    console.error("L'objet recommandations n'a pas été chargé. Vérifiez l'inclusion de data.js.");
    // Afficher un message d'erreur à l'utilisateur pourrait être une bonne idée ici
    const resultatDiv = document.getElementById("resultat");
    if (resultatDiv) {
        resultatDiv.innerHTML = '<p class="error-message">Erreur : Impossible de charger les données des recommandations.</p>';
    }
    return;
  }

  const usageSelect = document.getElementById("usageSelect");
  const precoForm = document.getElementById("precoForm");
  const resultatDiv = document.getElementById("resultat");

  // Génération dynamique des usages dans le select
  const usages = Object.keys(recommandations);
  usages.forEach(usage => {
    const option = document.createElement("option");
    option.value = usage;
    option.textContent = usage;
    usageSelect.appendChild(option);
  });

  // Gère la soumission du formulaire
  precoForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const usage = usageSelect.value;
    resultatDiv.innerHTML = ""; // Vider les résultats précédents

    if (!usage || !recommandations[usage] || recommandations[usage].length === 0) {
      resultatDiv.innerHTML = '<p class="error-message">Aucun support recommandé trouvé pour cet usage.</p>';
      return;
    }

    const itemsHtml = recommandations[usage].map(rec => {
      let thumbnailUrl = 'https://via.placeholder.com/100x100.png?text=Image+Indisponible'; // Fallback image
      try {
        const productUrl = new URL(rec.url);
        const productId = productUrl.searchParams.get("id");
        if (productId) {
          thumbnailUrl = `https://signatix.fr/img/supports/${productId}/mini.jpg`;
        }
      } catch (error) {
        console.error("Erreur lors de la construction de l'URL de la vignette pour:", rec.nom, error);
      }

      return `
        <li class="support-item">
          <div class="support-details">
            <span class="support-title">${rec.nom}</span><br>
            <span class="support-price">À partir de : ${rec.prix}</span><br>
            <span class="support-delay">Délai de production estimé : ${rec.delai}</span><br>
            <a href="${rec.url}" class="support-link" target="_blank" rel="noopener noreferrer">
              Voir la fiche produit
            </a>
          </div>
          <div class="support-thumbnail">
            <img src="${thumbnailUrl}" alt="Vignette pour ${rec.nom}">
          </div>
        </li>
      `;
    }).join('');

    const html = `
      <h2 class="recommendation-title">Supports recommandés :</h2>
      <ul class="support-list">
        ${itemsHtml}
      </ul>
    `;
    resultatDiv.innerHTML = html;
  });
});

