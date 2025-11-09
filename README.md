# 🛒 React E-Commerce Shop

A simple **React e-commerce application** with a homepage, shop, and cart.  
Users can browse products fetched from the [FakeStore API](https://fakestoreapi.com), add items to the cart, adjust quantities, and see real-time updates.

---

## 🚀 Features

- 🏠 **Home Page** with welcome message and images
- 🛍 **Shop Page**:
  - Displays products with image, title, quantity input
  - Increment/decrement buttons for quantity
  - Add to Cart functionality
- 🛒 **Cart Page**:
  - Shows items added to cart
  - Update quantity or remove items
  - Cart badge in Navbar updates in real time
- 🌐 **Navigation bar** visible on all pages
- 🎨 **Responsive UI** styled with Tailwind CSS
- ⚡ **SPA routing** using React Router

---

## 📁 Project Structure

```

src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── CartItem.jsx
│   ├── Loader.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── ShopPage.jsx
│   └── CartPage.jsx
├── context/
│   └── CartContext.jsx
├── App.jsx
├── main.jsx
└── index.css

```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/kaziarman23/odin-shopping-cart.git
cd odin-shopping-cart
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

---

## 🧠 Concepts Practiced

- React **state management** (`useState`, `useContext`)
- **Context API** for global cart state
- React **Router** for SPA navigation
- API fetching with **FakeStore API**
- Component-based architecture
- Form and input handling
- Tailwind CSS for modern styling
- React Testing Library for component tests

---

## 🧪 Testing Recommendations

- Test components like `ProductCard` and `CartPage`:

  - Ensure quantity inputs update correctly
  - Adding to cart updates global state
  - Cart badge shows correct number of items

- Do **not** test `react-router-dom` itself

---

## 💡 Future Improvements

- Add **search and filter** in Shop page
- Include **product categories**
- Persist cart in **localStorage**
- Add **checkout page** with totals
- Improve **animations and transitions**

---

## 🧑‍💻 Author

**Kazi Arman**
[GitHub](https://github.com/kaziarman23) • [Email](kaziarman@proton.me)
