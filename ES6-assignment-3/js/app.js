//FETCH

//fetch is use to connect front-end and back-end code


//METHOD

//these are the methods
//1.get
//2.post
//3.put
//4.delete

//GET 

// fetch('https://jsonplaceholder.typicode.com/todos/10').then((res)=>{
//  return res.json()
// }).then((result)=>{
// console.log(result)
// })

//POST

// const payload = {
//     firstName: 'Faizan',
//     country: 'Pakistan',
//     city: 'Karachi',
//     profileIMG: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//     phoneNumber: '2323232323',
//     lastName: 'Pervaiz',
//     email: 'faizanpervaiz@gmail.com',
//     state: 'Sindh',
//     password: '22222'
// }

// const data = new FormData()
// for(let key in payload)
// data.append(key,payload[key])

// const config = {
//     method : 'POST',
//     redirect: 'follow',
//     body : data
// }


// fetch('https://localpages.herokuapp.com/api/auth/register',config).then((res)=>{
//     return res.json()
// }).then((result)=>{
//     console.log(result)
// })

//DELETE


// const config = {
//     method : 'DELETE',
    
// }


// fetch('https://jsonplaceholder.typicode.com/todos/1',config).then((res)=>{
//     return res.json()
// }).then((result)=>{
//     console.log(result)
// })


//PUT

// const config = {
//     method : 'PUT',
//     body : JSON.stringify({fake :200, id:2}),
// /*header*/    headers : {
//         'content-type' : "application/json"
//     }
// }

// fetch('https://jsonplaceholder.typicode.com/todos/1',config).then((res)=>{
//     return res.json()
// }).then((result)=>{
//     console.log(result)
// })