import pincho from '../../../Assets/Images/pincho.png'
import cana from '../../../Assets/Images/cana.png'

const DonateAmounts = ({ handleRadioDonation }) => {
  return (
    <form className="checkout__donate-wrapper">
      <div className="checkout__donate-option">
        <input
          className="checkout__donate-opt-input"
          type="radio"
          id="cana"
          name="donateOptions"
          value="2"
          onChange={(e) => handleRadioDonation(e.target.value)}
        />
        <img className="checkout__donate-opt-img" src={cana} alt="Una caña" />
        <label className="checkout__donate-item text" htmlFor="cana">
          Paga una caña
        </label>
        <div className="checkout__donate-amount text-aux">2 €</div>
      </div>
      <div className="checkout__donate-option">
        <input
          className="checkout__donate-opt-input"
          type="radio"
          id="pincho"
          name="donateOptions"
          value="4"
          defaultChecked
          onChange={(e) => handleRadioDonation(e.target.value)}
        />
        <img className="checkout__donate-opt-img" src={pincho} alt="Un pincho de tortilla" />
        <label className="checkout__donate-item text" htmlFor="pincho">
          Paga un pincho
        </label>
        <div className="checkout__donate-amount text-aux">4 €</div>
      </div>
      <div className="checkout__donate-option">
        <input
          className="checkout__donate-opt-input"
          type="radio"
          id="menu"
          name="donateOptions"
          value="10"
          onChange={(e) => handleRadioDonation(e.target.value)}
        />
        <img className="checkout__donate-opt-img" src={cana} alt="Un pincho de tortilla" />
        <div className="checkout__donate-item text" htmlFor="menu">
          Paga una menú del día
        </div>
        <div className="checkout__donate-amount text-aux">10 €</div>
      </div>
    </form>
  )
}

export default DonateAmounts
