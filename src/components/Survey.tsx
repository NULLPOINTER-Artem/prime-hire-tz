import { ReactSVG } from "react-svg";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export type QuestionType = {
  id: number;
  questionTitle: string;
  active: boolean;
  completed: boolean;
  answers: string[];
};

export type checkStepType = {
  id: number;
  title: string;
  checked: boolean;
};

interface SurveyProps {
  questions: QuestionType[];
  isEnd: boolean;
  setAnswer: (index: number, nextIndex: number) => void;
  showNotify: () => void;
}

const statusSteps = {
  isSetFirst: false,
  isSetSecond: false,
  isSetThird: false,
};

export default function Survey({
  questions,
  setAnswer,
  isEnd,
  showNotify,
}: SurveyProps) {
  const [checkSteps, setCheckSteps] = useState<checkStepType[]>([
    {
      id: 1,
      title: "You answered 4 out of 4 questions",
      checked: false,
    },
    {
      id: 2,
      title: "There are no previous polls from your IP address.",
      checked: false,
    },
    {
      id: 3,
      title: "There are still prizes available!",
      checked: false,
    },
  ]);
  const progressBarRef = useRef(null);

  useEffect(() => {
    let ctx: null | gsap.Context = null;

    if (isEnd && progressBarRef.current) {
      ctx = gsap.context(() => {
        const animProgress = gsap.to(progressBarRef.current, {
          width: "100%",
          duration: 8,
          ease: "linear",
          onUpdate: () => {
            const time = Number.parseInt(animProgress.time() + "", 10);

            if (time === 2 && !statusSteps.isSetFirst) {
              statusSteps.isSetFirst = true;
              setCheckSteps((prevCheckSteps) => {
                return prevCheckSteps.map((step, index) => ({
                  ...step,
                  checked: index === 0 || step.checked ? true : false,
                }));
              });
            } else if (time === 4 && !statusSteps.isSetSecond) {
              statusSteps.isSetSecond = true;
              setCheckSteps((prevCheckSteps) => {
                return prevCheckSteps.map((step, index) => ({
                  ...step,
                  checked: index === 1 || step.checked ? true : false,
                }));
              });
            } else if (time === 6 && !statusSteps.isSetThird) {
              statusSteps.isSetThird = true;
              setCheckSteps((prevCheckSteps) => {
                return prevCheckSteps.map((step, index) => ({
                  ...step,
                  checked: index === 2 || step.checked ? true : false,
                }));
              });
            }
          },
          onComplete: () => {
            showNotify();
          },
        });
      });
    }

    return () => {
      if (ctx) ctx.revert();
    };
  }, [isEnd]);

  return (
    <div
      className={classNames("survey", {
        "is-end": isEnd,
      })}
    >
      {!isEnd && (
        <>
          <h2 className="survey__heading">
            This survey aims to improve the service for our users.
          </h2>
        </>
      )}

      <div className="survey__wrapper">
        {!isEnd ? (
          <>
            <div className="survey__alarm">
              <ReactSVG
                className="survey__alarm-icon"
                src="/assets/icons/warn-icon.svg"
              />
              Hurry up! The number of prizes is limited!
            </div>

            <div className="survey__progress">
              {questions.map((question) => (
                <div
                  className={classNames("survey__progress-item", {
                    active: question.completed || question.active,
                  })}
                  key={question.id}
                >
                  &nbsp;
                </div>
              ))}
            </div>

            <div className="survey__question">
              {questions.map((question, index) => (
                <div
                  className={classNames("survey__question-item", {
                    active: question.active,
                  })}
                  key={question.id + index}
                >
                  <div
                    className={classNames("survey__question-title", {
                      "survey__question-title--center": index === 0,
                    })}
                  >
                    Question {index + 1} of {questions.length}:{" "}
                    {question.questionTitle}
                  </div>
                  <div className="survey__question-list">
                    {question.answers.map((answer, indexAnswer) => (
                      <div
                        className="survey__question-answer"
                        key={answer + indexAnswer}
                        onClick={() => setAnswer(index, index + 1)}
                      >
                        {answer}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="survey__complete">
              <h2 className="survey__complete-heading">
                We are checking your answers...
              </h2>

              <div className="survey__complete-progress">
                <div ref={progressBarRef} className="survey__complete-subtract">
                  &nbsp;
                </div>
              </div>

              <div className="survey__complete-list">
                {checkSteps.map((step) => (
                  <div
                    className={classNames("survey__complete-item", {
                      checked: step.checked,
                    })}
                    key={step.id + step.title + step.checked}
                  >
                    <ReactSVG
                      className="survey__complete-icon"
                      src="/assets/icons/check-icon.svg"
                    />
                    {step.title}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="survey__notion-list">
          <div className="survey__notion-item">Exclusive Prizes</div>
          <div className="survey__notion-item">Quick and Easy</div>
          <div className="survey__notion-item">only 6 left</div>
        </div>
      </div>
    </div>
  );
}
