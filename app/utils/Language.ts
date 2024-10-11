export type LanguageKeys = keyof typeof Languages;
export type FloorKeys = keyof typeof FloorNames;

export const Languages = {
  en: {
    welcomePage: {
      title:
        "Build the skyscraper of your dreams and make your residents happy!",
      subTitle:
        "‘Skyscrapers’ is a completely new, exciting, and unique online game.",
      welcomeUser: "Hi: ",
      buttonText: "Let me in",
    },
    menuSection: {
      profile: "My Profile",
      city: "My City",
      shop: "Shop",
      human: "Residents",
      rating: "Top",
      payment: "Bucks",
    },
    userStats: {
      lvl: "level",
    },
    home: {
      workerSub: 'Workers needed',
      workerLink: 'Find a worker'
    }
  },
  uk: {
    welcomePage: {
      title: "Побудуй хмарочос мрії та зроби своїх мешканців щасливими!",
      subTitle:
        "«Хмарочоси» — абсолютно нова, захоплива та ні на що не схожа онлайн-гра.",
      welcomeUser: "Привіт: ",
      buttonText: "Увійти",
    },
    menuSection: {
      profile: "Мій профіль",
      city: "Моє місто",
      shop: "Магазин",
      human: "Жителі",
      rating: "Найкращі",
      payment: "Бакси",
    },
    userStats: {
      lvl: "рівень",
    },
    home: {
      workerSub: 'Потрібні працівники',
      workerLink: 'Знайти працівника'
    }
  },
};

export const FloorNames = {
  en: {},
  uk: {
    products: {
      1: {
        floorName: "Кондитерська",
        departmentName: {
          1: "Булки",
          2: "Пиріжки",
          3: "Торти",
        },
      },
      2: {
        floorName: "М'ясна лавка",
        departmentName: {
          1: "Сосиски",
          2: "Сардельки",
          3: "Ковбаси",
        },
      },
      3: {
        floorName: "Молочна лавка",
        departmentName: {
          1: "Молоко",
          2: "Йогурт",
          3: "Творог",
        },
      },
      4: {
        floorName: "Морозиво",
        departmentName: {
          1: "Пломбір",
          2: "Ванільне",
          3: "Ескімо",
        },
      },
      5: {
        floorName: "Спеції",
        departmentName: {
          1: "Перець",
          2: "Сіль",
          3: "Кмин",
        },
      },
      6: {
        floorName: "Чайний магазин",
        departmentName: {
          1: "Чорний",
          2: "Зелений",
          3: "Трав'яний",
        },
      },
      7: {
        floorName: "Напівфабрикати",
        departmentName: {
          1: "Вареники",
          2: "Пельмені",
          3: "Лазанья",
        },
      },
      8: {
        floorName: "Доставка води",
        departmentName: {
          1: "Бутильована",
          2: "Мінеральна",
          3: "Газована",
        },
      },
      9: {
        floorName: "Бакалія",
        departmentName: {
          1: "Макарони",
          2: "Рис",
          3: "Крупи",
        },
      },
      10: {
        floorName: "Консерви",
        departmentName: {
          1: "Горошок",
          2: "Кукурудза",
          3: "Риба",
        },
      },
      11: {
        floorName: "Винний бутик",
        departmentName: {
          1: "Червоне",
          2: "Біле",
          3: "Шампанське",
        },
      },
      12: {
        floorName: "Морепродукти",
        departmentName: {
          1: "Устриці",
          2: "Креветки",
          3: "Риба",
        },
      },
      13: {
        floorName: "Фруктова лавка",
        departmentName: {
          1: "Яблука",
          2: "Банани",
          3: "Апельсини",
        },
      },
      14: {
        floorName: "Рибна лавка",
        departmentName: {
          1: "Оселедець",
          2: "Лосось",
          3: "Тунець",
        },
      },
      15: {
        floorName: "Овочева лавка",
        departmentName: {
          1: "Морква",
          2: "Огірки",
          3: "Помідори",
        },
      },
      16: {
        floorName: "Делікатеси",
        departmentName: {
          1: "Фуа-гра",
          2: "Круасани",
          3: "Паштети",
        },
      },
      17: {
        floorName: "Сирна лавка",
        departmentName: {
          1: "Голландський",
          2: "Брі",
          3: "Чеддер",
        },
      },
      18: {
        floorName: "Напої",
        departmentName: {
          1: "Соки",
          2: "Безалкогольне пиво",
          3: "Коктейлі",
        },
      },
      19: {
        floorName: "Сухофрукти",
        departmentName: {
          1: "Курага",
          2: "Фініки",
          3: "Чорнослив",
        },
      },
      20: {
        floorName: "Трави",
        departmentName: {
          1: "Петрушка",
          2: "Базилік",
          3: "Орегано",
        },
      },
      21: {
        floorName: "Шоколадна лавка",
        departmentName: {
          1: "Темний шоколад",
          2: "Молочний шоколад",
          3: "Білий шоколад",
        },
      },
      22: {
        floorName: "Фастфуд",
        departmentName: {
          1: "Бургери",
          2: "Картопля фрі",
          3: "Піца",
        },
      },
      23: {
        floorName: "Пончики",
        departmentName: {
          1: "Глазуровані",
          2: "З начинкою",
          3: "Без начинки",
        },
      },
      24: {
        floorName: "Горіхи",
        departmentName: {
          1: "Грецькі",
          2: "Арахіс",
          3: "Фундук",
        },
      },
      25: {
        floorName: "Крупи",
        departmentName: {
          1: "Пшеничні",
          2: "Ячмінні",
          3: "Гречані",
        },
      },
      26: {
        floorName: "Спортивне харчування",
        departmentName: {
          1: "Протеїнові батончики",
          2: "Порошки для змішування",
          3: "Добавки",
        },
      },
      27: {
        floorName: "Соуси",
        departmentName: {
          1: "Кетчуп",
          2: "Майонез",
          3: "Гірчиця",
        },
      },
      28: {
        floorName: "Дитяче харчування",
        departmentName: {
          1: "Пюре",
          2: "Каші",
          3: "Напої",
        },
      },
      29: {
        floorName: "Хлібна лавка",
        departmentName: {
          1: "Хліб",
          2: "Булочки",
          3: "Лаваш",
        },
      },
      30: {
        floorName: "Медова лавка",
        departmentName: {
          1: "Квітковий мед",
          2: "Липовий мед",
          3: "Акацієвий мед",
        },
      },
      31: {
        floorName: "Готові страви",
        departmentName: {
          1: "Страви з м'яса",
          2: "Страви з риби",
          3: "Вегетаріанські страви",
        },
      },
      32: {
        floorName: "Корм для тварин",
        departmentName: {
          1: "Сухий корм",
          2: "Консерви",
          3: "Ласощі",
        },
      },
      33: {
        floorName: "Мармелад",
        departmentName: {
          1: "Яблучний",
          2: "Апельсиновий",
          3: "Вишневий",
        },
      },
    },
    service: {
      1: {
        floorName: "Пральня",
        departmentName: {
          1: "Прання",
          2: "Сушка",
          3: "Відбілювання",
        },
      },
      2: {
        floorName: "Майстерня",
        departmentName: {
          1: "Ключі",
          2: "Замки",
          3: "Двері",
        },
      },
      3: {
        floorName: "Перукарня",
        departmentName: {
          1: "Стрижка",
          2: "Фарбування",
          3: "Укладання",
        },
      },
      4: {
        floorName: "Ательє",
        departmentName: {
          1: "Пошиття",
          2: "Ремонт",
          3: "Підгонка",
        },
      },
      5: {
        floorName: "Ремонт одягу",
        departmentName: {
          1: "Зашивання",
          2: "Заміна блискавок",
          3: "Укорочення",
        },
      },
      6: {
        floorName: "Турагентство",
        departmentName: {
          1: "Підбір турів",
          2: "Бронювання",
          3: "Екскурсії",
        },
      },
      7: {
        floorName: "Манікюрний салон",
        departmentName: {
          1: "Манікюр",
          2: "Нарощування",
          3: "Педикюр",
        },
      },
      8: {
        floorName: "Копі-центр",
        departmentName: {
          1: "Ксерокс",
          2: "Друк",
          3: "Ламінація",
        },
      },
      9: {
        floorName: "Банк",
        departmentName: {
          1: "Відкриття рахунків",
          2: "Кредити",
          3: "Обмін валют",
        },
      },
      10: {
        floorName: "Поліклініка",
        departmentName: {
          1: "Консультації",
          2: "Аналізи",
          3: "Діагностика",
        },
      },
      11: {
        floorName: "Ремонт взуття",
        departmentName: {
          1: "Заміна підошви",
          2: "Ремонт застібок",
          3: "Укріплення",
        },
      },
      12: {
        floorName: "Фотостудія",
        departmentName: {
          1: "Портрети",
          2: "Друк фото",
          3: "Ретуш",
        },
      },
      13: {
        floorName: "Страхування",
        departmentName: {
          1: "Медичне",
          2: "Майно",
          3: "Автостраховка",
        },
      },
      14: {
        floorName: "Консалтинг",
        departmentName: {
          1: "Фінансовий",
          2: "Бізнес",
          3: "Маркетинг",
        },
      },
      15: {
        floorName: "Лізинг",
        departmentName: {
          1: "Авто",
          2: "Обладнання",
          3: "Нерухомість",
        },
      },
      16: {
        floorName: "Експрес-пошта",
        departmentName: {
          1: "Відправлення",
          2: "Посилки",
          3: "Доставка",
        },
      },
      17: {
        floorName: "Стоматологія",
        departmentName: {
          1: "Лікування зубів",
          2: "Чистка",
          3: "Пломбування",
        },
      },
      18: {
        floorName: "Тренінг-центр",
        departmentName: {
          1: "Навчання",
          2: "Семінари",
          3: "Тренінги",
        },
      },
      19: {
        floorName: "Реклама",
        departmentName: {
          1: "Кампанії",
          2: "Макети",
          3: "Зовнішня реклама",
        },
      },
      20: {
        floorName: "Мовна школа",
        departmentName: {
          1: "Курси",
          2: "Іспити",
          3: "Індивідуальні заняття",
        },
      },
      21: {
        floorName: "Ветклініка",
        departmentName: {
          1: "Лікування",
          2: "Вакцинація",
          3: "Стерилізація",
        },
      },
      22: {
        floorName: "IT компанія",
        departmentName: {
          1: "Розробка",
          2: "Техпідтримка",
          3: "Сайти",
        },
      },
      23: {
        floorName: "Домашній персонал",
        departmentName: {
          1: "Домогосподарки",
          2: "Няньки",
          3: "Водії",
        },
      },
      24: {
        floorName: "Обмін валют",
        departmentName: {
          1: "Покупка",
          2: "Продаж",
          3: "Перекази",
        },
      },
      25: {
        floorName: "Тату-салон",
        departmentName: {
          1: "Татуювання",
          2: "Корекція",
          3: "Видалення",
        },
      },
      26: {
        floorName: "Аптека",
        departmentName: {
          1: "Ліки",
          2: "Прилади",
          3: "Косметика",
        },
      },
      27: {
        floorName: "Прокат",
        departmentName: {
          1: "Велосипеди",
          2: "Авто",
          3: "Інструменти",
        },
      },
      28: {
        floorName: "Ландшафт",
        departmentName: {
          1: "Проект",
          2: "Газони",
          3: "Полив",
        },
      },
      29: {
        floorName: "Естетика",
        departmentName: {
          1: "Процедури",
          2: "Пілінг",
          3: "Масаж",
        },
      },
      30: {
        floorName: "Годинники",
        departmentName: {
          1: "Ремонт",
          2: "Батарейки",
          3: "Полірування",
        },
      },
      31: {
        floorName: "Ремонт телефонів",
        departmentName: {
          1: "Екрани",
          2: "Мікросхеми",
          3: "Програмне забезпечення",
        },
      },
      32: {
        floorName: "Нерухомість",
        departmentName: {
          1: "Купівля",
          2: "Оренда",
          3: "Оцінка",
        },
      },
      33: {
        floorName: "Ремонт авто",
        departmentName: {
          1: "Шини",
          2: "Двигун",
          3: "Фарбування",
        },
      },
    },
  },
};

