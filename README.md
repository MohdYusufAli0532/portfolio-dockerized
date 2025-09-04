# 🚀 Portfolio (Dockerized + CI/CD)

A modern **developer portfolio website** built with **React, TypeScript, Vite, TailwindCSS, and shadcn-ui**.  
This project is fully **containerized with Docker** and has **automated CI/CD pipelines** using both **GitHub Actions** and **Jenkins**.

---

## ✅ Build Status

![CI](https://github.com/MohdYusufAli0532/portfolio-dockerized/actions/workflows/docker-ci.yml/badge.svg)

---

## 🌐 Live Demo

👉 [Your Portfolio](https://yusuf-codes-awesome.vercel.app/#)

---

## 📦 Tech Stack

- ⚛️ **React + Vite** – Fast and modern frontend framework
- 🟦 **TypeScript** – Strongly typed development
- 🎨 **TailwindCSS** – Utility-first styling
- 🧩 **shadcn-ui** – Prebuilt modern UI components
- 🐳 **Docker** – Containerized deployment
- ⚙️ **Jenkins** – CI/CD automation (optional)
- 🔄 **GitHub Actions** – Cloud-native CI/CD with DockerHub integration

---

## 🛠️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/mohdyusufali/portfolio-dockerized.git
cd portfolio-dockerized
```

### 2️⃣ Install dependencies

Make sure you have Node.js (LTS) and npm installed.

```bash
npm install
```

### 3️⃣ Run locally

```bash
npm run dev
```

App will be available at 👉 http://localhost:5173

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

Now visit 👉 http://localhost:3000

---

## 📤 DockerHub Image

Pull the prebuilt image directly from DockerHub:

```bash
docker pull mohdyusufali/portfolio:latest
docker run -d -p 3000:80 mohdyusufali/portfolio:latest
```

👉 [DockerHub Repository](https://hub.docker.com/repository/docker/mohdyusufali/portfolio/general)

---

## 🔄 CI/CD Workflows

### ✅ GitHub Actions (Recommended)

- Runs on push to **main**
- Builds Docker image with **Docker Buildx**
- Pushes image to **DockerHub** automatically
- Status visible with badge at the top of this README

### ⚙️ Jenkins (Optional)

- Pulls code from GitHub
- Installs dependencies (`npm install`)
- Builds project (`npm run build`)
- Builds & pushes Docker image
- Deploys container automatically

---

## 📂 Project Structure

```
portfolio-dockerized/
├── src/              # React components & pages
├── public/           # Static assets
├── Dockerfile        # Docker build file
├── .github/workflows # GitHub Actions CI/CD pipelines
├── package.json      # Project metadata & dependencies
├── vite.config.ts    # Vite configuration
└── README.md         # Project documentation
```

---

## ✨ Features

✔️ Responsive & modern UI  
✔️ Built with React + TypeScript  
✔️ Styled with TailwindCSS  
✔️ UI components from shadcn-ui  
✔️ Dockerized for consistent deployment  
✔️ CI/CD ready with Jenkins & GitHub Actions

---

## 🚀 Future Improvements

- Deploy on Kubernetes cluster
- Add dark/light theme toggle
- Add blog section

---

## 🤝 Contributing

Contributions are welcome!  
Fork the repo, raise an issue, or submit a PR.

---

## 📜 License

This project is open-source under the MIT License.
