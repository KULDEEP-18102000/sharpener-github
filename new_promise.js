console.log("person 1: shows ticket");
console.log("person2: shows ticket");

const preMovie=async()=>{
    const promiseWifeBringingTicket=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("ticket")
        },3000)
    })

    const getPopcorn=new Promise((resolve,reject)=>{
        resolve(`popcorn`)
    })

    const getButter=new Promise((resolve,reject)=>{
        resolve(`Butter`)
    })

    const getColdDrink=new Promise((resolve, reject) => {
        resolve("cold drink")
    })

    let ticket=await promiseWifeBringingTicket;

    console.log(`wife I have ${ticket}`);
    console.log("husband we should go in");
    console.log("wife no i am hungry");

    // let popcorn=await getPopcorn;

    // console.log(`husband I got some ${popcorn}`)
    // console.log("husband we should go in");
    // console.log("wife I need butter");

    // let Butter=await getButter;

    // console.log(`husband I got some butter`)

    // let coldDrink=await getColdDrink;

    // console.log(`husband I also have ${coldDrink}`);
    
    let [popcorn,butter,coldDrink]=await Promise.all([getPopcorn,getButter,getColdDrink]);
    console.log(`${popcorn} ${coldDrink} ${butter}`);

    return ticket;
}

preMovie().then((t)=>console.log(t))

const promiseWifeBringingTicket=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("ticket")
    },3000)
})

const getPopcorn=promiseWifeBringingTicket.then((t)=>{
    // console.log(`person 3 shows ${t}`);
    console.log("bringing popcorn");
    return new Promise((resolve,reject)=>{
        resolve(`popcorn ${t}`)
    })
})

const getButter=getPopcorn.then((m)=>{
    console.log("Bringing butter");
    return new Promise((resolve,reject)=>{
        resolve(`butter ${m}`)
    })
})

const getColdDrink=getButter.then((m)=>{
    console.log("bringing cold drink");
    return new Promise((resolve, reject) => {
        resolve(`coldDrink ${m}`)
    })
})

getColdDrink.then((m)=>{console.log(`${m}`)});
// getPopcorn.then((s)=>{
//     console.log(s);
// })

console.log("person 4 shows ticket");
console.log("person 5 shows ticket");

const createpost=async()=>{
    const createpost_promise=new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post)
            resolve("done");
            reject("not done");
        },1000)
    })
    let new_post=await createpost_promise;
    return new_post;
}

const deletepost=async()=>{
    const deletepost_promise=new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(posts.length>0){
                posts.pop();
                resolve("post deleted");
            }else{
                reject("Array is empty now")
            }
            // posts.pop();
        },1000)
    })
    let new_post=await deletepost_promise;
    return new_post;
}

