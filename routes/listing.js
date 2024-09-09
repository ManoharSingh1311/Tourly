const express = require("express");
const router = express.Router();
const wrapasync = require("../utils/wrapasync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js")
const listingController = require("../controllers/listings.js")
const multer = require('multer');
const {storage} =require("../cloudConfig.js");
const upload = multer({
    storage,
    limits: { fileSize: 1024 * 1024 * 5 }, 
  });
// Index Route + Create Route
router.route("/")
.get(wrapasync(listingController.index))
.post(isLoggedIn, upload.single('listing[image]'), validateListing, wrapasync(listingController.createListing));
// New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Show Route + Update Route  + Delete Route
router.route("/:id")
.get( wrapasync(listingController.showListing))
.put(isLoggedIn, isOwner,upload.single('listing[image]'), validateListing, wrapasync(listingController.updateListing))
.delete( isLoggedIn, isOwner, wrapasync(listingController.destroyListing))

// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapasync(listingController.renderEditForm));

module.exports = router;
