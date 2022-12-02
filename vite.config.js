const { resolve } = require("path");

export default {
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
      
        logIn: resolve(__dirname, "signin.html"),
        contact: resolve(__dirname, "contact.html"),
      },
    },
  },
};