const { resolve } = require("path");

export default {
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        signup: resolve(__dirname, "signup.html"),
        logIn: resolve(__dirname, "signin.html"),
        contact: resolve(__dirname, "contact.html"),
        contact: resolve(__dirname, "welcome.html"),
        profile: resolve(__dirname, "profile.html"),
      },
    },
  },
};