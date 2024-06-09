function showOptions(overlayId) {
            const overlay = document.getElementById(overlayId);
            overlay.classList.remove('hidden'); // Mostrar el overlay
        }

        function hideOptions(overlayId) {
            const overlay = document.getElementById(overlayId);
            overlay.classList.add('hidden'); // Ocultar el overlay
        }
        document.getElementById('terms-link').addEventListener('click', function (event) {
            event.preventDefault();
            var terms = document.getElementById('terms');
            if (terms.classList.contains('hidden')) {
                terms.classList.remove('hidden');
            } else {
                terms.classList.add('hidden');
            }
        });
        // Función para ocultar la capa de transición y permitir el desplazamiento
        function hideTransition() {
            const transitionLayer = document.querySelector('.fade-out');
            transitionLayer.style.display = 'none';
            document.body.style.overflow = 'auto'; // Permitir desplazamiento
        }

        // Ejecutar la función después de 6 segundos
        setTimeout(hideTransition, 6000);

        // Función para mostrar/ocultar el menú
        function toggleMenu() {
            const sidebar = document.getElementById('sidebar');
            if (sidebar.style.display === 'block') {
                sidebar.style.display = 'none';
            } else {
                sidebar.style.display = 'block';
            }
        }

        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel img');

        function showSlide(index) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        setInterval(() => {
            showSlide(currentSlide + 1);
        }, 3000);
