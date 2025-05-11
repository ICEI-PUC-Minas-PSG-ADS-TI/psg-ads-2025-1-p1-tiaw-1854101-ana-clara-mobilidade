
// Código feito para simular uma área de risco
const areasDeRisco = [
    { latitude: -19.9245, longitude: -43.9352, raio: 0.5 }, // Exemplo: centro de BH
    { latitude: -23.5505, longitude: -46.6333, raio: 1.0 }  // Exemplo: centro de SP
];

function verificarLocalizacao() {
    if (!navigator.geolocation) {
        alert("Geolocalização não suportada.");
        return;
    }

    navigator.geolocation.getCurrentPosition(pos => {
        const { latitude, longitude } = pos.coords;
        console.log("Localização:", latitude, longitude);

        let emAreaDeRisco = areasDeRisco.some(area => {
            const distancia = calcularDistancia(latitude, longitude, area.latitude, area.longitude);
            return distancia <= area.raio;
        });

        if (emAreaDeRisco) {
            mostrarAlerta();
        } else {
            alert("Você está em uma área segura.");
        }
    }, err => {
        alert("Erro ao obter localização: " + err.message);
    });
}

function mostrarAlerta() {
    document.getElementById("alerta").style.display = "block";

    // Som de alerta
    const audio = document.getElementById("somAlerta");
    audio.play();

    // Vibração (se suportado)
    if (navigator.vibrate) {
        navigator.vibrate([500, 300, 500]);
    }
}

// Função para calcular a distância entre dois pontos em km
function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function toRad(value) {
    return value * Math.PI / 180;
}
