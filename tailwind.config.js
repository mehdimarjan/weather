module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme)=>(
        {
          "hero": "url('./public/bg.jpg')"
        }
      ),
    },
  },
  plugins: [],
  theme: {
    fontFamily: {
      Vazir: "Vazirmatn",
    },
  },
};
