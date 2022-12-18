import { getToken, getUserName } from "./storage.js"
import dayjs from "dayjs";
import RelativeTimeFormat from "relative-time-format";
import { PROFILES_URL, CREATE_LIST } from "./api.js";

const getUserAccess = getUserName();
if(!getUserAccess  ){
    location.replace ("/signIn.html")
 }

const profileInfo = document.getElementById("profile_info");
const profileName = document.getElementById("profile_name");
const activeFeed = document.getElementById("show_active");
const ActiveBidsBtn = document.getElementById("active_bids_button");
const activeLisBtn = document.getElementById("active_listings_button");
const editImgOverlay = document.getElementById("edit_img_overlay");
const myListings = document.getElementById("my_listings_div");
const editListingOverLAy = document.getElementById("edit_listing_overlay");

// profileName.innerHTML = getUserName();

// ActiveBidsBtn.addEventListener("click", profileList);
// async function myProfile(){
//     try{
//         const response = await fetch ( 
//          `${PROFILES_URL}/${getUserName()}?_listing=true&_bids=true`,{
//             method: "GET",
//             headers: {
//                 Authorization: `Bearer ${getToken()}`,
//             },
//           }
//         );
//         const data = await response.json();
//         if(response.ok){
//             listProfile(data);
//             if(data.listings.length !== 0){
//                 profileList();
//             }
//         } else {
//             console.log("error", data);
//         }
//     } catch (e){
//         console.log(e);
//     }
// };
// myProfile();

// async function profileList(){
//     activeLisBtn.disabled = true;
//     activeLisBtn.classList.add("active-button")
//     ActiveBidsBtn.disabled = false;
//     ActiveBidsBtn.classList.remove("active-button")
    
//     try{
//         const response = await fetch(`${PROFILES_URL}/${getUserName()}/listing?_bids=true`,
//         {
//             method: "GET",
//             headers: {
//                 Authorization: `Bearer ${getToken()}`,

//             },
           
//           }
//         )
//         const data = await response.json();
//         if(response.ok){
//             activeSection(data);
//             allMyListings(data);
//         }else{
//             activeSection(data);
//             console.log("error",data);
//         }
//     } catch(e){
//         console.log(e);
//     }
// }
// function listProfile(data){
//     let myProfile;
//     let name;
//     let email;
//     let profileImg;
//     let credits;
//     let wins = [];
//     let listings = [];
    
//     if(data.name){
//         name = data.name;
//     }
//     if(data.email){
//         email = data.email;
//     }
//     if(data.credits){
//         credits = data.credits;
//     }
    
//     if(data.wins){
//         wins =` <span class="text-3x1">${data.wins.length}</span> wins`;
//         if(data.wins.length == 1){
//             wins = `<span class="text-3x1">1</span> win`;
//         }
//         if(data.wins.length == 0){
//             wins = `<span class="text-3x1">${data.wins.length}</span> wins`;
//         }
//     }
//     if(data.avatar){
//         listings = ` <span class="text-3x1">${data.listings.length}</span> listings`;

//         if(data.listings.length == 1){
//             listings = `<span class="text-3x1">${data.listings.length}</span> listings`;
//         }
//         if(data.listings.length == 0){
//             listings = `<span class="text-3x1">0</span> listings`;
//         }

//     }
//     myProfile= ` 
//     <section class="h-fit w-full rounded-md font-light md:flex md:flex-col justify-between items-center md:px-6lg:flex-col lg:w-fit">
//       <div class="flex flex-col gap-4 justify-center items-center md:w-1/2">
//         <div class="w-2/3 md:w-full h-60 lg:w-72 rounded-xl bg-cover flex justify-end items-end p-4" style="background-image: url('${profileImg}')">"

//     `


// }



