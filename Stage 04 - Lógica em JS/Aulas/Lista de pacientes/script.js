const patientList = [
    {
        name: "Igor",
        age: 22,
        weight: 75,
        height: 1.86
    },
    {
        name: "Isa",
        age: 13,
        weight: 60,
        height: 1.75
    },
    {
        name: "Simone",
        age: 42,
        weight: 64,
        height: 1.70
    },
    {
        name: "Mario",
        age: 47,
        weight: 99.6,
        height: 1.82
    },      
];

function calculateIMC(weight, height){
    let result = weight / (height ** 2);
    return result.toFixed(2);
}

function printIMC(patient){
    let imc = calculateIMC(patient.weight, patient.height);
    return `O paciente ${patient.name} possui o IMC de calculate ${imc}`;
}

for(let patient of patientList){
    msgIMC = printIMC(patient);
    alert(msgIMC);
}
