// VARIABLE THAT CONTAINS AN ARRAY OF OBJECTS FOR EVERY ZODIAC SIGN AND ITS PROPERTY VALUE PAIRS
let zodiacSign = [
  { sign: 'Aquarius',
    image: 'img/aquarius.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    dateMonth: ['1', '2'],
    dateDay: ['20', '18']
  },
  { sign: 'Pisces',
    image: 'img/pisces.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    dateMonth: ['2', '3'],
    dateDay: ['19', '20']
  },
  { sign: 'Aries',
    image: 'img/aries.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    dateMonth: ['3', '4'],
    dateDay: ['21', '19']
  },
  { sign: 'Taurus',
    image: 'img/taurus.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    dateMonth: ['4', '5'],
    dateDay: ['20', '20']
  },
  { sign: 'Gemini',
    image: 'img/gemini.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    dateMonth: ['5', '6'],
    dateDay: ['21', '20']
  },
  { sign: 'Cancer',
    image: 'img/cancer.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    dateMonth: ['6', '7'],
    dateDay: ['21', '22']
  },
  { sign: 'Leo',
    image: 'img/leo.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    dateMonth: ['7', '8'],
    dateDay: ['23', '22']
  },
  { sign: 'Virgo',
    image: 'img/virgo.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    dateMonth: ['8', '9'],
    dateDay: ['23', '22']
  },
  { sign: 'Libra',
    image: 'img/libra.jpg',
    horoscope: 'You will go get some water soon!',
    dateMonth: ['9', '10'],
    dateDay: ['23', '22']
  },
  { sign: 'Scorpio',
    image: 'img/scorpio.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    dateMonth: ['10', '11'],
    dateDay: ['23', '21']
  },
  { sign: 'Sagittarius',
    image: 'img/sagittarius.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    dateMonth: ['11', '12'],
    dateDay: ['22', '21']
  },
  { sign: 'Capricorn',
    image: 'img/capricorn.jpg',
    horoscope: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    dateMonth: ['12', '1'],
    dateDay: ['22', '19']
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
  for (let i = 0; i < zodiacSign.length; i++) {
    if (((month.value == zodiacSign[i].dateMonth[0]) && (day.value >= zodiacSign[i].dateDay[0])) || ((month.value == zodiacSign[i].dateMonth[1]) && (day.value <= zodiacSign[i].dateDay[1]))) {
      console.log('success');
      sign.textContent = zodiacSign[i].sign;
      image.src = zodiacSign[i].image;
      horoscope.textContent = zodiacSign[i].horoscope;
      return;
    }
  }
}


// zodiacSign[i].sign = sign;
// zodiacSign[i].image = image;
// zodiacSign[i].horoscope = text;
