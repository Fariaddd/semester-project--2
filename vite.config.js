const { resolve } = require("path");

export default {
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        signUp: resolve(__dirname, "signup.html"),
        logIn: resolve(__dirname, "signin.html"),
        contact: resolve(__dirname, "contact.html"),
        createPost: resolve(__dirname, "about.html"),
        singlePost: resolve(__dirname, "single-post.html"),
        editPost: resolve(__dirname, "edit-post.html"),
      },
    },
  },
};