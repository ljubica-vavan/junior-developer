function izracunajBMI() {

    var nTezina = Number(document.getElementById('tezina').value);
    var nVisinaCentimentri = Number(document.getElementById('visina').value);
    var txtPoruka = "ra";


    if (nTezina > 0 && nVisinaCentimentri > 0) {


        var nVisinaMetri = nVisinaCentimentri / 100;

        var finalBmi = (nTezina / Math.pow(nVisinaMetri, 2)).toFixed(2);

        if (finalBmi <= 18.5) {
            txtPoruka = "Pothranjenost!"
        }
        if (finalBmi > 18.5 && finalBmi < 25.0) {
            txtPoruka = "Normalna težina."
        }
        if (finalBmi >= 25.0) {
            txtPoruka = "Višak kilograma!"
        }

        document.getElementById('rezultat').value = txtPoruka;
        document.getElementById('BMI').value = finalBmi;

    }
}
