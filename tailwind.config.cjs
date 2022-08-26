/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily:{
        Monserrat:['Montserrat','sans-serif'],
      },
      animation:{
        Derecha : ' fromDerecha 300ms ease-in',
        eDerecha : 'exitDerecha 300ms ease-in',
        Abajo : 'fromAbajo 300ms linear',
        eAbajo : ' exitAbajo 300ms linear',
      },
      keyframes:{
        'fromDerecha':{
          '0%' : { transform : 'translateX(200%)' },
          '100%' : { transform : 'translateX(0%)' },
        },
        'exitDerecha':{
          '0%' : { transform : 'translateX(0%)' },
          '100%' : { transform : 'translateX(200%)' },
        },
        'fromAbajo':{
          '0%' : { transform : 'translateY(200%)' },
          '100%' : { transform : 'translateY(0%)' },
        },
        'exitAbajo':{
          '0%' : { transform : 'translateY(0%)' },
          '100%' : { transform : 'translateY(200%)' },
        }
      }
    },
  },
  plugins: [],
};
