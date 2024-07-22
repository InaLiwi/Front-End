/* Mi idea es la siguiente:
Se obtiene lo que se respondió en el formulario, tal vez mediante un getById (no sé obtenerlo)
Luego se muestran aquellos elementos cuya class y/o fecha haya sido seleccionada.

Ejemplo:
Todos los eventos están mostrados (display)
Alguien busca fotos de un evento de fiesta temática, categoría GRUPOs musicales, que ocurrió este mes.
Entonces, se muestran los eventos donde se incluya
    class="tematica grupo" 
    fecha="este_mes"
Se logra bloqueando el display de los que no coincidan con eso.
        Podríamos hacerlo así: se envía el formulario, todos los display:none, y luego solo se activan los display de los seleccionados.

*/