# 🚀 Portfolio (Dockerized + CI/CD)

A modern **developer portfolio website** built with **React, TypeScript, Vite, TailwindCSS, and shadcn-ui**.  
This project is fully **containerized with Docker** and can be integrated with **Jenkins** for CI/CD automation.

---

## 🌐 Live Demo
👉 [Your Portfolio](#) *(update with your actual deployment link)*

---

## 📦 Tech Stack
- ⚛️ **React + Vite** – Fast and modern frontend framework  
- 🟦 **TypeScript** – Strongly typed development  
- 🎨 **TailwindCSS** – Utility-first styling  
- 🧩 **shadcn-ui** – Prebuilt modern UI components  
- 🐳 **Docker** – Containerized deployment  
- ⚙️ **Jenkins (optional)** – Continuous Integration & Deployment  

---

## 🛠️ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/mohdyusufali/portfolio-dockerized.git
cd portfolio-dockerized
```

### 2️⃣ Install dependencies
Make sure you have **Node.js (LTS)** and **npm** installed.
```bash
npm install
```

### 3️⃣ Run locally
```bash
npm run dev
```
App will be available at 👉 [http://localhost:5173](http://localhost:5173)

---

## 🐳 Run with Docker

### Build Docker image
```bash
docker build -t portfolio-app .
```

### Run container
```bash
docker run -d -p 3000:80 portfolio-app
```

Now visit 👉 [http://localhost:3000](http://localhost:3000)

---

## 🔄 CI/CD with Jenkins (Optional)

This project can be integrated into a **Jenkins pipeline**:

1. Pull code from GitHub  
2. Install dependencies (`npm install`)  
3. Build the project (`npm run build`)  
4. Build & push Docker image  
5. Deploy container automatically  

---

## 📂 Project Structure
```
portfolio-dockerized/
├── src/              # React components & pages
├── public/           # Static assets
├── Dockerfile        # Docker build file
├── package.json      # Project metadata & dependencies
├── vite.config.ts    # Vite configuration
└── README.md         # Project documentation
```

---

## ✨ Features
✔️ Responsive & modern UI  
✔️ Built with **React + TypeScript**  
✔️ Styled with **TailwindCSS**  
✔️ UI components from **shadcn-ui**  
✔️ **Dockerized** for consistent deployment  
✔️ **CI/CD ready with Jenkins**  

---

## 🚀 Future Improvements
- Add **GitHub Actions** workflows  
- Deploy on **Kubernetes** cluster  
- Add **dark/light theme toggle**  
- Add **blog section**  

---

## 🤝 Contributing
Contributions are welcome!  
Fork the repo, raise an issue, or submit a PR.

---
