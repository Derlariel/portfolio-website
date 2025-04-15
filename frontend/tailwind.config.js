// tailwind.config.js
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
      extend: {
        animation:{
          'gradient-x' : 'gradient-x 8s ease infinite',
        },
        keyframe:{
          gradientX:{
            '0% , 100%':{
              backgroundPosition:'0% 50%',
            },
            '50%':{
              backgroundPosition:'100% 50%',
            }
          }
        }
      },
    },
    plugins: [require('daisyui')],
    daisyui: {
      themes: ['light', 'synthwave'],
    },
    darkMode: 'class', 
  };
  