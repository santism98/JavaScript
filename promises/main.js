const arrayAlumnos = [
    { id: 1, nombre: 'Pepe' },
    { id: 2, nombre: 'Ana' },
    { id: 3, nombre: 'Juan' },
    { id: 4, nombre: 'Pepi' },
    { id: 5, nombre: 'bea' }
];
const arrayNotas = [
    { id: 1, nota: 8 },
    { id: 2, nota: 7 },
    { id: 5, nota: 9 },
];
const arrayBeca=[
    { id: 2, beca:true },
    { id: 5, beca: false },
]
const id = 1
let alumno;
const getAlumnos = (id) => {
    let alumno = arrayAlumnos.find((item) => item.id == id)?.nombre
    const promise=new Promise((resolve,reject)=>{
        if (!alumno) {
            reject(`El alumno con id ${id} no existe`)
        } else {
            resolve(alumno)
        }
    })
     return promise
}
const getNotas = (id) => {
    let nota = arrayNotas.find((item) => item.id == id)?.nota
    const promise =new Promise((resolve,reject)=>{
        if (!nota) {
            reject(` ${alumno} no tiene nota`)
        } else {
            resolve(nota)
        }
    })
    return promise;
}

const getBeca = (id) => {
    let beca = arrayBeca.find((item) => item.id == id)?.beca
    const promise = new Promise((resolve, reject)=>{
        if(!beca){
            reject(`${alumno} no tiene beca`)
        }else {
            resolve(beca)
        }

    })
    return promise;
}
getAlumnos(id)
    .then((resp)=> {
        alumno=resp;
       return getNotas(id)
    })
    .then((resp)=>{
        nota = resp;
        return getBeca(id)})
    .then((resp)=>{
        beca=resp;
        if(beca){
            console.log(`${alumno} SI tiene beca` )
        }else {
            console.log(`${alumno} NO tiene beca` )
        }
    })
        
    .catch((error)=>{console.log(error)})