// VARIABLE THAT CONTAINS AN ARRAY OF OBJECTS FOR EVERY ZODIAC SIGN AND ITS PROPERTY VALUE PAIRS
let zodiacSign = [
  { sign: 'Aquarius',
    image: 'img/aquarius.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  { sign: 'Pisces',
    image: 'img/pisces.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  { sign: 'Aries',
    image: 'img/aries.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  { sign: 'Taurus',
    image: 'img/taurus.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  { sign: 'Gemini',
    image: 'img/gemini.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  { sign: 'Cancer',
    image: 'img/cancer.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  { sign: 'Leo',
    image: 'img/leo.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  { sign: 'Virgo',
    image: 'img/virgo.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  { sign: 'Libra',
    image: 'img/libra.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  { sign: 'Scorpio',
    image: 'img/scorpio.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  { sign: 'Sagittarius',
    image: 'img/sagittarius.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },

  { sign: 'Capricorn',
    image: 'img/capricorn.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

// VARIABLES THAT CAN MANIPULATE HTML IMAGE AND TEXT
let sign = document.getElementById('sign');
let image = document.getElementById('image');
let horoscope = document.getElementById('horoscope');

// VARIABLES FOR MONTH AND DATE
let month = document.getElementById('month-select');
let day = document.getElementById('day-select')

// FUNCTION ON A CLICK OF A BUTTON THAT RUNS A FOR LOOP COMPARING THE DAY AND MONTH SELECTED TO CATEGORIES SET FOR EACH ZODIAC SIGN; CONDITION STATEMENTS NEEDED

function getSign() {
  for (var i = 0; i < zodiacSign.length; i++) {
    if (true) {
      sign.value = zodiacSign[i].sign;
      image.value = zodiacSign[i].image;
      horoscope.value = zodiacSign[i].horoscope;
    }
  }
}


// zodiacSign[i].sign = sign;
// zodiacSign[i].image = image;
// zodiacSign[i].horoscope = text;
