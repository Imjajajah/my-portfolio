# 🌟 Jarrell Inocando Reyes — Personal Portfolio

Welcome to my portfolio! I am a **Full-Stack & Mobile Developer** and **Technical Support Engineer** based in Quezon City, Philippines. I specialize in architecting, developing, and deploying multi-platform enterprise systems, with a strong focus on offline-first capabilities, transactional security, and custom integrations.

---

## 🚀 About Me

- 🎓 **Education**: Bachelor of Science in Information Technology (Polytechnic University of the Philippines, Class of 2025)
- 💼 **Current Role**: Technical Support Engineer at **Telus**, supporting Google's RCS ecosystem and enterprise telecom clients.
- 🛠️ **Freelance Work**: Architect and deploy production-grade admin dashboards, field operations apps, and customer-facing mobile portals.
- 🎯 **Specializations**: Offline-first synchronization, transactional payment integrations (PayMongo), hardware peripherals (ESC/POS Bluetooth printing), and secure database design.

---

## 📁 Featured Enterprise Projects

### 1. 💧 Tubig Pilipinas Admin System
* **Description**: Enterprise admin web dashboard for GT Industries water utility. Re-engineered the SOA billing engine with strict compound calculation order (Basic → VAT → Arrears → Penalties). Built isolated cashier SI-series sequencing, PayMongo QR billing, audit-grade Excel (.xlsx) data pipelines, and RBAC security middleware in the MVC base controller.
* **Tech Stack**: PHP, CodeIgniter, MySQL, jQuery, Git
* **Demo**: [Live Login Portal](https://tubigpilipinas.gtindustries.ph/login)

### 📱 2. Meter Reader App
* **Description**: Offline-first Flutter field operations app for GT Industries. Architected local SQLite caching for offline meter reads with mandatory photo-proof validation. Integrated ESC/POS Bluetooth thermal printing, asynchronous support ticket logging, PayMongo e-payment QR triggers, and partial reading state management for meter replacements.
* **Tech Stack**: Flutter, Dart, SQLite, REST APIs

### 📲 3. Tubig User App
* **Description**: Customer self-service mobile app for GT Industries concessionaires. Refactored the SOA data layer to mirror standardized multi-tier fee structures. Integrated PayMongo SDK for real-time mobile bill payments directly from digital statements, reducing physical cashier foot traffic. Standardized in-app cut-off warnings and payment reminders.
* **Tech Stack**: Flutter, Dart, PayMongo SDK, iOS & Android

### 🍲 4. Mosang's Budbod – Food Logistics System
* **Description**: Full-stack food ordering and logistics platform. Reverse-engineered a legacy undocumented database and migrated all data assets to Google Firebase with zero production downtime. Implemented third-party courier dispatch APIs with distance-based pricing, live order lifecycle tracking, and multi-direction PayMongo webhook receivers for automated ledger synchronization.
* **Tech Stack**: Firebase, Firestore, PayMongo Webhooks
* **Demo**: [Mosang's Budbod Live Site](https://www.mosangsbudbod.ph/)

---

## 🛠️ Technical Stack & Skills

- **Languages**: PHP, Dart, Python, JavaScript, SQL, HTML, CSS
- **Frameworks & Libraries**: Laravel, CodeIgniter, Django, Flutter, React, Next.js, Bootstrap
- **Databases & Cloud**: MySQL, PostgreSQL, SQLite, Google Firebase (Firestore, Auth, Webhooks)
- **Developer Tools & Platforms**: Git, GitHub, VS Code, Postman, Jira, Vercel, Netlify
- **Core Domain Expertise**: Offline-First Caching, RESTful API Design, Relational DB Schema Design, Payment Integration (PayMongo), ESC/POS Thermal Printing protocols

---

## ⚙️ Running the Portfolio Locally

If you would like to run this React-based portfolio locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Imjajajah/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```
   *The app should open automatically at `http://localhost:3000`.*

---

## 📄 License & Contact

- **GitHub**: [@Imjajajah](https://github.com/Imjajajah)
- **LinkedIn**: [Jarrell Reyes](https://www.linkedin.com/in/jarrellreyes/)
- **Email**: [jir@gtindustries.ph](mailto:jir@gtindustries.ph)

*Designed & developed by Jarrell I. Reyes © 2026.*