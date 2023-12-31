import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Retrieve scores data from local storage
    const storedScores = JSON.parse(localStorage.getItem('scores')) || {};
    const storedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || [];

    // Filter out leaderboard data for quizzes that do not exist anymore
    const filteredLeaderboardData = Object.keys(storedScores)
      .filter((title) => storedQuizzes.some((quiz) => quiz.quizTitle === title))
      .map((quizTitle) => ({
        quizTitle,
        scores: storedScores[quizTitle],
      }));

    setLeaderboardData(filteredLeaderboardData);
  }, []);

  return (
    <Container className="mt-5">
      <h1>Leaderboard</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Quiz Title</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((score, index) => (
            score.scores.map((entry, entryIndex) => (
              <tr key={`${score.quizTitle}-${entryIndex}`}>
                {entryIndex === 0 && <td rowSpan={score.scores.length}>{index + 1}</td>}
                {entryIndex === 0 && <td rowSpan={score.scores.length}>{score.quizTitle}</td>}
                <td>{entry.username}</td>
                <td>{`${entry.score}/${entry.totalQuestions}`}</td>
              </tr>
            ))
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Leaderboard;
