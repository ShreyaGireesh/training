const students =[
    {
    "name": "raj",
    "marks": [50,20,30,52,90],
    "medium": "english",
    "parents_details": {
    "parents_qualification": "educated",
    "father_name": "ramu"
    }
    },
    {
    "name": "regho",
    "marks": [70,35,50,60,90],
    "medium": "english",
    "parents_details": {
    "parents_qualification": "non-educated",
    "father_name": "ranjith"
    }
    },
    {
    "name": "ragu",
    "marks": [50,50,35,50,100],
    "medium": "tamil",
    "parents_details": {
    "parents_qualification": "non-educated",
    "father_name": "rajeev"
    }
    },
    {
    "name": "kumar",
    "marks": [50,30,30,52,100],
    "medium": "english",
    "parents_details": {
    "parents_qualification": "educated",
    "father_name": "rajesh"
    }
    },
    {
    "name": "sathesh",
    "marks": [49,19,30,40,12],
    "medium": "tamil",
    "parents_details": {
    "parents_qualification": "non-educated",
    "father_name": "ramu"
    }
    },
    {
    "name": "sundar",
    "marks": [70,70,40,40,80],
    "medium": "tamil",
    "parents_details": {
    "parents_qualification": "non-educated",
    "father_name": "remo"
    }
    }
]

// function avgGreater40(students){
//     const tableDiv = document.createElement('div');
//     tableDiv.classList.add('student-table');
//     const studentData = students.filter((student) =>{
//         const avgMark = student.marks.reduce((result, mark)=> result+mark, 0) / student.marks.length;
//         return avgMark > 40; 
//     })

// }
const avgGreater40 = ()=>{
    const studentData = students.filter((student) =>{
        const avgMark = student.marks.reduce((result, mark)=> result+mark, 0) / student.marks.length;
        return avgMark > 40; 
    })
    return studentData;
}
const passMark = () =>{
    const studentData = students.filter((student)=>{
        return student.marks.every(mark => mark>=30);
    })
    return studentData;
}
const parentEducation = () =>{
    const studentData = students.filter((student)=>{
        return student.marks.every(mark => mark>=30) && student.parents_details.parents_qualification=='non-educated';
    })
    return studentData;
}
const topMark = () =>{
    const filterStudent = students.filter(student => student.parents_details.parents_qualification==='non-educated');
    let highestMark = 0;
    let topStudent = null;
    filterStudent.forEach((student)=>{
        const totalMarks = student.marks.reduce((result, mark)=> result+mark, 0)
        if (totalMarks > highestMark){
            highestMark = totalMarks;
            topStudent = student;
        }
    });
    return topStudent;
}
const topMarkwithMedium = () =>{
    const filterStudent = students.filter(student => student.medium==='tamil');
    let highestMark = 0;
    let topStudent = null;
    filterStudent.forEach((student)=>{
        const totalMarks = student.marks.reduce((result, mark)=> result+mark, 0)
        if (totalMarks > highestMark){
            highestMark = totalMarks;
            topStudent = student;
        }
    });
    return topStudent;
}
const passMarkCount = () =>{
    const studentData = students.filter((student)=>{
        return student.marks.every(mark => mark>=30);
    })
    return studentData.length;
}

const fourthSubject = () => {
    return students.find((student)=> student.name === 'sundar');
}

const secondSubject = () =>{
    return students.find((student)=> student.parents_details.father_name === 'rajeev');
}

const sameFatherName = () => {
    const fatherGroups = students.reduce((acc, student) => {
        const fatherName = student.parents_details.father_name;
        if (acc[fatherName]) {
            acc[fatherName].push(student.name);
        } else {
            acc[fatherName] = [student.name];
        }
        return acc;
    }, {});
    return fatherGroups;
}

const nameEndsWith = ()=>{
    return students.filter((student)=> student.parents_details.father_name.endsWith('h'));
}

const deleteStudent = () =>{
    return students.filter((student)=> student.marks[1]>= 30);
}

console.log("Student whose average is greater than 40");
console.log(avgGreater40());

console.log("Student who got pass mark in all the subjects (pass mark 30)");
console.log(passMark());

console.log("student who got pass mark in all the subjects and whose parents are not-educated");
console.log(parentEducation());

console.log("student who got top most mark irrespective of all the subject and whose parents are not educated");
console.log(topMark());

console.log("student who got top most mark irrespective of all the subject in tamil medium");
console.log(topMarkwithMedium());

console.log("no of the studetns passed: pass mark (30)");
console.log(passMarkCount());

console.log("sundar's 4th subject mark");
const subjectMark = fourthSubject();
console.log(`Name: ${subjectMark.name}`);
console.log(`Marks: ${subjectMark.marks.at(3)}`);

console.log("2nd subject mark of the student whose father name is 'Rajeev'");
const secondSub = secondSubject();
console.log(`Name:${secondSub.name}`);
console.log(`Marks:${secondSub.marks.at(1)}`);

console.log("students name whose father names are same");
const fatherGroups = sameFatherName();
for (let fatherName in fatherGroups) {
    const studentNames = fatherGroups[fatherName];
    if (studentNames.length > 1) {
        console.log(`Name: ${studentNames.join(",")} \nFather's Name: ${fatherName}`);
    }
}


console.log("students name whose father name ends with h");
console.log(nameEndsWith());

console.log("tudent from the array who got more than 30 in the second subject");
console.log(deleteStudent());