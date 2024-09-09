
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Cloudinary with environment variables
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

// Set up CloudinaryStorage with parameters
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'tourly_DEV',
        allowedFormats: ['png', 'jpg', 'jpeg'],
    },
});

module.exports = {
    cloudinary,
    storage,
};
