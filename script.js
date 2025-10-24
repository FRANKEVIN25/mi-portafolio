// ===== FUNCIONES PRINCIPALES =====

/**
 * Crear partículas animadas de fondo
 */
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

/**
 * Configurar scroll suave para la navegación
 */
function smoothScroll() {
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Manejar animaciones al hacer scroll
 */
function handleScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observar todos los elementos con clase fade-in
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}

/**
 * Efecto de auto-ocultación de la barra de navegación
 */
function handleNavbarEffect() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling hacia abajo - ocultar navbar
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling hacia arriba - mostrar navbar
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

/**
 * Crear efecto de cursor personalizado
 */
function initCustomCursor() {
    document.addEventListener('mousemove', (e) => {
        const cursor = document.createElement('div');
        cursor.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            width: 4px;
            height: 4px;
            background: rgba(0, 255, 255, 0.8);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: cursorFade 1s ease-out forwards;
        `;
        
        document.body.appendChild(cursor);
        
        // Remover el elemento después de la animación
        setTimeout(() => {
            cursor.remove();
        }, 1000);
    });
}

/**
 * Añadir estilos dinámicos para el cursor
 */
function addCursorStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes cursorFade {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0);
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Efecto de typing en el título principal (opcional)
 */
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-content h1');
    if (!heroTitle) return;
    
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 100);
}

/**
 * Añadir efectos hover mejorados a las tarjetas
 */
function enhanceCardEffects() {
    const cards = document.querySelectorAll('.skill-card, .project-card, .contact-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

/**
 * Efecto de paralaje suave en elementos
 */
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-content');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

/**
 * Preloader simple
 */
function initPreloader() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Añadir estilos para el preloader si es necesario
        const style = document.createElement('style');
        style.textContent = `
            body:not(.loaded) {
                overflow: hidden;
            }
            
            body:not(.loaded)::before {
                content: '';
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #0a0a0a;
                z-index: 9999;
                animation: fadeOut 0.5s ease-out 0.5s forwards;
            }
            
            @keyframes fadeOut {
                to {
                    opacity: 0;
                    visibility: hidden;
                }
            }
        `;
        document.head.appendChild(style);
    });
}

// ===== INICIALIZACIÓN =====

/**
 * Inicializar todas las funcionalidades cuando el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', () => {
    // Funciones principales
    createParticles();
    smoothScroll();
    handleScrollAnimations();
    handleNavbarEffect();
    
    // Efectos visuales
    initCustomCursor();
    addCursorStyles();
    enhanceCardEffects();
    
    // Efectos opcionales (descomenta si los quieres usar)
    // initTypingEffect();
    // initParallaxEffect();
    // initPreloader();
    
    console.log('🚀 Portafolio cargado exitosamente!');
});

// ===== FUNCIONES UTILITARIAS =====

/**
 * Función para cambiar tema (por si quieres añadir un toggle)
 */
function toggleTheme() {
    document.body.classList.toggle('light-theme');
}

/**
 * Función para detectar si el usuario prefiere movimiento reducido
 */
function respectMotionPreference() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Desactivar animaciones complejas
        document.body.classList.add('reduced-motion');
        
        const style = document.createElement('style');
        style.textContent = `
            .reduced-motion * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Respetar preferencias de accesibilidad
respectMotionPreference();

