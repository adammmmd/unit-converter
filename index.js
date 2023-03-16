const inputUnit = document.getElementById('unit-input')
const convertBtn = document.getElementById('convert')
const conLength = document.getElementById('length-convert')
const conVolume = document.getElementById('volume-convert')
const conMass = document.getElementById('mass-convert')

function lengthConvert(unit) {
    const unitValue = Number(unit.value)
    const meterToFeet = unitValue * 3.28084
    const feetToMeter = unitValue * 0.3048

    return `${unitValue} meters = ${meterToFeet.toFixed(3)} feet | ${feetToMeter.toFixed(3)} feet = 6.096 meters`
}

function volumeConvert(unit) {
    const unitValue = Number(unit.value)
    const literToGalon = unitValue * 0.264172
    const galonTOGalon = unitValue * 3.785

    return `${unitValue} liters = ${literToGalon.toFixed(3)} gallons | ${unitValue} gallons = ${galonTOGalon.toFixed(3)} liters`
}

function massConvert(unit) {
    const unitValue = Number(unit.value)
    const kiloToPound = unitValue * 2.20462
    const poundToKilo = unitValue * 0.45359

    return `${unitValue} kilos = ${kiloToPound.toFixed(3)} pounds | ${unitValue} pounds = ${poundToKilo.toFixed(3)} kilos`
}

function renderConvert() {
    conLength.textContent = lengthConvert(inputUnit)
    conVolume.textContent =  volumeConvert(inputUnit)
    conMass.textContent = massConvert(inputUnit)
}

convertBtn.addEventListener('click', renderConvert)