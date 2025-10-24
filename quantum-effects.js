/**
 * EFECTOS CUÁNTICOS ADICIONALES
 * Efectos de partículas, animaciones y interacciones futuristas
 */

class QuantumEffects {
    constructor() {
        this.isInitialized = false;
        this.isPaused = false;
        this.quantumParticles = [];
        this.intervals = [];
        this.observers = [];
        this.init();
    }

    init() {
        // Añadir estilos primero
        this.addQuantumStyles();
        
        // Inicializar efectos después de que el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeEffects();
            });
        } else {
            this.initializeEffects();
        }
    }

    initializeEffects() {
        this.createQuantumParticles();
        this.initHoverEffects();
        this.initScrollEffects();
        this.initTypingEffect();
        this.initEnergyPulses();
        this.initResponsiveHandling();
        this.isInitialized = true;
    }

    // Crear partículas cuánticas flotantes
    createQuantumParticles() {
        const container = document.getElementById('quantumParticles') || this.createParticleContainer();
        if (!container) return;

        const particleCount = window.innerWidth < 768 ? 30 : 80;
        
        // Limpiar partículas existentes
        this.clearParticles();
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'quantum-particle';
            
            // Posición aleatoria
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Propiedades de animación aleatorias
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (Math.random() * 6 + 4) + 's';
            
            // Tamaño aleatorio
            const size = Math.random() * 3 + 1;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Agregar al contenedor
            container.appendChild(particle);
            this.quantumParticles.push(particle);
        }

        // Actualizar partículas periódicamente
        this.updateQuantumParticles();
    }

    createParticleContainer() {
        const container = document.createElement('div');
        container.id = 'quantumParticles';
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
        `;
        document.body.appendChild(container);
        return container;
    }

    clearParticles() {
        this.quantumParticles.forEach(particle => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        });
        this.quantumParticles = [];
    }

    updateQuantumParticles() {
        if (this.isPaused) return;
        
        const interval = setInterval(() => {
            if (this.isPaused) return;
            
            this.quantumParticles.forEach(particle => {
                // Cambiar posición ocasionalmente para efecto de teletransporte
                if (Math.random() < 0.02) {
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.top = Math.random() * 100 + '%';
                    
                    // Efecto de fade
                    particle.style.opacity = '0';
                    setTimeout(() => {
                        if (particle.style) {
                            particle.style.opacity = '1';
                        }
                    }, 200);
                }
            });
        }, 5000);
        
        this.intervals.push(interval);
    }

    // Efectos de hover mejorados
    initHoverEffects() {
        // Usar timeout para asegurar que los elementos existan
        setTimeout(() => {
            // Efectos para tarjetas de habilidades
            const skillCards = document.querySelectorAll('.skill-card, .skill, .card');
            skillCards.forEach(card => {
                this.addQuantumHover(card);
            });

            // Efectos para tarjetas de proyectos
            const projectCards = document.querySelectorAll('.project-card, .project, .portfolio-item');
            projectCards.forEach(card => {
                this.addQuantumHover(card);
            });

            // Efectos para elementos de contacto
            const contactItems = document.querySelectorAll('.contact-item, .contact-info, .social-link');
            contactItems.forEach(item => {
                this.addQuantumHover(item);
            });

            // Efectos para navegación
            const navLinks = document.querySelectorAll('nav a, .nav-link, header a');
            navLinks.forEach(link => {
                this.addNavQuantumEffect(link);
            });

            // Efectos para botones
            const buttons = document.querySelectorAll('button, .btn, .cta-button');
            buttons.forEach(button => {
                this.addQuantumHover(button);
            });
        }, 100);
    }

    addQuantumHover(element) {
        if (!element || element.hasAttribute('data-quantum-initialized')) return;
        element.setAttribute('data-quantum-initialized', 'true');
        
        let hoverTimeout;
        
        const handleMouseEnter = () => {
            if (this.isPaused) return;
            
            // Crear efecto de ondas expansivas
            this.createRippleEffect(element);
            
            // Añadir clase para efectos CSS
            element.classList.add('quantum-hover');
            
            // Crear partículas de energía
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
                this.createEnergyBurst(element);
            }, 300);
        };

        const handleMouseLeave = () => {
            element.classList.remove('quantum-hover');
            clearTimeout(hoverTimeout);
        };

        const handleMouseMove = (e) => {
            if (this.isPaused) return;
            this.createTrailEffect(e, element);
        };

        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
        element.addEventListener('mousemove', handleMouseMove);
        
        // Guardar referencias para limpieza posterior
        element._quantumHandlers = {
            mouseenter: handleMouseEnter,
            mouseleave: handleMouseLeave,
            mousemove: handleMouseMove
        };
    }

    addNavQuantumEffect(link) {
        if (!link || link.hasAttribute('data-nav-quantum-initialized')) return;
        link.setAttribute('data-nav-quantum-initialized', 'true');
        
        const handleMouseEnter = () => {
            if (this.isPaused) return;
            // Efecto de escaneo de datos
            this.createScanEffect(link);
        };

        const handleClick = (e) => {
            if (this.isPaused) return;
            // Efecto de teletransporte
            this.createTeleportEffect(e.target);
        };

        link.addEventListener('mouseenter', handleMouseEnter);
        link.addEventListener('click', handleClick);
        
        // Guardar referencias
        link._quantumNavHandlers = {
            mouseenter: handleMouseEnter,
            click: handleClick
        };
    }

    createRippleEffect(element) {
        const ripple = document.createElement('div');
        ripple.className = 'quantum-ripple';
        
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: ${size}px;
            height: ${size}px;
            border: 2px solid rgba(0, 255, 255, 0.6);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            pointer-events: none;
            z-index: 10;
            animation: quantumRipple 1s ease-out;
        `;
        
        const originalPosition = element.style.position;
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        // Remover después de la animación
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
                if (originalPosition === '') {
                    element.style.position = '';
                }
            }
        }, 1000);
    }

    createEnergyBurst(element) {
        const burstCount = 6;
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < burstCount; i++) {
            const energy = document.createElement('div');
            energy.className = 'energy-burst';
            
            const angle = (i * 60) * (Math.PI / 180);
            const distance = 50 + Math.random() * 30;
            
            energy.style.cssText = `
                position: fixed;
                left: ${centerX}px;
                top: ${centerY}px;
                width: 3px;
                height: 3px;
                background: ${i % 2 === 0 ? '#00ffff' : '#ff00ff'};
                border-radius: 50%;
                box-shadow: 0 0 10px currentColor;
                pointer-events: none;
                z-index: 1000;
                animation: energyBurst 1.5s ease-out forwards;
                --dx: ${Math.cos(angle) * distance}px;
                --dy: ${Math.sin(angle) * distance}px;
            `;
            
            document.body.appendChild(energy);
            
            // Remover después de la animación
            setTimeout(() => {
                if (energy.parentNode) {
                    energy.parentNode.removeChild(energy);
                }
            }, 1500);
        }
    }

    createTrailEffect(event, element) {
        if (Math.random() > 0.3) return; // Limitar frecuencia
        
        const trail = document.createElement('div');
        trail.className = 'mouse-trail';
        
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        trail.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            pointer-events: none;
            z-index: 5;
            animation: trailFade 1s ease-out forwards;
        `;
        
        const originalPosition = element.style.position;
        element.style.position = 'relative';
        element.appendChild(trail);
        
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
                if (originalPosition === '') {
                    element.style.position = '';
                }
            }
        }, 1000);
    }

    createScanEffect(element) {
        const scanner = document.createElement('div');
        scanner.className = 'quantum-scanner';
        
        scanner.style.cssText = `
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
                transparent, 
                rgba(0, 255, 255, 0.3), 
                rgba(255, 0, 255, 0.3), 
                transparent
            );
            pointer-events: none;
            z-index: 5;
            animation: quantumScan 0.8s ease-out;
        `;
        
        const originalPosition = element.style.position;
        const originalOverflow = element.style.overflow;
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(scanner);
        
        setTimeout(() => {
            if (scanner.parentNode) {
                scanner.parentNode.removeChild(scanner);
                if (originalPosition === '') {
                    element.style.position = '';
                }
                if (originalOverflow === '') {
                    element.style.overflow = '';
                }
            }
        }, 800);
    }

    createTeleportEffect(element) {
        // Efecto de disolución
        const original = element.style.opacity || '1';
        const originalTransition = element.style.transition;
        element.style.transition = 'opacity 0.3s ease';
        element.style.opacity = '0';
        
        // Crear efecto de partículas de teletransporte
        const rect = element.getBoundingClientRect();
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                left: ${rect.left + Math.random() * rect.width}px;
                top: ${rect.top + Math.random() * rect.height}px;
                width: 2px;
                height: 2px;
                background: #00ffff;
                border-radius: 50%;
                box-shadow: 0 0 6px #00ffff;
                pointer-events: none;
                z-index: 1000;
                animation: teleportParticle 1s ease-out forwards;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 1000);
        }
        
        // Restaurar elemento
        setTimeout(() => {
            element.style.opacity = original;
            element.style.transition = originalTransition;
        }, 300);
    }

    // Efectos de scroll mejorados
    initScrollEffects() {
        const observerOptions = {
            threshold: [0, 0.25, 0.5, 0.75, 1],
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (this.isPaused) return;
                
                const ratio = entry.intersectionRatio;
                
                if (entry.isIntersecting && ratio > 0.1) {
                    entry.target.classList.add('visible');
                    
                    // Efecto de materialización progresiva
                    entry.target.style.setProperty('--visibility-ratio', ratio);
                    
                    // Crear efecto de escaneo al aparecer
                    if (ratio > 0.5 && !entry.target.hasAttribute('data-scanned')) {
                        this.createSectionScanEffect(entry.target);
                        entry.target.setAttribute('data-scanned', 'true');
                    }
                }
            });
        }, observerOptions);

        // Buscar elementos con diferentes selectores comunes
        const selectors = ['.fade-in', '.animate', '.scroll-animate', 'section', '.section'];
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                observer.observe(element);
            });
        });

        this.observers.push(observer);
    }

    createSectionScanEffect(section) {
        const scanLine = document.createElement('div');
        scanLine.className = 'section-scan';
        
        scanLine.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, 
                transparent, 
                #00ffff, 
                #ff00ff, 
                #00ffff, 
                transparent
            );
            z-index: 10;
            animation: sectionScan 2s ease-out;
        `;
        
        const originalPosition = section.style.position;
        section.style.position = 'relative';
        section.appendChild(scanLine);
        
        setTimeout(() => {
            if (scanLine.parentNode) {
                scanLine.parentNode.removeChild(scanLine);
                if (originalPosition === '') {
                    section.style.position = '';
                }
            }
        }, 2000);
    }

    // Efecto de escritura cuántica
    initTypingEffect() {
        // Buscar título principal con diferentes selectores
        const selectors = ['.hero-content h1', 'h1.main-title', '.hero h1', '.intro h1', 'h1'];
        let heroTitle = null;
        
        for (const selector of selectors) {
            heroTitle = document.querySelector(selector);
            if (heroTitle) break;
        }
        
        if (!heroTitle || window.innerWidth < 768) return; // Desactivar en móviles
        
        const originalText = heroTitle.textContent;
        if (!originalText || originalText.length === 0) return;
        
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid #00ffff';
        
        let i = 0;
        const typingInterval = setInterval(() => {
            if (this.isPaused) return;
            
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                
                // Crear efecto de chispas al escribir
                if (Math.random() > 0.7) {
                    this.createTypingSpark(heroTitle);
                }
                
                i++;
            } else {
                clearInterval(typingInterval);
                heroTitle.style.borderRight = 'none';
            }
        }, 80 + Math.random() * 40); // Velocidad variable
        
        this.intervals.push(typingInterval);
    }

    createTypingSpark(element) {
        const spark = document.createElement('span');
        spark.style.cssText = `
            position: absolute;
            right: -10px;
            top: 50%;
            width: 4px;
            height: 4px;
            background: #00ffff;
            border-radius: 50%;
            box-shadow: 0 0 10px #00ffff;
            animation: sparkFade 0.5s ease-out forwards;
        `;
        
        const originalPosition = element.style.position;
        element.style.position = 'relative';
        element.appendChild(spark);
        
        setTimeout(() => {
            if (spark.parentNode) {
                spark.parentNode.removeChild(spark);
                if (originalPosition === '') {
                    element.style.position = '';
                }
            }
        }, 500);
    }

    // Pulsos de energía periódicos
    initEnergyPulses() {
        const interval = setInterval(() => {
            if (this.isPaused) return;
            this.createRandomEnergyPulse();
        }, 8000 + Math.random() * 5000);
        
        this.intervals.push(interval);
    }

    createRandomEnergyPulse() {
        const pulse = document.createElement('div');
        pulse.className = 'random-energy-pulse';
        
        pulse.style.cssText = `
            position: fixed;
            left: ${Math.random() * window.innerWidth}px;
            top: ${Math.random() * window.innerHeight}px;
            width: 100px;
            height: 100px;
            border: 2px solid rgba(0, 255, 255, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: energyPulseExpand 3s ease-out forwards;
        `;
        
        document.body.appendChild(pulse);
        
        setTimeout(() => {
            if (pulse.parentNode) {
                pulse.parentNode.removeChild(pulse);
            }
        }, 3000);
    }

    // Manejo responsivo
    initResponsiveHandling() {
        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (window.innerWidth < 768) {
                    this.pause();
                } else {
                    this.resume();
                    // Recrear partículas con nuevo tamaño
                    this.createQuantumParticles();
                }
            }, 250);
        };

        window.addEventListener('resize', handleResize);
        
        // Pausar efectos en dispositivos móviles por performance
        if (window.innerWidth < 768) {
            this.pause();
        }
    }

    // Añadir estilos de animación dinámicamente
    addQuantumStyles() {
        // Evitar duplicar estilos
        if (document.getElementById('quantum-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'quantum-styles';
        style.textContent = `
            .quantum-particle {
                position: absolute;
                background: radial-gradient(circle, #00ffff, transparent);
                border-radius: 50%;
                opacity: 0.7;
                animation: quantumFloat 6s infinite ease-in-out;
                pointer-events: none;
            }

            @keyframes quantumFloat {
                0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
                25% { transform: translateY(-20px) rotate(90deg); opacity: 0.8; }
                50% { transform: translateY(-10px) rotate(180deg); opacity: 0.6; }
                75% { transform: translateY(-30px) rotate(270deg); opacity: 0.9; }
            }
            
            @keyframes quantumRipple {
                0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
            }
            
            @keyframes energyBurst {
                0% { transform: translate(0, 0) scale(1); opacity: 1; }
                100% { transform: translate(var(--dx), var(--dy)) scale(0); opacity: 0; }
            }
            
            @keyframes trailFade {
                0% { opacity: 1; transform: scale(1); }
                100% { opacity: 0; transform: scale(0); }
            }
            
            @keyframes quantumScan {
                0% { left: -100%; }
                100% { left: 100%; }
            }
            
            @keyframes teleportParticle {
                0% { opacity: 1; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.5); }
                100% { opacity: 0; transform: scale(0) translateY(-50px); }
            }
            
            @keyframes sectionScan {
                0% { transform: translateX(-100%); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: translateX(100%); opacity: 0; }
            }
            
            @keyframes sparkFade {
                0% { opacity: 1; transform: translateY(-50%) scale(1); }
                100% { opacity: 0; transform: translateY(-70%) scale(0); }
            }
            
            @keyframes energyPulseExpand {
                0% { transform: scale(0); opacity: 0.8; }
                50% { opacity: 1; }
                100% { transform: scale(5); opacity: 0; }
            }
            
            .quantum-hover {
                transform: translateY(-10px) scale(1.02) !important;
                box-shadow: 0 20px 40px rgba(0, 255, 255, 0.3) !important;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            }

            .visible {
                opacity: 1;
                transform: translateY(0);
                transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            }

            /* Efectos para dispositivos móviles más ligeros */
            @media (max-width: 768px) {
                .quantum-particle {
                    animation-duration: 8s;
                }
                
                .quantum-hover {
                    transform: scale(1.01) !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Métodos de control
    pause() {
        this.isPaused = true;
        // Pausar partículas
        this.quantumParticles.forEach(particle => {
            particle.style.animationPlayState = 'paused';
        });
    }

    resume() {
        this.isPaused = false;
        // Reanudar partículas
        this.quantumParticles.forEach(particle => {
            particle.style.animationPlayState = 'running';
        });
    }

    destroy() {
        // Limpiar intervalos
        this.intervals.forEach(interval => clearInterval(interval));
        this.intervals = [];

        // Limpiar observadores
        this.observers.forEach(observer => observer.disconnect());
        this.observers = [];

        // Limpiar efectos
        this.quantumParticles.forEach(particle => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        });
        this.quantumParticles = [];

        // Remover event listeners
        document.querySelectorAll('[data-quantum-initialized]').forEach(element => {
            if (element._quantumHandlers) {
                Object.entries(element._quantumHandlers).forEach(([event, handler]) => {
                    element.removeEventListener(event, handler);
                });
                delete element._quantumHandlers;
            }
            element.removeAttribute('data-quantum-initialized');
        });

        document.querySelectorAll('[data-nav-quantum-initialized]').forEach(element => {
            if (element._quantumNavHandlers) {
                Object.entries(element._quantumNavHandlers).forEach(([event, handler]) => {
                    element.removeEventListener(event, handler);
                });
                delete element._quantumNavHandlers;
            }
            element.removeAttribute('data-nav-quantum-initialized');
        });

        // Remover contenedor de partículas
        const container = document.getElementById('quantumParticles');
        if (container && container.parentNode) {
            container.parentNode.removeChild(container);
        }

        // Remover estilos
        const styles = document.getElementById('quantum-styles');
        if (styles && styles.parentNode) {
            styles.parentNode.removeChild(styles);
        }

        this.isInitialized = false;
    }

    // Método para reinicializar
    reinitialize() {
        this.destroy();
        setTimeout(() => {
            this.init();
        }, 100);
    }
}

// Inicializar efectos cuánticos cuando esté disponible
let quantumEffects;

// Auto-inicialización
(function() {
    function initQuantumEffects() {
        if (quantumEffects) {
            quantumEffects.destroy();
        }
        quantumEffects = new QuantumEffects();
    }

    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initQuantumEffects);
    } else {
        initQuantumEffects();
    }

    // Limpiar al descargar la página
    window.addEventListener('beforeunload', () => {
        if (quantumEffects) {
            quantumEffects.destroy();
        }
    });
})();

// Exponer globalmente para uso externo
window.QuantumEffects = QuantumEffects;
window.quantumEffects = quantumEffects;