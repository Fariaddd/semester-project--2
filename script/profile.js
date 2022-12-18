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