// js/store.js

// ───────── INITIAL DATA ─────────
const initialProducts = [
  {
    id: "1",
    name: 'Floral Summer Midi Dress',
    price: 1899,
    oldPrice: 3499,
    category: 'Women • Dresses',
    rating: 5,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
    badge: 'NEW',
    description: 'A beautiful floral summer midi dress perfect for warm weather. Made from premium cotton fabric with a comfortable fit. Ideal for casual outings, beach trips, or evening events.'
  },
  {
    id: "2",
    name: 'Classic Runner Pro Sneakers',
    price: 4299,
    oldPrice: 6999,
    category: 'Men • Sneakers',
    rating: 5,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    badge: '-40%',
    description: 'Premium running sneakers with advanced cushioning technology. Features lightweight design, breathable mesh upper, and excellent grip. Perfect for both casual wear and sports activities.'
  },
  {
    id: "3",
    name: 'Luxe Leather Tote Bag',
    price: 2499,
    oldPrice: 4199,
    category: 'Women • Handbags',
    rating: 4,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80',
    badge: 'TRENDING',
    description: 'Elegant leather tote bag crafted from genuine Italian leather. Spacious interior compartments, durable handles, and timeless design. A versatile accessory for work or travel.'
  },
  {
    id: "4",
    name: 'Minimalist Rose Gold Watch',
    price: 3599,
    oldPrice: 5999,
    category: 'Unisex • Watches',
    rating: 5,
    reviews: 215,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80',
    badge: 'NEW',
    description: 'Stunning minimalist watch with rose gold finish. Precision quartz movement, water-resistant design, and elegant styling. Pairs well with any outfit.'
  },
  {
    id: "5",
    name: 'Vintage Denim Jacket',
    price: 2199,
    oldPrice: 3899,
    category: 'Men • Outerwear',
    rating: 4,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&q=80',
    badge: '',
    description: 'Classic vintage washed denim jacket. Features metal button closures, dual chest pockets, and a timeless fit that gets better with age.'
  },
  {
    id: "6",
    name: 'Yellow top and pants',
    price: 1599,
    oldPrice: 2499,
    category: 'Women • Tops',
    rating: 5,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    badge: 'NEW',
    description: 'Luxurious silk blend blouse with a gentle drape. Elegant V-neck design perfect for office wear or evening dinners. Soft, breathable, and chic.'
  },
  {
    id: "7",
    name: 'Canvas Weekender Bag',
    price: 1899,
    oldPrice: 3200,
    category: 'Unisex • Bags',
    rating: 4,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
    badge: '-25%',
    description: 'Durable canvas weekender bag with vegan leather trims. Roomy main compartment, perfect for short trips and gym sessions. Includes a detachable shoulder strap.'
  },
  {
    id: "8",
    name: 'Polarized Aviator Sunglasses',
    price: 999,
    oldPrice: 1599,
    category: 'Unisex • Accessories',
    rating: 5,
    reviews: 230,
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
    badge: 'TRENDING',
    description: 'Classic aviator sunglasses with polarized lenses for ultimate UV protection. Lightweight metal frame for all-day comfort.'
  },
  {
    id: "9",
    name: 'Athletic Performance Shorts',
    price: 899,
    oldPrice: 1499,
    category: 'Men • Activewear',
    rating: 4,
    reviews: 88,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    badge: '',
    description: 'Moisture-wicking athletic shorts built for high-performance workouts. Features a stretch waistband and hidden zip pockets.'
  },
  {
    id: "10",
    name: 'Chunky Knit Sweater',
    price: 2699,
    oldPrice: 4200,
    category: 'Women • Knitwear',
    rating: 5,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=800&q=80',
    badge: 'NEW',
    description: 'Stay cozy with this chunky oversized knit sweater. Crafted from a soft wool blend, it offers warmth and effortless style for chilly days.'
  },
  {
    id: "11",
    name: 'Oxford Leather Loafers',
    price: 3499,
    oldPrice: 5500,
    category: 'Men • Shoes',
    rating: 4,
    reviews: 74,
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80',
    badge: '-15%',
    description: 'Classic Oxford-style slip-on loafers. Made from genuine leather with a cushioned insole for premium comfort in formal settings.'
  },
  {
    id: "12",
    name: 'Sterling Silver Hoops',
    price: 1299,
    oldPrice: 1999,
    category: 'Women • Jewelry',
    rating: 5,
    reviews: 310,
    image: 'images/sterling_silver_hoops.png',
    badge: 'TRENDING',
    description: 'Elegant sterling silver hoop earrings. Hypoallergenic, lightweight, and versatile enough to pair with any outfit, day or night.'
  }
];

const defaultUser = {
  name: 'John Sharma',
  email: 'john.s@example.com',
  phone: '+91 98765 43210',
  address: '123 Fashion Street, Tech Park, Bangalore 560001',
  joinDate: 'Jan 2025'
};

// ───────── INITIALIZE STATE ─────────
function initStore() {
  // Always refresh the catalog so image fixes propagate via localStorage
  localStorage.setItem('vq_products', JSON.stringify(initialProducts));

  if (!localStorage.getItem('vq_cart')) {
    localStorage.setItem('vq_cart', JSON.stringify([]));
  }
  if (!localStorage.getItem('vq_wishlist')) {
    localStorage.setItem('vq_wishlist', JSON.stringify([]));
  }
  if (!localStorage.getItem('vq_user')) {
    localStorage.setItem('vq_user', JSON.stringify(defaultUser));
  }
}

// ───────── API METHODS ─────────

const VQuint = {
  getProducts: () => JSON.parse(localStorage.getItem('vq_products')),

  getProduct: (id) => {
    const products = VQuint.getProducts();
    return products.find(p => p.id === String(id));
  },

  getCart: () => JSON.parse(localStorage.getItem('vq_cart')),

  addToCart: (productId, qty = 1, size = 'M', color = 'Default') => {
    const cart = VQuint.getCart();
    const existing = cart.find(item => item.productId === productId && item.size === size && item.color === color);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ productId, qty, size, color, addedAt: new Date().toISOString() });
    }
    localStorage.setItem('vq_cart', JSON.stringify(cart));
    VQuint.updateCartBages();
    VQuint.renderCartDrawer();
    VQuint.openCartDrawer();
  },

  updateCartQty: (index, newQty) => {
    let cart = VQuint.getCart();
    if (newQty <= 0) {
      cart.splice(index, 1);
    } else {
      cart[index].qty = newQty;
    }
    localStorage.setItem('vq_cart', JSON.stringify(cart));
    VQuint.updateCartBages();
    VQuint.renderCartDrawer();
  },

  removeFromCart: (index) => {
    let cart = VQuint.getCart();
    cart.splice(index, 1);
    localStorage.setItem('vq_cart', JSON.stringify(cart));
    VQuint.updateCartBages();
    VQuint.renderCartDrawer();
  },

  getWishlist: () => JSON.parse(localStorage.getItem('vq_wishlist')),

  toggleWishlist: (productId) => {
    let wishlist = VQuint.getWishlist();
    const index = wishlist.indexOf(String(productId));
    const isAdded = index === -1;

    if (isAdded) {
      wishlist.push(String(productId));
    } else {
      wishlist.splice(index, 1);
    }

    localStorage.setItem('vq_wishlist', JSON.stringify(wishlist));
    VQuint.updateWishlistBadges();
    return isAdded; // Returns true if added, false if removed
  },

  getUser: () => JSON.parse(localStorage.getItem('vq_user')),

  // ───────── UI BINDINGS ─────────
  updateCartBages: () => {
    const cart = VQuint.getCart();
    const count = cart.reduce((acc, item) => acc + item.qty, 0);
    document.querySelectorAll('.cart-badge').forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'grid' : 'none';
    });
  },

  updateWishlistBadges: () => {
    const wishlist = VQuint.getWishlist();
    document.querySelectorAll('.wishlist-badge').forEach(badge => {
      badge.textContent = wishlist.length;
      badge.style.display = wishlist.length > 0 ? 'grid' : 'none';
    });
  },

  openCartDrawer: () => {
    const drawer = document.getElementById('cartDrawer');
    if (drawer) drawer.classList.add('open');
  },

  closeCartDrawer: () => {
    const drawer = document.getElementById('cartDrawer');
    if (drawer) drawer.classList.remove('open');
  },

  openSearch: () => {
    const modal = document.getElementById('searchModal');
    if (modal) {
      modal.classList.add('open');
      setTimeout(() => document.getElementById('searchInput').focus(), 100);
    }
  },

  closeSearch: () => {
    const modal = document.getElementById('searchModal');
    if (modal) modal.classList.remove('open');
  },

  renderCartDrawer: () => {
    const container = document.getElementById('cartItemsContainer');
    const totalEl = document.getElementById('cartTotalAmount');
    if (!container || !totalEl) return;

    const cart = VQuint.getCart();
    const products = VQuint.getProducts();

    if (cart.length === 0) {
      container.innerHTML = `<div class="empty-cart"><i class="fa-solid fa-cart-arrow-down"></i><p>Your cart is empty.</p></div>`;
      totalEl.textContent = '₹0';
      return;
    }

    let html = '';
    let total = 0;

    cart.forEach((item, index) => {
      const product = products.find(p => p.id === item.productId);
      if (!product) return;
      const itemTotal = product.price * item.qty;
      total += itemTotal;

      html += `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}">
          <div class="cart-item-details">
            <h4>${product.name}</h4>
            <p class="cart-item-meta">${item.size} | ${item.color}</p>
            <div class="cart-item-bottom">
              <span class="cart-item-price">₹${product.price.toLocaleString()}</span>
              <div class="cart-qty-ctrl">
                <button onclick="VQuint.updateCartQty(${index}, ${item.qty - 1})">−</button>
                <span>${item.qty}</span>
                <button onclick="VQuint.updateCartQty(${index}, ${item.qty + 1})">+</button>
              </div>
            </div>
          </div>
          <button class="cart-item-remove" onclick="VQuint.removeFromCart(${index})" title="Remove">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;
    });

    container.innerHTML = html;
    totalEl.textContent = `₹${total.toLocaleString()}`;
  },

  performSearch: (query) => {
    const resultsContainer = document.getElementById('searchResults');
    if (!resultsContainer) return;

    if (!query || query.trim().length === 0) {
      resultsContainer.innerHTML = '';
      return;
    }

    const term = query.toLowerCase().trim();
    const products = VQuint.getProducts();
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term)
    );

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `<p class="search-no-results">No products found matching "${query}"</p>`;
      return;
    }

    let html = '';
    filtered.forEach(p => {
      html += `
        <a href="product-detail.html?id=${p.id}" class="search-result-item" onclick="sessionStorage.setItem('selectedProduct', JSON.stringify(VQuint.getProduct('${p.id}')))">
          <img src="${p.image}" alt="${p.name}">
          <div class="search-result-info">
            <h4>${p.name}</h4>
            <span>₹${p.price.toLocaleString()}</span>
          </div>
        </a>
      `;
    });
    resultsContainer.innerHTML = html;
  },

  processCheckout: () => {
    const cart = VQuint.getCart();
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const products = VQuint.getProducts();
    let totalValue = 0;

    // Calculate total
    cart.forEach(item => {
      const p = products.find(prod => prod.id === item.productId);
      if (p) totalValue += p.price * item.qty;
    });

    // Generate random order ID
    const orderId = '#ORD-' + Math.floor(100000 + Math.random() * 900000);
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    // Create order object
    const newOrder = {
      id: orderId,
      date: date,
      items: cart,
      total: totalValue,
      status: 'Processing'
    };

    // 1. Save to User Profile Orders
    let userOrders = JSON.parse(localStorage.getItem('vq_orders')) || [];
    // If no existing orders in localStorage, try to initialize with the dummy data from profile.html
    if (userOrders.length === 0) {
      userOrders = [
        { id: "#ORD-987654", date: "Oct 12, 2024", total: 4299, status: "Delivered" },
        { id: "#ORD-987612", date: "Sep 28, 2024", total: 1899, status: "Delivered" },
        { id: "#ORD-987590", date: "Sep 15, 2024", total: 8500, status: "Returned" }
      ];
    }
    userOrders.unshift({
      id: newOrder.id,
      date: newOrder.date,
      total: newOrder.total,
      status: newOrder.status
    });
    localStorage.setItem('vq_orders', JSON.stringify(userOrders));

    // 2. Save to Admin Global Orders (Optional: if the admin uses a different key to aggregate all user orders)
    let adminOrders = JSON.parse(localStorage.getItem('admin_orders')) || [];
    adminOrders.unshift({
      id: newOrder.id,
      customer: "John Sharma",
      date: newOrder.date,
      amount: newOrder.total,
      status: newOrder.status
    });
    localStorage.setItem('admin_orders', JSON.stringify(adminOrders));

    // Finish checkout
    localStorage.removeItem('vq_cart');

    // UI Update
    VQuint.updateCartBages();
    VQuint.closeCartDrawer();

    alert(`Payment Successful! Your order ${orderId} has been placed. Redirecting to Profile...`);
    window.location.href = "profile.html";
  },

  initMobileMenu: () => {
    const menuOpen = document.getElementById('menuOpen');
    const menuClose = document.getElementById('menuClose');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuOpen && mobileMenu) {
      menuOpen.addEventListener('click', () => {
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    }

    if (menuClose && mobileMenu) {
      menuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    if (mobileMenu) {
      mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
          mobileMenu.classList.remove('open');
          document.body.style.overflow = '';
        }
      });

      // Close menu on link click
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }
  }
};

// Initialize store on script load
initStore();

// Handle cross-page synchronization (if cart changes in another tab)
window.addEventListener('storage', (e) => {
  if (e.key === 'vq_cart') {
    VQuint.updateCartBages();
    VQuint.renderCartDrawer();
  }
  if (e.key === 'vq_wishlist') {
    VQuint.updateWishlistBadges();
  }
});
