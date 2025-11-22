const subjects = {
    1: ['FH', 'DIG', 'GBD', 'LMSGI', 'SOS', 'IPE1', 'ISO', 'PAR'],
    2: ['ASO', 'ASGBD', 'SAD', 'PROY', 'OPT', 'IPE2', 'IAW', 'HLC', 'ING', 'SRI']
};

// Subject icons mapping
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
        },
        {
            title: 'Tema 3: Componentes del Ordenador',
            desc: 'Caja, fuente de alimentación, CPU, refrigeración, RAM, almacenamiento y tarjetas de expansión.',
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
    const subjectIcon = subjectIcons[currentSubject] || 'fa-solid fa-book';
    let html = `<h3><i class="${subjectIcon}"></i> Temas de ${currentSubject}</h3><div class="topics-grid">`;

    topics.forEach((topic, index) => {
        // Extract topic number from title (e.g., "Tema 1:" -> 1)
        const topicNumber = topic.title.match(/Tema (\d+)/)?.[1] || (index + 1);
        html += `
            <div class="topic-card">
                <div class="topic-number"><i class="fa-solid fa-book-open"></i> ${topicNumber}</div>
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

