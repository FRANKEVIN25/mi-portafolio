/**
 * EFECTOS CUÁNTICOS - Sistema de partículas y animaciones avanzadas
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
        this.addQuantumStyles();
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeEffects();
            });
        } else {
            this.initializeEffects();
        }
    }

    initializeEffects() {
        // Desactivar en móviles para mejor performance
        if (window.innerWidth >= 768) {
            this.createQuantumParticles();
            this.initEnergyPulses();
        }
        
        this.initHoverEffects();
        this.initScrollEffects();
        this.initResponsiveHandling();
        this.isInitialized = true;
    }

    // ===== PARTÍCULAS CUÁNTICAS =====
    createQuantumParticles() {
        const container = document.getElementById('quantumParticles') || this.createParticleContainer();
        if (!container) return;

        const particleCount = 60;
        this.clearParticles();
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'quantum-particle';
            
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (Math.random() * 6 + 4) + 's';
            
            const size = Math.random() * 3 + 1;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            container.appendChild(particle);
            this.quantumParticles.push(particle);
        }

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
                if (Math.random() < 0.02) {
                    particle.style.left = Math.random() * 100 + '%';
                    particle.style.top = Math.random() * 100 + '%';
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

    // ===== EFECTOS HOVER =====
    initHoverEffects() {
        setTimeout(() => {
            const elements = document.querySelectorAll('.skill-card, .project-card, .contact-item');
            elements.forEach(element => {
                this.addQuantumHover(element);
            });
        }, 100);
    }

    addQuantumHover(element) {
        if (!element || element.hasAttribute('data-quantum-initialized')) return;
        element.setAttribute('data-quantum-initialized', 'true');
        
        const handleMouseEnter = () => {
            if (this.isPaused) return;
            element.classList.add('quantum-hover');
            this.createRippleEffect(element);
        };

        const handleMouseLeave = () => {
            element.classList.remove('quantum-hover');
        };

        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
        
        element._quantumHandlers = {
            mouseenter: handleMouseEnter,
            mouseleave: handleMouseLeave
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
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
                if (originalPosition === '') {
                    element.style.position = '';
                }
            }
        }, 1000);
    }

    // ===== EFECTOS DE SCROLL =====
    initScrollEffects() {
        const observerOptions = {
            threshold: [0, 0.25, 0.5, 0.75, 1],
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (this.isPaused) return;
                
                if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in, section').forEach(element => {
            observer.observe(element);
        });

        this.observers.push(observer);
    }

    // ===== PULSOS DE ENERGÍA =====
    initEnergyPulses() {
        const interval = setInterval(() => {
            if (this.isPaused) return;
            this.createRandomEnergyPulse();
        }, 10000);
        
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

    // ===== MANEJO RESPONSIVE =====
    initResponsiveHandling() {
        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (window.innerWidth < 768) {
                    this.pause();
                } else {
                    this.resume();
                    this.createQuantumParticles();
                }
            }, 250);
        };

        window.addEventListener('resize', handleResize);
        
        if (window.innerWidth < 768) {
            this.pause();
        }
    }

    // ===== ESTILOS CSS =====
    addQuantumStyles() {
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

    // ===== CONTROL =====
    pause() {
        this.isPaused = true;
        this.quantumParticles.forEach(particle => {
            particle.style.animationPlayState = 'paused';
        });
    }

    resume() {
        this.isPaused = false;
        this.quantumParticles.forEach(particle => {
            particle.style.animationPlayState = 'running';
        });
    }

    destroy() {
        this.intervals.forEach(interval => clearInterval(interval));
        this.intervals = [];

        this.observers.forEach(observer => observer.disconnect());
        this.observers = [];

        this.clearParticles();

        document.querySelectorAll('[data-quantum-initialized]').forEach(element => {
            if (element._quantumHandlers) {
                Object.entries(element._quantumHandlers).forEach(([event, handler]) => {
                    element.removeEventListener(event, handler);
                });
                delete element._quantumHandlers;
            }
            element.removeAttribute('data-quantum-initialized');
        });

        const container = document.getElementById('quantumParticles');
        if (container && container.parentNode) {
            container.parentNode.removeChild(container);
        }

        const styles = document.getElementById('quantum-styles');
        if (styles && styles.parentNode) {
            styles.parentNode.removeChild(styles);
        }

        this.isInitialized = false;
    }
}

// ===== INICIALIZACIÓN AUTOMÁTICA =====
let quantumEffects;

(function() {
    function initQuantumEffects() {
        if (quantumEffects) {
            quantumEffects.destroy();
        }
        quantumEffects = new QuantumEffects();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initQuantumEffects);
    } else {
        initQuantumEffects();
    }

    window.addEventListener('beforeunload', () => {
        if (quantumEffects) {
            quantumEffects.destroy();
        }
    });
})();

window.QuantumEffects = QuantumEffects;
window.quantumEffects = quantumEffects;