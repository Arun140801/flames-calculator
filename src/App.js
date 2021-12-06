import { useState , useEffect } from "react";
import flames from `./flames.js`

const yourNameDiv = document.querySelector("#your-name")
const partnerNameDiv = useState("#partner-name")
const submitBlt = useState(`#submit`)
const resultDiv = useState("result")


const useEffect = () => {
    const flames = ["Friend","Lover","Attraction","Marriage","Enemy","Sister"]

    const YourName = yourNameDiv.value
    const PartnerName = partnerNameDiv.value
    console.log (YourName,PartnerName)


    const splitArray = splitNames("YourName,PartnerName")
    console.log(splitArray)
    const yourRemainder = getRemainder(splitArray[1], YourName)
    const partnerRemainder = getRemanider(splitArray[0],PartnerName)
    const setCount = getCount(yourRemainder , partnerRemainder)
    const setResult = getResult(yourRemainder , partnerRemainder)
}


const getRemainder = (splitName, name) => {
    console.log(splitName, name)

    splitName.map(item => {
        const regex = new RegExp(`${item}`,"i")
        name = name.replace(regex, "")
        console.log(name)
    })
    console.log(name)
    return name
}

const getCount = (yourRemainder, partnerRemainder) => {
    const totalWords = yourRemainder+partnerRemainder
    const totalCount = totalWords.length
    console.log(totalCount)
    return totalCount
}


const getResult = (flames,setCount) => {
    for (let i = 6; i > 1; i--) {
        flames.splice((setCount-1)%i,1)
        console.log(flames)
        console.log((setCount-1)%i, flames.length-1)
    
        if ((setCount-1)%i < flames.length-1 || (setCount-1)%i != 0) {
            flamesPart = flames.splice((setCount-1)%i,)
            console.log(flames)
            flames = [...flamesPart,...flames]
            console.log(flames)
        }
    }
    return flames
}
