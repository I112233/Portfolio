import './Portfolio.module.css';
const Portfolio = () => {
  return (
    <article className="portfolio active" data-page="portfolio" id="PortfolioPage">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* <div className="filterf-select-box">
                    <button className="filter-select" data-select>
                        <div className="select-value" data-selecct-value>
                            Select category
                        </div>

                        <div className="select-icon">
                            <ion-icon name="chevron-down"></ion-icon>
                        </div>
                    </button>
                </div> */}

        <h3 style={{ marginTop: "20px" }} className="h3 form-title">Games</h3>

        <ul className="project-list">
          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          // onClick={calculatorFunction()}
          >
            <a href="https://i112233.github.io/tic-tac-toe-game/">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="src/assets/images/Calculator-Preview.png"
                  alt="calculator"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Tic-tac-toe game</h3>
              <p
                style={{ color: "var(--light-gray)", fontSize: "small" }}
                className="description-text"
              >
                A simple paper-and-pencil game
              </p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          // onClick={MemoryFunction()}
          >
            <a href="https://i112233.github.io/Memory-Game/">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="src/assets/images/Memory Card Game Preview.png"
                  alt="Memory Card Game"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Memory Card Game</h3>
              <p
                style={{ color: "var(--light-gray)", fontSize: "small" }}
                className="description-text"
              >
                A chanllenging memory-based game
              </p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          // onClick={PuzzleFunction()}
          >
            <a href="https://i112233.github.io/rock-paper-scissors/">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="src/assets/images/Puzzle Game Preview.png"
                  alt="Puzzle Game"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Rock paper scissors game</h3>
              <p
                style={{ color: "var(--light-gray)", fontSize: "small" }}
                className="description-text"
              >
                A simple luck-based hand game
              </p>
            </a>
          </li>
        </ul>

        <h3 style={{ marginTop: "30px" }} className="h3 form-title">Entertainment</h3>

        <ul className="project-list">

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          // onClick={SnakeFunction()}
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="src/assets/images/Snake Game Preview.png"
                  alt="Snake Game"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Trivia Quiz</h3>
              <p
                style={{ color: "var(--light-gray)", fontSize: "small" }}
                className="description-text"
              >
                A great way to test your knowledge
              </p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          // onClick={TetrisFunction()}
          >
            <a href="https://i112233.github.io/YouTube/">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="src/assets/images/Tetris Game Preview.png"
                  alt="Tetris Game"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">YouTube (Replica)</h3>
              <p
                style={{ color: "var(--light-gray)", fontSize: "small" }}
                className="description-text"
              >
                A copy of Google famous video website
              </p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          // onClick={TicTacToeFunction()}
          >
            <a href="https://i112233.github.io/place-picker/">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="src/assets/images/TicTacToe Game Preview.png"
                  alt="Tic-Tac-Toe Game"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Place Picker</h3>
              <p
                style={{ color: "var(--light-gray)", fontSize: "small" }}
                className="description-text"
              >
                Choose your favorite must-visit places
              </p>
            </a>
          </li>
        </ul>

        <h3 style={{ marginTop: "30px" }} className="h3 form-title">Utility</h3>

        <ul className="project-list">
          <li
            className="project-item active"
            data-filter-item
            data-category="web development"
          // onClick={TicTacToeFunction()}
          >
            <a href="https://i112233.github.io/management-app/">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="src/assets/images/TicTacToe Game Preview.png"
                  alt="Tic-Tac-Toe Game"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Task Management</h3>
              <p
                style={{ color: "var(--light-gray)", fontSize: "small" }}
                className="description-text"
              >
                Organize all your tasks in one place
              </p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;

// const projects = [
//   {
//     id: 1,
//     title: "Calculator",
//     description: "A simple calculator",
//     imgSrc: "../../assets/images/Calculator-Preview.png",
//     alt: "calculator",
//     onClick: () => alert("Calculator Function executed!"),
//   },
//   {
//     id: 2,
//     title: "Memory Card Game",
//     description: "A challenging memory-based game",
//     imgSrc: "/images/Memory Card Game Preview.png",
//     alt: "Memory Card Game",
//     onClick: () => alert("Memory Function executed!"),
//   },
//   {
//     id: 3,
//     title: "Puzzle Game",
//     description: "A fun puzzle game",
//     imgSrc: "/images/Puzzle Game Preview.png",
//     alt: "Puzzle Game",
//     onClick: () => alert("Puzzle Function executed!"),
//   },
//   {
//     id: 4,
//     title: "Snake Game",
//     description: "A simple snake game",
//     imgSrc: "/images/Snake Game Preview.png",
//     alt: "Snake Game",
//     onClick: () => alert("Snake Function executed!"),
//   },
//   {
//     id: 5,
//     title: "Tetris Game",
//     description: "A simple Tetris game",
//     imgSrc: "/images/Tetris Game Preview.png",
//     alt: "Tetris Game",
//     onClick: () => alert("Tetris Function executed!"),
//   },
//   {
//     id: 6,
//     title: "Tic-Tac-Toe",
//     description: "A simple tic-tac-toe game",
//     imgSrc: "/images/TicTacToe Game Preview.png",
//     alt: "Tic-Tac-Toe Game",
//     onClick: () => alert("TicTacToe Function executed!"),
//   },
// ];

// const Portfolio = () => {
//   return (
//     <article
//       className="portfolio active"
//       data-page="portfolio"
//       id="PortfolioPage"
//     >
//       <header>
//         <h2 className="h2 article-title">Portfolio</h2>
//       </header>

//       <section className="projects">
//         {/* Dropdown (optional functionality to be added later) */}
//         <div className="filter-select-box">
//           <button className="filter-select" data-select>
//             <div className="select-value" data-selecct-value>
//               Select category
//             </div>
//             <div className="select-icon">
//               <ion-icon name="chevron-down"></ion-icon>
//             </div>
//           </button>
//         </div>

//         {/* Render projects dynamically */}
//         <ul className="project-list">
//           {projects.map((project) => (
//             <li
//               key={project.id}
//               className="project-item active"
//               data-filter-item
//               data-category="web development"
//               onClick={project.onClick}
//             >
//               <a href="#">
//                 <figure className="project-img">
//                   <div className="project-item-icon-box">
//                     <ion-icon name="eye-outline"></ion-icon>
//                   </div>
//                   <img src="" alt={project.alt} loading="lazy" />
//                 </figure>
//                 <h3 className="project-title">{project.title}</h3>
//                 <p
//                   style={{ color: "var(--light-gray)", fontSize: "small" }}
//                   className="description-text"
//                 >
//                   {project.description}
//                 </p>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </article>
//   );
// };

// export default Portfolio;


