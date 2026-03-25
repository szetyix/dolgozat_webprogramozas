/*
* File: app.js
* Author: Nagy Szemere
* Copyright: 2026, Nagy Szemere
* Group: Szoft I / N
* Date: 2026-03-25
* Github: https://github.com/szetyix
* Licenc: MIT
*/

import { calculateBmi} from './szamolas.js'

const form = document.querySelector('#egesz-form')
const weightInput = document.querySelector('#kilogram')
const heightInput = document.querySelector('#meter')
const bmiOutput = document.querySelector('#bmi-result')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const weight = Number(weightInput.value)
    const height = Number(heightInput.value)

    const bmi = calculateBmi(weight, height)

    if (!isFinite(bmi)) {
        bmiOutput.textContent = 'Hibás bemenet, adj meg pozitív számokat!'
        bmiOutput.id = 'bmi-result-wrong'
        return
    }

    bmiOutput.textContent = bmi.toFixed(2)
    bmiOutput.id = 'bmi-result'
})