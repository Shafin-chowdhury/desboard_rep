# 📊 AppifyDevs Analytics Dashboard

A streamlined, high-performance analytics dashboard built to showcase modern frontend architecture, role-based access control, and a mobile-first user experience.

🔗 **Live Demo:** [INSERT_YOUR_VERCEL_LINK_HERE]

---

## 🛠️ Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 (Zero-config, CSS-variable driven)
- **State Management:** Zustand (Auth, Theme, and Data Filter persistence)
- **Icons:** Lucide React
- **Charts:** Recharts (Responsive SVG-based charts)
- **Deployment:** Vercel

---

## 🏗️ Architecture Decisions

1. **Tailwind v4 Engine:** Leveraged the latest Tailwind v4 "CSS-first" configuration to manage Dark Mode via CSS variables, reducing JS bundle size and improving style injection speed.
2. **Pinned Layout Strategy:** Used a Flexbox-column layout for the Sidebar to ensure the User Profile and Sign-Out actions are always "anchored" to the bottom, improving accessibility on long navigation lists.
3. **Atomic Component Structure:** Divided the dashboard into memoized "StatCards" and "ChartBoxes" to prevent unnecessary re-renders when global filters (Date/User Type) change.
4. **Zustand for Auth:** Chose Zustand over Context API for its lightweight footprint and ease of use in handling simulated login states and role-based permissions.

---

## 🧠 Assumptions Made
- **Data Freshness:** Assumed a 1.5-second network latency to simulate real-world API fetch cycles (handled via loading skeletons).
- **Role Permissions:** Assumed that while 'Admin' and 'Manager' share most data, 'Admin' has exclusive access to sensitive system settings (UI-restricted).
- **Persistence:** Assumed that session persistence should be handled locally for the sake of the demo, allowing users to refresh the page without being logged out.

---

## 🚀 Setup Instructions

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/Shafin-chowdhury/desboard_rep.git](https://github.com/Shafin-chowdhury/desboard_rep.git)
   cd desboard_rep

   Credentials
   Username - admin
   password - admin123

   username - manager
   password - manager123
   
