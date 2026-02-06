document.addEventListener('DOMContentLoaded', function () {
    // === LOADING SCREEN ===
    const loadingScreen = document.getElementById('loading-screen');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1500);
    });

    // === SCROLL TO TOP BUTTON ===
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // === MOBILE MENU ===
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // --- Data for Projects and Skills ---
    const projects = {
        fsd: [
            { 
                title: "Efficient Canteen System", 
                description: "A Canteen Management System designed to modernize and streamline the operations of a cafeteria or canteen. This application facilitates efficient food ordering, billing, and inventory management, reducing wait times and improving the overall customer experience. It provides a user-friendly interface for both customers and canteen staff, enabling easy menu navigation, order placement, and payment processing. Key features include user authentication for staff, real-time order tracking, and sales reporting to help manage the canteen more effectively.", 
                media: { type: 'image', src: 'cant.png' }, 
                github: "https://github.com/sheikh-faheem/Canteen_Management-?tab=readme-ov-file#%EF%B8%8F-canteen-management-system",
                demo: "https://canteensystem.infinityfree.me/", // This will have a demo button
                tech: ["HTML/CSS", "JAVASCRIPT", "MySQL"]
            },
            { 
                title: "Patient Management System", 
                description: "A comprehensive and intuitive Patient Management System designed to streamline the administrative and clinical workflows of healthcare facilities. This application provides a centralized platform for managing patient information, appointments, medical records, and billing. With a user-friendly interface, it aims to improve efficiency, reduce paperwork, and enhance the quality of patient care. Key features include secure user authentication, role-based access for administrators and staff, and a complete history of patient interactions.", 
                media: { type: 'image', src: 'pat.png' }, 
                github: "https://github.com/sheikh-faheem/Patient-Management-System?tab=readme-ov-file#-medical-management-dashboard",
                demo: "https://pmsfaheem.kesug.com/index.php", // This will have a demo button
                tech: ["HTML/CSS", "React", "MySQL","Javascript"]
            },
            { 
                title: "Smart Diet Planner", 
                description: "Smart Health Planner Pro is a comprehensive web-based fitness and nutrition tracker that automatically calculates personalized health metrics (BMI, calories, macros) and generates AI-powered meal suggestions and custom workout plans based on your profile and goalsThe app features real-time progress tracking with visual charts, water intake monitoring, workout timers, and the ability to export professional PDF reports of your complete health plan..", 
                media: { type: 'image', src: 'plan.png' }, 
                github: "https://github.com/sheikh-faheem/smart_diet_planner?tab=readme-ov-file#overview",
                demo: "https://sheikh-faheem.github.io/smart_diet_planner/", // Demo link exists, but won't be shown
                tech: ["HTML/CSS", "Javascript", "MySql"]
            }
        ],
        aiml: [
            {
                title: "Movie Recommendation System", 
                description: "An interactive movie recommendation system built with Python, Pandas, and Streamlit.Select a movie and get top 10 similar recommendations based on rating correlations from the MovieLens dataset.",
                media: { type: 'image', src: 'movie.png' }, 
                github: "https://github.com/sheikh-faheem/Movie_recommendation-?tab=readme-ov-file#-movie-recommendation-system",
                demo: "https://sheikh-faheem-movie-recommendation--app-tw1lrz.streamlit.app/", // This will have a demo button
                tech: ["Python", "Streamlit", "Pandas/Numpy"] 
            },
            {
                title: "Spam Detection", 
                description: "An AI-powered spam message detection app built with Python, NLTK, Scikit-learn, and Streamlit.It uses a Naive Bayes classifier trained on the SMS Spam Collection dataset to detect whether a message is spam or not..",
                media: { type: 'image', src: 'spam.png' }, 
                github: "https://github.com/sheikh-faheem/Spam-Detector-?tab=readme-ov-file#-spam-message-detector",
                demo: "https://sheikh-faheem-spam-detector--app-au5ulr.streamlit.app/", // This will have a demo button
                tech: ["Python", "Streamlit", "Scikit-Learn"] 
            }
            
        ],
        flutter: [
            { 
                title: "Team Leave Management App", 
                description: "A cross-platform app for teams to manage schedules with calendar-based leave requests.", 
                media: { type: 'video', src: 'leave.mp4' }, 
                github: "https://github.com/sheikh-faheem/Team-schedule-planner-and-Memo/tree/main?tab=readme-ov-file#-team-shift-planner-app",
                // No demo link here, so no button will be shown regardless
                tech: ["Flutter", "Firebase", "Dart"]
            },
             { 
                title: "Perfume Price Comparator App", 
                description: " Perfume Comparator Web App that helps users compare different perfumes based on brand, notes, longevity, sillage, and user ratings.  Built using Python and Streamlit, it provides a side-by-side comparison to make better fragrance purchase decisions.", 
                media: { type: 'video', src: 'perf.mp4' }, 
                github: "https://github.com/sheikh-faheem/Perfume-Price-Comparator/tree/main?tab=readme-ov-file#-perfume-comparator-app",
                // No demo link here, so no button will be shown regardless
                tech: ["Flutter", "Streamlit", "Dart"]
            }
        ]
    };

    const skills = {
        frontend: [ { name: "HTML & CSS", level: "95%" }, { name: "JavaScript", level: "90%" }, { name: "React.js", level: "88%" }, { name: "Flutter & Dart", level: "85%" }, { name: "TypeScript", level: "80%" } ],
        backend: [ { name: "Python", level: "95%" }, { name: "Node.js", level: "85%" }, { name: "Django", level: "90%" }, { name: "PostgreSQL", level: "88%" }, { name: "MongoDB", level: "82%" } ],
        aiml: [ { name: "TensorFlow", level: "85%" }, { name: "Scikit-learn", level: "88%" }, { name: "OpenCV", level: "80%" }, { name: "Pandas & NumPy", level: "90%" } ]
    };

    // --- Dynamically Populate Content (UPDATED) ---
    const projectsArea = document.querySelector('.projects-display-area');
    const treeHierarchy = document.querySelector('.tree-hierarchy');

    const categoryNames = { fsd: '🌳 Full-Stack', aiml: '🧠 AI/ML', flutter: '📱 Flutter' };
    
    if (treeHierarchy) {
        for (const id in categoryNames) {
            treeHierarchy.innerHTML += `<button class="category-seed" id="${id}-seed" data-category="${id}">${categoryNames[id]}</button>`;
        }
    }

    if (projectsArea) {
        for (const categoryId in projects) {
            const categoryDiv = document.createElement('div');
            categoryDiv.id = `${categoryId}-projects`;
            categoryDiv.className = 'project-category-content';
            
            projects[categoryId].forEach(project => {
                const mediaTag = project.media.type === 'video'
                    ? `<video class="project-media" src="${project.media.src}" muted loop playsinline autoplay></video>`
                    : `<img class="project-media" src="${project.media.src}" alt="${project.title} preview">`;
                
                // *** KEY CHANGE IS HERE ***
                // Conditionally generate the Live Demo button
                let demoButtonHTML = '';
                if (categoryId === 'fsd' && project.demo) {
                    demoButtonHTML = `
                        <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link demo-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            <span>Live Demo</span>
                        </a>
                    `;
                }
                if (categoryId === 'aiml' && project.demo) {
                    demoButtonHTML = `
                        <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link demo-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            <span>Live Demo</span>
                        </a>
                    `;
                }

                categoryDiv.innerHTML += `
                    <article class="project-card animate-on-scroll">
                        <div class="project-media-wrapper" data-media-type="${project.media.type}" data-media-src="${project.media.src}">
                            ${mediaTag}
                        </div>
                        <div class="project-info">
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                            <div class="tech-stack">
                                ${project.tech ? project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('') : ''}
                            </div>
                            <div class="project-links">
                                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link github-link">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    <span>GitHub</span>
                                </a>
                                ${demoButtonHTML} <!-- The demo button is inserted here only if it exists -->
                            </div>
                        </div>
                    </article>`;
            });
            projectsArea.appendChild(categoryDiv);
        }
    }
    
    const skillsLayout = document.querySelector('.skills-layout');
    if (skillsLayout) {
        skillsLayout.innerHTML = `
            <div class="skills-box animate-on-scroll"><h3>Frontend & Mobile</h3>${skills.frontend.map(s => `<div class="skill-item"><label>${s.name}</label><div class="progress-bar"><div class="progress-level" data-level="${s.level}"></div></div></div>`).join('')}</div>
            <div class="skills-box animate-on-scroll"><h3>Backend & Database</h3>${skills.backend.map(s => `<div class="skill-item"><label>${s.name}</label><div class="progress-bar"><div class="progress-level" data-level="${s.level}"></div></div></div>`).join('')}</div>
            <div class="skills-box animate-on-scroll"><h3>AI/ML & Data Science</h3>${skills.aiml.map(s => `<div class="skill-item"><label>${s.name}</label><div class="progress-bar"><div class="progress-level" data-level="${s.level}"></div></div></div>`).join('')}</div>
        `;
    }

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxVideo = document.getElementById('lightbox-video');
    const lightboxClose = document.querySelector('.lightbox-close');

    document.querySelectorAll('.project-media-wrapper').forEach(item => {
        item.addEventListener('click', () => {
            const type = item.dataset.mediaType;
            const src = item.dataset.mediaSrc;
            if (lightboxImg) lightboxImg.style.display = 'none';
            if (lightboxVideo) lightboxVideo.style.display = 'none';
            if (type === 'image') {
                if (lightboxImg) {
                    lightboxImg.src = src;
                    lightboxImg.style.display = 'block';
                }
            } else {
                if (lightboxVideo) {
                    lightboxVideo.src = src;
                    lightboxVideo.style.display = 'block';
                    lightboxVideo.currentTime = 0;
                    lightboxVideo.play();
                }
            }
            if (lightbox) {
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closeLightbox = () => {
        if (lightbox) {
            lightbox.classList.remove('active');
            if (lightboxVideo) lightboxVideo.pause();
            document.body.style.overflow = '';
        }
    };
    
    if(lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if(lightbox) lightbox.addEventListener('click', (e) => e.target === lightbox && closeLightbox());
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) closeLightbox();
    });

    const header = document.querySelector('.main-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (header) {
            header.classList.toggle('scrolled', scrollTop > 50);
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) link.classList.add('active');
        });
    });
    
    const categorySeeds = document.querySelectorAll('.category-seed');
    function showCategory(id) {
        document.querySelectorAll('.project-category-content').forEach(c => c.classList.remove('active'));
        categorySeeds.forEach(s => s.classList.remove('active'));
        const projectsToShow = document.getElementById(`${id}-projects`);
        const seedToShow = document.getElementById(`${id}-seed`);
        if(projectsToShow) projectsToShow.classList.add('active');
        if(seedToShow) seedToShow.classList.add('active');
    }
    categorySeeds.forEach(s => s.addEventListener('click', () => showCategory(s.dataset.category)));
    if (categorySeeds.length > 0) showCategory(categorySeeds[0].dataset.category);
    
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const roles = ["creative solutions.", "web applications.", "AI models.", "mobile apps."];
        let roleIndex = 0, charIndex = 0, isDeleting = false;
        function type() {
            const currentText = roles[roleIndex];
            let typeSpeed = isDeleting ? 50 : 150;
            typingText.textContent = isDeleting ? currentText.substring(0, charIndex - 1) : currentText.substring(0, charIndex + 1);
            if (!isDeleting && typingText.textContent === currentText) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && typingText.textContent === "") {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 500;
            }
            charIndex += isDeleting ? -1 : 1;
            setTimeout(type, typeSpeed);
        }
        type();
    }
    
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    function setMode(isDark) {
        body.classList.toggle('dark-mode', isDark);
        if(darkModeToggle) darkModeToggle.textContent = isDark ? '☀️' : '🌘';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
    const preferredTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setMode(preferredTheme === 'dark' || (preferredTheme === null && systemPrefersDark));
    if(darkModeToggle) darkModeToggle.addEventListener('click', () => setMode(!body.classList.contains('dark-mode')));
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('skills-box')) {
                    const progressLevels = entry.target.querySelectorAll('.progress-level');
                    progressLevels.forEach((el, index) => {
                        setTimeout(() => {
                            el.style.width = el.dataset.level;
                        }, index * 100);
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});
