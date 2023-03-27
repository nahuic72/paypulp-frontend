import 'Styles/TextHeader.css'
import ArrowLeft from './Icons/ArrowLeft'

const TextHeader = ({ text, navigate }) => {
  return (
    <div className="text-header">
      <div className="text-header__arrow">
        <ArrowLeft navigate={navigate} />
      </div>
      <h2 className="text-header__text">{text}</h2>
    </div>
  )
}

export default TextHeader
