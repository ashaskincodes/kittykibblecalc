var restingEnergyRequirements = 1;

function calcRER() {
    weight = document.getElementById('weight').value;
    restingEnergyRequirements = (Math.pow((weight / weightType), 3 / 4) * 70);
}