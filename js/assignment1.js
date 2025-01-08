const students = [{
    "name":"Mohamed",
    "age":"12",
    "academics":{
    "sslc":"40",
    "hsc":"70"
    }
},
{
    "name":"Yasin",
    "age":"12",
    "academics":{
    "sslc":"60",
    "hsc":"70"
    }
    },
    {
    "name":"Kamali",
    "age":"12",
    "academics":{
    "sslc":"40",
    "hsc":"90"
    }
    },
    {
    "name":"Abinaya",
    "age":"12",
    "academics":{
    "sslc":"80",
    "hsc":"70"
    }
    },
    {
    "name":"Aarthi",
    "age":"12",
    "academics":{
    "sslc":"59",
    "hsc":"20"
    }
    },
    {
    "name":"rakesh",
    "age":"12",
    "academics":{
    "sslc":"100",
    "hsc":"70"
    }
    }
    ]

const bothMarks = () =>{
    const studentsAbove60 = students.filter((student) =>{
        return student.academics.sslc > 60 && student.academics.hsc>60;
    })
    return studentsAbove60;
}
const avgMarks = () =>{
    const avgAbove60 = students.filter((student)=>{
        let avgMark = ((Number(student.academics.sslc) + Number(student.academics.hsc))/2);
        return avgMark>=60;
    })
    return avgAbove60;
}

console.log("Students who got both mark more than 60");
console.log(bothMarks());
console.log("average should be 60");
console.log(avgMarks());
console.log("Should double and display age who got more than 60 as average");
const ageDoubled = avgMarks().map((student)=>{
    return{
        name: student.name,
        age: student.age*2,
        sslc: student.academics.sslc,
        hsc: student.academics.hsc
    }
});
console.log(ageDoubled);
console.log("Total the sslc mark and display who got more than 60 as avereage");
const allStudents = avgMarks();
const totalssc = allStudents.reduce((result, student)=>result+Number(student.academics.sslc),0 );
console.log(allStudents);
console.log(`Total SSLC marks:${totalssc}`);