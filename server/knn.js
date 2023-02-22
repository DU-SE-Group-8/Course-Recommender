const tf = require('@tensorflow/tfjs');

function responseToCourses(response)
{
    let csvContent = require('./courses.json');
    let names = [];
    let tensors = []
    for(let i = 0; i < csvContent.length;i++)
    {
        names[i] = csvContent[i]['Course'];
        tensors [i] = tf.tensor([csvContent[i]['Artificial Intelligence'], csvContent[i]['Data Science'], csvContent[i]['Cyber Security'],
            csvContent[i]['Cloud Computing'], csvContent[i]["Emerging tech"], csvContent[i]["Teaching"], csvContent[i]["Blockchain"],
            csvContent[i]["Quantum Computing"], csvContent[i]["Open Source"], csvContent[i]["Ethics"], csvContent[i]["Agile"], csvContent[i]["Media"],
            csvContent[i]["Workplace"], csvContent[i]["Difficulty"], csvContent[i]["Duration"]]);
    }

    const user = tf.tensor(response);

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


    // console.log(names[first[0]])
    // console.log(first)
    // console.log(names[second[0]])
    // console.log(second)
    // console.log(names[third[0]])
    // console.log(third)
    // console.log(names[fourth[0]])
    // console.log(fourth)
    // console.log(names[fifth[0]])
    // console.log(fifth)
    return [first[0], second[0], third[0], fourth[0], fifth[0]];
}

console.log(responseToCourses([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]))
