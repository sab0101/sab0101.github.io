document.addEventListener('DOMContentLoaded', function() {
    // ==================== CONFIGURACIÓN COMPLETA DE TRADUCCIONES ====================
    const translations = {
        'es': {
            // Títulos y textos generales
            'title': 'Consultoría SAB - Consultoría en Recursos Humanos',
            'hero_title': 'Consultoría SAB',
            'hero_subtitle': 'Consultoría en Recursos Humanos',
            'footer_text': '© 2023 Consultoría SAB. Todos los derechos reservados.',

            // Sección Perfil
            'profile_title': 'Sasha Arbe Balarezo',
            'profile_intro': 'Esto es lo que tienes que saber de mí:',
            'profile_items': [
                'Psicóloga profesional con más de 8 años en RR.HH.',
                'Especializada en Desarrollo, Personas y Operaciones.',
                'Sectores de experiencia: farma, retail, consumo masivo, financiero, comercial, infraestructura y consultoría.',
                'Skills: Resolución de problemas, Rápida Adaptabilidad, Pensamiento crítico, Comunicación, Toma de decisiones, Planificación y Gestión.'
            ],

            // Sección Servicios
            'services_title': 'Servicios',
            'services_intro': 'Soy la mano derecha del área de Recursos Humanos:',
            'services_items': [
                'Reclutamiento y Selección',
                'Capacitación y Aprendizaje',
                'Desarrollo Organizacional',
                'Comunicación Interna',
                'Evaluación de Desempeño',
                'Estructura, Diseño y Cambio, y Cultura Organizacional',
                'Análisis y Descripción de puestos',
                'Valoración de puestos',
                'Responsabilidad Social',
                'Clima Organizacional',
                'Bienestar (creación de proyectos)',
                'Programa de incentivos'
            ],

            // Sección Logros
            'achievements_title': 'Logros',
            'achievements_items': [
                {
                    'title': 'Satisfacción de Clima',
                    'description': 'Pasó de 30% al 98% en menos de 1 año'
                },
                {
                    'title': 'GPTW',
                    'description': '5 años reconocidos por los cambios organizacionales'
                },
                {
                    'title': 'Fidelidad',
                    'description': 'Del 23% al 99% de empleados decidían quedarse en la empresa'
                },
                {
                    'title': 'Ahorros',
                    'description': 'Trabajo intentando ahorrar entre el 20% y 40% de la inversión del año pasado'
                }
            ],

            // Sección Galería
            'gallery_title': 'Eventos y Talleres',

            // Sección Contratación
            'hiring_title': 'Contratación',
            'hiring_steps': [
                'Solicitud por parte del cliente',
                'Reunión para la especificación de la solicitud',
                'Presentación de propuesta',
                'Envío de la orden de servicio/adelanto',
                'Planificación, diseño e implementación del servicio'
            ],
            'pricing_title': 'Información de Costos',
            'pricing_items': [
                'Reclutamiento & Selección: El costo es el 10% del salario anual de la posición a buscar. Garantía durante los 3 meses de prueba.',
                'Para los demás servicios, sobre todo Clima, se solicitará un % de adelanto para cubrir costos logísticos.'
            ],

            // Sección Contacto
            'contact_title': 'Contacto'
        },
        'en': {
            // General titles and texts
            'title': 'SAB Consulting - Human Resources Consulting',
            'hero_title': 'SAB Consulting',
            'hero_subtitle': 'Human Resources Consulting',
            'footer_text': '© 2023 SAB Consulting. All rights reserved.',

            // Profile section
            'profile_title': 'Sasha Arbe Balarezo',
            'profile_intro': 'This is what you need to know about me:',
            'profile_items': [
                'Professional psychologist with more than 8 years in HR',
                'Specialized in Development, People and Operations',
                'Experience sectors: pharma, retail, mass consumption, financial, commercial, infrastructure and consulting',
                'Skills: Problem solving, Quick Adaptability, Critical thinking, Communication, Decision making, Planning and Management'
            ],

            // Services section
            'services_title': 'Services',
            'services_intro': "I'm the right hand of the HR department:",
            'services_items': [
                'Recruitment and Selection',
                'Training and Learning',
                'Organizational Development',
                'Internal Communication',
                'Performance Evaluation',
                'Structure, Design and Change, and Organizational Culture',
                'Job Analysis and Description',
                'Job Valuation',
                'Social Responsibility',
                'Organizational Climate',
                'Wellbeing (project creation)',
                'Incentive Programs'
            ],

            // Achievements section
            'achievements_title': 'Achievements',
            'achievements_items': [
                {
                    'title': 'Climate Satisfaction',
                    'description': 'Increased from 30% to 98% in less than 1 year'
                },
                {
                    'title': 'GPTW',
                    'description': '5 years recognized for organizational changes'
                },
                {
                    'title': 'Employee Retention',
                    'description': 'Improved from 23% to 99% of employees decided to stay'
                },
                {
                    'title': 'Savings',
                    'description': 'Working to save between 20% and 40% of last year\'s investment'
                }
            ],

            // Gallery section
            'gallery_title': 'Events and Workshops',

            // Hiring section
            'hiring_title': 'Hiring Process',
            'hiring_steps': [
                'Client request',
                'Meeting to specify the request',
                'Proposal presentation',
                'Service order/advance payment',
                'Service planning, design and implementation'
            ],
            'pricing_title': 'Pricing Information',
            'pricing_items': [
                'Recruitment & Selection: Cost is 10% of the annual salary for the position. Guarantee during the 3-month trial period.',
                'For other services, especially Climate, an advance percentage will be requested to cover logistical costs.'
            ],

            // Contact section
            'contact_title': 'Contact'
        }
    };

    // ==================== FUNCIÓN COMPLETA DE TRADUCCIÓN ====================
    function applyTranslation(lang) {
        // 1. Actualizar título de la página y hero section
        document.title = translations[lang]['title'];
        document.querySelector('.hero h1').textContent = translations[lang]['hero_title'];
        document.querySelector('.hero .subtitle').textContent = translations[lang]['hero_subtitle'];

        // 2. Actualizar sección Perfil
        document.querySelector('#perfil h2').textContent = translations[lang]['profile_title'];
        document.querySelector('#perfil .intro').textContent = translations[lang]['profile_intro'];
        
        const profileList = document.querySelector('#perfil .profile-list');
        profileList.innerHTML = translations[lang]['profile_items'].map(item => `<li>${item}</li>`).join('');

        // 3. Actualizar sección Servicios
        document.querySelector('#servicios h2').textContent = translations[lang]['services_title'];
        document.querySelector('#servicios .section-intro').textContent = translations[lang]['services_intro'];
        
        const servicesContainer = document.querySelector('#servicios .services-grid');
        servicesContainer.innerHTML = translations[lang]['services_items'].map((item, index) => `
            <div class="service-card">
                <i class="${getServiceIcon(index)}"></i>
                <h3>${item}</h3>
            </div>
        `).join('');

        // 4. Actualizar sección Logros
        document.querySelector('#logros h2').textContent = translations[lang]['achievements_title'];
        
        const achievementsContainer = document.querySelector('#logros .achievements-grid');
        achievementsContainer.innerHTML = translations[lang]['achievements_items'].map((item, index) => `
            <div class="achievement-card">
                <div class="achievement-icon">
                    <i class="${getAchievementIcon(index)}"></i>
                </div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');

        // 5. Actualizar sección Galería
        document.querySelector('#galeria h2').textContent = translations[lang]['gallery_title'];

        // 6. Actualizar sección Contratación
        document.querySelector('#contratacion h2').textContent = translations[lang]['hiring_title'];
        
        const hiringSteps = document.querySelector('#contratacion .hiring-steps');
        hiringSteps.innerHTML = translations[lang]['hiring_steps'].map(step => `<li>${step}</li>`).join('');
        
        const pricingInfo = document.querySelector('#contratacion .pricing-info');
        pricingInfo.innerHTML = `
            <h3>${translations[lang]['pricing_title']}</h3>
            ${translations[lang]['pricing_items'].map(item => `<p>${item}</p>`).join('')}
        `;

        // 7. Actualizar sección Contacto
        document.querySelector('#contacto h2').textContent = translations[lang]['contact_title'];

        // 8. Actualizar footer
        document.querySelector('.footer p').textContent = translations[lang]['footer_text'];

        // 9. Guardar preferencia
        localStorage.setItem('preferredLanguage', lang);
    }

    // ==================== FUNCIONES AUXILIARES ====================
    function getServiceIcon(index) {
        const icons = [
            'fas fa-user-tie', 'fas fa-graduation-cap', 'fas fa-chart-line',
            'fas fa-comments', 'fas fa-clipboard-check', 'fas fa-sitemap',
            'fas fa-search', 'fas fa-medal', 'fas fa-hands-helping',
            'fas fa-smile', 'fas fa-lightbulb', 'fas fa-award'
        ];
        return icons[index] || 'fas fa-check';
    }

    function getAchievementIcon(index) {
        const icons = ['fas fa-chart-pie', 'fas fa-trophy', 'fas fa-heart', 'fas fa-piggy-bank'];
        return icons[index] || 'fas fa-star';
    }

    // ==================== CONFIGURAR BOTONES DE IDIOMA ====================
    function setupLanguageButtons() {
        const buttons = document.querySelectorAll('.lang-btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Remover clase active de todos los botones
                buttons.forEach(btn => btn.classList.remove('active'));
                
                // Añadir clase active al botón clickeado
                this.classList.add('active');
                
                // Cambiar idioma
                const lang = this.getAttribute('data-lang');
                applyTranslation(lang);
            });
        });
    }

    // ==================== INICIALIZACIÓN ====================
    function init() {
        // Configurar el selector de idioma
        setupLanguageButtons();
        
        // Cargar idioma preferido o usar español por defecto
        const savedLang = localStorage.getItem('preferredLanguage') || 'es';
        document.querySelector(`.lang-btn[data-lang="${savedLang}"]`).classList.add('active');
        applyTranslation(savedLang);
        
        // Configurar scroll suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Configurar animaciones al hacer scroll
        const animateOnScroll = () => {
            document.querySelectorAll('.service-card, .achievement-card, .gallery-item, .contact-card').forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
            });
        };
        
        // Inicializar animaciones
        document.querySelectorAll('.service-card, .achievement-card, .gallery-item, .contact-card').forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
        });
        
        animateOnScroll();
        window.addEventListener('scroll', animateOnScroll);
        
        // Configurar galería modal
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <span class="close-modal">&times;</span>
            <img class="modal-content" src="" alt="">
            <div class="caption"></div>
        `;
        document.body.appendChild(modal);
        
        document.querySelectorAll('.gallery-item img').forEach(img => {
            img.addEventListener('click', () => {
                modal.style.display = 'block';
                modal.querySelector('.modal-content').src = img.src;
                modal.querySelector('.caption').textContent = img.alt;
            });
        });
        
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
    }

    // Iniciar la aplicación
    init();
});