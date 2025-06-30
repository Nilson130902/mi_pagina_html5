document.addEventListener('DOMContentLoaded', () => {
    const imageUrlInput = document.getElementById('imageUrl');
    const addImageBtn = document.getElementById('addImageBtn');
    const deleteImageBtn = document.getElementById('deleteImageBtn');
    const galleryContainer = document.getElementById('galleryContainer');

    let selectedImage = null; // Variable para mantener un registro de la imagen seleccionada

    // --- Funcionalidad: Agregar imágenes ---
    addImageBtn.addEventListener('click', () => {
        const imageUrl = imageUrlInput.value.trim();

        if (imageUrl) {
            const newImage = document.createElement('img');
            newImage.src = imageUrl;
            newImage.alt = 'Imagen de la galería';
            newImage.classList.add('gallery-image');

            // animación de entrada
            newImage.style.animation = 'fadeIn 0.5s ease-out forwards';

            // evento de clic para seleccionar/deseleccionar
            newImage.addEventListener('click', () => {
                selectImage(newImage);
            });

            galleryContainer.appendChild(newImage);
            imageUrlInput.value = ''; // Limpiar el input después de agregar

        } else {
            alert('Por favor, ingresa una URL de imagen válida.');
        }
    });

    // --- Funcionalidad: Seleccionar imágenes ---
    const selectImage = (imageElement) => {
        // Si ya hay una imagen seleccionada, quitarle la clase 'selected'
        if (selectedImage && selectedImage !== imageElement) {
            selectedImage.classList.remove('selected');
        }

        // Alternar la clase 'selected' en la imagen clickeada
        imageElement.classList.toggle('selected');

        // Actualizar la variable selectedImage
        if (imageElement.classList.contains('selected')) {
            selectedImage = imageElement;
        } else {
            selectedImage = null; // Si se deselecciona, no hay imagen seleccionada
        }
    };

    // --- Funcionalidad: Eliminar imágenes ---
    deleteImageBtn.addEventListener('click', () => {
        if (selectedImage) {
            // Aplicar animación de salida antes de eliminar
            selectedImage.style.animation = 'fadeOut 0.5s ease-out forwards';
            selectedImage.addEventListener('animationend', () => {
                galleryContainer.removeChild(selectedImage);
                selectedImage = null; // Limpiar la referencia a la imagen eliminada
            }, { once: true }); // Asegura que el evento se dispare solo una vez
        } else {
            alert('Por favor, selecciona una imagen para eliminar.');
        }
    });

    // --- Requisito: keydown para atajos de teclado (Opcional, pero bueno añadirlo) ---
    document.addEventListener('keydown', (event) => {
        // Tecla 'Delete' o 'Backspace' para eliminar la imagen seleccionada
        if (event.key === 'Delete' || event.key === 'Backspace') {
            if (selectedImage) {
                // Prevenir el comportamiento por defecto de 'Backspace' en navegadores
                event.preventDefault();
                deleteImageBtn.click(); // Simular clic en el botón de eliminar
            }
        }
    });

    // --- Opcional: Cargar imágenes por defecto al inicio (Si usas imágenes locales) ---
    // Puedes descomentar y modificar esto si quieres que la galería inicie con imágenes
    /*
    const defaultImages = [
        'assets/img/imagen_default_1.jpg',
        'assets/img/imagen_default_2.jpg'
        // Agrega más URLs de imágenes por defecto si tienes
    ];

    defaultImages.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Imagen por defecto';
        img.classList.add('gallery-image');
        img.addEventListener('click', () => selectImage(img));
        galleryContainer.appendChild(img);
    });
    */
});