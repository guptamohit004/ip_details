import { getAllDetails } from "./mod.ts";

const cli = async () => {
  var allDetails=await getAllDetails();
  if(allDetails.status==='fail')
    console.log(allDetails.message)
  else{
    console.log("Here are all the details from you IP");
    console.log(allDetails)
  }
}

cli();
