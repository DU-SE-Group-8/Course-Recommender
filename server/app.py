from flask import Flask, jsonify, escape
from flask_cors import CORS
import json
import random

# Init
app = Flask(__name__)
cors = CORS(app, resources={r"/courses": {"origins": "*"}})

# Get data
info = open('data.json',)
data = json.load(info)

courses = data['courses']
questions = data['questions']

# Routes
@app.route("/questions/<int:round>", methods=['POST'])
def generate_questions(round):
    round = escape(round)
    response = jsonify(data=questions[:round*3])
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route("/courses", methods=['POST'])
def generate_courses():
    random_courses = courses
    random.shuffle(random_courses)
    response = jsonify(data=random_courses[:3])
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response