# 🚀 Guía de Configuración - Integración con IA (Gemini API)

## 📋 Requisitos previos

1. Una cuenta de GitHub (donde ya tienes el código)
2. Una cuenta de Vercel (gratis) - [vercel.com](https://vercel.com)
3. Una API Key de Google Gemini (gratis) - [Google AI Studio](https://aistudio.google.com/)

---

## 🔧 Paso 1: Obtener tu API Key de Gemini

1. Ve a [Google AI Studio](https://aistudio.google.com/)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en "Get API Key" (Obtener clave de API)
4. Copia la clave generada (empieza con `AIza...`)
5. **¡IMPORTANTE!** Nunca compartas esta clave públicamente

---

## 🌐 Paso 2: Desplegar en Vercel

### Opción A: Desde GitHub (Recomendado)

1. **Sube tu código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ASIR_hub con IA"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/ASIR_hub.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com) y haz login con GitHub
   - Haz clic en "Add New Project"
   - Selecciona tu repositorio `ASIR_hub`
   - Haz clic en "Import"

3. **Configura la variable de entorno:**
   - En la página de configuración del proyecto, ve a "Environment Variables"
   - Añade una nueva variable:
     - **Name:** `GEMINI_API_KEY`
     - **Value:** Tu API Key que copiaste en el Paso 1
   - Haz clic en "Add"

4. **Despliega:**
   - Haz clic en "Deploy"
   - Espera 1-2 minutos
   - ¡Tu web estará en `https://tu-proyecto.vercel.app`!

### Opción B: Desde la CLI de Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Configurar la variable de entorno
vercel env add GEMINI_API_KEY
# Pega tu API Key cuando te lo pida

# Redesplegar con la nueva configuración
vercel --prod
```

---

## 🧪 Paso 3: Probar las funciones de IA

1. Abre tu web desplegada en Vercel
2. Navega a un tema (ej: FH > Tema 1)
3. Haz clic en "Leer más"
4. En el modal, verás 4 botones de IA:
   - **📄 Resumen:** Genera un resumen estructurado
   - **📝 Test:** Crea preguntas tipo examen
   - **🗺️ Mapa Mental:** Diagrama visual de conceptos
   - **💡 Explicación:** Explicación didáctica

---

## 🔄 Actualizar el código

Cada vez que hagas cambios en tu código local:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

Vercel detectará automáticamente los cambios y actualizará tu web en ~1 minuto.

---

## 🐛 Solución de problemas

### Error: "API Key no configurada"
- Verifica que añadiste `GEMINI_API_KEY` en las variables de entorno de Vercel
- Asegúrate de redesplegar después de añadir la variable

### Error: "Failed to fetch"
- Si estás probando en local (`localhost`), la API no funcionará
- Debes probar en la URL de Vercel (ej: `https://tu-proyecto.vercel.app`)
- Esto es por seguridad: la API Key solo está en los servidores de Vercel

### Los diagramas no se ven
- Verifica que la librería Mermaid.js se cargó correctamente
- Abre la consola del navegador (F12) y busca errores

---

## 💰 Límites del plan gratuito

### Vercel (Hosting)
- ✅ Ancho de banda: 100 GB/mes
- ✅ Builds: Ilimitados
- ✅ Dominios personalizados: Sí
- ✅ Funciones serverless: 100 GB-horas/mes

### Google Gemini API
- ✅ 60 peticiones por minuto
- ✅ 1,500 peticiones por día (gratis)
- ✅ Suficiente para uso personal/educativo

---

## 📚 Próximos pasos (Opcional)

### Añadir base de datos (Supabase)
Si quieres que los usuarios puedan guardar sus resúmenes/tests:

1. Crea cuenta en [supabase.com](https://supabase.com)
2. Crea un nuevo proyecto
3. En Vercel, añade estas variables de entorno:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`

### Dominio personalizado
En Vercel > Settings > Domains, puedes añadir tu propio dominio (ej: `asir-hub.com`)

---

## 📞 Soporte

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Revisa los logs en Vercel (pestaña "Deployments" > clic en el deployment > "View Function Logs")
3. Verifica que la API Key sea válida en [Google AI Studio](https://aistudio.google.com/)

---

**¡Listo!** Ahora tienes un LMS con IA totalmente funcional y gratis 🎉
