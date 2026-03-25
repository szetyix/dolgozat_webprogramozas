/*
* File: szamolas.js
* Author: Nagy Szemere
* Copyright: 2026, Nagy Szemere
* Group: Szoft I / N
* Date: 2026-03-25
* Github: https://github.com/szetyix
* Licenc: MIT
*/

export function calculateBmi(weight, height) {
	if (!weight || !height || weight <= 0 || height <= 0) {
		return NaN
	}

	return weight / (height * height)
}
