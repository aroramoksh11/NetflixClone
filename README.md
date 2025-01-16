Netflix Clone
React | Firebase | Redux | Stripe | TMDB API

📋 Table of Contents
Introduction
Features
Prerequisites
Installation
1. Clone Repository
2. Install Dependencies
3. Firebase Configuration
4. Add API Keys
5. Start the Application
Project Structure
Contributing
License
🎬 Introduction
The Netflix Clone project is a replica of Netflix, built to showcase a real-world full-stack web application. It integrates user authentication, payment handling, and real-time database interactions using React, Redux, Firebase, Stripe and the TMDB API.

⭐ Features
Dynamic Movie Content: Fetch real-time movie and TV show data from the TMDB API.
Stripe Payment Integration: Subscription payments handled via Stripe Checkout & Webhooks.
State Management: Redux for seamless data flow and management.
Real-Time Database: Firebase Firestore for secure and scalable data storage.
🔧 Prerequisites
Before you begin, ensure you have the following:

Node.js (v14 or later)
Yarn
Firebase Account
Stripe Account
TMDB API Key

🚀 Installation
Follow these steps to set up and run the project on your local machine:

1. Clone Repository
bash
Copy
Edit
git clone https://github.com/aroramoksh11/NetflixClone.git  
cd NetflixClone  
2. Install Dependencies
bash
Copy
Edit
yarn install  
3. Firebase Configuration
Create a project in Firebase Console.
Set up Authentication (enable Google Sign-In).
Create a Firestore database for real-time data storage.
Enable the Stripe extension in Firebase.
Replace the Firebase config in firebase.js with your Firebase credentials.
4. Add API Keys
TMDB API Key:

Sign up at TMDB to get your API key.
Replace the placeholder in Requests.js with your TMDB API key.
Stripe Publishable Key:

Retrieve your publishable key from your Stripe dashboard.
Add it in PlansScreen.js.
5. Start the Application
bash
Copy
Edit
yarn start  
The development server will start at http://localhost:3000.

🗂️ Project Structure
graphql
Copy
Edit
NetflixClone/  
│  
├── public/             # Static assets (HTML, images, etc.)  
├── src/  
│   ├── components/     # Reusable React components  
│   ├── pages/          # Application pages (e.g., Home, Login)  
│   ├── redux/          # Redux store and slices  
│   ├── requests/       # TMDB API configurations  
│   ├── firebase.js     # Firebase configuration  
│   ├── App.js          # Root React component  
│   └── index.js        # Application entry point  
│  
├── .firebaserc         # Firebase project configuration  
├── firebase.json       # Firebase deployment configuration  
├── package.json        # Project dependencies and scripts  
├── README.md           # Project documentation  
└── yarn.lock           # Dependency lockfile  
🌟 Contributing
Contributions are always welcome! To contribute:

Fork the Repository:

Click the "Fork" button at the top of this page.
Create a Feature Branch:

bash
Copy
Edit
git checkout -b feature/YourFeature  
Make Your Changes:

Add or improve features.
Fix bugs or optimize code.
Commit Your Changes:

bash
Copy
Edit
git commit -m 'Add YourFeature'  
Push the Branch:

bash
Copy
Edit
git push origin feature/YourFeature  
Open a Pull Request:

Navigate to the original repository and open a pull request.
📜 License
This project is licensed under the MIT License.

✉️ Contact
Feel free to reach out if you have any questions or need assistance!

GitHub: @aroramoksh11
LinkedIn: Moksh Arora
