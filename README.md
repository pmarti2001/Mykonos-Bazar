# Mykonos Bazar - E-commerce (Entrega Final)

¡Bienvenido a **Mykonos Bazar**! Este es un proyecto de e-commerce completamente funcional desarrollado en React para la entrega final del curso. La aplicación simula una tienda de artículos de bazar y decoración, equipada con un sistema de compras interactivo, un panel de administración completo (CRUD) y autenticación segura de usuarios.

## 🚀 Características y Objetivos Cumplidos

### 🛒 1. Autenticación y Carrito de Compras (Context API & Firebase)
- **Carrito de Compras Global:** Gestionado mediante `CarritoContext`. Permite agregar productos, actualizar cantidades, eliminar productos de forma individual y vaciar el carrito.
- **Autenticación con Firebase:** Registro e inicio de sesión de usuarios con Firebase Authentication a través de `AuthContext`.
- **Rutas Protegidas:** Acceso restringido a secciones privadas (como el panel de administración y el perfil de usuario).

### 📦 2. Administración del Catálogo (CRUD Completo)
- **Creación, Edición y Eliminación:** Panel exclusivo para administradores donde se pueden añadir nuevos artículos de bazar, editar sus datos o removerlos de la tienda.
- **Validación de Formularios:** Inputs controlados con validaciones estrictas (nombre obligatorio, precio positivo, URL de imagen válida).
- **Control de UX:** Modales de confirmación antes de eliminar productos para evitar pérdidas accidentales, spinners de carga para procesos asíncronos y manejo amigable de errores de conexión.

### 🎨 3. Diseño Responsivo, Estilización y SEO
- **Adaptabilidad:** Estructura de grillas fluidas utilizando **React-Bootstrap** para garantizar una experiencia óptima en móviles, tablets y PCs.
- **Estilos Modulares:** Diseño moderno implementado con **styled-components** para mantener un código limpio y encapsulado.
- **Interactividad Visual:** Integración de íconos profesionales mediante **React Icons**.
- **Optimización SEO:** Control dinámico de metadatos e indexación básica en cada sección con **React Helmet**.

### 🔍 4. Filtros y Paginación
- **Búsqueda en Tiempo Real:** Barra de búsqueda interactiva que filtra el catálogo instantáneamente a medida que el usuario escribe.
- **Paginador Funcional:** Segmentación de productos en páginas para agilizar los tiempos de carga y evitar el scroll infinito.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React, React Router Dom
- **Manejo de Estado:** Context API (React)
- **Estilos:** React-Bootstrap, Styled-components, CSS3
- **Base de Datos & Auth:** Firebase (Authentication & Firestore)
- **Herramientas de Apoyo:** React Icons, React Helmet

---

## 💻 Instrucciones de Instalación y Ejecución Local

Sigue estos pasos para clonar el proyecto y ejecutarlo en tu computadora:

### Prerrequisitos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 16 o superior) y un gestor de paquetes como npm.

### Paso 1: Clonar el repositorio
Abre tu terminal y ejecuta el siguiente comando:
```bash
git clone [https://github.com/pmarti2001/Entrega-final-Mykonos-bazar.git](https://github.com/pmarti2001/Entrega-final-Mykonos-bazar.git)
