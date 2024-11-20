export default function Offer() {
  return (
    <div className="offer">
      <button type="button" className="offer__btn">
        Exclusive Offer for You!
        <img
          className="offer__btn-img"
          src="/assets/images/btn-subtract.png"
          alt="btn subtract"
        />
      </button>

      <h1 className="offer__heading">
        <span className="offer__heading-highlight">Congratulations!</span> You
        Could Win a Limited Edition Jack Daniel's Sinatra Century!
      </h1>

      <p className="offer__desc offer__desc--center">
        Today, 2 June, 2024, you have been chosen to participate in this survey.{" "}
        <span className="offer__desc-highlight">
          It will only take a minute of your time
        </span>{" "}
        and you can{" "}
        <span className="offer__desc-highlight">receive a fantastic prize</span>
        : Limited Edition Jack Daniel's Sinatra Century!
      </p>

      <img
        className="offer__img"
        src="/assets/images/offer.png"
        alt="offer image with bottle of Jack Denield"
      />

      <p className="offer__desc">
        Every Sunday we choose 10 random users giving them the{" "}
        <span className="offer__desc-highlight">
          chance to win fabulous prizes
        </span>
        . Today's prize is a Limited Edition Jack Daniel's Sinatra Century!{" "}
        <span className="offer__desc-highlight">
          There will be 10 lucky winners. Only for those living in the United
          States!
        </span>
      </p>
    </div>
  );
}
