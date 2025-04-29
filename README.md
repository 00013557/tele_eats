# TeleEats - Project Setup & Running Guide

Welcome to **TeleEats**, a food delivery mini application! Follow the instructions below to set up and run the project on your local machine.

## **How to Run Project**

Follow the steps below to set up and run the project manually.

---

### **❖ Install Node.js** *(Ignore if already installed*)
Wait for the installation to complete. (Note: requires internet access).

Once the installation is complete, you can run the backend server by using the following command:

bash
npm start
Your backend should now be running.

❖ Steps to Run Frontend & Admin Panel of the Project
1. Setup Frontend & Admin Panel
Open the TeleEats project folder in VS Code.

Open the Integrated Terminal in the project directory:

Right-click on the sidebar in VS Code.

Select "Open in Integrated Terminal".

In the terminal, type the following command to install dependencies for the frontend and admin panel:

bash
npm install
Wait for the installation to complete. (Note: requires internet access).

After installation, you will see the 'node_modules' folder in the sidebar.

2. Running the Frontend & Admin Panel
In the terminal, type the following command to start the development server:

bash
npm run dev
After running the command, your project will start automatically in your default web browser.

Additional Information
Backend runs on Node.js, and the API communicates with the MongoDB database.

Frontend is built with React and served using Vite for fast development.

Admin Panel allows managing user orders, adding food items, etc.

Common Errors and Troubleshooting
Error: "Could not find module..."
Solution: Ensure that all dependencies are installed by running npm install in both backend and frontend/admin directories.

Error: "Port 4000 is already in use"
Solution: You can either stop the process using the port or modify the port in the .env file.

Thank you for using TeleEats! If you encounter any issues, feel free to reach out or refer to the official documentation.

