# ✈️ Voyagley — Travel Agency Web App

A modern, responsive travel agency web application built with **React** and **Vite**. Voyagley helps users explore trips, hotels, activities, and destinations in a seamless and visually rich experience.

🌐 **Live Demo:** [voyagley on GitHub Pages](https://tasneem-youssef.github.io/travel-agency-voyagley/)

---

## 📸 Features

- 🏠 **Home Page** — Hero slider, top deals, trending destinations, and a "Why Us" section
- 🗺️ **Trips** — Browse and explore available travel packages
- 🏨 **Hotels** — Discover curated hotel listings
- 🎯 **Activities** — Find exciting activities at each destination
- 📍 **Destinations** — Explore top travel destinations
- ❤️ **Favorites** — Save trips, hotels, and activities with a love button
- 🔝 **Back to Top** — Smooth scroll-to-top button for better navigation
- 📱 **Fully Responsive** — Optimized for all screen sizes

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI framework |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [React Router v6](https://reactrouter.com/) | Client-side routing |
| [Bootstrap 5](https://getbootstrap.com/) + React-Bootstrap | Responsive layout & components |
| [MUI (Material UI)](https://mui.com/) | UI component library |
| [Swiper](https://swiperjs.com/) | Touch-friendly sliders |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |

---

## 📁 Project Structure

```
TravelAgency-copy/
├── public/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── header.jsx
│   │   ├── footer.jsx
│   │   ├── slider.jsx
│   │   ├── Trending.jsx
│   │   ├── TopDestinations.jsx
│   │   ├── TopDeals.jsx
│   │   ├── WhyUs.jsx
│   │   ├── LoveButton.jsx
│   │   ├── backToTop.jsx
│   │   ├── tripSelector.jsx
│   │   ├── trips component.jsx
│   │   ├── Hotels component.jsx
│   │   └── Activies component.jsx
│   ├── pages/              # Route-level page components
│   │   ├── home.jsx
│   │   ├── trips.jsx
│   │   ├── hotels.jsx
│   │   ├── activities.jsx
│   │   ├── destinations.jsx
│   │   └── NotFound.jsx
│   ├── utils/              # Utility files
│   │   └── basURL.js       # Base API URL configuration
│   ├── images/             # Static image assets
│   ├── App.jsx             # Root component with routing
│   ├── index.jsx           # App entry point
│   └── index.css           # Global styles
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm v8 or higher

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tasneem-youssef/TravelAgency-copy.git
   cd TravelAgency-copy
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Deploy to GitHub Pages |

---

## 🌍 Deployment

This project is configured for deployment to **GitHub Pages**.

```bash
npm run deploy
```

This runs `npm run build` (via `predeploy`) and then pushes the `dist/` folder to the `gh-pages` branch.

The `base` path is set to `/travel-agency-voyagley/` in `vite.config.js`.

---

## 🔗 Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/trips` | Trips listing |
| `/hotels` | Hotels listing |
| `/activities` | Activities listing |
| `/destinations` | Destinations listing |
| `/login` | Login (placeholder) |
| `/signup` | Sign up (placeholder) |
| `/contact` | Contact (placeholder) |
| `*` | 404 Not Found |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

