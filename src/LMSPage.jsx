import React, { useState } from "react";

const LMSPage = () => {
  const course = {
    title: "React Basics Course",
    description: "Learn the fundamentals of React step by step.",
    duration: "4 Hours",
  };

  const lessonsData = [
    {
      id: 1,
      title: "Introduction",
      description: "Overview of React and its uses",
      duration: "30 mins",
    },
    {
      id: 2,
      title: "Basics",
      description: "Components, JSX, and props",
      duration: "1 Hour",
    },
    {
      id: 3,
      title: "Advanced",
      description: "State, hooks, and lifecycle",
      duration: "1.5 Hours",
    },
    {
      id: 4,
      title: "Summary",
      description: "Course recap and next steps",
      duration: "1 Hour",
    },
  ];

  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);

  const markCompleted = (id) => {
    if (!completedLessons.includes(id)) {
      setCompletedLessons([...completedLessons, id]);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p><strong>Duration:</strong> {course.duration}</p>

      <h2>Lessons</h2>
      <ul>
        {lessonsData.map((lesson) => (
          <li
            key={lesson.id}
            onClick={() => setSelectedLesson(lesson)}
            style={{
              cursor: "pointer",
              padding: "8px",
              marginBottom: "5px",
              backgroundColor:
                selectedLesson?.id === lesson.id ? "#dbeafe" : "#f1f5f9",
            }}
          >
            {lesson.title}
          </li>
        ))}
      </ul>

      {selectedLesson && (
        <div style={{ marginTop: "20px" }}>
          <h3>{selectedLesson.title}</h3>
          <p>{selectedLesson.description}</p>
          <p><strong>Duration:</strong> {selectedLesson.duration}</p>

          <button onClick={() => markCompleted(selectedLesson.id)}>
            Mark as Completed
          </button>
        </div>
      )}

      <hr />

      <p><strong>Total Lessons:</strong> {lessonsData.length}</p>
      <p><strong>Completed Lessons:</strong> {completedLessons.length}</p>
    </div>
  );
};

export default LMSPage;
