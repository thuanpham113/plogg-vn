export default {
	app: {
		name: "Plogg",
		error: "Error",
		rules: {
			required: "This field is required.",
			min: "You must enter at least {min} characters.",
			minValue: "You must enter a number greater or equal to {min}.",
			max: "You must enter at most {max} characters.",
			maxValue: "You must enter a number smaller or equal to {max}.",
			email: "Invalid email address.",
			phone: "Invalid phone number.",
			password:
				"Invalid password, it must contain at least 8 characters and at least one uppercase, lowercase and numeric character.",
		},
		sku: "SKU",
		itemStatus: {
			draft: "Draft",
			published: "Published",
			archived: "Archived",
		},
		table: {
			perPage: "Items per page:",
			loading: "Loading data...",
			noData: "No data available.",
			noResult: "No result found.",
		},
		channels: {
			app: "Application",
			web: "Website",
		},
	},
}
