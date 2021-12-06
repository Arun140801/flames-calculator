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
