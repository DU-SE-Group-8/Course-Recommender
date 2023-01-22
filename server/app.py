from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
cors = CORS(app, resources={r"/courses": {"origins": "*"}})

info = open('questions.json',)
all_questions = json.load(info)

@app.route("/questions", methods=['POST'])
def generate_questions():
    response = jsonify(data=all_questions)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route("/courses", methods=['POST'])
def generate_courses():
    response = jsonify(data=[1,2,3])
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response