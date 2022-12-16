const { resolve } = require("path");

export default {
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        signup: resolve(__dirname, "signup.html"),
        logIn: resolve(__dirname, "signin.html"),
        contact: resolve(__dirname, "contact.html"),
        welcome: resolve(__dirname, "welcome.html"),
        profile: resolve(__dirname, "profile.html"),
        listing: resolve(__dirname, "listing.html"),
        newListing: resolve(__dirname, "newListing.html"),
        details: resolve(__dirname, "details.html"),
        
      },
    },
  },
};
