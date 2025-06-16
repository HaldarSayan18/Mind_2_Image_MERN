const express = require("express");
const { createPost, getAllPosts } = require("../controllers/PostCtrl.js");

const router = express.Router();

router.get("/getpost", getAllPosts);
router.post("/createpost", createPost);

module.exports = { router };