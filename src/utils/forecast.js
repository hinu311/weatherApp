const request=require('postman-request')


const forecast=(lat,long,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=6d12232689ccd3c2112def551b6b3bee&query='+lat+','+long+'&units=f'

    request({url,json:true},(error,{body})=>{

        if(error){
            callback('Unable to connect to weather service!!',undefined)
        }
        else if(body.error)
        {
            callback('Unable to find location!!',undefined)
        }
        else{
            callback(undefined,('current temp is '+body.current.temperature+'.Feels like'+ body.current.feelslike
              
            ))
        }
    
    })

}


// forecast(40.7306,-73.9866,(error,data)=>{
// console.log('error:',error)
// console.log('data:',data)
// })

module.exports=forecast