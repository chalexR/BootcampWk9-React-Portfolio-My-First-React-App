# My First React Portfolio App

This is my **first React application**, built as part of a learning assignment. It showcases personal and development projects pulled directly from my GitHub, with plans to expand the portfolio functionality in the future.

Creating this project has been a **brilliant learning curve**—I’ve really enjoyed working with React, exploring component-based architecture, state management, hooks, API integration, and animation with Framer Motion.

## 🚀 Features

- Built using **React** and **Vite**
- Live fetch of personal GitHub repositories via the **GitHub API**
- Smooth **page transitions** using **Framer Motion**
- Mobile-first, **responsive design**
- Toggleable **project list drawer** (for better UX on small screens)
- Modular components with **React Router** for page navigation

## 🛠️ Technologies Used

- React
- React Router DOM
- Axios
- Framer Motion
- Vite (build tool)
- CSS Variables for theming

## 📦 Planned Features (Post-Submission)

Although I have run out of time for this assignment, in a full version of the app I would like to implement the following:

- 🔄 **Load additional design projects from a "database"**  
  - In deployable models: A **JSON-based storage file**  
  - In production: A **SQL database**

- 🔍 **Filterable project types**  
  Filter and view projects based on categories like:
  - Design
  - HTML
  - Front-end
  - JavaScript
  - React

- 🎬 **Extended animations**  
  Add fade-in transitions for:
  - Home page
  - Contact page

## 🧠 Lessons Learned

This app has helped me understand:
- The importance of clean, reusable components
- Handling state with `useState` and side effects with `useEffect`
- Managing conditional rendering and props between components
- How to integrate and securely use APIs (e.g., GitHub API with auth tokens)
- The power of animations in improving user experience

## 📁 Setup & Installation

Clone the repository and run:

```bash
npm install
npm run dev
```

You will need to add a .env file with your GitHub token:
```
VITE_REACT_APP_GITHUB_TOKEN=your_personal_access_token
```

## 📄 License

This project is for educational purposes only and not yet licensed.