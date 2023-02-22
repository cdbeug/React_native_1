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