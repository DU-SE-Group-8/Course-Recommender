const tf = require('@tensorflow/tfjs');

function responseToVectors(response) {
    let jsonContent = require('./questions.json')
    let answers = []
    for(let i = 0; i < response.length - 1; i++) {
        answers[i] = response[i].answerId
    }

    let arrayOfScores = []
    for (let i = 0; i < answers.length; i++) {
        arrayOfScores[i] = []
        let j = 0
        for (let key in jsonContent[i]) {
            if (key === "Question") {
                continue
            }
            let value = jsonContent[i][key];
            j++
            arrayOfScores[i][j-1] = (value)
        }
    }

    answers = answers.map(function(x) { return 4 - x; })
    for (let i = 0; i < arrayOfScores.length; i++) {
        arrayOfScores[i] = arrayOfScores[i].map(function(x) { return x / answers[i]; })
    }

    let anotherArray = [];
    for (let i = 0; i < 15; i++) {
        anotherArray[i] = []
        for (let j = 0; j < arrayOfScores.length; j++) {
            if (arrayOfScores[j][i] !== 0) {
                anotherArray[i].push(arrayOfScores[j][i])
            }
        }
    }

    let vector = []
    for (let i = 0; i < anotherArray.length; i++) {
        vector[i] = 0
        for (let j = 0; j < anotherArray[i].length; j++) {
            vector[i]+= parseFloat(anotherArray[i][j])
        }
        vector[i] /= anotherArray[i].length
    }

    //Check for NaNs
    for (let i = 0; i < vector.length; i++) {
        if (isNaN(vector[i])) {
            vector[i] = 0
        }
    }

    return vector
}

function vectorsToCourses(vector)
{
    let jsonContent = require('./courses.json');
    let names = [];
    let tensors = []
    for(let i = 0; i < jsonContent.length;i++)
    {
        names[i] = jsonContent[i]['Course'];
        tensors [i] = tf.tensor([jsonContent[i]['Artificial Intelligence'], jsonContent[i]['Data Science'], jsonContent[i]['Cyber Security'],
            jsonContent[i]['Cloud Computing'], jsonContent[i]["Emerging tech"], jsonContent[i]["Teaching"], jsonContent[i]["Blockchain"],
            jsonContent[i]["Quantum Computing"], jsonContent[i]["Open Source"], jsonContent[i]["Ethics"], jsonContent[i]["Agile"], jsonContent[i]["Media"],
            jsonContent[i]["Workplace"], jsonContent[i]["Difficulty"], jsonContent[i]["Duration"]]);
    }

    const user = tf.tensor(vector);

    // user = updateNLP(user, answer)


    let first = [-1,9999];
    let second = [-1,9999];
    let third = [-1,9999];
    let fourth = [-1,9999];
    let fifth = [-1,9999];
    for(let i=0;i<tensors.length;i++) {
        let subtraction = (tensors[i]).sub(user);
        let norm = subtraction.norm().arraySync();

        if (norm < first[1])
        {
            fifth = fourth;
            fourth=third;
            third=second;
            second = first;
            first = [i, norm];
        }  else if (norm < second[1])
        {
            fifth = fourth;
            fourth=third;
            third=second;
            second = [i, norm];
        } else if (norm < third[1])
        {
            fifth = fourth;
            fourth=third;
            third = [i, norm];
        } else if (norm < fourth[1])
        {
            fifth = fourth;
            fourth = [i, norm];
        } else if (norm < fifth[1])
        {
            fifth = [i, norm];
        }
    }


    user.print()
    tensors[13].print()
    return [first[0], second[0], third[0], fourth[0], fifth[0]];
}

module.exports = {
    responseToVectors,
    vectorsToCourses
}
