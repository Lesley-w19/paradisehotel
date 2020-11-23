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
    //    the below has been replaced by the position sticky of the header

// window.addEventListener('scroll', ()=>{
//     let windowHeight = window.pageYOffset;
// // console.log(windowHeight);
// let header  = document.querySelector(".header")

//         if(windowHeight > 100){
//             header.classList.add("fixedNav");
//         }
//         else{
//             header.classList.remove("fixedNav");
//         }

//         // remove the navBar when scrolling through the page
//         navBar.classList.remove("nav-active");
// });

// when page loaded what to display
window.addEventListener("DOMContentLoaded", async()=>{
    const data = await fetchData();
    const content = await data.gallery;

    displayImage(content);
    displayLinkBtn();
});

//   start of function to fetch data
// function to get all data from the json api/database later
const fetchData = async ()=>{
    try{
        const response = await fetch("./data.json");
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
        <img src="${item.img}" alt="${item.id}" class="image">
        <div class="about"> ${item.category}</div>
        </div>
    `;
    }).join("\n");

    imgWrapper.innerHTML = imgDisplay;
  };
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

// to activate button for the gallery page
// let galleryBtn = document.querySelector(".gallery-btn");

window.addEventListener('scroll', ()=>{
    let windowHeight = window.pageYOffset;
    let galleryBtn = document.querySelector(".gallery-btn");

    if( windowHeight > 500 ){
        galleryBtn.classList.add("showBtn");
    }
    else{
        galleryBtn.classList.remove("showBtn");
    }
     
});
// // to scroll to the top of the page
//  let glleryBtn = document.getElementById("galleryBtn");
//  glleryBtn.addEventListener('click', ()=>{
//     window.scrollTo({
//         top:'10%',
//         left:0,
//         behavior:'smooth'
//     });
//  });

// to activate button for the SPA-PAGE
let artWrapper = document.querySelectorAll("article-wrapper");
let spaBtns = document.querySelectorAll(".spa-btn");

spaBtns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        // console.log(e.currentTarget.parentElement);
        const showText = e.currentTarget.parentElement;
        artWrapper.forEach((item)=>{
            // console.log(item);
            if( item !== showText){
                item.classList.remove("show-text");
            }
        })
        showText.classList.toggle("show-text");
    })
});

// to add text in SPA-PAGE Treatments section
const treatments=[
    {
        image:"./images/facialSpa.jpg",
        header:"Paradise Special Facial",
        text:"Cleanse and refresh your skin with this locally-inspired facial, which uses natural ingredients such as figs, almond powder and warm honey. A hair mask and scalp massage complete this expereince that is ideal for all skin types"
    },
    {
        image:"./images/traditional.jpg",
        header:"Traditional Prince Hammam",
        text:"This traditional treatment including a warm herbal steam, body wash with a black soap and gentle exfoliation followed by the application of purifying rasoul clay enriched with seven fragrant herbs is focused on cleansing and refreshing. After rinsing, body milk is applied, leaving your skin supple and enriched."
    },
    {
        image:"./images/wonders.jpg",
        header:"Wonders of Paradise",
        text:"This locally-inspired cleansing journey begins with a warm sea-salt bath steeped in fresh mint and with a body scrub made from local nourishing dates, honey and almond powder. It continues with the Arabian body rasoul which has slimming and purifying properties to leave the skin revitalized, then concludes with a dainage massage."
    },
    {
        image:"./images/recoveryBay.jpg",
        header:"Jet Lag Recovery",
        text:" Revive circulation, release muscle tension and reset the internal clock with a full body massage using exclusively blended aromatherapy oils, followed by a head massage and calming herbal tea."
    }
];
let spaImg = document.getElementById("spa-twoImage");
let textHeader = document.getElementById("two-textHeader");
let textInfo = document.querySelector("#treatment-text");
let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");

 let currentContent = 0;

 window.addEventListener('DOMContentLoaded', ()=>{
     getContent();
 });

 function getContent(){
     const item = treatments[currentContent];

     spaImg.src = item.image;
     textHeader.innerHTML = item.header;
     textInfo.innerHTML = item.text;
 }

 leftBtn.addEventListener('click',()=>{
     currentContent --;
     if(currentContent < 0){
          currentContent = treatments.length - 1;
     }
     getContent();
 })

 rightBtn.addEventListener('click', ()=>{
     currentContent ++;
     if(currentContent > treatments.length - 1){
         currentContent = 0;
     }
     getContent();
 })

// end of SPA PAGE

// to get the content from the son flie for accomodation.html
