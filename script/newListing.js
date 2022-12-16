import { getToken, getUserName } from "./storage.js"
import { CREATE_LIST } from "./api.js"

const createForm = document.querySelector("#create-post-form")
const ListingTitle = document.querySelector("#ListingTitle")
const ListDescription = document.querySelector("#ListDescription")
const listTags = document.querySelector("#listTags")
const listImgOne = document.querySelector("#listImgOne")
const listingEndDate = document.querySelector("#listingEndDate")

// function checkAccess(access) {
//     if (access === null) {
//       window.location.replace("/singin.html");
//     }
//   }
//   checkAccess(getToken())


// createForm.addEventListener("submit", function(event){
//     event.preventDefault();

//     const listingTags = [listTags.value]
    
//     const listingImg = [listImgOne.value];

//     const listingData = {
//         "title": ListingTitle.value.trim(),
//         "description": ListDescription.value.trim(),
//         "tags": listingTags.length > 0 ?  listingTags : null,
//         "media": listingImg.length > 0 ?  listImgOne : null,
//         "endsAt": listingEndDate.value 
//     }
//     async function creatingListe(){
//         const response = await fetch("https://api.noroff.dev/api/v1/auction/listings", {
//             method: "POST",
//             header: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzI1LCJuYW1lIjoiRmxvdXBwcHkiLCJlbWFpbCI6IkZsb3VwcHB5QHN0dWQubm9yb2ZmLm5vIiwiYXZhdGFyIjpudWxsLCJjcmVkaXRzIjoxMDAwLCJ3aW5zIjpbXSwiaWF0IjoxNjcwNTQ0NzcyfQ.sfePcUIJX8cYtAa3V8YIter6PoOqfpVGhmMybIzGRC8`
//             },
//             body: JSON.stringify(listingData)
//         })
//         if(response.ok){
//             const data = await response.json();
//             console.log(data);
//             console.log("Create list succeded");
//             location.href = "/profile.html"
//         } else{
//             const err = await response.json();
//             console.log(err);
//             console.log("Create list failed!");
//         }
//         createForm.reset();
//     }
//         creatingListe();
// })


createForm.addEventListener("submit", function (event) {
    event.preventDefault();
   

     const listingTags = [listTags.value]
    
     const listingImg = [listImgOne.value];

    const listingData = {
        "title": ListingTitle.value.trim(),
        "description": ListDescription.value.trim(),
        "tags": listingTags,
        "media": listImgOne.length > 0 ? listImgOne : null,
        "endsAt": listingEndDate.value
    }
    console.log("listingData: ", listingData);

    async function createListing() {
        const response = await fetch("https://api.noroff.dev/api/v1/auction/listings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzI1LCJuYW1lIjoiRmxvdXBwcHkiLCJlbWFpbCI6IkZsb3VwcHB5QHN0dWQubm9yb2ZmLm5vIiwiYXZhdGFyIjpudWxsLCJjcmVkaXRzIjoxMDAwLCJ3aW5zIjpbXSwiaWF0IjoxNjcwNTQ0NzcyfQ.sfePcUIJX8cYtAa3V8YIter6PoOqfpVGhmMybIzGRC8`
            },
            body: JSON.stringify(listingData)
        })
        console.log("list creation response: ", response)
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            console.log("CREATE LIST SUCCEEDED!!  🥳 🤗🤗");
            window.location.href = "/profile.html"
        } else {
            const err = await response.json();
            console.log(err);
            console.log("CREATE LIST FAILED Hesham!!");
        }
        createForm.reset();
    }

    createListing();
})


    
   







