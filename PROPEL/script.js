
// para el efecto de nav 
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    
    // Remueve la clase 'active' de todos los enlaces
    document.querySelectorAll('.nav-link').forEach(el => {
      el.classList.remove('active');
    });
    
    // Agrega 'active' al enlace clickeado
    e.target.classList.add('active');
  });
});



// Cargar tarjetas iniciales
function loadCards(orgs) {
    const cardsgrid = document.querySelector('.bottom-grid');
    cardsgrid.innerHTML = '';
    orgs.forEach((org,index)=> {
      const card = document.createElement('div');
      card.className = 'card-grid';
      card.innerHTML = `
        <div class="card-grid-inside">
            <div class="card-grid-top">
                <img class="icono-org" src="${org.logo}">
            </div>
            <div class="card-grid-middle">
                <p class="org-name">${org.name}</p>
                <p class="org-country">${org.overview.country}</p>
                <p style="margin-bottom: 5px;"><strong>Description:</strong></p>
                <p class="org-desc">${org.description}</p>
                
                <div class="div-button">
                    
                    <button class="card-button" data-org-id="${index}">See more</button>
                </div>
            </div>
            <div class="card-grid-bottom">
                <p>Tags: ${org.tags.join(', ')}</p>
            </div>

        </div>





      `;
      cardsgrid.appendChild(card);
    });

    // funcion que esta atenta a que se haga click en el boton y ejecuta la funcion mandando el id de la org
    document.querySelectorAll('.card-button').forEach(button => {
      button.addEventListener('click', (e) => {
        const orgId = e.target.getAttribute('data-org-id');
        navigateToProfile(orgId);
      });
    });
  }

  // Inicializar
  loadCards(organizations);



const countries=new Set();
const causes=new Set();
const participations=new Set();


function loadFilters(orgs) {
  // Limpiamos los Sets
  countries.clear();
  causes.clear();
  participations.clear();

  orgs.forEach(org => {
    if (org.tags?.length) {
      if (org.tags[0]) countries.add(org.tags[0]);
      if (org.tags[1]) causes.add(org.tags[1]);
      if (org.tags[2]) participations.add(org.tags[2]);
    }
  });

  // Función mejorada para llenar selects con opción "Todos"
  const fillSelect = (selectElement, values, placeholder) => {
    selectElement.innerHTML = '';
    
    // Opción "Todos" (valor especial, por ejemplo 'all')
    const allOption = document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = `All`;
    selectElement.appendChild(allOption);
    
    // Opciones específicas
    values.forEach(value => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      selectElement.appendChild(option);
    });
  };

  fillSelect(document.getElementById('country-filtre'), countries, 'países');
  fillSelect(document.getElementById('cause-filtre'), causes, 'causas');
  fillSelect(document.getElementById('participated-filtre'), participations, 'participaciones');
}


loadFilters(organizations || []); 

// Función para cargar los filtros con opción "Todos"
function loadFilters(orgs) {
  const countries = new Set();
  const causes = new Set();
  const participations = new Set();

  orgs.forEach(org => {
    if (org.tags?.length >= 3) {
      countries.add(org.tags[0]);
      causes.add(org.tags[1]);
      participations.add(org.tags[2]);
    }
  });

  // Función para llenar cada select
  const fillSelect = (selectId, values, label) => {
    const select = document.getElementById(selectId);
    select.innerHTML = '';
    
    // Opción "Todos" (valor vacío)
    const allOption = document.createElement('option');
    allOption.value = '';
    allOption.textContent = `All`;
    select.appendChild(allOption);
    
    // Opciones específicas
    values.forEach(value => {
      const option = document.createElement('option');
      
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
  };

  fillSelect('country-filtre', countries, 'países');
  fillSelect('cause-filtre', causes, 'causas');
  fillSelect('participated-filtre', participations, 'tipos de participación');
}

// Función de filtrado estricto
function aplicarFiltrosEstrictos() {
  const filtros = {
    pais: document.getElementById('country-filtre').value,
    causa: document.getElementById('cause-filtre').value,
    participacion: document.getElementById('participated-filtre').value
  };

  const resultados = organizations.filter(org => {
    const tags = org.tags || [];
    
    // Verificar cada filtro (solo si tiene valor)
    const cumplePais = !filtros.pais || tags[0] === filtros.pais;
    const cumpleCausa = !filtros.causa || tags[1] === filtros.causa;
    const cumpleParticipacion = !filtros.participacion || tags[2] === filtros.participacion;

    return cumplePais && cumpleCausa && cumpleParticipacion;
  });

  // Mostrar resultados o todas las organizaciones si no hay filtros activos
  const hayFiltrosActivos = Object.values(filtros).some(Boolean);
  loadCards(hayFiltrosActivos ? resultados : organizations);
}

// Asignar event listeners
document.getElementById('country-filtre').addEventListener('change', aplicarFiltrosEstrictos);
document.getElementById('cause-filtre').addEventListener('change', aplicarFiltrosEstrictos);
document.getElementById('participated-filtre').addEventListener('change', aplicarFiltrosEstrictos);

function navigateToProfile(orgId) {
  try {
    if (!organizations[orgId]) {
      throw new Error('Organización no encontrada');
    }
    
    localStorage.setItem('selectedOrg', JSON.stringify(organizations[orgId]));
    window.location.href = 'org-page.html';
  } catch (error) {
    console.error('Error al navegar al perfil:', error);
    // Mostrar mensaje al usuario
    alert('No se pudo cargar el perfil. Intente nuevamente.');
  }
}


// Inicialización
loadFilters(organizations);
aplicarFiltrosEstrictos(); // Mostrar todas inicialmente