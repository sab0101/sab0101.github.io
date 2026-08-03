document.addEventListener('DOMContentLoaded', function() {
    // ==================== CONFIGURACIÓN COMPLETA DE TRADUCCIONES ====================
    const translations = {
        'es': {
            // Títulos y textos generales
            'title': 'Consultoría SAB - Especialista en Recursos Humanos',
            'hero_title': 'Consultoría SAB',
            'hero_subtitle': 'Transformando la Gestión de Talento',
            'hero_description': 'Soluciones innovadoras en Recursos Humanos para potenciar tu organización',
            'footer_text': '© 2023 Consultoría SAB. Todos los derechos reservados.',
            'footer_tagline': 'Especialista en Transformación de Recursos Humanos',
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
            'profile_name': 'Sasha Arbe',
            'profile_intro': 'Esto es lo que tienes que saber de mí:',
            'profile_item_1': 'Psicóloga profesional con más de 9 años en RR.HH.',
            'profile_item_2': 'Especializada en Desarrollo Organizacional, Personas y Operaciones.',
            'profile_item_3': 'He trabajado en sectores: farma, ONG, retail, consumo masivo, financiero, comercial, infraestructura y consultoría.',
            'profile_item_4': 'Mis skills: Resolución de problemas, Rápida Adaptabilidad, Pensamiento crítico, Comunicación, Toma de decisiones, Planificación y Gestión del Cambio.',
            'profile_badge': 'Especialista en RH',
            'stat_experience': 'Años de Experiencia',
            'stat_projects': 'Proyectos Completados',
            'stat_sectors': 'Sectores Atendidos',

            // Sección Servicios
            'services_title': 'Mis Servicios Especializados',
            'services_subtitle': 'Seré tu mano derecha en el área',
            'service_1_title': 'Desarrollo Organizacional',
            'service_1_desc': 'Diagnostico, diseño y rediseño de estructuras, procesos y roles para alinear tu organización con su estrategia y maximizar el rendimiento.',
            'service_2_title': 'Clima y Cultura Organizacional',
            'service_2_desc': 'Diagnostico el clima laboral y fortalezco la cultura empresarial para construir entornos de trabajo inclusivos, comprometidos y de alto rendimiento.',
            'service_3_title': 'Capacitación y Aprendizaje',
            'service_3_desc': 'Diseño e implemento soluciones integrales de aprendizaje: diagnóstico de necesidades, plan anual de capacitación, programas de habilidades blandas y técnicas, y campus virtuales personalizados para desarrollar el potencial de tu equipo.',
            'service_4_title': 'Comunicación Interna',
            'service_4_desc': 'Diseño e implemento estrategias de comunicación interna para alinear equipos, fortalecer el compromiso y garantizar que el mensaje llegue de forma clara y efectiva a todos los colaboradores.',
            'service_5_title': 'Gestión del Cambio',
            'service_5_desc': 'Diseño e implemento la estrategia de gestión del cambio para tus proyectos de transformación, aplicando la metodología ADKAR® de Prosci, para garantizar que tus equipos adopten los cambios de manera efectiva y los resultados se sostengan en el tiempo.',
            'service_6_title': 'Reclutamiento y Selección',
            'service_6_desc': 'Diseño y gestiono procesos de atracción y selección de talento que garantizan el mejor fit cultural y profesional, reduciendo la rotación y acelerando la integración.',
            'services_cta': '¿Necesitas un servicio personalizado?',
            'services_button': 'Contactar Ahora',

            // Sección Logros
            'achievements_title': 'Logros Destacados',
            'achievements_subtitle': 'Resultados tangibles que demuestran mi expertise',
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
            'hiring_subtitle': 'Cómo trabajo para garantizar tu éxito',
            'process_step_1_title': 'Solicitud del Cliente',
            'process_step_1_desc': 'Me cuentas tus necesidades y objetivos específicos',
            'process_step_2_title': 'Reunión de Especificación',
            'process_step_2_desc': 'Analizamos detalladamente los requerimientos del proyecto',
            'process_step_3_title': 'Presentación de Propuesta',
            'process_step_3_desc': 'Elaboro una solución personalizada con alcance y costos',
            'process_step_4_title': 'Confirmación del Servicio',
            'process_step_4_desc': 'Firmamos el acuerdo y comenzamos la planificación',
            'process_step_5_title': 'Implementación',
            'process_step_5_desc': 'Ejecuto el proyecto con seguimiento continuo',
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
            'gallery_title': 'Mis Proyectos',
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
            'contact_subtitle': 'Estoy lista para transformar tu gestión de talento',
            'contact_heading': 'Hablemos de tu proyecto',
            'contact_description': 'Contáctame para conocer cómo puedo ayudarte a alcanzar tus objetivos en Recursos Humanos.',
            'contact_whatsapp_latam': 'WhatsApp LATAM',
            'contact_whatsapp_eu': 'WhatsApp Europa',
            'contact_whatsapp_action': 'Escribir por WhatsApp',
            'contact_email': 'Email Directo',
            'contact_email_action': 'Enviar Email'
        },
        'en': {
            // General titles and texts
            'title': 'SAB Consulting - Human Resources Specialist',
            'hero_title': 'SAB Consulting',
            'hero_subtitle': 'Transforming Talent Management',
            'hero_description': 'Innovative Human Resources solutions to empower your organization',
            'footer_text': '© 2023 SAB Consulting. All rights reserved.',
            'footer_tagline': 'Specialist in Human Resources Transformation',
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
            'profile_name': 'Sasha Arbe',
            'profile_intro': 'This is what you need to know about me:',
            'profile_item_1': 'Professional psychologist with more than 9 years in HR',
            'profile_item_2': 'Specialized in Organizational Development, People and Operations',
            'profile_item_3': 'I have worked in sectors: pharma, NGO, retail, mass consumption, financial, commercial, infrastructure and consulting',
            'profile_item_4': 'My skills: Problem solving, Quick Adaptability, Critical thinking, Communication, Decision making, Planning and Change Management',
            'profile_badge': 'HR Specialist',
            'stat_experience': 'Years of Experience',
            'stat_projects': 'Completed Projects',
            'stat_sectors': 'Sectors Served',

            // Services section
            'services_title': 'My Specialized Services',
            'services_subtitle': "I'll be your right hand in the HR area",
            'service_1_title': 'Organizational Development',
            'service_1_desc': 'I diagnose, design and redesign structures, processes and roles to align your organization with its strategy and maximize performance.',
            'service_2_title': 'Organizational Climate and Culture',
            'service_2_desc': 'I diagnose the work climate and strengthen corporate culture to build inclusive, committed, and high-performance work environments.',
            'service_3_title': 'Training and Learning',
            'service_3_desc': 'I design and implement comprehensive learning solutions: needs diagnosis, annual training plan, soft and technical skills programs, and customized virtual campuses to develop your team\'s potential.',
            'service_4_title': 'Internal Communication',
            'service_4_desc': 'I design and implement internal communication strategies to align teams, strengthen commitment, and ensure that the message reaches all collaborators clearly and effectively.',
            'service_5_title': 'Change Management',
            'service_5_desc': 'I design and implement the change management strategy for your transformation projects, applying the ADKAR® methodology by Prosci, to ensure that your teams adopt changes effectively and results are sustained over time.',
            'service_6_title': 'Recruitment and Selection',
            'service_6_desc': 'I design and manage talent attraction and selection processes that guarantee the best cultural and professional fit, reducing turnover and accelerating integration.',
            'services_cta': 'Need a personalized service?',
            'services_button': 'Contact Now',

            // Achievements section
            'achievements_title': 'Featured Achievements',
            'achievements_subtitle': 'Tangible results that demonstrate my expertise',
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
            'hiring_subtitle': 'How I work to ensure your success',
            'process_step_1_title': 'Client Request',
            'process_step_1_desc': 'You tell me your specific needs and objectives',
            'process_step_2_title': 'Specification Meeting',
            'process_step_2_desc': 'We analyze the project requirements in detail',
            'process_step_3_title': 'Proposal Presentation',
            'process_step_3_desc': 'I develop a personalized solution with scope and costs',
            'process_step_4_title': 'Service Confirmation',
            'process_step_4_desc': 'We sign the agreement and begin planning',
            'process_step_5_title': 'Implementation',
            'process_step_5_desc': 'I execute the project with continuous follow-up',
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
            'gallery_title': 'My Projects',
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
            'contact_subtitle': 'I am ready to transform your talent management',
            'contact_heading': 'Let\'s talk about your project',
            'contact_description': 'Contact me to learn how I can help you achieve your HR objectives.',
            'contact_whatsapp_latam': 'WhatsApp LATAM',
            'contact_whatsapp_eu': 'WhatsApp Europe',
            'contact_whatsapp_action': 'Write via WhatsApp',
            'contact_email': 'Direct Email',
            'contact_email_action': 'Send Email'
        },
        'it': {
            // General titles and texts
            'title': 'SAB Consulting - Specialista in Risorse Umane',
            'hero_title': 'SAB Consulting',
            'hero_subtitle': 'Trasformare la Gestione del Talento',
            'hero_description': 'Soluzioni innovative per le Risorse Umane per potenziare la tua organizzazione',
            'footer_text': '© 2023 SAB Consulting. Tutti i diritti riservati.',
            'footer_tagline': 'Specialista nella Trasformazione delle Risorse Umane',
            'footer_links_title': 'Link Rapidi',
            'footer_legal_title': 'Legale',
            'footer_rights': 'Tutti i diritti riservati.',
            'footer_specialization': 'Consulenza specializzata in Risorse Umane',

            // Navigation
            'nav_profile': 'Profilo',
            'nav_services': 'Servizi',
            'nav_achievements': 'Risultati',
            'nav_process': 'Processo',
            'nav_gallery': 'Galleria',
            'nav_contact': 'Contatto',

            // Profile section
            'profile_title': 'Profilo Professionale',
            'profile_subtitle': 'Conoscimi',
            'profile_name': 'Sasha Arbe',
            'profile_intro': 'Questo è ciò che devi sapere di me:',
            'profile_item_1': 'Psicologa professionista con più di 9 anni in HR',
            'profile_item_2': 'Specializzata in Sviluppo Organizzativo, Persone e Operazioni',
            'profile_item_3': 'Ho lavorato in settori: farmaceutico, ONG, retail, consumo di massa, finanziario, commerciale, infrastrutture e consulenza',
            'profile_item_4': 'Le mie competenze: Risoluzione dei problemi, Adattabilità rapida, Pensiero critico, Comunicazione, Processo decisionale, Pianificazione e Gestione del Cambiamento',
            'profile_badge': 'Specialista in HR',
            'stat_experience': 'Anni di Esperienza',
            'stat_projects': 'Progetti Completati',
            'stat_sectors': 'Settori Serviti',

            // Services section
            'services_title': 'I Miei Servizi Specializzati',
            'services_subtitle': 'Sarò la tua mano destra nell\'area HR',
            'service_1_title': 'Sviluppo Organizzativo',
            'service_1_desc': 'Diagnostico, progetto e riprogetto strutture, processi e ruoli per allineare la tua organizzazione alla strategia e massimizzare le prestazioni.',
            'service_2_title': 'Clima e Cultura Organizzativa',
            'service_2_desc': 'Diagnostico il clima lavorativo e rafforzo la cultura aziendale per costruire ambienti di lavoro inclusivi, coinvolgenti e ad alte prestazioni.',
            'service_3_title': 'Formazione e Apprendimento',
            'service_3_desc': 'Progetto e implemento soluzioni formative complete: diagnosi dei bisogni, piano annuale di formazione, programmi di competenze trasversali e tecniche, e campus virtuali personalizzati per sviluppare il potenziale del tuo team.',
            'service_4_title': 'Comunicazione Interna',
            'service_4_desc': 'Progetto e implemento strategie di comunicazione interna per allineare i team, rafforzare l\'impegno e garantire che il messaggio arrivi in modo chiaro ed efficace a tutti i collaboratori.',
            'service_5_title': 'Gestione del Cambiamento',
            'service_5_desc': 'Progetto e implemento la strategia di gestione del cambiamento per i tuoi progetti di trasformazione, applicando la metodologia ADKAR® di Prosci, per garantire che i tuoi team adottino i cambiamenti in modo efficace e i risultati siano sostenuti nel tempo.',
            'service_6_title': 'Reclutamento e Selezione',
            'service_6_desc': 'Progetto e gestisco processi di attrazione e selezione del talento che garantiscono il miglior fit culturale e professionale, riducendo il turnover e accelerando l\'integrazione.',
            'services_cta': 'Hai bisogno di un servizio personalizzato?',
            'services_button': 'Contatta Ora',

            // Achievements section
            'achievements_title': 'Risultati Rilevanti',
            'achievements_subtitle': 'Risultati tangibili che dimostrano la mia esperienza',
            'achievement_1_title': 'Soddisfazione del Clima',
            'achievement_1_desc': 'Passata dal 30% al 98% in meno di 1 anno',
            'achievement_2_title': 'Riconoscimento GPTW',
            'achievement_2_desc': '5 anni consecutivi come Great Place to Work',
            'achievement_2_badge': 'Riconoscimento Internazionale',
            'achievement_3_title': 'Fidelizzazione del Talento',
            'achievement_3_desc': 'Dal 23% al 99% dei dipendenti decideva di rimanere in azienda',
            'achievement_4_title': 'Ottimizzazione dei Costi',
            'achievement_4_desc': 'Risparmio medio del 35% nei progetti di consulenza',
            'achievement_4_stat': '+35% medio',

            // Hiring section
            'hiring_title': 'Processo di Assunzione',
            'hiring_subtitle': 'Come lavoro per garantire il tuo successo',
            'process_step_1_title': 'Richiesta del Cliente',
            'process_step_1_desc': 'Mi racconti le tue esigenze e obiettivi specifici',
            'process_step_2_title': 'Riunione di Specificazione',
            'process_step_2_desc': 'Analizziamo in dettaglio i requisiti del progetto',
            'process_step_3_title': 'Presentazione della Proposta',
            'process_step_3_desc': 'Elaboro una soluzione personalizzata con ambito e costi',
            'process_step_4_title': 'Conferma del Servizio',
            'process_step_4_desc': 'Firmiamo l\'accordo e iniziamo la pianificazione',
            'process_step_5_title': 'Implementazione',
            'process_step_5_desc': 'Eseguo il progetto con monitoraggio continuo',
            'pricing_title': 'Informazioni sui Costi',
            'pricing_recruitment': 'Reclutamento & Selezione',
            'pricing_consulting': 'Consulenza Specializzata',
            'pricing_price': 'Personalizzato',
            'pricing_item_1': 'Garanzia di 3 mesi',
            'pricing_item_2': 'Processo di selezione completo',
            'pricing_item_3': 'Consegna di report dettagliati',
            'pricing_item_4': 'Analisi iniziale senza costi',
            'pricing_item_5': 'Proposta dettagliata',
            'pricing_item_6': 'Monitoraggio post-implementazione',

            // Gallery section
            'gallery_title': 'I Miei Progetti',
            'gallery_subtitle': 'Esperienza tangibile in azione',
            'gallery_item_1_title': 'Kit Compleanno',
            'gallery_item_1_category': 'Cultura',
            'gallery_item_2_title': 'Design per la Festa della Donna',
            'gallery_item_2_category': 'Comunicazione Interna',
            'gallery_item_3_title': 'Attività per la Giornata dei Bambini',
            'gallery_item_3_category': 'Responsabilità Sociale - Interna',
            'gallery_item_4_title': 'Anniversario',
            'gallery_item_4_category': 'Cultura',
            'gallery_item_5_title': 'Olimpiadi',
            'gallery_item_5_category': 'Cultura',
            'gallery_item_6_title': 'Fiera del Lavoro',
            'gallery_item_6_category': 'Selezione e Reclutamento',

            // Contact section
            'contact_title': 'Contatto Diretto',
            'contact_subtitle': 'Sono pronta a trasformare la gestione del tuo talento',
            'contact_heading': 'Parliamo del tuo progetto',
            'contact_description': 'Contattami per sapere come posso aiutarti a raggiungere i tuoi obiettivi in Risorse Umane.',
            'contact_whatsapp_latam': 'WhatsApp LATAM',
            'contact_whatsapp_eu': 'WhatsApp Europa',
            'contact_whatsapp_action': 'Scrivi su WhatsApp',
            'contact_email': 'Email Diretta',
            'contact_email_action': 'Invia Email'
        },
        'hr': {
            // General titles and texts
            'title': 'SAB Consulting - Specijalist za Ljudske Resurse',
            'hero_title': 'SAB Consulting',
            'hero_subtitle': 'Transformacija Upravljanja Talentima',
            'hero_description': 'Inovativna rješenja za Ljudske Resurse za jačanje vaše organizacije',
            'footer_text': '© 2023 SAB Consulting. Sva prava pridržana.',
            'footer_tagline': 'Specijalist za Transformaciju Ljudskih Resursa',
            'footer_links_title': 'Brze Poveznice',
            'footer_legal_title': 'Pravno',
            'footer_rights': 'Sva prava pridržana.',
            'footer_specialization': 'Specijalizirano savjetovanje za Ljudske Resurse',

            // Navigation
            'nav_profile': 'Profil',
            'nav_services': 'Usluge',
            'nav_achievements': 'Postignuća',
            'nav_process': 'Proces',
            'nav_gallery': 'Galerija',
            'nav_contact': 'Kontakt',

            // Profile section
            'profile_title': 'Profesionalni Profil',
            'profile_subtitle': 'Upoznaj me',
            'profile_name': 'Sasha Arbe',
            'profile_intro': 'Ovo je ono što trebate znati o meni:',
            'profile_item_1': 'Profesionalna psihologinja s više od 9 godina u HR-u',
            'profile_item_2': 'Specijalizirana za Organizacijski Razvoj, Ljude i Operacije',
            'profile_item_3': 'Radila sam u sektorima: farma, NGO, maloprodaja, masovna potrošnja, financije, komercijala, infrastruktura i savjetovanje',
            'profile_item_4': 'Moje vještine: Rješavanje problema, Brza prilagodljivost, Kritičko razmišljanje, Komunikacija, Donošenje odluka, Planiranje i Upravljanje promjenama',
            'profile_badge': 'Specijalist za HR',
            'stat_experience': 'Godina Iskustva',
            'stat_projects': 'Završenih Projekata',
            'stat_sectors': 'Opsluženih Sektora',

            // Services section
            'services_title': 'Moje Specijalizirane Usluge',
            'services_subtitle': 'Bit ću tvoja desna ruka u HR području',
            'service_1_title': 'Organizacijski Razvoj',
            'service_1_desc': 'Dijagnosticram, dizajniram i redizajniram strukture, procese i uloge kako bih uskladila vašu organizaciju sa strategijom i maksimizirala performanse.',
            'service_2_title': 'Organizacijska Klima i Kultura',
            'service_2_desc': 'Dijagnosticram radnu klimu i jačam korporativnu kulturu za izgradnju inkluzivnih, predanih i visokoučinkovitih radnih okruženja.',
            'service_3_title': 'Obuka i Učenje',
            'service_3_desc': 'Dizajniram i provodim sveobuhvatna rješenja za učenje: dijagnozu potreba, godišnji plan obuke, programe mekih i tehničkih vještina, te prilagođene virtualne kampuse za razvoj potencijala vašeg tima.',
            'service_4_title': 'Interna Komunikacija',
            'service_4_desc': 'Dizajniram i provodim strategije interne komunikacije za usklađivanje timova, jačanje predanosti i osiguravanje da poruka stigne jasno i učinkovito do svih suradnika.',
            'service_5_title': 'Upravljanje Promjenama',
            'service_5_desc': 'Dizajniram i provodim strategiju upravljanja promjenama za vaše transformacijske projekte, primjenjujući ADKAR® metodologiju tvrtke Prosci, kako bih osigurala da vaši timovi učinkovito usvoje promjene i da se rezultati održe tijekom vremena.',
            'service_6_title': 'Regrutacija i Selekcija',
            'service_6_desc': 'Dizajniram i upravljam procesima privlačenja i selekcije talenata koji jamče najbolji kulturni i profesionalni fit, smanjujući fluktuaciju i ubrzavajući integraciju.',
            'services_cta': 'Trebate personaliziranu uslugu?',
            'services_button': 'Kontaktirajte Sad',

            // Achievements section
            'achievements_title': 'Istaknuta Postignuća',
            'achievements_subtitle': 'Opipljivi rezultati koji dokazuju moju stručnost',
            'achievement_1_title': 'Zadovoljstvo Klimom',
            'achievement_1_desc': 'Poraslo s 30% na 98% u manje od 1 godine',
            'achievement_2_title': 'GPTW Priznanje',
            'achievement_2_desc': '5 uzastopnih godina kao Great Place to Work',
            'achievement_2_badge': 'Međunarodno Priznanje',
            'achievement_3_title': 'Zadržavanje Talenta',
            'achievement_3_desc': 'S 23% na 99% zaposlenika odlučilo je ostati u tvrtki',
            'achievement_4_title': 'Optimizacija Troškova',
            'achievement_4_desc': 'Prosječne uštede od 35% na konzultantskim projektima',
            'achievement_4_stat': '+35% prosjek',

            // Hiring section
            'hiring_title': 'Proces Zapošljavanja',
            'hiring_subtitle': 'Kako radim kako bih osigurao vaš uspjeh',
            'process_step_1_title': 'Zahtjev Klijenta',
            'process_step_1_desc': 'Kažete mi svoje specifične potrebe i ciljeve',
            'process_step_2_title': 'Sastanak Specifikacije',
            'process_step_2_desc': 'Detaljno analiziramo zahtjeve projekta',
            'process_step_3_title': 'Prezentacija Prijedloga',
            'process_step_3_desc': 'Izrađujem personalizirano rješenje s opsegom i troškovima',
            'process_step_4_title': 'Potvrda Usluge',
            'process_step_4_desc': 'Potpisujemo ugovor i započinjemo planiranje',
            'process_step_5_title': 'Implementacija',
            'process_step_5_desc': 'Izvršavam projekt s kontinuiranim praćenjem',
            'pricing_title': 'Informacije o Cijenama',
            'pricing_recruitment': 'Regrutacija & Selekcija',
            'pricing_consulting': 'Specijalizirano Savjetovanje',
            'pricing_price': 'Personalizirano',
            'pricing_item_1': 'Garancija od 3 mjeseca',
            'pricing_item_2': 'Kompletan proces selekcije',
            'pricing_item_3': 'Isporuka detaljnih izvješća',
            'pricing_item_4': 'Početna analiza bez troškova',
            'pricing_item_5': 'Detaljan prijedlog',
            'pricing_item_6': 'Praćenje nakon implementacije',

            // Gallery section
            'gallery_title': 'Moji Projekti',
            'gallery_subtitle': 'Oplipljivo iskustvo na djelu',
            'gallery_item_1_title': 'Rođendanski Paket',
            'gallery_item_1_category': 'Kultura',
            'gallery_item_2_title': 'Dizajn za Dan Žena',
            'gallery_item_2_category': 'Interna Komunikacija',
            'gallery_item_3_title': 'Aktivnost za Dan Djeteta',
            'gallery_item_3_category': 'Interna Društvena Odgovornost',
            'gallery_item_4_title': 'Godišnjica',
            'gallery_item_4_category': 'Kultura',
            'gallery_item_5_title': 'Olimpijada',
            'gallery_item_5_category': 'Kultura',
            'gallery_item_6_title': 'Sajam Poslova',
            'gallery_item_6_category': 'Selekcija i Regrutacija',

            // Contact section
            'contact_title': 'Izravni Kontakt',
            'contact_subtitle': 'Spremna sam transformirati upravljanje vašim talentima',
            'contact_heading': 'Razgovarajmo o vašem projektu',
            'contact_description': 'Kontaktirajte me da saznate kako vam mogu pomoći u postizanju vaših HR ciljeva.',
            'contact_whatsapp_latam': 'WhatsApp LATAM',
            'contact_whatsapp_eu': 'WhatsApp Europa',
            'contact_whatsapp_action': 'Pišite putem WhatsAppa',
            'contact_email': 'Izravni Email',
            'contact_email_action': 'Pošaljite Email'
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

        // Actualizar el label del idioma actual en el toggle
        const currentLangLabel = document.getElementById('currentLangLabel');
        if (currentLangLabel) {
            const langMap = {
                'es': 'ESP',
                'en': 'ENG',
                'it': 'ITA',
                'hr': 'HRV'
            };
            currentLangLabel.textContent = langMap[lang] || 'ESP';
        }

        // Actualizar clase active en las opciones del menú
        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });

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

    // ==================== CONFIGURAR SELECTOR DE IDIOMA DESPLEGABLE ====================
    function setupLanguageDropdown() {
        const toggle = document.getElementById('langToggle');
        const menu = document.getElementById('langMenu');
        const options = document.querySelectorAll('.lang-option');
        
        if (!toggle || !menu) return;

        // Abrir/cerrar menú al hacer clic en el toggle
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            menu.classList.toggle('open');
            toggle.classList.toggle('open');
        });

        // Cerrar menú al seleccionar un idioma
        options.forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                
                // Remover active de todas las opciones
                options.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Aplicar traducción
                applyTranslation(lang);
                
                // Cerrar menú
                menu.classList.remove('open');
                toggle.classList.remove('open');
                
                // Track event
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'language_change', {
                        'event_category': 'Language',
                        'event_label': lang.toUpperCase()
                    });
                }
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.language-dropdown')) {
                menu.classList.remove('open');
                toggle.classList.remove('open');
            }
        });

        // Cerrar menú con tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                menu.classList.remove('open');
                toggle.classList.remove('open');
            }
        });
    }

    // ==================== VERIFICACIÓN DE GOOGLE ANALYTICS ====================
    function verifyGoogleAnalytics() {
        if (typeof gtag === 'undefined') {
            console.error('Google Analytics gtag is not defined');
            return false;
        }
        
        if (typeof window.dataLayer === 'undefined') {
            console.error('Google Analytics dataLayer is not defined');
            return false;
        }
        
        console.log('Google Analytics is properly loaded');
        return true;
    }

    // ==================== TRACKING DE LINKEDIN MEJORADO ====================
    function setupLinkedInTracking() {
        const linkedinLink = document.getElementById('linkedin-track');
        
        if (linkedinLink) {
            linkedinLink.addEventListener('click', function(e) {
                console.log('LinkedIn click detected - starting tracking process');
                
                e.preventDefault();
                
                const linkedinUrl = this.href;
                
                if (typeof gtag !== 'undefined') {
                    console.log('Sending event to Google Analytics...');
                    
                    gtag('event', 'click', {
                        'event_category': 'Social',
                        'event_label': 'LinkedIn Icon Click',
                        'event_callback': function() {
                            console.log('LinkedIn click tracked successfully - navigating to LinkedIn');
                            window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
                        },
                        'transport_type': 'beacon'
                    });
                    
                    console.log('Event sent to Google Analytics');
                    
                    setTimeout(function() {
                        console.log('Fallback navigation to LinkedIn');
                        window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
                    }, 500);
                    
                } else {
                    console.warn('Google Analytics not available - direct navigation');
                    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
                }
            });
            
            console.log('LinkedIn tracking setup completed');
        } else {
            console.error('LinkedIn link element not found');
        }
    }

    // ==================== TRACKING MEJORADO PARA TODOS LOS ENLACES EXTERNOS ====================
    function setupExternalLinkTracking() {
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            if (!link.href.includes(window.location.hostname)) {
                link.addEventListener('click', function(e) {
                    const url = this.href;
                    const isLinkedIn = url.includes('linkedin.com');
                    
                    if (isLinkedIn && this.id !== 'linkedin-track') {
                        return;
                    }
                    
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'click', {
                            'event_category': 'Outbound',
                            'event_label': url,
                            'transport_type': 'beacon'
                        });
                    }
                });
            }
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
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            if (!anchor.closest('.floating-linkedin') && !anchor.classList.contains('lang-option') && !anchor.closest('.language-dropdown')) {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const target = document.querySelector(targetId);
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                        history.pushState(null, null, targetId);
                    }
                });
            }
        });

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
        
        document.querySelectorAll('.service-card, .achievement-card, .gallery-item, .process-step').forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
        });
        
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
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'gallery_open', {
                        'event_category': 'Gallery',
                        'event_label': img.alt
                    });
                }
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
        const criticalImages = ['ASSETS/sasha-profile.jpg'];
        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });

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
        console.log('Initializing website...');
        
        if (!verifyGoogleAnalytics()) {
            console.warn('Google Analytics not loaded properly - some tracking may not work');
        }
        
        // Configurar selector de idioma desplegable
        setupLanguageDropdown();
        
        // Cargar idioma guardado
        const savedLang = localStorage.getItem('preferredLanguage') || 'es';
        
        // Marcar la opción activa en el menú
        document.querySelectorAll('.lang-option').forEach(btn => {
            if (btn.getAttribute('data-lang') === savedLang) {
                btn.classList.add('active');
            }
        });
        
        // Actualizar el label del toggle
        const currentLangLabel = document.getElementById('currentLangLabel');
        if (currentLangLabel) {
            const langMap = {
                'es': 'ESP',
                'en': 'ENG',
                'it': 'ITA',
                'hr': 'HRV'
            };
            currentLangLabel.textContent = langMap[savedLang] || 'ESP';
        }
        
        // Aplicar traducción
        applyTranslation(savedLang);
        
        setupMobileMenu();
        setupSmoothScroll();
        setupAnimations();
        setupGalleryModal();
        setupIntersectionObserver();
        setupImageFallbacks();
        setupPerformanceOptimizations();
        setupLinkedInTracking();
        setupExternalLinkTracking();
        
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
        
        setTimeout(adjustLayoutAfterTranslation, 500);
        window.addEventListener('resize', adjustLayoutAfterTranslation);
        
        console.log('Website initialization completed');
        console.log('LinkedIn tracking is active');
    }

    init();
});