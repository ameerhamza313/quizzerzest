import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const storedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    setQuizzes(storedQuizzes);
  }, []);

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h2 className="text-center">Welcome to Quizzerzest</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={8} className="mx-auto">
          {quizzes.map((quiz, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Title>{quiz.quizTitle}</Card.Title>
                <Link to={`/quiz/${quiz.quizTitle}`} className="btn btn-primary">
                  Start Quiz
                </Link>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default QuizList;
