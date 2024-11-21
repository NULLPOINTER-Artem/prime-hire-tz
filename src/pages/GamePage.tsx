import { useState } from "react";
import Box from "../components/Box";
import Header from "../components/Header";
import { ReactSVG } from "react-svg";

export default function GamePage() {
  const [hasWin, setHasWin] = useState<boolean>(false);
  const handleWin = () => {
    setHasWin(true);
  };

  return (
    <>
      <Header />

      <div className="game-wrapper">
        <div className="tab-list">
          <div className="tab-item active">1st Try</div>
          <div className="tab-item">2nd Try</div>
          <div className="tab-item">3rd Try</div>
        </div>

        <div className="box-list">
          <Box isWinner={false} handleWin={handleWin} />
          <Box isWinner={false} handleWin={handleWin} />
          <Box isWinner={false} handleWin={handleWin} />
          <Box isWinner={false} handleWin={handleWin} />
          <Box isWinner={true} handleWin={handleWin} />
          <Box isWinner={false} handleWin={handleWin} />
          <Box isWinner={false} handleWin={handleWin} />
          <Box isWinner={false} handleWin={handleWin} />
          <Box isWinner={false} handleWin={handleWin} />
        </div>
      </div>

      {hasWin && <div className="win-modal-backdrop">&nbsp;</div>}

      {hasWin && (
        <div className="win-modal">
          <div className="win-modal__wrapper">
            <img
              className="win-modal__img"
              src="/assets/images/offer.png"
              alt="offer image with bottle of Jack Denield"
            />

            <h2 className="win-modal__heading">You did it!</h2>

            <p className="win-modal__desc">
              You won the Limited Edition Jack Daniel's Sinatra Century!
            </p>

            <h3 className="win-modal__list-heading">How to get prize?</h3>

            <ol className="win-modal__list">
              <li className="win-modal__item">
                1. You will be directed to the website of our certified
                distributors.
              </li>
              <li className="win-modal__item">
                2. Enter your address to get your Limited Edition Jack Daniel's
                Sinatra Century.
              </li>
              <li className="win-modal__item">
                3. The Limited Edition Jack Daniel's Sinatra Century will be
                delivered within 5-7 days
              </li>
            </ol>

            <button type="button" className="win-modal__btn">
              Apply now
              <ReactSVG
                className="win-modal__icon"
                src="/assets/icons/arrow-icon.svg"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
