console.log('client side js file loaded!!')



const form=document.querySelector('form')
const search=document.querySelector('input')
const message1=document.querySelector('#message1')
const message2=document.querySelector('#message2')

form.addEventListener('submit',(e)=>{

    e.preventDefault()
    const location=search.value
    message1.textContent='Loding'
    message2.textContent=''


    fetch('http://localhost:3000/weather?address='+location).then((response)=>{

        response.json().then((data)=>{
            if(data.error){
                message1.textContent='Please provide location'
                console.log('Please provide location')
            }else{
                message1.textContent=data.location
                message2.textContent=data.forecast
                console.log(data.forecast,','+data.location)
        
            }
            
        })
        
        })
   // console.log(location)
})

