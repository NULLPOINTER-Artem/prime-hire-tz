import { ReactSVG } from "react-svg";

export default function Header() {
  return (
    <header className="the-header">
      <div className="the-header__wrapper">
        <img
          className="the-header__logo"
          src="/assets/images/logo-jd.png"
          alt="Jack Denield logo"
        />

        <button type="button" className="the-header__btn">
          <ReactSVG
            className="the-header__icon"
            src="/assets/icons/cart-icon.svg"
          />
        </button>
      </div>

      <div className="the-header__addition">
        <div className="the-header__text">Loyalty program</div>
        <div className="the-header__text">2 June 2024</div>
      </div>
    </header>
  );
}
