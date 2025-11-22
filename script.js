const subjects = {
    1: ['FH', 'DIG', 'GBD', 'LMSGI', 'SOS', 'IPE1', 'ISO', 'PAR'],
    2: ['ASO', 'ASGBD', 'SAD', 'PROY', 'OPT', 'IPE2', 'IAW', 'HLC', 'ING', 'SRI']
};

const topicsData = {
    'FH': [
        {
            title: 'Tema 1: Unidades Funcionales',
            desc: 'Introducción, Arquitectura Von Neumann, Memoria, E/S, UAL, UC y Ciclo de Instrucción.',
            content: `
                <h3>1. Introducción y Conceptos Básicos</h3>
                <p>Un ordenador es, en términos generales, un aparato cuya misión es procesar información. Su evolución histórica ha estado ligada a los avances tecnológicos disponibles en cada momento. Es fundamental distinguir el tipo de información que procesan:</p>
                <ul>
                    <li><strong>Analógica:</strong> Entre dos valores existen infinitos valores intermedios (ej. temperatura, velocidad).</li>
                    <li><strong>Digital:</strong> La información tiene valores discretos (0 o 1) sin intermedios. Los ordenadores actuales son mayoritariamente digitales.</li>
                </ul>
                <p>La unidad fundamental de información digital es el bit (0 o 1). Su agrupación da lugar a unidades mayores como el Byte (8 bits), Kilobyte, Megabyte, Gigabyte, Terabyte, Petabyte y Exabyte. También existen agrupaciones por longitud de palabra: nibble (4 bits), palabra (16 bits), doble palabra (32 bits) y cuádruple palabra (64 bits).</p>

                <h3>2. Arquitectura de Von Neumann</h3>
                <p>La estructura aceptada actualmente para los ordenadores es la propuesta por John von Neumann en 1945. Esta arquitectura permite el concepto de "programa almacenado", facilitando que el ordenador sirva para múltiples cometidos sin reprogramarlo físicamente. Sus partes principales son:</p>
                <ul>
                    <li><strong>Unidad de Memoria (UM):</strong> Almacena información y programas.</li>
                    <li><strong>Nivel 0 - Registros:</strong> Alta velocidad y baja capacidad, integrados en la CPU.</li>
                    <li><strong>Nivel 1 - Caché:</strong> Memoria intermedia para acelerar accesos a la RAM. Tiene subniveles (L1 a L4).</li>
                    <li><strong>Nivel 2 - Principal (RAM):</strong> Almacena datos y programas de forma temporal. Es la verdadera Unidad de Memoria.</li>
                    <li><strong>Nivel 3 - Secundaria:</strong> Almacenamiento permanente y de alta capacidad (discos).</li>
                    <li><strong>Nivel 4 - Auxiliar:</strong> Respaldo de información (medios extraíbles o red).</li>
                </ul>
                <p><strong>Estructura Interna:</strong> La memoria se compone de celdas (1 Byte) identificadas por una dirección única. Se organizan en arrays unidimensionales, bidimensionales (filas y columnas) o tridimensionales (bloques). Para funcionar, utiliza dos registros auxiliares:</p>
                <ul>
                    <li>Registro de Direcciones (RD): Almacena la dirección del dato.</li>
                    <li>Registro de Datos (RM): Almacena el dato leído o a escribir.</li>
                </ul>
                <p>Las operaciones básicas son Lectura (L) y Escritura (E), que trabajan en exclusión mutua.</p>

                <h3>4. Unidad de Entrada/Salida (UE/S)</h3>
                <p>Establece la comunicación entre el usuario y la CPU a través de los periféricos.</p>
                <h4>Tipos de Periféricos</h4>
                <ul>
                    <li>De entrada: Ratón, teclado, escáner.</li>
                    <li>De salida: Monitor, impresora, altavoces.</li>
                    <li>De E/S: Actúan en ambos sentidos.</li>
                    <li>Comunicaciones: Módem, router.</li>
                    <li>Almacenamiento: Discos duros (actúan como memoria auxiliar).</li>
                </ul>
                <p><strong>Gestión de E/S:</strong> El sistema consta de una Interfaz (adapta la información y gestiona el intercambio) y un Controlador (gestiona directamente el periférico). Para evitar cuellos de botella, se utiliza un Bus de E/S específico, aunque existen otras arquitecturas como la E/S mapeada en memoria o la E/S aislada.</p>

                <h3>5. Unidad Aritmético-Lógica (UAL)</h3>
                <p>Es el núcleo de cálculo. Realiza operaciones aritméticas (suma, resta) y lógicas (comparación, negación).</p>
                <ul>
                    <li><strong>Operadores:</strong> Componentes electrónicos que realizan el cálculo. Pueden ser genéricos/específicos, monádicos/diádicos/triádicos (según número de entradas) y operar en serie o paralelo.</li>
                    <li><strong>Registros:</strong> Almacenan los datos de entrada (registros auxiliares) y el resultado, que va al registro Acumulador (AC).</li>
                </ul>

                <h3>6. Unidad de Control (UC)</h3>
                <p>Interpreta instrucciones y genera órdenes ("cerebro" del ordenador). Sus componentes son:</p>
                <ul>
                    <li><strong>Circuito de Control:</strong> Incluye el Decodificador (interpreta la instrucción) y el Secuenciador (distribuye las señales de control ordenadamente).</li>
                    <li><strong>Reloj:</strong> Genera pulsos para sincronizar todo el sistema.</li>
                    <li><strong>Registros:</strong> Utilizados para labores auxiliares.</li>
                </ul>

                <h3>7. Funcionamiento Interno: El Ciclo de Instrucción</h3>
                <p>El procesamiento se basa en ejecutar programas (conjuntos de instrucciones). El ciclo de instrucción tiene fases:</p>
                <ul>
                    <li><strong>Fase de Búsqueda:</strong> La CPU usa el Contador de Programa (CP) para saber qué instrucción leer de la memoria. La instrucción pasa al Registro de Instrucción (RI).</li>
                    <li><strong>Fase de Ejecución:</strong> Se decodifica la instrucción y se lanzan las órdenes para ejecutarla.</li>
                    <li><strong>Fase de Interrupción:</strong> (Opcional) Antes de un nuevo ciclo, la CPU comprueba si algún periférico requiere atención. Si hay una interrupción, se guarda el contexto y se atiende la petición.</li>
                </ul>
                <p>Las interrupciones se gestionan de forma distribuida (prioridad por cercanía, Daisy chain) o centralizada (mediante un controlador de interrupciones).</p>

                <h3>8. Organización Estructural y Software</h3>
                <p>El ordenador se divide estructuralmente en niveles, desde lo físico (Hardware) hasta los programas (Software).</p>
                <h4>Niveles Estructurales</h4>
                <ul>
                    <li>Componentes electrónicos: Diodos, resistencias.</li>
                    <li>Circuitos electrónicos: Puertas lógicas, biestables.</li>
                    <li>Circuitos digitales: Sumadores, multiplexores.</li>
                    <li>Transferencia de registros: Buses y registros.</li>
                    <li>CPU: Lenguaje máquina.</li>
                    <li>Sistema Operativo: Facilita el uso del hardware.</li>
                    <li>Lenguajes de alto nivel: Requieren compilación.</li>
                    <li>Aplicaciones: Paquetes de usuario final (Office, navegadores).</li>
                </ul>
                <h4>Clasificación del Software</h4>
                <ul>
                    <li><strong>Software de Base (Sistema Operativo):</strong> Capa que rodea el hardware. Gestiona recursos, ejecución de programas, operaciones de E/S, sistemas de archivos, detección de errores y seguridad.</li>
                    <li><strong>Software de Aplicación:</strong> Programas con un fin específico. Interactúan con el hardware a través de llamadas al sistema gestionadas por el SO. Tipos: Científico, Técnico, Multimedia, Ofimático, De utilidad (antivirus), De explotación y Comercial.</li>
                </ul>

                <h3>9. Tendencias Futuras: Computación Cuántica</h3>
                <p>Se están desarrollando ordenadores cuánticos que utilizan Qubits en lugar de bits. Gracias a la superposición cuántica, un Qubit puede ser 0 y 1 simultáneamente, permitiendo cálculos mucho más complejos a velocidades superiores.</p>
            `
        },
        {
            title: 'Tema 2: La Placa Base',
            desc: 'Factor de forma, componentes principales, socket, chipset, BIOS, memoria y buses de expansión.',
            content: `
                <h3>1. Factor de forma</h3>
                <p>Un ordenador está compuesto por componentes de diferentes fabricantes. Para garantizar la compatibilidad, existen normas que definen dimensiones, anclajes y distribución eléctrica. A esto se le llama factor de forma.</p>
                
                <h4>1.1. Antecedentes</h4>
                <ul>
                    <li><strong>AT (1984):</strong> Creado para el IBM AT. Dimensiones grandes (350 × 305 mm), dificultaba la ventilación y conexión.</li>
                    <li><strong>Baby-AT (1985):</strong> Más pequeño (330 × 216 mm) y económico. Fue el estándar durante años, pero sufría calentamiento por la proximidad de componentes.</li>
                </ul>

                <h4>1.2. Factor de forma ATX</h4>
                <p>Propuesto por Intel en 1995. Es el estándar actual.</p>
                <ul>
                    <li><strong>Dimensiones:</strong> 305 × 244 mm.</li>
                    <li><strong>Mejoras:</strong> Mejor ventilación, panel lateral de puertos E/S integrado, conector de corriente unificado (20 o 24 pines), control de encendido por software.</li>
                    <li><strong>Variantes:</strong>
                        <ul>
                            <li><strong>Micro-ATX (μATX):</strong> 244 × 244 mm. Menos slots de expansión (máx 4), suele integrar gráfica y audio. Compatible con cajas ATX.</li>
                            <li><strong>Flex-ATX:</strong> 229 × 191 mm. Aún más pequeño, máximo 2 slots.</li>
                        </ul>
                    </li>
                </ul>

                <h4>1.3. Factor de forma BTX</h4>
                <p>Lanzado por Intel en 2004 para solucionar problemas de ruido y calor.</p>
                <ul>
                    <li><strong>Diseño:</strong> Redistribuye componentes para un flujo de aire lineal (túnel de viento). Incompatible con ATX.</li>
                    <li><strong>Variantes:</strong> Micro-BTX y Pico-BTX.</li>
                </ul>

                <h4>1.4. Otros factores de forma</h4>
                <ul>
                    <li><strong>WTX (1998):</strong> Para servidores y estaciones de trabajo (356 × 425 mm).</li>
                    <li><strong>ITX (2001):</strong> De VIA, para equipos muy compactos.
                        <ul>
                            <li>Mini-ITX: 170 × 170 mm (1 slot).</li>
                            <li>Nano-ITX: 120 × 120 mm.</li>
                            <li>Pico-ITX: 100 × 72 mm.</li>
                        </ul>
                    </li>
                    <li><strong>DTX (2007):</strong> De AMD. Intermedio entre μATX y Mini-ITX.</li>
                </ul>

                <h3>2. Partes principales de una placa base</h3>
                <p>Los elementos fundamentales que componen la placa son:</p>
                <ul>
                    <li><strong>Socket:</strong> Aloja el microprocesador.</li>
                    <li><strong>Chipset:</strong> Puente norte y puente sur.</li>
                    <li><strong>BIOS:</strong> Chip de arranque.</li>
                    <li><strong>Zócalos de memoria:</strong> Para la RAM.</li>
                    <li><strong>Slots de expansión:</strong> Para tarjetas (gráfica, sonido, etc.).</li>
                    <li><strong>Conectores:</strong> De corriente, internos y panel lateral.</li>
                    <li><strong>Pila:</strong> Mantiene la configuración de la BIOS.</li>
                </ul>

                <h3>3. Socket y microprocesador</h3>
                <p>Es el zócalo donde se conecta la CPU.</p>
                <h4>Tipos de conexión:</h4>
                <ul>
                    <li><strong>ZIF (Zero Insertion Force):</strong> Pines en el procesador, se inserta sin presión y se fija con palanca.</li>
                    <li><strong>LGA (Land Grid Array):</strong> Pines en el socket, el procesador solo tiene contactos planos.</li>
                </ul>
                <p><strong>Fabricantes:</strong> Intel y AMD utilizan sockets incompatibles entre sí.</p>
                <p><strong>Evolución:</strong> Se identifican por número de pines (ej. Socket 775, 1155, AM3).</p>

                <h3>4. Chipset</h3>
                <p>Conjunto de circuitos integrados que auxilian al microprocesador en la gestión de componentes.</p>
                
                <h4>4.1. Estructura Clásica</h4>
                <ul>
                    <li><strong>Puente Norte (Northbridge):</strong> Gestiona componentes rápidos: Memoria RAM, Gráficos (AGP/PCIe) y comunicación con el microprocesador (FSB). Suele llevar disipador.</li>
                    <li><strong>Puente Sur (Southbridge/ICH):</strong> Gestiona componentes lentos: PCI, discos (SATA/IDE), USB, Audio, Red.</li>
                </ul>

                <h4>4.2. Nueva Generación</h4>
                <p>El Puente Norte desaparece y sus funciones (controlador de memoria y gráficos) pasan al interior del microprocesador. El Puente Sur evoluciona al PCH (Platform Controller Hub).</p>

                <h3>5. BIOS</h3>
                <p>Chip de memoria (EPROM/Flash) con el programa de arranque.</p>
                <ul>
                    <li><strong>Funciones:</strong> Testear hardware (POST) y cargar el Sistema Operativo.</li>
                    <li><strong>Configuración:</strong> "A prueba de fallos" (fábrica) u "Optimizada". Se mantiene gracias a una pila (CR2032).</li>
                    <li><strong>DualBIOS:</strong> Tecnología (ej. Gigabyte) con dos chips: uno principal y otro de respaldo para recuperar el sistema si falla el primero.</li>
                    <li><strong>Tipos físicos:</strong> DIP (rectangular) o PLCC (cuadrado).</li>
                </ul>

                <h3>6. Zócalos de memoria</h3>
                <p>Lugar donde se insertan los módulos de RAM.</p>
                <ul>
                    <li><strong>SIMM:</strong> Antiguos (30 y 72 contactos).</li>
                    <li><strong>DIMM:</strong> Estándar actual para sobremesa. Bus de 64 bits.
                        <ul>
                            <li>168 contactos (SDR).</li>
                            <li>184 contactos (DDR).</li>
                            <li>240 contactos (DDR2 y DDR3).</li>
                        </ul>
                    </li>
                    <li><strong>SO-DIMM:</strong> Para portátiles. Más pequeños (72, 144, 200, 204 contactos).</li>
                    <li><strong>Micro-DIMM:</strong> Para netbooks.</li>
                </ul>

                <h3>7. Buses de expansión (Slots)</h3>
                <p>Ranuras para ampliar las capacidades del equipo.</p>
                
                <h4>7.1. Gama ISA (Obsoleta)</h4>
                <ul>
                    <li>XT (8 bits), AT (16 bits).</li>
                    <li>EISA y VESA (32 bits).</li>
                </ul>

                <h4>7.2. Gama PCI</h4>
                <p>Estándar en ordenadores personales durante años.</p>
                <ul>
                    <li><strong>PCI:</strong> 32 o 64 bits. Voltajes de 3.3V o 5V (determinados por la posición de la muesca).</li>
                    <li><strong>Mini-PCI:</strong> Versión reducida para portátiles.</li>
                    <li><strong>AGP:</strong> Puerto dedicado exclusivamente a tarjetas gráficas (x1, x2, x4, x8). Color marrón.</li>
                </ul>

                <h4>7.3. Gama PCI-Express (PCIe)</h4>
                <p>Estándar actual. Transmisión en serie (lanes) en lugar de paralelo.</p>
                <ul>
                    <li><strong>Velocidad:</strong> Varía según versión (1.0, 2.0, 3.0) y número de líneas (lanes).</li>
                    <li><strong>Tamaños:</strong> x1, x4, x8, x16 (este último usado para gráficas).</li>
                    <li><strong>Variantes portátiles:</strong> Mini-PCIe y ExpressCard (sustituto de PCMCIA).</li>
                </ul>

                <h3>8. Conectores internos</h3>
                
                <h4>8.1. Corriente</h4>
                <ul>
                    <li><strong>ATX (20/24 pines):</strong> Alimentación principal de la placa.</li>
                    <li><strong>ATX12V (4 pines) / EPS12V (8 pines):</strong> Alimentación extra para el procesador.</li>
                    <li><strong>Molex:</strong> Para periféricos antiguos o alimentación extra en placa.</li>
                    <li><strong>PEG (6/8 pines):</strong> Alimentación extra para tarjetas gráficas PCIe.</li>
                </ul>

                <h4>8.2. Almacenamiento</h4>
                <ul>
                    <li><strong>IDE/ATA:</strong> Conector ancho de 40 pines (paralelo). En desuso.</li>
                    <li><strong>SATA:</strong> Estándar actual (serie). Conector pequeño de 7 contactos en forma de "L". Velocidades: SATA I (150 MB/s), SATA II (300 MB/s), SATA III (600 MB/s).</li>
                </ul>

                <h4>8.3. Cabeceras (Headers)</h4>
                <p>Agrupaciones de pines para conectar elementos de la caja o puertos extra.</p>
                <ul>
                    <li><strong>Panel Frontal:</strong> Interruptor encendido, Reset, LEDs de disco duro y encendido.</li>
                    <li><strong>USB:</strong> 9 pines (soporta 2 puertos USB).</li>
                    <li><strong>Audio Frontal:</strong> Para micrófono y auriculares de la caja (AC'97 o HD Audio).</li>
                    <li><strong>Jumpers de configuración:</strong> Ej. Clear CMOS para resetear la BIOS.</li>
                </ul>

                <h3>9. Resumen de tecnologías gráficas multi-GPU</h3>
                <p>Mencionadas en el contexto de slots PCIe:</p>
                <ul>
                    <li><strong>SLI (NVIDIA) / Crossfire (AMD):</strong> Permiten conectar dos o más tarjetas gráficas trabajando en paralelo para aumentar el rendimiento.</li>
                </ul>
            `
        }
    ],
    'ISO': [
        { title: 'Tema 1: Introducción a SO', desc: 'Historia y tipos de sistemas operativos.' },
        { title: 'Tema 2: Comandos Básicos', desc: 'Navegación y gestión de archivos en Linux.' }
    ],
    'GBD': [
        { title: 'Tema 1: Modelo E-R', desc: 'Entidades, relaciones y atributos.' },
        { title: 'Tema 2: SQL Básico', desc: 'Consultas SELECT simples y filtrado.' }
    ],
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
const topicsContainer = document.getElementById('topicsContainer');

// Initialize
function init() {
    renderSubjectFilters();
    renderTopics();
    renderResources();
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
            renderTopics(); // Render topics for selected subject
            renderResources();
        });
    });
}

// Render Topics
function renderTopics() {
    topicsContainer.innerHTML = '';

    if (currentSubject === 'all' || !topicsData[currentSubject]) {
        return;
    }

    const topics = topicsData[currentSubject];
    let html = `<h3>Temas de ${currentSubject}</h3><div class="topics-grid">`;

    topics.forEach((topic, index) => {
        html += `
            <div class="topic-card">
                <h4>${topic.title}</h4>
                <p>${topic.desc}</p>
                ${topic.content ? `<button class="btn-read-more" onclick="openTopicModal('${currentSubject}', ${index})">Leer más</button>` : ''}
            </div>
        `;
    });

    html += '</div>';
    topicsContainer.innerHTML = html;
}

// Render Resources
function renderResources() {
    resourceGrid.innerHTML = '';

    let filtered = resources.filter(r => r.year === currentYear);

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

// Modal Logic
window.openTopicModal = function (subject, index) {
    const topic = topicsData[subject][index];
    if (!topic || !topic.content) return;

    document.getElementById('topicModalTitle').textContent = topic.title;
    document.getElementById('topicModalContent').innerHTML = topic.content;
    document.getElementById('topicModalOverlay').classList.add('active');
}

const closeTopicModalBtn = document.getElementById('closeTopicModalBtn');
const topicModalOverlay = document.getElementById('topicModalOverlay');

if (closeTopicModalBtn) {
    closeTopicModalBtn.addEventListener('click', () => {
        topicModalOverlay.classList.remove('active');
    });
}

if (topicModalOverlay) {
    topicModalOverlay.addEventListener('click', (e) => {
        if (e.target === topicModalOverlay) {
            topicModalOverlay.classList.remove('active');
        }
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
        renderTopics(); // Clear topics when changing year
        renderResources();
    });
});

searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderResources();
});

// Start
init();

// ============================================
// AI INTEGRATION - Gemini API
// ============================================

let currentTopicContent = ''; // Almacena el contenido actual del tema

// Actualizar la función openTopicModal para guardar el contenido
window.openTopicModal = function (subject, index) {
    const topic = topicsData[subject][index];
    if (!topic || !topic.content) return;

    document.getElementById('topicModalTitle').textContent = topic.title;
    document.getElementById('topicModalContent').innerHTML = topic.content;
    document.getElementById('topicModalOverlay').classList.add('active');

    // Guardar el contenido para las funciones de IA
    currentTopicContent = topic.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

    // Limpiar resultado anterior
    document.getElementById('resultado-ia').innerHTML = '';
}

// Función principal para pedir a la IA
window.pedirIA = async function (tipoSolicitud) {
    const divResultado = document.getElementById('resultado-ia');
    const botones = document.querySelectorAll('.ai-btn');

    if (!currentTopicContent) {
        divResultado.innerHTML = '<p style="color: #ef4444;">⚠️ No hay contenido cargado</p>';
        return;
    }

    // Deshabilitar botones mientras procesa
    botones.forEach(btn => btn.disabled = true);

    divResultado.innerHTML = '<div class="ai-loading">🧠 Pensando</div>';
    divResultado.style.display = 'block';

    try {
        // Llamar a nuestra API serverless en Vercel
        const respuesta = await fetch('/api/generar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contenido: currentTopicContent,
                tipo: tipoSolicitud
            })
        });

        if (!respuesta.ok) {
            throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
        }

        const datos = await respuesta.json();

        if (datos.error) {
            throw new Error(datos.error);
        }

        // Renderizar según el tipo
        if (tipoSolicitud === 'mapa') {
            renderizarMapaMermaid(datos.resultado);
        } else {
            divResultado.innerHTML = datos.resultado;
        }

    } catch (error) {
        console.error('Error:', error);
        divResultado.innerHTML = `
            <div style="color: #ef4444; padding: 1rem; background: rgba(239, 68, 68, 0.1); border-radius: 6px;">
                <strong>❌ Error:</strong> ${error.message}<br>
                <small style="color: #94a3b8; margin-top: 0.5rem; display: block;">
                    ${error.message.includes('404') || error.message.includes('Failed to fetch')
                ? 'La API aún no está configurada. Sigue las instrucciones del README para configurar Vercel y la API de Gemini.'
                : 'Verifica tu conexión a internet y que la API Key esté configurada correctamente en Vercel.'}
                </small>
            </div>
        `;
    } finally {
        // Rehabilitar botones
        botones.forEach(btn => btn.disabled = false);
    }
}

// Función para renderizar diagramas Mermaid
function renderizarMapaMermaid(codigoMermaid) {
    const divResultado = document.getElementById('resultado-ia');

    // Limpiar código (quitar markdown si viene con ```mermaid)
    let codigo = codigoMermaid.replace(/```mermaid\n?/g, '').replace(/```\n?/g, '').trim();

    // Crear contenedor para el diagrama
    const contenedorMermaid = document.createElement('div');
    contenedorMermaid.className = 'mermaid';
    contenedorMermaid.textContent = codigo;

    divResultado.innerHTML = '';
    divResultado.appendChild(contenedorMermaid);

    // Renderizar el diagrama
    if (window.mermaid) {
        window.mermaid.run({
            querySelector: '.mermaid'
        });
    }
}

