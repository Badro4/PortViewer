# 🔎 PortViewer

**PortViewer** is a simple yet powerful **port scanner** with a modern **React frontend** and a **FastAPI backend**.  
It allows you to scan a target IP (IPv4 or IPv6) across a configurable port range and view open ports directly from your browser. 

---
![](https://files.catbox.moe/c8qvgu.png)

---

## ✨ Features

- 🔗 **Supports IPv4 & IPv6 scanning** (via `socket.getaddrinfo`)  
- ⚡ Fast scanning with configurable port ranges  
- 🎨 Modern React UI (Material-UI + custom styling)  
- 🔒 CORS-enabled backend (secure communication with frontend)  
- 🖥️ Built with **FastAPI** for backend and **Vite + React** for frontend  

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite, Material UI)  
- **Backend**: FastAPI (Python)  
- **Networking**: Python `socket`  
- **Dev Tools**: npm, pip  

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/port-viewer.git
cd port-viewer
```

### 2. Backend (FastAPI)
Install FastAPI and uvicorn:

```
pip install fastapi uvicorn
```
Run the FastAPI server:

```
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```
### 3. Frontend (React + Vite)
Open a new terminal, go to the frontend folder:

```
cd frontend
npm install
npm run dev 
```
**By default, the frontend runs on http://localhost:5173 and connects to the backend on http://localhost:8000.**

---

## 📖 API Documentation

Once the server is running, you can access:

Swagger UI: http://localhost:8000/docs

---

## 📊 Usage
Enter the **target IP** address in the form.

Specify the **port range** (start & end).

Click **FIND OPEN PORTS** to scan for open ports.

![](https://files.catbox.moe/wekwnp.gif)



## 📜 License
MIT License – free to use and modify.