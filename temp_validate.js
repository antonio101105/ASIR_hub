
        const window = {};
        const document = { 
            getElementById: () => ({ 
                addEventListener: () => {},
                classList: { add: () => {}, remove: () => {} },
                innerHTML: '',
                value: ''
            }),
            querySelectorAll: () => [],
            createElement: () => ({ innerHTML: '' }),
            querySelector: () => ({ innerHTML: '' })
        };
        const navigator = { clipboard: { writeText: () => Promise.resolve() } };
        let currentYear = 1;
        let currentSubject = 'all';
        let currentSearch = '';
        
        // Asignaturas por curso (1º y 2º de ASIR)
const subjects = {
    1: ['FH', 'DIG', 'GBD', 'LMSGI', 'SOS', 'IPE1', 'ISO', 'PAR'],
    2: ['ASO', 'ASGBD', 'SAD', 'PROY', 'OPT', 'IPE2', 'IAW', 'HLC', 'ING', 'SRI']
};

// Mapeo de iconos para cada asignatura
const subjectIcons = {
    'FH': 'fa-solid fa-microchip',
    'DIG': 'fa-solid fa-diagram-project',
    'GBD': 'fa-solid fa-database',
    'LMSGI': 'fa-solid fa-code',
    'SOS': 'fa-solid fa-server',
    'IPE1': 'fa-solid fa-briefcase',
    'ISO': 'fa-brands fa-linux',
    'PAR': 'fa-solid fa-network-wired',
    'ASO': 'fa-solid fa-terminal',
    'ASGBD': 'fa-solid fa-table',
    'SAD': 'fa-solid fa-shield-halved',
    'PROY': 'fa-solid fa-folder-open',
    'OPT': 'fa-solid fa-puzzle-piece',
    'IPE2': 'fa-solid fa-handshake',
    'IAW': 'fa-brands fa-html5',
    'HLC': 'fa-solid fa-laptop-code',
    'ING': 'fa-solid fa-language',
    'SRI': 'fa-solid fa-ethernet'
};

const topicsData = {
    'FH': [
        {
            title: 'Tema 1: Unidades Funcionales',
            desc: 'Introducción, Arquitectura Von Neumann, Memoria, E/S, UAL, UC y Ciclo de Instrucción.',
            quiz: [
                { q: '¿Cuál es la unidad fundamental de información digital para el ordenador, con dos posibles valores (0 o 1)?', opts: ['Palabra (Word)', 'Byte (B)', 'Bit (b)', 'Nibble'], correct: 2 },
                { q: 'La arquitectura de ordenador más aceptada en la actualidad, propuesta por John von Neumann, consta de las siguientes partes, excepto:', opts: ['Unidad de Memoria', 'Unidad de Control', 'Unidad de Proceso (CPU)', 'Unidad de Software'], correct: 3 },
                { q: '¿Qué tipo de información se caracteriza por tener infinitos valores intermedios entre dos valores?', opts: ['Digital', 'Analógica', 'Cuántica', 'Binaria'], correct: 1 },
                { q: '¿Qué componente de la arquitectura de Von Neumann se encarga tanto de almacenar la información como los programas?', opts: ['Unidad Aritmético-Lógica', 'Unidad de Control', 'Unidad de Memoria', 'Unidad de Entrada/Salida'], correct: 2 },
                { q: '¿Cuántos bits componen un Byte (B)?', opts: ['4 bits', '8 bits', '16 bits', '1024 bits'], correct: 1 },
                { q: '¿Cuál es la agrupación de bits que se denomina "Palabra" (Word)?', opts: ['8 bits', '32 bits', '16 bits', '64 bits'], correct: 2 },
                { q: '¿Qué es un ordenador digital según la Unidad 1?', opts: ['Un aparato que trata información analógica', 'Un aparato cuya misión es procesar información digitalmente', 'Un aparato que solo realiza cálculos matemáticos', 'El primer ordenador cuántico'], correct: 1 },
                { q: '¿Qué significa el concepto de "programa almacenado" que caracteriza a la arquitectura de Von Neumann?', opts: ['Que el programa se guarda en la nube', 'Que el programa se almacena en la Unidad de Memoria junto a la información', 'Que el programa se almacena en el microprocesador', 'Que el programa se almacena en un disco duro externo'], correct: 1 },
                { q: '¿Qué se denomina Exabyte (EB) en las unidades de información?', opts: ['1024 KB', '1024 GB', '1024 TB', '1024 PB'], correct: 3 },
                { q: '¿Qué registro de la CPU almacena la dirección del dato que se va a leer o escribir?', opts: ['Registro de Datos (RM)', 'Registro de Direcciones (RD)', 'Contador de Programa (CP)', 'Acumulador (AC)'], correct: 1 }
            ],
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
            quiz: [
                { q: '¿Cuál es el factor de forma estándar actual para placas base de sobremesa?', opts: ['AT', 'Baby-AT', 'ATX', 'BTX'], correct: 2 },
                { q: '¿Qué componente del chipset gestiona los dispositivos rápidos como la RAM y la gráfica?', opts: ['Puente Sur', 'Puente Norte', 'BIOS', 'CMOS'], correct: 1 },
                { q: '¿Qué tipo de zócalo de memoria es el estándar actual para ordenadores de sobremesa?', opts: ['SIMM', 'DIMM', 'SO-DIMM', 'RIMM'], correct: 1 },
                { q: '¿Qué bus de expansión utiliza transmisión en serie y es el estándar actual para gráficas?', opts: ['PCI', 'AGP', 'ISA', 'PCI-Express'], correct: 3 },
                { q: '¿Cuál es la función principal de la BIOS?', opts: ['Almacenar datos del usuario', 'Gestionar la conexión a Internet', 'Realizar el test de arranque (POST) y cargar el SO', 'Enfriar el procesador'], correct: 2 },
                { q: '¿Qué factor de forma fue lanzado por Intel en 2004 para mejorar el flujo de aire pero no tuvo éxito?', opts: ['ATX', 'BTX', 'ITX', 'WTX'], correct: 1 },
                { q: '¿Qué componente mantiene la configuración de la BIOS cuando el PC está apagado?', opts: ['El Chipset', 'La Pila (CR2032)', 'El Puente Norte', 'La Fuente de Alimentación'], correct: 1 },
                { q: '¿Qué significa las siglas ZIF en un socket?', opts: ['Zero Insertion Force', 'Zone Integrated Format', 'Zoom In Function', 'Zero Interface Factor'], correct: 0 },
                { q: '¿Cuál es el conector de alimentación principal de una placa ATX moderna?', opts: ['20 pines', '24 pines', '12 pines', '8 pines'], correct: 1 },
                { q: '¿Qué bus se utilizaba exclusivamente para tarjetas gráficas antes del PCIe?', opts: ['PCI', 'ISA', 'AGP', 'VESA'], correct: 2 }
            ],
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
        },
        {
            title: 'Tema 3: Componentes del Ordenador',
            desc: 'Caja, fuente de alimentación, CPU, refrigeración, RAM, almacenamiento y tarjetas de expansión.',
            quiz: [
                { q: '¿Qué conector de la fuente de alimentación alimenta la placa base principal?', opts: ['Molex', 'SATA', 'ATX 20/24 pines', 'PCIe 6 pines'], correct: 2 },
                { q: '¿Qué arquitectura de procesador se caracteriza por tener un conjunto de instrucciones reducido y simple?', opts: ['CISC', 'RISC', 'EPIC', 'SIMD'], correct: 1 },
                { q: '¿Cuál es la función de la pasta térmica?', opts: ['Pegar el disipador al procesador', 'Eliminar el aire para mejorar la conducción de calor', 'Aislar eléctricamente el procesador', 'Lubricar el ventilador'], correct: 1 },
                { q: '¿Qué característica define a la memoria RAM?', opts: ['Es memoria no volátil', 'Almacena datos permanentemente', 'Es memoria de acceso aleatorio y volátil', 'Es más lenta que el disco duro'], correct: 2 },
                { q: '¿Cuál es una ventaja principal de los SSD frente a los HDD?', opts: ['Menor precio por GB', 'Mayor capacidad máxima', 'Resistencia a golpes y velocidad', 'Recuperación de datos más sencilla'], correct: 2 },
                { q: '¿Qué tipo de caja es la más habitual para un usuario estándar?', opts: ['Gran Torre', 'Semitorre', 'Slim', 'Barebone'], correct: 1 },
                { q: '¿Qué voltajes de salida continua ofrece una fuente ATX estándar?', opts: ['110V y 220V', '3.3V, 5V y 12V', '1.5V y 9V', 'Solo 12V'], correct: 1 },
                { q: '¿Qué elemento de la refrigeración líquida se encarga de enfriar el líquido?', opts: ['La bomba', 'El bloque de agua', 'El radiador', 'El depósito'], correct: 2 },
                { q: '¿Qué componente convierte la corriente alterna en continua?', opts: ['La placa base', 'El procesador', 'La fuente de alimentación', 'El disco duro'], correct: 2 },
                { q: '¿Qué tipo de memoria RAM se usa habitualmente en portátiles?', opts: ['DIMM', 'SO-DIMM', 'SIMM', 'RIMM'], correct: 1 }
            ],
            content: `
                <h3>1. La Caja del Ordenador (Chasis)</h3>
                <p>La caja no es solo un contenedor; su diseño afecta el rendimiento térmico y la expansión del equipo.</p>
                <p><strong>Materiales:</strong> Generalmente tienen chasis de aluminio (ligero), aunque se usa acero, plástico o metacrilato (especialmente en modding).</p>
                
                <h4>Factor de Forma y Bahías</h4>
                <ul>
                    <li><strong>Microtorre:</strong> Para placas Micro ATX. Mide 25-32 cm y tiene de 1 a 3 bahías externas.</li>
                    <li><strong>Semitorre:</strong> El estándar más habitual (37-45 cm). Admite hasta 6 bahías externas.</li>
                    <li><strong>Gran Torre:</strong> Usada en servidores y modding. Altura de 55-72 cm y 8 o más bahías. Prioriza la ventilación.</li>
                    <li><strong>Slim:</strong> Diseño compacto (horizontal o vertical) para placas Micro o Flex ATX.</li>
                    <li><strong>Barebones:</strong> Cajas tipo "Mini" que ya incluyen placa base y fuente de alimentación preinstaladas.</li>
                </ul>

                <h3>2. La Fuente de Alimentación</h3>
                <p>Es el dispositivo que convierte la Corriente Alterna (220 V) en Corriente Continua (5 a 12 V).</p>
                
                <h4>Fases de transformación</h4>
                <ul>
                    <li><strong>Transformador:</strong> Baja la tensión de 220 V a 5-12 V.</li>
                    <li><strong>Rectificador:</strong> Pasa de alterna a continua.</li>
                    <li><strong>Filtro:</strong> Elimina oscilaciones.</li>
                    <li><strong>Regulador:</strong> Estabiliza la salida frente a cambios de consumo.</li>
                </ul>

                <h4>Estándar ATX (Actual)</h4>
                <p>Divide el funcionamiento en una parte principal y una auxiliar (siempre encendida), permitiendo el encendido por software.</p>
                
                <h4>Conectores clave</h4>
                <ul>
                    <li><strong>ATX 20/24 pines:</strong> Alimenta la placa base.</li>
                    <li><strong>ATX 12V:</strong> Alimentación exclusiva del procesador.</li>
                    <li><strong>Molex 4 pines:</strong> Para discos duros antiguos (IDE) y ventiladores.</li>
                    <li><strong>SATA:</strong> Conector plano de alimentación para discos modernos.</li>
                    <li><strong>PCI Express:</strong> Alimentación extra para tarjetas gráficas potentes.</li>
                    <li><strong>Berg 4p:</strong> Específico para disqueteras.</li>
                </ul>

                <h3>3. El Microprocesador (CPU)</h3>
                <p>El cerebro del ordenador. Su potencia no depende solo de la frecuencia, sino de su arquitectura.</p>
                
                <h4>Arquitecturas de instrucciones</h4>
                <ul>
                    <li><strong>CISC (Complex Instruction Set):</strong> Muchas instrucciones complejas. Requieren varios ciclos de reloj para ejecutarse. Difícil decodificación.</li>
                    <li><strong>RISC (Reduced Instruction Set):</strong> Instrucciones simples y muy rápidas (un ciclo de reloj). Circuitería más sencilla y eficiente.</li>
                    <li><strong>Actualidad:</strong> La mayoría son híbridos o usan tecnologías como EPIC (paralelismo explícito).</li>
                </ul>

                <h4>Características clave</h4>
                <ul>
                    <li><strong>Longitud de palabra:</strong> Cantidad máxima de bits (16, 32 o 64) que maneja en un acceso a memoria.</li>
                    <li><strong>Nivel de integración:</strong> Menor espacio entre componentes = mayor velocidad y menor consumo.</li>
                    <li><strong>Núcleos:</strong> Siempre aparecen en número par (2, 4, 6, etc.) y trabajan cooperativamente.</li>
                </ul>

                <h3>4. Sistema de Refrigeración</h3>
                <p>Esencial para evitar daños por calor.</p>
                
                <h4>Refrigeración Pasiva (Sin partes móviles)</h4>
                <ul>
                    <li><strong>Disipador:</strong> Bloque de metal (cobre/aluminio) con aletas para maximizar el contacto con el aire.</li>
                    <li><strong>Pasta Térmica:</strong> Compuesto viscoso (basado en silicona, plata o cobre) que elimina el aire entre el procesador y el disipador para mejorar la conducción.</li>
                </ul>

                <h4>Refrigeración Activa (Mecánica)</h4>
                <ul>
                    <li><strong>Ventilador:</strong> Cuanto mayor es su diámetro, menos revoluciones necesita para mover el mismo aire, generando menos ruido.</li>
                    <li><strong>Refrigeración Líquida:</strong> Usa una bomba (mueve el líquido), radiador (enfría el líquido con ventiladores) y tubos. El líquido suele ser agua destilada con anticongelante.</li>
                    <li><strong>Refrigeración Iónica:</strong> Tecnología avanzada que ioniza partículas de aire para crear flujo sin partes móviles.</li>
                </ul>

                <h3>5. La Memoria RAM</h3>
                <p>Almacén temporal de datos. Se clasifica por su tecnología y formato físico.</p>
                <p><strong>Fórmula de Rendimiento:</strong> Tasa de transferencia (MB/s) = Frecuencia efectiva (MHz) × Ancho de bus (bytes)</p>
                <p><em>Nota: El ancho de bus en memorias modernas suele ser 64 bits (8 Bytes).</em></p>

                <h4>Evolución de módulos DDR (Double Data Rate)</h4>
                <ul>
                    <li><strong>SDR (Single Data Rate):</strong> 1 dato por ciclo. 168 contactos, 2 muescas, 3.3 V.</li>
                    <li><strong>DDR:</strong> 2 datos por ciclo. 184 contactos, 1 muesca, 2.5 V.</li>
                    <li><strong>DDR2:</strong> 4 datos por ciclo. 240 contactos, 1 muesca, 1.8 V.</li>
                    <li><strong>DDR3:</strong> 8 datos por ciclo. 240 contactos (muesca en distinta posición que DDR2), 1.5 V.</li>
                </ul>

                <h4>Otros tipos</h4>
                <ul>
                    <li><strong>ECC (Error Correcting Code):</strong> Detectan y corrigen errores de datos. Son más lentas y usadas en servidores.</li>
                    <li><strong>SO-DIMM:</strong> Versión reducida para portátiles (aprox. la mitad de tamaño que un DIMM).</li>
                </ul>

                <h3>6. Dispositivos de Almacenamiento</h3>
                
                <h4>Discos Duros Magnéticos (HDD)</h4>
                <p><strong>Estructura lógica:</strong></p>
                <ul>
                    <li><strong>Pistas:</strong> Círculos concéntricos en el plato.</li>
                    <li><strong>Cilindros:</strong> El conjunto vertical de pistas en varios platos.</li>
                    <li><strong>Sectores:</strong> División de la pista (512 bytes). Es la unidad mínima.</li>
                    <li><strong>Clúster:</strong> Grupo de sectores.</li>
                </ul>

                <h4>Dispositivos Ópticos (CD/DVD/BluRay)</h4>
                <ul>
                    <li>A diferencia del HDD, la información se graba en una espiral continua (no círculos concéntricos).</li>
                    <li>Físicamente son hoyos (pits) y valles (lands) que reflejan el láser de forma distinta.</li>
                    <li><strong>BluRay:</strong> Almacena desde 25 GB por capa (hasta 20 capas teóricas).</li>
                </ul>

                <h4>Estado Sólido (SSD)</h4>
                <p>Basados en memoria Flash NAND no volátil.</p>
                <p><strong>Ventajas:</strong> Sin ruido, menor consumo, resistentes a golpes y mucho más rápidos que los HDD.</p>

                <h3>7. Tarjetas de Expansión</h3>
                
                <h4>Tarjeta Gráfica</h4>
                <p>Tiene su propio procesador (GPU) y memoria (VRAM). La VRAM puede ser dedicada (propia de la tarjeta) o compartida (usa la RAM del sistema).</p>

                <h4>Tarjeta de Red (NIC)</h4>
                <ul>
                    <li><strong>Identificador único físico:</strong> Dirección MAC (48 bits).</li>
                    <li><strong>Conector estándar:</strong> RJ-45 (Ethernet).</li>
                </ul>

                <h4>Tarjeta de Sonido</h4>
                <p><strong>Función principal:</strong> Conversor Analógico-Digital (ADC) y Digital-Analógico (DAC) para procesar audio.</p>
            `
        },
        {
            title: 'Tema 4: Puertos y Conectores',
            desc: 'Tipos de conectores, puertos serie/paralelo, USB, Firewire, vídeo, audio, red, inalámbricos y alimentación.',
            quiz: [
                { q: '¿De qué color es habitualmente el conector Jack de 3.5mm para salida de altavoces?', opts: ['Rosa', 'Azul', 'Verde', 'Naranja'], correct: 2 },
                { q: '¿Qué interfaz multimedia transmite audio y vídeo digital de alta definición en un solo cable?', opts: ['VGA', 'DVI', 'HDMI', 'RCA'], correct: 2 },
                { q: '¿Qué conector se utiliza para redes Ethernet estándar?', opts: ['RJ-11', 'RJ-45', 'USB-B', 'PS/2'], correct: 1 },
                { q: '¿Qué característica define al USB "Hot-swap"?', opts: ['Mayor velocidad de transferencia', 'Capacidad de carga eléctrica', 'Conexión y desconexión en caliente (sin apagar)', 'Conexión inalámbrica'], correct: 2 },
                { q: '¿Qué puerto se utilizaba antiguamente para impresoras (LPT)?', opts: ['Puerto Serie', 'Puerto Paralelo', 'Puerto USB', 'Puerto Firewire'], correct: 1 },
                { q: '¿Qué conector de vídeo es el sustituto natural del euroconector al llevar audio y vídeo?', opts: ['VGA', 'DVI', 'HDMI', 'S-Video'], correct: 2 },
                { q: '¿De qué color es el puerto PS/2 para el teclado?', opts: ['Verde', 'Violeta', 'Azul', 'Negro'], correct: 1 },
                { q: '¿Qué versión de USB alcanza una velocidad teórica de 4.8 Gbps?', opts: ['USB 1.1', 'USB 2.0', 'USB 3.0', 'USB-C'], correct: 2 },
                { q: '¿Qué puerto inalámbrico requiere una línea de visión directa para funcionar?', opts: ['Bluetooth', 'WiFi', 'Infrarrojos (IrDA)', 'ZigBee'], correct: 2 },
                { q: '¿Qué conector se usa para la alimentación extra de tarjetas gráficas PCIe?', opts: ['Molex', 'SATA', 'PEG (6 u 8 pines)', 'ATX 4 pines'], correct: 2 }
            ],
            content: `
                <h3>1. Conceptos Básicos de Conexión</h3>
                <p>Los ordenadores utilizan "puertos" (en la placa o tarjetas) y "conectores" (en los cables) para interconectar dispositivos.</p>
                
                <ul>
                    <li><strong>Pines y Contactos:</strong> La conexión física se realiza mediante pines (patillas metálicas) y contactos.</li>
                    <li><strong>Género:</strong>
                        <ul>
                            <li><strong>Macho (M):</strong> Tiene pines que se insertan.</li>
                            <li><strong>Hembra (F):</strong> Tiene orificios para recibir los pines. Generalmente, los puertos del equipo son hembra.</li>
                        </ul>
                    </li>
                    <li><strong>Adaptadores y Hubs:</strong> Los adaptadores transforman un tipo de conector en otro, mientras que los Hubs (adaptadores múltiples) ofrecen varios conectores desde una sola salida.</li>
                </ul>

                <h3>2. Tipos de Conectores Generales</h3>
                <ul>
                    <li><strong>DIN y Mini-DIN:</strong> Estándares alemanes. El DIN tiene 13,2 mm de diámetro y el Mini-DIN (más común en PC antiguos) tiene 9,5 mm.</li>
                    <li><strong>D-sub (D-subminiature):</strong> Conectores con borde metálico en forma de "D" que protege los pines organizados en filas (ej. puerto serie o VGA).</li>
                    <li><strong>RCA:</strong> Conector circular de 8,5 mm usado para audio y vídeo, codificado por colores.</li>
                    <li><strong>Jack:</strong> Usado para audio analógico. Tamaños: 2,5 mm (mini), 3,5 mm (estándar PC) y 6,35 mm (profesional).</li>
                </ul>

                <h3>3. Puertos Serie y Paralelo (Legacy)</h3>
                <ul>
                    <li><strong>PS/2 (Mini-DIN 6):</strong> Puerto para teclado (violeta) y ratón (verde). Está en desuso frente al USB.</li>
                    <li><strong>Puerto Serie (COM):</strong> Conector DE-9M (macho de 9 pines). Transmite datos bit a bit. Usado hoy para configurar routers o consolas.</li>
                    <li><strong>Puerto Paralelo (LPT):</strong> Conector DB-25F (hembra de 25 pines). Transmite 1 byte simultáneamente. Usado antiguamente para impresoras.</li>
                </ul>

                <h3>4. El Puerto USB (Universal Serial Bus)</h3>
                <p>Sistema estándar "Plug-and-Play" y conexión en caliente ("hot-swap").</p>
                <p><strong>Características:</strong> 4 pines (Datos, alimentación 5V, masa). Permite conectar hasta 127 dispositivos en cadena.</p>
                
                <h4>Versiones</h4>
                <ul>
                    <li><strong>1.0:</strong> Baja velocidad (1,5 - 12 Mbps).</li>
                    <li><strong>2.0:</strong> Alta velocidad (480 Mbps).</li>
                    <li><strong>3.0:</strong> Super velocidad (4,8 Gbps), suele ser de color azul.</li>
                </ul>

                <h4>Tipos físicos</h4>
                <p>USB-A (PC), USB-B (periféricos), Mini-USB y Micro-USB (dispositivos pequeños como móviles).</p>

                <h3>5. El Puerto Firewire (IEEE 1394)</h3>
                <p>Estándar de alta velocidad para multimedia (videocámaras). Alimenta dispositivos hasta 25V.</p>
                
                <h4>Tipos</h4>
                <ul>
                    <li><strong>S400:</strong> 4 o 6 pines (400 Mbps).</li>
                    <li><strong>S800:</strong> 9 pines (786 Mbps).</li>
                    <li><strong>S1600/S3200:</strong> Hasta 3,2 Gbps.</li>
                </ul>

                <h3>6. Puertos de Vídeo</h3>
                <ul>
                    <li><strong>VGA (Video Graphics Array):</strong> Estándar analógico. Conector DE-15F (15 pines en 3 filas), color azul.</li>
                    <li><strong>DVI (Digital Video Interface):</strong> Transmite vídeo digital.
                        <ul>
                            <li><strong>DVI-D:</strong> Solo digital.</li>
                            <li><strong>DVI-A:</strong> Solo analógico.</li>
                            <li><strong>DVI-I:</strong> Integrado (ambos).</li>
                        </ul>
                    </li>
                    <li><strong>HDMI:</strong> Interfaz multimedia de alta definición (audio + vídeo). 19 pines. Es el sustituto del euroconector.</li>
                    <li><strong>S-Video:</strong> Mini-DIN de 4 o 7 pines. Mejor calidad que el RCA compuesto.</li>
                </ul>

                <h3>7. Puertos de Audio</h3>
                <h4>Jack 3.5 mm (Código de colores estándar)</h4>
                <ul>
                    <li><strong>Verde:</strong> Salida estéreo (Altavoces/Auriculares).</li>
                    <li><strong>Azul:</strong> Entrada de línea.</li>
                    <li><strong>Rosa:</strong> Micrófono.</li>
                    <li><strong>Colores extra (Naranja, Negro, Gris):</strong> Para sonido envolvente 5.1/7.1.</li>
                </ul>

                <h4>Otros conectores de audio</h4>
                <ul>
                    <li><strong>S/PDIF:</strong> Salida de audio digital, usa conector RCA naranja (coaxial) o fibra óptica.</li>
                    <li><strong>MIDI:</strong> Interfaz digital para instrumentos musicales. Conector DIN-5.</li>
                </ul>

                <h3>8. Puertos de Comunicaciones (Red)</h3>
                <ul>
                    <li><strong>RJ-11 / RJ-12 (6P):</strong> Usados en telefonía. Tienen 6 posiciones pero usan 2 o 4 contactos.</li>
                    <li><strong>RJ-45 (8P8C):</strong> Estándar para redes Ethernet. Tiene 8 pines.</li>
                    <li><strong>Fibra Óptica:</strong> Transmisión por pulsos de luz. Conectores comunes: ST, SC, LC y FC.</li>
                </ul>

                <h3>9. Puertos Inalámbricos</h3>
                <ul>
                    <li><strong>WiFi (IEEE 802.11):</strong> Requiere antena. Estándares b/g/n.</li>
                    <li><strong>Bluetooth:</strong> Radiofrecuencia 2.4 GHz para corto alcance (PAN). Versiones 1.x, 2.0, 3.0.</li>
                    <li><strong>ZigBee (IEEE 802.15.4):</strong> Bajo consumo, usado en domótica y sensores. Topología en malla.</li>
                    <li><strong>Infrarrojos (IrDA):</strong> En desuso, requiere línea de visión directa.</li>
                </ul>

                <h3>10. Conectores de Alimentación (Internos)</h3>
                <p>Conectan la fuente de alimentación a la placa y componentes.</p>
                <ul>
                    <li><strong>ATX Principal:</strong> 20 o 24 pines.</li>
                    <li><strong>ATX 12V / EPS:</strong> 4 u 8 pines para alimentar el procesador.</li>
                    <li><strong>PEG (PCIe):</strong> 6 u 8 pines para alimentar tarjetas gráficas potentes.</li>
                    <li><strong>Molex 4p:</strong> Para unidades antiguas y ventiladores.</li>
                </ul>

                <h3>11. Conectores de Disco Duro</h3>
                <ul>
                    <li><strong>IDE (PATA):</strong> Cable plano ancho.
                        <ul>
                            <li>40 pines: Sobremesa.</li>
                            <li>44 pines: Portátiles (lleva alimentación incluida).</li>
                        </ul>
                    </li>
                    <li><strong>SATA:</strong> Conector en forma de "L" de 7 pines. Estándar actual.</li>
                    <li><strong>SCSI:</strong> Usado antiguamente en servidores.</li>
                </ul>
            `
        },
        {
            title: 'Tema 5: Periféricos de Entrada',
            desc: 'Teclado, ratón, escáner, tableta digitalizadora, webcam/netcam y micrófono.',
            quiz: [
                { q: '¿Qué tecnología de ratón utiliza un sensor óptico y un procesador de señal digital (DSP)?', opts: ['Ratón mecánico', 'Ratón de bola', 'Ratón óptico', 'Trackpoint'], correct: 2 },
                { q: '¿Qué significa OCR en el contexto de un escáner?', opts: ['Reconocimiento Óptico de Marcas', 'Reconocimiento Óptico de Caracteres', 'Resolución de Color Óptima', 'Organización de Recursos'], correct: 1 },
                { q: '¿Qué tipo de teclado es el más común en ordenadores de sobremesa por su mecanismo?', opts: ['Mecánico', 'De membrana', 'Proyección láser', 'Flexible'], correct: 1 },
                { q: '¿Qué dispositivo es fundamental para el diseño gráfico por detectar presión e inclinación?', opts: ['Ratón gamer', 'Trackball', 'Tableta digitalizadora', 'Touchpad'], correct: 2 },
                { q: '¿Qué diferencia principal tiene una Netcam (Cámara IP) de una Webcam?', opts: ['Tiene menor resolución', 'No necesita un PC, se conecta directo a la red', 'Solo funciona con USB', 'Es en blanco y negro'], correct: 1 },
                { q: '¿Qué tipo de escáner se usa para corregir exámenes tipo test automáticamente?', opts: ['OCR', 'OMR', 'Código de Barras', 'Escáner 3D'], correct: 1 },
                { q: '¿Qué tecla se utiliza para capturar la pantalla?', opts: ['Esc', 'Supr', 'Impr Pant', 'Bloq Num'], correct: 2 },
                { q: '¿Cómo se llama el ratón que tiene una bola en la parte superior y se mueve con el dedo?', opts: ['Touchpad', 'Trackpoint', 'Trackball', 'Ratón mecánico'], correct: 2 },
                { q: '¿Qué periférico de entrada digitaliza documentos físicos?', opts: ['Impresora', 'Escáner', 'Webcam', 'Monitor'], correct: 1 },
                { q: '¿Qué conexión es la más habitual hoy en día para teclados y ratones?', opts: ['PS/2', 'Puerto Serie', 'USB', 'Paralelo'], correct: 2 }
            ],
            content: `
                <h3>1. Concepto General de Periférico de Entrada</h3>
                <p>Un periférico de entrada es el dispositivo encargado de digitalizar el mundo exterior. Su función es transformar información física (pulsaciones, luz, sonido, movimiento) en señales eléctricas codificadas (código binario) que el ordenador puede procesar.</p>
                
                <h4>Composición interna</h4>
                <p>Todo periférico tiene dos partes:</p>
                <ul>
                    <li><strong>Elementos mecánicos:</strong> Piezas móviles como motores o electroimanes.</li>
                    <li><strong>Elementos electrónicos (Controlador):</strong> Interpretan las órdenes del procesador y gestionan los datos captados.</li>
                </ul>

                <h3>2. El Teclado (Keyboard)</h3>
                <p>Es el dispositivo principal para la introducción de datos. Su funcionamiento varía según si es de sobremesa o portátil.</p>
                
                <h4>Mecanismo de funcionamiento</h4>
                <ul>
                    <li><strong>Sobremesa:</strong> Funciona mediante una alfombrilla de elastómero. Al pulsar una tecla, un botón de goma se hunde y conecta dos láminas de circuito separadas, cerrando el contacto eléctrico.</li>
                    <li><strong>Portátil:</strong> Para ahorrar espacio, usa una sola lámina de circuito y la tecla tiene una silicona conductora incorporada.</li>
                </ul>

                <h4>Distribución</h4>
                <p>La más común es QWERTY (basada en máquinas de escribir), aunque existen variantes geográficas (como la tecla Ñ en español) o funcionales (teclados multimedia).</p>

                <h4>Tipos de teclas</h4>
                <p>Se dividen en Alfanuméricas (letras/números), Numéricas (calculadora), de Función (F1-F12), de Movimiento (flechas) y Especiales (Esc, Impr Pant).</p>

                <h3>3. El Ratón (Mouse)</h3>
                <p>Dispositivo apuntador que traduce movimiento físico en coordenadas (X, Y) en la pantalla.</p>
                
                <h4>Evolución Tecnológica</h4>
                <ul>
                    <li><strong>Mecánico (Bola):</strong> Usaba una bola de goma que movía rodillos internos. Requería limpieza frecuente y alfombrilla.</li>
                    <li><strong>Óptico:</strong> Es el estándar actual. Utiliza un sensor óptico (una pequeña cámara) que toma miles de fotografías por segundo de la superficie. Un procesador interno compara las imágenes para calcular el movimiento. No funciona bien en cristal o espejos.</li>
                </ul>

                <h4>Variantes para Portátiles</h4>
                <ul>
                    <li><strong>Touchpad:</strong> Superficie táctil que detecta el dedo mediante efecto de plasma eléctrico.</li>
                    <li><strong>Trackpoint:</strong> Pequeño pivote rugoso entre las teclas (G, H, B) típico de IBM/Lenovo, sensible a la presión.</li>
                </ul>

                <h4>Otras variantes</h4>
                <ul>
                    <li><strong>Trackball:</strong> La bola está arriba y se mueve con el dedo (ideal para diseño o falta de espacio).</li>
                    <li><strong>Lápiz Óptico/Interactivo:</strong> Interactúa directamente sobre la pantalla detectando el refresco de los píxeles.</li>
                </ul>

                <h3>4. El Escáner</h3>
                <p>Digitaliza documentos impresos. La calidad se mide en ppp o dpi (píxeles por pulgada); a mayor número, mayor detalle.</p>
                
                <h4>Funcionamiento</h4>
                <p>Una fuente de luz (láser) ilumina el documento línea por línea. La luz reflejada es captada por sensores optoelectrónicos que la convierten en carga eléctrica, generando un mapa de bits.</p>

                <h4>Tecnologías de Reconocimiento</h4>
                <ul>
                    <li><strong>OCR (Optical Character Recognition):</strong> Convierte la imagen de un texto en texto editable (Word, TXT).</li>
                    <li><strong>OMR (Optical Mark Recognition):</strong> Detecta marcas oscuras en casillas predefinidas. Se usa para corregir exámenes tipo test o loterías.</li>
                    <li><strong>Código de Barras:</strong> Lee el grosor y espaciado de líneas paralelas para identificar productos.</li>
                </ul>

                <h3>5. Tableta Digitalizadora</h3>
                <p>Herramienta clave para diseño gráfico y CAD. Permite dibujar con precisión de "lápiz y papel".</p>
                
                <h4>Tipos según el estilete (lápiz)</h4>
                <ul>
                    <li><strong>Pasivas:</strong> Usan una malla de hilos en la tableta que detecta la señal electromagnética del lápiz. El lápiz no lleva pilas.</li>
                    <li><strong>Activas:</strong> El lápiz lleva batería/pila y emite su propia señal.</li>
                </ul>

                <h4>Capacidades</h4>
                <p>Detectan no solo la posición, sino también la presión ejercida y la inclinación del lápiz.</p>

                <h3>6. Webcam y Netcam</h3>
                
                <h4>Webcam</h4>
                <p>Cámara conectada por USB. La calidad de vídeo depende de los FPS (Frames por Segundo). A mayor resolución, suele bajar la velocidad de FPS si la cámara no es potente. Usan sensores CMOS.</p>

                <h4>Netcam (Cámara IP)</h4>
                <p>No necesita un PC encendido. Es un dispositivo de red autónomo (tiene su propia IP) que se conecta al Router (Ethernet o WiFi). Se usa para videovigilancia remota, puede tener visión nocturna y enviar alertas por email.</p>

                <h3>7. El Micrófono</h3>
                <p>Transductor que convierte ondas sonoras en señales eléctricas.</p>
                
                <h4>Conexión</h4>
                <ul>
                    <li><strong>Estándar doméstico:</strong> Jack 3.5 mm de color Rosa.</li>
                    <li><strong>Profesional:</strong> Jack 6.3 mm o XLR.</li>
                </ul>

                <h4>Integración</h4>
                <p>En portátiles modernos suele estar oculto en el marco de la pantalla, eliminando la necesidad de conectar uno externo.</p>
            `
        },
        {
            title: 'Tema 6: Periféricos de Salida',
            desc: 'Monitor, impresora, plóter, altavoces y teoría del color.',
            quiz: [
                { q: '¿Qué modelo de color se utiliza en los monitores (mezcla aditiva)?', opts: ['CMYK', 'RGB', 'HSB', 'Pantone'], correct: 1 },
                { q: '¿Qué tecnología de impresión utiliza tóner y un rodillo fotosensible?', opts: ['Inyección de tinta', 'Matricial', 'Láser', 'Térmica'], correct: 2 },
                { q: '¿Qué parámetro del monitor define la distancia entre puntos del mismo color?', opts: ['Resolución', 'Tasa de refresco', 'Dot pitch', 'Luminancia'], correct: 2 },
                { q: '¿Para qué se utiliza principalmente un Plóter?', opts: ['Imprimir facturas', 'Impresión fotográfica doméstica', 'Planos de arquitectura y gran formato', 'Imprimir tickets de compra'], correct: 2 },
                { q: '¿Qué conector de vídeo es puramente analógico?', opts: ['HDMI', 'DVI-D', 'VGA', 'DisplayPort'], correct: 2 },
                { q: '¿Qué tecnología de monitor utiliza un cañón de electrones?', opts: ['LCD', 'LED', 'CRT', 'TFT'], correct: 2 },
                { q: '¿Qué colores forman el modelo CMYK usado en impresoras?', opts: ['Rojo, Verde, Azul', 'Cian, Magenta, Amarillo, Negro', 'Blanco y Negro', 'Colores primarios'], correct: 1 },
                { q: '¿Qué tipo de impresora utiliza agujas para golpear una cinta entintada?', opts: ['Láser', 'Inyección', 'Matricial', 'Térmica'], correct: 2 },
                { q: '¿Qué altavoz en un sistema 5.1 se encarga de los sonidos graves?', opts: ['Delantero derecho', 'Trasero izquierdo', 'Subwoofer', 'Central'], correct: 2 },
                { q: '¿Qué conexión de vídeo es capaz de enviar señal tanto analógica como digital?', opts: ['VGA', 'DVI-D', 'DVI-I', 'RCA'], correct: 2 }
            ],
            content: `
                <h3>1. El Monitor</h3>
                <p>Es el periférico más importante, encargado de mostrar la información procesada por el equipo.</p>
                
                <h4>Conexiones</h4>
                <ul>
                    <li><strong>Analógicas:</strong> VGA, RCA, S-Vídeo.</li>
                    <li><strong>Digitales:</strong> DVI, HDMI.</li>
                </ul>

                <h4>Características Técnicas</h4>
                <ul>
                    <li><strong>Tamaño:</strong> Se mide en pulgadas (diagonal).</li>
                    <li><strong>Formato:</strong> Relación ancho/alto. Estándares: 4:3 (clásico) y 16:9 (panorámico).</li>
                    <li><strong>Resolución:</strong> Tamaño del píxel en pantalla (ej. 1280x1024).</li>
                    <li><strong>Dot pitch:</strong> Distancia entre puntos del mismo color. A menor distancia, mayor nitidez.</li>
                    <li><strong>Ángulo de visión:</strong> Fundamental en pantallas planas; determina desde qué ángulo se ve bien la imagen (aprox. 170º en TFT).</li>
                </ul>

                <h4>Tipos de Monitor</h4>
                <ul>
                    <li><strong>Displays:</strong> Pequeños visualizadores (7 segmentos, matriz de puntos) usados en calculadoras o cajas de PC.</li>
                    <li><strong>CRT (Tubo de Rayos Catódicos):</strong> Tecnología antigua. Usa un cañón de electrones que impacta sobre una pantalla de fósforo. Son voluminosos y consumen mucha energía.</li>
                    <li><strong>LCD (Cristal Líquido):</strong> Dos capas polarizadas con cristal líquido en medio. Consumen poco y no emiten radiación, pero pueden dejar estela en imágenes rápidas.</li>
                    <li><strong>TFT (Transistor de Película Delgada):</strong> Evolución del LCD. Cada píxel tiene su propio transistor, mejorando contraste, color y velocidad.</li>
                </ul>

                <h3>2. La Impresora</h3>
                <p>Periférico para obtener información en formato impreso.</p>
                
                <h4>Características</h4>
                <ul>
                    <li><strong>Velocidad:</strong> Se mide en ppm (páginas por minuto).</li>
                    <li><strong>Resolución:</strong> Se mide en ppp (píxeles por pulgada).</li>
                    <li><strong>Buffer:</strong> Memoria RAM interna para gestionar la cola de impresión.</li>
                </ul>

                <h4>Tipos de Impresora</h4>
                <ul>
                    <li><strong>Inyección de tinta (Inkjet):</strong> Inyectan tinta líquida mediante cabezales. Baratas, pero el consumible (cartucho) es caro.</li>
                    <li><strong>Láser:</strong> Usan tóner (polvo con carga electrostática). Un láser dibuja la imagen en un rodillo, el tóner se pega al rodillo y luego se transfiere al papel y se fija con calor (fusor). Son rápidas y el coste por copia es bajo.</li>
                    <li><strong>Matricial:</strong> Agujas golpean una cinta entintada contra el papel (papel continuo). Ruidosas y de baja calidad, usadas para facturas/albaranes.</li>
                    <li><strong>Térmica:</strong> Usan calor sobre papel sensible. Típicas en tickets y cajeros. El papel se oscurece con el calor o el tiempo.</li>
                    <li><strong>Sublimación:</strong> Alta calidad fotográfica mediante calor y cintas de color.</li>
                    <li><strong>Tinta Sólida:</strong> Usan bloques de cera que se derriten.</li>
                </ul>

                <h3>3. El Plóter</h3>
                <p>Impresora de gran formato para diseño técnico, arquitectura e ingeniería.</p>
                <ul>
                    <li><strong>Funcionamiento:</strong> Usa plumillas mecánicas para dibujar con gran precisión o inyección de tinta.</li>
                    <li><strong>Plóter de corte:</strong> Sustituye la pluma por una cuchilla. Se usa para cortar vinilo en rotulación.</li>
                    <li><strong>Soporte:</strong> Suelen usar rollos de papel de gran ancho (90-150 cm) y longitud.</li>
                </ul>

                <h3>4. Los Altavoces</h3>
                <p>Reproducen el sonido. No confundir con el altavoz interno de la placa (beeps de diagnóstico).</p>
                
                <h4>Sistema 5.1 (Home Cinema)</h4>
                <ul>
                    <li><strong>1 Subwoofer (Central):</strong> Sonidos graves.</li>
                    <li><strong>2 Altavoces Traseros:</strong> Sonido ambiente.</li>
                    <li><strong>2 Altavoces Delanteros:</strong> Resto de sonidos.</li>
                </ul>
                <p><strong>Conexión:</strong> Generalmente Jack de 3.5 mm (color verde) o RCA.</p>

                <h3>Mundo Laboral: Teoría del Color</h3>
                <p>Es crucial distinguir entre los modos de color para pantalla e impresión:</p>
                <ul>
                    <li><strong>RGB (Rojo, Verde, Azul):</strong> Colores aditivos (luz). Usados en monitores. La suma de todos da blanco.</li>
                    <li><strong>CMYK (Cian, Magenta, Amarillo, Negro):</strong> Colores sustractivos (pigmento). Usados en impresoras. La suma da negro (K se añade para profundidad y ahorro de tinta).</li>
                </ul>
            `
        },
        {
            title: 'Tema 7: Dispositivos de Almacenamiento',
            desc: 'Disco duro (HDD), SSD, unidades ópticas (CD/DVD/BluRay), memorias flash y disquetes.',
            quiz: [
                { q: '¿Cuál es la unidad mínima de información física en un disco duro?', opts: ['Pista', 'Cilindro', 'Sector', 'Clúster'], correct: 2 },
                { q: '¿Qué tecnología de memoria utilizan los SSD?', opts: ['Magnética', 'Óptica', 'Flash NAND', 'DRAM'], correct: 2 },
                { q: '¿Cuál es la capacidad estándar de un DVD de una capa?', opts: ['700 MB', '4.7 GB', '8.5 GB', '25 GB'], correct: 1 },
                { q: '¿Qué sistema de archivos es el estándar moderno para Windows?', opts: ['FAT32', 'ext4', 'NTFS', 'HFS+'], correct: 2 },
                { q: '¿Qué ventaja tiene el láser azul del BluRay frente al rojo del DVD?', opts: ['Es más barato', 'Permite mayor densidad de datos (menor longitud de onda)', 'Es más rápido de leer', 'No se calienta'], correct: 1 },
                { q: '¿A qué velocidad típica giran los discos duros de sobremesa?', opts: ['5400 rpm', '7200 rpm', '10000 rpm', '15000 rpm'], correct: 1 },
                { q: '¿Qué interfaz de disco duro requiere configurar Jumpers como Maestro/Esclavo?', opts: ['SATA', 'SCSI', 'IDE (PATA)', 'USB'], correct: 2 },
                { q: '¿Qué capacidad aproximada tiene un CD estándar?', opts: ['1.44 MB', '700 MB', '4.7 GB', '25 GB'], correct: 1 },
                { q: '¿Qué componente del disco duro lee la información de los platos?', opts: ['El motor', 'El cabezal magnético', 'El bus de datos', 'La caché'], correct: 1 },
                { q: '¿Qué formato de disco duro es el estándar para portátiles?', opts: ['3.5 pulgadas', '2.5 pulgadas', '5.25 pulgadas', '1.8 pulgadas'], correct: 1 }
            ],
            content: `
                <h3>1. El Disco Duro (HDD - Hard Disk Drive)</h3>
                <p>Es el dispositivo de almacenamiento masivo por excelencia. Su función es guardar grandes cantidades de datos de forma permanente, incluyendo el sistema operativo.</p>
                
                <h4>Funcionamiento y Estructura Física</h4>
                <p>El disco duro es un dispositivo magnético.</p>
                <ul>
                    <li><strong>Componentes internos:</strong> Está compuesto por varios platos (generalmente de aluminio) recubiertos de material magnetizable, apilados sobre un eje que gira gracias a un motor.</li>
                    <li><strong>Lectura/Escritura:</strong> Para leer y escribir, utiliza cabezales magnéticos que se sitúan a una distancia microscópica de la superficie del plato sin tocarla. Estos cabezales se mueven radialmente mediante un brazo mecánico.</li>
                    <li><strong>Velocidad:</strong> Los platos giran a velocidades muy altas, típicamente 7.200 rpm (aprox. 130 km/h) en sobremesa, aunque existen versiones de 5.400, 10.000 y 15.000 rpm. Esta velocidad crea un colchón de aire que permite al cabezal "volar" sobre el disco. Si la velocidad baja, el cabezal se retira a una "zona de aterrizaje" para evitar rayar el disco.</li>
                    <li><strong>Organización de datos:</strong> La información se estructura lógica y físicamente en Platos, Caras, Cilindros, Pistas y Sectores. La capacidad total se calcula multiplicando estos factores.</li>
                </ul>

                <h4>Formatos y Conexiones</h4>
                <p><strong>Tamaños (Factor de forma):</strong></p>
                <ul>
                    <li><strong>3,5 pulgadas:</strong> Estándar para ordenadores de sobremesa. Requieren alimentación eléctrica directa de la fuente.</li>
                    <li><strong>2,5 pulgadas:</strong> Estándar para portátiles. Son más pequeños y suelen alimentarse solo con la conexión de datos (en casos externos) o interna.</li>
                </ul>

                <p><strong>Interfaces de Conexión:</strong></p>
                <ul>
                    <li><strong>IDE (PATA):</strong> Conector antiguo de 40 pines (sobremesa) o 44 pines (portátil). Requiere configuración de "Maestro" o "Esclavo" mediante jumpers.</li>
                    <li><strong>SATA:</strong> El estándar actual, más rápido y con cables más finos. No requiere configuración maestro/esclavo manual.</li>
                    <li><strong>SCSI:</strong> Utilizado en servidores y entornos profesionales de alto rendimiento.</li>
                    <li><strong>Externos:</strong> Se montan en carcasas que convierten la conexión interna (SATA/IDE) a USB o Firewire.</li>
                </ul>

                <h3>2. Dispositivos de Estado Sólido (SSD)</h3>
                <p>El SSD (Solid State Drive) es la evolución moderna del almacenamiento. A diferencia del disco duro, no tiene partes móviles (no hay discos girando).</p>
                
                <ul>
                    <li><strong>Tecnología:</strong> Utiliza memoria no volátil de tipo Flash NAND. Esto le permite retener datos sin corriente eléctrica.</li>
                </ul>

                <h4>Ventajas sobre el HDD</h4>
                <ul>
                    <li><strong>Velocidad:</strong> Arranque, lectura y escritura mucho más rápidos.</li>
                    <li><strong>Resistencia:</strong> Al no tener piezas mecánicas, soporta golpes y vibraciones que romperían un disco duro convencional.</li>
                    <li><strong>Silencio y Consumo:</strong> Es totalmente silencioso y consume menos energía, generando menos calor.</li>
                </ul>

                <p><strong>Inconveniente:</strong> El costo por bit (precio por GB) sigue siendo más alto que en los discos duros tradicionales.</p>

                <h3>3. Unidades Ópticas (CD, DVD, BluRay)</h3>
                <p>Estos dispositivos utilizan tecnología láser para leer y escribir datos en discos de policarbonato.</p>
                
                <h4>Funcionamiento</h4>
                <ul>
                    <li><strong>Lectura:</strong> Un rayo láser incide sobre la superficie del disco. La información está grabada en una espiral de marcas llamadas hoyos (pits) y valles (lands). Un fotodetector interpreta el reflejo de la luz como ceros y unos.</li>
                    <li><strong>Escritura:</strong> El láser "quema" el sustrato del disco cambiando su reflectividad para crear las marcas.</li>
                    <li><strong>Velocidad:</strong> Se mide en múltiplos de "x". La velocidad base (x1) o "flexo" corresponde a 150 KB/s (velocidad del primer CD de audio).</li>
                </ul>

                <h4>Tipos de Soporte</h4>
                <ul>
                    <li><strong>CD (Compact Disc):</strong> Capacidad de 700-900 MB.</li>
                    <li><strong>DVD (Digital Versatile Disc):</strong> Capacidad estándar de 4,7 GB. Puede tener doble capa (DL) llegando a 8,5 GB o doble cara.</li>
                    <li><strong>BluRay (BD):</strong> Utiliza un láser azul (de ahí su nombre) que permite mayor densidad de datos. Capacidad de 25 GB por capa (hasta 50 GB en doble capa).</li>
                </ul>

                <h3>4. Unidades Flash (Memorias USB y Tarjetas)</h3>
                <p>Son dispositivos de almacenamiento portátiles basados en memorias flash (electrónicas), similares a la tecnología de los SSD pero para transporte de datos.</p>
                
                <ul>
                    <li><strong>Pendrive (Memoria USB):</strong> Integra memoria flash y un conector USB en una carcasa pequeña. Es resistente y muy compatible. Capacidades desde megabytes hasta varios terabytes.</li>
                    <li><strong>Tarjetas de Memoria:</strong> Usadas en cámaras, móviles y consolas. Existen múltiples formatos, a veces incompatibles entre sí, aunque se venden lectores multitarjeta.</li>
                </ul>

                <h4>Tipos comunes de tarjetas</h4>
                <p>SD (Secure Digital) y sus variantes mini/micro, CF (Compact Flash), MS (Memory Stick de Sony), XD y MMC.</p>

                <h3>5. La Disquetera (Tecnología Obsoleta)</h3>
                <p>Aunque casi desaparecida, es importante conocerla históricamente.</p>
                
                <ul>
                    <li><strong>Soporte:</strong> Usaba disquetes de 3,5 pulgadas con una capacidad máxima de 1,44 MB.</li>
                    <li><strong>Tecnología:</strong> Magnética. Una lámina de plástico flexible (mylar) recubierta de material magnetizable giraba dentro de una carcasa de plástico rígido.</li>
                    <li><strong>Variantes de alta capacidad:</strong> Intentaron suceder al disquete unidades como la ZIP (hasta 750 MB) y la JAZ (hasta 2 GB), pero fueron desplazadas por los CD grabables y las memorias USB.</li>
                </ul>
            `
        },
        {
            title: 'Tema 8: Montaje de Equipos Informáticos',
            desc: 'Instalación de componentes, cableado, refrigeración, periféricos y normativa de calidad.',
            quiz: [
                { q: '¿Dónde se debe aplicar la pasta térmica?', opts: ['En los pines del socket', 'Entre el procesador y el disipador', 'En la ranura de la RAM', 'En el conector de la fuente'], correct: 1 },
                { q: '¿Qué precaución es vital al instalar la placa base en la caja?', opts: ['Usar tornillos de plástico', 'Instalar los separadores (latón) para evitar cortocircuitos', 'Conectar primero la corriente', 'Pegarla con adhesivo'], correct: 1 },
                { q: '¿Qué certificación de calidad internacional es la más conocida?', opts: ['ISO 9001', 'Energy Star', '80 Plus', 'RoHS'], correct: 0 },
                { q: '¿Cómo se debe instalar un módulo de RAM?', opts: ['Forzándolo si no entra', 'Alineando la muesca y presionando hasta oír clic', 'Con el ordenador encendido', 'Sin tocar los bordes'], correct: 1 },
                { q: '¿Qué flujo de aire es el ideal en una caja?', opts: ['De arriba a abajo', 'De atrás hacia adelante', 'Entrada por el frente/abajo, salida por atrás/arriba', 'Aleatorio'], correct: 2 },
                { q: '¿Qué tornillos se usan para elevar la placa base del chasis y evitar cortos?', opts: ['Tornillos de madera', 'Separadores o espaciadores (latón)', 'Tuercas ciegas', 'Clavos'], correct: 1 },
                { q: '¿Qué conector alimenta el ventilador de la CPU en la placa base?', opts: ['SYS_FAN', 'CPU_FAN', 'PWR_FAN', 'CHA_FAN'], correct: 1 },
                { q: '¿Cómo se debe apretar los tornillos de la placa base?', opts: ['Al máximo posible', 'En diagonal y sin exceso de presión', 'En círculo', 'Solo con la mano'], correct: 1 },
                { q: '¿Qué es el I/O Shield?', opts: ['El escudo térmico', 'La chapa trasera de conexiones de la placa base', 'El protector del disco duro', 'La carcasa de la fuente'], correct: 1 },
                { q: '¿Qué conector de la fuente alimenta los discos duros SATA?', opts: ['Molex', 'Conector plano SATA', 'ATX 24 pines', 'Floppy'], correct: 1 }
            ],
            content: `
                <h3>1. Componentes Principales (Placa, CPU, RAM)</h3>
                
                <h4>Placa Base (Motherboard)</h4>
                <ul>
                    <li><strong>Instalación:</strong> Se fija a la caja usando tornillos dorados de base. Se debe sustituir la placa troquelada trasera (I/O shield) por la que viene con la placa. Se atornilla siguiendo una técnica diagonal (esquinas opuestas) sin apretar en exceso.</li>
                    <li><strong>Cableado:</strong> Es crucial conectar correctamente los jumpers del panel frontal (encendido, reset, luces LED) siguiendo el manual o la serigrafía de la placa.</li>
                </ul>

                <h4>Microprocesador (CPU)</h4>
                <ul>
                    <li><strong>Montaje:</strong> Se levanta la palanca del socket. Se alinea la marca (triángulo) del procesador con la del socket. Se deja caer suavemente sin presionar ("Zero Insertion Force") y se baja la palanca para fijarlo.</li>
                </ul>

                <h4>Sistema de Refrigeración</h4>
                <ul>
                    <li><strong>CPU:</strong> Se aplica una pequeña cantidad de masilla térmica (tamaño de un guisante) sobre el procesador antes de colocar el disipador y el ventilador. Se conecta el cable de corriente a CPU_FAN.</li>
                    <li><strong>Caja:</strong> Lo ideal es un flujo de aire donde el ventilador inferior introduce aire frío y el superior extrae aire caliente.</li>
                </ul>

                <h4>Memoria RAM</h4>
                <ul>
                    <li><strong>Instalación:</strong> Se abren las pestañas laterales del zócalo. Se alinea la muesca del módulo y se presiona hasta oír un "clic" y ver que las pestañas se cierran solas. Si hay varios zócalos, usar primero el marcado como "1".</li>
                </ul>

                <h3>2. Almacenamiento y Energía</h3>
                
                <h4>Fuente de Alimentación</h4>
                <p>Se coloca en su hueco y se atornilla desde el exterior. Se conectan los cables a la placa base (ATX 20/24 pines + 12V auxiliar) y a las unidades de disco.</p>

                <h4>Disco Duro</h4>
                <p>Se coloca en las bahías internas (generalmente 3.5"). Si es IDE, hay que configurar el Jumper como Maestro o Esclavo. Se conecta el cable de datos (IDE/SATA) y el de alimentación.</p>

                <h4>Unidades Ópticas (CD/DVD/BluRay)</h4>
                <p>Se instalan desde el exterior hacia el interior de la caja (al revés que los discos duros). Requieren retirar el embellecedor frontal de la caja.</p>

                <h3>3. Tarjetas de Expansión</h3>
                <p>Se retira la pletina metálica trasera de la caja correspondiente al slot. Se inserta la tarjeta (ej. gráfica, red) presionando firmemente y se atornilla al chasis. Algunas requieren alimentación extra.</p>

                <h3>4. Periféricos Externos</h3>
                
                <h4>Monitor</h4>
                <p>Se monta la base, se conecta a la corriente y al puerto de vídeo (VGA, DVI, HDMI) del PC.</p>

                <h4>Teclado y Ratón</h4>
                <ul>
                    <li><strong>USB:</strong> Conexión directa (Plug & Play).</li>
                    <li><strong>PS/2:</strong> Conector verde para ratón y violeta para teclado.</li>
                </ul>

                <h4>Altavoces</h4>
                <p>El conector jack verde (estéreo) va a la tarjeta de sonido. En sistemas 2.0, un altavoz es el "principal" (recibe corriente y audio) y el otro es "secundario".</p>

                <h4>Impresora</h4>
                <p>Antes de instalar, hay que preparar los cartuchos (agitar el tóner en láser o quitar precintos en inyección). Generalmente usan USB.</p>

                <h4>Escáner</h4>
                <p>Es vital desbloquear la pestaña de bloqueo del carro (candado) antes de usarlo para evitar averías mecánicas.</p>

                <h3>5. Normativa y Calidad (Mundo Laboral)</h3>
                <p>Es importante conocer las certificaciones de calidad y eficiencia:</p>
                <ul>
                    <li><strong>ISO 9001:</strong> Normalización de calidad internacional.</li>
                    <li><strong>AENOR:</strong> Asociación Española de Normalización.</li>
                    <li><strong>Energy Star:</strong> Certificación de ahorro de energía.</li>
                    <li><strong>80Plus:</strong> Certificación de eficiencia en fuentes de alimentación (Bronze, Silver, Gold, Platinum, Titanium).</li>
                </ul>
            `
        },
        {
            title: 'Tema 9: Seguridad y Procedimientos de Montaje',
            desc: 'Precauciones de seguridad, herramientas, montaje paso a paso y utilidades de diagnóstico.',
            quiz: [
                { q: '¿Qué riesgo principal se evita usando una pulsera antiestática?', opts: ['Electrocución del usuario', 'Daño por descarga electrostática (ESD) a los componentes', 'Cortocircuitos en la red eléctrica', 'Sobrecalentamiento'], correct: 1 },
                { q: '¿Qué componente de la fuente de alimentación puede almacenar alta tensión incluso desconectada?', opts: ['Transformador', 'Ventilador', 'Condensadores', 'Bobinas'], correct: 2 },
                { q: '¿Qué herramienta se usa para medir voltajes en la fuente?', opts: ['Osciloscopio', 'Multímetro (Polímetro)', 'Amperímetro', 'Probador de red'], correct: 1 },
                { q: '¿Qué indica un pitido largo y varios cortos al arrancar (generalmente)?', opts: ['Todo está bien', 'Fallo de memoria RAM', 'Fallo de tarjeta gráfica o vídeo', 'Fallo de disco duro'], correct: 2 },
                { q: '¿Qué es lo primero que se debe hacer antes de manipular el interior del PC?', opts: ['Desconectar la corriente eléctrica', 'Quitar el disco duro', 'Ponerse guantes de lana', 'Encender el monitor'], correct: 0 },
                { q: '¿Qué herramienta es esencial para organizar los cables dentro de la caja?', opts: ['Cinta aislante', 'Bridas', 'Pegamento', 'Grapas'], correct: 1 },
                { q: '¿Qué se debe hacer con la batería de un portátil antes de abrirlo?', opts: ['Cargarla al 100%', 'Retirarla', 'Descargarla completamente', 'No importa'], correct: 1 },
                { q: '¿Por qué no se debe apilar componentes electrónicos unos encima de otros?', opts: ['Porque se rayan', 'Para evitar daños físicos o eléctricos (estática)', 'Porque ocupan mucho espacio', 'Porque se calientan'], correct: 1 },
                { q: '¿Qué herramienta se usa para calentar y unir componentes electrónicos con estaño?', opts: ['Pistola de calor', 'Soldador', 'Mechero', 'Secador'], correct: 1 },
                { q: '¿Qué componente nunca se debe abrir por riesgo de descarga de alta tensión?', opts: ['El disco duro', 'La unidad óptica', 'La fuente de alimentación', 'El ventilador'], correct: 2 }
            ],
            content: `
                <h3>1. Precauciones y Advertencias de Seguridad</h3>
                <p>Antes de tocar cualquier componente, es crítico seguir normas para proteger tanto al técnico como al equipo.</p>
                
                <h4>El puesto de montaje</h4>
                <ul>
                    <li><strong>Orden y limpieza:</strong> Es vital aspirar el polvo (fuera del puesto) para evitar sobrecalentamientos.</li>
                    <li><strong>Ambiente:</strong> Evitar humedad excesiva y asegurar buena ventilación e iluminación (preferiblemente natural).</li>
                    <li><strong>Electricidad:</strong> La instalación eléctrica del taller debe ser adecuada y segura.</li>
                </ul>

                <h4>Seguridad Eléctrica</h4>
                <ul>
                    <li>Usar siempre enchufes con toma de tierra.</li>
                    <li>Desconectar totalmente los equipos de la corriente antes de manipularlos. En portátiles, retirar la batería.</li>
                </ul>

                <h4>Seguridad Electrónica (ESD)</h4>
                <ul>
                    <li><strong>Descarga electrostática:</strong> El técnico debe descargarse de energía estática (tocando metal o usando pulseras) antes de tocar nada.</li>
                    <li><strong>Manipulación:</strong> Los componentes (RAM, tarjetas) se deben coger por los bordes, nunca tocando los pines o chips.</li>
                    <li><strong>Fuente de alimentación:</strong> Nunca manipular su interior, incluso desconectada, ya que sus condensadores almacenan alta tensión.</li>
                    <li><strong>Almacenaje:</strong> Usar bolsas antiestáticas y no apilar componentes unos encima de otros.</li>
                </ul>

                <h3>2. Herramientas y Útiles del Técnico</h3>
                <p>Kit básico necesario para el ensamblaje y diagnóstico:</p>
                
                <h4>Herramientas principales</h4>
                <ul>
                    <li><strong>Multímetro:</strong> Para medir voltajes y comprobar si la fuente de alimentación funciona correctamente.</li>
                    <li><strong>Soldador:</strong> Para reparaciones electrónicas, unir cables o crear conectores.</li>
                    <li><strong>Destornilladores:</strong> Un juego de precisión es esencial.</li>
                    <li><strong>Herramientas para portátiles/móviles:</strong> Púas, espátulas y pinzas (para cables planos y conectores pequeños).</li>
                </ul>

                <h4>Consumibles</h4>
                <ul>
                    <li><strong>Pasta térmica:</strong> Compuesto (cerámico o metálico) para mejorar la conducción de calor entre el procesador y el disipador.</li>
                    <li><strong>Tubo retráctil:</strong> Para aislar empalmes de cables.</li>
                    <li><strong>Bridas y tornillería:</strong> Para organizar cables y fijar componentes (usando siempre la métrica de tornillo adecuada).</li>
                </ul>

                <h3>3. Montaje del Equipo (Paso a Paso)</h3>
                
                <h4>3.1. La Placa Base</h4>
                <ul>
                    <li><strong>Máscara (I/O Shield):</strong> Primero se fija la chapa metálica trasera en el hueco de la caja.</li>
                    <li><strong>Tornillos espaciadores:</strong> Se colocan los separadores (latón) en el chasis para elevar la placa y evitar cortocircuitos.</li>
                    <li><strong>Fijación:</strong> Se atornilla la placa base sobre estos espaciadores.</li>
                </ul>

                <h4>3.2. Microprocesador y Refrigeración</h4>
                <ul>
                    <li><strong>Zócalo (Socket):</strong> Se levanta la palanca de seguridad.</li>
                    <li><strong>Colocación:</strong> Se alinea el procesador (mirando las muescas o el triángulo dorado) y se deja caer suavemente sin forzar.</li>
                    <li><strong>Fijación:</strong> Se baja la palanca para anclarlo.</li>
                    <li><strong>Refrigeración:</strong> Se aplica pasta térmica (si no la trae pre-aplicada), se ancla el disipador encima y se conecta el ventilador al conector CPU_FAN de la placa.</li>
                </ul>

                <h4>3.3. Memoria RAM</h4>
                <ul>
                    <li>Se alinean las muescas del módulo con el banco de memoria.</li>
                    <li>Se presiona firmemente por los extremos hasta que las pestañas laterales se cierren solas (hagan "clic").</li>
                </ul>

                <h4>3.4. Discos Duros y SSD</h4>
                <ul>
                    <li>Se atornilla la unidad en su bahía correspondiente.</li>
                    <li>Se conectan dos cables: el de Datos (SATA) a la placa base y el de Alimentación a la fuente.</li>
                </ul>

                <h4>3.5. Panel Frontal y Resto de Conexiones</h4>
                <p>Este es uno de los pasos más delicados:</p>
                <ul>
                    <li><strong>Front Panel:</strong> Se conectan los cables pequeños de la caja (Botón de encendido, Reset, LED de disco duro, LED de encendido) a los pines correspondientes de la placa.</li>
                    <li><strong>USB y Audio:</strong> Se conectan los puertos frontales de la caja a los conectores internos de la placa.</li>
                    <li><strong>Alimentación Principal:</strong> Se conecta el cable ATX de 24 pines (alimentación general) y el cable ATX 12V (alimentación extra para el procesador).</li>
                </ul>

                <h4>3.6. Verificación</h4>
                <p>Antes de cerrar, se hace una inspección visual (tornillos flojos, cables sueltos, disipador firme). Luego se arranca el equipo; si no hay sistema operativo, debería salir un mensaje pidiendo un "Boot device". Se entra en la BIOS para configurar la secuencia de arranque.</p>

                <h3>4. Utilidades de Chequeo y Diagnóstico</h3>
                <p>Una vez montado, o para reparar averías, se usan herramientas de diagnóstico:</p>
                
                <ul>
                    <li><strong>BIOS/UEFI:</strong> Permite monitorizar el hardware a bajo nivel sin necesidad de sistema operativo. Muestra voltajes (del procesador y chipset), temperaturas y velocidad de los ventiladores.</li>
                    <li><strong>Chequeo de Memoria:</strong> Si el equipo sufre reinicios inesperados, puede ser fallo de la RAM. Windows incluye herramientas administrativas para testear cada celda de memoria.</li>
                    <li><strong>Conectividad de Red:</strong> Si no hay internet, se debe verificar físicamente el cable/tarjeta, luego los drivers, y finalmente la configuración del sistema operativo (que no esté deshabilitada).</li>
                </ul>
            `
        },
        {
            title: 'Tema 10: Mantenimiento de Sistemas',
            desc: 'Gestión y cuidado de sistemas informáticos, niveles de mantenimiento y herramientas software.',
            quiz: [
                { q: '¿Qué tipo de mantenimiento busca actuar antes de que ocurra el fallo basándose en diagnósticos?', opts: ['Correctivo', 'Preventivo', 'Predictivo', 'Evolutivo'], correct: 2 },
                { q: '¿Cuál es una tarea típica de mantenimiento a nivel de software?', opts: ['Limpiar el polvo de los ventiladores', 'Desfragmentar el disco duro', 'Cambiar la pasta térmica', 'Sustituir la fuente de alimentación'], correct: 1 },
                { q: '¿Qué es un Sistema de Información (SI)?', opts: ['Un conjunto de ordenadores en red', 'Un sistema para el intercambio de información en una organización', 'Un programa antivirus', 'Una base de datos'], correct: 1 },
                { q: '¿Qué herramienta se usa para comprobar la integridad del sistema de archivos?', opts: ['Defraggler', 'CCleaner', 'CHKDSK', 'RegCleaner'], correct: 2 },
                { q: '¿Qué tipo de mantenimiento es el reemplazo de una pieza rota?', opts: ['Preventivo', 'Predictivo', 'Correctivo', 'Adaptativo'], correct: 2 },
                { q: '¿Qué siglas identifican al Centro de Atención al Usuario?', opts: ['CPU', 'CAU', 'SAT', 'TIC'], correct: 1 },
                { q: '¿Qué metodología de mantenimiento de sistemas se usa en España?', opts: ['ITIL', 'METRICA', 'ISO 27001', 'SCRUM'], correct: 1 },
                { q: '¿Qué es el mantenimiento correctivo diferido (o variable)?', opts: ['El que se hace inmediatamente', 'El que se planifica porque no es urgente', 'El que se hace antes de que falle', 'El que mejora el sistema'], correct: 1 },
                { q: '¿Qué programa se menciona para la limpieza de archivos innecesarios?', opts: ['Word', 'Excel', 'CCleaner', 'Paint'], correct: 2 },
                { q: '¿Qué nivel de mantenimiento se encarga de actualizar los manuales?', opts: ['Nivel de Hardware', 'Nivel de Software', 'Nivel de Documentación', 'Nivel de Red'], correct: 2 }
            ],
            content: `
                <h3>1. Concepto de Sistema Informático</h3>
                <p><strong>Definición:</strong> Conjunto de partes que funcionan relacionándose entre sí para conseguir un objetivo preciso.</p>
                
                <h4>Componentes</h4>
                <ul>
                    <li><strong>Hardware:</strong> Dispositivos electrónicos y mecánicos (teclado, ratón, monitor, etc.).</li>
                    <li><strong>Software:</strong> Programas y datos (sistema operativo, aplicaciones).</li>
                    <li><strong>Personal:</strong> Usuarios y desarrolladores (programadores, analistas).</li>
                    <li><strong>Documentación:</strong> Manuales y formularios de instrucciones.</li>
                </ul>
                <p><strong>Sistema de Información (SI):</strong> Sistema para el intercambio de información en una empresa. Si está informatizado, se llama Sistema de Información Automatizado (SIA).</p>

                <h3>2. Mantenimiento de Sistemas</h3>
                <ul>
                    <li><strong>Objetivo:</strong> Conseguir que los equipos sean operativos el mayor tiempo posible y sin fallos.</li>
                    <li><strong>Importancia:</strong> Reduce costes a largo plazo, evita pérdidas económicas por fallos, protege datos confidenciales y mejora la productividad.</li>
                    <li><strong>Organización:</strong> Puede ser interno o externo. En grandes empresas se centraliza en el CAU (Centro de Atención al Usuario).</li>
                    <li><strong>Metodología:</strong> En España se utiliza METRICA para el mantenimiento de sistemas de información.</li>
                </ul>

                <h3>3. Niveles de Mantenimiento</h3>
                <h4>Nivel de Hardware</h4>
                <p>Vigila el estado físico de equipos y periféricos. Tareas: limpieza, comprobación de límites (voltaje, temperatura), reemplazo de componentes.</p>
                
                <h4>Nivel de Software</h4>
                <p>Cuida aplicaciones y datos. Fallos comunes por virus o inestabilidad. Tareas: limpieza de archivos, optimización del SO, revisión de seguridad.</p>
                
                <h4>Nivel de Documentación</h4>
                <p>Mantiene actualizada la información sobre el sistema. Tareas: registro de mantenimiento, actualización de manuales.</p>
                
                <p><strong>Interacción:</strong> Los niveles están interrelacionados; un cambio en hardware puede requerir ajustes en software y documentación.</p>

                <h3>4. Técnicas Auxiliares de Mantenimiento</h3>
                <ul>
                    <li><strong>Mantenimiento Predictivo:</strong> Pronostica fallos futuros mediante herramientas de diagnóstico para actuar antes de que ocurran.</li>
                    <li><strong>Mantenimiento Preventivo:</strong> Aplica técnicas para minimizar riesgos y alargar la vida útil (Planificación MPP).
                        <ul>
                            <li>Activo: Limpieza periódica.</li>
                            <li>Pasivo: Protección contra condiciones ambientales adversas.</li>
                        </ul>
                    </li>
                    <li><strong>Mantenimiento Correctivo:</strong> Reparación o reemplazo de componentes que fallan.
                        <ul>
                            <li>Plazo fijo: Reemplazo por vida útil expirada.</li>
                            <li>Plazo variable: Decisión basada en el estado real del componente.</li>
                        </ul>
                    </li>
                </ul>
                <p><strong>Frecuencia:</strong> Depende del ambiente, calidad de componentes, estrés del sistema y criticidad.</p>

                <h3>5. Herramientas Software para Mantenimiento Preventivo</h3>
                <ul>
                    <li><strong>Sistema Operativo:</strong> Limpieza y optimización del registro (ej. RegCleaner), gestión de actualizaciones (parches).</li>
                    <li><strong>Información:</strong> Comprobación de integridad (chkdsk), limpieza de archivos innecesarios (CCleaner), desfragmentación (Defraggler).</li>
                    <li><strong>Seguridad:</strong> Antivirus (Avast, Kaspersky), antimalware (Spybot), cortafuegos (ZoneAlarm).</li>
                </ul>
            `
        },
        {
            title: 'Tema 11: Reparación de Equipos',
            desc: 'Detección de averías, señales de aviso, fallos comunes e incompatibilidades de hardware.',
            quiz: [
                { q: '¿Qué es el POST?', opts: ['Power On Self Test (Auto-diagnóstico al encender)', 'Pre-Operating System Task', 'Primary Output System Test', 'Program Of System Testing'], correct: 0 },
                { q: 'Si el ordenador se reinicia aleatoriamente, ¿cuál es una causa probable?', opts: ['Teclado desconectado', 'Sobrecalentamiento del procesador', 'Pila de la BIOS agotada', 'Ratón sucio'], correct: 1 },
                { q: '¿Qué síntoma indica que la pila de la placa base (CR2032) está agotada?', opts: ['El ordenador no enciende', 'La fecha y hora se resetean al apagar', 'El disco duro hace ruido', 'La pantalla se ve en blanco y negro'], correct: 1 },
                { q: '¿Qué herramienta física ayuda a diagnosticar errores de arranque mediante códigos?', opts: ['Tarjeta POST', 'Multímetro', 'Destornillador', 'Disco de arranque'], correct: 0 },
                { q: '¿Qué ocurre si intentas poner un procesador Intel en una placa AMD?', opts: ['Funciona pero más lento', 'Se adapta automáticamente', 'Es físicamente incompatible (diferente socket)', 'Se quema la placa'], correct: 2 },
                { q: '¿Qué indica generalmente un fallo si el ordenador enciende los ventiladores pero no muestra nada en pantalla?', opts: ['Fallo de disco duro', 'Fallo de CPU, RAM o Gráfica', 'Fallo de teclado', 'Fallo de ratón'], correct: 1 },
                { q: '¿Qué significa que un disco duro haga ruidos mecánicos (clac-clac)?', opts: ['Que está leyendo datos', 'Que está escribiendo datos', 'Fallo físico grave', 'Que necesita desfragmentarse'], correct: 2 },
                { q: '¿Qué componente suele ser el culpable si la hora del sistema se atrasa?', opts: ['El procesador', 'La RAM', 'La pila de la BIOS', 'El disco duro'], correct: 2 },
                { q: '¿Qué herramienta de software permite ver voltajes y temperaturas sin cargar el SO?', opts: ['Word', 'BIOS/UEFI', 'Paint', 'Calculadora'], correct: 1 },
                { q: '¿Qué tipo de señal de aviso son los "Beeps"?', opts: ['Visuales', 'Acústicas', 'Táctiles', 'Olfativas'], correct: 1 }
            ],
            content: `
                <h3>1. Detección de Averías</h3>
                <h4>Tipos</h4>
                <ul>
                    <li><strong>Hardware:</strong> Fallos físicos en componentes (caja, pila, microprocesador, memoria, etc.).</li>
                    <li><strong>Software:</strong> Fallos lógicos en sistema operativo, aplicaciones o firmware (BIOS).</li>
                </ul>
                
                <h4>Herramientas</h4>
                <ul>
                    <li><strong>Hardware:</strong> Destornilladores, pinzas, polímetro, tarjetas POST. Protección con guantes de nitrilo o kevlar.</li>
                    <li><strong>Software:</strong> Aplicaciones de diagnóstico.</li>
                </ul>
                <p><strong>Protocolo:</strong> Seguir diagramas de flujo lógicos para aislar el problema (verificar alimentación, conexiones, componentes uno a uno).</p>

                <h3>2. Señales de Aviso</h3>
                <ul>
                    <li><strong>Acústicas (Beeps):</strong> La BIOS emite pitidos al arrancar (POST) para indicar errores. El significado varía según el fabricante (AMI, Award, Phoenix). Ej: 1 pitido largo y 3 cortos en Award indica error de teclado.</li>
                    <li><strong>Luminosas:</strong> LEDs en el frontal o componentes que indican estado/actividad.</li>
                    <li><strong>Mensajes en pantalla:</strong> Texto explicativo del error (ej. "Keyboard error").</li>
                </ul>

                <h3>3. Fallos Comunes</h3>
                <ul>
                    <li><strong>Sistema parado:</strong> Revisar cableado, interruptor, fusibles y fuente de alimentación (con polímetro).</li>
                    <li><strong>Paradas/Reinicios:</strong> Puede ser por alimentación insuficiente o sobrecalentamiento (revisar ventiladores y temperatura).</li>
                    <li><strong>Caja:</strong> Botones o LEDs fallan (revisar conexiones o sustituir).</li>
                    <li><strong>Fuente de alimentación:</strong> No arranca o voltajes incorrectos. Puede provocar reinicios si no tiene potencia suficiente.</li>
                    <li><strong>Microprocesador:</strong> Sobrecalentamiento (reinicios) o pines doblados/rotos (no arranca, ventiladores giran pero no hace nada más).</li>
                    <li><strong>Refrigeración:</strong> Ventilador parado o lento (limpiar polvo, revisar conexión, cambiar ventilador).</li>
                    <li><strong>Placa Base:</strong> Componentes dañados o configuración BIOS no se guarda (revisar jumper de borrado o pila).</li>
                    <li><strong>Pila:</strong> Agotada (fecha/hora retrasada). Sustituir por una idéntica (CR2032 habitual).</li>
                    <li><strong>Memoria RAM:</strong> Ordenador no arranca o pita (mal colocada/dañada), fallos aleatorios o de instalación de SO. Revisar compatibilidad y colocación.</li>
                    <li><strong>Tarjetas Expansión:</strong> Mala colocación o drivers incorrectos.</li>
                    <li><strong>Discos Duros:</strong> No detectado (revisar cable/jumper IDE), ruidos mecánicos (fallo físico grave, sustituir).</li>
                </ul>

                <h3>4. Incompatibilidades de Hardware</h3>
                <ul>
                    <li><strong>Caja - Placa:</strong> El factor de forma debe coincidir (ej. caja Mini ITX solo para placas Mini ITX).</li>
                    <li><strong>Microprocesador - Socket:</strong> Deben ser física y eléctricamente compatibles (Intel vs AMD, generaciones).</li>
                    <li><strong>Memoria RAM:</strong> Tipo (DDR3, DDR4), voltaje y velocidad deben ser soportados por la placa.</li>
                    <li><strong>Gráfica:</strong> Tipo de slot (AGP, PCI-e) y voltaje.</li>
                    <li><strong>Almacenamiento:</strong> Interfaz (IDE vs SATA). SATA es compatible entre versiones (I, II, III) pero limita velocidad al más lento.</li>
                    <li><strong>Fuente:</strong> Conectores adecuados para la placa (ATX 20/24 pines) y potencia suficiente.</li>
                    <li><strong>Refrigeración:</strong> Anclaje compatible con el socket y dimensiones aptas para la caja.</li>
                </ul>
            `
        },
        {
            title: 'Tema 12: Mantenimiento de Periféricos',
            desc: 'Limpieza y cuidado de monitor, teclado, ratón, impresora, escáner y otros periféricos.',
            quiz: [
                { q: '¿Cómo se debe limpiar la pantalla de un monitor LCD/TFT?', opts: ['Con limpiacristales común', 'Con un paño de microfibra ligeramente húmedo o producto específico', 'Con alcohol etílico puro', 'Con papel de cocina seco'], correct: 1 },
                { q: '¿Qué precaución hay que tener al limpiar una impresora láser?', opts: ['No usar agua en el interior', 'Aspirar el tóner con aspirador especial (filtro HEPA)', 'No tocar el rodillo de transferencia', 'Todas las anteriores'], correct: 3 },
                { q: '¿Cómo se debe limpiar un disco óptico (CD/DVD)?', opts: ['En movimientos circulares', 'Desde el centro hacia afuera (radial)', 'Frotando fuerte con lana', 'Con disolvente'], correct: 1 },
                { q: '¿Qué es importante desbloquear en un escáner antes de usarlo?', opts: ['La tapa', 'El carro de la lámpara (candado)', 'El cable USB', 'El software'], correct: 1 },
                { q: '¿Qué se debe usar para limpiar el polvo del interior de un teclado?', opts: ['Agua y jabón', 'Aire comprimido', 'Un trapo húmedo', 'Aceite'], correct: 1 },
                { q: '¿Qué producto se recomienda para limpiar la lente de una unidad óptica?', opts: ['Agua del grifo', 'Alcohol isopropílico', 'Lejía', 'Acetona'], correct: 1 },
                { q: '¿Qué parte del ratón de bola requería limpieza frecuente?', opts: ['Los botones', 'La bola y los rodillos internos', 'El cable', 'La rueda de scroll'], correct: 1 },
                { q: '¿Qué se debe hacer con los cartuchos de inyección antes de instalarlos?', opts: ['Agitarlos fuertemente', 'Quitar los precintos', 'Calentarlos', 'Mojarlos'], correct: 1 },
                { q: '¿Qué herramienta se usa para limpiar el polvo entre las teclas?', opts: ['Destornillador', 'Aire comprimido o brocha', 'Tijeras', 'Cuchillo'], correct: 1 },
                { q: '¿Dónde NO se debe ubicar un ordenador?', opts: ['En una mesa', 'En el suelo (por el polvo)', 'En una oficina', 'En una habitación ventilada'], correct: 1 }
            ],
            content: `
                <h3>1. Mantenimiento Integral</h3>
                <ul>
                    <li><strong>Ubicación:</strong> Evitar calor, humedad, polvo, sol directo y campos magnéticos. No poner en el suelo.</li>
                    <li><strong>Frecuencia:</strong> Depende del ambiente (desde 1 vez/año en limpio hasta 12 veces/año en muy sucio).</li>
                    <li><strong>Interior caja:</strong> Eliminar polvo (causa sobrecalentamiento) con aire comprimido y brochas. Lubricar ventiladores si hacen ruido.</li>
                    <li><strong>Exterior:</strong> Paño con jabón neutro (sin disolventes).</li>
                </ul>

                <h3>2. Monitor</h3>
                <ul>
                    <li><strong>Limpieza:</strong> Paño microfibra o toallitas especiales. No presionar en pantallas TFT/LCD. No echar líquido directo.</li>
                    <li><strong>Interior:</strong> Solo si es necesario (peligro voltaje). Aire comprimido.</li>
                </ul>

                <h3>3. Teclado y Ratón</h3>
                <h4>Teclado</h4>
                <p>Aire comprimido/brocha para interior teclas. Paño húmedo para superficie. En profundidad: desmontar teclas o carcasa.</p>
                
                <h4>Ratón</h4>
                <ul>
                    <li><strong>Mecánico (bola):</strong> Limpiar bola y rodillos internos de suciedad.</li>
                    <li><strong>Óptico:</strong> Limpiar lente y base.</li>
                </ul>
                
                <h4>Touchpad</h4>
                <p>Paño húmedo, evitar líquidos directos.</p>

                <h3>4. Impresora</h3>
                <ul>
                    <li><strong>Láser:</strong> Limpiar polvo/tóner con aspirador o paño especial.</li>
                    <li><strong>Inyección:</strong> Limpieza de cabezales (bastoncillo con alcohol isopropílico) y depósito de tinta residual (esponja).</li>
                </ul>

                <h3>5. Escáner</h3>
                <ul>
                    <li><strong>Superficie de escaneo (cristal):</strong> Limpiacristales y paño microfibra. Evitar rayones y restos.</li>
                    <li><strong>Mecanismo:</strong> Limpiar bandeja y rodillos si es de alimentación.</li>
                </ul>

                <h3>6. Otros Periféricos</h3>
                <ul>
                    <li><strong>Webcam:</strong> Limpiar lente con cuidado (bastoncillo/toallita monitor).</li>
                    <li><strong>Micrófono:</strong> Limpiar con pincel.</li>
                    <li><strong>Altavoces:</strong> Limpiar carcasa y rejilla (con brocha, sin mojar el interior).</li>
                </ul>

                <h3>7. Almacenamiento y Soportes</h3>
                <ul>
                    <li><strong>Discos Duros:</strong> Cuidar golpes y posición (horizontal).</li>
                    <li><strong>Unidades Ópticas:</strong> Limpiar lente con CD limpiador o bastoncillo con alcohol isopropílico.</li>
                    <li><strong>Soportes Ópticos (CD/DVD):</strong> Limpiar del centro hacia afuera (radial), nunca circular. Si están rayados, se pueden pulir/encerar. Guardar en caja, evitar sol/calor.</li>
                </ul>
            `
        },
        {
            title: 'Tema 13: Instalación de Software',
            desc: 'Tipos de software, licencias, versiones y métodos de instalación.',
            quiz: [
                { q: '¿Qué libertad NO garantiza el Software Libre?', opts: ['Libertad de usar el programa', 'Libertad de modificar el código', 'Libertad de distribuirlo gratis siempre', 'Libertad de redistribuir copias'], correct: 2 },
                { q: '¿Qué tipo de licencia liga el software a un hardware específico (ej. al comprar un PC)?', opts: ['Retail', 'OEM', 'GPL', 'Shareware'], correct: 1 },
                { q: '¿Qué es el Shareware?', opts: ['Software totalmente gratuito', 'Software de prueba con limitaciones que requiere pago para versión completa', 'Software libre', 'Software ilegal'], correct: 1 },
                { q: '¿Qué es una instalación desatendida?', opts: ['Una instalación que falla', 'Una instalación automática sin intervención del usuario', 'Una instalación remota', 'Una instalación rápida'], correct: 1 },
                { q: '¿Qué tipo de software es un Sistema Operativo?', opts: ['Software de Aplicación', 'Software de Programación', 'Software de Base (Sistema)', 'Software Malicioso'], correct: 2 },
                { q: '¿Qué tipo de licencia permite la integración con software propietario?', opts: ['GPL', 'LGPL', 'Freeware', 'Dominio Público'], correct: 1 },
                { q: '¿Qué es el "Copyleft"?', opts: ['Derecho de copia', 'Garantía de que las versiones modificadas sigan siendo libres', 'Prohibición de copiar', 'Software pirata'], correct: 1 },
                { q: '¿Qué tipo de software son los compiladores e IDEs?', opts: ['Software de Sistema', 'Software de Aplicación', 'Software de Programación', 'Software de Entretenimiento'], correct: 2 },
                { q: '¿Qué es una actualización o "parche"?', opts: ['Un virus', 'Software que corrige errores o añade funciones', 'Un sistema operativo nuevo', 'Un juego'], correct: 1 },
                { q: '¿Qué licencia es típica de Windows y prohíbe la copia?', opts: ['GPL', 'BSD', 'EULA', 'Creative Commons'], correct: 2 }
            ],
            content: `
                <h3>1. Tipos de Software</h3>
                <ul>
                    <li><strong>Software de Base (Sistema):</strong> Interactúa con el hardware (Sistemas Operativos, Drivers).</li>
                    <li><strong>Software de Programación:</strong> Para desarrollar programas (Editores, Compiladores, IDEs).</li>
                    <li><strong>Software de Aplicación:</strong> Tareas específicas para usuario (Ofimática, Diseño, Bases de Datos).</li>
                </ul>

                <h3>2. Licencias de Software</h3>
                
                <h4>Software Libre</h4>
                <p>4 libertades: usar, estudiar, distribuir, modificar. Requiere código fuente disponible.</p>
                <ul>
                    <li><strong>GPL:</strong> Viral (modificaciones deben ser GPL).</li>
                    <li><strong>LGPL:</strong> Permite integración con software propietario.</li>
                    <li><strong>BSD/MPL:</strong> Más permisivas.</li>
                </ul>
                <p><strong>Copyleft:</strong> Garantiza que las versiones modificadas sigan siendo libres.</p>
                
                <h4>Software Privativo/Propietario</h4>
                <p>Restringe uso, copia o modificación.</p>
                <ul>
                    <li><strong>EULA:</strong> Licencia de usuario final (habitual en Windows). Prohibe copia, una instalación por licencia.</li>
                    <li><strong>OEM:</strong> Ligada al hardware nuevo, no transferible sola.</li>
                    <li><strong>Retail:</strong> Venta al usuario, transferible si se desinstala.</li>
                    <li><strong>Por volumen/Lotes:</strong> Para empresas.</li>
                </ul>
                
                <h4>Otros tipos</h4>
                <ul>
                    <li><strong>Freeware:</strong> Gratuito pero no libre (sin código, prohibido modificar).</li>
                    <li><strong>Shareware:</strong> Prueba gratuita con limitaciones (tiempo/funciones), pago para versión completa.</li>
                    <li><strong>Dominio Público:</strong> Sin derechos de autor.</li>
                </ul>

                <h3>3. Versiones</h3>
                <p>Diferencia entre software libre (con copyleft o sin él), semi-libre (uso sin ánimo de lucro), y comercial (busca beneficio económico, puede ser libre o no).</p>

                <h3>4. Tipos de Instalaciones</h3>
                <ul>
                    <li><strong>Estándar:</strong> Parámetros por defecto, interacción sencilla.</li>
                    <li><strong>Avanzada:</strong> Usuario personaliza componentes y configuración.</li>
                    <li><strong>Remota:</strong> Instalación a través de red desde un servidor.</li>
                    <li><strong>Desatendida:</strong> Automática, sin intervención del usuario (script o respuestas predefinidas).</li>
                    <li><strong>Masiva:</strong> Instalación en muchos equipos a la vez (clonación o red).</li>
                    <li><strong>Actualizaciones (Parches):</strong> Corrigen errores (bugs), añaden funciones o mejoran seguridad.</li>
                </ul>
            `
        },
        {
            title: 'Tema 14: Gestión de Discos',
            desc: 'Estructura de discos, particiones, sistemas de archivos, herramientas y operaciones de gestión.',
            quiz: [
                { q: '¿Qué contiene el MBR (Master Boot Record)?', opts: ['Mis Documentos', 'La tabla de particiones y el código de arranque', 'El sistema operativo completo', 'La BIOS'], correct: 1 },
                { q: '¿Cuántas particiones primarias admite como máximo un disco MBR?', opts: ['2', '3', '4', '128'], correct: 2 },
                { q: '¿Qué sistema de archivos permite archivos de más de 4GB y tiene journaling?', opts: ['FAT32', 'FAT16', 'NTFS', 'ExFAT'], correct: 2 },
                { q: '¿Qué nivel de RAID utiliza "Mirroring" (Espejo) para redundancia de datos?', opts: ['RAID 0', 'RAID 1', 'RAID 5', 'JBOD'], correct: 1 },
                { q: '¿Qué hace un formateo a bajo nivel?', opts: ['Borra solo el índice de archivos', 'Instala el sistema operativo', 'Borra físicamente todo el disco dejándolo de fábrica', 'Crea particiones'], correct: 2 },
                { q: '¿Qué es un Clúster?', opts: ['Un sector', 'Una pista', 'Una agrupación de varios sectores', 'Un cilindro'], correct: 2 },
                { q: '¿Qué tipo de partición es necesaria para arrancar el sistema operativo?', opts: ['Partición Extendida', 'Partición Lógica', 'Partición Primaria (Activa)', 'Cualquiera'], correct: 2 },
                { q: '¿Qué sistema de archivos es típico de Linux?', opts: ['NTFS', 'FAT32', 'ext4', 'HFS'], correct: 2 },
                { q: '¿Qué herramienta gráfica de Linux se menciona para gestionar particiones?', opts: ['Partition Magic', 'GParted', 'FDISK', 'Disk Management'], correct: 1 },
                { q: '¿Qué es un volumen distribuido en discos dinámicos?', opts: ['Un disco espejo', 'Suma el espacio de varios discos para verlo como uno solo', 'Un disco rápido', 'Un disco de seguridad'], correct: 1 }
            ],
            content: `
                <h3>1. Estructura del Disco Duro</h3>
                
                <h4>Estructura Física</h4>
                <ul>
                    <li><strong>Caras y Cabezas:</strong> Un disco duro tiene varios platos; cada plato tiene dos caras. El número de cabezas lectoras equivale al número de caras útiles. Se empiezan a numerar desde el 0.</li>
                    <li><strong>Pistas:</strong> Anillos concéntricos en cada cara.</li>
                    <li><strong>Cilindros:</strong> El conjunto de pistas que están en la misma posición vertical en todos los platos (la misma pista en todas las cabezas).</li>
                    <li><strong>Sectores:</strong> Divisiones de la pista. Es la unidad mínima de información que se puede leer/escribir (aprox. 0.5 KB). Se numeran desde el 1.</li>
                    <li><strong>Cluster:</strong> Agrupación de varios sectores.</li>
                </ul>
                <p><strong>Direccionamiento:</strong> La información se localiza mediante la coordenada: Cabeza - Cilindro - Sector.</p>

                <h4>Estructura Lógica</h4>
                <ul>
                    <li><strong>MBR (Master Boot Record):</strong> Es el primer sector del disco. Contiene la tabla de particiones y el programa de arranque maestro (Master Boot) para iniciar el sistema operativo.</li>
                    <li><strong>Espacio particionado:</strong> Zona del disco asignada a un fin (datos o programas).</li>
                    <li><strong>Espacio no particionado:</strong> Zona no accesible ni asignada.</li>
                </ul>

                <h3>2. Partición de Discos</h3>
                <p>Una unidad física puede dividirse en varias unidades lógicas llamadas particiones.</p>
                
                <h4>Tipos de Particiones</h4>
                <ul>
                    <li><strong>Primaria:</strong> División simple para contener sistemas operativos o datos. Un disco MBR admite máximo 4 primarias. Puede marcarse como Activa (la que arranca el equipo).</li>
                    <li><strong>Extendida:</strong> Tipo especial de partición primaria que sirve de contenedor. Solo puede haber una por disco. No tiene letra de unidad propia.</li>
                    <li><strong>Lógica:</strong> Subdivisiones dentro de la partición extendida. Se les asignan letras (D:, E:, etc.). No pueden ser activas.</li>
                </ul>

                <h4>RAID</h4>
                <p>Sistema que usa varios discos conectados entre sí para mejorar rendimiento o seguridad.</p>
                <ul>
                    <li><strong>RAID 0 (Stripping):</strong> Velocidad, sin redundancia.</li>
                    <li><strong>RAID 1 (Mirroring):</strong> Espejo, seguridad por duplicidad.</li>
                    <li><strong>RAID 5:</strong> Datos y paridad distribuidos (seguridad y velocidad).</li>
                </ul>

                <h3>3. Sistemas de Archivos</h3>
                <p>Estructura que se aplica al formatear una partición para poder guardar datos.</p>
                
                <h4>Sistemas Windows</h4>
                <ul>
                    <li><strong>FAT / FAT32:</strong> Compatibles con casi todo. Limitaciones: archivos no mayores de 4GB, particiones máx 32GB en teoría de Windows. Producen fragmentación.</li>
                    <li><strong>NTFS:</strong> Estándar actual de Windows. Seguro, con registro de transacciones (journaling) para recuperación de errores. Admite archivos y particiones enormes.</li>
                </ul>
                
                <h4>Sistemas Linux</h4>
                <ul>
                    <li><strong>ext (ext2, ext3, ext4):</strong> Incompatibles con Windows nativamente. ext4 es el más moderno (admite hasta 1 Exabyte).</li>
                    <li><strong>Swap:</strong> Espacio de intercambio. Se usa como memoria virtual cuando la RAM se llena.</li>
                </ul>

                <h3>4. Herramientas de Gestión</h3>
                <p>Software para crear, borrar y modificar particiones.</p>
                <ul>
                    <li><strong>FDISK:</strong> Herramienta básica de línea de comandos (Windows/Linux). Gestiona particiones pero no redimensiona sin borrar.</li>
                    <li><strong>EASEUS Partition Master:</strong> Herramienta gráfica avanzada para Windows. Permite redimensionar, mover, convertir sistemas de archivos y gestionar discos dinámicos sin perder datos.</li>
                    <li><strong>GParted:</strong> Herramienta gráfica gratuita para Linux (o LiveCD). Similar a EASEUS, soporta multitud de sistemas de archivos.</li>
                </ul>

                <h3>5. Operaciones con Particiones</h3>
                <ul>
                    <li><strong>Creación:</strong> Necesita espacio no particionado. Si es para arrancar un SO, debe estar dentro de los primeros 2GB (límite de arranque).</li>
                    <li><strong>Redimensión y Desplazamiento:</strong> Cambiar el tamaño. Para agrandar una partición, debe haber espacio libre adyacente.</li>
                    <li><strong>Asignación de espacio:</strong> Usar espacio libre. No se puede pasar espacio libre de un disco físico a otro disco físico distinto.</li>
                    <li><strong>Fusión:</strong> Unir dos particiones contiguas.</li>
                    <li><strong>Copia:</strong> Clonar una partición exacta a otro lugar (copia de seguridad).</li>
                    <li><strong>Eliminación:</strong> Borra la partición y sus datos, dejando el espacio como "no asignado".</li>
                    <li><strong>Conversión:</strong> Cambiar entre Primaria y Lógica, o cambiar sistema de archivos (ej. FAT a NTFS).</li>
                </ul>

                <h3>6. Formateo de Particiones</h3>
                
                <h4>Formateo a Alto Nivel (Lógico)</h4>
                <ul>
                    <li>Borra la tabla de acceso a archivos (el índice), pero no borra los datos físicamente (se pueden recuperar con software).</li>
                    <li>Asigna el sistema de archivos (NTFS, FAT32, etc.).</li>
                    <li>Comprueba errores lógicos.</li>
                </ul>
                
                <h4>Formateo a Bajo Nivel (Físico)</h4>
                <ul>
                    <li>Elimina todas las particiones y datos de forma irreversible (vuelve a valores de fábrica).</li>
                    <li>Es un proceso lento. Se usa por seguridad o errores graves.</li>
                    <li>Herramientas: HDD Low Level Format Tool.</li>
                </ul>

                <h3>7. Discos Básicos y Dinámicos</h3>
                
                <h4>Disco Básico</h4>
                <ul>
                    <li>El estándar tradicional. Usa particiones primarias, extendidas y lógicas.</li>
                    <li>Las particiones son independientes.</li>
                </ul>
                
                <h4>Disco Dinámico</h4>
                <p>Orientado a entornos profesionales. Usa Volúmenes.</p>
                <p>Permite funcionalidades avanzadas (software RAID) sin hardware especial:</p>
                <ul>
                    <li><strong>Volumen Simple:</strong> Un solo disco.</li>
                    <li><strong>Volumen Distribuido:</strong> Suma espacio de varios discos (se ve como una sola unidad).</li>
                    <li><strong>Volumen Seccionado (RAID 0):</strong> Escribe en varios discos a la vez (más velocidad, sin seguridad).</li>
                    <li><strong>Volumen Reflejado (RAID 1):</strong> Duplica datos en dos discos (seguridad ante fallos).</li>
                    <li><strong>RAID 5:</strong> Datos y paridad en 3 o más discos.</li>
                </ul>

                <h3>Mundo Laboral: Discos NAS</h3>
                <p><strong>NAS (Network Attached Storage):</strong> Discos duros conectados directamente a la red (vía cable Ethernet) que actúan como pequeños servidores.</p>
                <ul>
                    <li>Permiten compartir archivos entre múltiples usuarios simultáneamente.</li>
                    <li>Suelen tener sistemas operativos propios (Linux, FreeNAS).</li>
                    <li>Ideales para copias de seguridad y acceso remoto a archivos.</li>
                </ul>
            `
        }
    ],
    'LMSGI': [
        {
            title: 'Tema 1: Introducción a los Lenguajes de Marcas',
            desc: 'Concepto, clasificación, evolución histórica (SGML, HTML, XML) y herramientas.',
            quiz: [
                { q: '¿Qué es un lenguaje de marcas?', opts: ['Una forma de codificar un documento con etiquetas', 'Un lenguaje de programación con variables', 'Un sistema operativo', 'Un editor de texto'], correct: 0 },
                { q: '¿Cuál NO es una característica de un lenguaje de marcas moderno?', opts: ['Archivos de texto plano', 'Compacidad', 'Dependencia de la plataforma', 'Uso de etiquetas'], correct: 2 },
                { q: '¿Qué tipo de lenguaje de marcas se centra en la apariencia del documento?', opts: ['Descriptivo', 'Semántico', 'De Presentación (Procedimental)', 'Estructural'], correct: 2 },
                { q: '¿Cuál es el "padre" de los lenguajes de marcas modernos, estandarizado en 1986?', opts: ['GML', 'SGML', 'HTML', 'XML'], correct: 1 },
                { q: '¿Quién creó HTML en 1990?', opts: ['Bill Gates', 'Steve Jobs', 'Tim Berners-Lee', 'Charles Goldfarb'], correct: 2 },
                { q: '¿Qué significa que XML es "extensible"?', opts: ['Que ocupa mucho espacio', 'Que permite definir etiquetas propias', 'Que solo funciona en navegadores antiguos', 'Que es una extensión de HTML'], correct: 1 },
                { q: '¿Cuál es una diferencia clave entre HTML y XML?', opts: ['HTML describe datos, XML los visualiza', 'HTML tiene etiquetas predefinidas, XML permite definirlas', 'HTML es estricto, XML es permisivo', 'No hay diferencias'], correct: 1 },
                { q: '¿Qué tecnología permite transformar documentos XML (ej. a HTML)?', opts: ['XSL', 'DOM', 'SAX', 'XLink'], correct: 0 },
                { q: '¿Qué define la estructura válida de un documento SGML o XML?', opts: ['CSS', 'DTD', 'HTML', 'HTTP'], correct: 1 },
                { q: '¿Qué herramienta verifica que un XML esté bien formado?', opts: ['Compilador', 'Parser (Analizador sintáctico)', 'Depurador', 'Enlazador'], correct: 1 }
            ],
            content: `
                <h3>1. ¿Qué es un Lenguaje de Marcas?</h3>
                <p>Un lenguaje de marcas es una forma de codificar un documento que, junto con el texto, incorpora etiquetas (marcas) o anotaciones con información adicional relativa a la estructura del texto o su presentación.</p>
                <p>A diferencia de los lenguajes de programación, los lenguajes de marcas no tienen funciones aritméticas o variables en el sentido tradicional, sino que se centran en la descripción de datos.</p>
                
                <p><strong>Ejemplo de concepto:</strong> Imagina un texto plano. Un lenguaje de marcas "envuelve" ese texto para decirle al ordenador qué es.</p>
                
                <div class="code-container">
                    <div class="code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;persona&gt;
    &lt;nombre&gt;Juan Pérez&lt;/nombre&gt;
    &lt;edad&gt;25&lt;/edad&gt;
&lt;/persona&gt;</pre>
                </div>

                <h4>Características principales</h4>
                <ul>
                    <li><strong>Archivos de texto plano:</strong> Se pueden abrir y editar con cualquier editor de texto simple (Notepad, Vi, Sublime Text).</li>
                    <li><strong>Compacidad:</strong> Las instrucciones de marcado se mezclan con el propio contenido.</li>
                    <li><strong>Independencia de la plataforma:</strong> Al ser texto plano, funcionan igual en Windows, Linux, macOS, etc.</li>
                    <li><strong>Uso de etiquetas:</strong> Se utilizan marcas delimitadas (generalmente por corchetes angulares &lt; &gt;) para diferenciar el contenido de la instrucción.</li>
                </ul>

                <h3>2. Clasificación de los Lenguajes de Marcas</h3>
                
                <h4>A. De Presentación (Procedimental)</h4>
                <p>Estos lenguajes describen la apariencia del documento (formato, color, fuente). Indican al software cómo debe representar el texto en pantalla o papel.</p>
                <p><em>Ejemplos:</em> RTF, TeX, y versiones antiguas de HTML.</p>
                
                <div class="code-container">
                    <div class="code-header">
                        <span>HTML (Presentación)</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;b&gt;&lt;i&gt;Título Importante&lt;/i&gt;&lt;/b&gt;
&lt;font size="4"&gt;Subtítulo&lt;/font&gt;</pre>
                </div>

                <h4>B. Descriptivos (Semánticos)</h4>
                <p>Estos lenguajes describen la estructura y el significado de los datos, separando completamente el contenido de su presentación visual.</p>
                <p><em>Ejemplos:</em> XML, HTML5 (cuando se usa correctamente).</p>
                
                <div class="code-container">
                    <div class="code-header">
                        <span>XML (Semántico)</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;libro&gt;
    &lt;titulo&gt;El Quijote&lt;/titulo&gt;
    &lt;autor&gt;Cervantes&lt;/autor&gt;
&lt;/libro&gt;</pre>
                </div>

                <h3>3. Evolución Histórica</h3>
                <ul>
                    <li><strong>GML (Generalized Markup Language - Años 60):</strong> Creado por IBM para resolver problemas de compatibilidad.</li>
                    <li><strong>SGML (Standard Generalized Markup Language - 1986):</strong> Norma internacional (ISO 8879). El "padre" de los lenguajes modernos.</li>
                    <li><strong>HTML (HyperText Markup Language - 1990):</strong> Creado por Tim Berners-Lee para la Web. Aplicación de SGML.</li>
                    <li><strong>XML (eXtensible Markup Language - 1998):</strong> Desarrollado por el W3C. Subconjunto de SGML más sencillo y flexible.</li>
                </ul>

                <h3>4. SGML (Standard Generalized Markup Language)</h3>
                <p>Estándar internacional (ISO 8879) para la definición de documentos electrónicos independientes del dispositivo.</p>
                <ul>
                    <li><strong>Metalenguaje:</strong> Proporciona reglas para definir otros lenguajes.</li>
                    <li><strong>Componentes:</strong>
                        <ul>
                            <li>DTD (Document Type Definition): Define la estructura válida.</li>
                            <li>DSSSL: Define los estilos.</li>
                        </ul>
                    </li>
                    <li><strong>Desventaja:</strong> Excesiva complejidad.</li>
                </ul>

                <h3>5. HTML (HyperText Markup Language)</h3>
                <p>Aplicación de SGML para la Web. Usa etiquetas predefinidas (&lt;h1&gt;, &lt;p&gt;, &lt;a&gt;).</p>
                <p>Su éxito se debió a su simplicidad, pero la mezcla de estructura y presentación llevó a la necesidad de XML.</p>

                <h3>6. XML (eXtensible Markup Language)</h3>
                <p>Metalenguaje estandarizado por el W3C. Subconjunto de SGML optimizado para la web.</p>
                <ul>
                    <li><strong>Intercambio de datos:</strong> Facilita la comunicación entre sistemas.</li>
                    <li><strong>Extensibilidad:</strong> Permite definir etiquetas propias.</li>
                    <li><strong>Estructura estricta:</strong> Separa datos de presentación.</li>
                </ul>

                <h4>Comparativa: XML vs HTML</h4>
                <table class="topic-table">
                    <thead>
                        <tr>
                            <th>Característica</th>
                            <th>HTML</th>
                            <th>XML</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Propósito</td>
                            <td>Visualizar datos (Presentación)</td>
                            <td>Describir y transportar datos (Estructura)</td>
                        </tr>
                        <tr>
                            <td>Etiquetas</td>
                            <td>Predefinidas (&lt;p&gt;, &lt;div&gt;)</td>
                            <td>Definidas por el usuario (&lt;cliente&gt;)</td>
                        </tr>
                        <tr>
                            <td>Sintaxis</td>
                            <td>Más permisiva</td>
                            <td>Estricta (cierre obligatorio)</td>
                        </tr>
                        <tr>
                            <td>Semántica</td>
                            <td>Estática</td>
                            <td>Dinámica y extensible</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Ejemplo Práctico</h4>
                
                <div class="code-container">
                    <div class="code-header">
                        <span>HTML (Para ver)</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;dl&gt;
  &lt;dt&gt;Café&lt;/dt&gt;
  &lt;dd&gt;Negro caliente&lt;/dd&gt;
&lt;/dl&gt;</pre>
                </div>

                <div class="code-container">
                    <div class="code-header">
                        <span>XML (Para procesar)</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;bebida tipo="caliente"&gt;
    &lt;nombre&gt;Café&lt;/nombre&gt;
    &lt;variedad&gt;Negro&lt;/variedad&gt;
&lt;/bebida&gt;</pre>
                </div>

                <h3>7. Tecnologías asociadas a XML</h3>
                <ul>
                    <li><strong>XSL (eXtensible Stylesheet Language):</strong> Hojas de estilo para transformar XML.</li>
                    <li><strong>XLink y XPointer:</strong> Estándares para enlaces complejos.</li>
                    <li><strong>Namespaces:</strong> Evitan conflictos de nombres de etiquetas.</li>
                    <li><strong>DOM y SAX:</strong> APIs para manipular XML desde programación.</li>
                    <li><strong>XML Schema (XSD):</strong> Alternativa más potente al DTD.</li>
                </ul>

                <h3>8. Herramientas</h3>
                <ul>
                    <li><strong>Editores de XML:</strong> Oxygen XML Editor, XMLSpy, VS Code.</li>
                    <li><strong>Parsers (Analizadores sintácticos):</strong> Bibliotecas que verifican que el XML esté bien formado (ej. Xerces, MSXML).</li>
                </ul>
            `
        },
        {
            title: 'Tema 2: Utilización de Lenguajes de Marcas (XML y HTML)',
            desc: 'XML como estándar de datos, reglas de sintaxis, XHTML, HTML5 y semántica web.',
            quiz: [
                { q: '¿Cuál es el propósito principal de XML?', opts: ['Mostrar datos en el navegador', 'Estructurar, almacenar y transportar información', 'Crear estilos visuales', 'Programar funciones aritméticas'], correct: 1 },
                { q: '¿Qué significa que un documento XML esté "Bien Formado"?', opts: ['Que tiene colores bonitos', 'Que cumple estrictamente las reglas de sintaxis XML', 'Que se ha validado con un DTD', 'Que tiene imágenes'], correct: 1 },
                { q: '¿Cuál de las siguientes es una regla de sintaxis XML correcta?', opts: ['No distingue mayúsculas de minúsculas', 'Las etiquetas pueden cruzarse', 'Debe haber un único elemento raíz', 'Los atributos no necesitan comillas'], correct: 2 },
                { q: '¿Qué lenguaje nació para aplicar la rigurosidad de XML al HTML?', opts: ['HTML4', 'XHTML', 'CSS', 'JavaScript'], correct: 1 },
                { q: '¿Qué etiqueta HTML5 define la cabecera introductoria de una página o artículo?', opts: ['<head>', '<top>', '<header>', '<nav>'], correct: 2 },
                { q: '¿Qué atributo de la etiqueta <img> es vital para la accesibilidad?', opts: ['src', 'alt', 'width', 'style'], correct: 1 },
                { q: '¿Cuál es un elemento de bloque (Block-level)?', opts: ['<span>', '<a>', '<div>', '<img>'], correct: 2 },
                { q: '¿Qué etiqueta se usa para listas desordenadas (con viñetas)?', opts: ['<ol>', '<dl>', '<ul>', '<list>'], correct: 2 },
                { q: '¿Qué atributo se usa en <a> para abrir el enlace en una pestaña nueva?', opts: ['target="_new"', 'target="_blank"', 'open="new"', 'window="new"'], correct: 1 },
                { q: '¿Qué etiqueta HTML5 contiene el contenido principal y único de la página?', opts: ['<body>', '<section>', '<main>', '<article>'], correct: 2 }
            ],
            content: `
                <h3>1. XML (eXtensible Markup Language): El Estándar de Datos</h3>
                
                <h4>1.1 Naturaleza y Propósito</h4>
                <p>XML no es un lenguaje para "hacer cosas" (como Python o Java) ni para "mostrar cosas" (como HTML). Es un metalenguaje diseñado exclusivamente para estructurar, almacenar y transportar información.</p>
                <ul>
                    <li><strong>Extensibilidad:</strong> Tú defines tu propio vocabulario (ej. &lt;mi-coche&gt;).</li>
                    <li><strong>Legibilidad:</strong> Diseñado para ser leído por humanos y máquinas.</li>
                    <li><strong>Independencia:</strong> Es texto plano, compatible con cualquier sistema.</li>
                </ul>

                <h4>1.2 Reglas de Sintaxis (El concepto de "Bien Formado")</h4>
                <p>Para que un procesador XML pueda leer un archivo sin errores, este debe estar "Bien Formado". Las reglas son estrictas:</p>
                <ul>
                    <li><strong>Elemento Raíz Único:</strong> Todo el documento debe estar envuelto en un solo elemento padre.</li>
                    <li><strong>Cierre de Etiquetas:</strong> Toda etiqueta abierta debe cerrarse.</li>
                    <li><strong>Anidamiento Correcto:</strong> No se pueden cruzar etiquetas.</li>
                    <li><strong>Sensibilidad a Mayúsculas:</strong> &lt;Libro&gt; y &lt;libro&gt; son diferentes.</li>
                    <li><strong>Atributos:</strong> Los valores siempre deben ir entre comillas.</li>
                </ul>

                <h4>Ejemplo Práctico: Estructura XML</h4>
                <p>Imaginemos que necesitamos enviar datos de una biblioteca a otro servidor. Este sería el XML "Bien Formado":</p>
                
                <div class="code-container">
                    <div class="code-header">
                        <span>XML</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;biblioteca&gt; 
    &lt;libro id="A001"&gt; 
        &lt;titulo&gt;Cien años de soledad&lt;/titulo&gt;
        &lt;autor&gt;Gabriel García Márquez&lt;/autor&gt;
        &lt;precio moneda="EUR"&gt;25.50&lt;/precio&gt;
        &lt;stock disponible="true" /&gt; 
    &lt;/libro&gt;

    &lt;libro id="B002"&gt;
        &lt;titulo&gt;El nombre del viento&lt;/titulo&gt;
        &lt;autor&gt;Patrick Rothfuss&lt;/autor&gt;
        &lt;precio moneda="USD"&gt;30.00&lt;/precio&gt;
    &lt;/libro&gt;
&lt;/biblioteca&gt;</pre>
                </div>

                <h3>2. XHTML: El Puente hacia la Estrictitud</h3>
                <p>XHTML (Extensible HyperText Markup Language) nació como un intento de aplicar la rigurosidad de XML al HTML. Exige cumplir todas las reglas de XML (cierre de etiquetas, minúsculas obligatorias, anidamiento perfecto).</p>

                <h3>3. HTML5: La Web Semántica Moderna</h3>
                
                <h4>3.1 Evolución y Filosofía</h4>
                <p>HTML5 es un cambio de paradigma. Introduce un fuerte enfoque en la semántica. Usamos etiquetas que explican qué son (&lt;header&gt;, &lt;article&gt;) en lugar de solo &lt;div&gt;, ayudando a buscadores y accesibilidad.</p>

                <h4>3.2 Estructura Global de un Documento</h4>
                <ul>
                    <li><strong>&lt;!DOCTYPE html&gt;:</strong> Informa que es HTML5.</li>
                    <li><strong>&lt;html&gt;:</strong> La raíz (con atributo lang).</li>
                    <li><strong>&lt;head&gt;:</strong> Metadatos, título, CSS/JS (no visible).</li>
                    <li><strong>&lt;body&gt;:</strong> Contenido visible.</li>
                </ul>

                <h4>Ejemplo Práctico: Esqueleto HTML5 Completo</h4>
                
                <div class="code-container">
                    <div class="code-header">
                        <span>HTML5</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt; 
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; 
    &lt;meta name="description" content="Ejemplo de estructura HTML5"&gt;
    
    &lt;title&gt;Mi Primera Web Semántica&lt;/title&gt;
    
    &lt;link rel="stylesheet" href="estilos.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    
&lt;/body&gt;
&lt;/html&gt;</pre>
                </div>

                <h3>4. Elementos HTML: Bloque vs. Línea</h3>
                <table class="topic-table">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Comportamiento</th>
                            <th>Etiquetas Clave</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Bloque (Block)</strong></td>
                            <td>Ocupan todo el ancho, empiezan en línea nueva. Estructura principal.</td>
                            <td>&lt;div&gt;, &lt;p&gt;, &lt;h1&gt;, &lt;ul&gt;, &lt;table&gt;, &lt;header&gt;</td>
                        </tr>
                        <tr>
                            <td><strong>Línea (Inline)</strong></td>
                            <td>Ocupan solo su ancho, no rompen línea. Formato dentro de bloque.</td>
                            <td>&lt;span&gt;, &lt;a&gt;, &lt;img&gt;, &lt;strong&gt;, &lt;em&gt;</td>
                        </tr>
                    </tbody>
                </table>

                <h3>5. Componentes Esenciales</h3>
                
                <h4>5.1 Hiperenlaces (&lt;a&gt;)</h4>
                <p>Atributo clave: <code>href</code>. Rutas absolutas, relativas o anclas. <code>target="_blank"</code> abre en nueva pestaña.</p>
                <div class="code-container">
                    <div class="code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;a href="https://wikipedia.org" target="_blank" title="Ir a Wikipedia"&gt;Visitar Wikipedia&lt;/a&gt;</pre>
                </div>

                <h4>5.2 Imágenes (&lt;img&gt;)</h4>
                <p>Etiqueta vacía. <code>src</code> (ruta), <code>alt</code> (texto alternativo vital).</p>
                <div class="code-container">
                    <div class="code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;img src="logo.png" alt="Logotipo de la empresa TechSolutions"&gt;</pre>
                </div>

                <h4>5.3 Listas</h4>
                <ul>
                    <li><strong>&lt;ul&gt;:</strong> Desordenadas (viñetas).</li>
                    <li><strong>&lt;ol&gt;:</strong> Ordenadas (números).</li>
                    <li><strong>&lt;dl&gt;:</strong> Definición (término y descripción).</li>
                </ul>
                <div class="code-container">
                    <div class="code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;ul&gt;
    &lt;li&gt;HTML5&lt;/li&gt;
    &lt;li&gt;CSS3&lt;/li&gt;
    &lt;li&gt;JavaScript&lt;/li&gt;
&lt;/ul&gt;</pre>
                </div>

                <h3>6. Nuevas Etiquetas Semánticas de HTML5</h3>
                <ul>
                    <li><strong>&lt;header&gt;:</strong> Cabecera (logo, título, nav).</li>
                    <li><strong>&lt;nav&gt;:</strong> Enlaces de navegación principales.</li>
                    <li><strong>&lt;main&gt;:</strong> Contenido principal único.</li>
                    <li><strong>&lt;section&gt;:</strong> Agrupación temática.</li>
                    <li><strong>&lt;article&gt;:</strong> Contenido autónomo (post, noticia).</li>
                    <li><strong>&lt;aside&gt;:</strong> Contenido tangencial (barra lateral).</li>
                    <li><strong>&lt;footer&gt;:</strong> Pie de página.</li>
                </ul>

                <h4>Ejemplo Práctico: Maquetación Semántica</h4>
                <div class="code-container">
                    <div class="code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;Blog de Tecnología&lt;/h1&gt;
        &lt;nav&gt;
            &lt;a href="#"&gt;Inicio&lt;/a&gt; | &lt;a href="#"&gt;Sobre mí&lt;/a&gt;
        &lt;/nav&gt;
    &lt;/header&gt;

    &lt;main&gt;
        &lt;section&gt;
            &lt;h2&gt;Últimas Noticias&lt;/h2&gt;
            
            &lt;article&gt;
                &lt;h3&gt;Lanzamiento de nuevo procesador&lt;/h3&gt;
                &lt;p&gt;Hoy se ha presentado el nuevo chip...&lt;/p&gt;
            &lt;/article&gt;

            &lt;article&gt;
                &lt;h3&gt;Avances en IA&lt;/h3&gt;
                &lt;p&gt;La inteligencia artificial generativa...&lt;/p&gt;
            &lt;/article&gt;
        &lt;/section&gt;

        &lt;aside&gt;
            &lt;h3&gt;Publicidad&lt;/h3&gt;
            &lt;p&gt;Compra aquí tu hosting barato.&lt;/p&gt;
        &lt;/aside&gt;
    &lt;/main&gt;

    &lt;footer&gt;
        &lt;p&gt;Derechos reservados 2025.&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;</pre>
                </div>
            `
        },
        {
            title: 'Tema 3: Hojas de Estilo en Cascada (CSS)',
            desc: 'Fundamentos, selectores, modelo de caja, posicionamiento y unidades de medida.',
            quiz: [
                { q: '¿Qué significa el término "Cascada" en CSS?', opts: ['Que los estilos caen como agua', 'El algoritmo de prioridad para resolver conflictos de estilos', 'Un tipo de diseño web fluido', 'Una propiedad para alinear texto'], correct: 1 },
                { q: '¿Cuál es el método de integración de CSS recomendado para sitios web profesionales?', opts: ['En línea (Inline)', 'Interno (Embedded)', 'Externo (External)', 'Importado (@import)'], correct: 2 },
                { q: '¿Qué selector tiene mayor especificidad (peso)?', opts: ['Selector de Tipo (p)', 'Selector de Clase (.mi-clase)', 'Selector de ID (#mi-id)', 'Selector Universal (*)'], correct: 2 },
                { q: '¿Qué propiedad CSS se usa para cambiar el color de fondo?', opts: ['color', 'background-color', 'bgcolor', 'background-image'], correct: 1 },
                { q: 'En el Modelo de Caja, ¿qué es el "Padding"?', opts: ['El borde del elemento', 'El margen externo', 'El espacio interno entre contenido y borde', 'El ancho del contenido'], correct: 2 },
                { q: '¿Qué propiedad CSS incluye el padding y el border dentro del ancho total del elemento?', opts: ['box-sizing: content-box', 'box-sizing: border-box', 'box-model: fix', 'width: auto'], correct: 1 },
                { q: '¿Qué valor de "position" saca al elemento del flujo normal y lo posiciona respecto a su padre posicionado?', opts: ['static', 'relative', 'absolute', 'fixed'], correct: 2 },
                { q: '¿Qué pseudo-clase se activa cuando el usuario pasa el ratón por encima de un enlace?', opts: [':link', ':visited', ':active', ':hover'], correct: 3 },
                { q: '¿Qué unidad de medida es relativa al tamaño de fuente del elemento raíz (html)?', opts: ['px', 'em', 'rem', '%'], correct: 2 },
                { q: '¿Qué propiedad se usa para solucionar el colapso de altura en contenedores con elementos flotantes?', opts: ['float: none', 'clear: both', 'display: block', 'overflow: hidden'], correct: 1 }
            ],
            content: `
                <h3>1. Fundamentos de CSS (Cascading Style Sheets)</h3>
                
                <h4>1.1 ¿Qué es y por qué "Cascada"?</h4>
                <p>CSS es un lenguaje de diseño gráfico para definir la presentación. "Cascada" se refiere al algoritmo de prioridad que usa el navegador para decidir qué estilo aplicar cuando hay conflictos.</p>
                <p>La prioridad se determina por: <strong>Herencia, Especificidad, Importancia (!important) y Origen</strong>.</p>

                <h4>1.2 Sintaxis de una Regla</h4>
                <div class="code-container">
                    <div class="code-header">
                        <span>CSS</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">/* Selector */
h1 {
    /* Propiedad: Valor; */
    color: navy;
    font-size: 24px;
}</pre>
                </div>

                <h4>1.3 Métodos de Integración</h4>
                <ul>
                    <li><strong>En línea (Inline):</strong> Atributo <code>style</code>. Mala práctica.</li>
                    <li><strong>Interno (Embedded):</strong> Etiqueta <code>&lt;style&gt;</code> en el <code>&lt;head&gt;</code>.</li>
                    <li><strong>Externo (External):</strong> Archivo <code>.css</code> vinculado. Estándar profesional.</li>
                </ul>
                <div class="code-container">
                    <div class="code-header">
                        <span>HTML (Enlace Externo)</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;link rel="stylesheet" type="text/css" href="estilos.css"&gt;</pre>
                </div>

                <h3>2. Selectores: Apuntando al Elemento Correcto</h3>
                
                <h4>2.1 Selectores Básicos</h4>
                <ul>
                    <li><strong>Universal (*):</strong> Todos los elementos.</li>
                    <li><strong>Tipo (p, div):</strong> Todas las instancias de la etiqueta.</li>
                    <li><strong>Clase (.nombre):</strong> Elementos con <code>class="nombre"</code>. Versátil.</li>
                    <li><strong>ID (#nombre):</strong> Elemento único con <code>id="nombre"</code>. Alta especificidad.</li>
                </ul>

                <div class="code-container">
                    <div class="code-header">
                        <span>CSS (Selectores)</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">/* Clase */
.destacado { background-color: yellow; }

/* ID */
#menu-principal { width: 100%; }</pre>
                </div>

                <h4>2.3 Pseudo-clases</h4>
                <p>Definen estilos basados en el estado:</p>
                <ul>
                    <li><code>a:link</code>: No visitado.</li>
                    <li><code>a:visited</code>: Visitado.</li>
                    <li><code>a:hover</code>: Ratón encima (interactividad).</li>
                    <li><code>a:active</code>: Al hacer clic.</li>
                </ul>

                <h3>3. El Modelo de Caja (Box Model)</h3>
                <p>Todo elemento es una caja rectangular compuesta por:</p>
                <ol>
                    <li><strong>Content:</strong> Contenido real (texto/imagen).</li>
                    <li><strong>Padding:</strong> Relleno interno.</li>
                    <li><strong>Border:</strong> Borde alrededor del relleno.</li>
                    <li><strong>Margin:</strong> Espacio externo invisible.</li>
                </ol>

                <div class="code-container">
                    <div class="code-header">
                        <span>CSS (Modelo de Caja)</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">.caja {
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
    /* Truco Pro: incluye padding y border en el ancho */
    box-sizing: border-box; 
}</pre>
                </div>

                <h3>4. Posicionamiento y Flujo (Layout)</h3>
                
                <h4>4.1 Propiedad position</h4>
                <ul>
                    <li><strong>static:</strong> Por defecto. Sigue el flujo.</li>
                    <li><strong>relative:</strong> Se mueve respecto a su posición original sin afectar a otros.</li>
                    <li><strong>absolute:</strong> Se saca del flujo. Posicionado respecto al padre posicionado más cercano.</li>
                    <li><strong>fixed:</strong> Fijo respecto a la ventana del navegador (scroll no le afecta).</li>
                </ul>

                <h4>4.2 Propiedad float</h4>
                <p>Originalmente para rodear imágenes con texto. <code>float: left;</code> empuja a la izquierda.</p>
                <p><strong>Problema del colapso:</strong> Los padres pierden altura. Solución: <code>clear: both;</code>.</p>

                <div class="code-container">
                    <div class="code-header">
                        <span>CSS (Columnas con Float)</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">.columna-izquierda {
    float: left;
    width: 25%;
}
.columna-derecha {
    float: left;
    width: 75%;
}
/* Limpiar flotados */
.limpiar { clear: both; }</pre>
                </div>

                <h3>5. Unidades de Medida</h3>
                <table class="topic-table">
                    <thead>
                        <tr>
                            <th>Unidad</th>
                            <th>Tipo</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>px</strong></td>
                            <td>Absoluta</td>
                            <td>Píxeles. Precisos pero no escalan bien.</td>
                        </tr>
                        <tr>
                            <td><strong>%</strong></td>
                            <td>Relativa</td>
                            <td>Porcentaje respecto al padre.</td>
                        </tr>
                        <tr>
                            <td><strong>em</strong></td>
                            <td>Relativa</td>
                            <td>Relativo al tamaño de fuente del elemento (efecto cascada).</td>
                        </tr>
                        <tr>
                            <td><strong>rem</strong></td>
                            <td>Relativa</td>
                            <td>Relativo al tamaño de fuente raíz (html). Ideal para responsivo.</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        {
            title: 'Tema 4: XML y Validación de Datos (DTD y XSD)',
            desc: 'Conceptos de validación, sintaxis DTD, esquemas XSD, tipos de datos y restricciones.',
            quiz: [
                { q: '¿Qué significa que un documento XML sea "Válido"?', opts: ['Que está bien formado', 'Que cumple con una estructura lógica definida (DTD/XSD)', 'Que tiene colores', 'Que se puede abrir en Chrome'], correct: 1 },
                { q: '¿Qué tecnología de validación usa una sintaxis NO XML?', opts: ['XSD', 'DTD', 'JSON', 'HTML'], correct: 1 },
                { q: 'En DTD, ¿qué símbolo indica que un elemento es obligatorio al menos una vez (1 o más)?', opts: ['?', '*', '+', '|'], correct: 2 },
                { q: '¿Qué tipo de contenido DTD representa texto plano?', opts: ['EMPTY', 'ANY', '(#PCDATA)', 'CDATA'], correct: 2 },
                { q: '¿Qué atributo en DTD define un identificador único?', opts: ['IDREF', 'ID', 'UNIQUE', 'KEY'], correct: 1 },
                { q: '¿Cuál es una ventaja principal de XSD sobre DTD?', opts: ['Es más corto', 'Soporta tipos de datos fuertes (enteros, fechas)', 'Es más antiguo', 'No usa XML'], correct: 1 },
                { q: 'En XSD, ¿qué elemento define restricciones como rangos o patrones?', opts: ['xs:complexType', 'xs:sequence', 'xs:restriction', 'xs:element'], correct: 2 },
                { q: '¿Qué indicador de orden en XSD obliga a que los hijos aparezcan en secuencia exacta?', opts: ['xs:all', 'xs:choice', 'xs:sequence', 'xs:group'], correct: 2 },
                { q: '¿Qué restricción XSD se usa para validar formatos con expresiones regulares (ej. DNI)?', opts: ['length', 'pattern', 'enumeration', 'minInclusive'], correct: 1 },
                { q: '¿Qué atributo XSD define la cardinalidad máxima?', opts: ['maxOccurs', 'minOccurs', 'count', 'limit'], correct: 0 }
            ],
            content: `
                <h3>1. Conceptos Clave: Bien Formado vs. Válido</h3>
                <p>Para entender la validación, hay que distinguir dos estados:</p>
                <ul>
                    <li><strong>Bien Formado (Well-Formed):</strong> Cumple las reglas sintácticas de XML (etiquetas cerradas, raíz única). Si falla, da error.</li>
                    <li><strong>Válido (Valid):</strong> Además de estar bien formado, cumple con un "contrato" de estructura (DTD o XSD).</li>
                </ul>

                <h3>2. DTD (Document Type Definition)</h3>
                <p>Forma clásica de definir estructura. Sintaxis compacta pero no XML. No soporta tipos de datos complejos.</p>
                
                <h4>2.2 Declaración de Elementos</h4>
                <p>Símbolos de cardinalidad:</p>
                <ul>
                    <li><code>?</code>: 0 o 1 (Opcional).</li>
                    <li><code>*</code>: 0 o más.</li>
                    <li><code>+</code>: 1 o más (Obligatorio).</li>
                    <li><code>|</code>: Elección (O).</li>
                    <li><code>,</code>: Secuencia (Y).</li>
                </ul>

                <div class="code-container">
                    <div class="code-header">
                        <span>DTD (Ejemplo Nota)</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;!ELEMENT nota (remitente, destinatario+, (mensaje | urgente))&gt;
&lt;!ELEMENT remitente (#PCDATA)&gt;
&lt;!ELEMENT destinatario (#PCDATA)&gt;
&lt;!ELEMENT mensaje (#PCDATA)&gt;
&lt;!ELEMENT urgente EMPTY&gt;</pre>
                </div>

                <h4>2.3 Declaración de Atributos</h4>
                <p>Tipos: <code>CDATA</code> (Texto), <code>ID</code> (Único), <code>IDREF</code> (Referencia).</p>
                <p>Modificadores: <code>#REQUIRED</code>, <code>#IMPLIED</code> (Opcional), <code>#FIXED</code>.</p>

                <h3>3. XML Schema (XSD)</h3>
                <p>Evolución moderna escrita en XML. Soporta tipos de datos fuertes (int, date, boolean) y restricciones precisas.</p>

                <h4>3.2 Tipos Simples (SimpleType)</h4>
                <p>Para elementos con solo texto. Permite <strong>facetas</strong> (restricciones).</p>
                
                <div class="code-container">
                    <div class="code-header">
                        <span>XSD (Restricción Edad)</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;xs:element name="edad"&gt;
  &lt;xs:simpleType&gt;
    &lt;xs:restriction base="xs:integer"&gt;
      &lt;xs:minInclusive value="18"/&gt;
      &lt;xs:maxInclusive value="120"/&gt;
    &lt;/xs:restriction&gt;
  &lt;/xs:simpleType&gt;
&lt;/xs:element&gt;</pre>
                </div>

                <h4>3.3 Tipos Complejos (ComplexType)</h4>
                <p>Para elementos con atributos o hijos. Indicadores de orden:</p>
                <ul>
                    <li><code>xs:sequence</code>: Orden estricto.</li>
                    <li><code>xs:all</code>: Cualquier orden.</li>
                    <li><code>xs:choice</code>: Solo uno de la lista.</li>
                </ul>

                <div class="code-container">
                    <div class="code-header">
                        <span>XSD (Ejemplo Agenda)</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"&gt;
  &lt;xs:element name="contacto"&gt;
    &lt;xs:complexType&gt;
      &lt;xs:sequence&gt;
        &lt;xs:element name="nombre" type="xs:string"/&gt;
        &lt;xs:element name="telefono"&gt;
           &lt;xs:simpleType&gt;
             &lt;xs:restriction base="xs:string"&gt;
               &lt;xs:pattern value="[0-9]{9}"/&gt; 
             &lt;/xs:restriction&gt;
           &lt;/xs:simpleType&gt;
        &lt;/xs:element&gt;
      &lt;/xs:sequence&gt;
      &lt;xs:attribute name="tipo" type="xs:string" use="required"/&gt;
    &lt;/xs:complexType&gt;
  &lt;/xs:element&gt;
&lt;/xs:schema&gt;</pre>
                </div>

                <h3>4. Comparativa Técnica: DTD vs XSD</h3>
                <table class="topic-table">
                    <thead>
                        <tr>
                            <th>Característica</th>
                            <th>DTD (Clásico)</th>
                            <th>XSD (Moderno)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sintaxis</td>
                            <td>Propia, compacta, no XML</td>
                            <td>XML pura (verbosa)</td>
                        </tr>
                        <tr>
                            <td>Tipos de Datos</td>
                            <td>Todo es texto (PCDATA)</td>
                            <td>Tipado fuerte (date, int, boolean)</td>
                        </tr>
                        <tr>
                            <td>Validación</td>
                            <td>Limitada</td>
                            <td>Potente (rangos, regex)</td>
                        </tr>
                        <tr>
                            <td>Namespaces</td>
                            <td>No soporta</td>
                            <td>Soporte nativo</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        {
            title: 'Tema 5: Consulta y Transformación de XML (XPath y XSLT)',
            desc: 'Navegación con XPath, sintaxis de rutas, predicados, ejes y transformación con XSLT.',
            quiz: [
                { q: '¿Cuál es el propósito principal de XPath?', opts: ['Diseñar gráficos', 'Navegar a través de elementos y atributos en un XML', 'Validar la estructura del XML', 'Crear bases de datos'], correct: 1 },
                { q: 'En el modelo de datos XPath, ¿qué nodo representa el documento entero?', opts: ['Nodo Elemento', 'Nodo Raíz (/)', 'Nodo Texto', 'Nodo Atributo'], correct: 1 },
                { q: '¿Qué expresión XPath selecciona todos los elementos "libro" en cualquier nivel del documento?', opts: ['/libro', 'libro', '//libro', './libro'], correct: 2 },
                { q: '¿Qué símbolo se usa para seleccionar atributos en XPath?', opts: ['#', '$', '@', '&'], correct: 2 },
                { q: '¿Qué hace el predicado `[last()]`?', opts: ['Selecciona el primer nodo', 'Selecciona el último nodo', 'Elimina el nodo', 'Ordena los nodos'], correct: 1 },
                { q: '¿Qué eje XPath selecciona los hijos directos del nodo actual?', opts: ['parent', 'ancestor', 'child', 'descendant'], correct: 2 },
                { q: '¿Qué función XPath cuenta el número de nodos?', opts: ['sum()', 'count()', 'total()', 'length()'], correct: 1 },
                { q: '¿Qué es XSLT?', opts: ['Un lenguaje para transformar documentos XML', 'Un validador de esquemas', 'Un editor de texto', 'Un protocolo de red'], correct: 0 },
                { q: '¿Qué instrucción XSLT se usa para extraer el valor de un nodo?', opts: ['<xsl:value-of>', '<xsl:copy>', '<xsl:text>', '<xsl:template>'], correct: 0 },
                { q: '¿Qué instrucción XSLT se usa para iterar sobre un conjunto de nodos?', opts: ['<xsl:if>', '<xsl:choose>', '<xsl:for-each>', '<xsl:loop>'], correct: 2 }
            ],
            content: `
                <h3>1. XPath (XML Path Language)</h3>
                <p>Lenguaje para navegar por los elementos y atributos de un documento XML. Ve el XML como un árbol jerárquico de nodos.</p>
                
                <h4>1.2 Sintaxis de Rutas</h4>
                <ul>
                    <li><strong>Ruta Absoluta (/):</strong> Desde la raíz. Ej: <code>/biblioteca/libro</code></li>
                    <li><strong>Ruta Relativa:</strong> Desde el nodo actual. Ej: <code>titulo</code></li>
                    <li><strong>Descendencia Recursiva (//):</strong> Cualquier nivel. Ej: <code>//autor</code></li>
                    <li><strong>Atributos (@):</strong> Ej: <code>@moneda</code></li>
                </ul>

                <h4>1.3 Predicados (Filtros)</h4>
                <p>Filtran nodos basándose en condiciones. Se escriben entre corchetes <code>[...]</code>.</p>
                
                <div class="code-container">
                    <div class="code-header">
                        <span>XML Base</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;tienda&gt;
    &lt;producto id="A1" categoria="fruta"&gt;
        &lt;nombre&gt;Manzana&lt;/nombre&gt;
        &lt;precio&gt;1.50&lt;/precio&gt;
    &lt;/producto&gt;
    &lt;producto id="B2" categoria="carne"&gt;
        &lt;nombre&gt;Filete&lt;/nombre&gt;
        &lt;precio&gt;12.00&lt;/precio&gt;
    &lt;/producto&gt;
&lt;/tienda&gt;</pre>
                </div>

                <div class="code-container">
                    <div class="code-header">
                        <span>Ejemplos XPath</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">/* Primer producto */
/tienda/producto[1]

/* Productos con precio mayor a 10 */
/tienda/producto[precio>10]

/* Productos con atributo categoria */
//producto[@categoria]

/* Solo frutas */
//producto[@categoria='fruta']</pre>
                </div>

                <h3>2. Funciones de XPath</h3>
                <ul>
                    <li><strong>Nodos:</strong> <code>count()</code>, <code>position()</code>, <code>last()</code>.</li>
                    <li><strong>Cadenas:</strong> <code>contains()</code>, <code>starts-with()</code>.</li>
                    <li><strong>Numéricas:</strong> <code>sum()</code>, <code>round()</code>.</li>
                </ul>

                <h3>3. XSLT (Transformaciones)</h3>
                <p>Lenguaje para transformar XML en otros formatos (HTML, PDF, etc.). Usa plantillas (<code>xsl:template</code>).</p>
                
                <h4>Instrucciones Clave</h4>
                <ul>
                    <li><code>&lt;xsl:value-of select="..."/&gt;</code>: Extrae valor.</li>
                    <li><code>&lt;xsl:for-each select="..."&gt;</code>: Bucle.</li>
                    <li><code>&lt;xsl:if test="..."&gt;</code>: Condicional.</li>
                    <li><code>&lt;xsl:sort select="..."/&gt;</code>: Ordenar.</li>
                </ul>

                <div class="code-container">
                    <div class="code-header">
                        <span>XSLT (Transformación a HTML)</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"&gt;
&lt;xsl:template match="/"&gt; 
  &lt;html&gt;
  &lt;body&gt;
    &lt;h2&gt;Mi Colección de CDs&lt;/h2&gt;
    &lt;table border="1"&gt;
      &lt;tr bgcolor="#9acd32"&gt;
        &lt;th&gt;Título&lt;/th&gt;
        &lt;th&gt;Artista&lt;/th&gt;
      &lt;/tr&gt;
      &lt;xsl:for-each select="catalogo/cd"&gt;
        &lt;tr&gt;
          &lt;td&gt;&lt;xsl:value-of select="titulo"/&gt;&lt;/td&gt;
          &lt;td&gt;&lt;xsl:value-of select="artista"/&gt;&lt;/td&gt;
        &lt;/tr&gt;
      &lt;/xsl:for-each&gt;
    &lt;/table&gt;
  &lt;/body&gt;
  &lt;/html&gt;
&lt;/xsl:template&gt;
&lt;/xsl:stylesheet&gt;</pre>
                </div>
            `
        },
        {
            title: 'Tema 6: Sintaxis Práctica y Estructuras Avanzadas',
            desc: 'Integración de estilos, estructura de bloques, listas, selectores CSS, tablas complejas y formularios.',
            quiz: [
                { q: '¿Cuál es la forma recomendada (estándar profesional) de integrar CSS?', opts: ['En línea (style="")', 'Interno (<style>)', 'Externo (<link>)', 'Importado (@import)'], correct: 2 },
                { q: '¿Qué etiqueta HTML se utiliza para crear bloques estructurales grandes?', opts: ['<span>', '<a>', '<div>', '<b>'], correct: 2 },
                { q: '¿Qué etiqueta se usa para aplicar estilos a una parte pequeña de texto en la misma línea?', opts: ['<div>', '<p>', '<span>', '<br>'], correct: 2 },
                { q: '¿Qué tipo de lista es semánticamente ideal para glosarios (término y definición)?', opts: ['<ul>', '<ol>', '<dl>', '<li>'], correct: 2 },
                { q: 'En CSS, ¿qué selector tiene mayor prioridad (peso) entre los básicos?', opts: ['Etiqueta (p)', 'Clase (.clase)', 'ID (#id)', 'Universal (*)'], correct: 2 },
                { q: '¿Qué atributo HTML se usa para fusionar celdas verticalmente en una tabla?', opts: ['colspan', 'rowspan', 'merge-v', 'span-y'], correct: 1 },
                { q: '¿Qué atributo se usa para fusionar celdas horizontalmente?', opts: ['colspan', 'rowspan', 'merge-h', 'span-x'], correct: 0 },
                { q: 'En un formulario, ¿qué etiqueta agrupa visualmente controles con un borde?', opts: ['<div>', '<section>', '<fieldset>', '<group>'], correct: 2 },
                { q: 'Para que los "radio buttons" sean excluyentes (solo uno seleccionable), ¿qué deben compartir?', opts: ['El mismo id', 'El mismo value', 'El mismo name', 'La misma clase'], correct: 2 },
                { q: '¿Qué etiqueta define el título o leyenda de un <fieldset>?', opts: ['<caption>', '<title>', '<legend>', '<label>'], correct: 2 }
            ],
            content: `
                <h3>1. Integración de Estilos (Básico)</h3>
                <p>Evolución desde lo menos recomendado hasta el estándar profesional.</p>
                
                <div class="code-container">
                    <div class="code-header">
                        <span>HTML / CSS</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;!-- 1. En línea (No recomendado) --&gt;
&lt;h1 style="color: blue; text-align: center;"&gt;Título Azul&lt;/h1&gt;

&lt;!-- 2. Interno (Para una sola página) --&gt;
&lt;head&gt;
    &lt;style type="text/css"&gt;
        p { font-family: Arial; font-size: 14px; }
        .mi-clase { background-color: #eee; }
    &lt;/style&gt;
&lt;/head&gt;

&lt;!-- 3. Externo (Estándar Profesional) --&gt;
&lt;link rel="stylesheet" type="text/css" href="estilos.css"&gt;</pre>
                </div>

                <h3>2. Estructura: Bloque vs. Línea</h3>
                <p>Vital distinguir entre "cajas" grandes (<code>&lt;div&gt;</code>) y contenedores de texto pequeños (<code>&lt;span&gt;</code>).</p>

                <div class="code-container">
                    <div class="code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;!-- Bloque: Estructura macro --&gt;
&lt;div style="background-color: yellow; border: 1px solid black;"&gt;
    &lt;h2&gt;Sección Principal&lt;/h2&gt;
    &lt;p&gt;Esto es un párrafo dentro de un bloque div.&lt;/p&gt;
&lt;/div&gt;

&lt;!-- Línea: Detalles micro --&gt;
&lt;p&gt;
    Este es un texto normal, pero &lt;span style="color: red; font-weight: bold;"&gt;esta parte es roja&lt;/span&gt; y sigue en la misma línea.
&lt;/p&gt;</pre>
                </div>

                <h3>3. Listas de Datos</h3>
                <ul>
                    <li><code>&lt;ul&gt;</code>: Desordenada (viñetas).</li>
                    <li><code>&lt;ol&gt;</code>: Ordenada (números/letras).</li>
                    <li><code>&lt;dl&gt;</code>: Definición (Glosarios).</li>
                </ul>

                <div class="code-container">
                    <div class="code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;ul type="square"&gt;
    &lt;li&gt;Primer elemento&lt;/li&gt;
    &lt;li&gt;Segundo elemento&lt;/li&gt;
&lt;/ul&gt;

&lt;dl&gt;
    &lt;dt&gt;HTML&lt;/dt&gt; 
    &lt;dd&gt;Lenguaje de marcado de hipertexto.&lt;/dd&gt; 
&lt;/dl&gt;</pre>
                </div>

                <h3>4. Sintaxis de Selectores CSS</h3>
                <p>La precisión es clave. Prioridad: ID &gt; Clase &gt; Etiqueta.</p>

                <div class="code-container">
                    <div class="code-header">
                        <span>CSS</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">/* Universal: Resetea todo */
* { margin: 0; padding: 0; }

/* Tipo: Todas las etiquetas h1 */
h1 { color: navy; }

/* Clase: Reutilizable */
.alerta { color: red; border: 1px solid red; }

/* ID: Único (mayor prioridad) */
#cabecera-principal { background-color: black; }

/* Descendiente: p dentro de div */
div p { font-style: italic; }</pre>
                </div>

                <h3>5. Tablas y Fusión de Celdas</h3>
                <p>Requiere pensamiento espacial. <code>rowspan</code> (vertical) y <code>colspan</code> (horizontal).</p>

                <div class="code-container">
                    <div class="code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;table border="1"&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Horario&lt;/th&gt;
            &lt;th&gt;Lunes&lt;/th&gt;
            &lt;th&gt;Martes&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;09:00&lt;/td&gt;
            &lt;td rowspan="2"&gt;Matemáticas&lt;/td&gt; 
            &lt;td&gt;Inglés&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;10:00&lt;/td&gt;
            &lt;td&gt;Historia&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;11:00&lt;/td&gt;
            &lt;td colspan="2" align="center"&gt;RECREO&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</pre>
                </div>

                <h3>6. Formularios Complejos</h3>
                <p>Estructura compleja con atributos lógicos (<code>name</code>, <code>value</code>).</p>

                <div class="code-container">
                    <div class="code-header">
                        <span>HTML</span>
                        <button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copiar</button>
                    </div>
                    <pre class="code-content">&lt;form action="servidor.php" method="POST"&gt;
    &lt;fieldset&gt;
        &lt;legend&gt;Datos de Usuario&lt;/legend&gt;
        
        &lt;label for="nombre"&gt;Nombre:&lt;/label&gt;
        &lt;input type="text" id="nombre" name="user_name"&gt;
        &lt;br&gt;

        Hombre: &lt;input type="radio" name="sexo" value="H" checked&gt;
        Mujer: &lt;input type="radio" name="sexo" value="M"&gt;
    &lt;/fieldset&gt;

    &lt;fieldset&gt;
        &lt;legend&gt;Preferencias&lt;/legend&gt;
        
        &lt;label&gt;Lectura:&lt;/label&gt;
        &lt;input type="checkbox" name="hobbies" value="lectura" checked&gt;

        &lt;label for="provincia"&gt;Provincia:&lt;/label&gt;
        &lt;select name="provincia" id="provincia"&gt;
            &lt;option value="madrid"&gt;Madrid&lt;/option&gt;
            &lt;option value="bcn" selected&gt;Barcelona&lt;/option&gt;
        &lt;/select&gt;
        
        &lt;textarea name="comentarios" rows="5"&gt;Escribe aquí...&lt;/textarea&gt;
    &lt;/fieldset&gt;

    &lt;input type="submit" value="Enviar Datos"&gt;
&lt;/form&gt;</pre>
                </div>
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

// Datos de ejemplo (recursos de muestra)
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

// Estado de la aplicación
let currentYear = 1;
let currentSubject = 'all';
let currentSearch = '';

// Elementos del DOM
const resourceGrid = document.getElementById('resourceGrid');
const searchInput = document.getElementById('searchInput');
const filterContainer = document.getElementById('filterContainer');
const yearBtns = document.querySelectorAll('.year-btn');
const topicsContainer = document.getElementById('topicsContainer');

// Inicialización de la aplicación
function init() {
    renderSubjectFilters();
    renderTopics();
    renderResources();
}

// Renderizar filtros de asignaturas
function renderSubjectFilters() {
    const currentSubjects = subjects[currentYear];

    let html = `<button class="filter-btn ${currentSubject === 'all' ? 'active' : ''}" data-subject="all">Todos</button>`;

    currentSubjects.forEach(sub => {
        html += `<button class="filter-btn ${currentSubject === sub ? 'active' : ''}" data-subject="${sub}">${sub}</button>`;
    });

    filterContainer.innerHTML = html;

    // Añadir event listeners a los nuevos botones
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentSubject = btn.dataset.subject;
            renderSubjectFilters(); // Re-renderizar para actualizar el estado activo
            renderTopics(); // Renderizar temas de la asignatura seleccionada
            renderResources();
        });
    });
}

// Renderizar temas de la asignatura seleccionada
function renderTopics() {
    topicsContainer.innerHTML = '';

    if (currentSubject === 'all' || !topicsData[currentSubject]) {
        return;
    }

    const topics = topicsData[currentSubject];
    const subjectIcon = subjectIcons[currentSubject] || 'fa-solid fa-book';
    let html = `<h3><i class="${subjectIcon}"></i> Temas de ${currentSubject}</h3><div class="topics-grid">`;

    topics.forEach((topic, index) => {
        // Extraer número de tema del título (ej. "Tema 1:" -> 1)
        const topicNumber = topic.title.match(/Tema (\d+)/)?.[1] || (index + 1);

        // Si el tema tiene contenido, hacer toda la tarjeta clickeable
        if (topic.content) {
            html += `
                <div class="topic-card topic-card-clickable" onclick="openTopicModal('${currentSubject}', ${index})" style="cursor: pointer;">
                    <div class="topic-number"><i class="fa-solid fa-book-open"></i> ${topicNumber}</div>
                    <h4>${topic.title}</h4>
                    <p>${topic.desc}</p>
                </div>
            `;
        } else {
            // Si no tiene contenido, mostrar la tarjeta sin hacer clickeable
            html += `
                <div class="topic-card">
                    <div class="topic-number"><i class="fa-solid fa-book-open"></i> ${topicNumber}</div>
                    <h4>${topic.title}</h4>
                    <p>${topic.desc}</p>
                </div>
            `;
        }
    });

    html += '</div>';
    topicsContainer.innerHTML = html;
}

// Renderizar recursos (tarjetas de contenido)
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

// Lógica del modal de temas
window.openTopicModal = function (subject, index) {
    const topic = topicsData[subject][index];
    if (!topic || !topic.content) return;

    document.getElementById('topicModalTitle').textContent = topic.title;
    document.getElementById('topicModalContent').innerHTML = topic.content;

    // Inyectar botón de quiz si existe
    if (topic.quiz && topic.quiz.length > 0) {
        const btn = `<div style="text-align:center;margin-top:2rem;padding-top:2rem;border-top:1px solid var(--card-border)">
            <button class="quiz-start-btn" onclick="startQuiz('${subject}',${index})">
                <i class="fa-solid fa-clipboard-question"></i> Hacer Test
            </button>
        </div>`;
        document.getElementById('topicModalContent').innerHTML += btn;
    }

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

// Event Listeners (Escuchadores de eventos)
yearBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        yearBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentYear = parseInt(btn.dataset.year);
        currentSubject = 'all'; // Resetear asignatura al cambiar de curso

        renderSubjectFilters();
        renderTopics(); // Limpiar temas al cambiar de curso
        renderResources();
    });
});

searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderResources();
});

// Iniciar la aplicación
// init();

// Función para copiar código
window.copyCode = function (btn) {
    const code = btn.closest('.code-container').querySelector('.code-content').innerText;
    navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copiado';
        setTimeout(() => {
            btn.innerHTML = originalText;
        }, 2000);
    });
}


        
        console.log('LMSGI Topics Count:', topicsData['LMSGI'].length);
        console.log('LMSGI Topic 6 Quiz Length:', topicsData['LMSGI'][5].quiz.length);
        console.log('LMSGI Topic 6 Quiz Content:', JSON.stringify(topicsData['LMSGI'][5].quiz, null, 2));
    