let areasDeRisco = [];

function mostrarFormulario() {
    document.getElementById("formEndereco").style.display = "block";
    document.getElementById("listaEnderecos").innerHTML = "";
}

function mostrarEnderecos() {
    const lista = areasDeRisco.map((area, index) =>
        `<li>${area.nome} - Lat: ${area.latitude}, Lon: ${area.longitude}, Raio: ${area.raio}km</li>`
    ).join("");
    document.getElementById("listaEnderecos").innerHTML =
        `<h3>Endereços Cadastrados</h3><ul>${lista || "<li>Nenhum endereço cadastrado.</li>"}</ul>`;
    document.getElementById("formEndereco").style.display = "none";
}
function cadastrarEndereco() {
    const nome = document.getElementById("nomeEndereco").value;
    const latitude = parseFloat(document.getElementById("latEndereco").value);
    const longitude = parseFloat(document.getElementById("lonEndereco").value);
    const raio = parseFloat(document.getElementById("raioEndereco").value);

    if (isNaN(latitude) || isNaN(longitude) || isNaN(raio) || !nome) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    areasDeRisco.push({ nome, latitude, longitude, raio });
    alert("Endereço cadastrado com sucesso!");
    document.getElementById("formEndereco").reset();
}
function verificarLocalizacao() {
    if (!navigator.geolocation) {
        alert("Geolocalização não suportada.");
        return;
    }

    navigator.geolocation.getCurrentPosition(pos => {
        const { latitude, longitude } = pos.coords;
        console.log("Localização atual:", latitude, longitude);

        let emRisco = areasDeRisco.some(area => {
            const distancia = calcularDistancia(latitude, longitude, area.latitude, area.longitude);
            return distancia <= area.raio;
        });
        if (emRisco) {
            mostrarAlerta();
        } else {
            mostrarSeguro();
        }

    }, err => {
        alert("Erro ao obter localização: " + err.message);
    });
}
function mostrarAlerta() {
    document.getElementById("alerta").style.display = "block";
    document.getElementById("seguro").style.display = "none";
    document.getElementById("somAlerta").play();
    if (navigator.vibrate) navigator.vibrate([500, 200, 500]);
}

function mostrarSeguro() {
    document.getElementById("seguro").style.display = "block";
    document.getElementById("alerta").style.display = "none";
}
function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function toRad(value) {
    return value * Math.PI / 180;
}