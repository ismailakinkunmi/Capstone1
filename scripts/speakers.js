const speakers = [
  {
    name: 'Bill Gate',
    title: 'is an American business magnate, software developer',
    image: './images/image1.jpg',
    description:
      'William Henry Gates III is an American business magnate, software developer, He is a co-founder of Microsoft, along with his late childhood friend Paul Allen.',
  },
  {
    name: 'Nelson Mandela',
    title: 'Former President of South Africa',
    image: './images/image2.jpg',
    description:
      'Nelson Rolihlahla Mandela was a South African anti-apartheid revolutionary who served as the first president of South Africa from 1994 to 1999.',
  },
  {
    name: 'Joe Biden',
    title: '46th U.S. President',
    image: './images/image3.jpg',
    description:
      'Joseph Robinette Biden Jr. is an American politician who is the 46th and current president of the United States.',
  },
  {
    name: 'Jeffrey Bezos',
    title: 'jeffrey Preston Bezos is an American entrepreneur',
    image: './images/image4.jpg',
    description:
      'Bezos is a computer engineer,commercial astronaut. He is the founder and executive chairman of Amazon, where he previously served as the president and CEO.',
  },
  {
    name: 'Mark Zuckerberg',
    title: 'Chief Executive Officer of Facebook',
    image: './images/image5.jpg',
    description:
      'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Meta Platforms, Inc.',
  },
  {
    name: 'Dan Sturman',
    title: 'Chief Technology Officer @ Roblox',
    image: './images/image6.jpg',
    description:
      'Dan holds a Ph.D. and MS in Computer Science from the University of Illinois at Urbana-Champaign and a BS in Computer Science from Cornell University. ',
  },
];

const speakersWrap = document.querySelector('.speakers .list');
speakers.forEach((speaker) => {
  speakersWrap.innerHTML += `
    <div class="card">
      <div class="image">
        <img src="${speaker.image}" alt="picture of ${speaker.name}" />
      </div>
      <div class="details">
        <h4>${speaker.name}</h4>
        <span>${speaker.title}</span>
        <hr />
        <p>
          ${speaker.description}
        </p>
      </div>
    </div>
  `;
});

const moreBtn = document.querySelector('.more-btn');
moreBtn.addEventListener('click', () => {
  if (moreBtn.classList.contains('less-btn')) {
    moreBtn.querySelector('span').textContent = 'MORE';
    moreBtn.classList.remove('less-btn');
    document
      .querySelectorAll('.speakers .card:not(:first-child):not(:nth-child(2))')
      .forEach((c) => {
        c.style.display = 'none';
      });
    return;
  }

  moreBtn.querySelector('span').textContent = 'LESS';
  moreBtn.classList.add('less-btn');
  document.querySelectorAll('.speakers .list > .card').forEach((c) => {
    c.style.display = 'grid';
  });
});
