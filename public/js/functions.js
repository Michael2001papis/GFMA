/**
 * ============================================
 * Global Friendly Medicine Association
 * Main JavaScript Functions with Console Documentation
 * ============================================
 * מפתח האתר: Michael Papaismedov
 * @fileoverview Main JavaScript file for GFMA website
 * @version 1.0.0
 * @description Professional medical platform connecting patients with certified doctors worldwide
 */

// ============================================
// DOCTORS MODULE - Clean Implementation
// ============================================

/**
 * Doctors Data Model
 * Each doctor has:
 * - id: unique identifier
 * - name: doctor's full name
 * - specialty: medical specialty (English)
 * - specialtyHebrew: medical specialty (Hebrew)
 * - category: category code
 * - categoryHebrew: category name (Hebrew)
 * - price: price range string
 * - description: professional description (English)
 * - descriptionHebrew: professional description (Hebrew)
 */

// Doctors database - all available doctors
const doctorsData = [
    { id: 1, name: "Dr. Yossi Cohen", specialty: "Cardiologist", specialtyHebrew: "רופא לב", category: "Cardiology", categoryHebrew: "לב", price: "300-500", description: "Specialist in cardiovascular diseases", descriptionHebrew: "מומחה במחלות לב וכלי דם" },
    { id: 2, name: "Dr. Sarah Levy", specialty: "Ophthalmologist", specialtyHebrew: "רופאת עיניים", category: "Ophthalmology", categoryHebrew: "עיניים", price: "250-400", description: "Specialist in eye surgery", descriptionHebrew: "מומחית בניתוחי עיניים" },
    { id: 3, name: "Dr. David Israeli", specialty: "Pediatrician", specialtyHebrew: "רופא ילדים", category: "Pediatrics", categoryHebrew: "ילדים", price: "200-350", description: "Specialist in pediatrics", descriptionHebrew: "מומחה ברפואת ילדים" },
    { id: 4, name: "Dr. Michal Rosen", specialty: "Gynecologist", specialtyHebrew: "רופאת נשים", category: "Gynecology", categoryHebrew: "נשים", price: "300-450", description: "Specialist in gynecology", descriptionHebrew: "מומחית בגינקולוגיה" },
    { id: 5, name: "Dr. Uri Cohen", specialty: "Orthopedist", specialtyHebrew: "רופא אורתופד", category: "Orthopedics", categoryHebrew: "אורתופדיה", price: "350-500", description: "Specialist in orthopedic surgery", descriptionHebrew: "מומחה בניתוחי אורתופדיה" },
    { id: 6, name: "Dr. Noa David", specialty: "Dermatologist", specialtyHebrew: "רופאת עור", category: "Dermatology", categoryHebrew: "עור", price: "250-400", description: "Specialist in skin diseases", descriptionHebrew: "מומחית במחלות עור" },
    { id: 7, name: "Dr. Ron Shamir", specialty: "ENT Specialist", specialtyHebrew: "רופא אף אוזן גרון", category: "ENT", categoryHebrew: "אף אוזן גרון", price: "300-450", description: "Specialist in ear, nose and throat problems", descriptionHebrew: "מומחה בבעיות אף אוזן גרון" },
    { id: 8, name: "Dr. Tal Golan", specialty: "Family Doctor", specialtyHebrew: "רופא משפחה", category: "Family", categoryHebrew: "משפחה", price: "150-300", description: "Experienced family physician", descriptionHebrew: "רופא משפחה מנוסה" },
    { id: 9, name: "Dr. Ronen Avraham", specialty: "Radiologist", specialtyHebrew: "רופא רנטגן", category: "Radiology", categoryHebrew: "רנטגן", price: "200-400", description: "Specialist in X-ray interpretation", descriptionHebrew: "מומחה בפענוח צילומי רנטגן" },
    { id: 10, name: "Dr. Yael Cohen", specialty: "CT Imaging Specialist", specialtyHebrew: "רופאת הדמיה - CT", category: "CT", categoryHebrew: "CT", price: "300-500", description: "Specialist in CT scan interpretation", descriptionHebrew: "מומחית בפענוח בדיקות CT" },
    { id: 11, name: "Dr. Michael Levy", specialty: "MRI Imaging Specialist", specialtyHebrew: "רופא הדמיה - MRI", category: "MRI", categoryHebrew: "MRI", price: "350-600", description: "Specialist in MRI interpretation", descriptionHebrew: "מומחה בפענוח בדיקות MRI" },
    { id: 12, name: "Dr. Orit Dayan", specialty: "Urologist", specialtyHebrew: "רופאת אורולוגיה", category: "Urology", categoryHebrew: "אורולוגיה", price: "300-500", description: "Specialist in urinary tract diseases", descriptionHebrew: "מומחית במחלות דרכי השתן" },
    { id: 13, name: "Dr. Amir Cohen", specialty: "Nephrologist", specialtyHebrew: "רופא נפרולוגיה", category: "Nephrology", categoryHebrew: "נפרולוגיה", price: "350-550", description: "Specialist in kidney diseases", descriptionHebrew: "מומחה במחלות כליות" },
    { id: 14, name: "Dr. Rotem Levy", specialty: "Endocrinologist", specialtyHebrew: "רופאת אנדוקרינולוגיה", category: "Endocrinology", categoryHebrew: "אנדוקרינולוגיה", price: "300-500", description: "Specialist in hormonal diseases", descriptionHebrew: "מומחית במחלות הורמונליות" },
    { id: 15, name: "Dr. Gal Israeli", specialty: "Rheumatologist", specialtyHebrew: "רופא ראומטולוגיה", category: "Rheumatology", categoryHebrew: "ראומטולוגיה", price: "300-500", description: "Specialist in joint diseases", descriptionHebrew: "מומחה במחלות מפרקים" },
    { id: 16, name: "Dr. Nir Cohen", specialty: "Pulmonologist", specialtyHebrew: "רופא פולמונולוגיה", category: "Pulmonology", categoryHebrew: "פולמונולוגיה", price: "300-500", description: "Specialist in lung diseases", descriptionHebrew: "מומחה במחלות ריאות" },
    { id: 17, name: "Dr. Shira David", specialty: "Hematologist", specialtyHebrew: "רופאת המטולוגיה", category: "Hematology", categoryHebrew: "המטולוגיה", price: "350-600", description: "Specialist in blood diseases", descriptionHebrew: "מומחית במחלות דם" },
    { id: 18, name: "Dr. Amit Rosen", specialty: "Psychiatrist", specialtyHebrew: "רופא פסיכיאטריה", category: "Psychiatry", categoryHebrew: "פסיכיאטריה", price: "300-500", description: "Specialist in psychiatry", descriptionHebrew: "מומחה בפסיכיאטריה" },
    { id: 19, name: "Dr. Lior Shamir", specialty: "General Surgeon", specialtyHebrew: "רופא כירורגיה כללית", category: "General Surgery", categoryHebrew: "כירורגיה כללית", price: "400-700", description: "Specialist in general surgery", descriptionHebrew: "מומחה בניתוחים כלליים" },
    { id: 20, name: "Dr. Talia Golan", specialty: "Plastic Surgeon", specialtyHebrew: "רופאת כירורגיה פלסטית", category: "Plastic Surgery", categoryHebrew: "כירורגיה פלסטית", price: "500-1000", description: "Specialist in plastic surgery", descriptionHebrew: "מומחית בניתוחים פלסטיים" },
    { id: 21, name: "Dr. Ronen Avraham", specialty: "Cardiothoracic Surgeon", specialtyHebrew: "רופא כירורגיה לב-חזה", category: "Cardiothoracic Surgery", categoryHebrew: "כירורגיה לב-חזה", price: "600-1200", description: "Specialist in heart and chest surgery", descriptionHebrew: "מומחה בניתוחי לב וחזה" },
    { id: 22, name: "Dr. Michal Cohen", specialty: "Emergency Medicine", specialtyHebrew: "רופאת רפואה דחופה", category: "Emergency Medicine", categoryHebrew: "רפואה דחופה", price: "200-400", description: "Specialist in emergency medicine", descriptionHebrew: "מומחית ברפואה דחופה" },
    { id: 23, name: "Dr. Danny Levy", specialty: "Internal Medicine", specialtyHebrew: "רופא רפואה פנימית", category: "Internal Medicine", categoryHebrew: "רפואה פנימית", price: "250-450", description: "Specialist in internal medicine", descriptionHebrew: "מומחה ברפואה פנימית" },
    { id: 24, name: "Dr. Orit Israeli", specialty: "Geriatrician", specialtyHebrew: "רופאת גריאטריה", category: "Geriatrics", categoryHebrew: "גריאטריה", price: "250-400", description: "Specialist in geriatric medicine", descriptionHebrew: "מומחית ברפואת קשישים" },
    { id: 25, name: "Dr. Yaron David", specialty: "Dentist", specialtyHebrew: "רופא שיניים", category: "Dentistry", categoryHebrew: "שיניים", price: "200-500", description: "Specialist in dentistry", descriptionHebrew: "מומחה ברפואת שיניים" },
    { id: 26, name: "Dr. Noa Cohen", specialty: "Orthodontist", specialtyHebrew: "רופאת אורתודונטיה", category: "Orthodontics", categoryHebrew: "אורתודונטיה", price: "300-800", description: "Specialist in teeth straightening", descriptionHebrew: "מומחית ביישור שיניים" },
    { id: 27, name: "Dr. Ron Levy", specialty: "Periodontist", specialtyHebrew: "רופא פריודונטיה", category: "Periodontics", categoryHebrew: "פריודונטיה", price: "300-600", description: "Specialist in gum diseases", descriptionHebrew: "מומחה במחלות חניכיים" },
    { id: 28, name: "Dr. Sarah Rosen", specialty: "Anesthesiologist", specialtyHebrew: "רופאת אנסטזיה", category: "Anesthesiology", categoryHebrew: "אנסטזיה", price: "400-800", description: "Specialist in anesthesia", descriptionHebrew: "מומחית בהרדמה" },
    { id: 29, name: "Dr. Michael Shamir", specialty: "Pathologist", specialtyHebrew: "רופא פתולוגיה", category: "Pathology", categoryHebrew: "פתולוגיה", price: "300-500", description: "Specialist in pathology", descriptionHebrew: "מומחה בפתולוגיה" },
    { id: 30, name: "Dr. Tal Golan", specialty: "Obstetrician", specialtyHebrew: "רופא מיילדות", category: "Obstetrics", categoryHebrew: "מיילדות", price: "400-800", description: "Specialist in obstetrics", descriptionHebrew: "מומחה במיילדות" },
    { id: 31, name: "Dr. Orit Avraham", specialty: "Alternative Medicine", specialtyHebrew: "רופאת רפואה משלימה", category: "Alternative Medicine", categoryHebrew: "רפואה משלימה", price: "150-300", description: "Specialist in alternative medicine", descriptionHebrew: "מומחית ברפואה משלימה" },
    { id: 32, name: "Dr. Yossi Cohen", specialty: "Sports Medicine", specialtyHebrew: "רופא רפואה ספורטיבית", category: "Sports Medicine", categoryHebrew: "רפואה ספורטיבית", price: "250-450", description: "Specialist in sports medicine", descriptionHebrew: "מומחה ברפואת ספורט" },
    { id: 33, name: "Dr. Nir Levy", specialty: "Nutritionist", specialtyHebrew: "רופא תזונה", category: "Nutrition", categoryHebrew: "תזונה", price: "200-400", description: "Specialist in nutrition and diet", descriptionHebrew: "מומחה בתזונה ודיאטה" },
    { id: 34, name: "Dr. Shira Israeli", specialty: "Physiotherapist", specialtyHebrew: "רופאת פיזיותרפיה", category: "Physiotherapy", categoryHebrew: "פיזיותרפיה", price: "150-300", description: "Specialist in physiotherapy", descriptionHebrew: "מומחית בפיזיותרפיה" },
    { id: 35, name: "Dr. Ronen David", specialty: "Clinical Psychologist", specialtyHebrew: "רופא פסיכולוגיה", category: "Psychology", categoryHebrew: "פסיכולוגיה", price: "200-400", description: "Specialist in clinical psychology", descriptionHebrew: "מומחה בפסיכולוגיה קלינית" },
    { id: 36, name: "Dr. Michal Cohen", specialty: "Family Doctor Consultation", specialtyHebrew: "שיחה עם רופא משפחה", category: "Consultation", categoryHebrew: "שיחה עם רופא", price: "150-300", description: "Professional consultation with a family doctor - medical advice", descriptionHebrew: "שיחה מקצועית עם רופא משפחה - ייעוץ רפואי" },
    { id: 37, name: "Dr. Danny Levy", specialty: "Doctor Consultation", specialtyHebrew: "שיחה עם רופא", category: "Consultation", categoryHebrew: "שיחה עם רופא", price: "150-300", description: "Professional consultation with a specialist doctor - medical advice", descriptionHebrew: "שיחה מקצועית עם רופא מומחה - ייעוץ רפואי" },
    { id: 38, name: "Dr. Sarah Israeli", specialty: "Family Doctor Consultation", specialtyHebrew: "שיחה עם רופאת משפחה", category: "Consultation", categoryHebrew: "שיחה עם רופא", price: "150-300", description: "Professional consultation with a family doctor - medical advice", descriptionHebrew: "שיחה מקצועית עם רופאת משפחה - ייעוץ רפואי" }
];

// ============================================
// NEW DOCTORS MODULE - Clean Implementation
// ============================================

/**
 * ============================================
 * DOCTORS MODULE - Rebuilt from scratch
 * ============================================
 * 
 * This is a clean, simple implementation of the doctors list and search functionality.
 * 
 * FUNCTIONS:
 * 1. renderDoctorsList(doctors) - Renders an array of doctors to the doctors grid
 * 2. searchDoctors(searchTerm) - Filters doctors by search term, returns filtered array
 * 3. handleDoctorsSearch() - Handles search from UI (button click or Enter key)
 * 4. initDoctorsModule() - Initializes the module on page load (renders all doctors, sets up listeners)
 * 
 * DATA:
 * - doctorsData array (defined above, lines 14-64) - Contains all doctor objects
 * 
 * UI ELEMENTS:
 * - #doctorsGrid (index.html line ~751) - Container where doctors cards are rendered
 * - #generalSearch (index.html line ~503) - Search input field
 * - Search button (index.html line ~505) - Calls handleDoctorsSearch()
 * 
 * INTEGRATION:
 * - initDoctorsModule() is called in showMainContent() (line ~428)
 * - Old functions (loadDoctors, performGeneralSearch) redirect to new module for backward compatibility
 * 
 * REPLACED CODE:
 * - Old loadDoctors() function (now redirects to new module)
 * - Old performGeneralSearch() function (now redirects to handleDoctorsSearch())
 * - Old displayResults() still exists but is not used by doctors module (used by category search)
 */

/**
 * Render a list of doctors to the doctors grid
 * @param {Array} doctors - Array of doctor objects to render
 */
function renderDoctorsList(doctors) {
    console.log('🔧 NEW MODULE: renderDoctorsList()');
    console.log(`📊 Rendering ${doctors ? doctors.length : 0} doctors`);
    
    // Get the container
    const doctorsGrid = document.getElementById('doctorsGrid');
    if (!doctorsGrid) {
        console.error('❌ Doctors grid container not found (id="doctorsGrid")');
        return;
    }
    
    // Validate input
    if (!doctors || !Array.isArray(doctors) || doctors.length === 0) {
        doctorsGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">👨‍⚕️</div>
                <div class="empty-state-title">No doctors found</div>
                <div class="empty-state-text">No doctors match your search criteria.</div>
            </div>
        `;
        console.log('ℹ️ No doctors to display');
        return;
    }
    
    // Clear container
    doctorsGrid.innerHTML = '';
    
    // Load favorites if user exists
    const savedFavorites = localStorage.getItem('userFavorites');
    let favorites = [];
    if (savedFavorites) {
        try {
            favorites = JSON.parse(savedFavorites);
        } catch (e) {
            console.warn('⚠️ Failed to parse favorites:', e);
            favorites = [];
        }
    }
    
    // Render each doctor
    doctors.forEach((doctor, index) => {
        if (!doctor || !doctor.id) {
            console.warn('⚠️ Invalid doctor object skipped:', doctor);
            return;
        }
        
        const card = document.createElement('div');
        card.className = 'doctor-card';
        
        // Calculate price with discount
        const price = calculatePriceWithDiscount ? calculatePriceWithDiscount(doctor.price || '0') : { original: doctor.price || '0', discounted: doctor.price || '0' };
        const isFavorite = favorites.includes(doctor.id);
        
        // Build card HTML
        card.innerHTML = `
            <div class="doctor-name">${escapeHtml(doctor.name || 'Unknown Doctor')}</div>
            <div class="doctor-specialty">${escapeHtml(doctor.specialty || '')}</div>
            ${doctor.specialtyHebrew ? `<div class="quick-btn-hebrew" style="font-size: 0.85rem; margin-bottom: 10px;">${escapeHtml(doctor.specialtyHebrew)}</div>` : ''}
            ${doctor.description ? `<div class="doctor-info">${escapeHtml(doctor.description)}</div>` : ''}
            ${doctor.descriptionHebrew ? `<div class="quick-btn-hebrew" style="font-size: 0.8rem; margin-bottom: 10px;">${escapeHtml(doctor.descriptionHebrew)}</div>` : ''}
            <div class="doctor-info" style="margin-top: 10px; color: #764ba2; font-weight: bold;">
                ${price.original} ₪
                ${price.discounted !== price.original ? `<span style="color: #10b981; margin-left: 10px;">${price.discounted} ₪ ${currentUser && currentUser.discount ? `(${currentUser.discount}% off)` : ''}</span>` : ''}
            </div>
            ${currentUser ? `
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${doctor.id})">
                    ${isFavorite ? '★ Remove from Favorites' : '☆ Add to Favorites'}
                </button>
            ` : ''}
        `;
        
        // Add animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        doctorsGrid.appendChild(card);
        
        // Animate in
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 20);
    });
    
    console.log(`✅ Successfully rendered ${doctors.length} doctors`);
}

/**
 * Helper function to escape HTML to prevent XSS
 */
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Search doctors by search term
 * Searches in: name, specialty, specialtyHebrew, category, categoryHebrew, description, descriptionHebrew
 * @param {string} searchTerm - The search term
 * @returns {Array} Filtered array of doctors
 */
function searchDoctors(searchTerm) {
    console.log('🔧 NEW MODULE: searchDoctors()');
    console.log(`🔍 Search term: "${searchTerm}"`);
    
    // Validate doctorsData
    if (!doctorsData || !Array.isArray(doctorsData) || doctorsData.length === 0) {
        console.error('❌ doctorsData is empty or invalid');
        return [];
    }
    
    // If empty search, return all doctors
    if (!searchTerm || searchTerm.trim() === '') {
        console.log('ℹ️ Empty search - returning all doctors');
        return doctorsData;
    }
    
    const term = searchTerm.trim().toLowerCase();
    
    // Filter doctors
    const results = doctorsData.filter(doctor => {
        if (!doctor) return false;
        
        // Search in all relevant fields
        const fieldsToSearch = [
            doctor.name,
            doctor.specialty,
            doctor.specialtyHebrew,
            doctor.category,
            doctor.categoryHebrew,
            doctor.description,
            doctor.descriptionHebrew
        ];
        
        // Check if any field contains the search term
        return fieldsToSearch.some(field => {
            if (!field) return false;
            return field.toString().toLowerCase().includes(term);
        });
    });
    
    console.log(`📊 Found ${results.length} matching doctors`);
    return results;
}

/**
 * Handle doctors search from UI
 * Called when user clicks search button or presses Enter
 */
function handleDoctorsSearch() {
    console.log('🔧 NEW MODULE: handleDoctorsSearch()');
    
    const searchInput = document.getElementById('generalSearch');
    if (!searchInput) {
        console.error('❌ Search input not found (id="generalSearch")');
        return;
    }
    
    const searchTerm = searchInput.value.trim();
    console.log(`🔍 Searching for: "${searchTerm}"`);
    
    // Hide results section (if it exists from old code)
    const resultsSection = document.getElementById('resultsSection');
    if (resultsSection) {
        resultsSection.style.display = 'none';
    }
    
    // Search and render
    const filteredDoctors = searchDoctors(searchTerm);
    renderDoctorsList(filteredDoctors);
    
    // Scroll to doctors section
    const doctorsSection = document.getElementById('doctors');
    if (doctorsSection) {
        setTimeout(() => {
            doctorsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

/**
 * Initialize the doctors module
 * Called on page load to show all doctors
 */
function initDoctorsModule() {
    console.log('🔧 NEW MODULE: initDoctorsModule()');
    
    // Validate doctorsData
    if (!doctorsData || !Array.isArray(doctorsData) || doctorsData.length === 0) {
        console.error('❌ doctorsData is empty or invalid');
        const doctorsGrid = document.getElementById('doctorsGrid');
        if (doctorsGrid) {
            doctorsGrid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">⚠️</div>
                    <div class="empty-state-title">Data Error</div>
                    <div class="empty-state-text">Doctor data is not available.</div>
                </div>
            `;
        }
        return;
    }
    
    console.log(`📊 Initializing with ${doctorsData.length} doctors`);
    
    // Render all doctors initially
    renderDoctorsList(doctorsData);
    
    // Setup search input event listeners
    const searchInput = document.getElementById('generalSearch');
    if (searchInput) {
        // Clear any existing listeners by cloning
        const newSearchInput = searchInput.cloneNode(true);
        searchInput.parentNode.replaceChild(newSearchInput, searchInput);
        
        // Add Enter key listener
        newSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleDoctorsSearch();
            }
        });
        
        console.log('✅ Search input listeners attached');
    } else {
        console.warn('⚠️ Search input not found - search may not work');
    }
    
    console.log('✅ Doctors module initialized');
}

// Doctor categories with icons
const categories = [
    { id: "Cardiology", name: "Cardiology", nameHebrew: "לב", icon: "❤️", description: "Cardiologists and cardiovascular specialists", descriptionHebrew: "רופאי לב וכלי דם" },
    { id: "Ophthalmology", name: "Ophthalmology", nameHebrew: "עיניים", icon: "👁️", description: "Eye doctors", descriptionHebrew: "רופאי עיניים" },
    { id: "Pediatrics", name: "Pediatrics", nameHebrew: "ילדים", icon: "👶", description: "Pediatricians", descriptionHebrew: "רופאי ילדים" },
    { id: "Gynecology", name: "Gynecology", nameHebrew: "נשים", icon: "👩", description: "Gynecologists", descriptionHebrew: "רופאי נשים" },
    { id: "Orthopedics", name: "Orthopedics", nameHebrew: "אורתופדיה", icon: "🦴", description: "Orthopedic surgeons", descriptionHebrew: "רופאי אורתופדיה" },
    { id: "Dermatology", name: "Dermatology", nameHebrew: "עור", icon: "🧴", description: "Dermatologists", descriptionHebrew: "רופאי עור" },
    { id: "ENT", name: "ENT", nameHebrew: "אף אוזן גרון", icon: "👂", description: "Ear, nose and throat specialists", descriptionHebrew: "רופאי אף אוזן גרון" },
    { id: "Family", name: "Family Medicine", nameHebrew: "משפחה", icon: "👨‍👩‍👧‍👦", description: "Family doctors", descriptionHebrew: "רופאי משפחה" },
    { id: "Neurology", name: "Neurology", nameHebrew: "נוירולוגיה", icon: "🧠", description: "Neurologists", descriptionHebrew: "רופאי נוירולוגיה" },
    { id: "Gastroenterology", name: "Gastroenterology", nameHebrew: "גסטרו", icon: "🍽️", description: "Gastroenterologists", descriptionHebrew: "רופאי גסטרו" },
    { id: "Oncology", name: "Oncology", nameHebrew: "אונקולוגיה", icon: "🔬", description: "Oncologists", descriptionHebrew: "רופאי אונקולוגיה" },
    { id: "Psychiatry", name: "Psychiatry", nameHebrew: "פסיכיאטריה", icon: "🧘", description: "Psychiatrists", descriptionHebrew: "רופאי פסיכיאטריה" },
    { id: "Radiology", name: "Radiology", nameHebrew: "רנטגן", icon: "📷", description: "X-ray interpretation", descriptionHebrew: "פענוח צילומי רנטגן" },
    { id: "CT", name: "CT", nameHebrew: "CT", icon: "🖥️", description: "CT scan interpretation", descriptionHebrew: "פענוח בדיקות CT" },
    { id: "MRI", name: "MRI", nameHebrew: "MRI", icon: "🔍", description: "MRI interpretation", descriptionHebrew: "פענוח בדיקות MRI" },
    { id: "Urology", name: "Urology", nameHebrew: "אורולוגיה", icon: "💧", description: "Urologists", descriptionHebrew: "רופאי אורולוגיה" },
    { id: "Nephrology", name: "Nephrology", nameHebrew: "נפרולוגיה", icon: "🫘", description: "Nephrologists", descriptionHebrew: "רופאי נפרולוגיה" },
    { id: "Endocrinology", name: "Endocrinology", nameHebrew: "אנדוקרינולוגיה", icon: "⚕️", description: "Endocrinologists", descriptionHebrew: "רופאי אנדוקרינולוגיה" },
    { id: "Rheumatology", name: "Rheumatology", nameHebrew: "ראומטולוגיה", icon: "🦵", description: "Rheumatologists", descriptionHebrew: "רופאי ראומטולוגיה" },
    { id: "Pulmonology", name: "Pulmonology", nameHebrew: "פולמונולוגיה", icon: "🫁", description: "Pulmonologists", descriptionHebrew: "רופאי פולמונולוגיה" },
    { id: "Hematology", name: "Hematology", nameHebrew: "המטולוגיה", icon: "🩸", description: "Hematologists", descriptionHebrew: "רופאי המטולוגיה" },
    { id: "General Surgery", name: "General Surgery", nameHebrew: "כירורגיה כללית", icon: "⚔️", description: "General surgeons", descriptionHebrew: "רופאי כירורגיה כללית" },
    { id: "Plastic Surgery", name: "Plastic Surgery", nameHebrew: "כירורגיה פלסטית", icon: "✨", description: "Plastic surgeons", descriptionHebrew: "רופאי כירורגיה פלסטית" },
    { id: "Cardiothoracic Surgery", name: "Cardiothoracic Surgery", nameHebrew: "כירורגיה לב-חזה", icon: "💓", description: "Cardiothoracic surgeons", descriptionHebrew: "רופאי כירורגיה לב-חזה" },
    { id: "Emergency Medicine", name: "Emergency Medicine", nameHebrew: "רפואה דחופה", icon: "🚑", description: "Emergency medicine doctors", descriptionHebrew: "רופאי רפואה דחופה" },
    { id: "Internal Medicine", name: "Internal Medicine", nameHebrew: "רפואה פנימית", icon: "🏥", description: "Internal medicine doctors", descriptionHebrew: "רופאי רפואה פנימית" },
    { id: "Geriatrics", name: "Geriatrics", nameHebrew: "גריאטריה", icon: "👴", description: "Geriatricians", descriptionHebrew: "רופאי גריאטריה" },
    { id: "Dentistry", name: "Dentistry", nameHebrew: "שיניים", icon: "🦷", description: "Dentists", descriptionHebrew: "רופאי שיניים" },
    { id: "Orthodontics", name: "Orthodontics", nameHebrew: "אורתודונטיה", icon: "😁", description: "Orthodontists", descriptionHebrew: "רופאי אורתודונטיה" },
    { id: "Periodontics", name: "Periodontics", nameHebrew: "פריודונטיה", icon: "🦷", description: "Periodontists", descriptionHebrew: "רופאי פריודונטיה" },
    { id: "Anesthesiology", name: "Anesthesiology", nameHebrew: "אנסטזיה", icon: "💉", description: "Anesthesiologists", descriptionHebrew: "רופאי אנסטזיה" },
    { id: "Pathology", name: "Pathology", nameHebrew: "פתולוגיה", icon: "🔬", description: "Pathologists", descriptionHebrew: "רופאי פתולוגיה" },
    { id: "Obstetrics", name: "Obstetrics", nameHebrew: "מיילדות", icon: "👶", description: "Obstetricians", descriptionHebrew: "רופאי מיילדות" },
    { id: "Alternative Medicine", name: "Alternative Medicine", nameHebrew: "רפואה משלימה", icon: "🌿", description: "Alternative medicine practitioners", descriptionHebrew: "רופאי רפואה משלימה" },
    { id: "Sports Medicine", name: "Sports Medicine", nameHebrew: "רפואה ספורטיבית", icon: "🏃", description: "Sports medicine doctors", descriptionHebrew: "רופאי רפואה ספורטיבית" },
    { id: "Nutrition", name: "Nutrition", nameHebrew: "תזונה", icon: "🥗", description: "Nutritionists", descriptionHebrew: "רופאי תזונה" },
    { id: "Physiotherapy", name: "Physiotherapy", nameHebrew: "פיזיותרפיה", icon: "💪", description: "Physiotherapists", descriptionHebrew: "רופאי פיזיותרפיה" },
    { id: "Psychology", name: "Psychology", nameHebrew: "פסיכולוגיה", icon: "🧠", description: "Psychologists", descriptionHebrew: "רופאי פסיכולוגיה" },
    { id: "Consultation", name: "Doctor Consultation", nameHebrew: "שיחה עם רופא", icon: "💬", description: "Consultation with a doctor or family physician", descriptionHebrew: "שיחה עם רופא או רופא משפחה" }
];

// Common questions
const commonQuestions = [
    {
        question: "I have these symptoms, should I stay home?",
        questionHebrew: "יש לי סימנים כאלה או לאישר בבית?",
        answer: "It depends on the symptoms. If there is high fever, difficulty breathing, or severe pain - it is recommended to consult a doctor or go to the ER.",
        answerHebrew: "תלוי בסימנים. אם יש חום גבוה, קשיי נשימה, או כאבים חזקים - מומלץ לפנות לרופא או למיון."
    },
    {
        question: "I have a high fever - should I go to the ER or stay home?",
        questionHebrew: "יש לי חום גבוה - ללכת למיון או להישאר בבית?",
        answer: "If the fever is above 38.5°C and lasts more than 3 days, or if there are additional symptoms such as difficulty breathing - it is recommended to go to the ER.",
        answerHebrew: "אם החום מעל 38.5 מעלות ונמשך יותר מ-3 ימים, או אם יש סימנים נוספים כמו קשיי נשימה - מומלץ לפנות למיון."
    },
    {
        question: "How long do I need to wait for test results interpretation?",
        questionHebrew: "כמה זמן צריך לחכות לפענוח בדיקות?",
        answer: "Interpretation time depends on the type of test. Simple blood tests - 1-2 days, imaging tests - 3-7 days.",
        answerHebrew: "זמן הפענוח תלוי בסוג הבדיקה. בדיקות דם פשוטות - יום-יומיים, בדיקות הדמיה - 3-7 ימים."
    }
];

// Global variables
let userHealthFund = '';
let userLocation = '';
let userEmail = '';
let currentUser = null;
let userFavorites = [];
let currentCategoryGroup = 'all';

// Category Groups for better organization
const categoryGroups = {
    'all': { name: 'All Categories', nameHebrew: 'כל הקטגוריות', categories: [] },
    'general': { name: 'General Medicine', nameHebrew: 'רפואה כללית', categories: ['Family', 'Internal Medicine', 'Emergency Medicine', 'Geriatrics'] },
    'specialists': { name: 'Specialists', nameHebrew: 'מומחים', categories: ['Cardiology', 'Ophthalmology', 'Pediatrics', 'Gynecology', 'Dermatology', 'ENT', 'Urology', 'Nephrology', 'Endocrinology', 'Rheumatology', 'Pulmonology', 'Hematology'] },
    'surgery': { name: 'Surgery', nameHebrew: 'כירורגיה', categories: ['General Surgery', 'Plastic Surgery', 'Cardiothoracic Surgery', 'Orthopedics'] },
    'imaging': { name: 'Medical Imaging', nameHebrew: 'הדמיה רפואית', categories: ['Radiology', 'CT', 'MRI'] },
    'mental': { name: 'Mental Health', nameHebrew: 'בריאות נפשית', categories: ['Psychiatry', 'Psychology'] },
    'dental': { name: 'Dental', nameHebrew: 'רפואת שיניים', categories: ['Dentistry', 'Orthodontics', 'Periodontics'] },
    'other': { name: 'Other', nameHebrew: 'אחר', categories: ['Anesthesiology', 'Pathology', 'Obstetrics', 'Alternative Medicine', 'Sports Medicine', 'Nutrition', 'Physiotherapy', 'Consultation', 'Neurology', 'Gastroenterology', 'Oncology'] }
};

/**
 * פונקציית Debounce לאופטימיזציית ביצועים
 * דוחה את ביצוע הפונקציה עד שהמשתמש מפסיק להזין קלט
 * @param {Function} func - הפונקציה לביצוע
 * @param {number} wait - זמן ההמתנה במילישניות
 * @returns {Function} פונקציה מושהית
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * פונקציית Throttle לאופטימיזציית ביצועים
 * מגבילה את תדירות ביצוע הפונקציה
 * @param {Function} func - הפונקציה לביצוע
 * @param {number} limit - זמן ההמתנה במילישניות
 * @returns {Function} פונקציה מוגבלת
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Show loading state
function showLoading(element, text = 'Loading...') {
    if (element) {
        const originalContent = element.innerHTML;
        element.dataset.originalContent = originalContent;
        element.innerHTML = `<div style="text-align: center; padding: 20px;">
            <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #1e3a8a; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <p style="margin-top: 10px; color: #1e3a8a;">${text}</p>
        </div>`;
        element.style.opacity = '0.7';
    }
}

// Hide loading state
function hideLoading(element) {
    if (element && element.dataset.originalContent) {
        element.innerHTML = element.dataset.originalContent;
        element.style.opacity = '1';
        delete element.dataset.originalContent;
    }
}

// Add smooth fade-in animation
function fadeInElement(element, duration = 300) {
    if (!element) return;
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms ease-in`;
    requestAnimationFrame(() => {
        element.style.opacity = '1';
    });
}

/**
 * הסתרת מסך הטעינה
 * מסתיר את מסך הטעינה הראשוני עם אנימציה חלקה
 */

/**
 * הצגת הודעת Toast
 * מציגה הודעת הצלחה או שגיאה למשתמש
 * @param {string} message - תוכן ההודעה
 * @param {string} type - סוג ההודעה ('success' או 'error')
 */
function showToast(message, type = 'success') {
    console.log(`🔔 Toast: ${type} - ${message}`);
    
    const toastId = type === 'error' ? 'errorToast' : 'successToast';
    const toast = document.getElementById(toastId);
    const messageEl = toast.querySelector('.toast-message');
    
    if (toast && messageEl) {
        messageEl.textContent = message;
        toast.classList.add('show');
        
        // Announce to screen readers - WCAG 2.2 AAA
        if (window.announceToScreenReader) {
            window.announceToScreenReader(message, type === 'error' ? 'assertive' : 'polite');
        }
        
        // Focus management - move focus to toast for keyboard users
        const closeBtn = toast.querySelector('.toast-close');
        if (closeBtn) {
            closeBtn.focus();
        }
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            closeToast(toastId);
        }, 5000);
    }
}

// Close toast
function closeToast(toastId) {
    const toast = toastId ? document.getElementById(toastId) : document.querySelector('.toast.show');
    if (toast) {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.style.display = 'none';
        }, 400);
    }
}

// Show error message
function showError(fieldId, message) {
    const errorEl = document.getElementById(fieldId + 'Error');
    const field = document.getElementById(fieldId);
    
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('show');
    }
    
    if (field) {
        field.setAttribute('aria-invalid', 'true');
        field.classList.add('error');
    }
}

// Clear error message
function clearError(fieldId) {
    const errorEl = document.getElementById(fieldId + 'Error');
    const field = document.getElementById(fieldId);
    
    if (errorEl) {
        errorEl.classList.remove('show');
        errorEl.textContent = '';
    }
    
    if (field) {
        field.removeAttribute('aria-invalid');
        field.classList.remove('error');
    }
}

// Validate form field
function validateField(fieldId, value, rules) {
    clearError(fieldId);
    
    if (rules.required && !value.trim()) {
        showError(fieldId, rules.requiredMessage || 'This field is required');
        return false;
    }
    
    if (rules.email && value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(fieldId, 'Please enter a valid email address');
            return false;
        }
    }
    
    if (rules.phone && value.trim()) {
        const phoneRegex = /^[0-9-+\s()]+$/;
        if (!phoneRegex.test(value)) {
            showError(fieldId, 'Please enter a valid phone number');
            return false;
        }
    }
    
    if (rules.minLength && value.trim().length < rules.minLength) {
        showError(fieldId, `Minimum ${rules.minLength} characters required`);
        return false;
    }
    
    return true;
}

// Page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('%c=== GFMA Website Initialization ===', 'color: #1e3a8a; font-size: 16px; font-weight: bold;');
    console.log('📋 Checking user session...');
    
    // Check if user has already filled the form
    const savedHealthFund = localStorage.getItem('healthFund');
    const savedLocation = localStorage.getItem('location');
    const savedEmail = localStorage.getItem('userEmail');
    
    console.log('📦 LocalStorage Data:', {
        healthFund: savedHealthFund || 'Not set',
        location: savedLocation || 'Not set',
        email: savedEmail ? savedEmail.substring(0, 3) + '***' : 'Not set'
    });
    
    if (savedHealthFund && savedLocation && savedEmail) {
        console.log('✅ User session found - Loading main content');
        userHealthFund = savedHealthFund;
        userLocation = savedLocation;
        userEmail = savedEmail;
        showMainContent();
    } else {
        console.log('ℹ️ No user session - Showing initial form');
        showInitialModal();
    }
    
    // Initialize analytics (ready for Google Analytics, etc.)
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            page_path: window.location.pathname
        });
    }
    
    console.log('✅ Initialization complete');
    console.log('=====================================');
});


// Display main content
function showMainContent() {
    console.log('🔧 Function: showMainContent()');
    console.log('📝 Purpose: Display main website content');
    console.log('👤 User Info:', { healthFund: userHealthFund, location: userLocation, email: userEmail ? userEmail.substring(0, 3) + '***' : 'N/A' });
    
    const modal = document.getElementById('initialModal');
    const mainContent = document.getElementById('mainContent');
    
    // Hide modal first - force it
    if (modal) {
        modal.style.display = 'none';
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
        modal.style.zIndex = '-1';
        console.log('✅ Modal hidden');
    }
    
    if (mainContent) {
        // Force display block - remove all hiding
        mainContent.style.display = 'block';
        mainContent.style.visibility = 'visible';
        mainContent.style.opacity = '1';
        mainContent.style.position = 'relative';
        mainContent.style.zIndex = '1';
        fadeInElement(mainContent, 400);
        console.log('✅ Main content displayed');
        
        // Load content with smooth animations
        console.log('📊 Loading content modules...');
        const startTime = performance.now();
        
        loadCategories();
        loadCategoryGroups();
        loadCurrentUser(); // Load registered user first
        updateUserInfoDisplay(); // Update display after loading user
        // NEW: Initialize doctors module
        initDoctorsModule();
        loadCommonQuestions();
        loadFavorites();
        
        // Re-setup search listeners now that content is visible
        setTimeout(function() {
            const generalSearch = document.getElementById('generalSearch');
            if (generalSearch) {
                // Ensure search input has proper event listeners
                if (!generalSearch.hasAttribute('data-listeners-set')) {
                    generalSearch.setAttribute('data-listeners-set', 'true');
                    console.log('✅ Re-verifying search listeners after content load');
                }
            }
        }, 100);
        
        const endTime = performance.now();
        console.log(`⏱️ Content loaded in ${(endTime - startTime).toFixed(2)}ms`);
        console.log('✅ All modules loaded successfully');
    } else {
        console.error('❌ Main content element not found');
    }
    
    console.log('✅ Function completed');
}


// Update user info display
function updateUserInfoDisplay() {
    console.log('🔧 Function: updateUserInfoDisplay()');
    console.log('📝 Purpose: Update the user info display in navigation');
    
    const userInfoDisplay = document.getElementById('userInfoDisplay');
    if (!userInfoDisplay) {
        console.error('❌ User info display element not found');
        return;
    }
    
    // Check if user is registered or guest
    if (currentUser) {
        // Registered user
        userInfoDisplay.textContent = `${currentUser.firstName} ${currentUser.lastName} (Registered)`;
        userInfoDisplay.title = `Registered User: ${currentUser.firstName} ${currentUser.lastName} | Phone: ${currentUser.phone} | Discount: ${currentUser.discount}%`;
        console.log('✅ Registered user info displayed:', { name: currentUser.firstName + ' ' + currentUser.lastName });
    } else if (userHealthFund && userLocation && userEmail) {
        // Guest user
        userInfoDisplay.textContent = `${userHealthFund} | ${userLocation} (Guest)`;
        userInfoDisplay.title = `Guest User | Health Fund: ${userHealthFund}, Location: ${userLocation}, Email: ${userEmail}`;
        console.log('✅ Guest user info displayed:', { healthFund: userHealthFund, location: userLocation });
    } else {
        userInfoDisplay.textContent = 'User Info';
        userInfoDisplay.title = 'User Information';
        console.log('ℹ️ Using default user info display');
    }
    
    console.log('✅ Function completed');
}

// Submit initial form
/**
 * הצגת המודל הראשוני
 * מציג את הטופס הראשוני כשהמשתמש נכנס לאתר בפעם הראשונה
 */
function showInitialModal() {
    console.log('🔧 Function: showInitialModal()');
    console.log('📝 Purpose: Show initial welcome modal');
    
    const modal = document.getElementById('initialModal');
    const mainContent = document.getElementById('mainContent');
    
    if (modal) {
        modal.style.display = 'flex';
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
        modal.style.zIndex = '10000';
        console.log('✅ Initial modal displayed');
        
        // Hide main content when showing modal
        if (mainContent) {
            mainContent.style.display = 'none';
        }
    } else {
        console.error('❌ Initial modal element not found');
        // If modal doesn't exist, show main content anyway
        if (mainContent) {
            mainContent.style.display = 'block';
        }
    }
    
    console.log('✅ Function completed');
}

/**
 * שליחת הטופס הראשוני
 * שומר את פרטי המשתמש ב-localStorage ומציג את התוכן הראשי
 * @param {Event} event - אירוע השליחה של הטופס
 */
function submitInitialForm(event) {
    console.log('🔧 Function: submitInitialForm(event)');
    console.log('📝 Purpose: Submit initial welcome form');
    
    event.preventDefault();
    
    const healthFund = document.getElementById('initialHealthFund').value.trim();
    const location = document.getElementById('initialLocation').value.trim();
    const email = document.getElementById('initialEmail').value.trim();
    
    console.log('📋 Form Data:', { 
        healthFund: healthFund || 'Not provided', 
        location: location || 'Not provided',
        email: email ? email.substring(0, 3) + '***' : 'Not provided'
    });
    
    // Save to localStorage (even if empty)
    if (healthFund) localStorage.setItem('healthFund', healthFund);
    if (location) localStorage.setItem('location', location);
    if (email) localStorage.setItem('userEmail', email);
    
    // Update global variables
    userHealthFund = healthFund || '';
    userLocation = location || '';
    userEmail = email || '';
    
    console.log('💾 Data saved to localStorage');
    
    // Hide modal and show main content
    showMainContent();
    
    console.log('✅ Function completed');
}

/**
 * דילוג על הטופס הראשוני
 * מאפשר למשתמש להמשיך ללא מילוי הטופס (גישה מוגבלת)
 */
function skipInitialForm() {
    console.log('🔧 Function: skipInitialForm()');
    console.log('📝 Purpose: Skip initial form and continue with limited access');
    
    // Don't save anything to localStorage
    // User will have limited access
    userHealthFund = '';
    userLocation = '';
    userEmail = '';
    
    console.log('ℹ️ User chose to skip form - limited access mode');
    
    // Show main content
    showMainContent();
    
    // Show notification
    setTimeout(() => {
        showToast('You are using the site with limited access. Some features require registration.', 'success');
    }, 500);
    
    console.log('✅ Function completed');
}

// Function to change user details
function changeUserDetails() {
    console.log('🔧 Function: changeUserDetails()');
    console.log('📝 Purpose: Reset user session');
    
    localStorage.removeItem('healthFund');
    localStorage.removeItem('location');
    localStorage.removeItem('userEmail');
    console.log('🗑️ User data cleared from localStorage');
    
    userHealthFund = '';
    userLocation = '';
    userEmail = '';
    console.log('✅ User data cleared from memory');
    
    // Main content is always visible now
    showToast('User details cleared. You can update your information in the User Account section.', 'success');
    console.log('✅ Function completed');
}

// Load doctor categories
function loadCategories() {
    console.log('🔧 Function: loadCategories()');
    console.log('📝 Purpose: Load and display doctor category buttons');
    console.log(`📊 Total categories: ${categories.length}`);
    
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) {
        console.error('❌ Categories grid element not found');
        return;
    }

    // Use requestAnimationFrame for smooth rendering
    requestAnimationFrame(() => {
    categoriesGrid.innerHTML = '';
    
        let loadedCount = 0;
        categories.forEach((category, index) => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.innerHTML = `
            <span class="category-icon">${category.icon}</span>
            <span>${category.name}</span>
                <span class="quick-btn-hebrew" style="font-size: 0.7rem; margin-top: 5px;">${category.nameHebrew}</span>
        `;
        btn.onclick = () => searchByCategory(category.id);
            
            // Add smooth fade-in animation
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(10px)';
            btn.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            
        categoriesGrid.appendChild(btn);
            
            // Animate each button with delay
            setTimeout(() => {
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }, index * 20);
            
            loadedCount++;
        });
        
        console.log(`✅ ${loadedCount} categories loaded and displayed`);
        console.log('✅ Function completed');
    });
}

// Create skeleton loading cards
function createSkeletonCards(count) {
    console.log('🔧 Function: createSkeletonCards(count)');
    console.log('📝 Purpose: Create skeleton loading cards');
    console.log(`📊 Count: ${count}`);
    
    const skeletonHTML = Array.from({ length: count }, () => `
        <div class="skeleton-card">
            <div class="skeleton-avatar"></div>
            <div class="skeleton-title"></div>
            <div class="skeleton-text"></div>
            <div class="skeleton-text"></div>
            <div class="skeleton-text"></div>
        </div>
    `).join('');
    
    console.log(`✅ ${count} skeleton cards created`);
    return skeletonHTML;
}

// OLD CODE - REPLACED BY NEW DOCTORS MODULE
// This function is kept for backward compatibility but now uses the new module
function loadDoctors(doctorsToShow = null) {
    console.log('⚠️ OLD loadDoctors() called - redirecting to new module');
    if (doctorsToShow) {
        renderDoctorsList(doctorsToShow);
    } else {
        initDoctorsModule();
    }
}

// OLD CODE - COMMENTED OUT (keeping for reference, but replaced by new module)
/*
function loadDoctors_OLD(doctorsToShow = null) {
    console.log('🔧 Function: loadDoctors()');
    console.log('📝 Purpose: Load and display doctor cards');
    
    // Use provided doctors array, or default to all doctors
    const doctors = doctorsToShow || doctorsData;
    
    console.log(`📊 Total doctors in data: ${doctorsData.length}`);
    console.log(`📊 Doctors to display: ${doctors.length}`);
    
    const doctorsGrid = document.getElementById('doctorsGrid');
    if (!doctorsGrid) {
        console.error('❌ Doctors grid element not found (id="doctorsGrid")');
        // Retry after a short delay
        setTimeout(() => {
            loadDoctors(doctorsToShow);
        }, 100);
        return;
    }

    // Show skeleton loading state
    doctorsGrid.innerHTML = createSkeletonCards(4);
    
    requestAnimationFrame(() => {
        // Check if there are no doctors
        if (!doctors || doctors.length === 0) {
            doctorsGrid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">👨‍⚕️</div>
                    <div class="empty-state-title">No doctors found</div>
                    <div class="empty-state-text">No doctors available at the moment. Please check back later.</div>
                    <button class="empty-state-cta" onclick="loadDoctors()">Reload Doctors</button>
                </div>
            `;
            console.log('ℹ️ No doctors to display - showing empty state');
            return;
        }
        
        doctorsGrid.innerHTML = '';
    
        let loadedCount = 0;
        // Load favorites
        const savedFavorites = localStorage.getItem('userFavorites');
        if (savedFavorites) {
            userFavorites = JSON.parse(savedFavorites);
        }
        
        doctors.forEach((doctor, index) => {
        const card = document.createElement('div');
        card.className = 'doctor-card';
            
            const price = calculatePriceWithDiscount(doctor.price);
            const isFavorite = userFavorites.includes(doctor.id);
            
        card.innerHTML = `
            <div class="doctor-name">${doctor.name}</div>
            <div class="doctor-specialty">${doctor.specialty}</div>
                <div class="quick-btn-hebrew" style="font-size: 0.85rem; margin-bottom: 10px;">${doctor.specialtyHebrew}</div>
            <div class="doctor-info">${doctor.description}</div>
                <div class="quick-btn-hebrew" style="font-size: 0.8rem; margin-bottom: 10px;">${doctor.descriptionHebrew}</div>
                <div class="doctor-info" style="margin-top: 10px; color: #764ba2; font-weight: bold;">
                    ${price.original} ₪
                    ${price.discounted !== price.original ? `<span style="color: #10b981; margin-left: 10px;">${price.discounted} ₪ (${currentUser ? currentUser.discount : 0}% off)</span>` : ''}
                </div>
                ${currentUser ? `<button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${doctor.id})">
                    ${isFavorite ? '★ Remove from Favorites' : '☆ Add to Favorites'}
                </button>` : (userHealthFund && userLocation && userEmail ? '<p style="font-size: 0.85rem; color: #64748b; margin-top: 10px; font-style: italic;">Register as user to add favorites and get discounts</p><p class="form-label-hebrew" style="font-size: 0.75rem; margin-top: 2px;">הירשם כמשתמש כדי להוסיף מועדפים ולקבל הנחות</p>' : '<p style="font-size: 0.85rem; color: #f59e0b; margin-top: 10px; font-style: italic; font-weight: 600;">⚠️ Limited access - Fill initial form or register for full features</p><p class="form-label-hebrew" style="font-size: 0.75rem; margin-top: 2px; color: #f59e0b; font-weight: 600;">⚠️ גישה מוגבלת - מלא את הטופס הראשוני או הירשם לתכונות מלאות</p>')}
            `;
            
            // Add smooth fade-in animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            
        doctorsGrid.appendChild(card);
            
            // Animate each card with delay
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 15);
            
            loadedCount++;
        });
        
        console.log(`✅ ${loadedCount} doctors loaded and displayed`);
        console.log('✅ Function completed');
    });
}

// Load common questions
function loadCommonQuestions() {
    console.log('🔧 Function: loadCommonQuestions()');
    console.log('📝 Purpose: Load and display common questions');
    console.log(`📊 Total questions: ${commonQuestions.length}`);
    
    const questionsList = document.getElementById('questionsList');
    if (!questionsList) {
        console.error('❌ Questions list element not found');
        return;
    }

    questionsList.innerHTML = '';
    
    commonQuestions.forEach((q, index) => {
        const item = document.createElement('div');
        item.className = 'question-item';
        item.innerHTML = `
            <div class="question-text">${q.question}</div>
            <div class="quick-btn-hebrew" style="font-size: 0.9rem; margin-bottom: 10px; font-weight: 600;">${q.questionHebrew}</div>
            <div class="question-answer">${q.answer}</div>
            <div class="quick-btn-hebrew" style="font-size: 0.85rem; margin-top: 5px; font-style: italic;">${q.answerHebrew}</div>
        `;
        
        // Add smooth fade-in animation
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        questionsList.appendChild(item);
        
        // Animate each item with delay
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 100);
    });
    
    console.log(`✅ ${commonQuestions.length} questions loaded and displayed`);
    console.log('✅ Function completed');
}

// General search (with debounce for performance)
const performGeneralSearchDebounced = debounce(function() {
    console.log('🔧 Function: performGeneralSearch()');
    console.log('📝 Purpose: Perform general search across doctors database');
    
    const searchInput = document.getElementById('generalSearch');
    if (!searchInput) {
        console.error('❌ Search input element not found (id="generalSearch")');
        showToast('Search functionality is not available. Please refresh the page.', 'error');
        return;
    }
    
    // Check if doctorsData exists and has data
    if (!doctorsData || doctorsData.length === 0) {
        console.error('❌ doctorsData is empty or undefined');
        showToast('Doctor data is not available. Please refresh the page.', 'error');
        return;
    }
    
    const searchTerm = searchInput.value.trim();
    console.log(`🔍 Search term: "${searchTerm}"`);
    
    if (!searchTerm) {
        console.warn('⚠️ Empty search term - clearing search and showing all doctors');
        // Clear search results section
        const resultsSection = document.getElementById('resultsSection');
        if (resultsSection) {
            resultsSection.style.display = 'none';
        }
        // Reload all doctors
        loadDoctors();
        return;
    }

    const startTime = performance.now();
    const term = searchTerm.toLowerCase();
    
    // Comprehensive search across all doctor fields
    const results = doctorsData.filter(doctor => {
        if (!doctor) return false;
        
        const nameMatch = doctor.name && doctor.name.toLowerCase().includes(term);
        const specialtyMatch = doctor.specialty && doctor.specialty.toLowerCase().includes(term);
        const specialtyHebrewMatch = doctor.specialtyHebrew && doctor.specialtyHebrew.includes(searchTerm);
        const categoryMatch = doctor.category && doctor.category.toLowerCase().includes(term);
        const categoryHebrewMatch = doctor.categoryHebrew && doctor.categoryHebrew.includes(searchTerm);
        const descriptionMatch = doctor.description && doctor.description.toLowerCase().includes(term);
        const descriptionHebrewMatch = doctor.descriptionHebrew && doctor.descriptionHebrew.includes(searchTerm);
        
        return nameMatch || specialtyMatch || specialtyHebrewMatch || 
               categoryMatch || categoryHebrewMatch || 
               descriptionMatch || descriptionHebrewMatch;
    });
    
    const endTime = performance.now();
    
    console.log(`⏱️ Search completed in ${(endTime - startTime).toFixed(2)}ms`);
    console.log(`📊 Results found: ${results.length}`);
    if (results.length > 0) {
        console.log('📋 Results:', results.map(r => r.name));
    } else {
        console.log('ℹ️ No results found for search term:', searchTerm);
    }

    displayResults(results, `Search results for: "${searchTerm}"`);
    console.log('✅ Function completed');
}, 300);

// OLD CODE - REPLACED BY NEW DOCTORS MODULE
// This function is kept for backward compatibility but now uses the new module
function performGeneralSearch() {
    console.log('⚠️ OLD performGeneralSearch() called - redirecting to new module');
    handleDoctorsSearch();
}

// OLD CODE - COMMENTED OUT (keeping for reference, but replaced by new module)
/*
function performGeneralSearch_OLD() {
    console.log('🔍 performGeneralSearch() called');
    try {
        performGeneralSearchDebounced();
    } catch (error) {
        console.error('❌ Error in performGeneralSearch:', error);
        showToast('An error occurred during search. Please try again.', 'error');
    }
}
*/

// Search by category
function searchByCategory(categoryId) {
    console.log('🔧 Function: searchByCategory(categoryId)');
    console.log('📝 Purpose: Search doctors by specific category');
    console.log(`🏷️ Category ID: "${categoryId}"`);
    
    const startTime = performance.now();
    const results = doctorsData.filter(doctor => 
        doctor.category === categoryId
    );
    const endTime = performance.now();
    
    const category = categories.find(c => c.id === categoryId);
    const categoryName = category ? category.name : categoryId;
    
    console.log(`⏱️ Search completed in ${(endTime - startTime).toFixed(2)}ms`);
    console.log(`📊 Results found: ${results.length} doctors in category "${categoryName}"`);
    if (results.length > 0) {
        console.log('📋 Results:', results.map(r => r.name));
    }

    displayResults(results, `Doctors in category: ${categoryName}`);
    console.log('✅ Function completed');
}

// Display search results
function displayResults(results, title) {
    console.log('🔧 Function: displayResults(results, title)');
    console.log('📝 Purpose: Display search results with smooth animation');
    console.log(`📊 Results count: ${results ? results.length : 0}`);
    console.log(`📝 Title: "${title}"`);
    
    const resultsSection = document.getElementById('resultsSection');
    const resultsContainer = document.getElementById('resultsContainer');
    
    if (!resultsSection) {
        console.error('❌ Results section element not found (id="resultsSection")');
        return;
    }
    
    if (!resultsContainer) {
        console.error('❌ Results container element not found (id="resultsContainer")');
        return;
    }
    
    // Ensure results is an array
    if (!results || !Array.isArray(results)) {
        console.error('❌ Results is not an array:', results);
        results = [];
    }

    // Show skeleton loading state
    resultsContainer.innerHTML = createSkeletonCards(4);
    
    requestAnimationFrame(() => {
        // Show results section
        resultsSection.style.display = 'block';
        fadeInElement(resultsSection, 300);
        
        // Scroll to results section
        setTimeout(() => {
            resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        
        resultsContainer.innerHTML = `<h3 style="font-size: 1.8rem; color: #667eea; margin-bottom: 20px;">${title}</h3>`;

        if (results.length === 0) {
            resultsContainer.innerHTML += `
                <div class="empty-state">
                    <div class="empty-state-icon">🔍</div>
                    <div class="empty-state-title">No results found</div>
                    <div class="empty-state-text">Try adjusting your filters or search terms.</div>
                    <button class="empty-state-cta" onclick="document.getElementById('generalSearch').value = ''; document.getElementById('generalSearch').focus();">New search</button>
                </div>
            `;
            console.log('ℹ️ No results to display - showing empty state');
        return;
    }

        // Load favorites if user exists
        const savedFavorites = localStorage.getItem('userFavorites');
        let favorites = [];
        if (savedFavorites) {
            favorites = JSON.parse(savedFavorites);
        }

        results.forEach((doctor, index) => {
        const item = document.createElement('div');
        item.className = 'result-item';
            
            const price = calculatePriceWithDiscount(doctor.price);
            const isFavorite = favorites.includes(doctor.id);
            
        item.innerHTML = `
            <div class="result-title">${doctor.name}</div>
            <div class="result-description">
                    <strong>Specialty:</strong> ${doctor.specialty}<br>
                    <span class="quick-btn-hebrew" style="font-size: 0.85rem;">${doctor.specialtyHebrew}</span><br>
                    <strong>Category:</strong> ${doctor.category}<br>
                    <span class="quick-btn-hebrew" style="font-size: 0.85rem;">${doctor.categoryHebrew}</span><br>
                    <strong>Price:</strong> 
                    ${price.original} ₪
                    ${price.discounted !== price.original ? `<span style="color: #10b981; margin-left: 10px;">${price.discounted} ₪ (${currentUser ? currentUser.discount : 0}% off)</span>` : ''}
                    <br>
                    <strong>Description:</strong> ${doctor.description}<br>
                    <span class="quick-btn-hebrew" style="font-size: 0.85rem;">${doctor.descriptionHebrew}</span>
                    ${currentUser ? `<br><button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavoriteAndRefresh(${doctor.id}, '${title.replace(/'/g, "\\'")}')" style="margin-top: 10px;">
                        ${isFavorite ? '★ Remove from Favorites' : '☆ Add to Favorites'}
                    </button>` : (userHealthFund && userLocation && userEmail ? '<p style="font-size: 0.85rem; color: #64748b; margin-top: 10px; font-style: italic;">Register as user to add favorites and get discounts</p><p class="form-label-hebrew" style="font-size: 0.75rem; margin-top: 2px;">הירשם כמשתמש כדי להוסיף מועדפים ולקבל הנחות</p>' : '<p style="font-size: 0.85rem; color: #f59e0b; margin-top: 10px; font-style: italic; font-weight: 600;">⚠️ Limited access - Fill initial form or register for full features</p><p class="form-label-hebrew" style="font-size: 0.75rem; margin-top: 2px; color: #f59e0b; font-weight: 600;">⚠️ גישה מוגבלת - מלא את הטופס הראשוני או הירשם לתכונות מלאות</p>')}
            </div>
        `;
            
            // Add smooth fade-in animation
            item.style.opacity = '0';
            item.style.transform = 'translateY(15px)';
            item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            
        resultsContainer.appendChild(item);
            
            // Animate each item with delay
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 50);
        });
        
        console.log(`✅ ${results.length} results displayed with animations`);
        console.log('✅ Function completed');
    });
}

// Clear search and show all doctors
function clearSearch() {
    console.log('🔧 Function: clearSearch()');
    console.log('📝 Purpose: Clear search and show all doctors');
    
    const searchInput = document.getElementById('generalSearch');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Hide results section
    const resultsSection = document.getElementById('resultsSection');
    if (resultsSection) {
        resultsSection.style.display = 'none';
    }
    
    // Show all doctors
    loadDoctors();
    
    console.log('✅ Search cleared, all doctors shown');
}

// Submit question to doctor
function submitQuestion() {
    console.log('🔧 Function: submitQuestion()');
    console.log('📝 Purpose: Submit a question to a doctor');
    
    const questionText = document.getElementById('questionText').value.trim();
    console.log(`❓ Question length: ${questionText.length} characters`);
    
    if (!questionText) {
        console.warn('⚠️ Empty question');
        showToast('Please enter a question', 'error');
        document.getElementById('questionText').focus();
        return;
    }

    if (!userEmail) {
        console.warn('⚠️ User email not found');
        showToast('Email address is required. Please fill in the initial form or register as a user to submit questions. / כתובת אימייל נדרשת. אנא מלא את הטופס הראשוני או הירשם כמשתמש כדי לשלוח שאלות.', 'error');
        // Scroll to user section
        setTimeout(() => {
            document.getElementById('user')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 500);
        return;
    }

    console.log('📧 Preparing to send emails...');
    
    // Simulate sending emails
    // In production, this would send actual emails:
    // 1. Confirmation email to the doctor
    // 2. Copy to the user
    console.log('📨 Email 1: Confirmation to doctor');
    console.log('📨 Email 2: Copy to user:', userEmail.substring(0, 3) + '***');
    console.log('📝 Question preview:', questionText.substring(0, 50) + '...');

    // Show success message with smooth animation
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            submitBtn.style.transform = 'scale(1)';
        }, 150);
    }
    
    showToast('Your question has been sent successfully! A certified doctor will answer you soon.', 'success');
    
    // Reset form with animation
    const textarea = document.getElementById('questionText');
    textarea.style.transition = 'opacity 0.3s ease';
    textarea.style.opacity = '0.5';
    setTimeout(() => {
        textarea.value = '';
        textarea.style.opacity = '1';
    }, 200);
    
    // Add question to list
    addQuestionToList(questionText);
    
    console.log('✅ Question submitted successfully');
    console.log('✅ Function completed');
}

// Add question to list
function addQuestionToList(questionText) {
    console.log('🔧 Function: addQuestionToList(questionText)');
    console.log('📝 Purpose: Add submitted question to the questions list');
    
    const questionsList = document.getElementById('questionsList');
    if (!questionsList) {
        console.error('❌ Questions list element not found');
        return;
    }

    const item = document.createElement('div');
    item.className = 'question-item';
    item.innerHTML = `
        <div class="question-text">${questionText}</div>
        <div class="question-answer" style="color: #667eea;">Question sent - waiting for answer from certified doctor</div>
    `;
    
    // Add smooth slide-in animation
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    
    questionsList.insertBefore(item, questionsList.firstChild);
    
    // Animate in
    requestAnimationFrame(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
    });
    
    console.log('✅ Question added to list with animation');
    console.log('✅ Function completed');
}

// Search with Enter and real-time suggestions (with debounce)
const showSearchSuggestionsDebounced = debounce(function(searchTerm) {
    console.log('🔧 Function: showSearchSuggestions(searchTerm)');
    console.log('📝 Purpose: Show real-time search suggestions');
    console.log(`🔍 Search term: "${searchTerm}"`);
    
    const suggestionsDiv = document.getElementById('searchSuggestions');
    if (!suggestionsDiv) {
        console.error('❌ Suggestions div not found');
        return;
    }
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    const suggestions = [];
    
    // Search in categories
    categories.forEach(cat => {
        if (cat.name.toLowerCase().includes(lowerSearchTerm) || cat.description.toLowerCase().includes(lowerSearchTerm)) {
            suggestions.push({ type: 'category', name: cat.name, nameHebrew: cat.nameHebrew, icon: cat.icon, data: cat });
        }
    });
    
    // Search in doctors
    doctorsData.forEach(doctor => {
        if (doctor.name.toLowerCase().includes(lowerSearchTerm) || 
            doctor.specialty.toLowerCase().includes(lowerSearchTerm) || 
            doctor.category.toLowerCase().includes(lowerSearchTerm)) {
            suggestions.push({ type: 'doctor', name: doctor.name, specialty: doctor.specialty, specialtyHebrew: doctor.specialtyHebrew, data: doctor });
        }
    });
    
    // Limit to 5 suggestions
    suggestions.splice(5);
    
    console.log(`📊 Found ${suggestions.length} suggestions`);
    
    if (suggestions.length > 0) {
        suggestionsDiv.innerHTML = '';
        suggestions.forEach((suggestion, index) => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            
            if (suggestion.type === 'category') {
                item.innerHTML = `${suggestion.icon} ${suggestion.name} - ${suggestion.data.description}`;
                item.onclick = () => {
                    console.log(`✅ Suggestion clicked: Category "${suggestion.name}"`);
                    searchByCategory(suggestion.data.id);
                    hideSuggestions();
                    document.getElementById('generalSearch').value = '';
                };
            } else {
                item.innerHTML = `👨‍⚕️ ${suggestion.name} - ${suggestion.specialty}`;
                item.onclick = () => {
                    console.log(`✅ Suggestion clicked: Doctor "${suggestion.name}"`);
                    displayResults([suggestion.data], `Search results for: ${suggestion.name}`);
                    hideSuggestions();
                    document.getElementById('generalSearch').value = '';
                };
            }
            
            // Add smooth fade-in
            item.style.opacity = '0';
            item.style.transition = 'opacity 0.2s ease';
            
            suggestionsDiv.appendChild(item);
            
            setTimeout(() => {
                item.style.opacity = '1';
            }, index * 50);
        });
        suggestionsDiv.classList.add('show');
        fadeInElement(suggestionsDiv, 200);
        console.log('✅ Suggestions displayed');
    } else {
        hideSuggestions();
        console.log('ℹ️ No suggestions found');
    }
    
    console.log('✅ Function completed');
}, 200);

function showSearchSuggestions(searchTerm) {
    if (searchTerm.length > 0) {
        showSearchSuggestionsDebounced(searchTerm);
    } else {
        hideSuggestions();
    }
}

// Hide suggestions
function hideSuggestions() {
    const suggestionsDiv = document.getElementById('searchSuggestions');
    if (suggestionsDiv) {
        suggestionsDiv.classList.remove('show');
    }
}

// Scroll to top (with throttle for performance)
const scrollToTopThrottled = throttle(function() {
    console.log('🔧 Function: scrollToTop()');
    console.log('📝 Purpose: Smooth scroll to top of page');
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    console.log('✅ Scrolled to top');
    console.log('✅ Function completed');
}, 1000);

function scrollToTop() {
    scrollToTopThrottled();
}

// Toggle mobile menu (Hamburger)
function toggleMobileMenu() {
    console.log('🔧 Function: toggleMobileMenu()');
    console.log('📝 Purpose: Toggle mobile hamburger menu');
    
    const navLinks = document.getElementById('navLinks');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    
    if (!navLinks || !hamburgerBtn) {
        console.error('❌ Menu elements not found');
        return;
    }
    
    const isActive = navLinks.classList.contains('active');
    
    if (isActive) {
        navLinks.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        console.log('✅ Menu closed');
    } else {
        navLinks.classList.add('active');
        hamburgerBtn.classList.add('active');
        console.log('✅ Menu opened');
    }
    
    console.log('✅ Function completed');
}

// Close mobile menu
function closeMobileMenu() {
    console.log('🔧 Function: closeMobileMenu()');
    console.log('📝 Purpose: Close mobile hamburger menu');
    
    const navLinks = document.getElementById('navLinks');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    
    if (navLinks && hamburgerBtn) {
        navLinks.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        console.log('✅ Menu closed');
    }
    
    console.log('✅ Function completed');
}

// Event listeners setup
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 Setting up event listeners...');
    
    // Setup search input listeners
    const generalSearch = document.getElementById('generalSearch');
    if (generalSearch) {
        // NEW: Use the new doctors module search function
        generalSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                console.log('⌨️ Enter key pressed - Using new doctors module search');
                e.preventDefault();
                handleDoctorsSearch(); // Use new module function
                hideSuggestions();
            }
        });
        
        // Real-time suggestions (optional - can be kept or removed)
        generalSearch.addEventListener('input', function() {
            const searchTerm = this.value.trim();
            if (searchTerm.length > 0) {
                if (typeof showSearchSuggestions === 'function') {
                    showSearchSuggestions(searchTerm);
                }
            } else {
                hideSuggestions();
            }
        });
        
        console.log('✅ Search input listeners attached (using new doctors module)');
    } else {
        console.warn('⚠️ Search input element not found on initial load - will be available after content loads');
    }
    
    // Close suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-box') && !e.target.closest('.search-suggestions')) {
            hideSuggestions();
        }
    });
    
    // Navigation hide/show on scroll
    let lastScrollY = window.pageYOffset;
    let isScrolling = false;
    
    // Scroll to top button and navigation hide/show (with throttle)
    const scrollHandler = throttle(function() {
        const scrollBtn = document.getElementById('scrollToTop');
        const quickNav = document.querySelector('.quick-nav');
        const currentScrollY = window.pageYOffset;
        
        // Scroll to top button
        if (scrollBtn) {
            if (currentScrollY > 300) {
                if (!scrollBtn.classList.contains('show')) {
                    console.log('👆 Scroll button shown');
                }
                scrollBtn.classList.add('show');
            } else {
                if (scrollBtn.classList.contains('show')) {
                    console.log('👆 Scroll button hidden');
                }
                scrollBtn.classList.remove('show');
            }
        }
        
        // Navigation hide/show logic
        if (quickNav) {
            // Always show nav at the top
            if (currentScrollY < 50) {
                quickNav.classList.remove('hidden');
                console.log('📌 Nav shown - at top');
            } else {
                // Hide when scrolling down, show when scrolling up
                if (currentScrollY > lastScrollY) {
                    // Scrolling down
                    if (!quickNav.classList.contains('hidden')) {
                        quickNav.classList.add('hidden');
                        console.log('⬇️ Nav hidden - scrolling down');
                    }
                } else {
                    // Scrolling up
                    if (quickNav.classList.contains('hidden')) {
                        quickNav.classList.remove('hidden');
                        console.log('⬆️ Nav shown - scrolling up');
                    }
                }
            }
        }
        
        lastScrollY = currentScrollY;
    }, 100);
    
    window.addEventListener('scroll', scrollHandler);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const navLinks = document.getElementById('navLinks');
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        
        if (navLinks && hamburgerBtn && navLinks.classList.contains('active')) {
            if (!navLinks.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                closeMobileMenu();
            }
        }
    });
    
    // Close mobile menu on window resize (if becomes desktop)
    window.addEventListener('resize', throttle(function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    }, 250));
    
    // Keyboard navigation support - WCAG 2.2 AAA
    document.addEventListener('keydown', function(e) {
        // ESC key closes modals and menus
        if (e.key === 'Escape') {
            // Modal removed - just close mobile menu
            closeMobileMenu();
            closeToast();
        }
        
        // Enter key on form inputs
        if (e.key === 'Enter' && e.target.tagName === 'INPUT' && e.target.type !== 'textarea') {
            const form = e.target.closest('form');
            if (form) {
                e.preventDefault();
                form.requestSubmit();
            }
        }
        
        // Tab navigation - trap focus in modals
        if (e.key === 'Tab') {
            // Modal removed - focus management not needed
            const focusableElements = document.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
    });
    
    // Screen reader announcements - WCAG 2.2 AAA
    function announceToScreenReader(message, priority = 'polite') {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', priority);
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }
    
    // Make announceToScreenReader globally available
    window.announceToScreenReader = announceToScreenReader;
    
    // Real-time form validation
    const formInputs = document.querySelectorAll('.form-input, .form-select');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            const fieldId = this.id;
            const value = this.value.trim();
            
            if (fieldId === 'userEmail' && value) {
                validateField(fieldId, value, { email: true });
            } else if (fieldId === 'phoneNumber' && value) {
                validateField(fieldId, value, { phone: true, minLength: 9 });
            } else if (value) {
                validateField(fieldId, value, { required: true });
            }
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                clearError(this.id);
            }
        });
    });
    
    // Lazy loading for performance
    if ('IntersectionObserver' in window) {
        const lazyElements = document.querySelectorAll('[data-lazy]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    if (element.dataset.lazy === 'image') {
                        element.src = element.dataset.src;
                        element.classList.add('loaded');
                    }
                    observer.unobserve(element);
                }
            });
        });
        
        lazyElements.forEach(element => imageObserver.observe(element));
    }
    
    // Performance monitoring
    if ('PerformanceObserver' in window) {
        try {
            const perfObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.entryType === 'navigation') {
                        console.log('⏱️ Page Load Time:', entry.loadEventEnd - entry.fetchStart, 'ms');
                    }
                }
            });
            perfObserver.observe({ entryTypes: ['navigation'] });
        } catch (e) {
            console.log('ℹ️ Performance monitoring not available');
        }
    }
    
    // Error handling for unhandled errors
    window.addEventListener('error', function(e) {
        console.error('❌ Unhandled Error:', e.error);
        showToast('An unexpected error occurred. Please refresh the page.', 'error');
    });
    
    // Unhandled promise rejection
    window.addEventListener('unhandledrejection', function(e) {
        console.error('❌ Unhandled Promise Rejection:', e.reason);
        showToast('An error occurred. Please try again.', 'error');
    });
    
    console.log('✅ All event listeners attached');
    console.log('✅ Event listeners setup complete');
});

// Add CSS animation for loading spinner
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

/**
 * זיהוי אוטומטי של קופת חולים לפי מספר טלפון
 * מזהה את קופת החולים על פי מספר הטלפון (דוגמה - בפועל זה יכול להתבסס על מאגר נתונים)
 */
function autoDetectHealthFund() {
    console.log('🔧 Function: autoDetectHealthFund()');
    console.log('📝 Purpose: Auto-detect health fund from phone number');
    
    const phoneInput = document.getElementById('phoneNumber');
    const detectionDiv = document.getElementById('autoDetectedHealthFund');
    const detectedText = document.getElementById('detectedFundText');
    
    if (!phoneInput || !detectionDiv || !detectedText) {
        return;
    }
    
    const phoneNumber = phoneInput.value.trim().replace(/\D/g, ''); // Remove non-digits
    
    if (phoneNumber.length < 9) {
        detectionDiv.style.display = 'none';
        return;
    }
    
    // Simple detection logic based on phone prefix patterns
    // This is a demonstration - in real scenario, this would query a database
    let detectedFund = '';
    let confidence = '';
    
    // Example: If phone starts with 050-053, might be Clalit (example pattern)
    // This is just a demonstration - adjust based on actual data if available
    const firstDigits = phoneNumber.substring(0, 3);
    
    // Simple pattern matching (can be enhanced with actual data)
    if (firstDigits.startsWith('050')) {
        detectedFund = 'Clalit / כללית';
        confidence = 'High / גבוהה';
    } else if (firstDigits.startsWith('052')) {
        detectedFund = 'Maccabi / מכבי';
        confidence = 'Medium / בינונית';
    } else if (firstDigits.startsWith('053')) {
        detectedFund = 'Meuhedet / מאוחדת';
        confidence = 'Medium / בינונית';
    } else if (firstDigits.startsWith('054')) {
        detectedFund = 'Leumit / לאומית';
        confidence = 'Medium / בינונית';
    } else {
        detectedFund = 'Unable to detect / לא ניתן לזהות';
        confidence = 'Low / נמוכה';
    }
    
    detectedText.textContent = `Detected: ${detectedFund} (${confidence}) / זוהה: ${detectedFund} (${confidence})`;
    detectedText.innerHTML += '<br><small style="font-weight: normal; color: #64748b;">Note: This is an estimation. Please verify. / הערה: זו הערכה. אנא ודא.</small>';
    
    detectionDiv.style.display = 'block';
    console.log(`✅ Health fund detected: ${detectedFund}`);
    console.log('✅ Function completed');
}

/**
 * דילוג על טופס המשתמש
 * מאפשר למשתמש להמשיך בלי למלא את הטופס
 */
function skipUserForm() {
    console.log('🔧 Function: skipUserForm()');
    console.log('📝 Purpose: Skip user registration form');
    
    showToast('You can continue browsing. Register later to unlock full features.', 'success');
    console.log('ℹ️ User skipped registration form');
    console.log('✅ Function completed');
}

// Create new user
function createNewUser(event) {
    console.log('🔧 Function: createNewUser(event)');
    console.log('📝 Purpose: Create a new registered user');
    
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const userLocationInput = document.getElementById('userLocation');
    const userLocation = userLocationInput ? userLocationInput.value.trim() : '';
    
    console.log('📋 Form Data:', { firstName, lastName, phone: phoneNumber.substring(0, 3) + '***', location: userLocation || 'Not provided' });
    
    // Validate all fields
    let isValid = true;
    
    if (!validateField('firstName', firstName, { required: true, requiredMessage: 'Please enter your first name', minLength: 2 })) {
        isValid = false;
    }
    
    if (!validateField('lastName', lastName, { required: true, requiredMessage: 'Please enter your last name', minLength: 2 })) {
        isValid = false;
    }
    
    if (!validateField('phoneNumber', phoneNumber, { required: true, phone: true, requiredMessage: 'Please enter your phone number', minLength: 9 })) {
        isValid = false;
    }
    
    if (!isValid) {
        console.warn('⚠️ Validation failed');
        showToast('Please fix the errors in the form', 'error');
        return;
    }
    
    // Check if phone starts with 05 (Israeli prefix)
    const isIsraeliPrefix = phoneNumber.startsWith('05');
    const discount = isIsraeliPrefix ? 5 : 0;
    
    // Try to get detected health fund from the auto-detection
    let detectedHealthFund = '';
    const detectedTextEl = document.getElementById('detectedFundText');
    if (detectedTextEl && detectedTextEl.textContent.includes('Detected:')) {
        // Extract health fund from the detected text (simplified)
        const detectedText = detectedTextEl.textContent;
        if (detectedText.includes('Clalit')) detectedHealthFund = 'Clalit';
        else if (detectedText.includes('Maccabi')) detectedHealthFund = 'Maccabi';
        else if (detectedText.includes('Meuhedet')) detectedHealthFund = 'Meuhedet';
        else if (detectedText.includes('Leumit')) detectedHealthFund = 'Leumit';
    }
    
    // If location is provided, save it
    if (userLocation) {
        localStorage.setItem('location', userLocation);
        window.userLocation = userLocation;
    }
    
    // If health fund detected, save it
    if (detectedHealthFund) {
        localStorage.setItem('healthFund', detectedHealthFund);
        userHealthFund = detectedHealthFund;
    }
    
    console.log(`📞 Phone prefix check: ${isIsraeliPrefix ? 'Israeli (05)' : 'Other'}`);
    console.log(`💰 Discount: ${discount}%`);
    if (detectedHealthFund) {
        console.log(`🏥 Detected Health Fund: ${detectedHealthFund}`);
    }
    
    try {
        // Create user object
        const newUser = {
            id: Date.now(),
            firstName: firstName,
            lastName: lastName,
            phone: phoneNumber,
            location: userLocation || null,
            healthFund: detectedHealthFund || null,
            discount: discount,
            createdAt: new Date().toISOString()
        };
        
        // Save to localStorage
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        currentUser = newUser;
        
        console.log('✅ User created and saved');
        
        // Reset form
        document.getElementById('createUserForm').reset();
        
        // Clear all errors
        clearError('firstName');
        clearError('lastName');
        clearError('phoneNumber');
        
        // Update UI
        loadCurrentUser();
        updateUserInfoDisplay();
        loadDoctors();
        loadFavorites();
        
        // Show success message
        const successMsg = `User registered successfully!${discount > 0 ? `\n\nYou received ${discount}% discount for Israeli phone prefix!` : ''}\n\nYou can now use favorites and get discounts!`;
        showToast(successMsg, 'success');
        
        // Scroll to user section
        setTimeout(() => {
            document.getElementById('user')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
        
        console.log('✅ Function completed');
    } catch (error) {
        console.error('❌ Error creating user:', error);
        showToast('Error creating user. Please try again.', 'error');
    }
}

// Load current user
function loadCurrentUser() {
    console.log('🔧 Function: loadCurrentUser()');
    console.log('📝 Purpose: Load and display current registered user or guest information');
    
    const savedUser = localStorage.getItem('currentUser');
    const currentUserContainer = document.getElementById('currentUserContainer');
    const guestUserContainer = document.getElementById('guestUserContainer');
    
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        console.log('✅ Registered user found:', { name: currentUser.firstName + ' ' + currentUser.lastName, discount: currentUser.discount + '%' });
        
        if (currentUserContainer) {
            document.getElementById('currentUserName').textContent = `${currentUser.firstName} ${currentUser.lastName}`;
            document.getElementById('currentUserNameHebrew').textContent = `${currentUser.firstName} ${currentUser.lastName}`;
            document.getElementById('currentUserPhone').textContent = currentUser.phone;
            document.getElementById('currentUserPhoneHebrew').textContent = currentUser.phone;
            document.getElementById('currentUserDiscount').textContent = `${currentUser.discount}%`;
            document.getElementById('currentUserDiscountHebrew').textContent = `${currentUser.discount}%`;
            currentUserContainer.style.display = 'block';
        }
        
        if (guestUserContainer) {
            guestUserContainer.style.display = 'none';
        }
    } else {
        currentUser = null;
        console.log('ℹ️ No registered user');
        
        if (currentUserContainer) {
            currentUserContainer.style.display = 'none';
        }
        
        // Check if user is guest (has initial form data but not registered)
        if (userHealthFund && userLocation && userEmail) {
            console.log('ℹ️ User is guest (has initial form data but not registered)');
            
            if (guestUserContainer) {
                document.getElementById('guestHealthFund').textContent = userHealthFund;
                document.getElementById('guestHealthFundHebrew').textContent = userHealthFund;
                document.getElementById('guestLocation').textContent = userLocation;
                document.getElementById('guestLocationHebrew').textContent = userLocation;
                guestUserContainer.style.display = 'block';
            }
        } else {
            if (guestUserContainer) {
                guestUserContainer.style.display = 'none';
            }
        }
    }
    
    console.log('✅ Function completed');
}

// Delete current user
function deleteCurrentUser() {
    console.log('🔧 Function: deleteCurrentUser()');
    console.log('📝 Purpose: Delete current user account');
    
    if (!currentUser) {
        console.warn('⚠️ No user to delete');
        return;
    }
    
    if (!confirm('Are you sure you want to delete your account? This action cannot be undone.\n\nהאם אתה בטוח שברצונך למחוק את החשבון? פעולה זו לא ניתנת לביטול.')) {
        console.log('ℹ️ User cancelled deletion');
        return;
    }
    
    // Show loading
    showToast('Deleting account...', 'success');
    
    // Remove from localStorage
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userFavorites');
    
    currentUser = null;
    userFavorites = [];
    
    console.log('✅ User deleted');
    
    // Update UI
    loadCurrentUser();
    updateUserInfoDisplay();
    loadDoctors();
    loadFavorites();
    
    showToast('User account deleted successfully. You are now using the site as a guest.', 'success');
    
    console.log('✅ Function completed');
}

// Load category groups
function loadCategoryGroups() {
    console.log('🔧 Function: loadCategoryGroups()');
    console.log('📝 Purpose: Load and display category group filter buttons');
    
    const groupButtons = document.getElementById('groupButtons');
    if (!groupButtons) {
        console.error('❌ Group buttons element not found');
        return;
    }
    
    groupButtons.innerHTML = '';
    
    Object.keys(categoryGroups).forEach((groupKey, index) => {
        const group = categoryGroups[groupKey];
        const btn = document.createElement('button');
        btn.className = `group-btn ${currentCategoryGroup === groupKey ? 'active' : ''}`;
        btn.textContent = group.name;
        btn.onclick = () => filterDoctorsByGroup(groupKey);
        
        groupButtons.appendChild(btn);
    });
    
    console.log(`✅ ${Object.keys(categoryGroups).length} category groups loaded`);
    console.log('✅ Function completed');
}

// Filter doctors by category group
function filterDoctorsByGroup(groupKey) {
    console.log('🔧 Function: filterDoctorsByGroup(groupKey)');
    console.log('📝 Purpose: Filter doctors by category group');
    console.log(`🏷️ Group: "${groupKey}"`);
    
    currentCategoryGroup = groupKey;
    
    // Update active button
    document.querySelectorAll('.group-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === categoryGroups[groupKey].name) {
            btn.classList.add('active');
        }
    });
    
    const doctorsGrid = document.getElementById('doctorsGrid');
    if (!doctorsGrid) {
        console.error('❌ Doctors grid element not found');
        return;
    }
    
    const group = categoryGroups[groupKey];
    let filteredDoctors = [];
    
    if (groupKey === 'all') {
        filteredDoctors = doctorsData;
    } else {
        filteredDoctors = doctorsData.filter(doctor => 
            group.categories.includes(doctor.category)
        );
    }
    
    console.log(`📊 Filtered doctors: ${filteredDoctors.length}`);
    
    // Reload doctors with filter
    doctorsGrid.innerHTML = '';
    
    const savedFavorites = localStorage.getItem('userFavorites');
    if (savedFavorites) {
        userFavorites = JSON.parse(savedFavorites);
    }
    
    filteredDoctors.forEach((doctor, index) => {
        const card = document.createElement('div');
        card.className = 'doctor-card';
        
        const price = calculatePriceWithDiscount(doctor.price);
        const isFavorite = userFavorites.includes(doctor.id);
        
        card.innerHTML = `
            <div class="doctor-name">${doctor.name}</div>
            <div class="doctor-specialty">${doctor.specialty}</div>
            <div class="quick-btn-hebrew" style="font-size: 0.85rem; margin-bottom: 10px;">${doctor.specialtyHebrew}</div>
            <div class="doctor-info">${doctor.description}</div>
            <div class="quick-btn-hebrew" style="font-size: 0.8rem; margin-bottom: 10px;">${doctor.descriptionHebrew}</div>
            <div class="doctor-info" style="margin-top: 10px; color: #764ba2; font-weight: bold;">
                ${price.original} ₪
                ${price.discounted !== price.original ? `<span style="color: #10b981; margin-left: 10px;">${price.discounted} ₪ (${currentUser ? currentUser.discount : 0}% off)</span>` : ''}
            </div>
            ${currentUser ? `<button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${doctor.id})">
                ${isFavorite ? '★ Remove from Favorites' : '☆ Add to Favorites'}
            </button>` : (userHealthFund && userLocation && userEmail ? '<p style="font-size: 0.85rem; color: #64748b; margin-top: 10px; font-style: italic;">Register as user to add favorites and get discounts</p><p class="form-label-hebrew" style="font-size: 0.75rem; margin-top: 2px;">הירשם כמשתמש כדי להוסיף מועדפים ולקבל הנחות</p>' : '<p style="font-size: 0.85rem; color: #f59e0b; margin-top: 10px; font-style: italic; font-weight: 600;">⚠️ Limited access - Fill initial form or register for full features</p><p class="form-label-hebrew" style="font-size: 0.75rem; margin-top: 2px; color: #f59e0b; font-weight: 600;">⚠️ גישה מוגבלת - מלא את הטופס הראשוני או הירשם לתכונות מלאות</p>')}
        `;
        
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        doctorsGrid.appendChild(card);
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 15);
    });
    
    console.log('✅ Doctors filtered and displayed');
    console.log('✅ Function completed');
}

// Toggle favorite
function toggleFavorite(doctorId) {
    console.log('🔧 Function: toggleFavorite(doctorId)');
    console.log('📝 Purpose: Add or remove doctor from favorites');
    console.log(`👨‍⚕️ Doctor ID: ${doctorId}`);
    
    if (!currentUser) {
        console.warn('⚠️ User not registered');
        showToast('Please register as a user to use favorites', 'error');
        setTimeout(() => {
            document.getElementById('user')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 500);
        return;
    }
    
    const savedFavorites = localStorage.getItem('userFavorites');
    if (savedFavorites) {
        userFavorites = JSON.parse(savedFavorites);
    }
    
    const index = userFavorites.indexOf(doctorId);
    const doctor = doctorsData.find(d => d.id === doctorId);
    const doctorName = doctor ? doctor.name : 'Doctor';
    
    if (index > -1) {
        userFavorites.splice(index, 1);
        console.log('✅ Doctor removed from favorites');
        showToast(`${doctorName} removed from favorites`, 'success');
    } else {
        userFavorites.push(doctorId);
        console.log('✅ Doctor added to favorites');
        showToast(`${doctorName} added to favorites`, 'success');
    }
    
    localStorage.setItem('userFavorites', JSON.stringify(userFavorites));
    console.log('💾 Favorites saved to localStorage');
    
    // Reload doctors and favorites
    loadDoctors();
    loadFavorites();
    
    console.log('✅ Function completed');
}

// Toggle favorite and refresh search results
function toggleFavoriteAndRefresh(doctorId, searchTitle) {
    console.log('🔧 Function: toggleFavoriteAndRefresh(doctorId, searchTitle)');
    console.log('📝 Purpose: Toggle favorite and refresh current search results');
    
    if (!currentUser) {
        console.warn('⚠️ User not registered');
        showToast('Please register as a user to use favorites', 'error');
        setTimeout(() => {
            document.getElementById('user')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 500);
        return;
    }
    
    const savedFavorites = localStorage.getItem('userFavorites');
    if (savedFavorites) {
        userFavorites = JSON.parse(savedFavorites);
    }
    
    const index = userFavorites.indexOf(doctorId);
    
    if (index > -1) {
        userFavorites.splice(index, 1);
        console.log('✅ Doctor removed from favorites');
    } else {
        userFavorites.push(doctorId);
        console.log('✅ Doctor added to favorites');
    }
    
    localStorage.setItem('userFavorites', JSON.stringify(userFavorites));
    
    // Get current search results and refresh
    const resultsContainer = document.getElementById('resultsContainer');
    if (resultsContainer && resultsContainer.innerHTML.includes('result-item')) {
        // We're in search results view - refresh it
        const searchInput = document.getElementById('generalSearch');
        if (searchInput && searchInput.value.trim()) {
            const searchTerm = searchInput.value.trim();
            const results = doctorsData.filter(doctor => 
                doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                doctor.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                doctor.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
            displayResults(results, searchTitle || `Search results for: ${searchTerm}`);
        }
    } else {
        // Just reload doctors and favorites
        loadDoctors();
        loadFavorites();
    }
    
    console.log('✅ Function completed');
}

// Load favorites
function loadFavorites() {
    console.log('🔧 Function: loadFavorites()');
    console.log('📝 Purpose: Load and display favorite doctors');
    
    const favoritesContainer = document.getElementById('favoritesContainer');
    if (!favoritesContainer) {
        console.error('❌ Favorites container not found');
        return;
    }
    
    if (!currentUser) {
        if (userHealthFund && userLocation && userEmail) {
            // Guest user - can register
            favoritesContainer.innerHTML = `
                <p style="text-align: center; color: #64748b; font-size: 1.1rem;">You are using the site as a guest. Register as a user to save favorites!</p>
                <p class="form-label-hebrew" style="text-align: center; margin-top: 5px;">אתה משתמש באתר כאורח. הירשם כמשתמש כדי לשמור מועדפים!</p>
                <div style="text-align: center; margin-top: 20px;">
                    <a href="#user" class="submit-btn" style="display: inline-block; text-decoration: none;">Go to Registration</a>
                    <p class="form-label-hebrew" style="margin-top: 10px;">עבור לרישום</p>
                </div>
            `;
        } else {
            // No user at all
            favoritesContainer.innerHTML = `
                <p style="text-align: center; color: #64748b; font-size: 1.1rem;">Please fill in the initial form to use the site</p>
                <p class="form-label-hebrew" style="text-align: center; margin-top: 5px;">אנא מלא את הטופס הראשוני כדי להשתמש באתר</p>
            `;
        }
        console.log('ℹ️ No registered user - showing appropriate message');
        return;
    }
    
    const savedFavorites = localStorage.getItem('userFavorites');
    if (savedFavorites) {
        userFavorites = JSON.parse(savedFavorites);
    }
    
    if (userFavorites.length === 0) {
        favoritesContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">⭐</div>
                <div class="empty-state-title">No results found</div>
                <div class="empty-state-text">Try adjusting your filters or search terms.</div>
                <button class="empty-state-cta" onclick="document.getElementById('search').scrollIntoView({ behavior: 'smooth' });">New search</button>
            </div>
        `;
        console.log('ℹ️ No favorites yet - showing empty state');
        return;
    }
    
    favoritesContainer.innerHTML = '';
    
    userFavorites.forEach((doctorId, index) => {
        const doctor = doctorsData.find(d => d.id === doctorId);
        if (!doctor) return;
        
        const price = calculatePriceWithDiscount(doctor.price);
        
        const card = document.createElement('div');
        card.className = 'favorite-doctor-card';
        card.innerHTML = `
            <button class="remove-favorite-btn" onclick="toggleFavorite(${doctor.id})" title="Remove from favorites">×</button>
            <div class="doctor-name">${doctor.name}</div>
            <div class="doctor-specialty">${doctor.specialty}</div>
            <div class="quick-btn-hebrew" style="font-size: 0.85rem; margin-bottom: 10px;">${doctor.specialtyHebrew}</div>
            <div class="doctor-info">${doctor.description}</div>
            <div class="quick-btn-hebrew" style="font-size: 0.8rem; margin-bottom: 10px;">${doctor.descriptionHebrew}</div>
            <div class="doctor-info" style="margin-top: 10px; color: #764ba2; font-weight: bold;">
                ${price.original} ₪
                ${price.discounted !== price.original ? `<span style="color: #10b981; margin-left: 10px;">${price.discounted} ₪ (${currentUser.discount}% off)</span>` : ''}
            </div>
        `;
        
        card.style.opacity = '0';
        card.style.transform = 'translateX(-20px)';
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        favoritesContainer.appendChild(card);
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, index * 50);
    });
    
    console.log(`✅ ${userFavorites.length} favorites loaded and displayed`);
    console.log('✅ Function completed');
}

// Calculate price with discount
function calculatePriceWithDiscount(priceString) {
    console.log('🔧 Function: calculatePriceWithDiscount(priceString)');
    console.log('📝 Purpose: Calculate price with user discount');
    console.log(`💰 Price string: "${priceString}"`);
    
    if (!currentUser || currentUser.discount === 0) {
        return { original: priceString, discounted: priceString };
    }
    
    // Parse price range (e.g., "300-500" or "100")
    const priceMatch = priceString.match(/(\d+)(?:-(\d+))?/);
    if (!priceMatch) {
        return { original: priceString, discounted: priceString };
    }
    
    const minPrice = parseInt(priceMatch[1]);
    const maxPrice = priceMatch[2] ? parseInt(priceMatch[2]) : minPrice;
    
    const discountMultiplier = 1 - (currentUser.discount / 100);
    const discountedMin = Math.round(minPrice * discountMultiplier);
    const discountedMax = Math.round(maxPrice * discountMultiplier);
    
    const original = maxPrice !== minPrice ? `${minPrice}-${maxPrice}` : `${minPrice}`;
    const discounted = discountedMax !== discountedMin ? `${discountedMin}-${discountedMax}` : `${discountedMin}`;
    
    console.log(`✅ Calculated: Original ${original}, Discounted ${discounted} (${currentUser.discount}% off)`);
    console.log('✅ Function completed');
    
    return { original, discounted };
}

// Ensure all functions are available globally
// Expose new doctors module functions globally
window.handleDoctorsSearch = handleDoctorsSearch;
window.initDoctorsModule = initDoctorsModule;
window.renderDoctorsList = renderDoctorsList;
window.searchDoctors = searchDoctors;

// Keep old function names for backward compatibility
window.performGeneralSearch = handleDoctorsSearch; // Redirect to new function
window.loadDoctors = loadDoctors; // Wrapper that uses new module
window.searchByCategory = searchByCategory;
window.clearSearch = clearSearch;
window.submitInitialForm = submitInitialForm;
window.skipInitialForm = skipInitialForm;
window.submitQuestion = submitQuestion;
window.createNewUser = createNewUser;
window.skipUserForm = skipUserForm;
window.deleteCurrentUser = deleteCurrentUser;
window.toggleFavorite = toggleFavorite;
window.toggleFavoriteAndRefresh = toggleFavoriteAndRefresh;
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.scrollToTop = scrollToTop;
window.changeUserDetails = changeUserDetails;
window.autoDetectHealthFund = autoDetectHealthFund;

console.log('✅ GFMA JavaScript loaded successfully');
console.log('📊 System ready');
console.log('🌐 All functions exposed to global scope');

/**
 * הצהרת בעלות / זכויות יוצרים
 * הקוד פותח על-ידי: Michael Papaismedov.
 * אין לעשות שימוש, העתקה או הפצה של הקוד ללא אישור.
 */
