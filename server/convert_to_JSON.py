import pandas as pd

csv_courses = pd.read_csv('courses.csv')
csv_questions = pd.read_csv('questions.csv')

json_courses = csv_courses.to_json(orient = 'records')
json_questions = csv_questions.to_json(orient = 'records')

with open('courses.json', 'w') as jsonfile:
    jsonfile.write(json_courses)

with open('questions.json', 'w') as jsonfile:
  jsonfile.write(json_questions)