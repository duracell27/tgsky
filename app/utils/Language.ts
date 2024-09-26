export type LanguageKeys = keyof typeof Languages;

export const Languages = {
  en: {
    welcomePage: {
      title: "Build the skyscraper of your dreams and make your residents happy!",
      subTitle: "‘Skyscrapers’ is a completely new, exciting, and unique online game.",
      welcomeUser: "Hi: ",
      buttonText: 'Let me in'
    },
    menuSection: {
      profile: 'My Profile',
      city: "My City",
      shop: "Shop",
      human: "Residents",
      rating: "Top",
      payment: "Bucks"
    },
    userStats: {
      lvl: 'level'
    }
  },
  uk: {
    welcomePage: {
      title: "Побудуй хмарочос мрії та зроби своїх мешканців щасливими!",
      subTitle: "«Хмарочоси» — абсолютно нова, захоплива та ні на що не схожа онлайн-гра.",
      welcomeUser: "Привіт: ",
      buttonText: 'Увійти'
    },
    menuSection: {
      profile: 'Мій профіль',
      city: "Моє місто",
      shop:"Магазин",
      human: "Жителі",
      rating: "Найкращі",
      payment: "Бакси"
    },
    userStats: {
      lvl: 'рівень'
    }
  },
};
