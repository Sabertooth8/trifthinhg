// --- INITIAL DATABASE & BRANDED PRODUCTS ---
const DEFAULT_PRODUCTS = [
    // SHOES
    { id: 1, name: "Jordan 1 Retro High Travis Scott", price: 15500000, category: "Shoes", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Nike Dunk Low Panda", price: 2100000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770962765257.png" },
    { id: 3, name: "Adidas Yeezy Boost 350 V2", price: 4500000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770964242917.png" },
    { id: 4, name: "Nike Air Force 1 '07", price: 1600000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770962831083.png" },
    { id: 11, name: "Nike Air Max 97 Silver Bullet", price: 2800000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770964192061.jpg" },
    { id: 12, name: "Adidas Samba OG White Black", price: 1900000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770964340697.png" },
    { id: 101, name: "Adidas Samba OG Black White", price: 1900000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770964786295.png" },
    { id: 102, name: "Adidas Bali Island", price: 2800000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770964948186.png" },
    { id: 103, name: "Adidas Liverpool FC", price: 2500000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770965268175.png" },
    { id: 104, name: "Adidas Wales Bonner Silver", price: 7500000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770965358230.png" },
    { id: 105, name: "Adidas Wales Bonner Leopard", price: 8200000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770965481374.png" },
    { id: 106, name: "Adidas Tobacco Gruen", price: 2100000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770965430568.png" },
    { id: 28, name: "Adidas Handball Spezial Navy", price: 1850000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770965727387.png" },
    { id: 107, name: "Adidas Handball Spezial Aluminium", price: 1950000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770965777617.png" },
    { id: 108, name: "Adidas Handball Spezial Scarlet", price: 1850000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770965837375.png" },
    { id: 109, name: "Adidas Blackburn SPZL Red", price: 3500000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770965952607.png" },
    { id: 110, name: "Adidas Padiham Brown", price: 2400000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770966057085.png" },
    { id: 111, name: "Adidas Munchen Navy", price: 2200000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770966276839.png" },
    { id: 112, name: "Adidas Manchester 89", price: 4200000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770966640116.png" },
    { id: 113, name: "Adidas LG2 Liam Gallagher", price: 5500000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770967187993.png" },
    { id: 114, name: "Adidas London Slime", price: 2800000, category: "Shoes", image: "C:/Users/ASUS/.gemini/antigravity/brain/177feb75-197f-447c-99c5-941c28eceec6/media__1770967290001.jpg" },
    { id: 115, name: "Adidas Stockholm", price: 2800000, category: "Shoes", image: "images/stockholm_blue_yellow.png" },
    { id: 116, name: "Adidas Campus 00s Grey", price: 1850000, category: "Shoes", image: "https://images.unsplash.com/photo-1626379616459-b2ece1d93636?auto=format&fit=crop&w=800&q=80" },
    { id: 117, name: "Adidas SL 72 RS Blue", price: 1550000, category: "Shoes", image: "https://images.unsplash.com/photo-1539185441755-769473a23a50?auto=format&fit=crop&w=800&q=80" },
    { id: 118, name: "Adidas Hamburg Navy Gum", price: 1650000, category: "Shoes", image: "https://images.unsplash.com/photo-1605733162220-410a5666ca0b?auto=format&fit=crop&w=800&q=80" },
    { id: 119, name: "Adidas Paris City Series", price: 2900000, category: "Shoes", image: "https://images.unsplash.com/photo-1605733162220-410a5666ca0b?auto=format&fit=crop&w=800&q=80" },
    { id: 120, name: "Adidas Berlin City Series", price: 2900000, category: "Shoes", image: "https://images.unsplash.com/photo-1605733162220-410a5666ca0b?auto=format&fit=crop&w=800&q=80" },
    { id: 121, name: "Adidas Dublin City Series", price: 3200000, category: "Shoes", image: "https://images.unsplash.com/photo-1626379616459-b2ece1d93636?auto=format&fit=crop&w=800&q=80" },
    { id: 122, name: "Adidas Wien City Series", price: 2800000, category: "Shoes", image: "https://images.unsplash.com/photo-1605733162220-410a5666ca0b?auto=format&fit=crop&w=800&q=80" },
    { id: 123, name: "Adidas Jamaica Island Series", price: 2700000, category: "Shoes", image: "https://images.unsplash.com/photo-1605733162220-410a5666ca0b?auto=format&fit=crop&w=800&q=80" },
    { id: 124, name: "Adidas Samoa Island Series", price: 2100000, category: "Shoes", image: "https://images.unsplash.com/photo-1626379616459-b2ece1d93636?auto=format&fit=crop&w=800&q=80" },
    { id: 125, name: "Adidas Hawaii Island Series", price: 2800000, category: "Shoes", image: "https://images.unsplash.com/photo-1605733162220-410a5666ca0b?auto=format&fit=crop&w=800&q=80" },
    { id: 126, name: "Adidas Tahiti Island Series", price: 2800000, category: "Shoes", image: "https://images.unsplash.com/photo-1605733162220-410a5666ca0b?auto=format&fit=crop&w=800&q=80" },
    { id: 127, name: "Adidas Silverbirch SPZL", price: 3800000, category: "Shoes", image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80" },
    { id: 128, name: "Adidas Hiaven SPZL Black", price: 3400000, category: "Shoes", image: "https://images.unsplash.com/photo-1626379616459-b2ece1d93636?auto=format&fit=crop&w=800&q=80" },
    { id: 129, name: "Adidas Winterhill SPZL", price: 3100000, category: "Shoes", image: "https://images.unsplash.com/photo-1626379616459-b2ece1d93636?auto=format&fit=crop&w=800&q=80" },
    { id: 130, name: "Adidas Moscrop SPZL", price: 2900000, category: "Shoes", image: "https://images.unsplash.com/photo-1626379616459-b2ece1d93636?auto=format&fit=crop&w=800&q=80" },
    { id: 131, name: "Adidas Intack SPZL Navy", price: 2600000, category: "Shoes", image: "https://images.unsplash.com/photo-1605733162220-410a5666ca0b?auto=format&fit=crop&w=800&q=80" },
    { id: 132, name: "Adidas Garwen SPZL Brown", price: 2800000, category: "Shoes", image: "https://images.unsplash.com/photo-1626379616459-b2ece1d93636?auto=format&fit=crop&w=800&q=80" },
    { id: 133, name: "Adidas Wales Bonner Red Samba", price: 7800000, category: "Shoes", image: "https://images.unsplash.com/photo-1595950621276-bb9c2201ad21?auto=format&fit=crop&w=800&q=80" },
    { id: 134, name: "Adidas Samba Vegan White", price: 1850000, category: "Shoes", image: "https://images.unsplash.com/photo-1589188055153-2393bb713022?auto=format&fit=crop&w=800&q=80" },
    { id: 13, name: "Puma Suede Classic XI", price: 1100000, category: "Shoes", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80" },
    { id: 14, name: "Puma RS-X Reinvention", price: 1750000, category: "Shoes", image: "https://images.unsplash.com/photo-1597043530274-06798e99990b?auto=format&fit=crop&w=800&q=80" },
    { id: 23, name: "Puma Cali Dream White", price: 1350000, category: "Shoes", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80" },
    { id: 24, name: "Puma Future Rider Play On", price: 1450000, category: "Shoes", image: "https://images.unsplash.com/photo-1539185441755-769473a23a50?auto=format&fit=crop&w=800&q=80" },
    { id: 26, name: "Puma Mayze Thrift Platform", price: 1650000, category: "Shoes", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80" },
    { id: 32, name: "Puma Suede Classic Red White", price: 1100000, category: "Shoes", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80" },
    { id: 33, name: "Puma Clyde All-Pro Coast", price: 1850000, category: "Shoes", image: "https://images.unsplash.com/photo-1539185441755-769473a23a50?auto=format&fit=crop&w=800&q=80" },
    { id: 34, name: "Puma CA Pro Heritage", price: 1250000, category: "Shoes", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80" },
    { id: 35, name: "Puma Slipstream Mid Retro", price: 1550000, category: "Shoes", image: "https://images.unsplash.com/photo-1600185365483-1b9268a9efe5?auto=format&fit=crop&w=800&q=80" },
    { id: 36, name: "Puma Roma Basic Black White", price: 950000, category: "Shoes", image: "https://images.unsplash.com/photo-1595950621276-bb9c2201ad21?auto=format&fit=crop&w=800&q=80" },

    // HOODIES
    { id: 5, name: "Stussy 8 Ball Hoodie Black", price: 2200000, category: "Hoodie", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80" },
    { id: 6, name: "Fear Of God Essentials Hoodie", price: 1850000, category: "Hoodie", image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=80" },
    { id: 15, name: "Supreme Box Logo Hoodie Navy", price: 12500000, category: "Hoodie", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80" },
    { id: 17, name: "Off-White Caravaggio Hoodie", price: 7800000, category: "Hoodie", image: "https://images.unsplash.com/photo-1632766863604-5f5f3e46c96a?auto=format&fit=crop&w=800&q=80" },
    { id: 7, name: "Carhartt WIP Chase Hoodie", price: 1400000, category: "Hoodie", image: "https://images.unsplash.com/photo-1510271322841-55ec7468667a?auto=format&fit=crop&w=800&q=80" },

    // JACKETS
    { id: 8, name: "Arc'teryx Beta LT Jacket", price: 8500000, category: "Jacket", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80" },
    { id: 9, name: "The North Face Nuptse 700", price: 4200000, category: "Jacket", image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80" },
    { id: 18, name: "Stone Island Soft Shell R", price: 9200000, category: "Jacket", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80" },
    { id: 19, name: "Patagonia Better Sweater", price: 2400000, category: "Jacket", image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=800&q=80" },
    { id: 20, name: "BAPE Shark Jacket Full Zip", price: 6500000, category: "Jacket", image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80" },
    { id: 10, name: "Dickies Eisenhower Jacket", price: 950000, category: "Jacket", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80" }
];

const DEFAULT_CONFIG = {
    bizName: 'Loopwear',
    heroText: '<span class="line-1">ARCHIVE</span><span class="line-2">SMARTER.<span class="reg-mark">®</span></span>',
    payments: {
        'DANA': '',
        'OVO': '',
        'GOPAY': '',
        'SHOPEE PAY': '',
        'BCA': '',
        'MANDIRI': '',
        'BNI': '',
        'BRI': ''
    }
};

// Initialize Storage with Auto-Sync for new defaults
function initStorage() {
    let currentProducts = JSON.parse(localStorage.getItem('products')) || [];
    DEFAULT_PRODUCTS.forEach(defP => {
        const index = currentProducts.findIndex(p => p.id === defP.id);
        if (index === -1) {
            currentProducts.push(defP);
        }
    });
    localStorage.setItem('products', JSON.stringify(currentProducts));
    if (!localStorage.getItem('orders')) localStorage.setItem('orders', JSON.stringify([]));

    // Init Config
    if (!localStorage.getItem('system_config')) {
        localStorage.setItem('system_config', JSON.stringify(DEFAULT_CONFIG));
    }
    applySystemConfig();
}

function applySystemConfig() {
    const config = JSON.parse(localStorage.getItem('system_config'));
    document.getElementById('display-biz-name').innerText = config.bizName;
    document.getElementById('display-hero-text').innerHTML = config.heroText;
    document.getElementById('page-title').innerText = config.bizName + " - Premium Archive Store";
}
initStorage();

let activeProductId = null;
let isAdmin = false;

// --- LIVE CLOCK ---
function updateNavClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    const clockEl = document.getElementById('nav-clock');
    if (clockEl) {
        clockEl.textContent = `${h}:${m}:${s}`;
    }
}
setInterval(updateNavClock, 1000);
updateNavClock();

// --- UPDATE PRODUCT COUNT IN HERO ---
function updateHeroCount() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const countEl = document.querySelector('.mini-stat-num');
    if (countEl) {
        countEl.innerHTML = `${products.length}<span class="mini-stat-suffix">+</span>`;
    }
}

// --- SCROLL REVEAL ANIMATION ---
let scrollObserver = null;
function initScrollReveal() {
    // Disconnect old observer if exists
    if (scrollObserver) scrollObserver.disconnect();

    const reveals = document.querySelectorAll('.scroll-reveal:not(.revealed)');
    if (reveals.length === 0) return;

    scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger animation for sequential reveals
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, i * 100);
                scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
    });

    reveals.forEach(el => scrollObserver.observe(el));
}

// Fallback: reveal elements that are already in viewport on load
function revealVisibleElements() {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100) {
            el.classList.add('revealed');
        }
    });
}

// --- CORE UTILS ---
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
    if (pageId === 'buyer-page') {
        renderProducts();
        updateHeroCount();
        // Re-trigger scroll reveal for newly visible elements
        setTimeout(initScrollReveal, 100);
    }
    if (pageId === 'admin-page') {
        if (!isAdmin) { showPage('login-page'); return; }
        updateStats();
        renderInventory();
        renderOrders();
        setInterval(() => {
            document.getElementById('current-timestamp').innerText = new Date().toLocaleString();
        }, 1000);
    }
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showAdminSection(sectionId, el) {
    document.querySelectorAll('.admin-section').forEach(s => s.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    if (el) el.classList.add('active');

    if (sectionId === 'system-config') loadSystemConfigInputs();
}

function updateStats() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const totalRevenue = products.reduce((acc, p) => acc + p.price, 0);
    document.getElementById('stat-total-products').innerText = products.length;
    document.getElementById('stat-total-orders').innerText = orders.length;
    document.getElementById('stat-total-revenue').innerText = 'IDR ' + totalRevenue.toLocaleString('id-ID');
}

// --- BUYER APP ---
let activeCategory = 'All';

function renderProducts() {
    const products = JSON.parse(localStorage.getItem('products'));
    const container = document.getElementById('product-list');

    // Show skeleton loading first
    container.innerHTML = `
        <div class="products-grid-new">
            ${Array(8).fill('').map(() => `
                <div class="skeleton-card">
                    <div class="skeleton-img"></div>
                    <div class="skeleton-text">
                        <div class="skeleton-line"></div>
                        <div class="skeleton-line"></div>
                        <div class="skeleton-line"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    setTimeout(() => {
        renderProductsContent(products);
    }, 500);
}

function renderProductsContent(products) {
    const container = document.getElementById('product-list');
    container.innerHTML = '';

    // Get search & sort values
    const searchQuery = (document.getElementById('search-input')?.value || '').toLowerCase();
    const sortVal = document.getElementById('sort-select')?.value || 'default';

    // Get unique categories
    const categories = ['All', ...new Set(products.map(p => p.category))];

    // Filter by category
    let filtered = activeCategory === 'All' ? [...products] : products.filter(p => p.category === activeCategory);

    // Filter by search
    if (searchQuery) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchQuery));
    }

    // Sort
    if (sortVal === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    if (sortVal === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    if (sortVal === 'name-asc') filtered.sort((a, b) => a.name.localeCompare(b.name));

    // Get wishlist
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Group by brand
    const brands = {};
    filtered.forEach(p => {
        const brandName = p.name.split(' ')[0].toUpperCase();
        if (!brands[brandName]) brands[brandName] = [];
        brands[brandName].push(p);
    });

    // Category Tabs
    const tabsHtml = `
        <div class="catalog-tabs">
            ${categories.map(cat => `
                <button class="catalog-tab ${cat === activeCategory ? 'active' : ''}" onclick="filterCategory('${cat}')">
                    ${cat}
                    <span class="tab-count">${cat === 'All' ? products.length : products.filter(p => p.category === cat).length}</span>
                </button>
            `).join('')}
        </div>
    `;
    container.innerHTML = tabsHtml;

    if (filtered.length === 0) {
        container.innerHTML += '<p style="color:var(--text-dim); text-align:center; padding:3rem;">No items found.</p>';
        return;
    }

    // Render each brand group
    Object.entries(brands).forEach(([brand, items], brandIdx) => {
        const brandBox = document.createElement('div');
        brandBox.className = 'brand-section';

        const featured = items[0];
        const rest = items.slice(1);

        brandBox.innerHTML = `
            <div class="brand-header-new">
                <div class="brand-name-wrap">
                    <h3 class="brand-name">${brand}</h3>
                    <span class="brand-count">${items.length} PIECES</span>
                </div>
                <div class="brand-line"></div>
            </div>
            
            ${items.length > 3 ? `
            <div class="brand-featured" onclick="openProductDetail(${featured.id})" style="cursor:pointer;">
                <div class="featured-img-wrap">
                    <img src="${featured.image}" class="featured-product-img" alt="${featured.name}" 
                         onerror="this.src='https://via.placeholder.com/600x400?text=UNIT'" loading="lazy">
                    <div class="featured-overlay"></div>
                    <div class="featured-badge">FEATURED</div>
                </div>
                <div class="featured-info">
                    <span class="featured-category">${featured.category.toUpperCase()}</span>
                    <h4 class="featured-name">${featured.name.replace(new RegExp(brand, 'i'), '').trim()}</h4>
                    <span class="featured-price">IDR ${featured.price.toLocaleString('id-ID')}</span>
                    <button onclick="event.stopPropagation(); openCheckout(${featured.id}, '${featured.name.replace(/'/g, "\\'")}', ${featured.price}, '${featured.category}')" class="btn-procure">
                        <span>Procure Now</span>
                        <span class="procure-arrow">→</span>
                    </button>
                </div>
            </div>
            ` : ''}
            
            <div class="products-grid-new">
                ${(items.length > 3 ? rest : items).map((p, i) => `
                    <div class="product-card-new" style="animation-delay: ${i * 0.05}s" onclick="openProductDetail(${p.id})">
                        <div class="card-img-wrap">
                            <img src="${p.image}" class="card-product-img" alt="${p.name}" 
                                 onerror="this.src='https://via.placeholder.com/300x300?text=UNIT'" loading="lazy">
                            <button class="wishlist-btn ${wishlist.includes(p.id) ? 'active' : ''}" 
                                    onclick="event.stopPropagation(); toggleWishlist(${p.id})">
                                <span class="wishlist-heart">${wishlist.includes(p.id) ? '♥' : '♡'}</span>
                            </button>
                            <div class="card-overlay">
                                <button onclick="event.stopPropagation(); openCheckout(${p.id}, '${p.name.replace(/'/g, "\\'")}', ${p.price}, '${p.category}')" class="card-procure-btn">PROCURE →</button>
                            </div>
                        </div>
                        <div class="card-details">
                            <div class="card-meta">
                                <span class="card-category-tag">${p.category}</span>
                                <span class="card-id">#${String(p.id).padStart(3, '0')}</span>
                            </div>
                            <h4 class="card-name">${p.name.replace(new RegExp(brand, 'i'), '').trim()}</h4>
                            <div class="card-bottom">
                                <span class="card-price">IDR ${p.price.toLocaleString('id-ID')}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(brandBox);
    });

    // Re-init scroll reveal for new elements
    setTimeout(() => {
        initScrollReveal();
        revealVisibleElements();
    }, 50);
}

function filterCategory(cat) {
    activeCategory = cat;
    renderProducts();
    // Smooth scroll to catalog
    document.getElementById('product-catalog')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function openCheckout(id, name, price, category) {
    activeProductId = id;
    const modal = document.getElementById('checkoutModal');
    modal.style.display = 'flex';
    document.getElementById('modalTitle').innerText = name;
    document.getElementById('modalPrice').innerText = 'IDR ' + price.toLocaleString('id-ID');

    const sizeContainer = document.getElementById('size-options');
    let sizes = [];
    if (category === 'Shoes') {
        for (let i = 39; i <= 45; i++) sizes.push(i);
    } else {
        sizes = ['S', 'M', 'L', 'XL', 'XXL'];
    }

    sizeContainer.innerHTML = sizes.map(s => `
        <div class="size-btn" onclick="selectSize('${s}', this)">${s}</div>
    `).join('');
    document.getElementById('selectedSize').value = '';
}

function selectSize(val, el) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('selectedSize').value = val;
}

// Payment logic refined (Numbers now dynamic from system_config)

function selectPayment(val, el) {
    document.querySelectorAll('.payment-option').forEach(b => b.classList.remove('active'));
    el.classList.add('active');

    const ewalletSubGrid = document.getElementById('ewallet-options');
    const bankSubGrid = document.getElementById('bank-options');
    const infoBox = document.getElementById('payment-info');

    // Reset grids & info box
    ewalletSubGrid.style.display = 'none';
    bankSubGrid.style.display = 'none';
    infoBox.style.display = 'none';
    document.getElementById('selectedPayment').value = '';

    if (val === 'E-Wallet') {
        ewalletSubGrid.style.display = 'grid';
    } else if (val === 'Bank Transfer') {
        bankSubGrid.style.display = 'grid';
    }
}

function selectSubPayment(val, el) {
    document.querySelectorAll('.sub-payment-option').forEach(b => b.classList.remove('active'));
    el.classList.add('active');

    const isEwallet = el.closest('#ewallet-options');
    const type = isEwallet ? 'E-Wallet' : 'Bank';
    const finalMethod = type + ' (' + val + ')';
    document.getElementById('selectedPayment').value = finalMethod;

    const infoBox = document.getElementById('payment-info');
    const config = JSON.parse(localStorage.getItem('system_config'));
    const accountNum = config.payments[val.toUpperCase()];

    if (accountNum) {
        infoBox.innerHTML = `DESTINATION: ${accountNum}<br><small>(Transfer to this number to proceed)</small>`;
        infoBox.style.display = 'block';
    } else {
        infoBox.style.display = 'none';
    }
}

function closeCheckout() {
    document.getElementById('checkoutModal').style.display = 'none';
}

function processOrder() {
    const name = document.getElementById('cust-name').value;
    const size = document.getElementById('selectedSize').value;
    const payment = document.getElementById('selectedPayment').value;

    if (!name || !size || !payment) {
        alert("CRITICAL ERROR: MISSING PARAMETERS (NAME/SIZE/PAYMENT)");
        return;
    }

    const products = JSON.parse(localStorage.getItem('products'));
    const product = products.find(p => p.id === activeProductId);
    const orders = JSON.parse(localStorage.getItem('orders'));

    orders.unshift({
        id: 'T-' + Math.floor(Math.random() * 10000),
        customer: name,
        product: product.name,
        size: size,
        channel: payment,
        time: new Date().toLocaleString()
    });

    localStorage.setItem('orders', JSON.stringify(orders));
    alert("TRANSMISSION SUCCESSFUL. UNIT RESERVED.");
    closeCheckout();
    document.getElementById('cust-name').value = '';
}

// --- ADMIN SYSTEM ---
function handleLogin() {
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    if (u === 'admin' && p === 'admin123') {
        isAdmin = true;
        document.getElementById('admin-link').style.display = 'none';
        document.getElementById('logout-link').style.display = 'inline';
        showPage('admin-page');
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
}

function logout() {
    isAdmin = false;
    document.getElementById('admin-link').style.display = 'inline';
    document.getElementById('logout-link').style.display = 'none';
    showPage('buyer-page');
}

function renderInventory() {
    const products = JSON.parse(localStorage.getItem('products'));
    document.getElementById('inventory-list').innerHTML = products.map(p => `
        <tr>
            <td><img src="${p.image}" style="width:50px; height:50px; border:1px solid #333; object-fit:cover;"></td>
            <td style="font-weight:700;">${p.name}</td>
            <td><span class="badge" style="position:static;">${p.category}</span></td>
            <td style="color:var(--primary); font-weight:900;">IDR ${p.price.toLocaleString('id-ID')}</td>
            <td><button onclick="deleteProduct(${p.id})" class="btn" style="padding: 0.3rem 0.6rem; font-size: 0.7rem; border-color: #ff2200; color: #ff2200;">Wipe Data</button></td>
        </tr>
    `).join('');
}

function renderOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    document.getElementById('order-list').innerHTML = orders.length ? orders.map(o => `
        <tr>
            <td style="font-family: monospace; color: var(--primary);">${o.id}</td>
            <td style="font-weight:700;">${o.customer}</td>
            <td>${o.product}</td>
            <td><span class="status-badge" style="background:#333; color:white; border-color:#555;">${o.size}</span></td>
            <td>
                <span class="status-badge">${o.channel}</span>
            </td>
            <td style="font-size:0.7rem; color:var(--text-muted);">${o.time}</td>
            <td>
                <button onclick="deleteOrder('${o.id}')" class="btn" style="padding: 0.2rem 0.5rem; font-size: 0.6rem; border-color: #ff220055; color: #ff220055;">Delete</button>
            </td>
        </tr>
    `).join('') : '<tr><td colspan="7" style="text-align:center; padding: 2rem; color: var(--text-muted);">No transmissions recorded.</td></tr>';
}

function deleteOrder(orderId) {
    if (confirm("DELETE TRANSACTION LOG? This action cannot be undone.")) {
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders = orders.filter(o => o.id !== orderId);
        localStorage.setItem('orders', JSON.stringify(orders));
        updateStats();
        renderOrders();
    }
}

function addProduct() {
    const name = document.getElementById('new-p-name').value;
    const price = parseInt(document.getElementById('new-p-price').value);
    const cat = document.getElementById('new-p-category').value;
    const img = document.getElementById('new-p-image').value;

    if (!name || !price || !img) { alert("DATA CORRUPTION: MISSING FIELDS"); return; }

    const products = JSON.parse(localStorage.getItem('products'));
    products.unshift({ id: Date.now(), name, price, category: cat, image: img });
    localStorage.setItem('products', JSON.stringify(products));

    updateStats();
    renderInventory();
    showAdminSection('manage-products', document.querySelector('.admin-tab'));
    alert("ENTRY REGISTERED SUCCESSFULLY.");
}

function deleteProduct(id) {
    if (confirm("PERMANENT SYSTEM WIPE? DATA CANNOT BE RECOVERED.")) {
        let products = JSON.parse(localStorage.getItem('products'));
        products = products.filter(p => p.id !== id);
        localStorage.setItem('products', JSON.stringify(products));
        updateStats();
        renderInventory();
    }
}

function loadSystemConfigInputs() {
    const config = JSON.parse(localStorage.getItem('system_config'));
    document.getElementById('config-biz-name').value = config.bizName;
    document.getElementById('config-biz-slogan').value = config.heroText;

    document.getElementById('pay-dana').value = config.payments['DANA'] || '';
    document.getElementById('pay-ovo').value = config.payments['OVO'] || '';
    document.getElementById('pay-gopay').value = config.payments['GOPAY'] || '';
    document.getElementById('pay-shopeepay').value = config.payments['SHOPEE PAY'] || '';

    document.getElementById('pay-bca').value = config.payments['BCA'] || '';
    document.getElementById('pay-mandiri').value = config.payments['MANDIRI'] || '';
    document.getElementById('pay-bni').value = config.payments['BNI'] || '';
    document.getElementById('pay-bri').value = config.payments['BRI'] || '';
}

function saveSystemConfig() {
    const config = {
        bizName: document.getElementById('config-biz-name').value,
        heroText: document.getElementById('config-biz-slogan').value,
        payments: {
            'DANA': document.getElementById('pay-dana').value,
            'OVO': document.getElementById('pay-ovo').value,
            'GOPAY': document.getElementById('pay-gopay').value,
            'SHOPEE PAY': document.getElementById('pay-shopeepay').value,
            'BCA': document.getElementById('pay-bca').value,
            'MANDIRI': document.getElementById('pay-mandiri').value,
            'BNI': document.getElementById('pay-bni').value,
            'BRI': document.getElementById('pay-bri').value
        }
    };

    localStorage.setItem('system_config', JSON.stringify(config));
    applySystemConfig();
    alert("SYSTEM PARAMETERS UPDATED SUCCESSFULLY.");
}

// --- HERO FEATURED IMAGES ROTATION ---
const heroImages = [
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80'
];

let currentHeroIdx = 0;

function changeHeroImage(direction) {
    if (direction === 'next') {
        currentHeroIdx = (currentHeroIdx + 1) % heroImages.length;
    } else {
        currentHeroIdx = (currentHeroIdx - 1 + heroImages.length) % heroImages.length;
    }
    const img = document.getElementById('hero-featured-img');
    if (img) {
        img.style.opacity = '0';
        setTimeout(() => {
            img.src = heroImages[currentHeroIdx];
            img.style.opacity = '1';
        }, 300);
    }
}

// Bind hero nav buttons
document.getElementById('hero-prev')?.addEventListener('click', () => changeHeroImage('prev'));
document.getElementById('hero-next')?.addEventListener('click', () => changeHeroImage('next'));

// Auto-rotate hero images
setInterval(() => changeHeroImage('next'), 6000);

// --- INITIAL BOOT ---
renderProducts();
updateHeroCount();

// Initialize scroll reveal - robust approach
function bootScrollReveal() {
    initScrollReveal();
    // Fallback check after a brief delay
    setTimeout(revealVisibleElements, 200);
    setTimeout(revealVisibleElements, 800);
    // Also check on first scroll
    let scrolledOnce = false;
    window.addEventListener('scroll', function onFirstScroll() {
        if (!scrolledOnce) {
            scrolledOnce = true;
            revealVisibleElements();
            initScrollReveal();
        }
    }, { passive: true });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootScrollReveal);
} else {
    bootScrollReveal();
}

// ======================================================
// NEW PREMIUM FEATURES
// ======================================================

// ======== HAMBURGER MENU ========
function toggleMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
}

function closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    hamburger?.classList.remove('active');
    navLinks?.classList.remove('open');
}

// ======== SCROLL PROGRESS BAR ========
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    const bar = document.getElementById('scroll-progress');
    if (bar) bar.style.width = progress + '%';
}, { passive: true });

// ======== BACK TO TOP ========
window.addEventListener('scroll', () => {
    const btn = document.getElementById('back-to-top');
    if (btn) {
        if (window.scrollY > 600) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }
}, { passive: true });

// ======== CUSTOM CURSOR ========
const cursor = document.getElementById('custom-cursor');
const follower = document.getElementById('cursor-follower');

if (cursor && follower && window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    });

    // Hover effect on interactive elements
    document.addEventListener('mouseover', (e) => {
        const tag = e.target.closest('a, button, .product-card-new, .brand-featured, input, select');
        if (tag) {
            document.body.classList.add('cursor-hover');
        }
    });

    document.addEventListener('mouseout', (e) => {
        const tag = e.target.closest('a, button, .product-card-new, .brand-featured, input, select');
        if (tag) {
            document.body.classList.remove('cursor-hover');
        }
    });
}

// ======== PARALLAX HERO ========
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-content');
    if (hero) {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    }
}, { passive: true });

// ======== TOAST NOTIFICATIONS ========
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const icons = {
        success: '✓',
        wishlist: '♥',
        info: 'ℹ',
        error: '✕'
    };

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || '✓'}</span>
        <span class="toast-message">${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ======== WISHLIST SYSTEM ========
function getWishlist() {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
}

function toggleWishlist(productId) {
    let wishlist = getWishlist();
    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast('Removed from wishlist', 'info');
    } else {
        wishlist.push(productId);
        showToast('Added to wishlist', 'wishlist');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistBadge();

    // Re-render to update heart icons without skeleton
    const products = JSON.parse(localStorage.getItem('products'));
    renderProductsContent(products);
}

function updateWishlistBadge() {
    const wishlist = getWishlist();
    const badge = document.getElementById('wishlist-badge');
    if (badge) {
        if (wishlist.length > 0) {
            badge.textContent = wishlist.length;
            badge.classList.add('visible');
        } else {
            badge.classList.remove('visible');
        }
    }
}

updateWishlistBadge();

// ======== PRODUCT DETAIL MODAL ========
let currentDetailProduct = null;

function openProductDetail(productId) {
    const products = JSON.parse(localStorage.getItem('products'));
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentDetailProduct = product;
    const modal = document.getElementById('productDetailModal');

    document.getElementById('detail-main-img').src = product.image;
    document.getElementById('detail-category').textContent = product.category.toUpperCase();
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-price').textContent = 'IDR ' + product.price.toLocaleString('id-ID');
    document.getElementById('detail-desc').textContent = `Premium ${product.category.toLowerCase()} from the ${product.name.split(' ')[0]} archive collection. Authenticated and verified for quality. Each piece is hand-inspected to ensure it meets our strict standards.`;

    // Size options
    let sizes = [];
    const cat = product.category.toLowerCase();
    if (cat === 'shoes') sizes = ['39', '40', '41', '42', '43', '44'];
    else sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    document.getElementById('detail-sizes').innerHTML = sizes.map(s =>
        `<button class="detail-size-btn" onclick="selectDetailSize(this, '${s}')">${s}</button>`
    ).join('');

    // Wishlist state
    const wishlist = getWishlist();
    const wishBtn = document.getElementById('detail-wishlist-btn');
    if (wishlist.includes(productId)) {
        wishBtn.classList.add('active');
        wishBtn.querySelector('.wishlist-heart').textContent = '♥';
    } else {
        wishBtn.classList.remove('active');
        wishBtn.querySelector('.wishlist-heart').textContent = '♡';
    }

    // Buy button
    document.getElementById('detail-buy-btn').onclick = () => {
        closeProductDetailDirect();
        openCheckout(product.id, product.name, product.price, product.category);
    };

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function selectDetailSize(btn, size) {
    document.querySelectorAll('.detail-size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function closeProductDetail(e) {
    if (e && e.target !== e.currentTarget) return;
    closeProductDetailDirect();
}

function closeProductDetailDirect() {
    document.getElementById('productDetailModal').style.display = 'none';
    document.body.style.overflow = '';
    currentDetailProduct = null;
}

function toggleWishlistFromDetail() {
    if (!currentDetailProduct) return;
    toggleWishlist(currentDetailProduct.id);

    // Update detail modal wishlist button
    const wishlist = getWishlist();
    const wishBtn = document.getElementById('detail-wishlist-btn');
    if (wishlist.includes(currentDetailProduct.id)) {
        wishBtn.classList.add('active');
        wishBtn.querySelector('.wishlist-heart').textContent = '♥';
    } else {
        wishBtn.classList.remove('active');
        wishBtn.querySelector('.wishlist-heart').textContent = '♡';
    }
}

// ======== SEARCH & SORT ========
function handleSearch() {
    const products = JSON.parse(localStorage.getItem('products'));
    renderProductsContent(products);
}

function handleSort() {
    const products = JSON.parse(localStorage.getItem('products'));
    renderProductsContent(products);
}

// ======== NEWSLETTER ========
function handleNewsletter(e) {
    e.preventDefault();
    const input = e.target.querySelector('.newsletter-input');
    if (input && input.value) {
        showToast('Subscribed! Welcome to the archive.', 'success');
        input.value = '';
    }
}

// ======== MOBILE BOTTOM NAV ========
function mobileNavTo(target) {
    // Update active state
    document.querySelectorAll('.bottom-nav-item').forEach(b => b.classList.remove('active'));
    event.currentTarget.classList.add('active');

    if (target === 'home') {
        showPage('buyer-page');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'search') {
        showPage('buyer-page');
        setTimeout(() => {
            document.getElementById('product-catalog')?.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                document.getElementById('search-input')?.focus();
            }, 500);
        }, 100);
    } else if (target === 'wishlist') {
        const wishlist = getWishlist();
        if (wishlist.length === 0) {
            showToast('Your wishlist is empty', 'info');
            return;
        }
        showPage('buyer-page');
        setTimeout(() => {
            document.getElementById('product-catalog')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        showToast(`${wishlist.length} items in wishlist`, 'wishlist');
    } else if (target === 'catalog') {
        showPage('buyer-page');
        setTimeout(() => {
            document.getElementById('product-catalog')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
}

// ======== TOUCH SWIPE FOR HERO ========
let touchStartX = 0;
let touchEndX = 0;

const heroEl = document.querySelector('.hero');
if (heroEl) {
    heroEl.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroEl.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                changeHeroImage('next');
            } else {
                changeHeroImage('prev');
            }
        }
    }, { passive: true });
}

// ======== MICRO-INTERACTIONS ========
// Override the openCheckout to add button animation
const originalOpenCheckout = openCheckout;
// Add success animation to procure buttons when clicked
document.addEventListener('click', (e) => {
    const procureBtn = e.target.closest('.card-procure-btn');
    if (procureBtn) {
        procureBtn.classList.add('success');
        procureBtn.textContent = '✓ ADDED';
        setTimeout(() => {
            procureBtn.classList.remove('success');
            procureBtn.textContent = 'PROCURE →';
        }, 1500);
    }
});
