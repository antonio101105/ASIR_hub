// ASIR Subjects Data
const subjects = {
    1: ['FH', 'DIG', 'GBD', 'LMSGI', 'SOS', 'IPE1', 'ISO', 'PAR'],
    2: ['ASO', 'ASGBD', 'SAD', 'PROY', 'OPT', 'IPE2', 'IAW', 'HLC', 'ING', 'SRI']
};

// Mock Data
const initialResources = [
    {
        id: 1,
        title: "Fundamentos de Hardware - Tema 1",
        year: 1,
        subject: "FH",
        url: "#",
        description: "Resumen de los componentes básicos del ordenador.",
        icon: "fa-solid fa-microchip"
    },
    {
        id: 2,
        title: "Comandos Linux Básicos",
        year: 1,
        subject: "ISO",
        url: "#",
        description: "Lista de comandos esenciales para la terminal de Linux.",
        icon: "fa-brands fa-linux"
    },
    {
        id: 3,
        title: "Modelo Entidad-Relación",
        year: 1,
        subject: "GBD",
        url: "#",
        description: "Ejercicios resueltos de diagramas E-R.",
        icon: "fa-solid fa-database"
    },
    {
        id: 4,
        title: "Apache vs Nginx",
        year: 2,
        subject: "SRI",
        url: "#",
        description: "Comparativa de rendimiento y configuración.",
        icon: "fa-solid fa-server"
    },
    {
        id: 5,
        title: "Seguridad en Redes",
        year: 2,
        subject: "SAD",
        url: "#",
        description: "Apuntes sobre firewalls y VPNs.",
        icon: "fa-solid fa-shield-halved"
    },
    {
        id: 6,
        title: "Despliegue de Aplicaciones Web",
        year: 2,
        subject: "IAW",
        url: "#",
        description: "Guía paso a paso para desplegar una app PHP.",
        icon: "fa-brands fa-php"
    }
];

let resources = [...initialResources];

// State
let currentYear = 1;
let currentSubject = 'all';
let currentSearch = '';

// DOM Elements
const resourceGrid = document.getElementById('resourceGrid');
const searchInput = document.getElementById('searchInput');
const filterContainer = document.getElementById('filterContainer');
const yearBtns = document.querySelectorAll('.year-btn');
const modalOverlay = document.getElementById('modalOverlay');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const resourceForm = document.getElementById('resourceForm');
const yearSelect = document.getElementById('yearSelect');
const subjectSelect = document.getElementById('subjectSelect');

// Initialize
function init() {
    renderSubjectFilters();
    renderResources();
    updateModalSubjects();
}

// Render Subject Filters
function renderSubjectFilters() {
    const currentSubjects = subjects[currentYear];

    let html = `<button class="filter-btn ${currentSubject === 'all' ? 'active' : ''}" data-subject="all">Todos</button>`;

    currentSubjects.forEach(sub => {
        html += `<button class="filter-btn ${currentSubject === sub ? 'active' : ''}" data-subject="${sub}">${sub}</button>`;
    });

    filterContainer.innerHTML = html;

    // Add event listeners to new buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentSubject = btn.dataset.subject;
            renderSubjectFilters(); // Re-render to update active state
            renderResources();
        });
    });
}

// Render Resources
function renderResources() {
    resourceGrid.innerHTML = '';

    let filtered = resources.filter(r => r.year == currentYear);

    if (currentSubject !== 'all') {
        filtered = filtered.filter(r => r.subject === currentSubject);
    }

    if (currentSearch) {
        const term = currentSearch.toLowerCase();
        filtered = filtered.filter(r =>
            r.title.toLowerCase().includes(term) ||
            r.description.toLowerCase().includes(term)
        );
    }

    if (filtered.length === 0) {
        resourceGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No se encontraron recursos para esta selección.</p>';
        return;
    }

    filtered.forEach(resource => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-header">
                <div class="card-icon">
                    <i class="${resource.icon || 'fa-solid fa-link'}"></i>
                </div>
                <span class="card-category">${resource.subject}</span>
            </div>
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            <a href="${resource.url}" target="_blank" class="card-link">
                Ver Recurso <i class="fa-solid fa-arrow-right"></i>
            </a>
        `;
        resourceGrid.appendChild(card);
    });
}

// Update Modal Subjects based on selected year
function updateModalSubjects() {
    const selectedYear = yearSelect.value;
    const currentSubjects = subjects[selectedYear];

    subjectSelect.innerHTML = '';
    currentSubjects.forEach(sub => {
        const option = document.createElement('option');
        option.value = sub;
        option.textContent = sub;
        subjectSelect.appendChild(option);
    });
}

// Event Listeners
yearBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        yearBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentYear = parseInt(btn.dataset.year);
        currentSubject = 'all'; // Reset subject when changing year

        renderSubjectFilters();
        renderResources();
    });
});

searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderResources();
});

// Modal Logic
openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

yearSelect.addEventListener('change', updateModalSubjects);

// Form Submission
resourceForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newResource = {
        id: resources.length + 1,
        title: document.getElementById('title').value,
        year: parseInt(document.getElementById('yearSelect').value),
        subject: document.getElementById('subjectSelect').value,
        url: document.getElementById('url').value,
        description: document.getElementById('description').value,
        icon: 'fa-solid fa-file' // Default icon
    };

    resources.unshift(newResource);

    // If the new resource belongs to the current view, re-render
    if (newResource.year === currentYear) {
        renderResources();
    }

    resourceForm.reset();
    updateModalSubjects(); // Reset subjects to default year
    modalOverlay.classList.remove('active');
});

// Start
init();
