```
src/
├─ components/
│  ├─ (❌ Fetch data from APIs)
│  ├─ (❌ Own global / shared state)
│  ├─ (✅ Render reusable UI)
│  │
│  ├─ Navbar.jsx
│  │   ├─ (✅ Display links: Home / Shop / Cart)
│  │   ├─ (❌ Manage cart state)
│  │   └─ 📥 Receives:
│  │       • cartCount (number)
│  │
│  ├─ ProductCard.jsx
│  │   ├─ (✅ Display one product)
│  │   ├─ (✅ Handle local quantity state)
│  │   ├─ (❌ Know what the cart looks like)
│  │   └─ 📥 Receives:
│  │       • product (object: id, title, price, image)
│  │       • onAddToCart(product, quantity)
│  │
│  ├─ QuantityInput.jsx
│  │   ├─ (✅ Control quantity changes)
│  │   ├─ (❌ Know which product it belongs to)
│  │   └─ 📥 Receives:
│  │       • quantity (number)
│  │       • onChange(newQuantity)
│  │
│  └─ CartItem.jsx
│      ├─ (✅ Display one cart item)
│      ├─ (❌ Own cart state)
│      └─ 📥 Receives:
│          • item (object: id, title, price, quantity)
│          • onUpdateQuantity(id, newQuantity)
│
├─ pages/
│  ├─ (✅ Fetch data)
│  ├─ (✅ Compose components)
│  │
│  ├─ Home.jsx
│  │   ├─ (✅ Display static content)
│  │   └─ 📥 Receives:
│  │       • none
│  │
│  ├─ Shop.jsx
│  │   ├─ (✅ Fetch product list)
│  │   ├─ (❌ Store cart state)
│  │   └─ 📥 Receives:
│  │       • onAddToCart(product, quantity)
│  │
│  └─ Cart.jsx
│      ├─ (✅ Display cart contents)
│      ├─ (❌ Fetch product data)
│      └─ 📥 Receives:
│          • cart (array of cart items)
│          • onUpdateQuantity(id, newQuantity)
│
├─ hooks/
│  ├─ (✅ Own shared state & logic)
│  ├─ (❌ Render JSX)
│  │
│  └─ useCart.js
│      ├─ (✅ Store cart state)
│      ├─ (❌ Know about UI)
│      └─ 📤 Exposes:
│          • cart
│          • addToCart(product, quantity)
│          • updateQuantity(id, newQuantity)
│
├─ services/
│  ├─ (✅ Communicate with external APIs)
│  ├─ (❌ Store application state)
│  │
│  └─ productsApi.js
│      ├─ (✅ Fetch product data)
│      └─ 📤 Exposes:
│          • fetchProducts()
│
├─ App.jsx
│  ├─ (✅ Initialize shared hooks)
│  ├─ (❌ Fetch products)
│  └─ 📥 / 📤:
│      • uses useCart()
│      • passes cart + callbacks to pages
│
├─ main.jsx
│  ├─ (✅ Mount React app)
│  └─ 📥 Receives:
│      • App component
│
└─ index.css
   ├─ (✅ Global styles)
   └─ (❌ Component logic)

```
