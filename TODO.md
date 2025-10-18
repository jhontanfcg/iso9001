# TODO: Agregar más diseño a index.html

## Tareas Pendientes
- [ ] Corregir errores tipográficos en index.html (e.g., " document-grid\" a "document-grid")
- [ ] Agregar íconos SVG a cada módulo en la sección "contenido" para mejor jerarquía visual
- [ ] Mejorar la navegación agregando íconos a los botones
- [ ] Actualizar styles.css para añadir patrón de fondo sutil al body, mejorar header con gradiente o patrón, y añadir más efectos de hover y transiciones
- [ ] Mejorar el footer con elementos decorativos o información adicional
- [ ] Asegurar que el diseño sea responsivo y accesible
- [ ] Probar la página en el navegador para verificar el aspecto visual

## Notas
- Usar íconos SVG inline para evitar dependencias externas.
- Mantener consistencia con el tema de colores existente (azul y blanco).
- Agregar animaciones sutiles para mejorar la experiencia del usuario.

## Tarea: Agregar funcionalidad de subida de archivos debajo de cada documento en auditoria-9001.html

### Tareas Pendientes
- [x] Modificar auditoria-9001.html: Agregar input de archivo y botón debajo de cada enlace de documento en la lista document-grid
- [x] Actualizar script.js: Agregar nueva función uploadFile(button) para manejar subida por ítem
- [x] Eliminar la sección "Subir Archivos Modificados" y la función uploadFiles() correspondiente
- [ ] Probar la funcionalidad en el navegador para asegurar que los archivos se suban correctamente debajo de cada documento

### Notas
- Los archivos subidos se listan globalmente en el div uploaded-files.
- Sin nuevas dependencias; usar script.js existente.

## Nueva Tarea: Mostrar archivos subidos en evaluacion-auditoria-9001.html con checklist de evaluación

### Tareas Pendientes
- [x] Modificar script.js: Almacenar archivos subidos en localStorage para persistencia
- [x] Modificar evaluacion-auditoria-9001.html: Agregar sección para mostrar archivos subidos desde localStorage
- [x] Agregar checklist debajo de cada archivo con opciones "Aplica" y "No aplica"
- [x] Actualizar script.js: Agregar funcionalidad para guardar evaluaciones en localStorage
- [x] Agregar enlace de descarga para archivos subidos en evaluacion-auditoria-9001.html
- [x] Agregar login modal a evaluacion-auditoria-9001.html con credenciales jhonatan.cifuentes46@gmail.com / 12345678
- [x] Actualizar styles.css con estilos para el modal de login
- [ ] Probar la funcionalidad en ambas páginas

### Notas
- Usar localStorage para almacenar archivos subidos y evaluaciones.
- Checklist con radio buttons para "Aplica" y "No aplica".
- Archivos almacenados como data URLs para permitir descarga.
- Cambios aplicados: Archivos se almacenan como data URLs en localStorage, y se muestran con enlaces de descarga en la página de evaluación.
- Login modal agregado para proteger el acceso a la página de evaluación.
