# Iyers Catering

A modern, responsive React web application for Iyers Catering, featuring a custom theme, beautiful carousels, dynamic menu and food sections, and a working contact form with backend email integration.


## Features

- **Modern React + Vite** frontend with Tailwind CSS for rapid styling and responsiveness.
- **Custom theming** with gold-accented palette and Montserrat/Fira Code fonts.
- **Dynamic navigation**: Responsive Navbar and Sidebar for seamless navigation on all devices.
- **Hero and Carousel sections**: Visually rich carousels on Home, About, Menu, Food, and Contact pages.
- **Menu and Food pages**: Interactive cards and category-based food listings, including mains, sweets, savouries, and spices.
- **About Us**: Company story, chef bio, and food hygiene rating.
- **Contact page**: Carousel, contact form (first name, last name, email, message) with required field asterisks, no placeholders, wide layout, and backend email sending via Nodemailer. Email notifications feature a centered, branded card with the Iyers logo.
- **Scroll-to-top button** and polished Footer with social links.
- **Backend API**: Express server with `/api/contact` endpoint, sending visually branded emails using Gmail credentials from `.env`.
- **Production-ready**: ESLint config, environment variable support, and easy deployment.

## Project Structure

```
IyersCatering/
├── api/                  # Express API route for contact form (Nodemailer)
│   └── contact.js
├── src/
│   ├── assets/images/    # All images used in carousels, menu, etc.
│   ├── components/
│   │   ├── about/        # About page components (Main, SpiceCarosel)
│   │   ├── contact/      # Contact page components (ContactCarosel, ContactSection)
│   │   ├── food/         # Food page components (FoodCarosel, Main)
│   │   ├── home/         # Home page components (Hero, Information, Contact)
│   │   ├── menu/         # Menu page components (Carosel, Menu)
│   │   ├── misc/         # Footer, ScrollToTopButton
│   │   ├── Navbar.jsx, Sidebar.jsx
│   ├── pages/            # Page-level components for routing
│   ├── App.jsx           # Main app with React Router
│   ├── index.css         # Tailwind and custom CSS
│   ├── main.jsx          # React entry point
├── server.js             # Express server for API routes
├── .env                  # Email credentials for Nodemailer
├── package.json
├── vite.config.js        # Vite + Tailwind config
├── README.md
└── index.html
```

## Setup & Development

### Prerequisites

- Node.js (v18+ recommended)
- npm

### 1. Install dependencies

```powershell
npm install
```

### 2. Environment variables

Create a `.env` file in the project root with your Gmail credentials:

```
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=emails-sent-to-location
```

> **Note:** Use an [App Password](https://support.google.com/accounts/answer/185833) if you have 2FA enabled.

### 3. Start the backend server

```powershell
node server.js
```

This runs the Express server on [http://localhost:3001](http://localhost:3001) for the contact form API.

### 4. Start the frontend (Vite)

```powershell
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) (or the port Vite shows) to view the site.

## Usage

- **Home**: Hero carousel, information cards, and quick contact.
- **About Us**: Company story, chef bio, and food hygiene rating.
- **Menu**: Catering services as interactive cards.
- **Food**: Category-based food listing (mains, sweets, savouries, spices).
- **Contact**: Carousel and contact form (sends email via backend). All fields are required (marked with a red asterisk), there are no placeholders, and the form is wide and modern.

## Customization

- **Images**: Replace images in `src/assets/images/` as needed.
- **Menu/Food**: Edit `src/components/food/Main.jsx` and `src/components/menu/Menu.jsx` for menu items.
- **Contact Email**: Change the recipient in `api/contact.js` (`to: 'r.commandur@gmail.com'`).
- **Contact Form Layout**: Adjust width, required field indicators, and input styles in `src/components/contact/ContactSection..jsx`.
- **Email Branding**: Update the logo or card style in `api/contact.js` and `src/assets/images/iyerslogo.jpg`.


## License

This project is for demonstration and portfolio use. For commercial use, please contact [Raghav Commandur](rxghavcdev@gmail.com).