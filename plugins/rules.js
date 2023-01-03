const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_REGEX = /^[0-9-_() +.# ]*$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export default ({ app }, inject) => {
	inject("rules", {
		required: value => !!value || app.i18n.t("app.rules.required"),
		minLength: (value, min) => !value || value.length >= min || app.i18n.t("app.rules.min", { min }),
		minValue: (value, min) => !value || value >= min || app.i18n.t("app.rules.minValue", { min }),
		maxLength: (value, max) => !value || value.length <= max || app.i18n.t("app.rules.max", { max }),
		maxValue: (value, max) => !value || value <= max || app.i18n.t("app.rules.maxValue", { max }),
		email: (value) => {
			return !value || EMAIL_REGEX.test(value) || app.i18n.t("app.rules.email");
		},
		phone: (value) => {
			return !value || PHONE_REGEX.test(value) || app.i18n.t("app.rules.phone");
		},
		password: (value) => {
			return !value || PASSWORD_REGEX.test(value) || app.i18n.t("app.rules.password");
		}
	});
};
