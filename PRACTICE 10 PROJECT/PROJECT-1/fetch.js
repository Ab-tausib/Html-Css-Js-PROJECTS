// //fetch data
// const fecthData = async (config) => {
//     try {
//       const res = await axios(config);
//       return res.data;
//     } catch (error) {
//       throw Error("data is not fetched");
//     }
//   };
  
//   // selection
//   const postsElement = document.querySelector(".posts");
  
//   const loadAllData = async () => {
//     const posts = await fecthData("https://jsonplaceholder.typicode.com/posts");
//     posts.map((post) => {
//         console.log(post)
//       const postElement = document.createElement("div");
//       postElement.classList.add("my-card");
//       postElement.innerHTML = `
//            <h4 class="post-title">${post.title}</h4>
//           <p class="post-body">${post.body}</p>
//       `;
//       postsElement.appendChild(postElement);
//     });
//   };
  
//   loadAllData();


const cardFetch = ()=>{
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
  .then(res => res.json())
  .then(data => displayData(data))
  .catch(err => displayError("Something Went Wrong"))

}


const displayData =  datas => {
  const dataContainer = document.getElementById("posts");
  console.log(dataContainer)
  dataContainer.innerHTML = '';
  datas.map((post)=>{
    console.log(post)
    const dataElement = document.createElement("div")
    dataElement.classList.add("my-card");
    dataElement.innerHTML = `
    <h4 class="post-title">${post.title}</h4>
    <p class="post-body">${post.body}</p>
    `;
    dataContainer.appendChild(dataElement);
  });

};

function displayError(err) {
  const errElement = document.getElementById("error-msg");
  errElement.innerText = err;
};


cardFetch();

