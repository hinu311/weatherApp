

// const request=require('postman-request')


// const geocode=(address,callback)=>{

//     const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiaGluYWwzMTEiLCJhIjoiY2tzamY2YTFvMG90aDJvbzlrYWxoZW1pMyJ9.8fUgsI_v5-XhWRXK2tMHtQ&limit=1'


//     request({url:url,json:true},(error,response)=>{

//         if(error){
//             callback('Unable to connect to weather service!!',undefined)
//         }
//         else if(response.body.features.length == 0)
//         {
//             callback('Unable to find location!!',undefined)
//         }
//         else{
//             callback(undefined,{
//                 longitude: response.body.features[0].center[0],
//                 latitude: response.body.features[0].center[1]
//             })
//         }
//     })

// }

// geocode('New York',(error,data)=>{
//     console.log('data :',data)
   
//     console.log('Error:',error)

// })

//module.exports=geocode
//1____


const request=require('postman-request')


const geocode=(address,callback)=>{

    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiaGluYWwzMTEiLCJhIjoiY2tzamY2YTFvMG90aDJvbzlrYWxoZW1pMyJ9.8fUgsI_v5-XhWRXK2tMHtQ&limit=1'


    request({url,json:true},(error,{body})=>{

        if(error){
            callback('Unable to connect to weather service!!',undefined)
        }
        else if(body.features.length == 0)
        {
            callback('Unable to find location!!',undefined)
        }
        else{
            callback(undefined,{
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location:body.features[0].place_name
            })
        }
    })

}

// geocode('New York',(error,data)=>{
//     console.log('data :',data)
   
//     console.log('Error:',error)

// })

module.exports=geocode
