// local reviews data
const reviews = [
  {
    id: 1,
    name: 'The team',
    job: 'paper company',
    img: 'https://shotkit.com/wp-content/uploads/2019/02/Stock-photo.jpg',
    text: "We're all get more things done if we work together!",
  },
  {
    id: 2,
    name: 'johnathan',
    job: 'model',
    img: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720',
    text: 'Ready for the photoshoot.',
  },
  {
    id: 3,
    name: 'timmothy',
    job: 'babysitter',
    img: 'https://images.pexels.com/photos/4763270/pexels-photo-4763270.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    text: 'Dont do that again!',
  },
  {
    id: 4,
    name: 'legend',
    job: 'web developer',
    img: 'https://umbrellacreative.com.au/wp-content/uploads/2020/01/hide-the-pain-harold-why-you-should-not-use-stock-photos.jpg',
    text: 'I love working from home ',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const firstBtn = document.querySelector('.first-btn');
const lastBtn = document.querySelector('.last-btn');
// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
// return to first person
firstBtn.addEventListener('click', function () {
    currentItem = 0;
    showPerson(currentItem);
  }
);
lastBtn.addEventListener('click', function () {
  currentItem = 3;
  showPerson(currentItem);
}
);