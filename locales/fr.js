export default {
	app: {
		name: "Plogg",
		error: "Erreur",
		rules: {
			required: "Ce champs est requis.",
			min: "Vous devez entrer au moins {min} caractères.",
			minValue: "Vous devez entrer un chiffre égal ou supérieur à {min}.",
			max: "Vous devez entrer au maximum {max} caractères.",
			maxValue: "Vous devez entrer un chiffre égal ou inférieur à {max}.",
			email: "Adresse courriel invalide.",
			phone: "Numéro de téléphone invalide.",
			password:
				"Mot de passe invalide, il doit contenir au minimum 8 caractères et au moins une lettre minuscule, majuscule et un chiffre.",
		},
		sku: "SKU",
		itemStatus: {
			draft: "Brouillon",
			published: "Publié",
			archived: "Archivé",
		},
		table: {
			perPage: "Items par page:",
			loading: "Chargement des données...",
			noData: "Aucune donnée disponible.",
			noResult: "Aucun résultat trouvé.",
		},
		channels: {
			app: "Application",
			web: "Site web",
		},
	},
}
