document.addEventListener('DOMContentLoaded', function() {
    const btnUser = document.getElementById('btn-user');
    const btnCart = document.getElementById('btn-cart');
    const modalUser = document.getElementById('modal-user');
    const modalCart = document.getElementById('modal-cart');
    const closeButtons = document.querySelectorAll('.close-btn');

    if(btnUser) {
        btnUser.addEventListener('click', (e) => {
            e.preventDefault();
            modalUser.style.display = 'flex';
        });
    }

    if(btnCart) {
        btnCart.addEventListener('click', (e) => {
            e.preventDefault();
            modalCart.style.display = 'flex';
        });
    }

    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modalUser.style.display = 'none';
            modalCart.style.display = 'none';
        });
    });

    window.onclick = function(event) {
        if (event.target == modalUser) modalUser.style.display = "none";
        if (event.target == modalCart) modalCart.style.display = "none";
    }

    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach((container) => {
        const slides = container.querySelectorAll('.carousel-slide');
        const prevBtn = container.querySelector('.carousel-btn.prev');
        const nextBtn = container.querySelector('.carousel-btn.next');
        const indicatorsContainer = container.querySelector('.carousel-indicators');
        
        let currentSlide = 0;
        const totalSlides = slides.length;

        if (totalSlides === 0) return;

        function showSlide(index) {
            slides.forEach(slide => {
                slide.style.display = 'none';
                slide.classList.remove('active');
            });
            
            slides[index].style.display = 'block';
            slides[index].classList.add('active');

            if (indicatorsContainer) {
                const dots = indicatorsContainer.querySelectorAll('.indicator');
                dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
            }
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); 
                nextSlide();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                prevSlide();
            });
        }

        if (indicatorsContainer) {
            const dots = indicatorsContainer.querySelectorAll('.indicator');
            dots.forEach((dot, index) => {
                dot.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    currentSlide = index;
                    showSlide(currentSlide);
                });
            });
        }

        showSlide(currentSlide);

        setInterval(nextSlide, 3000); 
    });
});