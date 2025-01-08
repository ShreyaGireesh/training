const resultDiv = document.querySelector('section');
const para = document.createElement('p');

async function studentDetails() {
    const requestURL ="students.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const students = await response.json();

    bothMarks(students);
    avgAbove(students);
    ageDoubled(students);
    totalMarks(students);

}

function bothMarks(studentdetail){
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('student-table');
    const studentsAbove60 = studentdetail.filter((student) =>{
        return student.academics.sslc > 60 && student.academics.hsc>60;
    })

    if (studentsAbove60.length > 0) {
        let tableHtml = '<table>';
        tableHtml += '<caption>Students with both marks greater than 60</caption>';
        tableHtml += '<thead><tr><th>Name</th><th>Age</th><th>SSLC</th><th>HSC</th></tr></thead>'; // Table header
        tableHtml+='<tbody>';
        studentsAbove60.forEach(student => {
            tableHtml += `<tr>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.academics.sslc}</td>
                <td>${student.academics.hsc}</td>
            </tr>`;
        });

        tableHtml += '</tbody></table>';
        tableDiv.innerHTML = tableHtml;

    } else {
        tableDiv.innerHTML = '<p>No students with both marks greater than 60</p>';
    }
    resultDiv.appendChild(tableDiv);
}

function avgAbove(students){
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('student-table');
    const avgAbove60 = students.filter((student)=>{
        let avgMark = ((Number(student.academics.sslc) + Number(student.academics.hsc))/2);
        return avgMark>=60;
    })
    
    if (avgAbove60.length > 0){
        // let tableHtml = '<h2>Students whose average is above 60</h2>';
        let tableHtml='<table>';
        tableHtml+='<caption>Students whose average is above or equals 60</caption>';
        tableHtml+='<thead><tr><th>Name</th><th>Age</th><th>SSLC</th><th>HSC</th></tr></thead>';
        tableHtml+='<tbody>';
        avgAbove60.forEach((student) =>{
            tableHtml+=`<tbody>
            <tr>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.academics.sslc}</td>
            <td>${student.academics.hsc}</td>
            </tr>
            </tbody>`;
        });
        tableHtml += '</tbody></table>';
        tableDiv.innerHTML = tableHtml;
    }else{
        tableDiv.innerHTML += '<p>No students found</p>';
    }
    resultDiv.appendChild(tableDiv);
}

function ageDoubled(students){
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('student-table');
    const avgAbove60 = students.filter((student)=>{
        let avgMark = ((Number(student.academics.sslc) + Number(student.academics.hsc))/2);
        return avgMark>=60;
    })
    if (avgAbove60.length > 0){
        let tableHtml='<table>';
        tableHtml+='<caption>Students whose average is above or equals 60 with their age doubled</caption>';
        tableHtml+='<thead><tr><th>Name</th><th>Age</th><th>SSLC</th><th>HSC</th></tr></thead>';
        tableHtml+='<tbody>';
        avgAbove60.forEach((student) =>{
            tableHtml+=`<tbody>
            <tr>
            <td>${student.name}</td>
            <td>${(student.age * 2)}</td>
            <td>${student.academics.sslc}</td>
            <td>${student.academics.hsc}</td>
            </tr>
            </tbody>`;
        });
        tableHtml += '</tbody></table>';
        tableDiv.innerHTML = tableHtml;
    }else{
        tableDiv.innerHTML += '<p>No students found</p>';
    }
    resultDiv.appendChild(tableDiv);
}

function totalMarks(students){
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('student-table');
    let totalStudentMarks =0;
    const totalSSLCMarks = students.filter((student)=>{
        let avgMark = ((Number(student.academics.sslc) + Number(student.academics.hsc))/2);
        return avgMark>=60;
    })
    if (totalSSLCMarks.length > 0){
        let tableHtml='<table>';
        tableHtml+='<caption>Students whose average is above or equals 60 with their total SSLC Marks</caption>';
        tableHtml+='<thead><tr><th>Name</th><th>Age</th><th>SSLC</th><th>HSC</th></tr></thead>';
        tableHtml+='<tbody>';
        totalSSLCMarks.forEach((student) =>{
            totalStudentMarks+=Number(student.academics.sslc);
            tableHtml+=`<tbody>
            <tr>
            <td>${student.name}</td>
            <td>${(student.age)}</td>
            <td>${student.academics.sslc}</td>
            <td>${student.academics.hsc}</td>
            </tr>
            </tbody>`;
        });
        tableHtml+='</tbody></table>';
        tableHtml+=`<p>The total SSLC Marks is ${totalStudentMarks}`;
        tableDiv.innerHTML+= tableHtml;
    }else{
        tableDiv.innerHTML += '<p>No students found</p>';
    }
    resultDiv.appendChild(tableDiv);
}
studentDetails();



// fetch('students.json')
//     .then((response) => response.json())
//     .then(student => {
//         // console.log(student[0].name);
//         const task1 = 
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });