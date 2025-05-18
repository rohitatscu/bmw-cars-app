# BMW Cars App

A full-stack web app that displays 2025 BMW models using:
- **React.js** (frontend)
- **FastAPI** (backend)
- **Firebase Hosting** (for static car images)
- **NHTSA Vehicle API** (to fetch model data)

---

## 🗂️ Project Structure

bmw-cars-app/
├── backend/ # FastAPI backend (Python)
│ ├── main.py
│ └── requirements.txt
├── frontend/ # React frontend
│ ├── src/
│ ├── public/
│ │ └── images/ # Hosted on Firebase
├── firebase.json # Firebase hosting config
├── package.json # Root script runner with concurrently
├── README.md

yaml

## 🚀 Local Development Setup
### 1. Clone the repository

git clone https://github.com/your-username/bmw-cars-app.git
cd bmw-cars-app


2. Backend Setup (FastAPI)
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 5000
API will run at: http://localhost:5000/api/bmw/2025


3. Frontend Setup (React)
Open a new terminal:

cd frontend
npm install
npm start
Frontend will run at: http://localhost:3000

4. Run Both Together (Optional)
From the root of the project:

npm install
npm run start
This uses concurrently to start backend and frontend in parallel.

Firebase Hosting
All car images are hosted via Firebase:
Example: https://bmw-car-app-daf13.web.app/images/x3.jpg

APIs Used
NHTSA Vehicle API
Firebase Hosting
FastAPI

Future Features
Model comparison
Search/filter by body type or price
AI assistant to recommend best BMW


Author
Rohit Yadav (https://www.linkedin.com/in/rohit-yadav15/)