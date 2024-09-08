import React from "react";
import "./App.css"; // Importing CSS styles

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to Learners Playground</h1>
        <p>Your Gateway to Mastering Software Development</p>
      </header>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Learning Paths</a>
        <a href="#">Code Playground</a>
        <a href="#">Coding Games</a>
        <a href="#">Community</a>
        <a href="#">Mentorship</a>
      </nav>

      <section className="container">
        <div className="content-section">
          <h2>Mission</h2>
          <p>
            Our mission at Learners Playground is to create a community-driven
            space where individuals passionate about software development can
            learn, collaborate, and grow together. We believe learning should be
            fun, engaging, and accessible to everyone, regardless of their
            background or experience level.
          </p>
        </div>

        <div className="content-section">
          <h2>What We Offer</h2>
          <h3>1. Curated Learning Paths</h3>
          <p>
            Structured learning paths from beginner to advanced levels cover
            essential topics like:
          </p>
          <ul>
            <li>Front-End Development (HTML, CSS, JavaScript, React, etc.)</li>
            <li>Back-End Development (Node.js, Python, Ruby, etc.)</li>
            <li>Full Stack Development</li>
            <li>Mobile App Development (React Native, Flutter, etc.)</li>
            <li>Cloud Computing and DevOps</li>
            <li>Data Science and Machine Learning</li>
          </ul>
        </div>

        <div className="content-section">
          <h3>2. Interactive Code Playground</h3>
          <p>
            Experiment with code snippets, test algorithms, and solve coding
            challenges in real-time with our interactive code playground.
          </p>
        </div>

        <div className="content-section code-games">
          <h3>3. Coding Game Websites</h3>
          <p>
            Gamify your learning experience with interactive coding game
            websites like:
          </p>
          <ul>
            <li>
              <a
                href="https://codecombat.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                CodeCombat
              </a>
            </li>
            <li>
              <a
                href="https://www.codingame.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                CodinGame
              </a>
            </li>
            <li>
              <a
                href="https://checkio.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                CheckiO
              </a>
            </li>
            <li>
              <a
                href="https://flexboxfroggy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flexbox Froggy
              </a>
            </li>
            <li>
              <a
                href="https://flukeout.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS Diner
              </a>
            </li>
            <li>
              <a
                href="https://www.codewars.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codewars
              </a>
            </li>
          </ul>
        </div>

        <div className="content-section">
          <h3>4. Tutorials and Articles</h3>
          <p>
            Explore comprehensive tutorials and articles covering topics like
            coding best practices, debugging, software architecture, and more.
          </p>
        </div>

        <div className="content-section">
          <h3>5. Projects and Challenges</h3>
          <p>
            Tackle real-world projects and coding challenges to solidify your
            skills and encourage creative thinking.
          </p>
        </div>

        <div className="content-section">
          <h3>6. Collaborative Community</h3>
          <p>
            Join a vibrant community of learners to ask questions, share
            insights, and collaborate on projects.
          </p>
        </div>

        <div className="content-section">
          <h3>7. Mentorship and Peer Support</h3>
          <p>
            Get one-on-one support from experienced developers and engage with
            fellow learners in our peer-support network.
          </p>
        </div>

        <div className="content-section">
          <h3>8. Career Resources</h3>
          <p>
            Access career resources, resume guides, mock interviews, and
            networking opportunities to help you land a job in software
            development.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>
          &copy; 2024 Learners Playground | Where Learning Meets Fun and
          Curiosity Meets Expertise
        </p>
      </footer>
    </div>
  );
}

export default App;
