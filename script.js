document.addEventListener('DOMContentLoaded', () => {
  // --- Vérification initiale ---
  if (typeof recommandations === 'undefined') {
    console.error("L'objet recommandations n'a pas été chargé. Vérifiez que data.js est bien inclus AVANT script.js dans votre HTML.");
    document.getElementById('resultat').innerHTML = `
      <p class="text-center text-red-600 font-semibold">
        Erreur critique : les données de recommandation sont introuvables.
      </p>`;
    return;
  }

  // --- Sélection des éléments du DOM ---
  const usageSelect = document.getElementById("usageSelect");
  const resultatDiv = document.getElementById("resultat");
  const resetButton = document.getElementById('resetButton');

  // --- Fonctions ---

  /**
   * Affiche l'état initial (message d'accueil)
   */
  const showInitialState = () => {
    resultatDiv.innerHTML = `
      <div class="text-center p-8 bg-white rounded-2xl border border-slate-200 fade-in">
         <svg class="mx-auto h-16 w-16 text-slate-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="mt-4 text-2xl font-bold text-slate-800">En attente de votre sélection</h3>
        <p class="mt-1 text-slate-500">Choisissez une catégorie ci-dessus pour commencer.</p>
      </div>
    `;
    resetButton.classList.add('hidden');
  };

  /**
   * Affiche les résultats pour un usage donné
   * @param {string} usage - La clé de l'usage sélectionné
   */
  const showResults = (usage) => {
    const results = recommandations[usage];
    
    if (!results || results.length === 0) {
      resultatDiv.innerHTML = `
        <p class="text-center font-semibold text-slate-600 fade-in">
          Aucun support recommandé trouvé pour cet usage.
        </p>`;
      return;
    }

    // Création des cartes de résultats
    const cardsHTML = results.map(rec => `
      <li class="bg-white rounded-xl border border-slate-200 p-6 flex flex-col hover:shadow-lg hover:border-pink-300 transition duration-300 fade-in">
        <h3 class="text-xl font-bold text-slate-900 flex-grow">${rec.nom}</h3>
        <div class="mt-4 space-y-3 text-left">
          <p class="flex items-center text-slate-600">
            <svg class="w-5 h-5 mr-3 text-pink-500 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.75 1.152.983 5.46a.75.75 0 00-.483.693V17.25a.75.75 0 00.75.75h17.5a.75.75 0 00.75-.75V6.153a.75.75 0 00-.483-.693L11.25 1.152a.75.75 0 00-.5 0zM10 6.5a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0V6.5zM10 12a1 1 0 100-2 1 1 0 000 2zM5.25 8a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0V8zM15 9.5a1 1 0 11-2 0 1 1 0 012 0zM7 12a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 10-2 0 1 1 0 002 0z"></path></svg>
            <span class="font-semibold mr-2">Prix :</span> ${rec.prix}
          </p>
          <p class="flex items-center text-slate-600">
            <svg class="w-5 h-5 mr-3 text-pink-500 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd"></path></svg>
            <span class="font-semibold mr-2">Délai :</span> ${rec.delai}
          </p>
        </div>
        <a href="${rec.url}" target="_blank" rel="noopener noreferrer" class="mt-6 w-full inline-flex items-center justify-center px-4 py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-200">
          Voir la fiche produit
          <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6.75A.75.75 0 0114.25 6h2.25a.75.75 0 01.75.75v2.25m-4.5 0H18M18 6l-7.5 7.5"></path></svg>
        </a>
      </li>
    `).join('');

    const html = `
      <div class="fade-in">
        <h2 class="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-6">
          Supports recommandés pour : <span class="text-pink-600">${usage}</span>
        </h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${cardsHTML}
        </ul>
      </div>
    `;

    resultatDiv.innerHTML = html;
    resetButton.classList.remove('hidden');
  };

  // --- Initialisation ---

  // Peuple le select avec les usages disponibles depuis data.js
  const usages = Object.keys(recommandations);
  usages.forEach(usage => {
    const option = document.createElement("option");
    option.value = usage;
    option.textContent = usage;
    usageSelect.appendChild(option);
  });
  
  // Affiche l'état initial au chargement
  showInitialState();

  // --- Écouteurs d'événements ---

  // Affiche les résultats dès qu'un usage est sélectionné
  usageSelect.addEventListener("change", function() {
    showResults(this.value);
  });
  
  // Gère la réinitialisation
  resetButton.addEventListener('click', function() {
    usageSelect.value = "";
    showInitialState();
  });
});
