function calcular() {
    let nome = document.getElementById("nome").value
    let alt = document.getElementById("alt").value.replace(",",".")
    let peso = document.getElementById("peso").value.replace(",",".")
    let imc = Number((peso/(alt*alt)).toFixed(2))
    let res = document.getElementById("res")
    if (alt === "" || peso === ""){
        window.alert('Preencha os dados corretamente!')
    } else {
        if (imc<18.5) {
            res.innerHTML = `<b>Atenção ${nome}, seu IMC é de ${imc} e está na classificação de magreza</b>`
        } else if (imc >= 18.5 && imc <= 24.99) {
            res.innerHTML = `<b>Parabéns ${nome}, seu IMC é de ${imc} e está na classificação de normalidade</b>`
        } else if (imc >= 25 && imc <= 29.99) {
            res.innerHTML = `<b>Atenção ${nome}, seu IMC é de ${imc} e está na classificação de sobrepeso</b>`
        } else if (imc >= 30 && imc <= 39.99) {
            res.innerHTML = `<b>Cuidado ${nome}, seu IMC é de ${imc} e está na classificação de obesidade</b>`
        } else {
            res.innerHTML = `<b>Procure um médico ${nome}, seu IMC é de ${imc} e está na classificação de obesidade grave</b>`
        }
        let teste = document.getElementById("teste")
        let image = document.createElement("img")
        image.src = "teste.jpg"
        teste.appendChild(image)
    }
    }
   
