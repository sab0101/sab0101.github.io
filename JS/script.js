document.addEventListener('DOMContentLoaded', function() {
    // ==================== CONFIGURACIÓN COMPLETA DE TRADUCCIONES ====================
    const translations = {
        'es': {
            // Títulos y textos generales
            'title': 'Consultoría SAB - Especialistas en Recursos Humanos',
            'hero_title': 'Consultoría SAB',
            'hero_subtitle': 'Transformando la Gestión de Talento',
            'hero_description': 'Soluciones innovadoras en Recursos Humanos para potenciar tu organización',
            'footer_text': '© 2023 Consultoría SAB. Todos los derechos reservados.',
            'footer_tagline': 'Especialistas en Transformación de Recursos Humanos',
            'footer_links_title': 'Enlaces Rápidos',
            'footer_legal_title': 'Legal',
            'footer_rights': 'Todos los derechos reservados.',
            'footer_specialization': 'Consultoría especializada en Recursos Humanos',

            // Navegación
            'nav_profile': 'Perfil',
            'nav_services': 'Servicios',
            'nav_achievements': 'Logros',
            'nav_process': 'Proceso',
            'nav_gallery': 'Galería',
            'nav_contact': 'Contacto',

            // Sección Perfil
            'profile_title': 'Perfil Profesional',
            'profile_subtitle': 'Conóceme',
            'profile_name': 'Sasha Arbe Balarezo',
            'profile_intro': 'Esto es lo que tienes que saber de mí:',
            'profile_item_1': 'Psicóloga profesional con más de 9 años en RR.HH.',
            'profile_item_2': 'Especializada en Desarrollo, Personas y Operaciones.',
            'profile_item_3': 'Sectores de experiencia: farma, ONG, retail, consumo masivo, financiero, comercial, infraestructura y consultoría.',
            'profile_item_4': 'Skills: Resolución de problemas, Rápida Adaptabilidad, Pensamiento crítico, Comunicación, Toma de decisiones, Planificación y Gestión.',
            'profile_badge': 'Especialista en RH',
            'stat_experience': 'Años de Experiencia',
            'stat_projects': 'Proyectos Completados',
            'stat_sectors': 'Sectores Atendidos',

            // Sección Servicios
            'services_title': 'Servicios Especializados',
            'services_subtitle': 'Seré tu mano derecha en el área',
            'service_1_title': 'Reclutamiento y Selección',
            'service_1_desc': 'Encuentra al talento ideal para tu organización con nuestro proceso de selección especializado.',
            'service_2_title': 'Capacitación y Aprendizaje',
            'service_2_desc': 'Programas de desarrollo continuo para potenciar las habilidades de tu equipo.',
            'service_3_title': 'Desarrollo Organizacional',
            'service_3_desc': 'Transformamos la estructura de tu organización para maximizar su potencial.',
            'service_4_title': 'Comunicación Interna',
            'service_4_desc': 'Estrategias efectivas para mejorar la comunicación dentro de tu empresa.',
            'service_5_title': 'Evaluación de Desempeño',
            'service_5_desc': 'Sistemas modernos de evaluación para medir y mejorar el rendimiento.',
            'service_6_title': 'Cultura Organizacional',
            'service_6_desc': 'Desarrollamos y fortalecemos la cultura de tu empresa.',
            'services_cta': '¿Necesitas un servicio personalizado?',
            'services_button': 'Contactar Ahora',

            // Sección Logros
            'achievements_title': 'Logros Destacados',
            'achievements_subtitle': 'Resultados tangibles que demuestran nuestro expertise',
            'achievement_1_title': 'Satisfacción de Clima',
            'achievement_1_desc': 'Pasó de 30% al 98% en menos de 1 año',
            'achievement_2_title': 'Reconocimiento GPTW',
            'achievement_2_desc': '5 años consecutivos como Great Place to Work',
            'achievement_2_badge': 'Reconocimiento Internacional',
            'achievement_3_title': 'Retención de Talento',
            'achievement_3_desc': 'Del 23% al 99% de empleados decidían quedarse en la empresa',
            'achievement_4_title': 'Optimización de Costos',
            'achievement_4_desc': 'Ahorros promedio del 35% en proyectos de consultoría',
            'achievement_4_stat': '+35% promedio',

            // Sección Contratación
            'hiring_title': 'Proceso de Contratación',
            'hiring_subtitle': 'Cómo trabajamos para garantizar tu éxito',
            'process_step_1_title': 'Solicitud del Cliente',
            'process_step_1_desc': 'Nos cuentas tus necesidades y objetivos específicos',
            'process_step_2_title': 'Reunión de Especificación',
            'process_step_2_desc': 'Analizamos detalladamente los requerimientos del proyecto',
            'process_step_3_title': 'Presentación de Propuesta',
            'process_step_3_desc': 'Elaboramos una solución personalizada con alcance y costos',
            'process_step_4_title': 'Confirmación del Servicio',
            'process_step_4_desc': 'Firmamos el acuerdo y comenzamos la planificación',
            'process_step_5_title': 'Implementación',
            'process_step_5_desc': 'Ejecutamos el proyecto con seguimiento continuo',
            'pricing_title': 'Información de Costos',
            'pricing_recruitment': 'Reclutamiento & Selección',
            'pricing_consulting': 'Consultoría Especializada',
            'pricing_price': 'Personalizado',
            'pricing_item_1': 'Garantía durante 3 meses',
            'pricing_item_2': 'Proceso completo de selección',
            'pricing_item_3': 'Entrega de informes detallados',
            'pricing_item_4': 'Análisis inicial sin costo',
            'pricing_item_5': 'Propuesta detallada',
            'pricing_item_6': 'Seguimiento post-implementación',

            // Sección Galería
            'gallery_title': 'Nuestros Proyectos',
            'gallery_subtitle': 'Experiencia tangible en acción',
            'gallery_item_1_title': 'Kit cumpleañero',
            'gallery_item_1_category': 'Cultura',
            'gallery_item_2_title': 'Diseño por Día de la Mujer',
            'gallery_item_2_category': 'Comunicación Interna',
            'gallery_item_3_title': 'Actividad por día del niño',
            'gallery_item_3_category': 'Responsabilidad Social - Interna',
            'gallery_item_4_title': 'Aniversario',
            'gallery_item_4_category': 'Cultura',
            'gallery_item_5_title': 'Olimpiadas',
            'gallery_item_5_category': 'Cultura',
            'gallery_item_6_title': 'Feria Laboral',
            'gallery_item_6_category': 'Selección y Reclutamiento',

            // Sección Contacto
            'contact_title': 'Contacto Directo',
            'contact_subtitle': 'Estamos listos para transformar tu gestión de talento',
            'contact_heading': 'Hablemos de tu proyecto',
            'contact_description': 'Contáctanos para conocer cómo podemos ayudarte a alcanzar tus objetivos en Recursos Humanos.',
            'contact_whatsapp_latam': 'WhatsApp LATAM',
            'contact_whatsapp_eu': 'WhatsApp Europa',
            'contact_whatsapp_action': 'Escribir por WhatsApp',
            'contact_email': 'Email Directo',
            'contact_email_action': 'Enviar Email'
        },
        'en': {
            // General titles and texts
            'title': 'SAB Consulting - Human Resources Specialists',
            'hero_title': 'SAB Consulting',
            'hero_subtitle': 'Transforming Talent Management',
            'hero_description': 'Innovative Human Resources solutions to empower your organization',
            'footer_text': '© 2023 SAB Consulting. All rights reserved.',
            'footer_tagline': 'Specialists in Human Resources Transformation',
            'footer_links_title': 'Quick Links',
            'footer_legal_title': 'Legal',
            'footer_rights': 'All rights reserved.',
            'footer_specialization': 'Specialized HR Consulting',

            // Navigation
            'nav_profile': 'Profile',
            'nav_services': 'Services',
            'nav_achievements': 'Achievements',
            'nav_process': 'Process',
            'nav_gallery': 'Gallery',
            'nav_contact': 'Contact',

            // Profile section
            'profile_title': 'Professional Profile',
            'profile_subtitle': 'Get to know me',
            'profile_name': 'Sasha Arbe Balarezo',
            'profile_intro': 'This is what you need to know about me:',
            'profile_item_1': 'Professional psychologist with more than 9 years in HR',
            'profile_item_2': 'Specialized in Development, People and Operations',
            'profile_item_3': 'Experience sectors: pharma, NGO, retail, mass consumption, financial, commercial, infrastructure and consulting',
            'profile_item_4': 'Skills: Problem solving, Quick Adaptability, Critical thinking, Communication, Decision making, Planning and Management',
            'profile_badge': 'HR Specialist',
            'stat_experience': 'Years of Experience',
            'stat_projects': 'Completed Projects',
            'stat_sectors': 'Sectors Served',

            // Services section
            'services_title': 'Specialized Services',
            'services_subtitle': "I'll be your right hand in the HR area",
            'service_1_title': 'Recruitment and Selection',
            'service_1_desc': 'Find the ideal talent for your organization with our specialized selection process.',
            'service_2_title': 'Training and Learning',
            'service_2_desc': 'Continuous development programs to enhance your team\'s skills.',
            'service_3_title': 'Organizational Development',
            'service_3_desc': 'We transform your organization\'s structure to maximize its potential.',
            'service_4_title': 'Internal Communication',
            'service_4_desc': 'Effective strategies to improve communication within your company.',
            'service_5_title': 'Performance Evaluation',
            'service_5_desc': 'Modern evaluation systems to measure and improve performance.',
            'service_6_title': 'Organizational Culture',
            'service_6_desc': 'We develop and strengthen your company\'s culture.',
            'services_cta': 'Need a personalized service?',
            'services_button': 'Contact Now',

            // Achievements section
            'achievements_title': 'Featured Achievements',
            'achievements_subtitle': 'Tangible results that demonstrate our expertise',
            'achievement_1_title': 'Climate Satisfaction',
            'achievement_1_desc': 'Increased from 30% to 98% in less than 1 year',
            'achievement_2_title': 'GPTW Recognition',
            'achievement_2_desc': '5 consecutive years as Great Place to Work',
            'achievement_2_badge': 'International Recognition',
            'achievement_3_title': 'Talent Retention',
            'achievement_3_desc': 'Improved from 23% to 99% of employees decided to stay',
            'achievement_4_title': 'Cost Optimization',
            'achievement_4_desc': 'Average savings of 35% on consulting projects',
            'achievement_4_stat': '+35% average',

            // Hiring section
            'hiring_title': 'Hiring Process',
            'hiring_subtitle': 'How we work to ensure your success',
            'process_step_1_title': 'Client Request',
            'process_step_1_desc': 'You tell us your specific needs and objectives',
            'process_step_2_title': 'Specification Meeting',
            'process_step_2_desc': 'We analyze the project requirements in detail',
            'process_step_3_title': 'Proposal Presentation',
            'process_step_3_desc': 'We develop a personalized solution with scope and costs',
            'process_step_4_title': 'Service Confirmation',
            'process_step_4_desc': 'We sign the agreement and begin planning',
            'process_step_5_title': 'Implementation',
            'process_step_5_desc': 'We execute the project with continuous follow-up',
            'pricing_title': 'Pricing Information',
            'pricing_recruitment': 'Recruitment & Selection',
            'pricing_consulting': 'Specialized Consulting',
            'pricing_price': 'Personalized',
            'pricing_item_1': '3-month guarantee',
            'pricing_item_2': 'Complete selection process',
            'pricing_item_3': 'Detailed reports delivery',
            'pricing_item_4': 'Initial analysis at no cost',
            'pricing_item_5': 'Detailed proposal',
            'pricing_item_6': 'Post-implementation follow-up',

            // Gallery section
            'gallery_title': 'Our Projects',
            'gallery_subtitle': 'Tangible experience in action',
            'gallery_item_1_title': 'Birthday Kit',
            'gallery_item_1_category': 'Culture',
            'gallery_item_2_title': 'Women\'s Day Design',
            'gallery_item_2_category': 'Internal Communication',
            'gallery_item_3_title': 'Children\'s Day Activity',
            'gallery_item_3_category': 'Internal Social Responsibility',
            'gallery_item_4_title': 'Anniversary',
            'gallery_item_4_category': 'Culture',
            'gallery_item_5_title': 'Olympics',
            'gallery_item_5_category': 'Culture',
            'gallery_item_6_title': 'Job Fair',
            'gallery_item_6_category': 'Selection and Recruitment',

            // Contact section
            'contact_title': 'Direct Contact',
            'contact_subtitle': 'We are ready to transform your talent management',
            'contact_heading': 'Let\'s talk about your project',
            'contact_description': 'Contact us to learn how we can help you achieve your HR objectives.',
            'contact_whatsapp_latam': 'WhatsApp LATAM',
            'contact_whatsapp_eu': 'WhatsApp Europe',
            'contact_whatsapp_action': 'Write via WhatsApp',
            'contact_email': 'Direct Email',
            'contact_email_action': 'Send Email'
        }
    };

    // ==================== FUNCIÓN COMPLETA DE TRADUCCIÓN ====================
    function applyTranslation(lang) {
        const t = translations[lang];
        
        // Actualizar título de la página
        document.title = t['title'];
        
        // Actualizar todos los elementos con atributo data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (t[key]) {
                element.textContent = t[key];
            }
        });

        // Actualizar elementos especiales (placeholders, alt texts, etc.)
        const galleryImages = document.querySelectorAll('.gallery-img');
        if (galleryImages.length > 0) {
            galleryImages[0].alt = t['gallery_item_1_title'] + ' - ' + t['gallery_item_1_category'];
            galleryImages[1].alt = t['gallery_item_2_title'] + ' - ' + t['gallery_item_2_category'];
            galleryImages[2].alt = t['gallery_item_3_title'] + ' - ' + t['gallery_item_3_category'];
            galleryImages[3].alt = t['gallery_item_4_title'] + ' - ' + t['gallery_item_4_category'];
            galleryImages[4].alt = t['gallery_item_5_title'] + ' - ' + t['gallery_item_5_category'];
            galleryImages[5].alt = t['gallery_item_6_title'] + ' - ' + t['gallery_item_6_category'];
        }

        // Guardar preferencia
        localStorage.setItem('preferredLanguage', lang);
        
        // Ajustar el diseño después de la traducción
        setTimeout(adjustLayoutAfterTranslation, 100);
    }

    // ==================== AJUSTES DE DISEÑO DESPUÉS DE TRADUCCIÓN ====================
    function adjustLayoutAfterTranslation() {
        // Ajustar alturas de tarjetas en la sección de servicios
        const serviceCards = document.querySelectorAll('.service-card');
        let maxHeight = 0;
        
        serviceCards.forEach(card => {
            card.style.height = 'auto';
        });
        
        serviceCards.forEach(card => {
            if (card.offsetHeight > maxHeight) {
                maxHeight = card.offsetHeight;
            }
        });
        
        serviceCards.forEach(card => {
            card.style.height = maxHeight + 'px';
        });
        
        // Ajustar alturas de tarjetas en la sección de logros
        const achievementCards = document.querySelectorAll('.achievement-card');
        maxHeight = 0;
        
        achievementCards.forEach(card => {
            card.style.height = 'auto';
        });
        
        achievementCards.forEach(card => {
            if (card.offsetHeight > maxHeight) {
                maxHeight = card.offsetHeight;
            }
        });
        
        achievementCards.forEach(card => {
            card.style.height = maxHeight + 'px';
        });
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
                
                // Track event
                gtag('event', 'language_change', {
                    'event_category': 'Language',
                    'event_label': lang.toUpperCase()
                });
            });
        });
    }

    // ==================== MENÚ MÓVIL ====================
    function setupMobileMenu() {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuBtn && navLinks) {
            menuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                menuBtn.classList.toggle('active');
            });

            // Cerrar menú al hacer clic en un enlace
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    menuBtn.classList.remove('active');
                });
            });
        }
    }

    // ==================== SCROLL SUAVE Y NAVEGACIÓN ====================
    function setupSmoothScroll() {
        // Configurar scroll suave (excluyendo el LinkedIn flotante)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            if (!anchor.closest('.floating-linkedin') && !anchor.classList.contains('lang-btn')) {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const target = document.querySelector(targetId);
                    if (target) {
                        const offsetTop = target.offsetTop - 80; // Ajustar para la navegación fija
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                        
                        // Actualizar URL
                        history.pushState(null, null, targetId);
                    }
                });
            }
        });

        // Navegación fija y activa
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        if (sections.length && navLinks.length) {
            window.addEventListener('scroll', () => {
                let current = '';
                const scrollPosition = window.scrollY + 100;
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });
        }
    }

    // ==================== ANIMACIONES ====================
    function setupAnimations() {
        const animateOnScroll = () => {
            document.querySelectorAll('.service-card, .achievement-card, .gallery-item, .process-step').forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
            });
        };
        
        // Inicializar animaciones
        document.querySelectorAll('.service-card, .achievement-card, .gallery-item, .process-step').forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
        });
        
        // Ejecutar al cargar y al hacer scroll
        animateOnScroll();
        window.addEventListener('scroll', animateOnScroll);
    }

    // ==================== GALERÍA MODAL ====================
    function setupGalleryModal() {
        const modal = document.querySelector('.modal');
        if (!modal) return;
        
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                modal.style.display = 'block';
                modal.querySelector('.modal-content').src = img.src;
                modal.querySelector('.modal-content').alt = img.alt;
                modal.querySelector('.caption').textContent = img.alt;
                
                // Track event
                gtag('event', 'gallery_open', {
                    'event_category': 'Gallery',
                    'event_label': img.alt
                });
            });
        });
        
        document.querySelector('.close-modal').addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
    }

    // ==================== OBSERVADOR DE INTERSECCIÓN ====================
    function setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);

        // Observar todas las secciones
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }

    // ==================== CARGAR IMÁGENES CON FALBACK ====================
    function setupImageFallbacks() {
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('error', function() {
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                this.alt = 'Imagen no disponible';
            });
        });
    }

    // ==================== OPTIMIZACIONES DE RENDIMIENTO ====================
    function setupPerformanceOptimizations() {
        // Precargar imágenes críticas
        const criticalImages = ['ASSETS/sasha-profile.jpg'];
        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        // Evitar layout shifts
        document.querySelectorAll('img').forEach(img => {
            if (!img.hasAttribute('width') || !img.hasAttribute('height')) {
                const width = img.naturalWidth || 300;
                const height = img.naturalHeight || 200;
                img.setAttribute('width', width);
                img.setAttribute('height', height);
            }
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
        
        // Configurar menú móvil
        setupMobileMenu();
        
        // Configurar scroll suave y navegación
        setupSmoothScroll();
        
        // Configurar animaciones
        setupAnimations();
        
        // Configurar galería modal
        setupGalleryModal();
        
        // Configurar observador de intersección
        setupIntersectionObserver();
        
        // Configurar fallbacks de imágenes
        setupImageFallbacks();
        
        // Configurar optimizaciones de rendimiento
        setupPerformanceOptimizations();
        
        // Configurar indicador de scroll del hero
        const scrollIndicator = document.querySelector('.hero-scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                const profileSection = document.querySelector('#perfil');
                if (profileSection) {
                    window.scrollTo({
                        top: profileSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        }
        
        // Ajustar layout inicial
        setTimeout(adjustLayoutAfterTranslation, 500);
        
        // Ajustar layout en redimensionamiento
        window.addEventListener('resize', adjustLayoutAfterTranslation);
    }

    // Iniciar la aplicación
    init();
});