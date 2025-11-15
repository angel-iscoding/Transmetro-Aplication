# Transmetro PWA

![Project Status](https://img.shields.io/badge/status-under%20development-yellow)
![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-blue?logo=tailwind-css)

Responsive web application (PWA) for real-time bus tracking of the Transmetro system. Developed with Next.js and TypeScript, it offers interactive map visualization, browser notifications, and route search optimized for mobile devices.

*Complementary Backend: [Transmetro-API](https://github.com/angel-iscoding/Transmetro-API)*

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project aims to provide users of the Transmetro transportation system with a modern and efficient tool to track buses in real-time, check routes, and receive relevant notifications. The application is designed with a mobile-first approach to ensure an optimal experience on any device.

## Key Features

- **Real-Time Bus Tracking**: Visualize the current location of buses on an interactive map.
- **Route Search**: Easily find and select bus routes.
- **Browser Notifications**: Receive alerts about route changes or service news.
- **Responsive Design**: Fully functional on both desktop and mobile devices.
- **PWA Ready**: Can be installed on a mobile device for a native-like experience.

## Architecture

### Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Mapping**: Google Maps JavaScript API

### Folder Structure

- **/components**: Reusable UI components (e.g., `Button`, `Layout`).
- **/pages**: Application routes (e.g., `index.tsx` for the home page).
- **/hooks**: Custom React hooks for shared logic.
- **/styles**: Global styles and Tailwind CSS configuration.
- **/utils**: Utility functions.
- **/services**: API calls and data fetching logic.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/transmetro-aplication.git
   ```
2. Navigate to the project directory:
   ```bash
   cd transmetro-aplication
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts a production server.
- `npm run lint`: Lints the code to find and fix issues.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.