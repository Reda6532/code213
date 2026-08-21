// let fruits=["pomme" , "banane" , "orange" , "fraise"]
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }
// fruits.push("kiwi")
// fruits.unshift("mangue")
// console.log(fruits)
// fruits.pop()
// fruits.shift()
// for(i=0;i<fruits.length;i++){
//     if(fruits[i]=="orange"){
//         fruits[i]="pasteque"
//     }
// }
// console.log(fruits)
// console.log(fruits.includes("banane"))

// console.log(fruits.indexOf("fraise"))

// console.log(fruits.length)

// for(i=0;i<fruits.length;i++){
//     if(fruits[i].length>5){
//         console.log(fruits[i])
//     }
// }

// let etudiant ={
//     nom : "reda",
//     moy : 15,
//     estAdmis : true,
// }
// console.log(etudiant)
// console.log(etudiant["moy"])

// etudiant.estAdmis=false
// console.log(etudiant.estAdmis)

// delete etudiant.moy
// console.log(etudiant)

// let personne={
//     prenom:"douaa",
//     dirBounjour(){
//         console.log("boujour,je m'appelle " +personne.prenom)
//     }
// }

// personne.dirBounjour()

// let voiture = {
//     marque :"bmw",
//     vitesse:0,
//     accelerer(){
//         this.vitesse+=10;
//         console.log(`${this.marque} roule maintenant a ${this.vitesse}`)
//     }

// }
// voiture.accelerer()
// voiture.accelerer()
// voiture.accelerer()

// let Class = {
//     name : "class a",   
//     prof : {nom:"soundous",matier:"fullstack js",
//         change(){
//             this.matier="java script"
//             console.log(this.matier)
//         }
//     },
//     student : ["douaa" , "adem" , "nour"]
// }
// console.log(Class.prof.nom)
// console.log(Class.student[1])
// Class.prof.change()

// let student=[
//     {nom:"adam",note:14},
//     {nom:"farouk",note:17},
//     {nom:"nour",note:9},

// ]
// console.log(student[1].note)
// for(let i=0;i<student.length;i++){
//     console.log(student[i].nom," got ", student[i].note)
// }

// student.forEach((stud)=>{
//     console.log(stud.nom , " got ",stud.note)
// })

// let notes=student.map((stud)=>{
//     return stud.note
// })
// console.log(student)
// console.log(notes)

// let admis=student.filter((adm)=>{
//     return adm.note>=10
// })
// console.log(admis)

// let admis1=student.find((adm)=>{
//     return adm.note>=10
// })
// console.log(admis1)



// let products=[
//     { nom: "clavier" , prix: 1200 , stock : 5},
//     { nom: "souri" , prix: 1200 , stock : 0},
//     { nom: "ecran" , prix: 45000 , stock : 3},
//     { nom: "casque" , prix: 3500 , stock : 8},
//     { nom: "webcam" , prix: 6000 , stock : 0},
// ]

// console.log(products[0].nom)
// console.log(products[2].prix)
// console.log(products[3].stock)
// let list=products.forEach((lis)=>{
//     console.log(lis.nom , " cout ", lis.prix)
// })

// let nomproducts=products.map((name)=>{
//     return name.nom
// })
// console.log(nomproducts)

// let produitdisponible=products.filter((sto)=>{
//     return sto.stock>=1
// })
// console.log(produitdisponible)

// let price =products.find((pri)=>{
//     return pri.prix>=3000
// })
// console.log(price)

// let underprice = products.filter((under)=>{
//     return under.prix<5000 && under.stock>=1
// })
// console.log(underprice)

// let nondispo = products.find((notdi)=>{
//     return notdi.stock==0
// })
// console.log(nondispo)

// let nonnn=products.filter((namess)=>{
//     return namess.stock==0
// }).map((pp)=>{
//     return pp.nom
// })
// console.log(nonnn)

// let sum = products.reduce((acc,nbr)=>{
//     return acc+nbr.prix
// }, 0)
// console.log(sum)


// if(typeof nom !== "string"){
//     throw new TypeError("name must be in characters")
// }
// if(typeof pages !== "number"){
//     throw new TypeError("pages must be in numbers ")
// }
// if(typeof proprietaire !== "string"){
//     throw new TypeError("proprietaire must be in characters")
// }


class info{
    constructor(nom, pages , proprietaire){
        this.nom=nom
        this.pages=pages
        this.proprietaire=proprietaire
    }
}


class impression{
    constructor(){
        this.table=[]

    }
    isEmpty(){
        this.table.length==0
    }
    create(nom,pages,proprietaire){
        let object =new info(nom,pages,proprietaire)
        this.table.push(object)
    }
    enqueue(file){
        this.table.push(file)
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("the table is empty ")
            return null
        }
        return this.object.shift()
    }
    first(){
        if(this.isEmpty()){
        console.log("this table is empty")    
        }else{
            let first = this.table[0]
            console.log(first.nom)
        }    
    }
    last(){
        if(this.isEmpty()){
            console.log("this table is empty")
        }else{
            let last = this.table[this.table.length-1]
            console.log(last.nom)
        }
    }
    size(){
        let size = this.table.length
        console.log(size)
    }
    display(){
        this.table.forEach((doc)=>{
            console.log("name: "+doc.nom)
            console.log("pages: "+doc.pages)
            console.log("proprietaire: "+doc.proprietaire)
        })
    }
    clear(){
        if(this.isEmpty()){
            console.log("its empty")
        }else{
        while(this.table.length >0){
            this.table.unshift()
        }
        }
    }
    total(){
        let sum =this.table.reduce((acc,nbr)=>{
            return acc + nbr.pages
        } , 0)
        console.log(sum)
    }

}

let stats=new impression()
stats.create("raport.pdf",10,"amine")
stats.create("cv.docx",2,"sara")
stats.create("projet.docx",25,"yacine")
stats.create("facture.pdf",3,"Douaa")
stats.create("presentation.pptx",15,"ikram")


stats.first()
stats.last()
console.log(stats.table[0])
let file1= new info("examen.pdf",8,"salim")
stats.enqueue(file1)
stats.size()
stats.display()
stats.total()
stats.clear()// not working
console.log(stats)


