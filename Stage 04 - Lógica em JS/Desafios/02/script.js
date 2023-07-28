const students = [
    {
        name: "João",
        firstTestGrade: 9,
        secondTestGrade: 7
    },
    {
        name: "Maria",
        firstTestGrade: 5,
        secondTestGrade: 7
    },
    {
        name: "Rosana",
        firstTestGrade: 8,
        secondTestGrade: 7
    },
    {
        name: "Francisco",
        firstTestGrade: 2,
        secondTestGrade: 5
    },
];

function calculateGrade(n1, n2){
    return ((n1 + n2) / 2).toFixed(2);
}

for(let student of students){
    let average = calculateGrade(student.firstTestGrade, student.secondTestGrade);
    
    let textMsg = `A média do(a) aluno(a) ${student.name} é: ${average}\n\n`; 
    if(average >= 7){
        textMsg += `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`;
    }
    else{
        textMsg += `Não foi dessa vez, ${student.name}! Tente novamente!`;
    }
    alert(textMsg);
}