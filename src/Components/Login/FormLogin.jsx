import TextInput from 'Components/Elements/TextInput'
import useLogin from 'Hooks/useLogin'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const FormLogin = ({ setBuyerToken }) => {
  const navigate = useNavigate()
  const { onSubmit } = useLogin(setBuyerToken)
  const { register, handleSubmit } = useForm({
    mode: 'onTouched',
    defaultValues: {
      email: '1@ratking.com',
      password: '1234Q@we',
    },
  })

  const goToRegister = () => navigate('/signup')

  return (
    <>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="login__call">Inicia sesión para continuar</h2>
        <div className="login-form__inputs">
          <TextInput name="email" label="Email" register={register} />
          <TextInput type="password" name="password" label="Contraseña" register={register} />
        </div>
        <div className="login__forgot-pass">
          <button className="btn-text-only">Olvide mi contraseña</button>
        </div>
        <div className="login-form__buttons">
          <button className="btn btn-solid btn-long" onClick={handleSubmit}>
            Iniciar Sesión
          </button>
          <button className="login-form__register-btn btn btn-text-only" onClick={goToRegister}>
            Registrarse
          </button>
        </div>
        <div className="login__social">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
              fill="url(#paint0_linear_200_1312)"
            />
            <path
              d="M21 32.5V49.5C21 49.7761 21.2239 50 21.5 50H28.5C28.7761 50 29 49.7761 29 49.5V32.5C29 32.2239 29.2239 32 29.5 32H34.5C34.7761 32 35 31.7761 35 31.5V25.5C35 25.2239 34.7761 25 34.5 25H29.5C29.2239 25 29 24.7765 29 24.5003V20C29 18 31.5 17 32.5 17H35.5C35.7761 17 36 16.7761 36 16.5V10.5C36 10.2239 35.7762 10 35.5001 10H29C24.2 10 21 15 21 18V24.5C21 24.7761 20.7761 25 20.5 25H15.5C15.2239 25 15 25.2239 15 25.5V31.5C15 31.7761 15.2239 32 15.5 32H20.5C20.7761 32 21 32.2239 21 32.5Z"
              fill="#363B3E"
            />
            <defs>
              <linearGradient
                id="paint0_linear_200_1312"
                x1="25"
                y1="0"
                x2="25"
                y2="50"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_62_2090)">
              <path
                d="M52 26.2023C52 24.395 51.8568 22.578 51.5513 20.8H27.04V31.038H41.0765C40.494 34.3399 38.1005 37.6639 35.36 39.52L35.882 45.76L43.68 45.76C48.5976 41.1295 52 34.2911 52 26.2023Z"
                fill="white"
              />
              <path
                d="M26.4067 52C33.4348 52 39.3618 49.7215 43.6801 45.7884L35.3601 39.52C33.0238 41.0895 29.9303 41.8175 26.4163 41.8175C19.618 41.8175 13.5083 37.2887 11.4401 31.2H3.12012V37.8276C7.5438 46.5164 16.5539 52 26.4067 52Z"
                fill="white"
              />
              <path
                d="M11.4399 31.2C10.2478 28.0357 10.7678 23.9642 11.9599 20.8L12.4799 14.56L3.11988 14.04C-0.916385 21.2391 -1.00916 30.2408 3.0271 37.44L11.4399 31.2Z"
                fill="white"
              />
              <path
                d="M26.9083 10.1788C30.7035 10.1221 34.3715 11.5017 37.12 14.0342L44.7201 6.69195C39.9077 2.3263 33.5205 -0.0738627 26.9083 0.00173302C16.8433 0.00173302 7.63909 5.34649 3.12012 14.04L11.9624 20.8C14.0654 14.7051 19.9636 10.1788 26.9083 10.1788Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_62_2090">
                <rect width="52" height="52" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="52" height="52" rx="26" fill="white" />
            <path
              d="M35.2808 32.424C34.933 33.2275 34.5213 33.9672 34.0442 34.6473C33.394 35.5743 32.8616 36.216 32.4513 36.5724C31.8153 37.1573 31.1338 37.4569 30.4041 37.4739C29.8802 37.4739 29.2485 37.3248 28.513 37.0224C27.7752 36.7214 27.0972 36.5724 26.4772 36.5724C25.827 36.5724 25.1296 36.7214 24.3837 37.0224C23.6366 37.3248 23.0348 37.4824 22.5747 37.498C21.8749 37.5278 21.1774 37.2198 20.4812 36.5724C20.0368 36.1848 19.481 35.5204 18.8151 34.5791C18.1007 33.574 17.5134 32.4084 17.0533 31.0795C16.5605 29.6442 16.3135 28.2543 16.3135 26.9087C16.3135 25.3673 16.6465 24.0379 17.3137 22.9239C17.838 22.029 18.5355 21.3231 19.4084 20.8049C20.2814 20.2868 21.2247 20.0227 22.2405 20.0058C22.7963 20.0058 23.5252 20.1777 24.431 20.5156C25.3342 20.8546 25.9141 21.0266 26.1684 21.0266C26.3585 21.0266 27.0028 20.8255 28.0949 20.4247C29.1278 20.0531 29.9995 19.8992 30.7136 19.9598C32.6487 20.116 34.1024 20.8788 35.0693 22.253C33.3386 23.3016 32.4826 24.7703 32.4996 26.6544C32.5152 28.122 33.0476 29.3432 34.0939 30.3129C34.5681 30.7629 35.0977 31.1108 35.6868 31.3578C35.5591 31.7283 35.4242 32.0833 35.2808 32.424ZM30.8428 14.9601C30.8428 16.1104 30.4226 17.1844 29.5849 18.1785C28.5741 19.3602 27.3514 20.0431 26.0256 19.9354C26.0087 19.7974 25.9989 19.6521 25.9989 19.4995C25.9989 18.3953 26.4796 17.2135 27.3333 16.2473C27.7595 15.758 28.3015 15.3512 28.9588 15.0267C29.6147 14.7071 30.2352 14.5303 30.8187 14.5C30.8357 14.6538 30.8428 14.8076 30.8428 14.9601V14.9601Z"
              fill="#363B3E"
            />
          </svg>
        </div>
      </form>
    </>
  )
}

export default FormLogin
