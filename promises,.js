const posts=[
    {title:'post one',body:'this is post one'},
    {title:'post two',body:'this is post two'}
];

function getposts(){
        setTimeout(()=>{
            let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`
        })
        document.body.innerHTML=output
        },1000)
        
}

function createpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            
            const error=false;
            if(!error){
                resolve();
            }else{
                reject("Something went wrong");
            }
        },1000)
    })
}

function deletepost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                posts.pop();
                resolve();
            }else{
                reject("Array is empty now")
            }
            // posts.pop();
        },1000)
    })
}

createpost({title:'post three',body:'this is post three'})
.then(getposts)
.catch(err=>console.log(err));

// const new_function=()=>{
//     getposts();
//     deletepost();
// }
getposts();
deletepost()
.then(()=>{
    getposts();
    deletepost().then(()=>{
        getposts();
        deletepost().then(()=>{
            getposts();
            deletepost().catch((err)=>{
                console.log(err);
            });
        });
    });
    // getposts();
    // deletepost();
    // getposts();
    // deletepost();
})
.catch(err=>console.log(err))

createpost({title:'post four',body:'this is post four'})
.then(setTimeout(()=>{
    deletepost();
},1000));


// const Promise1=Promise.resolve("Hello world");
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>
// setTimeout(resolve,2000,'Goodbye'));

const Promise1=createpost({title:'post one',body:'this is post one'});
// const Promise1=new Promise((resolve,reject)=>setTimeout(resolve,100,`${posts.forEach(post=>console.log(post))}`))
const promise2=new Date();

// Promise.all([Promise1,promise2]).then(((values)=>console.log(values)));
Promise.all([Promise1,promise2]).then(((posts.forEach(post=>{console.log(post)})),
(values)=>console.log(values[1]))).then(()=>{
    deletepost().then(posts.forEach(post=>{console.log(post)}));
});