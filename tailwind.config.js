module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'start': 'hsl(214, 47%, 23%)',
        'end': 'hsl(237, 49%, 15%)',
        'score': 'hsl(229, 64%, 46%)',
        'dark-text': 'hsl(229, 25%, 31%)',
        'header-outline': 'hsl(217, 16%, 45%)',
        'scissors-bg-first': 'hsl(39, 89%, 49%)',
        'scissors-bg-last': 'hsl(40, 84%, 53%)',
        'spock-bg-first': 'hsl(189, 59%, 53%)',
        'spock-bg-last': 'hsl(189, 58%, 57%)',
        'paper-bg-first': 'hsl(230, 89%, 62%)',
        'paper-bg-last': 'hsl(230, 89%, 65%)',
        'rock-bg-first': 'hsl(349, 71%, 52%)',
        'rock-bg-last': 'hsl(349, 70%, 56%)',
        'lizard-bg-first': 'hsl(261, 73%, 60%)',
        'lizard-bg-last': 'hsl(261, 72%, 63%)',
      },
    },
  },
  plugins: [],
}
