function calcular() {
    let etanol = parseFloat(document.frmFlex.inputEtanol.value);
    let gasolina = parseFloat(document.frmFlex.inputGasolina.value);

    if (isNaN(etanol) || isNaN(gasolina) || gasolina <= 0) {
        alert("Por favor, insira valores válidos para os combustíveis.");
        return false;
    }

    let imgStatus = document.getElementById("status");

    if (etanol <= 0.70 * gasolina) {
        imgStatus.src = "./img/etanol.png"; // Caminho correto da imagem
    } else {
        imgStatus.src = "./img/gasolina.png"; // Caminho correto da imagem
    }

    return false;
}
