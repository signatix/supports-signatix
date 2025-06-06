# Assistant de Préconisation Signatix

Ce projet web propose un assistant permettant de recommander en quelques clics les supports d'impression les plus adaptés selon l'usage attendu, sur la base du catalogue Signatix. L'outil est simple, rapide et orienté métier : il vise à fiabiliser la recommandation produit pour les professionnels de la communication visuelle, signalétique, événementiel ou décoration.

## Fonctionnalités

- Sélection de l’usage final (vitrine, véhicule, signalétique, etc.)
- Affichage immédiat des supports recommandés avec prix, délai, et lien direct vers la fiche produit Signatix
- Interface responsive et moderne (mobile & desktop)
- Catalogue de recommandations maintenu dans un fichier structuré (`data.js`)
- Zéro dépendance externe, déploiement ultra-simple

## Démo rapide

1. Ouvrir `index.html` dans un navigateur.
2. Choisir un usage dans la liste déroulante.
3. Visualiser les supports proposés, comparer, accéder au site Signatix pour commander.

## Structure du projet

```
├── index.html         # Interface principale utilisateur
├── style.css          # Styles et responsive design
├── script.js          # Logique dynamique (JavaScript Vanilla)
├── data.js            # Recommandations usage/produits (catalogue Signatix)
├── favicon.ico        # Icône du projet
```

## Modifier le catalogue

Tout est dans `data.js` : il suffit de modifier ce fichier pour ajouter, retirer ou mettre à jour les usages ou les supports recommandés, sans toucher au reste du code.

## Technologies

- HTML5, CSS3 (Flexbox, responsive)
- JavaScript natif (aucune dépendance, aucune compilation)

## Cas d’usage

- Agences de communication
- Chargés d’affaires en impression
- Décorateurs, enseignes, TPE/PME
- Toute personne devant choisir rapidement un support adapté

## Roadmap & perspectives

- Filtres avancés (écologique, économique, délai…)
- Connexion API Signatix pour catalogue en temps réel
- Version multilingue
- Connexion client SSO

## Auteur

Développé par Frédéric DEBAILLEUL, chargé de développement.

---

Ce projet vise à fiabiliser la recommandation de supports d’impression pour tous les pros du secteur. Pour toute suggestion ou contribution, ouvre une issue ou une pull request.  
Vision simple : moins d’hésitation, plus d’efficacité.
