/* ==========================================================================
   ATES - Main Interactive JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileNav();
    initStatsCounter();
    initGalleryFilters();
    initQuoteCalculator();
});

/* 1. Header Scroll Shadow & Active Link Update */
function initHeaderScroll() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link indicator on scroll
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
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

/* 2. Mobile Menu Toggle */
function initMobileNav() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                if (mobileToggle.querySelector('i')) {
                    mobileToggle.querySelector('i').className = 'fa-solid fa-bars';
                }
            });
        });
    }
}

/* 3. Hero Animated Counter */
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let started = false;

    function startCounters() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'), 10);
            let count = 0;
            const speed = target / 50;

            const updateCount = () => {
                count += speed;
                if (count < target) {
                    stat.innerText = Math.ceil(count).toLocaleString('fr-FR');
                    setTimeout(updateCount, 30);
                } else {
                    stat.innerText = target.toLocaleString('fr-FR');
                }
            };
            updateCount();
        });
    }

    // Trigger on scroll into view
    const heroSection = document.getElementById('hero');
    window.addEventListener('scroll', () => {
        if (heroSection && !started) {
            const rect = heroSection.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
                startCounters();
                started = true;
            }
        }
    });

    // Run once on load just in case
    startCounters();
}

/* 4. Gallery Filters & Lightbox */
function initGalleryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

function openLightbox(imgSrc, captionText) {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');

    lightboxImg.src = imgSrc;
    lightboxCaption.innerText = captionText;
    lightbox.classList.add('active');
}

function closeLightbox(e) {
    const lightbox = document.getElementById('imageLightbox');
    lightbox.classList.remove('active');
}

function openVideoModal(videoSrc) {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalVideoSource = document.getElementById('modalVideoSource');

    modalVideoSource.src = videoSrc;
    modalVideo.load();
    modal.classList.add('active');
    modalVideo.play();
}

function closeVideoModal(e) {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    modalVideo.pause();
    modal.classList.remove('active');
}

/* 5. Product Catalog Filtering & Search */
function filterCategory(category, element) {
    const catButtons = document.querySelectorAll('.cat-btn');
    catButtons.forEach(b => b.classList.remove('active'));
    if (element) element.classList.add('active');

    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const cat = product.getAttribute('data-cat');
        if (category === 'all' || cat === category) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });
}

function filterCatalog() {
    const input = document.getElementById('catalogSearch').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const title = product.querySelector('h3').innerText.toLowerCase();
        const desc = product.querySelector('.product-desc').innerText.toLowerCase();

        if (title.includes(input) || desc.includes(input)) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });
}

/* 6. Quote Simulator Calculator Logic */
function initQuoteCalculator() {
    updateQuoteCalculation();
}

function updateQuoteCalculation() {
    const projectTypeEl = document.querySelector('input[name="project_type"]:checked');
    if (!projectTypeEl) return;

    const projectType = projectTypeEl.value;
    const nbPoteaux = parseInt(document.getElementById('nbPoteaux').value, 10) || 1;
    const distanceLigne = parseInt(document.getElementById('distanceLigne').value, 10) || 50;
    const typePoteau = document.getElementById('typePoteau').value;
    const puissanceTransfo = parseInt(document.getElementById('puissanceTransfo').value, 10) || 100;

    // Control visibility of inputs based on project type
    const groupPoteaux = document.getElementById('groupPoteaux');
    const groupDistance = document.getElementById('groupDistance');
    const groupTypePoteau = document.getElementById('groupTypePoteau');
    const groupPuissanceTransfo = document.getElementById('groupPuissanceTransfo');

    if (projectType === 'transfo') {
        groupPuissanceTransfo.style.display = 'flex';
        groupPoteaux.style.display = 'flex';
        groupDistance.style.display = 'flex';
        groupTypePoteau.style.display = 'flex';
    } else if (projectType === 'ligne_ht') {
        groupPuissanceTransfo.style.display = 'none';
        groupPoteaux.style.display = 'flex';
        groupDistance.style.display = 'flex';
        groupTypePoteau.style.display = 'flex';
    } else if (projectType === 'batiment') {
        groupPuissanceTransfo.style.display = 'none';
        groupPoteaux.style.display = 'none';
        groupDistance.style.display = 'none';
        groupTypePoteau.style.display = 'none';
    } else { // materiel
        groupPuissanceTransfo.style.display = 'none';
        groupPoteaux.style.display = 'none';
        groupDistance.style.display = 'none';
        groupTypePoteau.style.display = 'none';
    }

    // Estimate Calculation (FCFA)
    let totalEstimated = 0;

    if (projectType === 'ligne_ht') {
        const unitPoteauCost = typePoteau === 'beton' ? 180000 : 110000;
        const cableCostPerMeter = 4500; // Torsadé HTA/BT
        totalEstimated = (nbPoteaux * unitPoteauCost) + (distanceLigne * cableCostPerMeter) + 250000; // Pose & Armement
    } else if (projectType === 'transfo') {
        const transfoCost = puissanceTransfo * 35000 + 1500000; // Approx transfo cost
        const unitPoteauCost = typePoteau === 'beton' ? 180000 : 110000;
        totalEstimated = transfoCost + (nbPoteaux * unitPoteauCost) + (distanceLigne * 4500) + 800000; // Protections & Raccordement
    } else if (projectType === 'batiment') {
        totalEstimated = 850000; // Base forfait installation / armoire triphasée
    } else {
        totalEstimated = 450000; // Commande sur mesure
    }

    const formattedPrice = totalEstimated.toLocaleString('fr-FR') + ' FCFA';
    document.getElementById('quotePriceDisplay').innerText = formattedPrice;
}

function sendQuoteToWhatsApp() {
    const projectTypeEl = document.querySelector('input[name="project_type"]:checked');
    const projectTypeMap = {
        'ligne_ht': 'Construction de Ligne Électrique HT/MT',
        'transfo': 'Poste & Transformateur Électrique',
        'batiment': 'Électricité de Bâtiment / Usine',
        'materiel': 'Achat de Câbles / Matériel Électrique'
    };

    const projectTypeName = projectTypeMap[projectTypeEl.value] || 'Projet Électrique';
    const nbPoteaux = document.getElementById('nbPoteaux').value;
    const distanceLigne = document.getElementById('distanceLigne').value;
    const typePoteau = document.getElementById('typePoteau').options[document.getElementById('typePoteau').selectedIndex].text;
    const puissanceTransfo = document.getElementById('puissanceTransfo').value;
    const ville = document.getElementById('villeProjet').value || 'Douala';
    const clientNom = document.getElementById('clientNom').value || 'Client';
    const clientTel = document.getElementById('clientTel').value || 'Non renseigné';
    const estimatedPrice = document.getElementById('quotePriceDisplay').innerText;

    let message = `*DEMANDE DE DEVIS EN LIGNE - ATES*\n\n`;
    message += `👤 *Client :* ${clientNom}\n`;
    message += `📞 *Téléphone :* ${clientTel}\n`;
    message += `📍 *Ville du chantier :* ${ville}\n`;
    message += `⚡ *Type de Projet :* ${projectTypeName}\n`;

    if (projectTypeEl.value === 'ligne_ht' || projectTypeEl.value === 'transfo') {
        message += `🪵 *Poteaux :* ${nbPoteaux} (${typePoteau})\n`;
        message += `📏 *Distance Ligne :* ${distanceLigne} mètres\n`;
    }
    if (projectTypeEl.value === 'transfo') {
        message += `🔌 *Puissance Transfo :* ${puissanceTransfo} kVA\n`;
    }

    message += `💰 *Estimation Indicative :* ${estimatedPrice}\n\n`;
    message += `Merci de me contacter pour valider la visite technique et le devis final.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/237600000000?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

/* 7. Contact Form Handler */
function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('cName').value;
    const subject = document.getElementById('cSubject').value;
    const message = document.getElementById('cMessage').value;

    alert(`Merci ${name} ! Votre demande concernant "${subject}" a bien été prise en compte. L'équipe ATES vous recontactera sous 24h.`);
    document.getElementById('contactForm').reset();
}
