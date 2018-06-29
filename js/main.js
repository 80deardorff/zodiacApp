// VARIABLE THAT CONTAINS AN ARRAY OF OBJECTS FOR EVERY ZODIAC SIGN AND ITS PROPERTY VALUE PAIRS
let zodiacSign = [
  { sign: 'Aquarius',
    image: 'img/aquarius.jpg',
    horoscope: "The year 2018 is full of changes, Aquarius, and they all make you more influential and important. You may not always take yourself seriously, but please take what you do seriously, and see great progress and success this year.",
    dateMonth: ['1', '2'],
    dateDay: ['20', '18']
  },
  { sign: 'Pisces',
    image: 'img/pisces.jpg',
    horoscope: "The year 2018 is one for hard work, Pisces, and the stars are working hard for you. On New Year's Day, the moon, Mars, Jupiter, and Neptune are all in water signs. You have keen sensitivities and sharp insights and intuition all year long.",
    dateMonth: ['2', '3'],
    dateDay: ['19', '20']
  },
  { sign: 'Aries',
    image: 'img/aries.jpg',
    horoscope: "The year 2018 is one for hard work, Pisces, and the stars are working hard for you. On New Year's Day, the moon, Mars, Jupiter, and Neptune are all in water signs. You have keen sensitivities and sharp insights and intuition all year long.",
    dateMonth: ['3', '4'],
    dateDay: ['21', '19']
  },
  { sign: 'Taurus',
    image: 'img/taurus.jpg',
    horoscope: "Rock your world in 2018! Your ruling planet Venus is one of the best connected and most powerful forces in the sky this year.",
    dateMonth: ['4', '5'],
    dateDay: ['20', '20']
  },
  { sign: 'Gemini',
    image: 'img/gemini.jpg',
    horoscope: "Welcome to bustling, beautiful 2018, Gemini! You'll have the chance to connect with more people and engage in more new situations as never before.",
    dateMonth: ['5', '6'],
    dateDay: ['21', '20']
  },
  { sign: 'Cancer',
    image: 'img/cancer.jpg',
    horoscope: "The year 2018 is an open book for you, Cancer. You have access to all that the stars have to offer. If it's work, family, finances, love, or anything else, there will be a planet ready to give you a hand.",
    dateMonth: ['6', '7'],
    dateDay: ['21', '22']
  },
  { sign: 'Leo',
    image: 'img/leo.jpg',
    horoscope: "The year 2018 blazes with energy, challenges, and opportunities of the most practical and far-reaching kind. You're looking at a golden year, Leo!",
    dateMonth: ['7', '8'],
    dateDay: ['23', '22']
  },
  { sign: 'Virgo',
    image: 'img/virgo.jpg',
    horoscope: "Virgo, 2018 is your year to get intense! Intensity has its ups and downs, and you can make the most of the ups while coping skillfully with any downs.",
    dateMonth: ['8', '9'],
    dateDay: ['23', '22']
  },
  { sign: 'Libra',
    image: 'img/libra.jpg',
    horoscope: "The focus is on you for 2018, Libra. Be prepared for people to look to you for advice and leadership. It will be easy and it will come naturally, so relax and enjoy the attention.",
    dateMonth: ['9', '10'],
    dateDay: ['23', '22']
  },
  { sign: 'Scorpio',
    image: 'img/scorpio.jpg',
    horoscope: "You're a powerful person and a force of nature in 2018, Scorpio! The year begins with your planet Mars conjoined with influential Jupiter in Scorpio. Once you decide on a plan of action, nothing and no one will be able to slow you down.",
    dateMonth: ['10', '11'],
    dateDay: ['23', '21']
  },
  { sign: 'Sagittarius',
    image: 'img/sagittarius.jpg',
    horoscope: "Enter 2018 moving in high speed, Sagittarius, and accelerate from there. Your planet Jupiter is powerful and ambitious and will keep you going full blast in the direction that moves you forward.",
    dateMonth: ['11', '12'],
    dateDay: ['22', '21']
  },
  { sign: 'Capricorn',
    image: 'img/capricorn.jpg',
    horoscope: "Life makes more and better sense in 2018, Capricorn. A clearer perspective will make it much easier to achieve your goals and dreams.",
    dateMonth: ['12', '1'],
    dateDay: ['22', '19']
  }
];

// VARIABLES THAT CAN MANIPULATE HTML IMAGE AND TEXT
let sign = document.getElementById('sign');
let opening = document.getElementById('opening');
let image = document.getElementById('image');
let horoscope = document.getElementById('horoscope');

// VARIABLES FOR MONTH AND DATE
let month = document.getElementById('month-select');
let day = document.getElementById('day-select')

// FUNCTION ON A CLICK OF A BUTTON THAT RUNS A FOR LOOP COMPARING THE DAY AND MONTH SELECTED TO CATEGORIES SET FOR EACH ZODIAC SIGN; CONDITION STATEMENTS NEEDED

function getSign() {
  for (let i = 0; i < zodiacSign.length; i++) {
    if (((month.value == zodiacSign[i].dateMonth[0]) && (day.value >= zodiacSign[i].dateDay[0])) || ((month.value == zodiacSign[i].dateMonth[1]) && (day.value <= zodiacSign[i].dateDay[1]))) {
      console.log('success');
      sign.textContent = zodiacSign[i].sign;
      opening.setAttribute('class', 'd-none');
      image.src = zodiacSign[i].image;
      horoscope.textContent = zodiacSign[i].horoscope;
      image.setAttribute('class', 'animated fadeIn');
      sign.setAttribute('class', 'animated fadeIn text-white py-3 px-0');
      horoscope.setAttribute('class', 'animated fadeIn text-white mx-auto');
      return;
    }
  }
}
