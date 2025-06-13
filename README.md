# Assistant de Préconisation Signatix

Application web recommandant les supports d'impression adaptés à chaque usage, catalogue Signatix enrichi, affichage immédiat des fiches produits, prix, délais, vignettes visuelles associées à chaque support.

## Fonctionnalités

- Sélection de l’usage final (vitrine, véhicule, signalétique, etc.)
- Bouton de réinitialisation
- Affichage des supports recommandés : prix, délai, lien direct fiche produit, vignette illustrative
- Interface responsive (desktop/mobile)
- Catalogue de recommandations dans `data.js`
- Mapping automatique fiche produit/vignette dans `data.js` via objet `vignettesProduits`
- Zéro dépendance externe, déploiement instantané

## Démo rapide

1. Ouvrir `index.html` dans un navigateur
2. Choisir un usage dans la liste déroulante
3. Visualiser les supports proposés, comparer, accéder au site Signatix ou la fiche produit (avec vignette)

## Structure du projet

```
├── index.html         # Interface utilisateur
├── style.css          # Styles
├── script.js          # Logique dynamique (affichage, interaction, gestion vignettes)
├── data.js            # Catalogue usages/produits + mapping vignettes
├── favicon.ico        # Icône du projet
```

## Modifier le catalogue / Ajouter une vignette

- Les usages, recommandations et liens fiches produits : dans l’objet `recommandations` de `data.js`
- Le mapping vignette produit/fiche produit : objet `vignettesProduits` (clé : url fiche, valeur : url vignette)
- Les correspondances peuvent être exportées et intégrées automatiquement depuis un fichier Excel via script
- Pour ajouter une vignette : ajouter ou modifier la clé correspondante dans `vignettesProduits`

## Technologies

- HTML5, CSS3
- JavaScript natif (aucune dépendance)

## Cas d’usage

- Agences de communication
- Chargés d’affaires impression
- Décorateurs, enseignes, PME
- Toute personne devant choisir rapidement un support adapté

## Auteur

Frédéric DEBAILLEUL

---
Optimisation de la fiabilité de la recommandation pour les pros du secteur. Suggestions, contributions via issue ou pull request.
