// Toggle navbar
let navBar = document.querySelector(".navbar")
let navBtn = document.querySelector(".toggleBtn");
     
window.addEventListener('DOMContentLoaded', ()=>{
    navBar.classList.remove("nav-active");
});
 navBtn.addEventListener('click', ()=>{
     navBar.classList.toggle("nav-active");
 })
// HEADER POSITIONING

window.addEventListener('scroll', ()=>{
    let windowHeight = window.pageYOffset;
// console.log(windowHeight);
let header  = document.querySelector(".header")

        if(windowHeight > 100){
            header.classList.add("fixedNav");
        }
        else{
            header.classList.remove("fixedNav");
        }

        // remove the navBar when scrolling through the page
        navBar.classList.remove("nav-active");
});

// when page loaded what to display
window.addEventListener("DOMContentLoaded", async()=>{
    const data = await fetchData();
    const content = await data.gallery;

    displayImage(content);
    displayLinkBtn();
})

//   start of function to fetch data
// function to get all data from the json api/database later
const fetchData = async ()=>{
    try{
        const response = await fetch("data.json");
        const data = await response.json();

        return data;
    }
    catch(err){
        console.log(err.message);
    }
};
//   end of function to fetch data


            //   displayImageItems
//  function to display images in the gallery section
  function displayImage(content){
    let imgWrapper = document.querySelector(".images-wrapper");

    let imgDisplay = content.map((item)=>{
        // console.log(item);
        return `
        <div class="image-phto">
        <img src=${item.img} alt="${item.id}" class="image">
        <div class="about"> ${item.category}</div>
        </div>
    `;
    }).join("\n");
    imgWrapper.innerHTML = imgDisplay;
  }
//   end of displayImagesItems

    // displayImagesLink for asyns/ await function to fetch data
// dynamic filter of the image description as per link

async function displayLinkBtn(){
    const data = await fetchData();
    const images = await data.gallery;

    const btnWrapper = document.querySelector(".options");

    // 1.get all the categories
    const describe = images.reduce((values, items)=>{
        if(!values.includes(items.description)){
            values.push(items.description);
        }
        return values;
    },
    ["all"]
    );
    // console.log(describe); --> displays all the available description

    //  2.Iterate the buttons(display/return the buttons)
    const descriptnBtns = describe.map((eachDescriptn)=>{
        return `
        <button class="filterBtn" type="button" data-name=${eachDescriptn}>
          ${eachDescriptn}
        </button>
        `
    }).join(" ");

    btnWrapper.innerHTML = descriptnBtns;

        //  3.Select the buttons when available
        let filterBtns = btnWrapper.querySelectorAll(".filterBtn");
        //   console.log(filterBtns);
    
        // enable btns by adding an eventListener
    
        filterBtns.forEach((btn)=>{
            if(btn.dataset.name === "all"){
                btn.classList.add("active");
            }

            btn.addEventListener('click', (e)=>{
                const about = e.currentTarget.dataset.name;
                // console.log(describe);--> accesses the description in the array

                filterBtns.forEach((btnTag)=> btnTag.classList.remove("active"));

                const imageDescription = images.filter((imageItem)=>{
                    if(imageItem.description === about){
                      btn.classList.add("active");

                      return imageItem;
                    }
                 e.target.classList.add("active");
                });
                // console.log(imageDescription);

                // filter according to description and display on page
                if( about === "all"){
                    displayImage(images);
                }
                else{
                    displayImage(imageDescription);
                }
            });
        });
}









