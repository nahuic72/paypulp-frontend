export const signupSchema = (watch) => {
  const requiredMsg = 'Campo obligatorio'
  return {
    shortText: {
      required: requiredMsg,
      minLength: {
        value: 2,
        message: 'Este campo debe tener al menos 2 caracteres',
      },
      maxLength: {
        value: 50,
        message: 'Este campo debe tener menos de 50 caracteres',
      },
    },
    longText: {
      required: requiredMsg,
      minLength: {
        value: 5,
        message: 'Este campo debe tener al menos 5 caracteres',
      },
      maxLength: {
        value: 100,
        message: 'Este campo debe tener menos de 100 caracteres',
      },
    },
    email: {
      required: requiredMsg,
      maxLength: {
        value: 80,
        message: 'Este campo debe tener menos de 80 caracteres',
      },
      pattern: {
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: 'No es un formato de correo electrónico válido',
      },
    },
    password: {
      required: requiredMsg,
      minLength: {
        value: 8,
        message: 'La contraseña debe tener más de 8 caracteres',
      },
      maxLength: {
        value: 20,
        message: 'La contraseña debe tener menos de 20 caracteres',
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message: 'La contraseña necesita al menos una letra mayúscula y una minúscula y un número',
      },
    },
    confirmPassword: {
      required: 'Por favor, confirme su contraseña',
      validate: (value) => value === watch('password') || 'Las contraseñas no coinciden',
    },

    date: {
      required: requiredMsg,
      minLength: {
        value: 3,
        message: 'Este campo debe tener al menos 3 caracteres',
      },
      maxLength: {
        value: 50,
        message: 'Este campo debe tener menos de 50 caracteres',
      },
    },
    phone: {
      required: requiredMsg,
      maxLength: {
        value: 20,
        message: 'Este campo debe tener menos de 20 caracteres',
      },
      pattern: { value: /^\d+$/, message: 'No es un formato de teléfono válido' },
    },
    cardNumber: {
      required: requiredMsg,
      maxLength: {
        value: 20,
        message: 'Este campo debe tener menos de 30 caracteres',
      },
      pattern: { value: /^\d+$/, message: 'No es un formato de número de tarjeta válido' },
    },
    url: {
      required: requiredMsg,
      maxLength: {
        value: 50,
        message: 'Este campo debe tener menos de 50 caracteres',
      },
      pattern: {
        value:
          /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
        message: 'No es un formato de URL válido',
      },
    },
  }
}
