// homepage default backgrounds
const backgrounds = [
    "./images/room0Home.jpg",
    "./images/room7Home.jpg",
    "./images/room6Home.jpg",
    "./images/room1Home.jpg",
    "./images/room1HomePage.jpg",
    "./images/room2Home.jpg",
    "./images/room3Home.jpg",
   "./images/roomsetHomePage.jpg",
    "./images/room5Home.jpg",
    "./images/room4Home.jpg",
];

//    gallery images and description
const images = [
    {
        id:1,
        img:"./images/presidential1.jpg",
        category:"presidential suite-1",
        decription:"rooms&suites",
    },
    {
        id:2,
        img:"./images/deluxe1.jpg",
        category:"deluxe room-1",
        decription:"rooms&suites",
    },
    {
        id:3,
        img:"./images/premier1.jpg",
        category:"premier suite-1",
        decription:"rooms&suites",
    },
    {
        id:4,
        img:"./images/singlebasic1.jpg",
        category:"single basic suite-1",
        decription:"rooms&suites",
    },
    {
        id:5,
        img:"./images/hall1.jpg",
        category:"conference Hall-1",
        decription:"conference-hall",
    },
    {
        id:6,
        img:"./images/dining1.jpg",
        category:"dining-1",
        decription:"dining",
    },
    {
        id:7,
        img:"./images/spa1.jpg",
        category:"spa-1",
        decription:"spa",
    },
    {
        id:8,
        img:"./images/hall2.jpg",
        category:"conference Hall-2",
        decription:"conference-hall",
    },
    {
        id:9,
        img:"./images/dining2.jpg",
        category:"dining-2",
        decription:"dining",
    },
    {
        id:10,
        img:"./images/spa2.jpg",
        category:"spa-2",
        decription:"spa",
    },
    {
        id:11,
        img:"./images/dining3.jpg",
        category:"dining-3",
        decription:"dining",
    },
    {
        id:12,
        img:"./images/hall3.jpg",
        category:"conference Hall-3",
        decription:"conference-hall",
    },
    {
        id:13,
        img:"./images/reception1.jpg",
        category:"reception-1",
        decription:"reception",
    },
    {
        id:14,
        img:"./images/beach1.jpg",
        category:"beach restaurant",
        decription:"dining",
    },
    {
        id:15,
        img:"./images/spa3.jpg",
        category:"spa-3",
        decription:"spa",
    },
    {
        id:16,
        img:"./images/pool1.jpg",
        category:"pool-1",
        decription:"swimming-pool",
    },
    {
        id:17,
        img:"./images/reception2.jpg",
        category:"reception-2",
        decription:"reception",
    },
    {
        id:18,
        img:"./images/hotel1.jpg",
        category:"hotel-1",
        decription:"hotel",
    },
    {
        id:19,
        img:"./images/presidential2.jpg",
        category:"presidential suite-2",
        decription:"rooms&suites",
    },
    {
        id:20,
        img:"./images/deluxe2.jpg",
        category:"deluxe room-2",
        decription:"rooms&suites",
    },
    {
        id:21,
        img:"./images/singlebasic2.jpg",
        category:"single basic suite-2",
        decription:"rooms&suites",
    },
    {
        id:22,
        img:"./images/premier2.jpg",
        category:"premier suite-2",
        decription:"rooms&suites",
    },
    {
        id:23,
        img:"./images/presidential3.jpg",
        category:"presidential suite-3",
        decription:"rooms&suites",
    },
    {
        id:24,
        img:"./images/pool2.jpg",
        category:"pool-2",
        decription:"swimming-pool",
    },
    {
        id:25,
        img:"./images/deluxe3.jpg",
        category:"deluxe room-3",
        decription:"rooms&suites",
    },
    {
        id:26,
        img:"./images/premier3.jpg",
        category:"premier suite-3",
        decription:"rooms&suites",
    },
    {
        id:27,
        img:"./images/double1.jpg",
        category:"double-1",
        decription:"rooms&suites",
    },
    {
        id:28,
        img:"./images/pool3.jpg",
        category:"pool-3",
        decription:"swimming-pool",
    },
    {
        id:29,
        img:"./images/hotel2.jpg",
        category:"hotel-2",
        decription:"hotel",
    },
    {
        id:30,
        img:"./images/double2.jpg",
        category:"double-2",
        decription:"rooms&suites",
    },
    {
        id:31,
        img:"./images/garden1.jpg",
        category:"garden-1",
        decription:"garden",
    },
    {
        id:32,
        img:"./images/garden2.jpg",
        category:"garden-2",
        decription:"garden",
    }

];



// HEADER POSITIONING

window.addEventListener('scroll', ()=>{
    let windowHeight = window.pageYOffset;
// console.log(windowHeight);
let header  = document.querySelector(".header")

        if(windowHeight > 500){
            header.classList.add("fixedNav");
        }
        else{
            header.classList.remove("fixedNav");
        }
});

// BACKGROUND IMAGE CHANGE
// window.addEventListener('DOMContentLoded',()=>{
//     let welcomeSection  = document.querySelector(".welcome");

//     welcomeSection.style.backgroundColor =backgrounds[getBackground()];
    
//     function getBackground(){
//         return Math.floor(Math.random() * backgrounds.length);
       
//     }
//     // console.log( Math.floor(Math.random() * backgrounds.length)
//     getBackground();
//     setInterval(getBackground, 500);
    
// })


//    GALLERY IMAGES AND BUTTONS

let imgWrapper = document.querySelector(".images-wrapper");
//   console.log(imgWrapper);
let btnWrapper = document.querySelector(".options");
// console.log(btnWrapper);

// when page is loaded what to display
window.addEventListener("DOMContentLoaded", ()=>{
         displayImageItems(images);
         displayImagesLink();
});

//  function to display the images in the gallery section
function displayImageItems(content){
    let imgDisplay = content.map((item)=>{
        //  console.log(item);
        return `
            <div class="image-phto">
            <img src=${item.img} alt="${item.id}" class="image">
            <div class="about"> ${item.category}</div>
            </div>
        `;
    });
    
    let imageDisplay = imgDisplay.join(" ");
    //  console.log(imageDisplay);
    imgWrapper.innerHTML = imageDisplay;
}

// dynamic filter of the images description as per the link
    function displayImagesLink(){
        // 1. get all the categories
        const description = images.reduce(
            (values, items)=>{
                if(!values.includes(items.decription)){
                    values.push(items.decription);
                }
                return values;
                },
                ["all"]
        );
        //  console.log(description); --> displays all the descriptions available  

        //  2.Iterate the buttons(display/return the buttons)
           const descriptnBtns = description.map((eachDescriptn)=>{
               return `
               <button class="filterBtn" type="button" data-name=${eachDescriptn}>
                 ${eachDescriptn}
               </button>
               `
           }).join(" ");

           btnWrapper.innerHTML = descriptnBtns;
         
        //    3. select the buttons hen available
      let filterBtns = btnWrapper.querySelectorAll(".filterBtn");
//   console.log(filterBtns);

    //   enable the btns by adding an eventlistener
      filterBtns.forEach((btn)=>{
          btn.addEventListener('click', (e)=>{
            const about = e.currentTarget.dataset.name;
// console.log(description); access the descrption in the array
          
 const imageDescription = images.filter((imageItem)=>{
     if(imageItem.decription === about ){
         btn.classList.add("active");
         return imageItem;
     }
     document.querySelector(".active").classList.remove("active");
     e.target.classList.add("active");
 })
        //  console.log(imageDescription);

        // filter out according to categories and display on the page
  if(about === 'all'){
     displayImageItems(images);
  }
  else{
      displayImageItems(imageDescription);
  }

});
      });
}