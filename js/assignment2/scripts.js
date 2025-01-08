const resultDiv = document.querySelector('section');

async function getStudents() {
    const requestURL = "students.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const studentsDetails = await response.json();

    avgGreater40(studentsDetails);
    passMark(studentsDetails);
    parentEducation(studentsDetails);
    topMark(studentsDetails);
    topMarkwithMedium(studentsDetails);
    passMarkCount(studentsDetails);
    subjectMark(studentsDetails);
    secondSubject(studentsDetails);
    fathernamesame(studentsDetails);
    nameEndsWith(studentsDetails);
    findFail(studentsDetails);
}

function avgGreater40(students){
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('student-table');
    const studentData = students.filter((student) =>{
        const avgMark = student.marks.reduce((result, mark)=> result+mark, 0) / student.marks.length;
        return avgMark > 40; 
    })
    
    if (studentData.length > 0){
        let tableHtml = '<table>';
        tableHtml+='<caption>Students whose average marks above 40</caption>';
        tableHtml+='<thead><tr><th>Name</th><th>Marks</th><th>Medium</th><th>Father\'s Name</th><th>Qualification</th></tr></thead>';
        tableHtml+='<tbody>';
        studentData.forEach((student)=>{
            tableHtml+=`
            <tr>
                <td>${student.name}</td>
                <td>${student.marks.join(",")}</td>
                <td>${student.medium}</td>
                <td>${student.parents_details.father_name}</td>
                <td>${student.parents_details.parents_qualification}</td>
            </tr>
            `;
        })
        tableHtml+= '</tbody></table>';
        tableDiv.innerHTML = tableHtml
        
    }else {
        tableDiv.innerHTML = '<p>No students with average marks greater than 40</p>';
    }
    resultDiv.appendChild(tableDiv);
}

function passMark(students){
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('student-table');
    const studentData = students.filter((student)=>{
        return student.marks.every(mark => mark>=30);
    })
    
    if (studentData.length > 0){
        let tableHtml = '<table>';
        tableHtml+='<caption>Students who got pass mark(above 30)</caption>';
        tableHtml+='<thead><tr><th>Name</th><th>Marks</th><th>Medium</th><th>Father\'s Name</th><th>Qualification</th></tr></thead>';
        tableHtml+='<tbody>';
        studentData.forEach((student)=>{
            tableHtml+=`
            <tr>
                <td>${student.name}</td>
                <td>${student.marks.join(",")}</td>
                <td>${student.medium}</td>
                <td>${student.parents_details.father_name}</td>
                <td>${student.parents_details.parents_qualification}</td>
            </tr>
            `;
        })
        tableHtml+= '</tbody></table>';
        tableDiv.innerHTML = tableHtml
        resultDiv.appendChild(tableDiv);
    }else {
        resultDiv.innerHTML = '<p>No students with average marks greater than 40</p>';
    }
}

function parentEducation(students){
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('student-table');
    const studentData = students.filter((student)=>{
        return student.marks.every(mark => mark>=30) && student.parents_details.parents_qualification=='non-educated';
    })
    
    if (studentData.length > 0){
        let tableHtml = '<table>';
        tableHtml+='<caption>Students who got pass mark and parents are not-educated</caption>';
        tableHtml+='<thead><tr><th>Name</th><th>Marks</th><th>Medium</th><th>Father\'s Name</th><th>Qualification</th></tr></thead>';
        tableHtml+='<tbody>';
        studentData.forEach((student)=>{
            tableHtml+=`
            <tr>
                <td>${student.name}</td>
                <td>${student.marks.join(",")}</td>
                <td>${student.medium}</td>
                <td>${student.parents_details.father_name}</td>
                <td>${student.parents_details.parents_qualification}</td>
            </tr>
            `;
        })
        tableHtml+= '</tbody></table>';
        tableDiv.innerHTML = tableHtml
        resultDiv.appendChild(tableDiv);
    }else {
        resultDiv.innerHTML = '<p>No students with average marks greater than 40</p>';
    }
}

function topMark(students){
    let tableDiv = document.createElement('div');
    tableDiv.classList.add('student-table');
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
    if (topStudent){
        let tableHtml = '<table>';
        tableHtml+='<caption>Student who got top most mark irrespective of all the subject and whose parents are not educated</caption>';
        tableHtml+='<thead><tr><th>Name</th><th>Marks</th><th>Medium</th><th>Father\'s Name</th><th>Qualification</th></tr></thead>';
        tableHtml+=`<tbody>
            <tr>
                <td>${topStudent.name}</td>
                <td>${topStudent.marks.join(",")}</td>
                <td>${topStudent.medium}</td>
                <td>${topStudent.parents_details.father_name}</td>
                <td>${topStudent.parents_details.parents_qualification}</td>
            </tr>
            </tbody>`;
            tableHtml+= '</table>';
            tableDiv.innerHTML = tableHtml;
    }else{
        tableDiv.innerHTML = '<p>No student found</p>'
    }
        resultDiv.appendChild(tableDiv);
}
function topMarkwithMedium(students){
    let tableDiv = document.createElement('div');
    tableDiv.classList.add('student-table');
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

    if (topStudent){
        let tableHtml = '<table>';
        tableHtml+='<caption>Student who got top most mark irrespective of all the subject in tamil medium</caption>';
        tableHtml+='<thead><tr><th>Name</th><th>Marks</th><th>Medium</th><th>Father\'s Name</th><th>Qualification</th></tr></thead>';
        tableHtml+=`<tbody>
            <tr>
                <td>${topStudent.name}</td>
                <td>${topStudent.marks.join(",")}</td>
                <td>${topStudent.medium}</td>
                <td>${topStudent.parents_details.father_name}</td>
                <td>${topStudent.parents_details.parents_qualification}</td>
            </tr>
            </tbody>`;
            tableHtml+= '</table>';
            tableDiv.innerHTML = tableHtml;
    }else{
        tableDiv.innerHTML = '<p>No student found</p>'
    }
        resultDiv.appendChild(tableDiv);
}
function passMarkCount(students){
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('student-table');
    let count = 0;
    const studentData = students.filter((student)=>{
        return student.marks.every(mark => mark>=30);
    })
    
    if (studentData.length > 0){
        
        let tableHtml = '<table>';
        tableHtml+=`<caption>Passed Students (pass mark 30)</caption>
        <thead><tr><th>No of Passed Students </th></tr></thead>
        <tbody><tr><td>${studentData.length}</td></tr></tbody></table>`;
        tableDiv.innerHTML = tableHtml;
    }else{
        tableDiv.innerHTML = '<p>All students failed</p>';
    }
    resultDiv.appendChild(tableDiv);
}

function subjectMark(students){
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('student-table');
    const findStudent = students.find((student)=> student.name === 'sundar');
    
    if (findStudent){
        let tableHtml='<table>';
            tableHtml+='<caption>Sundar\'s 4th subject mark</caption>';
            tableHtml+='<thead><tr><th>Name</th><th>4th subject mark</th></tr></thead>';
            tableHtml+=`<tbody>
            <tr>
                <td>${findStudent.name}</td>
                <td>${findStudent.marks.at(3)}</td>
            </tr>
            </tbody></table>`;
            tableDiv.innerHTML = tableHtml;
    }
    else{
        tableDiv.innerHTML = '<p>Marks not found</p>';
    }
    resultDiv.appendChild(tableDiv);
}

function secondSubject(students){
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('student-table');
    const findStudent = students.find((student)=> student.parents_details.father_name === 'rajeev');
    
    if (findStudent){
        
            
            let tableHtml='<table>';
            tableHtml+='<caption>2nd subject mark of the student whose father name is "Rajeev"</caption>';
            tableHtml+='<thead><tr><th>Name</th><th>2nd subject mark</th></tr></thead>';
            tableHtml+=`<tbody>
            <tr>
                <td>${findStudent.name}</td>
                <td>${findStudent.marks.at(1)}</td>
            </tr>
            </tbody></table>`;
            tableDiv.innerHTML = tableHtml;

    }
    else{
        tableDiv.innerHTML = '<p>Marks not found</p>';
    }
    resultDiv.appendChild(tableDiv);
}
function fathernamesame(students){
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('student-table');
    const fatherGroups = students.reduce((acc, student) => {
        const fatherName = student.parents_details.father_name;
        if (acc[fatherName]) {
            acc[fatherName].push(student.name);
        } else {
            acc[fatherName] = [student.name];
        }
        return acc;
    }, {});
    if (fatherGroups){
        let tableHtml = '<table>';
        tableHtml+='<caption>students name whose father names are same</caption>';
        tableHtml+='<thead><tr><th>Name</th><th>Father\'s Name</th></tr></thead>';
        tableHtml+='<tbody>';
        for (let fatherName in fatherGroups) {
            const studentNames = fatherGroups[fatherName];
            if (studentNames.length > 1) {
                tableHtml += `<tr>
                    <td>${studentNames.join(', ')}</td>
                    <td>${fatherName}</td>
                    
                </tr>`;
            }
        }
        tableHtml+='</tbody></table>';
        tableDiv.innerHTML = tableHtml;
    }else{
        tableDiv.innerHTML = '<p>Not found</p>';
    }
    resultDiv.appendChild(tableDiv);
}
function nameEndsWith(students){
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('student-table');
    const findStudent = students.filter((student)=> student.parents_details.father_name.endsWith('h'));
    
    if (findStudent.length > 0){
        let tableHtml = '<table>';
        tableHtml+='<caption>tudents name whose father name ends with h</caption>';
        tableHtml+='<thead><tr><th>Name</th><th>Father\'s Name</th></tr></thead>';
        tableHtml+='<tbody>';
        findStudent.forEach((student)=>{
            
            tableHtml+=`<tr>
                <td>${student.name}</td>
                <td>${student.parents_details.father_name}</td>
            </tr>`;
        })
        tableHtml+='</tbody></table>';
        tableDiv.innerHTML = tableHtml;
    }else{
        tableDiv.innerHTML = '<p>Not found</p>';
    }
    resultDiv.appendChild(tableDiv);
}

function findFail(students){
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('student-table');
    const passStudent = students.filter((student)=> student.marks[1]>= 30);
    const failStudent = students.filter((student)=> student.marks[1]<30);
    if (passStudent.length > 0){
        let tableHtml = '<table>';
        tableHtml+='<caption>Students who got more than 30 in the second subject</caption>';
        tableHtml+='<thead><tr><th>Name</th><th>Marks</th><th>Medium</th><th>Father\'s Name</th><th>Qualification</th></tr></thead>';
        tableHtml+='<tbody>';
        passStudent.forEach((student)=>{
            tableHtml+=`<tr>
                <td>${student.name}</td>
                <td>${student.marks.join(",")}</td>
                <td>${student.medium}</td>
                <td>${student.parents_details.father_name}</td>
                <td>${student.parents_details.parents_qualification}</td>
            </tr>`
        })
        tableHtml+='</tbody></table>';
        if (failStudent.length > 0){
            let parahtml='<p>Students who failed in second subject: ';
            failStudent.forEach((student)=>{
                parahtml+= `${student.name} `
            })
            parahtml+='</p>';
            tableHtml+=parahtml;   
        }
        else{
            tableHtml += '<p>Marks not found</p>';
        }
        tableDiv.innerHTML = tableHtml
        
    }else{
        tableDiv.innerHTML = '<p>No data found</p>';
    }
    resultDiv.appendChild(tableDiv);
}
getStudents();