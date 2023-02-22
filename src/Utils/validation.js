
// Fonctions de validation de formulaire

export function isEmailValid(email) {
	return email.includes("@") && email.includes(".");
}

export function validationUsername(username) {
	return (validateUsernameTooShort(username) && validateUsernameTooLong(username));
}

export function validateUsernameTooShort(username) {
	return username.length >= 3;
}

export function validateUsernameTooLong(username) {
	return username.length <= 12;
}

export function isPasswordValid(password) {
	return password.length >= 6;
}

export function isUsernameValid(username) {
	return username !== "";
}

export function isConfirmePasswordSameAsPassword(password, confirmPassword) {
	return (password != confirmPassword);
}

// Fontions d'affichage d'erreur pour les formulaire

export function getEmailError(email) {
	if (!isEmailValid(email)) {
		return "Email incorrect !";
	}
	return "";
}

export function getUsernameError(username) {
	if (!validationUsername(username)) {
		if (username === "") {
			return "Username obligatoire!";
		}
		if (!validateUsernameTooShort(username)) {
			return "Username trop court!";
		} else if (!validateUsernameTooLong(username)) {
			return "Username trop long!";
		}
	}
	return "";
}

export function Error_password(password) {
	if (!validationUsername(password)) {
		return "Mot de passe trop court!";
	}
	return "";
}

export function getError_confirmPassword(password, confirmPassword) {
	if (password != confirmPassword) {
		return "Les mots de passes ne sont pas identiques!";
	}
	return "";
}

