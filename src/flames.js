let boyname = "manoj"
let girlname = "vinotha"


//console.log(boyname,girlname)


let sampleregex = /a/i

const arrayboy = boyname.split("")
const arraygirl = girlname.split("")

console.log(arrayboy,arraygirl)


const remainderG = arrayboy.map(item =>{
    const regex2= new RegExp(`${item}`,"i")

    //console.log(regex2)
    girlname = girlname.replace(regex2,"")
    return girlname
})

const remainderGname = remainderG.pop()

//console.log(remainderGname)




const remainderB = arraygirl.map(item => {
    const regex1 = new RegExp(`${item}`,"i")
    boyname = boyname.replace(regex1,"")
    //console.log(regex1)
    return boyname
})


const remainderBname = remainderB.pop()
console.log(remainderBname,remainderGname)


totalCount = (remainderBname + remainderGname).length
console.log(totalCount)




let flames = ["Friend","lover","Attraction","Marriage","Enemy","sister"]
console.log(flames)



//i-- ==>i=i-1
for (let i=6; i>1; i--){
    flames.splice((totalCount-1)%i,1)
    console.log(flames)
    console.log((totalCount-1)%i , flames.length-1)

    if ((totalCount-1)%i < flames.length-1 || ((totalCount-1)%i < flames.length-1)){
        flamesPart = flames.splice((totalCount-1)%i,1)
        console.log(flames)
        flames = [...flamesPart,...flames]
        console.log(flames)
    }


}

