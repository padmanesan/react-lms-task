React Course Page Project
Overview

This is a simple React-based Learning Management System (LMS) page designed as part of the React course exercises. The project demonstrates the use of functional components, state management with useState, conditional rendering, and event handling in React.

The page shows:

Course title, description, and total duration

List of lessons (Introduction, Basics, Advanced, Summary)

Clicking a lesson highlights it and displays its description and duration

Option to mark lessons as completed

Counts of total and completed lessons

Features

Dynamic Lesson List: Rendered from static data using map().

Lesson Selection: Highlights the selected lesson and displays details.

Mark as Completed: Track lessons that have been completed.

Lesson Statistics: Shows total lessons and completed lessons.

React Concepts Used:

Functional Components

useState for state management

Event handling (click events)

Conditional rendering for dynamic UI

Project Structure
react-lms/
│
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── Course.js
│   ├── Lesson.js
│   ├── index.js
│   └── App.css
├── package.json
└── README.md

How to Run

Clone the repository:

git clone <your-repo-link>


Navigate to the project folder:

cd react-lms


Install dependencies:

npm install


Start the development server:

npm start


Open http://localhost:3000
 in your browser to view the app.





 
