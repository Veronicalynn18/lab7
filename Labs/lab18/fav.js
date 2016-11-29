

var tvThemes =["Thank you for being a friend.",
"Travel down the road and back again.",
"Your heart is true, youre a pal and a confidant.",
"And if you threw a party, invited everyone you knew.",
"You would see the biggest gift would be from me",
"and the card attached would say,",
"thank you for being a friend.",
"You take the good, you take the bad,",
"you take them both and there you have",
"The facts of life, the facts of life.",
"Theres a time you got to go and show",
"Youre growin now you know about",
"When the world never seems",
"to be livin up to your dreams",
"And suddenly youre finding out",
"the facts of life are all about you, you.",
"It takes a lot to get em right",
"When youre learning the facts of life.",
"Learning the facts of life"];

exports.tvTheme = function(phrase){

  var math= Math.floor(Math.random() * tvThemes.length)
  var tvQu= tvThemes[math];

    return tvQu;
};

exports.tvQu = exports.tvTheme(tvThemes);
