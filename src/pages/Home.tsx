import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Offer from "../components/Offer";
import PushNotify from "../components/PushNotify";
import Survey, { QuestionType } from "../components/Survey";

export default function Home() {
  const navigate = useNavigate();

  const [questionsList, setQuestionsList] = useState<QuestionType[]>([
    {
      id: 1,
      questionTitle: "Are you a man or a woman?",
      active: true,
      answers: ["man", "woman"],
      completed: false,
    },
    {
      id: 2,
      questionTitle: "How old are you?",
      active: false,
      answers: ["18-29", "30-39", "40-49", "50+"],
      completed: false,
    },
    {
      id: 3,
      questionTitle: "How many members are in your family?",
      active: false,
      answers: ["Alone", "1", "2", "3+"],
      completed: false,
    },
    {
      id: 4,
      questionTitle: "Have you bought anything at Jack Daniel's before?",
      active: false,
      answers: ["no", "yes"],
      completed: false,
    },
  ]);
  const [isEndSurvey, setIsEndSurvey] = useState<boolean>(false);
  const handleAnswer = (index: number, nextIndex: number) => {
    if (index === questionsList.length - 1) {
      setIsEndSurvey(true);
      return;
    }

    setQuestionsList(
      questionsList.map((question, indexItem) => ({
        ...question,
        active: indexItem === nextIndex ? true : false,
        completed: indexItem === index || question.completed ? true : false,
      }))
    );
  };

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const showNotify = () => {
    setIsChecked(true);

    setTimeout(() => {
      setIsChecked(false);
      navigate("/game-win");
    }, 2000);
  };

  return (
    <>
      <Header />
      {!isEndSurvey && <Offer />}
      <Survey
        questions={questionsList}
        setAnswer={handleAnswer}
        isEnd={isEndSurvey}
        showNotify={showNotify}
      />

      {isChecked && (
        <PushNotify>We have successfully validated your answers</PushNotify>
      )}
    </>
  );
}
