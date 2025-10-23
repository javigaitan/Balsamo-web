# Balsamo-web
# BÁLSAMO WEB

Sitio web oficial de **Bálsamo**, desarrollado con tecnologías modernas orientadas a rendimiento, escalabilidad y facilidad de mantenimiento.

---

## 🚀 Descripción General

**Bálsamo Web** es un sitio responsive desarrollado en **Next.js**, diseñado para ofrecer una experiencia de usuario fluida y moderna.
Incluye secciones informativas, formularios dinámicos y la integración de **EmailJS** para el envío de consultas a través de correo electrónico.

El sitio está desplegado en **Vercel**:
🔗 [https://balsamo-web.vercel.app/](https://balsamo-web.vercel.app/)

Repositorio:
💻 [https://github.com/javigaitan/Balsamo-web](https://github.com/javigaitan/Balsamo-web)

---

## 🧠 Tecnologías Utilizadas

* **Next.js 14** – Framework React para SSR/SSG.
* **React 18** – Biblioteca base para la UI.
* **Tailwind CSS** – Estilos modernos y responsive.
* **EmailJS** – Envío de correos desde el frontend.
* **CSS Modules** – Estilos encapsulados por componente.
* **Vercel** – Hosting y CI/CD.

---

## 🧩 Estructura del Proyecto

```
Balsamo-web/
│
├── public/                 # Imágenes, íconos y assets estáticos
│
├── src/
│   ├── components/          # Componentes reutilizables de UI
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Forms/
│   │   └── ...
│   │
│   ├── pages/               # Páginas principales del sitio
│   │   ├── index.jsx        # Página principal
│   │   ├── contacto.jsx     # Formulario de contacto
│   │   └── ...
│   │
│   ├── styles/              # Estilos globales y CSS Modules
│   ├── utils/               # Funciones auxiliares o helpers
│   └── lib/                 # Integraciones externas (e.g. EmailJS)
│
├── .env.local               # Variables de entorno (no versionar)
├── package.json             # Dependencias y scripts
├── tailwind.config.js       # Configuración de Tailwind
├── postcss.config.js        # Configuración de PostCSS
└── README.md                # Documentación del proyecto
```

---

## ⚙️ Instalación y Ejecución Local

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/javigaitan/Balsamo-web.git
   cd Balsamo-web
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Crear el archivo **.env.local** en la raíz del proyecto:

   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxx
   ```

4. Ejecutar el proyecto en modo desarrollo:

   ```bash
   npm run dev
   ```

5. Abrir en el navegador:

   ```
   http://localhost:3000
   ```

---

## 🚀 Instructivo de Despliegue

### 🔹 Despliegue en Vercel (recomendado)

1. Realizar `push` al repositorio principal en GitHub.
2. En [Vercel](https://vercel.com), conectar el proyecto y seleccionar el repositorio.
3. Configurar las variables de entorno según el archivo `.env.local`.
4. Vercel realizará automáticamente la **build** y el despliegue.

---

### 🔹 Despliegue en otro servidor (manual)

Si el despliegue no se realiza en **Vercel**, seguir estos pasos:

1. Generar la build optimizada:

   ```bash
   npm run build
   ```

2. Iniciar el servidor de producción localmente:

   ```bash
   npm start
   ```

3. Para desplegar en otro entorno (por ejemplo, un servidor Linux o VPS):

   * Asegurarse de tener **Node.js** y **npm** instalados.
   * Subir los archivos del proyecto al servidor (por SSH, FTP o CI/CD).
   * Instalar dependencias con:

     ```bash
     npm install --production
     ```
   * Ejecutar la build y el servidor:

     ```bash
     npm run build && npm start
     ```
   * Configurar el dominio y el puerto en el firewall o reverse proxy (Nginx/Apache).

> 💡 En caso de usar **PM2** o **Docker**, puede configurarse un servicio persistente que mantenga la aplicación corriendo en segundo plano.

---

## 🧾 Documentación

### 📄 Documentación técnica EmailJS

[Implementación y Funcionamiento del Servicio de Envío de Correos mediante EmailJS](https://docs.google.com/document/d/1_Yhfut2DqHwCr6gjN41eZmEbjH7TWT6vUUzL5reEDdM/edit?usp=sharing)

### 📄 Documentación funcional del proyecto



---

## 👤 Autor

**Javier Gaitán**
Full Stack Developer | CRM HubSpot Implementer
📧 [LinkedIn](https://www.linkedin.com/in/javigaitan/)
💻 [GitHub](https://github.com/javigaitan)

---

## 🔒 Licencia

Este proyecto es de uso privado y pertenece a **Bálsamo**.
No se permite la redistribución sin autorización del autor o de la empresa.
