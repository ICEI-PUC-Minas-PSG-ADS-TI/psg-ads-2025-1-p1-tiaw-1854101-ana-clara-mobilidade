//inicio paula
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
    const localizacaoInicial = { lat: -19.92667, lng: -43.98222 };

    mapa = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 12,
        center: localizacaoInicial
    });
   const bicyclingLayer = new google.maps.BicyclingLayer();
   bicyclingLayer.setMap(mapa);

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(mapa);

    verificarLocalDeRisco(); // Verifica ao iniciar
    setInterval(verificarLocalDeRisco, 60000); // Verifica a cada minuto
    const trafficLayer = new google.maps.TrafficLayer();

    trafficLayer.setMap(mapa);
     const bikeLayer = new google.maps.BicyclingLayer();
        bikeLayer.setMap(mapa);
}
window.initMap = initMap;
function calcularRota() {
    const partida = document.getElementById('partida').value;
    const destino = document.getElementById('destino').value;

    if (!partida || !destino) {
        alert("Por favor, preencha os campos de partida e destino.");
        return;
    }
    const request = {
        origin: partida,
        destination: destino,
        travelMode: google.maps.TravelMode.DRIVING,
    };

     directionsService.route(request, (result, status) => {
          if (status == "OK") {
            directionsRenderer.setDirections(result);
          } else {
            alert("Erro ao traçar rota: " + status);
          }
    });
}
let rotas = JSON.parse(localStorage.getItem("rotasAnteriores")) || [];
    rotas.push(rota);
    localStorage.setItem("rotasAnteriores", JSON.stringify(rotas));

    console.log("Rota salva:", rota);

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
//fim paula
// Mateus:
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

      function acessarRotasAnteriores() {
        // Redireciona para a página de rotas anteriores
        window.location.href = "rotasanteriores.html";
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
    window.onload = () => {
    const rota = JSON.parse(localStorage.getItem("rotaTemporaria"));
    if (rota) {
        document.getElementById("Partida").value = rota.partida;
        document.getElementById("Destino").value = rota.destino;
        localStorage.removeItem("rotaTemporaria"); // remove após carregar
    }
    };

    function toRad(value) {
      return value * Math.PI / 180;
    }//Fim Mateus


    //inicio Livia
    (function() {
    const birthDateInput = document.getElementById('birthDate');
    const today = new Date().toISOString().split('T')[0];
    birthDateInput.setAttribute('max', today);

    const form = document.getElementById('registrationForm');
    const fields = {
      fullName: { elem: document.getElementById('fullName'), errorElem: document.getElementById('fullNameError') },
      email: { elem: document.getElementById('email'), errorElem: document.getElementById('emailError') },
      password: { elem: document.getElementById('password'), errorElem: document.getElementById('passwordError') },
      confirmPassword: { elem: document.getElementById('confirmPassword'), errorElem: document.getElementById('confirmPasswordError') },
      birthDate: { elem: birthDateInput, errorElem: document.getElementById('birthDateError') }
    };
    const successMessageElem = document.getElementById('successMessage');

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email.toLowerCase());
    }

    function clearErrors() {
      Object.values(fields).forEach(f => f.errorElem.textContent = '');
      successMessageElem.textContent = '';
    }

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      clearErrors();
      let valid = true;

      const fullNameVal = fields.fullName.elem.value.trim();
      if (!fullNameVal) {
        fields.fullName.errorElem.textContent = 'Por favor, insira seu nome completo.';
        valid = false;
      }

      const emailVal = fields.email.elem.value.trim();
      if (!emailVal) {
        fields.email.errorElem.textContent = 'Por favor, insira seu e-mail.';
        valid = false;
      } else if (!validateEmail(emailVal)) {
        fields.email.errorElem.textContent = 'Formato de e-mail inválido.';
        valid = false;
      }

      const passwordVal = fields.password.elem.value;
      if (!passwordVal) {
        fields.password.errorElem.textContent = 'Por favor, insira uma senha.';
        valid = false;
      } else if (passwordVal.length < 6) {
        fields.password.errorElem.textContent = 'A senha deve ter no mínimo 6 caracteres.';
        valid = false;
      }

      const confirmPasswordVal = fields.confirmPassword.elem.value;
      if (!confirmPasswordVal) {
        fields.confirmPassword.errorElem.textContent = 'Por favor, confirme sua senha.';
        valid = false;
      } else if (confirmPasswordVal !== passwordVal) {
        fields.confirmPassword.errorElem.textContent = 'As senhas não coincidem.';
        valid = false;
      }

      const birthDateVal = fields.birthDate.elem.value;
      if (!birthDateVal) {
        fields.birthDate.errorElem.textContent = 'Por favor, insira sua data de nascimento.';
        valid = false;
      } else if (birthDateVal > today) {
        fields.birthDate.errorElem.textContent = 'A data de nascimento não pode ser no futuro.';
        valid = false;
      }

      if (!valid) return;

      const userData = {
        fullName: fullNameVal,
        email: emailVal,
        password: passwordVal, 
        birthDate: birthDateVal
      };

      let existingUsers = localStorage.getItem('users');
      existingUsers = existingUsers ? JSON.parse(existingUsers) : [];
      existingUsers.push(userData);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      successMessageElem.textContent = 'Cadastro realizado com sucesso!';
      form.reset();
    });
  })();

   (function() {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');
    const loginErrorMessage = document.getElementById('loginErrorMessage');
    const btnRegister = document.getElementById('btnRegister');

    function clearMessages() {
      emailError.textContent = '';
      passwordError.textContent = '';
      successMessage.textContent = '';
      loginErrorMessage.textContent = '';
    }

    btnRegister.addEventListener('click', function() {
      window.location.href = 'cadastrousuario.html';
    });

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      clearMessages();

      const emailVal = emailInput.value.trim();
      const passwordVal = passwordInput.value;

      let valid = true;

      if (!emailVal) {
        emailError.textContent = 'Por favor, insira seu e-mail.';
        valid = false;
      } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailVal.toLowerCase())) {
          emailError.textContent = 'Formato de e-mail inválido.';
          valid = false;
        }
      }
      if (!passwordVal) {
        passwordError.textContent = 'Por favor, insira sua senha.';
        valid = false;
      }

      if (!valid) return;

      let users = localStorage.getItem('users');
      users = users ? JSON.parse(users) : [];

      if (users.length === 0) {
        loginErrorMessage.textContent = 'Nenhum usuário cadastrado. Por favor, realize o cadastro.';
        return;
      }

      const user = users.find(u => u.email.toLowerCase() === emailVal.toLowerCase() && u.password === passwordVal);

      if (user) {
        successMessage.textContent = `Bem-vindo, ${user.fullName}! Login realizado com sucesso.`;
        setTimeout(() => {
          successMessage.textContent = '';
          form.reset();
        
        }, 2500);
      } else {
        loginErrorMessage.textContent = 'E-mail ou senha incorretos.';
      }
    });

  })();
  //Fim Livia

  //Inicio Ana 
  document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const city = this.city.value.trim();
    const street = this.street.value.trim();
    const neighborhood = this.neighborhood.value.trim();
    const description = this.description.value.trim();
    const problemTitle = this.problemTitle.value.trim();
    const imageInput = this.image;
    let imageName = imageInput.files.length > 0 ? imageInput.files[0].name : 'Nenhuma imagem selecionada';

    
    alert(
        `Cidade: ${city}\n` +
        `Rua: ${street}\n` +
        `Bairro: ${neighborhood}\n` +
        `Descrição: ${description}\n` +
        `Título do problema: ${problemTitle}\n` +
        `Imagem: ${imageName}`
    );
});
//Fim Ana 
// Inicio Felipe

function mostrarMensagem() {
  alert("Email: email@gmail.com");
  alert("Telefone: 31 9 9999-9999");
}

// Fim Felipe

function mostrarMensagem() {
  alert("Email: email@gmail.com");
  alert("Telefone: 31 9 9999-9999");
}

// Fim Felipe



