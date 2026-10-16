/* Greetings */
const yourName = prompt('Who is visiting my page?');
const greeting = yourName
  ? `Hi, ${yourName}! Welcome to Trevor's page. 😁` /* condition ? means ifTrue = if there's a name input, : means ifFalse = no name or cancel. Purpose is to remove the Null*/
  : "Hi! Welcome to Trevor's page.";
alert(greeting);

/* Blockquote My activities */
const interests = [
  'I love diving. Been to almost all of the islands in Malaysia.',
  'One of my toughest hikes is Chemerung-Berembun-Langsir. Knee-breaking.',
  'Wild camping - ✅. The best experience with nature, especially the bugs.',
  "I have luck in fishing weird stuffs. Caught a 'Pocong', which turns out to be a garbage bag shaped like one.",
  'Sharks are the best sights when diving, especially whale sharks. Majestic creatures.',
  'The turtles I met in the sea of Sabah are huge and chilled.',
  "Hiking up to Langsir and camping there with the most spectacular view, 'jacuzzi', and crystal clear river, and of course a chance of meeting the Maybank mascot.",
  'Got to catch that huge Toman fish in KKB.',
  "'Fish on' while reeling in an eel out of the water. Slimy bugger.",
  'Churning projects and shipping into Github is fun, but not an easy task.',
  'Building webpages and developing them is fun.',
];

const interestText = document.getElementById('my-interest');
const activityButton = document.getElementById('new-activity');

let lastIndex = -1;

function showRandomInterest() {
  let index;
  do {
    index = Math.floor(Math.random() * interests.length);
  } while (index === lastIndex);

  lastIndex = index;
  interestText.textContent = interests[index];
}

activityButton.addEventListener('click', showRandomInterest);
showRandomInterest();

/* Goal Button */
const goalsButton = document.getElementById('goals');
const goalsList = document.getElementById('goals-list');

goalsButton.addEventListener('click', () => {
  goalsList.hidden = !goalsList.hidden;
  goalsButton.setAttribute('aria-expanded', !goalsList.hidden);
  goalsButton.textContent = goalsList.hidden ? '➤ My Goals' : '▼ My Goals';
});

/* Theme Button */
const themeButton = document.getElementById('theme-toggle');
const root = document.documentElement;

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeButton.textContent = theme === 'light' ? '☀️' : '🌑';
}

themeButton.addEventListener('click', () => {
  setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});
