var eightBallAnswer = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Try again",
  "Don’t count on it",
  "It's NO",
  "No way",
  "My reply is no",
  "Outlook not so good",
  "Very doubtful",
  "No"
];

var fortuneCookieAnswer = [
  "Some days you are pigeon, some days you are statue. Today, bring umbrella.",
  "The fortune you seek is in another cookie.",
  "Everyone seems normal until you get to know them.",
  "A conclusion is simply the place where you got tired of thinking.",
  "Your road to glory will be rocky but fulfilling.",
  "Nothing is impossible to a willing heart.",
  "Don’t worry about money. The best things in life are free.",
  "Easiest way to find lost object is buy replacement.",
  "If at first you don’t succeed, skydiving not for you.",
  "When chosen for jury duty, tell judge “fortune cookie say guilty!”",
  "You are cleverly disguised as responsible adult.",
  "You think it’s a secret, but they know.",
  "If you look back, you’ll soon be going that way.",
  "An alien of some sort will be appearing to you shortly.",
  "You will soon have an out of money experience.",
  "One tequila, two tequila, three tequila, floor.",
  "He who laughs at himself never runs out of things to laugh at.",
  "There is no mistake so great as that of being always right.",
  "To avoid criticism, do nothing, say nothing, be nothing.",
  "Don’t forget you are always on our minds.",
  "The greatest danger could be your stupidity.",
  "Atheism no fun. No holidays.",
  "One that would have the fruit must climb the tree.",
  "If you want the rainbow, you have to tolerate the rain."
];

function getTheAnswer(gameAnswer){
  var random = Math.floor(Math.random() * gameAnswer.length);
  var answer = gameAnswer[random];
  $(".answer").text(answer);
}

function close(){
  $(".answerPopup").removeClass("active");
  $("#overlay").removeClass("active");
}

function openPopup(game){
  getTheAnswer(game);
  $(".answerPopup").addClass("active");
  $("#overlay").addClass("active");
}

$(".btnBall").click(function(){
  openPopup(eightBallAnswer);
});
$(".btnCookie").click(function(){
  openPopup(fortuneCookieAnswer);
});

$(".closeButton").click(function(){
  close();
});

$("#overlay").click(function(){
  close();
});

$("#overlay").on("touchstart", function(){
  close();
});
