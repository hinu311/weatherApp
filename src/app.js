const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
const request=require('postman-request')

const app=express()
//console.log(__dirname)

//define path for express config
const st_path=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const hbsPath=path.join(__dirname,'../templates/partials')


//setup handlerbar engine and view location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(hbsPath)

//setup static directory to serve
app.use(express.static(st_path))

app.get('',(req,res)=>{

    res.render('index',{
        title:'Created by',
        name:'hinu'
    
       
    })
})
app.get('/about',(req,res)=>{

    res.render('about',{
        title:'Created by',
        name:'hiren'
    
       
    })
})
app.get('/help',(req,res)=>{

    res.render('help',{
        title:'Created by',
        name:'freya'
    
       
    })
})

app.get('/address',(req,res)=>{

    if(!req.query.address){
       return res.send({
            error:'please provide address!!'
        })
    }
    else{
        res.send({
           forecast:'Rainy today',
           location:req.query.address
        })
    }
})

app.get('/weather',(req,res)=>{

    if(!req.query.address){
        return res.send({
             error:'please provide address!!'
         })
     }
     else{
        geocode(req.query.address,(error,{latitude,longitude,location}={})=>{

            if(error){
                return res.send({
                    error:error
                })
            }
            
            forecast(latitude,longitude,(error,forecastdata)=>{
                if(error){
                    return res.send({
                        error:error
                    })
                }
                res.send({
                    forecast:forecastdata,
                    location,
                    address:req.query.address

                })
                //console.log('data:',forecastdata)
                })
        })

        
     }
})

app.get('*',(req,res)=>{
res.render('404',{
    title:'error',
    name:'error'
})

})
// app.get('',(req,res)=>{

//         res.send('Hello Express!!')
// })

// app.get('/about',(req,res)=>{

//     res.send('<h2>About PAge!!<h2>')
// })
// app.get('/help',(req,res)=>{

//     res.send('Help page!!')
// })

//this is my first change

app.listen(3000,()=>{

    console.log('Server is up on the port 3000')
})