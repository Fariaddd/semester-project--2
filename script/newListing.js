import { getToken, getUserName } from "./storage.js"
import { headerBar } from "./auth.js"

const createForm = document.querySelector("#create-post-form")
const ListingTitle = document.querySelector("#ListingTitle")
const ListDescription = document.querySelector("#ListDescription")
const listTags = document.querySelector("#listTags")
const listImgOne = document.querySelector("#listImgOne")
const listingEndDate = document.querySelector("#listingEndDate")
    
const getUserAccess = getUserName();
if(!getUserAccess){
    location.replace ("/signIn.html")
 }
 
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
            location.href = ("/profile.html")
        } else {
            const err = await response.json();
            console.log(err);
            console.log("CREATE LIST FAILED Hesham!!");
        }
        createForm.reset();
    }

    createListing();
})


    
   







