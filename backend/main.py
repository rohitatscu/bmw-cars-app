from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

# CORS config so frontend can access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/bmw/2025")
def get_bmw_models():
    url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/bmw/modelyear/2025?format=json"
    response = requests.get(url)
    return response.json()["Results"]
