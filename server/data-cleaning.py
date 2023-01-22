# Add id's
import json
f = open("data.json", "r+")
data = f.read()
data = json.loads(data)

courses = data['courses']
questions = data['questions']

for i in range(len(courses)):
  courses[i]['id'] = i

for i in range(len(questions)):
  questions[i]['id'] = i

data['courses'] = courses
data['questions'] = questions

f.seek(0)
f.write(json.dumps(data))
f.truncate()

f.close()
