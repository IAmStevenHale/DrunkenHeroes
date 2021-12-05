let count = 0;
function changeImage() {
  let image1 = document.getElementById("drink");

  if (image1.src.indexOf("images/drunkHero.png") !== -1) {
    image1.src = "images/drunkHero_glassUp.png";
  } else {
    image1.src = "images/drunkHero.png";
  }
  if (count === 4) {
    console.log("Puke");
    puke();
    count = 0;
  }
  count++;
}

function puke() {
  document.getElementById("puke").style.display = "inline";
  var audio = new Audio(
    "images/zapsplat_impact_body_heavy_splat_squelch_guts_bones_break_13492.mp3"
  );
  audio.play();
  document.getElementById("puke").classList.add("pukeAnimate");
  document.getElementById("drink").classList.add("drinkImage");
  setTimeout(() => {
    document.getElementById("drink").style.display = "none";
  }, 300);

  setTimeout(() => {
    location.href = "menu.html";
  }, 2500);
}

function playGame() {
  location.href = "play.html";
}

function back() {
  location.href = "index.html";
}

function rules() {
  document.getElementById("rulesDiv").style.display = "block";
}

function disclaimer() {
  document.getElementById("disclaimerDiv").style.display = "block";
}

function nextCard() {
  document.getElementById("card").addEventListener("click", flipTheCard());

  let deckLength = deck.cards.length;
  if (usedCards.length !== deckLength) {
    let randomCard = Math.floor(Math.random() * deckLength - 1 + 1);
    while (usedCards.includes(randomCard)) {
      randomCard = Math.floor(Math.random() * deckLength - 1 + 1);
    }
    let newCard = deck.cards[randomCard];
    setTimeout(() => {
      document.getElementById("cardText").innerText = newCard;
    }, 200);
    usedCards.push(randomCard);
    console.log(usedCards);
  } else {
    alert(
      "You have played all the cards!\nDon't worry, we will shuffle the deck."
    );
    usedCards = [];
  }
  // document.getElementById('card').className = 'card';
}

function flipTheCard() {
  document.getElementById("card").classList.add("newCard");
  setTimeout(() => {
    document.getElementById("cardText").style.display = "none";
  }, 200);
  setTimeout(() => {
    document.getElementById("cardText").style.display = "inline";
  }, 1000);

  setTimeout(() => {
    document.getElementById("card").classList.remove("newCard");
  }, 1500);
}

function closeRules() {
  document.getElementById("rulesDiv").style.display = "none";
}

function closeDisclaimer() {
  document.getElementById("disclaimerDiv").style.display = "none";
}

let usedCards = [];

const deck = {
  cards: [
    "Spidey Senses\n\nYour spidey senses are tingling. You can dodge out of the way of a card effect.\n\nUse this card whenever, it does not expire.",
    "Double Attack\n\nYou attack twice, give out two drinks.",
    "HellBoy\n\nBoys rule, Girls Drool\n\nEvery girl in the room drinks for each boy in the room.",
    "Modern Day Villain\n\nDrink if you have ever run away from the police and NOT been caught.",
    "Hidden Hulk\n\nWho secretly needs anger management?\n\nOn the count of 3, everyone points to who you think is the Hidden Hulk, Hero with the most votes drinks twice.",
    "Infinite Gauntlet\n\nClick your fingers!\n\nEveryone, including you, must finish half of their drink.",
    "SECRET\n\nJoker\n\nTell your group a joke, if nobody laughs you must drink. Otherwise, everyone else drinks.",
    "Captain Marvel\n\nGirls rule, Boys drool\n\nEvery boy in the room drinks for each girl in the room.",
    "Doctor Strange\n\nTime Travel to the last card that made someone drink. Repeat the effects of the card.\n\nIf no one can remember, everyone drinks twice.",
    "Epic Battle!\n\nChoose two people to compete in a game of Rock-Paper-Scissors (Best of 3)\n\nLoser must finish their drink.",
    "Butler Card\n\nAlfred Pennyworth\n\nYou must fetch everyone's drinks and snack for the next 5 Rounds or until another Butler Card is drawn - whichever comes first.",
    "Superhero Name\n\nYou only get one shot at coming up with your Superhero Name\n\nEveryone comes up with their unique name and you must choose the best/worse (your choice).\n\nThe reader of this card and whoever they picked are safe\nEveryone else drinks.",
    "Epic Battle!\n\nChoose an opponent for a thumb war.\n\nLoser must finish their drink.",
    "Weakling\n\nOn the count of 3 everyone points to who they think will/would pass out first from drinking.\n\nThe Hero with the most votes must drink.",
    "Do Heroes do Cardio?\n\nThe least fit Hero must drink but can also give out two drinks.",
    "Defeated!!\n\nYou're too drunk!\nYou're arch nemesis beats you in battle!\n\nDrink.",
    "Defeated!!\n\nYou're too drunk!\nYou're arch nemesis beats you in battle!\n\nDrink.",
    "Fireball!\n\nYou cast a Fireball and engulf everyone, including yourself!\n\nEveryone must drink.",
    "Hero's Swag\n\nOn the count of 3 everyone points to who they think has the best style/outfit.\n\nThey drink - it's hard to look this good.",
    "Apocalypse\n\nCreate a rule that everyone must follow for the REST OF THE GAME!\n\nIf anyone breaks the rule (including you) they must drink.",
    "Jean Grey\n\nTake a drink without using your hands.\n\nIf you fail or spill it, use your hands to take a drink.",
    "Shapeshift\n\nIf any card effect is going to affect you, you can instead choose to appear like a Hero in the group. They take the card effect instead.\n\nUse this card whenever, it does not expire.",
    "Teleportation\n\nIf any card effect is going to affect you, you can switch spots with another Hero. They take the card effect instead.\n\nUse this card whenever, it does not expire.",
    "Super Speed\n\nYou are so fast that you can attack anyone!\n\nGive out 3 drinks.",
    "Laser Vision\n\nChoose a Hero to have a staring contest with.\n\nLoser Drinks.",
    "Mute\n\nChoose a word. For the REST OF THE GAME if anyone uses that word they must drink.",
    "Invisibility\n\nThe Villain cannot see you.\n\nEveryone but you drinks.",
    "Aquaman\n\nThe player who drew this card starts drinking. Each Hero starts drinking their drink after the person to their left starts.\nNo player can stop until the person before them stops.",
    "Toad's Tongue\n\nWhoever can touch their nose with their tongue (or get the closest) gives out a drink.",
    "Hero Brawl\n\nA massive brawl breaks out between all of the Heroes of the group.\n\nOn the count of 3, using both hands, point to the Heroes you want to make drink.\n\nFor each finger pointed at you, drink.",
    "Butler Card\n\nEdwin Jarvis\n\nYou must fetch everyone's drinks and snack for the next 5 Rounds or until another Butler Card is drawn - whichever comes first.",
    "SECRET\n\nFreeze Ray\n\nAct frozen until everyone copies.\n\nLast Hero to freeze must drink.",
    "Cat Woman\n\nOn the count of 3 everyone points to who they think is most likely to own 10 cats.\n\nHero with the most votes drinks.",
    "Hero's Anthem\n\nGo around the group and name/sing songs that have superhero names or the word 'Hero' in the lyrics or title.\n\nFirst person to repeat or fail to think of one must drink.",
    "Catch Up\n\nOn the count of 3 everyone points to who they think is the most sober.\n\nHero with the most drinks must FINISH their drink.",
    "Shield\n\nYou can deflect one card effect or punishment onto another Hero.\n\nUse this card whenever, it does not expire.",
    "Force Field\n\nYou can deflect one card effect or punishment onto another Hero.\n\nUse this card whenever, it does not expire.",
    "Super Villain Outfit\n\nEveryone takes a drink for each piece of black clothing that they are wearing.",
    "Thanos\n\nPerfectly Balanced, as all things should be.'\n\nGive out drinks equal to half of the number of Heroes playing.",
    "Victory!!\n\nYou beat a fellow Super Hero in a drunken brawl.\n\nGive out a drink.",
    "Victory!!\n\nYou beat a fellow Super Hero in a drunken brawl.\n\nGive out a drink.",
    "PERMANENT SUPER POWER\n\nFinish a full drink to gain this power. If you decide to pass, the opportunity goes to the left.\nDoctor Manhattan\nOnce per round you can take a drink and create a new rule. The rule lasts for one round. Anyone (including you) that breaks the rule must drink.",
    "Super Hearing\n\nThe reader of this card plays the first 10 seconds of a song.\nIf no one can guess to everyone must drink\nOtherwise, the reader drinks.",
    "Battle!\n\nEveryone must try and convince you why they would be the winner of a colosseum style battle.\n\nYou and whoever you pick are safe.\nEveryone must drink.",
    "No Paparazzi!\nWe are trying to have a good night!\n\nEveryone who has taken a photo tonight must take a drink.",
    "Shitty Super Hero\n\nDrink for each time you have been fired.",
    "Will you be the Batman to my Robin?\n\nPick another Hero to be your Robin. For the rest of the game whenever you drink, they must also drink.\nIf a card makes you finish your drink, it counts as sip for Robin.",
    "SECRET\n\nRaise your drink to the Hero life.\n\nThe last Hero to raise their drink, drinks.",
    "X-Ray Vision\n\nGuess the colour of someone's underwear.\n\nIf you guess correctly they drink, otherwise you drink.",
    "SECRET\n\nIf anyone laughs at this shitty joke they must drink.\n\n'Which Hero hits the most homeruns?'\n\n'Batman'",
    "Alter Ego\n\nAre you a billionaire who secretly fights crime?\n\nMake someone expose their guilty pleasure and drink in shame.",
    "Professor Xavier\n\nThe host of the party can give out 3 drinks.",
    "Sonic BOOM\n\nThe Hero opposite you must drink.",
    "Mitosis\n\nRepeat everything you say twice for an entire round.\n\nEach time you are caught not doing this, you must drink.",
    "PERMANENT SUPER POWER\n\nFinish a full drink to gain this power. If you decide to pass, the opportunity goes to the left.\n\nTwo-Face\nIf a card affects you, flip a coin. If you guess correctly you do not have to drink.",
    "Moral Dilemma\n\nAre you a True Hero?\nYou must choose between the Hero to your left and right. One must Finish their drink, the other is immune from all card effects for the rest of the round.",
    "Wolverine\n\nThe Hero that has broken the most bones can give out a drink.",
    "Explosive Attack\n\nChoose a Hero to drink twice. The Heroes to their left and right must also drink once.",
    "Sidekick\n\nYou can use this card to force someone to drink with you (must drink the same amount).\n\nUse this card whenever, it does not expire.",
    "Sidekick\n\nYou can use this card to force someone to drink with you (must drink the same amount).\n\nUse this card whenever, it does not expire.",
    "Hero or Villain?\n\nIt's time to decide. Good or Bad?\n\nYou can either take 3 drinks or force everyone else to drink twice.",
    "Super Hero Appreciation\n\nGo around the group and name Super Heroes.\n\nFirst person to repeat or fail to think of one must drink.",
    "Mr. Fantastic\n\nAnyone who can't touch their toes with straight legs must drink.",
    "Pinnacle of Power\n\nFor every inch your height is above or below 6 feet, take a drink.",
    "Mind Reader\n\nSay a statement about yourself. It can be either true or false.\nThe other Heroes, as a team, must decide if you're lying or not.\n\nIf they guess correctly you drink, otherwise they all drink.",
    "Till the End\n\nThe two Heroes who have known each other the longest can each give out a drink.",
    "Magneto\n\nWhoever is wearing the most metal/jewellery most drink.",
    "Captain America\nWhat a goody-goody.\n\nOn the count of 3 everyone points to who they think is the nicest Hero.\n\nThat Hero must drink.",
    "Who invited Hawkeye... is he even a Super Hero?\n\nHe suggests playing a round of 'Never Have I Ever'.\n\nLoser drinks.",
    "SECRET\n\nThe floor is lava.\nThe last Hero touching the floor must drink.",
    "Deadpool's Wit\n\nGive our a Deadpool level insult - and a drink.",
    "Web Shot\n\nYou can steal someone's card at ANYTIME. You must use that card immediately.\n\nUse this card whenever, it does not expire.",
    "Suicide Squad\n\nYou have to pick your posse, all of the Heroes must try and convince you why they should be on your team.\nPick one, everyone else must drink.",
    "Guardians of the Galaxy\nSome Heroes are more helpful than others.\n\nStarting at 1 and ascending, go around the group and give each Hero a number (including yourself.\nThat is how many sips they must take.",
    "SECRET\n\nHeroes Assemble\n\nStrike your trademark pose, the last Hero to strike a post must drink.",
    "I'm Batman\n\nAll Heroes must finish each sentence with 'I'm Batman' for the round.\n\nEach time someone forgets, they must drink. ",
    "Riddler\n\nRead a riddle out loud, the reader of this card and the first person to solve it (if anyone) are safe.\n\nEveryone else must drink.",
    "Super Villain Appreciation\n\nGo around the group and name Super Villains.\n\nFirst person to repeat or fail to think of one must drink.",
    "Origin Story\n\nYou're Batman! But without the money...\nYour parents are killed and you're now and orphan.\n\nFinish your drink.",
    "Super Size\n\nThe Hero with the largest hands must use them to clutch their glass and drink.",
    "Galactus\n\nEveryone must completely consume their drink.",
    "PERMANENT SUPER POWER\n\nFinish a full drink to gain this power. If you decide to pass, the opportunity goes to the left.\n\nSuperman\nOnce per round you can double someone's punishment (Yes, that means you can double anything!).",
    "Battle of the Ages\n\nSplit the group into two, now compete in Flip Cup.\n\nAll of the cards affecting the losers are doubled for a round.",
    "Caliban\n\nYou must speak in third person for the rest of the round.\n\nEach time you are caught not doing this, you must drink.",
    "Bad Villain\n\nOn the count of 3 everyone points to who they think would be the worst villain.\n\nThey drink.",
  ],
};
