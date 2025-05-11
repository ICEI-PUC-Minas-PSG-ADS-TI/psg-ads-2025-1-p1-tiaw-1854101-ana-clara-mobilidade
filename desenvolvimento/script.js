let mapa;
let marcadorPartida;
let marcadorDestino;
let directionsService;
let directionsRenderer;

// Locais de risco (adicione mais conforme necessário)
const locaisDeRisco = [
    { lat: -23.5505, lng: -46.6333, nome: "Centro de São Paulo" },
    { lat: -23.5629, lng: -46.6544, nome: "Praça da Sé" }
];

function initMap() {
    const localizacaoInicial = { lat: -23.5505, lng: -46.6333 };

    mapa = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 13,
        center: localizacaoInicial
    });

    marcadorPartida = new google.maps.Marker({
        map: mapa,
        title: "Partida"
    });

    marcadorDestino = new google.maps.Marker({
        map: mapa,
        title: "Destino"
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(mapa);

    verificarLocalDeRisco(); // Verifica ao iniciar
    setInterval(verificarLocalDeRisco, 60000); // Verifica a cada minuto
}

function calcularRota() {
    const partida = document.getElementById('partida').value;
    const destino = document.getElementById('destino').value;

    if (!partida || !destino) {
        alert("Por favor, insira os dois endereços.");
        return;
    }

    const request = {
        origin: partida,
        destination: destino,
        travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, function(result, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
            marcadorPartida.setPosition(result.routes[0].legs[0].start_location);
            marcadorDestino.setPosition(result.routes[0].legs[0].end_location);
        } else {
            alert('Erro ao traçar a rota: ' + status);
        }
    });
}

function verificarLocalDeRisco() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicao => {
            const localAtual = {
                lat: posicao.coords.latitude,
                lng: posicao.coords.longitude
            };

            for (const risco of locaisDeRisco) {
                const distancia = calcularDistancia(localAtual, risco);
                if (distancia < 0.5) { // menos de 500 metros
                    alert(`⚠️ CUIDADO! Você está próximo de uma área de risco: ${risco.nome}`);
                    adicionarAlerta(risco.nome);
                    break;
                }
            }
        }, () => {
            alert("Não foi possível obter sua localização.");
        });
    } else {
        alert("Geolocalização não suportada pelo navegador.");
    }
}

function calcularDistancia(ponto1, ponto2) {
    const R = 6371; // Raio da Terra em km
    const dLat = (ponto2.lat - ponto1.lat) * Math.PI / 180;
    const dLng = (ponto2.lng - ponto1.lng) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(ponto1.lat * Math.PI / 180) * Math.cos(ponto2.lat * Math.PI / 180) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function adicionarAlerta(nomeLocal) {
    const lista = document.getElementById("listaAlertas");
    const alerta = document.createElement("div");
    alerta.textContent = `⚠️ Risco detectado em: ${nomeLocal}`;
    alerta.classList.add("alerta-risco");
    lista.prepend(alerta);
}
