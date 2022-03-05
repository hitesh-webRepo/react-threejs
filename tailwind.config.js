
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        header:"#111111",
        secondaryButton  : "#FF622D",
        primaryButton : "#421983",
        section:"#1F1F1F",
        navyBlue:"#421983"
      },
      borderRadius:{
        max:"50px"
      },
      borderColor:{
        thin:"rgba(255,255,255,0.20)"
      }
    },
  },
  plugins: [],
}