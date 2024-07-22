document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const eventFilter = document.getElementById('event-filter');
  
    // Datos de ejemplo de fotos (simulación de datos JSON)
    const photos = [
      { id: 1, title: 'Fiesta de espuma', date: '2023-05-20', type: 'espuma', imageUrl: '/gallery/espuma5.jpg' },
      { id: 2, title: 'fiesta de espuma', date: '2023-06-15', type: 'espuma', imageUrl: '/gallery/espuma1.jfif' },
      { id: 3, title: 'fiesta de espuma', date: '2023-07-10', type: 'espuma', imageUrl: '/gallery/espuma4.webp' },
      { id: 4, title: 'fiesta de espuma', date: '2023-07-10', type: 'espuma', imageUrl: '/gallery/espuma2.jfif' },
      { id: 5, title: 'fiesta de espuma', date: '2023-07-10', type: 'espuma', imageUrl: '/gallery/espuma3.jpg' },
      { id: 6, title: 'Fiesta disco', date: '2023-05-20', type: 'espuma', imageUrl: '/gallery/fdisco1.jfif' },
      { id: 7, title: 'fiesta disco', date: '2023-06-15', type: 'disco', imageUrl: '/gallery/fdisco3.jpg' },
      { id: 8, title: 'fiesta disco', date: '2023-07-10', type: 'disco', imageUrl: '/gallery/fdisco4.jfif' },
      { id: 9, title: 'fiesta disco', date: '2023-07-10', type: 'disco', imageUrl: '/gallery/fdisco6.jfif' },
      { id: 10, title: 'fiesta disco', date: '2023-07-10', type: 'disco', imageUrl:'/gallery/fdisco8.jfif' },
      { id: 11, title: 'Fiesta disco', date: '2023-05-20', type: 'disco', imageUrl: '/gallery/fdisco2.avif' },
      { id: 12, title: 'fiesta disco', date: '2023-06-15', type: 'disco', imageUrl: '/gallery/fdisco9.jfif' },
      { id: 13, title: 'fiesta disco', date: '2023-07-10', type: 'disco', imageUrl: '/gallery/fdisco7.jfif' },
      { id: 14, title: 'fiesta disco', date: '2023-07-10', type: 'disco', imageUrl: '/gallery/fdisco5.jfif' },
      { id: 15, title: 'fiesta disco', date: '2023-07-10', type: 'disco', imageUrl: '/gallery/fdisco10.jfif' },
      { id: 16, title: 'fiesta neon', date: '2023-07-10', type: 'neon', imageUrl: '/gallery/neon6.jfif' },
      { id: 17, title: 'fiesta neon', date: '2023-07-10', type: 'neon', imageUrl: '/gallery/neon1.jfif' },
      { id: 18, title: 'fiesta neon', date: '2023-07-10', type: 'neon', imageUrl: '/gallery/neon5.jfif' },
      { id: 19, title: 'fiesta neon', date: '2023-07-10', type: 'neon', imageUrl: '/gallery/neon3.jfif' },
      { id: 20, title: 'fiesta neon', date: '2023-07-10', type: 'neon', imageUrl: '/gallery/neon8.jfif' },
      { id: 21, title: 'fiesta neon', date: '2023-07-10', type: 'neon', imageUrl: '/gallery/neon7.jfif' },
      { id: 22, title: 'fiesta neon', date: '2023-07-10', type: 'neon', imageUrl: '/gallery/neon2.jfif' },
      { id: 23, title: 'fiesta neon', date: '2023-07-10', type: 'neon', imageUrl: '/gallery/neon4.jfif' },
      { id: 24, title: 'fiesta neon', date: '2023-07-10', type: 'neon', imageUrl: '/gallery/neon9.jfif' },
      { id: 25, title: 'Artistas invitados', date: '2023-05-20', type: 'Artistas', imageUrl: '/gallery/artista1.jfif' },
      { id: 26, title: 'Artistas invitados', date: '2023-06-15', type: 'Artistas', imageUrl: '/gallery/artista9.jfif' },
      { id: 27, title: 'Artistas invitados', date: '2023-07-10', type: 'Artistas', imageUrl: '/gallery/artista3.jfif' },
      { id: 28, title: 'Artistas invitados', date: '2023-07-10', type: 'Artistas', imageUrl: '/gallery/artista10.jfif' },
      { id: 29, title: 'Artistas invitados', date: '2023-07-10', type: 'Artistas', imageUrl: '/gallery/artista5.jfif' },
      { id: 30, title: 'Artistas invitados', date: '2023-05-20', type: 'Artistas', imageUrl: '/gallery/artista6.jfif' },
      { id: 31, title: 'Artistas invitados', date: '2023-06-15', type: 'Artistas', imageUrl: '/gallery/artista7.jfif' },
      { id: 32, title: 'Artistas invitados', date: '2023-07-10', type: 'Artistas', imageUrl: '/gallery/artista2.jfif' },
      { id: 33, title: 'Artistas invitados', date: '2023-07-10', type: 'Artistas', imageUrl: '/gallery/artista8.jfif' },
      { id: 34, title: 'Artistas invitados', date: '2023-07-10', type: 'Artistas', imageUrl: '/gallery/artista4.jfif' },


      // Agrega más fotos según sea necesario
    ];
  
    // Función para mostrar las fotos en la galería
    function showPhotos(photos) {
      gallery.innerHTML = ''; // Limpiar galería antes de añadir nuevas fotos
  
      photos.forEach(photo => {
        const photoElement = document.createElement('div');
        photoElement.classList.add('photo');
        photoElement.innerHTML = `
          <img src="${photo.imageUrl}" alt="${photo.title}">
        `;
        gallery.appendChild(photoElement);
      });
    }
  
    // Mostrar todas las fotos al cargar la página
    showPhotos(photos);
  
    // Manejar cambio en el filtro de eventos
    eventFilter.addEventListener('change', function() {
      const selectedFilter = eventFilter.value;
  
      if (selectedFilter === 'all') {
        showPhotos(photos); // Mostrar todas las fotos si se selecciona 'all'
      } else {
        const filteredPhotos = photos.filter(photo => photo.type === selectedFilter);
        showPhotos(filteredPhotos); // Filtrar fotos por tipo de evento
      }
    });
  });
  