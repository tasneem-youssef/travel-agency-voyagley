# ✈️ Voyagley — Travel Agency Web App

A modern, responsive travel agency web application built with **React** and **Vite**. Voyagley helps users explore trips, hotels, activities, and destinations in a seamless and visually rich experience.

---

## Screenshot
<a href="https://tasneem-youssef.github.io/travel-agency-voyagley/">
<img src="./src/images/mock image poster.png" alt="voyagley" />
</a>


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


## 🔗 Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/trips` | Trips listing |
| `/trips/:tripId` | Trip detail page |
| `/hotels` | Hotels listing |
| `/hotels/:hotelId` | Hotel detail page |
| `/activities` | Activities listing |
| `/activities/:activityId` | Activity detail page |
| `/destinations` | Destinations listing |
| `/destinations/:destinationId` | Destination detail page |
| `/login` | Login (placeholder) |
| `/signup` | Sign up (placeholder) |
| `/contact` | Contact (placeholder) |
| `*` | 404 Not Found |

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Deploy to GitHub Pages |

---
## 📁 Project Structure

```
TravelAgency-copy/
├── public/
├── src/
│   ├── components/
│   │   ├── trips/                    # Trip-related components
│   │   │   ├── TripsLayout.jsx       # Detail layout (uses :tripId param)
│   │   │   ├── TripsTab.jsx          # Trips card grid (home trending tab)
│   │   │   └── TripDetailContent.jsx # Trip detail info panel
│   │   ├── hotels/                   # Hotel-related components
│   │   │   ├── HotelsLayout.jsx      # Detail layout (uses :hotelId param)
│   │   │   ├── HotelsTab.jsx         # Hotels card grid (home trending tab)
│   │   │   └── HotelDetailContent.jsx
│   │   ├── activities/               # Activity-related components
│   │   │   ├── ActivitiesLayout.jsx  # Detail layout (uses :activityId param)
│   │   │   ├── ActivitiesTab.jsx     # Activities card grid (home trending tab)
│   │   │   └── ActivityDetailContent.jsx
│   │   ├── destinations/             # Destination-related components
│   │   │   ├── DestinationsLayout.jsx # Detail layout (uses :destinationId param)
│   │   │   ├── TopDestinations.jsx   # Destination grid (home section)
│   │   │   └── DestinationDetailContent.jsx
│   │   ├── header.jsx
│   │   ├── footer.jsx
│   │   ├── slider.jsx
│   │   ├── Trending.jsx
│   │   ├── TopDeals.jsx
│   │   ├── WhyUs.jsx
│   │   ├── LoveButton.jsx
│   │   ├── backToTop.jsx
│   │   ├── subPageHeader.jsx
│   │   └── tripSelector.jsx
│   ├── pages/                        # Route-level page components
│   │   ├── home.jsx
│   │   ├── trips.jsx
│   │   ├── hotels.jsx
│   │   ├── activities.jsx
│   │   ├── destinations.jsx
│   │   └── NotFound.jsx
│   ├── utils/                        # Utility files
│   │   └── basURL.js
│   ├── images/                       # Static image assets
│   ├── App.jsx                       # Root component with routing
│   ├── index.jsx                     # App entry point
│   └── index.css                     # Global styles
├── index.html
├── vite.config.js
└── package.json
```

## 🌍 Deployment

This project is configured for deployment to **GitHub Pages**.

```bash
npm run deploy
```

This runs `npm run build` (via `predeploy`) and then pushes the `dist/` folder to the `gh-pages` branch.

The `base` path is set to `/travel-agency-voyagley/` in `vite.config.js`.

---
🌐 **Live Demo:** [voyagley on GitHub Pages](https://tasneem-youssef.github.io/travel-agency-voyagley/)

---
## Contact
- **Email**: tasneemyoussef61@gmail.com
- **LinkedIn**: <a href="https://www.linkedin.com/in/tasneem-youssef-react" target="_blank">Link</a>

