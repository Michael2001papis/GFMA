/**
 * ============================================
 * מרפאה רפואית מקצועית - אפליקציה רפואית
 * ============================================
 * מפתח האתר: Michael Papaismedov
 * קובץ JavaScript ראשי לאפליקציה
 * בנוי מחדש בצורה נקייה ומסודרת
 */

// ============================================
// נתוני רופאים — לכל עיר בישראל לפחות 10 התמחויות, רופא זמין אחד בכל תחום
// ============================================

const SPECIALTIES = [
    { specialty: "רופאת משפחה", description: "מומחית ברפואת משפחה, טיפול בילדים ומבוגרים ורפואה מניעתית.", tags: ["משפחה", "בוקר"] },
    { specialty: "קרדיולוג", description: "מומחה במחלות לב, צנתורים וטיפול בלחץ דם.", tags: ["לב", "מומחה"] },
    { specialty: "רופאת עיניים", description: "מומחית בניתוחי עיניים, קטרקט ומחלות עיניים.", tags: ["עיניים", "בוקר"] },
    { specialty: "רופאת ילדים", description: "מומחית בטיפול בילדים מלידה ועד גיל 18.", tags: ["ילדים", "בוקר"] },
    { specialty: "גינקולוגית", description: "מומחית בטיפול בנשים, מעקב הריון ופוריות.", tags: ["נשים", "בוקר"] },
    { specialty: "אורתופד", description: "מומחה בניתוחי מפרקים, שברים ועמוד שדרה.", tags: ["אורתופדיה", "מומחה"] },
    { specialty: "רופאת עור", description: "מומחית במחלות עור, אלרגיות וטיפול קוסמטי רפואי.", tags: ["עור", "בוקר"] },
    { specialty: "רופא אף אוזן גרון", description: "מומחה בדלקות אוזניים, בעיות נשימה וסינוסים.", tags: ["אף אוזן גרון", "מומחה"] },
    { specialty: "רופא פנימי", description: "מומחה ברפואה פנימית ומחלות כרוניות.", tags: ["פנימי", "ערב"] },
    { specialty: "נוירולוג", description: "מומחה במחלות מערכת העצבים והמוח.", tags: ["נוירולוגיה", "מומחה"] },
    { specialty: "אורולוג", description: "מומחה במחלות דרכי השתן ומערכת הרבייה הגברית.", tags: ["אורולוגיה", "בוקר"] },
    { specialty: "פסיכיאטר", description: "מומחה בבריאות הנפש וייעוץ פסיכיאטרי.", tags: ["נפש", "ערב"] }
];

const DOCTOR_FIRST_NAMES = ["יעל", "דוד", "שרה", "מיכל", "אורית", "אמנון", "רננה", "רון", "נועם", "ליאור", "דני", "רונית", "עמית", "טל", "ניר", "דנה", "יוסי", "מירי", "גיל", "עינת"];
const DOCTOR_LAST_NAMES = ["כהן", "לוי", "רוזן", "ישראלי", "בן דוד", "דוד", "שמיר", "גולן", "אברהם", "לוי", "מזרחי", "ברק", "פלד", "דהן", "קדוש", "עזרא", "חדד", "סלע", "בכר", "מנדל"];

// רשימת ערים בישראל — למודאל פתיחה ולבניית רופאים (לכל עיר × כל התמחות)
const ISRAEL_CITIES = [
    'תל אביב', 'ירושלים', 'חיפה', 'באר שבע', 'ראשון לציון', 'פתח תקווה', 'נתניה', 'אשדוד', 'אשקלון',
    'חולון', 'בת ים', 'רמת גן', 'גבעתיים', 'בני ברק', 'הרצליה', 'כפר סבא', 'רעננה', 'הוד השרון', 'רמת השרון',
    'רחובות', 'נס ציונה', 'לוד', 'רמלה', 'מודיעין-מכבים-רעות', 'בית שמש', 'אילת', 'חדרה', 'עפולה', 'טבריה',
    'נצרת', 'עכו', 'נהריה', 'קריית שמונה', 'כרמיאל', 'מעלות-תרשיחא', 'יקנעם עילית', 'זכרון יעקב', 'בנימינה-גבעת עדה',
    'אור יהודה', 'יהוד-מונוסון', 'קריית אונו', 'גבעת שמואל', 'ראש העין', 'רמת בית שמש', 'יבנה', 'קריית גת', 'דימונה',
    'ערד', 'נתיבות', 'שדרות', 'עומר', 'להבים', 'טירה', 'טייבה', 'אום אל-פחם', 'באקה אל-גרבייה', 'שפרעם', 'סכנין'
];
const ISRAEL_CITY_SET = new Set(ISRAEL_CITIES);

function getAreaCode(city) {
    const codes = {
        "תל אביב": "03", "ירושלים": "02", "חיפה": "04", "באר שבע": "08", "ראשון לציון": "03", "פתח תקווה": "03", "נתניה": "09",
        "אשדוד": "08", "אשקלון": "08", "חולון": "03", "בת ים": "03", "רמת גן": "03", "גבעתיים": "03", "בני ברק": "03",
        "הרצליה": "09", "כפר סבא": "09", "רעננה": "09", "הוד השרון": "09", "רמת השרון": "09", "אילת": "08", "נצרת": "04",
        "עכו": "04", "נהריה": "04", "טבריה": "04", "עפולה": "04", "חדרה": "04", "כרמיאל": "04", "קריית שמונה": "04",
        "מעלות-תרשיחא": "04", "יקנעם עילית": "04", "זכרון יעקב": "04", "בנימינה-גבעת עדה": "04", "רחובות": "08", "נס ציונה": "08",
        "לוד": "08", "רמלה": "08", "מודיעין-מכבים-רעות": "08", "בית שמש": "02", "אור יהודה": "03", "יהוד-מונוסון": "03",
        "קריית אונו": "03", "גבעת שמואל": "03", "ראש העין": "03", "יבנה": "08", "קריית גת": "08", "דימונה": "08", "ערד": "08",
        "נתיבות": "08", "שדרות": "08", "עומר": "08", "להבים": "08", "טירה": "09", "טייבה": "09", "אום אל-פחם": "04",
        "באקה אל-גרבייה": "04", "שפרעם": "04", "סכנין": "04", "רמת בית שמש": "02"
    };
    for (const key of Object.keys(codes)) { if (city.indexOf(key) !== -1 || key.indexOf(city) !== -1) return codes[key]; }
    return "03";
}

function buildDoctorsData() {
    const data = [];
    let id = 1;
    const cities = ISRAEL_CITIES;
    for (let c = 0; c < cities.length; c++) {
        const city = cities[c];
        const areaCode = getAreaCode(city);
        for (let s = 0; s < SPECIALTIES.length; s++) {
            const spec = SPECIALTIES[s];
            const first = DOCTOR_FIRST_NAMES[(id - 1) % DOCTOR_FIRST_NAMES.length];
            const last = DOCTOR_LAST_NAMES[(id - 1) % DOCTOR_LAST_NAMES.length];
            const years = 6 + (id % 20);
            data.push({
                id,
                name: `ד\"ר ${first} ${last}`,
                specialty: spec.specialty,
                city,
                clinic: `מרפאת ${spec.specialty} - ${city}`,
                phone: `${areaCode}-${String(5000000 + id).slice(0, 7)}`,
                tags: [...spec.tags, city],
                experience: `${years} שנות ניסיון`,
                description: spec.description,
                avatar: null,
                rating: Math.round((4.2 + (id % 80) / 100) * 10) / 10,
                reviewsCount: 40 + (id % 180),
                availability: "available_now",
                isRecommended: id % 4 === 0,
                isNew: id % 12 === 0
            });
            id++;
        }
    }
    return data;
}

const doctorsData = buildDoctorsData();

// ============================================
// משתנים גלובליים
// ============================================

let currentDoctorsList = [...doctorsData]; // עותק של הרשימה המלאה

// מצב משתמש
let userState = {
    userType: null, // "registered" | "guest" | null
    healthFund: null,
    userLocation: null,
    filterByLocation: true // האם לסנן לפי מיקום (ברירת מחדל: כן למשתמש רשום)
};

// ניהול Theme
const THEME_STORAGE_KEY = 'userTheme';
let currentTheme = null;

// ============================================
// מחירון — עריכה קלה (מי עושה מה וכמה זה עולה)
// ============================================
const PRICING_ITEMS = [
    { title: 'מי יכול לפענח בדיקות?', price: '250–500 ₪' },
    { title: 'מי יכול להסביר תוצאות?', price: 'כ-100 ₪ להסבר קצר וממוקד' },
    { title: 'מי יכול לענות על שאלה רפואית כללית?', price: 'סביב 100 ₪ לשאלה קצרה' }
];

// ============================================
// ניהול Theme (Dark Mode)
// ============================================

// זיהוי העדפת מערכת
function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

// טעינת Theme מ-localStorage
function loadTheme() {
    try {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme === 'dark' || savedTheme === 'light') {
            return savedTheme;
        }
    } catch (error) {
        console.error('❌ שגיאה בטעינת Theme:', error);
    }
    return null;
}

// שמירת Theme ב-localStorage
function saveTheme(theme) {
    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
        console.log('💾 Theme נשמר:', theme);
    } catch (error) {
        console.error('❌ שגיאה בשמירת Theme:', error);
    }
}

// החלפת Theme
function setTheme(theme) {
    if (theme !== 'dark' && theme !== 'light') {
        console.error('❌ Theme לא תקין:', theme);
        return;
    }
    
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
    currentTheme = theme;
    
    // עדכון כפתור Toggle
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    
    console.log(`🎨 Theme הוחלף ל: ${theme}`);
}

// מעבר בין מצבים
function toggleTheme() {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    saveTheme(newTheme);
}

// אתחול Theme
function initTheme() {
    console.log('🎨 אתחול Theme...');
    
    // עדיפות: העדפה שמורה > prefers-color-scheme > light
    const savedTheme = loadTheme();
    const systemTheme = getSystemTheme();
    
    let themeToUse = 'light'; // ברירת מחדל
    
    if (savedTheme) {
        themeToUse = savedTheme;
        console.log('📦 Theme נטען מ-localStorage:', savedTheme);
    } else if (systemTheme) {
        themeToUse = systemTheme;
        console.log('🖥️ Theme נטען מ-system preference:', systemTheme);
    }
    
    setTheme(themeToUse);
    
    // מאזין לשינוי העדפת מערכת (אופציונלי - רק אם אין העדפה שמורה)
    if (window.matchMedia && !savedTheme) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
            if (!loadTheme()) { // רק אם אין העדפה שמורה
                const newSystemTheme = e.matches ? 'dark' : 'light';
                setTheme(newSystemTheme);
                console.log('🖥️ Theme עודכן לפי system preference:', newSystemTheme);
            }
        });
    }
    
    // חיבור כפתור Toggle
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            toggleTheme();
        });
    }
    
    console.log('✅ Theme מוכן');
}

// ============================================
// אתחול האפליקציה
// ============================================

function initApp() {
    console.log('🚀 אתחול האפליקציה...');
    
    // אתחול Theme (קודם כל, לפני כל דבר אחר)
    initTheme();
    
    // טעינת מצב משתמש מ-localStorage
    loadUserState();
    
    // אתחול כל המודולים
    initNavigation();
    initWelcomeModal(); // מודאל פתיחה
    initDoctorsModule();
    initPricingModule(); // מחירון — נבנה מ-PRICING_ITEMS
    initRatingModule(); // דירוג האתר (1–10)
    initContactForm();
    initChatBot(); // צ'אט-בוט עוזר רפואי
    
    // בדיקה אם צריך להציג מודאל
    if (!userState.userType) {
        showWelcomeModal();
    } else {
        showSection('home');
        updateUpdateUserButtonVisibility();
    }
    
    console.log('✅ האפליקציה מוכנה!');
}

function updateUpdateUserButtonVisibility() {
    const wrapper = document.getElementById('update-user-btn-wrapper');
    if (!wrapper) return;
    wrapper.style.display = userState.userType ? 'flex' : 'none';
}

// ============================================
// PWA: Service Worker Registration
// ============================================
function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    
    // רישום על window load כדי לא לעכב רינדור ראשוני
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('public/system/sw.js', { scope: '/' })
            .then((registration) => {
                console.log('✅ Service Worker registered:', registration.scope);
            })
            .catch((error) => {
                console.warn('⚠️ Service Worker registration failed:', error);
            });
    });
}

// ============================================
// ניהול מצב משתמש
// ============================================

function loadUserState() {
    try {
        const saved = localStorage.getItem('userState');
        if (saved) {
            const parsed = JSON.parse(saved);
            userState = {
                userType: parsed.userType || null,
                healthFund: parsed.healthFund || null,
                userLocation: parsed.userLocation || null,
                filterByLocation: parsed.filterByLocation !== undefined ? parsed.filterByLocation : true
            };
            console.log('📦 מצב משתמש נטען:', userState);
        }
    } catch (error) {
        console.error('❌ שגיאה בטעינת מצב משתמש:', error);
        userState = {
            userType: null,
            healthFund: null,
            userLocation: null,
            filterByLocation: true
        };
    }
}

function saveUserState() {
    try {
        localStorage.setItem('userState', JSON.stringify(userState));
        console.log('💾 מצב משתמש נשמר:', userState);
    } catch (error) {
        console.error('❌ שגיאה בשמירת מצב משתמש:', error);
    }
}

// ============================================
// מודאל פתיחה (Welcome Modal)
// ============================================

// משתנים לניהול טיוטה וולידציה
let modalDraftTimer = null;
let hasUnsavedChanges = false;

// שמירת טיוטת מודאל
function saveModalDraft() {
    try {
        const healthFund = document.getElementById('health-fund-select')?.value || '';
        const location = document.getElementById('user-location-input')?.value || '';
        
        if (healthFund || location) {
            const draft = {
                healthFund: healthFund,
                location: location,
                timestamp: Date.now()
            };
            localStorage.setItem('welcomeModalDraft', JSON.stringify(draft));
            hasUnsavedChanges = true;
            console.log('💾 טיוטת מודאל נשמרה');
        }
    } catch (error) {
        console.error('❌ שגיאה בשמירת טיוטת מודאל:', error);
    }
}

// טעינת טיוטת מודאל
function loadModalDraft() {
    try {
        const draftStr = localStorage.getItem('welcomeModalDraft');
        if (draftStr) {
            const draft = JSON.parse(draftStr);
            const healthFundSelect = document.getElementById('health-fund-select');
            const locationInput = document.getElementById('user-location-input');
            
            if (healthFundSelect && draft.healthFund) {
                healthFundSelect.value = draft.healthFund;
                validateFieldRealTime('health-fund-select');
            }
            
            if (locationInput && draft.location) {
                locationInput.value = draft.location;
                validateFieldRealTime('user-location-input');
            }
            
            hasUnsavedChanges = healthFundSelect?.value || locationInput?.value;
            console.log('📦 טיוטת מודאל נטענה');
            return true;
        }
    } catch (error) {
        console.error('❌ שגיאה בטעינת טיוטת מודאל:', error);
    }
    return false;
}

// ניקוי טיוטת מודאל
function clearModalDraft() {
    try {
        localStorage.removeItem('welcomeModalDraft');
        hasUnsavedChanges = false;
        console.log('🗑️ טיוטת מודאל נמחקה');
    } catch (error) {
        console.error('❌ שגיאה במחיקת טיוטת מודאל:', error);
    }
}

// בדיקת שינויים לא שמורים
function checkForUnsavedChanges() {
    const healthFundSelect = document.getElementById('health-fund-select');
    const locationInput = document.getElementById('user-location-input');
    
    const hasHealthFund = healthFundSelect && healthFundSelect.value.trim() !== '';
    const hasLocation = locationInput && locationInput.value.trim() !== '';
    
    return hasHealthFund || hasLocation;
}

// ולידציה בזמן אמת - קופת חולים
function validateHealthFund(value) {
    if (!value || value.trim() === '') {
        return { isValid: false, message: 'נא לבחור קופת חולים', status: 'warning' };
    }
    return { isValid: true, message: '', status: 'valid' };
}

// ולידציה בזמן אמת - מיקום
function validateLocation(value, { strict = false } = {}) {
    const city = (value || '').trim();
    
    if (!city) {
        return { isValid: false, message: 'נא לבחור עיר', status: 'warning' };
    }
    
    // מצב בזמן הקלדה: לא מציגים "שגיאה אדומה" לפני שהמשתמש סיים להקליד
    if (!strict) {
        if (ISRAEL_CITY_SET.has(city)) {
            return { isValid: true, message: '', status: 'valid' };
        }
        return { isValid: false, message: 'בחר/י עיר בישראל מהרשימה', status: 'warning' };
    }
    
    // מצב "שליחה" (strict): חייב התאמה מלאה לרשימה
    if (!ISRAEL_CITY_SET.has(city)) {
        return { isValid: false, message: 'נא לבחור עיר בישראל מהרשימה', status: 'invalid' };
    }
    
    return { isValid: true, message: '', status: 'valid' };
}

// ולידציה בזמן אמת לשדה
function validateFieldRealTime(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    
    const value = field.value.trim();
    let validation;
    
    if (fieldId === 'health-fund-select') {
        validation = validateHealthFund(value);
    } else if (fieldId === 'user-location-input') {
        validation = validateLocation(value, { strict: false });
    } else {
        return;
    }
    
    updateFieldStatus(fieldId, validation.isValid, validation.message, validation.status);
}

// עדכון מצב שדה ויזואלי
function updateFieldStatus(fieldId, isValid, message, status) {
    const field = document.getElementById(fieldId);
    const statusIcon = document.getElementById(`status-${fieldId}`);
    const hintEl = document.getElementById(`hint-${fieldId}`);
    const errorEl = document.getElementById(`error-${fieldId}`);
    
    if (!field) return;
    
    // ניקוי מחלקות קודמות
    field.classList.remove('valid', 'invalid', 'warning', 'pristine', 'error');
    
    // עדכון מחלקות לפי מצב
    if (status === 'valid') {
        field.classList.add('valid');
        if (statusIcon) {
            statusIcon.className = 'status-icon show valid';
        }
        if (hintEl) {
            hintEl.textContent = '';
            hintEl.classList.remove('show');
        }
        if (errorEl) {
            errorEl.style.display = 'none';
        }
    } else if (status === 'invalid') {
        field.classList.add('invalid');
        if (statusIcon) {
            statusIcon.className = 'status-icon show invalid';
        }
        if (hintEl) {
            hintEl.textContent = message;
            hintEl.classList.add('show');
        }
        if (errorEl && message) {
            errorEl.textContent = message;
            errorEl.style.display = 'block';
        }
    } else if (status === 'warning') {
        field.classList.add('warning');
        if (statusIcon) {
            statusIcon.className = 'status-icon show warning';
        }
        if (hintEl) {
            hintEl.textContent = message || '';
            if (message) {
                hintEl.classList.add('show');
            } else {
                hintEl.classList.remove('show');
            }
        }
        if (errorEl) {
            errorEl.style.display = 'none';
        }
    } else {
        field.classList.add('pristine');
        if (statusIcon) {
            statusIcon.className = 'status-icon';
        }
        if (hintEl) {
            hintEl.textContent = '';
            hintEl.classList.remove('show');
        }
        if (errorEl) {
            errorEl.style.display = 'none';
        }
    }
}

// הצגת מודאל עם אנימציה
function showModalWithAnimation() {
    const modal = document.getElementById('welcome-modal');
    if (!modal) return;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // הפעלת אנימציה
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    console.log('👋 מודאל פתיחה מוצג עם אנימציה');
}

// הסתרת מודאל עם אנימציה
function hideModalWithAnimation(callback) {
    const modal = document.getElementById('welcome-modal');
    if (!modal) {
        if (callback) callback();
        return;
    }
    
    modal.classList.remove('show');
    modal.classList.add('hide');
    
    // המתנה לסיום אנימציה
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('hide');
        document.body.style.overflow = '';
        if (callback) callback();
    }, 200);
    
    console.log('✅ מודאל פתיחה נסגר עם אנימציה');
}

// הצגת הודעת אישור סגירה
function showCloseConfirmation() {
    const confirmationModal = document.getElementById('close-confirmation-modal');
    if (!confirmationModal) return;
    
    confirmationModal.style.display = 'flex';
    
    const confirmBtn = document.getElementById('confirm-close-btn');
    const cancelBtn = document.getElementById('cancel-close-btn');
    
    if (confirmBtn) {
        confirmBtn.onclick = () => {
            confirmationModal.style.display = 'none';
            clearModalDraft();
            hideModalWithAnimation();
        };
    }
    
    if (cancelBtn) {
        cancelBtn.onclick = () => {
            confirmationModal.style.display = 'none';
        };
    }
}

// טיפול ב-ESC
function handleEscapeKey(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('welcome-modal');
        if (modal && modal.style.display !== 'none') {
            if (checkForUnsavedChanges()) {
                showCloseConfirmation();
            } else {
                hideModalWithAnimation();
            }
        }
    }
}

function initWelcomeModal() {
    const modal = document.getElementById('welcome-modal');
    if (!modal) return;
    
    const form = document.getElementById('welcome-form');
    const skipBtn = document.getElementById('skip-as-guest');
    const createUserBtn = document.getElementById('create-user-btn');
    const overlay = modal.querySelector('.modal-overlay');
    const healthFundSelect = document.getElementById('health-fund-select');
    const locationInput = document.getElementById('user-location-input');

    // יצירת datalist לערים בישראל (לשדה העיר)
    ensureIsraelCitiesDatalist();
    
    // טיפול בשליחת טופס
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            handleWelcomeFormSubmit();
        });
    }
    
    // כפתור דלג כאורח
    if (skipBtn) {
        skipBtn.addEventListener('click', () => {
            handleSkipAsGuest();
        });
    }
    
    // כפתור יצירת משתמש
    if (createUserBtn) {
        createUserBtn.addEventListener('click', () => {
            handleCreateUser();
        });
    }
    
    // כפתור עדכן משתמש (בהדר)
    const updateUserBtn = document.getElementById('update-user-btn');
    if (updateUserBtn) {
        updateUserBtn.addEventListener('click', () => {
            showWelcomeModal(true);
        });
    }
    
    // סגירה בלחיצה על overlay
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            // לא נותנים לסגור בלחיצה על overlay - חייב לבחור אחת מהאופציות
            e.stopPropagation();
        });
    }
    
    // ולידציה בזמן אמת - קופת חולים
    if (healthFundSelect) {
        healthFundSelect.addEventListener('change', () => {
            validateFieldRealTime('health-fund-select');
            // שמירת טיוטה עם debounce
            clearTimeout(modalDraftTimer);
            modalDraftTimer = setTimeout(() => {
                saveModalDraft();
            }, 500);
        });
        
        healthFundSelect.addEventListener('blur', () => {
            validateFieldRealTime('health-fund-select');
        });
    }
    
    // ולידציה בזמן אמת - מיקום
    if (locationInput) {
        locationInput.addEventListener('input', () => {
            validateFieldRealTime('user-location-input');
            // שמירת טיוטה עם debounce
            clearTimeout(modalDraftTimer);
            modalDraftTimer = setTimeout(() => {
                saveModalDraft();
            }, 500);
        });
        
        locationInput.addEventListener('blur', () => {
            validateFieldRealTime('user-location-input');
        });
    }
    
    // תמיכה ב-ESC
    document.addEventListener('keydown', handleEscapeKey);
    
    console.log('✅ מודאל פתיחה מוכן');
}

function ensureIsraelCitiesDatalist() {
    // הדפדפן יציג הצעות לערים; בנוסף, הוולידציה תוודא שנבחרה עיר מהרשימה
    const input = document.getElementById('user-location-input');
    if (!input) return;
    
    const datalistId = input.getAttribute('list') || 'israel-cities';
    if (!datalistId) return;
    
    let datalist = document.getElementById(datalistId);
    if (!datalist) {
        datalist = document.createElement('datalist');
        datalist.id = datalistId;
        document.body.appendChild(datalist);
    }
    
    // מילוי חד-פעמי
    if (datalist.childElementCount === 0) {
        ISRAEL_CITIES.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            datalist.appendChild(option);
        });
    }
}

function showWelcomeModal(forEdit) {
    const modal = document.getElementById('welcome-modal');
    if (!modal) return;
    
    const healthFundSelect = document.getElementById('health-fund-select');
    const locationInput = document.getElementById('user-location-input');
    
    if (forEdit && userState.userType === 'registered') {
        // פתיחה לעדכון: מילוי מהמצב השמור
        if (healthFundSelect && userState.healthFund) healthFundSelect.value = userState.healthFund;
        if (locationInput && userState.userLocation) locationInput.value = userState.userLocation;
        validateFieldRealTime('health-fund-select');
        validateFieldRealTime('user-location-input');
    } else if (!forEdit) {
        // פתיחה רגילה: טעינת טיוטה אם קיימת
        loadModalDraft();
    }
    // אורח (guest) בעדכון: שדות ריקים, יכול למלא ולהירשם
    
    showModalWithAnimation();
}

function hideWelcomeModal() {
    // בדיקת שינויים לא שמורים
    if (checkForUnsavedChanges()) {
        showCloseConfirmation();
        return;
    }
    
    // סגירה עם אנימציה
    hideModalWithAnimation();
}

function handleWelcomeFormSubmit() {
    const healthFundSelect = document.getElementById('health-fund-select');
    const locationInput = document.getElementById('user-location-input');
    
    // ולידציה מלאה
    let isValid = true;
    
    // בדיקת קופת חולים
    const healthFundValidation = validateHealthFund(healthFundSelect?.value || '');
    if (!healthFundValidation.isValid) {
        isValid = false;
        updateFieldStatus('health-fund-select', false, healthFundValidation.message, healthFundValidation.status);
        showFieldError('health-fund-select', healthFundValidation.message);
    } else {
        updateFieldStatus('health-fund-select', true, '', 'valid');
        clearFieldError('health-fund-select');
    }
    
    // בדיקת מיקום
    const locationValidation = validateLocation(locationInput?.value || '', { strict: true });
    if (!locationValidation.isValid) {
        isValid = false;
        updateFieldStatus('user-location-input', false, locationValidation.message, locationValidation.status);
        showFieldError('user-location-input', locationValidation.message);
    } else {
        updateFieldStatus('user-location-input', true, '', 'valid');
        clearFieldError('user-location-input');
    }
    
    if (!isValid) {
        // גלילה לשדה הראשון עם שגיאה
        const firstErrorField = document.querySelector('.form-group input.invalid, .form-group select.invalid');
        if (firstErrorField) {
            firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstErrorField.focus();
        }
        return;
    }
    
    // שמירת נתונים במצב
    userState.userType = 'registered';
    userState.healthFund = healthFundSelect.value.trim();
    userState.userLocation = locationInput.value.trim();
    userState.filterByLocation = true;
    
    // שמירה ב-localStorage
    saveUserState();
    
    // ניקוי טיוטה
    clearModalDraft();
    
    // סגירת מודאל עם אנימציה
    hideModalWithAnimation(() => {
        updateUpdateUserButtonVisibility();
        showSection('home');
        if (document.getElementById('doctors').classList.contains('active')) {
            handleDoctorsSearch();
        }
        showToast('✅ הנתונים נשמרו! החיפוש מותאם לאזור שלך.', 'success');
    });
}

function handleSkipAsGuest() {
    // הגדרת מצב אורח
    userState.userType = 'guest';
    userState.healthFund = null;
    userState.userLocation = null;
    userState.filterByLocation = false;
    
    // שמירה ב-localStorage
    saveUserState();
    
    // ניקוי טיוטה
    clearModalDraft();
    
    // סגירת מודאל עם אנימציה
    hideModalWithAnimation(() => {
        updateUpdateUserButtonVisibility();
        showSection('home');
        showToast('👋 המשך כאורח - החיפוש יהיה כללי לכל הארץ.', 'info');
    });
}

function handleCreateUser() {
    // סגירת מודאל עם אנימציה
    hideModalWithAnimation(() => {
        // מעבר לטופס יצירת קשר (ניתן לפתח למודול רישום נפרד)
        showSection('contact');
        
        showToast('💡 נא למלא את הטופס ליצירת משתמש חדש. לאחר מילוי, נתונים נוספים יישמרו.', 'info');
    });
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorId = `error-${fieldId}`;
    let errorEl = document.getElementById(errorId);
    
    if (!errorEl) {
        errorEl = document.createElement('span');
        errorEl.className = 'error-message';
        errorEl.id = errorId;
        if (field && field.parentElement) {
            field.parentElement.appendChild(errorEl);
        }
    }
    
    errorEl.textContent = message;
    errorEl.style.display = 'block';
    
    if (field) {
        field.classList.add('error', 'invalid');
        // עדכון אייקון סטטוס
        const statusIcon = document.getElementById(`status-${fieldId}`);
        if (statusIcon) {
            statusIcon.className = 'status-icon show invalid';
        }
    }
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorId = `error-${fieldId}`;
    const errorEl = document.getElementById(errorId);
    
    if (errorEl) {
        errorEl.style.display = 'none';
    }
    
    if (field) {
        field.classList.remove('error');
        // עדכון מצב לפי ערך השדה
        validateFieldRealTime(fieldId);
    }
}

// ============================================
// Toast Notifications
// ============================================

function showToast(message, type = 'info') {
    // יצירת אלמנט toast אם לא קיים
    let toast = document.getElementById('app-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'app-toast';
        toast.className = 'app-toast';
        document.body.appendChild(toast);
    }
    
    // עדכון תוכן וסגנון
    toast.textContent = message;
    toast.className = `app-toast app-toast-${type}`;
    
    // הצגה
    toast.style.display = 'block';
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // הסתרה אוטומטית אחרי 5 שניות
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.style.display = 'none';
        }, 300);
    }, 5000);
    
    console.log(`🔔 Toast (${type}): ${message}`);
}

// ============================================
// ניווט בין סקשנים
// ============================================

function initNavigation() {
    console.log('🔧 אתחול ניווט...');
    
    // קישורי תפריט
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionName = link.getAttribute('data-section');
            showSection(sectionName);
            closeMobileMenu();
        });
    });
    
    // קישורי תפריט תחתון
    const footerLinks = document.querySelectorAll('.main-footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const sectionName = href.substring(1); // הסרת ה-#
                showSection(sectionName);
            }
        });
    });
    
    // כפתור מעבר לרופאים מהבית
    const goToDoctorsBtn = document.getElementById('go-to-doctors');
    if (goToDoctorsBtn) {
        goToDoctorsBtn.addEventListener('click', () => {
            showSection('doctors');
        });
    }
    
    // תפריט מובייל
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        const navBackdrop = document.getElementById('nav-backdrop');
        
        // לחיצה על כפתור ההמבורגר
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.contains('active');
            
            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
        
        // סגירה בלחיצה על backdrop
        if (navBackdrop) {
            navBackdrop.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            });
        }
        
        // סגירה בלחיצה על קישור בתפריט
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // סגירה עם delay קטן לאנימציה חלקה
                setTimeout(() => {
                    closeMobileMenu();
                }, 150);
            });
        });
        
        // סגירה ב-ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
        
        // סגירה בעת שינוי גודל חלון (אם חוזר לדסקטופ)
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            }, 100);
        });
        
        // מניעת סגירה בלחיצה בתוך התפריט
        navMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    
    console.log('✅ ניווט מוכן');
}

function showSection(sectionName) {
    // הסתרת כל הסקשנים
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // הצגת הסקשן הנבחר
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // עדכון קישורי תפריט
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionName) {
                link.classList.add('active');
            }
        });
        
        // גלילה למעלה
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// פונקציות גלובליות לניהול תפריט מובייל (Drawer)
function openMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navBackdrop = document.getElementById('nav-backdrop');
    
    if (navMenu && navToggle) {
        // הוספת class active
        navMenu.classList.add('active');
        if (navBackdrop) {
            navBackdrop.classList.add('active');
            navBackdrop.setAttribute('aria-hidden', 'false');
        }
        
        // עדכון aria
        navToggle.setAttribute('aria-expanded', 'true');
        navToggle.setAttribute('aria-label', 'סגור תפריט');
        navToggle.textContent = '✕';
        
        // מניעת גלילה בגוף הדף כשהתפריט פתוח
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        
        // העברת focus לקישור הראשון (נגישות)
        setTimeout(() => {
            const firstLink = navMenu.querySelector('.nav-link');
            if (firstLink) {
                firstLink.focus();
            }
        }, 100);
    }
}

function closeMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navBackdrop = document.getElementById('nav-backdrop');
    
    if (navMenu) {
        navMenu.classList.remove('active');
    }
    
    if (navBackdrop) {
        navBackdrop.classList.remove('active');
        navBackdrop.setAttribute('aria-hidden', 'true');
    }
    
    if (navToggle) {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'תפריט');
        navToggle.textContent = '☰';
        
        // החזרת focus לכפתור (נגישות)
        setTimeout(() => {
            navToggle.focus();
        }, 100);
    }
    
    // החזרת גלילה רגילה
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
}

// ============================================
// מודול רופאים
// ============================================

// משתנה לניהול debounce timer
let searchDebounceTimer = null;

// פונקציה עזר ל-debounce
function debounceSearch(func, delay = 400) {
    return function(...args) {
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// הצגת אינדיקטור טעינה
function showLoadingIndicator() {
    const loadingIndicator = document.getElementById('doctors-loading');
    const doctorsList = document.getElementById('doctors-list');
    
    if (loadingIndicator) {
        loadingIndicator.style.display = 'flex';
        loadingIndicator.setAttribute('aria-busy', 'true');
    }
    
    if (doctorsList) {
        doctorsList.style.display = 'none';
    }
}

// הסתרת אינדיקטור טעינה
function hideLoadingIndicator() {
    const loadingIndicator = document.getElementById('doctors-loading');
    const doctorsList = document.getElementById('doctors-list');
    
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
        loadingIndicator.setAttribute('aria-busy', 'false');
    }
    
    if (doctorsList) {
        doctorsList.style.display = 'grid';
    }
}

// עדכון הודעת מספר תוצאות
function updateResultsCount(count, isSearching = false, searchTerm = '') {
    const resultsCount = document.getElementById('results-count');
    const resultsCountText = resultsCount ? resultsCount.querySelector('.results-count-text') : null;
    
    if (!resultsCount || !resultsCountText) return;
    
    if (isSearching) {
        resultsCount.style.display = 'block';
        resultsCountText.textContent = 'מחפש...';
    } else if (count === 0) {
        resultsCount.style.display = 'none';
    } else {
        resultsCount.style.display = 'block';
        if (searchTerm && searchTerm.trim() !== '') {
            resultsCountText.textContent = `נמצאו ${count} רופאים התואמים ל"${searchTerm}"`;
        } else {
            resultsCountText.textContent = `נמצאו ${count} רופאים`;
        }
    }
}

// קבלת הודעת "אין תוצאות" מותאמת
function getNoResultsMessage(searchTerm, hasLocationFilter, hasOtherFilters) {
    const searchTermLower = searchTerm ? searchTerm.toLowerCase().trim() : '';
    const hasSearchTerm = searchTermLower !== '';
    
    let message = '';
    let suggestions = [];
    
    if (hasLocationFilter && hasSearchTerm) {
        message = `לא נמצאו רופאים התואמים ל"${searchTerm}" באזור שלך.`;
        suggestions = [
            'נסה להסיר את סינון המיקום',
            'נסה חיפוש כללי יותר',
            'בדוק את האיות של המילים'
        ];
    } else if (hasLocationFilter && !hasSearchTerm) {
        message = 'לא נמצאו רופאים באזור שלך.';
        suggestions = [
            'נסה להסיר את סינון המיקום',
            'הרחב את החיפוש לכל הארץ'
        ];
    } else if (hasSearchTerm) {
        message = `לא נמצאו רופאים התואמים ל"${searchTerm}".`;
        suggestions = [
            'נסה חיפוש כללי יותר',
            'נסה מילה אחרת',
            'בדוק את האיות'
        ];
    } else {
        message = 'לא נמצאו רופאים.';
        suggestions = [
            'נסה להסיר סינונים',
            'נסה חיפוש אחר'
        ];
    }
    
    return { message, suggestions };
}

// שמירת חיפוש אחרון
function saveLastSearch(searchTerm) {
    try {
        if (searchTerm && searchTerm.trim() !== '') {
            localStorage.setItem('lastDoctorSearch', searchTerm.trim());
            console.log('💾 חיפוש אחרון נשמר:', searchTerm.trim());
        }
    } catch (error) {
        console.error('❌ שגיאה בשמירת חיפוש אחרון:', error);
    }
}

// טעינת חיפוש אחרון
function loadLastSearch() {
    try {
        const lastSearch = localStorage.getItem('lastDoctorSearch');
        if (lastSearch) {
            console.log('📦 חיפוש אחרון נטען:', lastSearch);
            return lastSearch;
        }
    } catch (error) {
        console.error('❌ שגיאה בטעינת חיפוש אחרון:', error);
    }
    return null;
}

function initDoctorsModule() {
    console.log('🔧 אתחול מודול רופאים...');
    
    // טעינת חיפוש אחרון ומילוי שדה החיפוש
    const searchInput = document.getElementById('doctor-search-input');
    const lastSearch = loadLastSearch();
    if (searchInput && lastSearch) {
        searchInput.value = lastSearch;
    }
    
    // הצגת כל הרופאים בהתחלה (עם סינון מיקום אם רלוונטי)
    const initialDoctors = filterDoctors(searchInput ? searchInput.value.trim() : '');
    renderDoctors(initialDoctors);
    
    // חיבור כפתור חיפוש
    const searchBtn = document.getElementById('doctor-search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', handleDoctorsSearch);
    }
    
    if (searchInput) {
        // חיפוש בלחיצת Enter
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleDoctorsSearch();
            }
        });
        
        // חיפוש בזמן אמת עם debounce
        const debouncedSearch = debounceSearch(() => {
            handleDoctorsSearch();
        }, 400);
        
        searchInput.addEventListener('input', () => {
            const currentValue = searchInput.value.trim();
            if (currentValue !== '') {
                debouncedSearch();
            } else {
                // אם השדה ריק - הצגת כל הרופאים
                clearTimeout(searchDebounceTimer);
                handleDoctorsSearch();
            }
        });
    }
    
    // חיבור מתג סינון מיקום
    const locationToggle = document.getElementById('location-filter-toggle');
    if (locationToggle) {
        locationToggle.addEventListener('change', (e) => {
            userState.filterByLocation = e.target.checked;
            saveUserState();
            handleDoctorsSearch(); // עדכון חיפוש עם/בלי סינון מיקום
        });
    }
    
    // חיבור כפתור הרחבת חיפוש
    const expandSearchBtn = document.getElementById('expand-search-btn');
    if (expandSearchBtn) {
        expandSearchBtn.addEventListener('click', () => {
            userState.filterByLocation = false;
            if (locationToggle) {
                locationToggle.checked = false;
            }
            saveUserState();
            handleDoctorsSearch();
        });
    }
    
    // עדכון תצוגת המתג
    updateLocationFilterToggle();
    
    console.log('✅ מודול רופאים מוכן');
}

function handleDoctorsSearch() {
    const searchInput = document.getElementById('doctor-search-input');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.trim();
    console.log(`🔍 חיפוש: "${searchTerm}"`);
    
    // הצגת אינדיקטור טעינה
    showLoadingIndicator();
    
    // עדכון הודעת מספר תוצאות למצב "מחפש"
    updateResultsCount(0, true, searchTerm);
    
    // סינון רופאים (עם השהיה קטנה לאנימציה)
    setTimeout(() => {
        const filteredDoctors = filterDoctors(searchTerm);
        
        // שמירת חיפוש אחרון (אם יש תוצאות או לא)
        if (searchTerm !== '') {
            saveLastSearch(searchTerm);
        }
        
        // הצגת תוצאות
        renderDoctors(filteredDoctors, searchTerm);
    }, 150);
}

function filterDoctors(searchTerm) {
    let doctors = [...doctorsData];
    
    // סינון לפי מיקום (אם משתמש רשום ומסנן לפי מיקום)
    if (userState.userType === 'registered' && 
        userState.userLocation && 
        userState.filterByLocation) {
        const locationLower = userState.userLocation.toLowerCase().trim();
        doctors = doctors.filter(doctor => {
            if (!doctor.city) return false;
            // בדיקה אם העיר של הרופא מתאימה למיקום המשתמש
            return doctor.city.toLowerCase().includes(locationLower) || 
                   locationLower.includes(doctor.city.toLowerCase());
        });
        
        console.log(`📍 סונן לפי מיקום "${userState.userLocation}": ${doctors.length} רופאים`);
    }
    
    // אם החיפוש ריק - החזרת הרופאים המסוננים (עם או בלי מיקום)
    if (!searchTerm || searchTerm.trim() === '') {
        return doctors;
    }
    
    const term = searchTerm.toLowerCase().trim();
    
    // סינון לפי: שם, התמחות, עיר, תגיות (על הרופאים שכבר מסוננים לפי מיקום)
    return doctors.filter(doctor => {
        // חיפוש בשם
        if (doctor.name && doctor.name.toLowerCase().includes(term)) {
            return true;
        }
        
        // חיפוש בהתמחות
        if (doctor.specialty && doctor.specialty.toLowerCase().includes(term)) {
            return true;
        }
        
        // חיפוש בעיר
        if (doctor.city && doctor.city.toLowerCase().includes(term)) {
            return true;
        }
        
        // חיפוש בתגיות
        if (doctor.tags && Array.isArray(doctor.tags)) {
            const tagMatch = doctor.tags.some(tag => 
                tag && tag.toLowerCase().includes(term)
            );
            if (tagMatch) return true;
        }
        
        return false;
    });
}

function renderDoctors(doctors, searchTerm = '') {
    console.log(`📋 מציג ${doctors.length} רופאים`);
    
    const doctorsList = document.getElementById('doctors-list');
    const emptyState = document.getElementById('doctors-empty');
    const expandMessage = document.getElementById('expand-search-message');
    const noResultsMessage = document.getElementById('no-results-message');
    const searchInput = document.getElementById('doctor-search-input');
    const currentSearchTerm = searchTerm || (searchInput ? searchInput.value.trim() : '');
    
    if (!doctorsList) {
        console.error('❌ לא נמצא container לרופאים');
        return;
    }
    
    // הסתרת אינדיקטור טעינה
    hideLoadingIndicator();
    
    // עדכון תצוגת מתג סינון מיקום
    updateLocationFilterToggle();
    
    // בדיקת סינונים פעילים
    const hasLocationFilter = userState.userType === 'registered' && 
                              userState.userLocation && 
                              userState.filterByLocation;
    const hasOtherFilters = false; // ניתן להוסיף בעתיד
    
    // אם אין רופאים - הצגת הודעות מותאמות
    if (!doctors || doctors.length === 0) {
        doctorsList.innerHTML = '';
        
        // עדכון הודעת מספר תוצאות
        updateResultsCount(0, false, currentSearchTerm);
        
        // קבלת הודעה מותאמת
        const { message, suggestions } = getNoResultsMessage(currentSearchTerm, hasLocationFilter, hasOtherFilters);
        
        if (emptyState) {
            emptyState.style.display = 'block';
        }
        
        if (noResultsMessage) {
            noResultsMessage.innerHTML = `
                <p class="no-results-text">${escapeHtml(message)}</p>
                ${suggestions.length > 0 ? `
                    <div class="no-results-suggestions">
                        <p>הצעות:</p>
                        <ul>
                            ${suggestions.map(suggestion => `<li>${escapeHtml(suggestion)}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            `;
        }
        
        // אם משתמש רשום מסנן לפי מיקום ולא נמצאו רופאים - הצגת הודעה להרחבת חיפוש
        if (hasLocationFilter && expandMessage) {
            expandMessage.style.display = 'block';
        } else if (expandMessage) {
            expandMessage.style.display = 'none';
        }
        
        return;
    }
    
    // עדכון הודעת מספר תוצאות
    updateResultsCount(doctors.length, false, currentSearchTerm);
    
    // הסתרת הודעות
    if (emptyState) {
        emptyState.style.display = 'none';
    }
    if (expandMessage) {
        expandMessage.style.display = 'none';
    }
    
    // ניקוי הרשימה
    doctorsList.innerHTML = '';
    
    // יצירת כרטיסי רופאים עם אנימציה
    doctors.forEach((doctor, index) => {
        const card = createDoctorCard(doctor);
        // הוספת השהיה קלה לכל כרטיס לאנימציה מדורגת
        card.style.animationDelay = `${index * 0.05}s`;
        doctorsList.appendChild(card);
    });
    
    console.log('✅ רופאים מוצגים');
}

function updateLocationFilterToggle() {
    const toggleContainer = document.getElementById('location-filter-toggle-container');
    const toggle = document.getElementById('location-filter-toggle');
    
    // הצגת המתג רק למשתמשים רשומים עם מיקום
    if (userState.userType === 'registered' && userState.userLocation) {
        if (toggleContainer) {
            toggleContainer.style.display = 'block';
        }
        if (toggle) {
            toggle.checked = userState.filterByLocation;
        }
    } else {
        if (toggleContainer) {
            toggleContainer.style.display = 'none';
        }
    }
}

// ============================================
// פונקציות עזר לכרטיסי רופאים
// ============================================

// יצירת Avatar (תמונה או placeholder)
function generateAvatar(doctor) {
    if (doctor.avatar) {
        return `<img src="${escapeHtml(doctor.avatar)}" alt="${escapeHtml(doctor.name)}" class="doctor-avatar-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`;
    }
    
    // יצירת placeholder לפי שם הרופא
    const initials = doctor.name 
        ? doctor.name.split(' ').map(n => n[0]).filter(c => c && c !== 'ד' && c !== '"').slice(0, 2).join('')
        : 'DR';
    
    return `<div class="doctor-avatar-placeholder">${escapeHtml(initials)}</div>`;
}

// הצגת כוכבי דירוג
function renderStars(rating) {
    if (!rating || rating < 0 || rating > 5) {
        rating = 0;
    }
    
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHtml = '';
    
    // כוכבים מלאים
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<span class="doctor-star doctor-star-filled">★</span>';
    }
    
    // כוכב חצי
    if (hasHalfStar) {
        starsHtml += '<span class="doctor-star doctor-star-half">★</span>';
    }
    
    // כוכבים ריקים
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<span class="doctor-star doctor-star-empty">★</span>';
    }
    
    return starsHtml;
}

// טקסט זמינות
function getAvailabilityText(availability) {
    switch(availability) {
        case 'available_now':
            return 'זמין עכשיו';
        case 'available_tomorrow':
            return 'זמין מחר';
        case 'available_in_3_days':
            return 'תור זמין בעוד 3 ימים';
        default:
            return 'אין מידע על זמינות';
    }
}

// צבע אינדיקטור זמינות
function getAvailabilityColor(availability) {
    switch(availability) {
        case 'available_now':
            return 'green';
        case 'available_tomorrow':
            return 'orange';
        case 'available_in_3_days':
            return 'gray';
        default:
            return 'gray';
    }
}

// חישוב מרחק (פיקטיבי)
function calculateDistance(userLocation, doctorCity) {
    if (!userLocation || !doctorCity) {
        return null;
    }
    
    // חישוב פשוט: אם אותה עיר = 2-5 ק"מ, אחרת = 10-50 ק"מ
    const userLocationLower = userLocation.toLowerCase().trim();
    const doctorCityLower = doctorCity.toLowerCase().trim();
    
    if (userLocationLower.includes(doctorCityLower) || doctorCityLower.includes(userLocationLower)) {
        // אותה עיר - מרחק קטן
        return (Math.random() * 3 + 2).toFixed(1); // 2-5 ק"מ
    } else {
        // עיר אחרת - מרחק גדול יותר
        return (Math.random() * 40 + 10).toFixed(1); // 10-50 ק"מ
    }
}

function createDoctorCard(doctor) {
    const card = document.createElement('div');
    card.className = 'doctor-card doctor-card-premium';
    
    // חישוב מרחק (אם יש מיקום משתמש)
    const distance = userState.userLocation && doctor.city 
        ? calculateDistance(userState.userLocation, doctor.city)
        : null;
    
    // בניית Avatar
    const avatarHtml = generateAvatar(doctor);
    
    // בניית כוכבים
    const rating = doctor.rating || 0;
    const starsHtml = renderStars(rating);
    const reviewsCount = doctor.reviewsCount || 0;
    
    // בניית תגיות
    const tagsHtml = doctor.tags && Array.isArray(doctor.tags) 
        ? doctor.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')
        : '';
    
    // זמינות
    const availability = doctor.availability || 'available_in_3_days';
    const availabilityText = getAvailabilityText(availability);
    const availabilityColor = getAvailabilityColor(availability);
    const isAvailableNow = availability === 'available_now';
    
    // תוויות (מומלץ/חדש)
    let badgesHtml = '';
    if (doctor.isRecommended) {
        badgesHtml += '<span class="doctor-badge doctor-badge-recommended">מומלץ</span>';
    }
    if (doctor.isNew) {
        badgesHtml += '<span class="doctor-badge doctor-badge-new">חדש</span>';
    }
    
    card.innerHTML = `
        <!-- Avatar Section -->
        <div class="doctor-avatar-section">
            <div class="doctor-avatar-wrapper">
                ${avatarHtml}
                ${badgesHtml ? `<div class="doctor-avatar-badges">${badgesHtml}</div>` : ''}
            </div>
        </div>
        
        <!-- Header Info -->
        <div class="doctor-header-premium">
            <h3 class="doctor-name-premium">${escapeHtml(doctor.name || '')}</h3>
            <span class="doctor-specialty-badge">${escapeHtml(doctor.specialty || '')}</span>
        </div>
        
        <!-- Rating Section -->
        <div class="doctor-rating-section">
            <div class="doctor-stars">${starsHtml}</div>
            <div class="doctor-rating-info">
                <span class="doctor-rating-value">${rating.toFixed(1)}</span>
                <span class="doctor-reviews-count">(${reviewsCount} ביקורות)</span>
            </div>
        </div>
        
        <!-- Meta Info -->
        <div class="doctor-meta-info">
            ${doctor.experience ? `
                <div class="doctor-meta-item">
                    <span class="doctor-meta-icon">⏱️</span>
                    <span class="doctor-meta-text">${escapeHtml(doctor.experience)}</span>
                </div>
            ` : ''}
            ${distance ? `
                <div class="doctor-meta-item">
                    <span class="doctor-meta-icon">📍</span>
                    <span class="doctor-meta-text">${distance} ק"מ ממך</span>
                </div>
            ` : doctor.city ? `
                <div class="doctor-meta-item">
                    <span class="doctor-meta-icon">📍</span>
                    <span class="doctor-meta-text">${escapeHtml(doctor.city)}</span>
                </div>
            ` : ''}
            <div class="doctor-meta-item">
                <span class="doctor-meta-icon">${isAvailableNow ? '🟢' : availabilityColor === 'orange' ? '🟠' : '⚪'}</span>
                <span class="doctor-availability doctor-availability-${availabilityColor}">
                    ${isAvailableNow ? '<span class="availability-indicator"></span>' : ''}
                    ${escapeHtml(availabilityText)}
                </span>
            </div>
        </div>
        
        <!-- Description -->
        <div class="doctor-card-body">
            ${doctor.description ? `<p class="doctor-description">${escapeHtml(doctor.description)}</p>` : ''}
            
            <!-- Contact Info -->
            <div class="doctor-contact-info">
                ${doctor.clinic ? `
                    <div class="doctor-contact-item">
                        <span class="doctor-contact-icon">🏥</span>
                        <span class="doctor-contact-text">${escapeHtml(doctor.clinic)}</span>
                    </div>
                ` : ''}
                ${doctor.phone ? `
                    <div class="doctor-contact-item">
                        <span class="doctor-contact-icon">📞</span>
                        <a href="tel:${doctor.phone}" class="doctor-contact-link">${escapeHtml(doctor.phone)}</a>
                    </div>
                ` : ''}
            </div>
            
            <!-- Tags -->
            ${tagsHtml ? `<div class="doctor-tags">${tagsHtml}</div>` : ''}
        </div>
        
        <!-- Action Buttons -->
        <div class="doctor-actions">
            <button class="doctor-action-btn btn-book-appointment" data-doctor-id="${doctor.id}" aria-label="קבע תור ל${escapeHtml(doctor.name)}">
                קבע תור
            </button>
            <button class="doctor-action-btn btn-send-message" data-doctor-id="${doctor.id}" aria-label="שלח הודעה ל${escapeHtml(doctor.name)}">
                שלח הודעה
            </button>
        </div>
    `;
    
    // הוספת event listeners לכפתורים (placeholder - לא עושים כלום כרגע)
    const bookBtn = card.querySelector('.btn-book-appointment');
    const messageBtn = card.querySelector('.btn-send-message');
    
    if (bookBtn) {
        bookBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('📅 קבע תור לרופא:', doctor.name);
            // TODO: פתיחת מודאל/פעולה בעתיד
        });
    }
    
    if (messageBtn) {
        messageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('💬 שלח הודעה לרופא:', doctor.name);
            // TODO: פתיחת מודאל/פעולה בעתיד
        });
    }
    
    return card;
}

// ============================================
// מחירון (מי עושה מה — וכמה זה עולה)
// ============================================

function initPricingModule() {
    const container = document.getElementById('pricing-list');
    if (!container) return;
    
    container.innerHTML = PRICING_ITEMS.map(item => `
        <div class="pricing-item">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.price)}</p>
        </div>
    `).join('');
}

// ============================================
// טופס יצירת קשר
// ============================================

function initContactForm() {
    console.log('🔧 אתחול טופס יצירת קשר...');
    
    const form = document.getElementById('contact-form');
    if (!form) {
        console.error('❌ טופס לא נמצא');
        return;
    }
    
    form.addEventListener('submit', handleFormSubmit);
    
    // ולידציה בזמן אמת
    const requiredFields = ['full-name', 'phone', 'subject'];
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('blur', () => validateField(fieldId));
            field.addEventListener('input', () => clearFieldError(fieldId));
        }
    });
    
    console.log('✅ טופס מוכן');
}

// כתובת אימייל לקבלת פניות מטופס יצירת קשר ודירוגי אתר
const CONTACT_EMAIL = 'dvnka2@gmail.com';

function handleFormSubmit(e) {
    e.preventDefault();
    
    try {
        console.log('📝 שליחת טופס...');
        
        const form = document.getElementById('contact-form');
        if (!form) return;
        
        const formDataObj = {
            fullName: getFieldValue('full-name'),
            phone: getFieldValue('phone'),
            email: getFieldValue('email'),
            subject: getFieldValue('subject'),
            message: getFieldValue('message')
        };
        
        if (!validateForm(formDataObj)) {
            showToast('נא למלא את כל השדות המסומנים ב-*', 'error');
            return;
        }
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.textContent : '';
        
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'שולח...';
        }
        
        // FormSubmit: המייל ב-URL חייב להיות מקודד (אין @ גולמי)
        const formSubmitUrl = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`;
        
        const payload = {
            _subject: `פנייה חדשה מרפואה ידידותית - ${getSubjectLabel(formDataObj.subject)}`,
            'שם מלא': formDataObj.fullName,
            'טלפון': formDataObj.phone,
            'דוא"ל': formDataObj.email || '(לא צוין)',
            'נושא': getSubjectLabel(formDataObj.subject),
            'הודעה': formDataObj.message || '(לא צוין)',
            _template: 'box',
            _captcha: 'false'
        };
        
        fetch(formSubmitUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                if (data.success === 'true' || data.success === true) {
                    showSuccessMessage();
                    clearForm();
                    showToast('הודעתכם נשלחה בהצלחה!', 'success');
                } else {
                    throw new Error(data.message || 'שגיאה בשליחה');
                }
            })
            .catch(err => {
                console.error('❌ שגיאה בשליחת טופס:', err);
                showToast('שגיאה בשליחת ההודעה. נא לנסות שוב או לשלוח מייל ישירות.', 'error');
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                }
            });
    } catch (err) {
        console.error('❌ שגיאה בטופס יצירת קשר:', err);
        showToast('אירעה שגיאה. נא לבדוק את השדות ולנסות שוב.', 'error');
    }
}

// ============================================
// דירוג האתר (1–10)
// ============================================

const RATING_STORAGE_KEY = 'siteRatingSubmitted';

function initRatingModule() {
    const form = document.getElementById('rating-form');
    const rangeInput = document.getElementById('rating-input');
    const valueEl = document.getElementById('rating-value');
    const commentEl = document.getElementById('rating-comment');
    const successEl = document.getElementById('rating-success');
    
    if (!form || !rangeInput || !valueEl) {
        return;
    }
    
    // עדכון ערך התצוגה לפי ברירת מחדל
    valueEl.textContent = rangeInput.value;
    rangeInput.setAttribute('aria-valuenow', rangeInput.value);
    
    // אם המשתמש כבר שלח דירוג בעבר (במכשיר זה) – מציגים הודעת תודה
    try {
        const hasRated = localStorage.getItem(RATING_STORAGE_KEY);
        if (hasRated === 'true' && successEl) {
            successEl.style.display = 'block';
        }
    } catch (e) {
        // אם localStorage לא זמין – מתעלמים בשקט
    }
    
    rangeInput.addEventListener('input', () => {
        valueEl.textContent = rangeInput.value;
        rangeInput.setAttribute('aria-valuenow', rangeInput.value);
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const rating = parseInt(rangeInput.value, 10);
        if (Number.isNaN(rating) || rating < 1 || rating > 10) {
            showToast('נא לבחור דירוג בין 1 ל-10', 'error');
            return;
        }
        
        const submitBtn = form.querySelector('button[type=\"submit\"]');
        const originalText = submitBtn ? submitBtn.textContent : '';
        
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'שולח...';
        }
        
        const comment = commentEl && commentEl.value ? commentEl.value.trim() : '(ללא הערה)';
        
        const formSubmitUrl = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`;
        const payload = {
            _subject: `דירוג חדש לאתר - ${rating}/10`,
            rating: String(rating),
            comment: comment,
            userType: userState.userType || 'unknown',
            healthFund: userState.healthFund || '(לא צוין)',
            city: userState.userLocation || '(לא צוין)',
            _template: 'box',
            _captcha: 'false'
        };
        
        fetch(formSubmitUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(data => {
                if (data.success === 'true') {
                    try {
                        localStorage.setItem(RATING_STORAGE_KEY, 'true');
                    } catch (e) {
                        // ignore
                    }
                    if (successEl) {
                        successEl.style.display = 'block';
                    }
                    showToast('תודה על הדירוג! המשוב יעזור לשפר את חוויית השימוש באתר.', 'success');
                } else {
                    throw new Error(data.message || 'שגיאה בשליחת הדירוג');
                }
            })
            .catch(err => {
                console.error('❌ שגיאה בשליחת דירוג:', err);
                showToast('שגיאה בשליחת הדירוג. נא לנסות שוב מאוחר יותר.', 'error');
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }
            });
    });
}

function getSubjectLabel(value) {
    const labels = {
        'new-appointment': 'תור חדש',
        'medical-question': 'שאלה רפואית כללית',
        'second-opinion': 'חוות דעת נוספת',
        'home-visit': 'ביקור בית',
        'other': 'אחר'
    };
    return labels[value] || value || 'ללא נושא';
}

function validateForm(data) {
    let isValid = true;
    
    // שם מלא
    if (!data.fullName || data.fullName.trim().length < 2) {
        showFieldError('full-name', 'נא להזין שם מלא תקין');
        isValid = false;
    }
    
    // טלפון (רק ספרות, 9–10)
    const phoneDigits = (data.phone || '').replace(/\D/g, '');
    if (phoneDigits.length < 9 || phoneDigits.length > 10) {
        showFieldError('phone', 'נא להזין מספר טלפון תקין (9-10 ספרות)');
        isValid = false;
    }
    
    // אימייל (לא חובה, אבל אם מוזן - צריך להיות תקין)
    if (data.email && data.email.trim() !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showFieldError('email', 'נא להזין כתובת אימייל תקינה');
            isValid = false;
        }
    }
    
    // נושא
    if (!data.subject || data.subject === '') {
        showFieldError('subject', 'נא לבחור נושא');
        isValid = false;
    }
    
    return isValid;
}

function validateField(fieldId) {
    const value = getFieldValue(fieldId);
    
    switch(fieldId) {
        case 'full-name':
            if (!value || value.trim().length < 2) {
                showFieldError(fieldId, 'נא להזין שם מלא תקין');
                return false;
            }
            break;
        case 'phone': {
            const digits = (value || '').replace(/\D/g, '');
            if (digits.length < 9 || digits.length > 10) {
                showFieldError(fieldId, 'נא להזין מספר טלפון תקין (9-10 ספרות)');
                return false;
            }
            break;
        }
        case 'email':
            if (value && value.trim() !== '') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    showFieldError(fieldId, 'נא להזין כתובת אימייל תקינה');
                    return false;
                }
            }
            break;
        case 'subject':
            if (!value || value === '') {
                showFieldError(fieldId, 'נא לבחור נושא');
                return false;
            }
            break;
    }
    
    clearFieldError(fieldId);
    return true;
}

function getFieldValue(fieldId) {
    const field = document.getElementById(fieldId);
    return field ? field.value.trim() : '';
}

function showFieldError(fieldId, message) {
    clearFieldError(fieldId);
    
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`error-${fieldId}`);
    
    if (field) {
        field.classList.add('error');
    }
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`error-${fieldId}`);
    
    if (field) {
        field.classList.remove('error');
    }
    
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

function showSuccessMessage() {
    const successMsg = document.getElementById('form-success');
    if (successMsg) {
        successMsg.style.display = 'block';
        
        // גלילה להודעה
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // הסתרת ההודעה אחרי 5 שניות
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 5000);
    }
}

function clearForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.reset();
        
        // ניקוי כל ההודעות שגיאה
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(msg => {
            msg.textContent = '';
            msg.style.display = 'none';
        });
        
        // ניקוי מחלקות שגיאה
        const errorFields = form.querySelectorAll('.error');
        errorFields.forEach(field => {
            field.classList.remove('error');
        });
    }
}

// ============================================
// פונקציות עזר
// ============================================

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// Chatbot - עוזר רפואי ידידותי
// ============================================

// מערך אינטנטים - מנוע הבנת כוונות
const chatIntents = [
    {
        id: "findDoctor",
        category: "doctors",
        keywords: ["רופא", "רופאה", "למצוא רופא", "חפש רופא", "רופאים", "רופא ילדים", "רופא נשים", "רופא משפחה", "מומחה"],
        examples: [
            "איך אני מוצא רופא?",
            "יש רופאים בעיר שלי?",
            "איך רואים פרטים מלאים של רופא?",
            "איך מחפשים רופא ילדים?",
            "איפה רואים רופאים?"
        ],
        answer: `בשמחה 😊

כדי למצוא רופא שמתאים לך:

1. עבור לחלק *"מצא רופא"* באתר.

2. תוכל לסנן לפי עיר, התמחות וקופת חולים.

3. בכל כרטיס רופא תראה דירוג, ניסיון, זמינות ופרטי קשר.

אם תרצה – תכתוב לי: *עיר + סוג רופא* ואני אכוון אותך לחלק הרלוונטי.`,
        actions: [
            { type: "showSection", target: "doctors" },
            { type: "highlightElement", target: "#doctor-search-input" }
        ]
    },
    {
        id: "searchByCity",
        category: "search",
        keywords: ["עיר", "באזור", "קרוב", "לידי", "מיקום", "איפה", "מרחק"],
        examples: [
            "אפשר לחפש לפי עיר?",
            "יש רופאים בעיר שלי?",
            "איך יודעים איזה רופא הכי קרוב אליי?",
            "רופאים בתל אביב",
            "רופאים קרובים"
        ],
        answer: `כדי לחפש רופאים לפי עיר:

1. עבור לאזור *הרופאים* באתר.

2. בשורת החיפוש או במסננים – בחר את שם העיר.

3. תראה רק רופאים שפועלים באזור שבחרת.

טיפ קטן: אפשר גם לשלב עיר + התמחות, למשל *"רופא משפחה בחולון"* 🙂`,
        actions: [
            { type: "showSection", target: "doctors" },
            { type: "scrollTo", target: "#doctors-search-area" }
        ]
    },
    {
        id: "doctorCard",
        category: "doctors",
        keywords: ["כרטיס", "כרטיסיה", "פרטים", "דירוג", "ביקורות", "זמינות", "תור"],
        examples: [
            "מה רואים בכרטיס רופא?",
            "איך מבינים את הדירוג?",
            "מה זה זמין עכשיו?",
            "איך רואים ביקורות?",
            "מה זה מומלץ?"
        ],
        answer: `בכל כרטיס רופא תוכל לראות:

• שם הרופא והתמחות

• דירוג ומספר ביקורות

• ניסיון מקצועי

• זמינות (זמין עכשיו / בקרוב)

• עיר, מרפאה וטלפון

• תגיות כמו "מומלץ", "חדש", "מתאים לילדים" ועוד

אם תלחץ על כפתור *"קבע תור"* או *"שלח הודעה"* – תקבל את כל האפשרויות ליצירת קשר.`,
        actions: [
            { type: "showSection", target: "doctors" }
        ]
    },
    {
        id: "bookAppointment",
        category: "appointment",
        keywords: ["תור", "קבע תור", "תורים", "זימון", "מתי", "מתי זמין"],
        examples: [
            "איך קובעים תור?",
            "איך רואים תורים זמינים?",
            "מתי הרופא זמין?",
            "איך מזמינים תור?",
            "איפה קובעים תור?"
        ],
        answer: `כדי לקבוע תור:

1. מצא רופא שמתאים לך (עיר + התמחות).

2. בכרטיס הרופא לחץ על *"קבע תור"*.

3. שם תראה את אפשרויות התיאום – טלפון, טופס פנייה או הפניה למרפאה.

כרגע האתר מדגים את התהליך בצורה ידידותית, ובחלק מהמקומות ההמשך הוא בטלפון/במרפאה עצמה 🙂`,
        actions: [
            { type: "showSection", target: "doctors" }
        ]
    },
    {
        id: "contactDoctor",
        category: "contact",
        keywords: ["יצירת קשר", "ליצור קשר", "הודעה", "שלח הודעה", "טלפון", "להתקשר"],
        examples: [
            "איך יוצרים קשר עם רופא?",
            "איך שולחים הודעה?",
            "איפה רואים מספר טלפון?",
            "איך מתקשרים לרופא?"
        ],
        answer: `אפשר ליצור קשר עם רופא בכמה דרכים:

• דרך כפתור *"שלח הודעה"* בכרטיס הרופא (אם קיים).

• דרך *עמוד יצירת קשר* באתר.

• באמצעות הטלפון שמופיע בכרטיס הרופא.

אם תרצה – אני יכול לפתוח לך את עמוד *"יצירת קשר"* ולכוון אותך שם ✅`,
        actions: [
            { type: "showSection", target: "contact" }
        ]
    },
    {
        id: "darkMode",
        category: "technical",
        keywords: ["מצב כהה", "מצב לילה", "dark mode", "מצב תצוגה", "תמה", "theme"],
        examples: [
            "איך מפעילים מצב כהה?",
            "יש מצב לילה באתר?",
            "איך משנים את הצבעים?",
            "איך מחליפים בין מצב בהיר לכהה?"
        ],
        answer: `מצב כהה (Dark Mode) כאן בדיוק בשביל העיניים שלך 🌓

כדי להפעיל אותו:

1. בחלק העליון של האתר יש כפתור קטן עם אייקון ☀️ / 🌙.

2. לחיצה עליו תעביר בין מצב בהיר למצב כהה.

האתר זוכר את ההעדפה שלך אוטומטית 😊`,
        actions: [
            { type: "highlightElement", target: "#theme-toggle" }
        ]
    },
    {
        id: "welcomeModal",
        category: "modal",
        keywords: ["מודאל", "חלון בהתחלה", "קופת חולים", "מיקום בהתחלה", "ברוכים הבאים"],
        examples: [
            "מה זה המודאל שנפתח בהתחלה?",
            "למה צריך לבחור קופת חולים?",
            "איך מדלגים על המודאל?",
            "מה זה חלון הפתיחה?",
            "למה צריך מיקום?"
        ],
        answer: `החלון שנפתח בהתחלה עוזר לנו להתאים עבורך את הרופאים:

• קופת חולים – כדי להציג רופאים שמתאימים למסלול שלך.

• מיקום – כדי להראות לך רופאים קרובים.

אפשר גם לדלג ולהמשיך כאורח, ותמיד ניתן לעדכן את ההעדפות אחר כך דרך ההגדרות באתר.`,
        actions: [
            { type: "openModal", target: "#welcome-modal" }
        ]
    },
    {
        id: "navigation",
        category: "navigation",
        keywords: ["תפריט", "ניווט", "עמודים", "איפה", "איך מגיעים", "יצירת קשר", "מחירון", "שאלות"],
        examples: [
            "איפה עמוד יצירת קשר?",
            "איך מגיעים למחירון?",
            "איפה רואים שאלות נפוצות?",
            "איך עוברים בין עמודים?",
            "איפה התפריט?"
        ],
        answer: `כדי להתמצא באתר:

• תפריט עליון – מעבר מהיר בין אזורים כמו רופאים, מחירון, שאלות נפוצות ויצירת קשר.

• תפריט תחתון – קישורים מהירים לעמודים חשובים.

אם תגיד לי *"קח אותי לעמוד יצירת קשר"* או *"איפה המחירון"* – אני אכוון אותך לשם אוטומטית 🙂`,
        actions: []
    },
    {
        id: "pricing",
        category: "pricing",
        keywords: ["מחיר", "מחירון", "עלות", "כמה עולה", "תשלום", "מחירים"],
        examples: [
            "איפה רואים מחירון?",
            "כמה עולה תור?",
            "מה המחירים?",
            "איך משלמים?",
            "מה המחיר של תור לרופא?"
        ],
        answer: `המחירון באתר הוא דוגמה כללית בלבד, כדי לתת תחושה של סדר ושקיפות.

כדי לראות את המחירון:

1. עבור לעמוד *"מחירון שירותים"* מהתפריט.

2. שם תראה פרקי מחירון שונים לפי סוג השירות.

לתשומת לבך: המידע באתר אינו מחליף ייעוץ מול המרפאה או קופת החולים שלך.`,
        actions: [
            { type: "showSection", target: "pricing" }
        ]
    },
    {
        id: "askDoctor",
        category: "ask",
        keywords: ["שאלה", "שאלות", "לשאול", "ייעוץ", "תשובה", "שאל רופא"],
        examples: [
            "איך שואלים שאלה לרופא?",
            "איפה שואלים שאלות?",
            "איך מקבלים תשובה?",
            "יש אפשרות לשאול שאלות?"
        ],
        answer: `באזור *"שאל רופא"* ניתן לראות שאלות נפוצות ודוגמאות לסוגי פניות.

האתר לא מחליף אבחנה רפואית אמיתית, אבל הוא עוזר להבין למי כדאי לפנות ובאיזה סוג רופא.

אם יש מצב רפואי שמדאיג אותך – תמיד עדיף לפנות לרופא אמיתי או למוקד חירום במידת הצורך.`,
        actions: [
            { type: "showSection", target: "ask-doctor" }
        ]
    },
    {
        id: "techHelp",
        category: "technical",
        keywords: ["בעיה", "לא עובד", "באג", "עזרה טכנית", "תמיכה", "שגיאה"],
        examples: [
            "האתר לא עובד",
            "יש בעיה טכנית",
            "איך מדווחים על באג?",
            "צריך עזרה טכנית"
        ],
        answer: `אם משהו לא עובד כמו שצריך – בוא נעבור יחד:

• נסה לרענן את הדף.

• אם אתה בטלפון – בדוק חיבור אינטרנט.

• אפשר גם לנסות דפדפן אחר.

אם עדיין יש בעיה – אפשר לשלוח פנייה דרך *"יצירת קשר"* ולתאר מה לא עבד, ונשתדל לעזור 🙂`,
        actions: [
            { type: "showSection", target: "contact" }
        ]
    },
    {
        id: "botHelp",
        category: "bot",
        keywords: ["מה אתה", "מה אתה יודע", "מה אתה עושה", "איך אתה יכול לעזור", "מה התפקיד שלך"],
        examples: [
            "מה אתה יודע לעשות?",
            "איך אתה יכול לעזור לי?",
            "מה התפקיד שלך?",
            "מה אתה?"
        ],
        answer: `היי 🙂

אני העוזר הדיגיטלי של *רפואה ידידותית*.

אני יכול לעזור לך:

• למצוא רופאים לפי עיר, התמחות או קופה

• להבין מה אומרות הכרטיסיות והזמינות

• להגיע לעמודים כמו יצירת קשר, מחירון ועוד

• להסביר איך להפעיל מצב כהה (Dark Mode)

פשוט תכתוב לי מה אתה מחפש 😊`,
        actions: [
            {
                type: "quickActions",
                buttons: [
                    { label: "מציאת רופא", intentId: "findDoctor" },
                    { label: "חיפוש לפי עיר", intentId: "searchByCity" },
                    { label: "הבנת כרטיסיות", intentId: "doctorCard" },
                    { label: "קבע תור", intentId: "bookAppointment" },
                    { label: "יצירת קשר", intentId: "contactDoctor" },
                    { label: "עזרה טכנית", intentId: "techHelp" }
                ]
            }
        ]
    },
    {
        id: "greeting",
        category: "greeting",
        keywords: ["שלום", "היי", "בוקר טוב", "ערב טוב", "מה נשמע", "התחלה"],
        examples: [
            "שלום",
            "היי",
            "בוקר טוב",
            "מה נשמע?",
            "איך מתחילים?"
        ],
        answer: `היי 🙂

אני העוזר הדיגיטלי של *רפואה ידידותית*.

אני יכול לעזור לך:

• למצוא רופאים לפי עיר, התמחות או קופה

• להבין מה אומרות הכרטיסיות והזמינות

• להגיע לעמודים כמו יצירת קשר, מחירון ועוד

• להסביר איך להפעיל מצב כהה (Dark Mode)

פשוט תכתוב לי מה אתה מחפש 😊`,
        actions: [
            {
                type: "quickActions",
                buttons: [
                    { label: "איך למצוא רופא", intentId: "findDoctor" },
                    { label: "איך להשתמש באתר", intentId: "botHelp" },
                    { label: "עזרה טכנית", intentId: "techHelp" }
                ]
            }
        ]
    }
];

// משתנים גלובליים לצ'אט-בוט
let chatbotOpen = false;
let chatHistory = [];

// אתחול הצ'אט-בוט
function initChatBot() {
    console.log('🤖 אתחול צ\'אט-בוט...');
    
    const toggle = document.getElementById('chatbot-toggle');
    const container = document.getElementById('chatbot-container');
    const closeBtn = document.getElementById('chatbot-close');
    const sendBtn = document.getElementById('chatbot-send');
    const input = document.getElementById('chatbot-input');
    
    if (!toggle || !container || !closeBtn || !sendBtn || !input) {
        console.warn('⚠️ לא נמצאו כל רכיבי הצ\'אט-בוט');
        return;
    }
    
    // אירועי toggle
    toggle.addEventListener('click', handleChatBotToggle);
    
    // אירועי סגירה
    closeBtn.addEventListener('click', handleChatBotClose);
    
    // אירועי שליחה
    sendBtn.addEventListener('click', handleChatBotSend);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleChatBotSend();
        }
    });
    
    // סגירה בלחיצה מחוץ לחלון
    container.addEventListener('click', (e) => {
        if (e.target === container) {
            handleChatBotClose();
        }
    });
    
    // הודעת ברכה ראשונית
    setTimeout(() => {
        renderBotMessage('שלום 🙂\n\nאני העוזר הידידותי של *רפואה ידידותית*.\n\nאני כאן כדי לעזור לך למצוא רופאים, להבין את האתר ולקבוע תורים בקלות.\n\nאפשר לכתוב לי בשפה חופשית, למשל:\n\n*"אני מחפש רופא ילדים בחולון"* או *"איך מפעילים מצב כהה?"*', {
            intentId: 'greeting'
        });
    }, 500);
    
    console.log('✅ צ\'אט-בוט מוכן');
}

// טיפול בלחיצה על toggle
function handleChatBotToggle() {
    chatbotOpen = !chatbotOpen;
    const container = document.getElementById('chatbot-container');
    const toggle = document.getElementById('chatbot-toggle');
    
    if (!container || !toggle) return;
    
    if (chatbotOpen) {
        container.classList.add('active');
        container.setAttribute('aria-hidden', 'false');
        toggle.setAttribute('aria-expanded', 'true');
        
        // פוקוס על input
        setTimeout(() => {
            const input = document.getElementById('chatbot-input');
            if (input) input.focus();
        }, 300);
    } else {
        container.classList.remove('active');
        container.setAttribute('aria-hidden', 'true');
        toggle.setAttribute('aria-expanded', 'false');
    }
}

// טיפול בסגירה
function handleChatBotClose() {
    chatbotOpen = false;
    const container = document.getElementById('chatbot-container');
    const toggle = document.getElementById('chatbot-toggle');
    
    if (container) {
        container.classList.remove('active');
        container.setAttribute('aria-hidden', 'true');
    }
    if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
    }
}

// טיפול בשליחת הודעה
function handleChatBotSend() {
    const input = document.getElementById('chatbot-input');
    if (!input) return;
    
    const userText = input.value.trim();
    if (!userText) return;
    
    // הצגת הודעת משתמש
    renderUserMessage(userText);
    
    // ניקוי input
    input.value = '';
    
    // שמירה בהיסטוריה
    chatHistory.push({ type: 'user', text: userText });
    
    // זיהוי כוונה ותגובה
    setTimeout(() => {
        const intent = detectIntent(userText);
        if (intent) {
            renderBotMessage(intent.answer, intent);
            if (intent.actions && intent.actions.length > 0) {
                executeActions(intent.actions);
            }
        } else {
            renderBotMessage('נראה שלא הבנתי עד הסוף מה התכוונת 🤔\n\nאפשר לכתוב לי שוב במשפט פשוט יותר, או לבחור אחת מהאפשרויות כאן למטה.', {
                intentId: 'unknown'
            });
            renderQuickActions([
                { label: "איך למצוא רופא", intentId: "findDoctor" },
                { label: "מה אתה יודע לעשות", intentId: "botHelp" },
                { label: "עזרה טכנית", intentId: "techHelp" }
            ]);
        }
    }, 500);
}

// הצגת הודעת בוט
function renderBotMessage(text, options = {}) {
    const messagesContainer = document.getElementById('chatbot-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chatbot-message chatbot-message-bot';
    
    const avatar = document.createElement('div');
    avatar.className = 'chatbot-message-avatar';
    avatar.textContent = '🤖';
    
    const content = document.createElement('div');
    content.className = 'chatbot-message-content';
    content.textContent = text;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    
    messagesContainer.appendChild(messageDiv);
    
    // גלילה למטה
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // שמירה בהיסטוריה
    chatHistory.push({ type: 'bot', text, options });
    
    // הוספת quick actions אם יש
    if (options.quickActions) {
        setTimeout(() => {
            renderQuickActions(options.quickActions);
        }, 300);
    }
}

// הצגת הודעת משתמש
function renderUserMessage(text) {
    const messagesContainer = document.getElementById('chatbot-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chatbot-message chatbot-message-user';
    
    const avatar = document.createElement('div');
    avatar.className = 'chatbot-message-avatar';
    avatar.textContent = '👤';
    
    const content = document.createElement('div');
    content.className = 'chatbot-message-content';
    content.textContent = text;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    
    messagesContainer.appendChild(messageDiv);
    
    // גלילה למטה
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// הצגת quick actions
function renderQuickActions(buttons) {
    const messagesContainer = document.getElementById('chatbot-messages');
    if (!messagesContainer || !buttons || buttons.length === 0) return;
    
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'chatbot-quick-actions';
    
    buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.className = 'chatbot-quick-action-btn';
        btn.textContent = button.label;
        btn.addEventListener('click', () => {
            const intent = chatIntents.find(i => i.id === button.intentId);
            if (intent) {
                renderBotMessage(intent.answer, intent);
                if (intent.actions && intent.actions.length > 0) {
                    executeActions(intent.actions);
                }
            }
        });
        actionsDiv.appendChild(btn);
    });
    
    messagesContainer.appendChild(actionsDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// זיהוי כוונה (Intent Detection)
function detectIntent(userText) {
    const text = userText.toLowerCase().trim();
    
    // חיפוש לפי keywords
    for (const intent of chatIntents) {
        for (const keyword of intent.keywords) {
            if (text.includes(keyword.toLowerCase())) {
                return intent;
            }
        }
    }
    
    // חיפוש לפי examples (fuzzy match)
    for (const intent of chatIntents) {
        for (const example of intent.examples) {
            const exampleWords = example.toLowerCase().split(/\s+/);
            const textWords = text.split(/\s+/);
            const matchCount = exampleWords.filter(word => 
                textWords.some(tw => tw.includes(word) || word.includes(tw))
            ).length;
            
            if (matchCount >= 2) {
                return intent;
            }
        }
    }
    
    // אם לא נמצא - החזר greeting או botHelp
    if (text.length < 10) {
        return chatIntents.find(i => i.id === 'greeting') || chatIntents.find(i => i.id === 'botHelp');
    }
    
    return null;
}

// ביצוע פעולות (Actions)
function executeActions(actions) {
    if (!actions || actions.length === 0) return;
    
    actions.forEach(action => {
        switch (action.type) {
            case 'showSection':
                if (action.target && typeof showSection === 'function') {
                    showSection(action.target);
                }
                break;
                
            case 'scrollTo':
                if (action.target) {
                    const element = document.querySelector(action.target);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
                break;
                
            case 'highlightElement':
                if (action.target) {
                    const element = document.querySelector(action.target);
                    if (element) {
                        // הוספת highlight זמני
                        element.style.transition = 'all 0.3s ease';
                        element.style.boxShadow = '0 0 0 3px var(--miki-turquoise)';
                        element.focus();
                        setTimeout(() => {
                            element.style.boxShadow = '';
                        }, 2000);
                    }
                }
                break;
                
            case 'openModal':
                if (action.target) {
                    const modal = document.querySelector(action.target);
                    if (modal && typeof showWelcomeModal === 'function') {
                        showWelcomeModal();
                    }
                }
                break;
                
            case 'quickActions':
                if (action.buttons) {
                    setTimeout(() => {
                        renderQuickActions(action.buttons);
                    }, 300);
                }
                break;
        }
    });
}

// ============================================
// הפעלת האפליקציה
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    registerServiceWorker();
});

console.log('✅ קובץ app.js נטען');

// ============================================
// הצהרת בעלות / זכויות יוצרים
// ============================================
// הקוד פותח על-ידי: Michael Papaismedov.
// אין לעשות שימוש, העתקה או הפצה של הקוד ללא אישור.
// ============================================
