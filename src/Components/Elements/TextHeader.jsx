import 'Styles/TextHeader.css'

const TextHeader = ({ text }) => {
  return (
    <div className="text-header">
      <div className="text-header__arrow">J</div>
      <h2 className="text-header__text">{text}</h2>
    </div>
  )
}

export default TextHeader
