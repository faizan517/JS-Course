//PROMISE

// console.log('a')
// new Promise((res, re) => {
    //     try {
//         setTimeout(() => {
    //             console.log('b')
//             res()
//         }, 2000)
//     } catch{
//         re()
//     }
// }).then(() => {
//     console.log('c')
// })



//PROMISE.ALL

// const Promise1 = new Promise((res,re)=>{
//     res('hello')
// })
// const Promise2 = new Promise((res,re)=>{
    //     res('hello jii')
// })
// const Promise3 = new Promise((res,re)=>{
    //     res('hello jiigz')
    // })
    
    // Promise.all([Promise1,Promise2,Promise3]).then((r)=>{
        
//      console.log(r)
//  })



//PROMISE.RACE

// const Promise1 = new Promise((res,re)=>{
    //     setTimeout(()=>{
//         res('hello')
//     },1000)
// })
// const Promise2 = new Promise((res,re)=>{
    //     setTimeout(()=>{
        
        //         res('hello jii')
        //     },300)
// })
// const Promise3 = new Promise((res,re)=>{
    //     setTimeout(()=>{
//         res('hello jiigz')
//     },1000)
// })

// Promise.race([Promise1,Promise2,Promise3]).then((r)=>{
    // console.log(r)
// })


//ARROW FUNCTION

// rec = ()=>{
//     console.log('Hello')
// }

// rec()

// const obj = {
//     arrow: () => {
//         console.log('arrow ', this)
//     }
// }

// obj.arrow() //Always returns you grand parent this