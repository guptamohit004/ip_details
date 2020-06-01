var allDetails:any={};
const getIP = async () => {
  const ip = await (await fetch(`http://ip-api.com/json/`)).json();
  if(ip.status=='success')
  {
    allDetails.status= "success",
    allDetails.ip=ip.query,
    allDetails.country=ip.country,
    allDetails.countryCode=ip.countryCode,
    allDetails.timezone=ip.timezone,
    allDetails.city=ip.city,
    allDetails.serviceProvider=ip.isp
    allDetails.zipCode=ip.zip
    return allDetails.ip
  } else{
    allDetails.message = "Invalid Query, Try again !!."
    allDetails.status= "fail"
  }
};

const getLocation = async () => {
  if(allDetails.status==='fail')
  {
    return;
  }
  else{
    var ip = await getIP();
    const location = await (await fetch(`https://api.ipgeolocationapi.com/geolocate/${ip}`)).json();
    allDetails.continent=location.continent;
    allDetails.currencyCode=location.currency_code;
    allDetails.weekStartsFrom=location.start_of_week;
    allDetails.nationality = location.nationality;
    allDetails.languagesSpoken=location.languages_official;
    allDetails.callingCode=location.country_code,
    allDetails.mobileNumberLength=location.national_number_lengths
    return location;
  }
}

export async function getAllDetails (){
  const response = await getLocation();
  if(allDetails.status==='fail')
    return allDetails;
  else
    return allDetails;
}
