const posts  = [
    {
        user: 1,
        name:"abdullah",
        mail:"aalkdf@gmail.com",
        age: 20,
        phone: 012324532453
    },

    {
        user: 2,
        name:"abdullah Tausib",
        mail:"aalkdf@gmail.com",
        age: 20,
        phone: 012324532453
    },

    {
        user: 3,
        name:"abdullah Hamid",
        mail:"aalkdf@gmail.com",
        age: 20,
        phone: 012324532453
    },


    {
        user: 4,
        name:"abdullah xwasib",
        mail:"aalkdf@gmail.com",
        age: 20,
        phone: 012324532453
    },

    {
        user: 5,
        name:"abdullah gazi",
        mail:"aalkdf@gmail.com",
        age: 20,
        phone: 012324532453
    },


    {
        user: 6,
        name:"abdullah mojahid",
        mail:"aalkdf@gmail.com",
        age: 20,
        phone: 012324532453
    },


    {
        user: 7,
        name:"abdullah Hamid",
        mail:"aalkdf@gmail.com",
        age: 20,
        phone: 012324532453
    },


    {
        user: 8,
        name:"abdullah xwasib",
        mail:"aalkdf@gmail.com",
        age: 20,
        phone: 012324532453
    },

    {
        user: 9,
        name:"abdullah gazi",
        mail:"aalkdf@gmail.com",
        age: 20,
        phone: 012324532453
    },


    {
        user: 10,
        name:"abdullah mojahid",
        mail:"aalkdf@gmail.com",
        age: 20,
        phone: 012324532453
    },



]

// <div class="col-12 col-sm-12 col-md-4 col-lg-3 my-card">
//         <h3 id="card-header">Card header</h3>
//         <p id="card-title">Card Title</p>
//         <p id="card-body">
//           <p>Name: </p>
//           <p>Mail: </p>
//           <p>Age: </p>
//           <p>Phone: </p>
//           <p>User: </p>
//         </p>
//       </div>

// 
const postsElement = document.querySelector(".posts");
console.log(postsElement)

const loadData = ()=>{
    posts.map(post =>{
        const postElement = document.createElement("div")
        postElement.classList.add("my-card")
        postElement.innerHTML = `
        <h3 id="card-header">Card header</h3>
        <p id="card-title">Card Title</p>
        <p id="card-body">
        <p>Name: ${post.name} </p>
        <p>Mail: ${post.mail} </p>
        <p>Age: ${post.age} </p>
        <p>Phone: ${post.phone} </p>
        <p>User: ${post.user} </p>
        </p>
        `
        postsElement.appendChild(postElement)
    })
}

loadData()