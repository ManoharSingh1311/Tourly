# Tourly: Your Ultimate Travel Companion

**Tourly** is a travel and tourism web application that simplifies your travel planning and enhances your travel experiences. Designed with modern web technologies and a robust backend, Tourly is your go-to platform for exploring destinations, planning trips, and sharing reviews.

This project is a web application that allows users to create, view, edit, and delete listings, as well as leave and manage reviews for these listings. It provides a marketplace-like platform where users can post items, and others can interact by leaving reviews and ratings.

## Features

- **Create New Listings:** Users can create a new listing by providing details such as the title, description, image, price, country, and location.
- **View Listings:** All listings are displayed with details, including an image, owner information, description, price, location, and country.
- **Edit Listings:** Only the owner of a listing can edit its details.
- **Delete Listings:** Listings can be deleted by their owner.
- **Leave Reviews:** Authenticated users can leave a review with a star rating and comment.
- **Manage Reviews:** Users can delete their own reviews.
- **Responsive Design:** Uses Bootstrap for responsive design, ensuring usability across various devices.
- - **MVC Architecture**: Separation of concerns into Models, Views, and Controllers for maintainable and scalable code.


## Screenshots

### Home Page
![Home Page](screenshots/home_page.png)

### Create Listing
![Create Listing](screenshots/create_listing.png)

### Listing Details
![Listing Details](screenshots/listing_details.png)

### Leave a Review
![Leave a Review](screenshots/leave_review.png)

> **Note:** Replace the paths (e.g., `screenshots/home_page.png`) with the actual paths where your screenshots are saved.

## Tech Stack

- **Frontend:** EJS templates, Bootstrap for styling.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB for storing listing and review data.
- **File Upload:** Uses `multer` middleware to handle image uploads.

## Prerequisites

Ensure you have the following software installed:

- **Node.js:** >= 14.x
- **npm:** >= 6.x
- **MongoDB:** A running MongoDB instance (local or cloud)
- **Git:** For version control

## Installation

1. **Clone the repository:**
   ```sh
   
   git clone https://github.com/ManoharSingh/Tourly
   
