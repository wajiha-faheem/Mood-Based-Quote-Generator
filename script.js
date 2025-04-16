const quotes = {
    happy: [
      "Smile, it’s sunnah! 😊",
      "Every moment is a fresh beginning.",
      "Joy is a choice. Choose it daily!",
      "Smile, it’s sunnah! 😊",
"Every moment is a fresh beginning.",
"Gratitude turns what we have into enough.",
"Allah loves those who smile at His blessings.",
"Spread happiness like sunshine.",
"Be so happy that others get happy looking at you!",
        "Your happiness is a reflection of your faith.",
        "Happiness is a form of worship.",
"Gratitude turns what we have into enough.",
"Be so happy that others get happy looking at you!"

    ],
    sad: [
      "Indeed, with hardship comes ease. (Qur'an 94:6)",
      "Tears are prayers too.",
      "Your pain has a purpose.",
      "Indeed, with hardship comes ease. (Qur'an 94:6)",
"Allah never burdens a soul beyond what it can bear. (Qur'an 2:286)",
"Every tear you shed is seen by your Lord.",
"Sometimes crying is healing, not weakness.",
"This pain has a divine purpose — trust Him.",
"Your heart is heavy now, but it will fly again.",
    "This too shall pass. Hold on tight.",
    "Your heart is heavy now, but it will fly again.",

"Your pain has a purpose.",
"Sometimes crying is healing, not weakness."
    ],
    angry: [
      "Speak when you're calm, not when you're angry.",
      "Even the Prophet ﷺ controlled anger — you can too.",
      "Silence is the best reply to anger.",
      "Strong is the one who controls anger. - Prophet Muhammad ﷺ",
"Anger is one letter away from danger.",
"Silence is strength when emotions roar.",
"Wudu cools the fire of anger. Try it.",
"Pause. Breathe. Respond with grace.",
"The best revenge is self-control.",
"Anger is a choice; choose peace instead.",
"Anger is one letter away from danger.",
"Silence is strength when emotions roar."

    ],
    chill: [
      "Relax. Allah is in control.",
      "Slow down and breathe.",
      "Peace starts from within.",
      "Peace begins with Bismillah.",
"Let go. Let Allah.",
"Your calmness is your power.",
"Don’t rush. What’s meant for you will find you.",
"Disconnect to reconnect with your soul.",
"Chill. Even the stars take time to shine.",
"Find your calm in the chaos.",
"Let go. Let Allah.",
"Your calmness is your power." 

    ]
  };
  
  const backgrounds = {
    happy: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1400&q=80",
    sad: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1400&q=80",
    angry: "https://images.unsplash.com/photo-1517202383675-eb0a6e27775f?auto=format&fit=crop&w=1400&q=80",
    chill: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
  };
  
  function showQuote(mood) {
    const quoteText = document.getElementById("quote");
    const body = document.body;
  
    const moodQuotes = quotes[mood];
    const randomIndex = Math.floor(Math.random() * moodQuotes.length);
    const selectedQuote = moodQuotes[randomIndex];
  
    quoteText.style.opacity = 0;
    setTimeout(() => {
      quoteText.textContent = selectedQuote;
      body.style.backgroundImage = `url('${backgrounds[mood]}')`;
      quoteText.style.opacity = 1;
    }, 300);
  };
  