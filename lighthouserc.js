module.exports = {
  ci: {
    collect: {
      staticDistDir: "./build",
      url: [
        "/",
        "/about",
        "/courses",
        "/courses/0",
      ],
    },
    upload: {
      target: "temporary-public-storage"
    }
  }
}
