import 'Styles/TextHeader.css'

const TextHeader = ({ text, navigate }) => {
  return (
    <div className="text-header">
      <div className="text-header__arrow">
        <svg
          onClick={navigate}
          width="11"
          height="20"
          viewBox="0 0 11 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.5303 19.5303C10.2374 19.8232 9.76256 19.8232 9.46967 19.5303L0.469671 10.5303C0.176778 10.2374 0.176778 9.76256 0.469671 9.46967L9.46967 0.469669C9.76256 0.176777 10.2374 0.176777 10.5303 0.469669C10.8232 0.762564 10.8232 1.23744 10.5303 1.53033L2.06066 10L10.5303 18.4697C10.8232 18.7626 10.8232 19.2374 10.5303 19.5303Z"
            fill="#29EFCB"
          />
        </svg>
      </div>
      <h2 className="text-header__text">{text}</h2>
    </div>
  )
}

export default TextHeader
