// Este código se ejecuta en los servidores de Vercel, no en el navegador del usuario.
// Así tu API Key está segura.

export default async function handler(req, res) {
    // 1. Configuración de seguridad CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    const { contenido, tipo } = req.body;
    const apiKey = process.env.GEMINI_API_KEY; // La clave se guarda en las variables de entorno de Vercel

    if (!apiKey) {
        return res.status(500).json({ error: 'API Key no configurada' });
    }

    // 2. Definir el prompt según lo que pidas
    let prompt = "";

    switch (tipo) {
        case 'resumen':
            prompt = `Haz un resumen estructurado y claro del siguiente texto educativo de ASIR (Administración de Sistemas Informáticos en Red). Usa formato HTML con etiquetas <h4>, <p>, <ul>, <li> para organizar la información:\n\n${contenido}`;
            break;

        case 'test':
            prompt = `Genera 5 preguntas tipo test con 4 opciones de respuesta múltiple sobre este texto de ASIR. Formato HTML:
      - Cada pregunta en un <div class="pregunta">
      - Título de pregunta en <h4>
      - Opciones en <ul> con <li>
      - Al final, indica las respuestas correctas en un <div class="respuestas">
      
      Texto:\n${contenido}`;
            break;

        case 'mapa':
            prompt = `Crea un diagrama de flujo en sintaxis Mermaid.js que represente visualmente los conceptos principales de este texto educativo. Usa nodos, flechas y agrupaciones lógicas. Solo devuelve el código Mermaid sin explicaciones adicionales:\n\n${contenido}`;
            break;

        case 'explicacion':
            prompt = `Explica de forma sencilla y didáctica los conceptos más importantes de este texto, como si fueras un profesor explicándoselo a un estudiante de ASIR. Usa ejemplos prácticos y formato HTML con <h4>, <p>, <strong>:\n\n${contenido}`;
            break;

        default:
            return res.status(400).json({ error: 'Tipo de solicitud no válido' });
    }

    // 3. Llamada a la API de Google Gemini
    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: prompt }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 2048,
                    }
                })
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Error en la API de Gemini');
        }

        const data = await response.json();
        const textoGenerado = data.candidates[0].content.parts[0].text;

        res.status(200).json({ resultado: textoGenerado });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            error: 'Error conectando con la IA',
            detalles: error.message
        });
    }
}
