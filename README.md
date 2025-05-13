# StreetSync - Community Portal

Welcome to **StreetSync**, a community-driven web application built for racing enthusiasts. Whether you're a track-day pro or just getting started, this Node.js-based portal helps you stay informed about upcoming events and connect with the racing world.

## Project Overview

This web application provides:
- A public-facing portal for showcasing racing events, team highlights, and community updates.
- Modular and reusable views using EJS templating with partials for the header and footer.
- A styled and responsive frontend with clean design, ensuring usability across devices.
- Contact functionality with form handling, in-memory storage, and a confirmation page for user feedback.
- A maintainable and modular Express.js backend architecture with clear routing and data flow.

## Technologies used

- **Backend:** Node.js (v18+)
- **Framework:** Express.js (v4+)
- **Templating Engine:** EJS (v3+)
- **Styling:** CSS 
- **Development Tools:** Nodemon
- **Version Control:** Git & GitHub

## Team Members and Roles

- **Bernardt** – Frontend Developer  
- **Gordon** – Backend Developer  
- **Ulrigh** – Team Lead / Data Manager  
- **Carmen** – Documentation Manager  


## Folder Structure
```
├── app.js              # Main application entry point
├── routes/
│ └── pageRoutes.js     # Route definitions for all views
├── views/
│ ├── pages/            # EJS templates for main pages (home, about, etc.)
│ └── partials/         # Reusable partials header.ejs, footer.ejs
├── public/
│ ├── css/style.css     # Stylesheet
│ └── images/           # Static image assets
├── .gitignore
├── README.md
└── package.json
```

## Setup Instructions

### Prerequisites

Before you begin, make sure the following are installed on your system:
- Node.js (v18 or newer recommended)
- npm (comes bundled with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Development Mode

To run the project in development with auto-reloading:

```bash
npm run dev
```

Once running, open your browser and visit:: `http://localhost:3000`

### Production Mode

To launch the project without live reload:

```bash
npm start
```

## Pages & Features
- Home:	    Welcome message and placeholder for future dynamic events
- About:	    Intro to StreetSync and team members rendered dynamically
- Events:	    Displays array of events (title, date, location, image)
- Contact:	POST-enabled contact form (name, email, message) stored in memory
- Thank You:	Confirmation page shown after successful submission

## Dynamic EJS Rendering
- Team members rendered using an array (data) in the backend
- Event listings populated from a structured array
- Form submission uses POST and redirects to the Thank You page
- Header and Footer included via <%- include() %> partials

## Contact

For collaboration or feedback, please reach out via the Contact page in the application.

## License

For educational and demonstration use only. Not licensed for commercial deployment.


