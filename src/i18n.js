import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      languageName: "English",

      Member: {
        heading: "A fitnessstudio that fits the whole family",
        text: "With us, you as a parent get time to take care of yourself and your body, while your child can play in a safe environment.",
      },

      SectionTwo: {
        accessible: "Accessible for everyone",
        thousandsOfClasses: "Thousands of classes",
        safeAndEducational: "Safe and educational",
        hundredsOfCenters: "Hundreds of centers",
        ourVision: "Our vision",
        exploreClasses: "Explore classes",
        aboutMiniFit: "About MiniFit",
        findYourCenter: "Find your center",
      },

      MiniFitSwiper: {
        heading: "What is MiniFit?",
      },
      MiniFitSwiperCard: {
        cardText:
          "MiniFit has been a fantastic experience for our kids. They love it!",
        cardAuthor: "Anna and Erik, Parents",
      },

      LastSection: {
        heading: "We make families healthier and happier!",
        text: "Welcome to the world's most inclusive fitness center! We are proud of our wide and varied training offer, so that you have access to what you need to feel mastery, progress, and can take care of your physical and mental health. We give you all the tools you need to reach your goals, while your kids can play and develop.",
        welcomeText: "Everyone is welcome at FamilyFitness!",
      },
      Buttons: {
        buttonText: "",
      },

      Footer: {
        link1: "About Us",
        link2: "Find your center",
        link3: "Costumer support",
        link4: "Membership",
      },
    },
  },

  no: {
    translation: {
      languageName: "Norwegian",
      Member: {
        heading: "Et treningssenter som passer for hele familien",
        text: "Med oss får du som forelder tid til å ta vare på deg selv og kroppen din, mens barnet ditt kan leke i et trygt miljø.",
      },
      SectionTwo: {
        accessible: "Tilgjengelig for alle",
        thousandsOfClasses: "Tusenvis av klasser",
        safeAndEducational: "Trygt og pedagogisk",
        hundredsOfCenters: "Hundrevis av sentre",
        ourVision: "Vår visjon",
        exploreClasses: "Utforsk klasser",
        aboutMiniFit: "Om MiniFit",
        findYourCenter: "Finn ditt senter",
      },

      MiniFitSwiper: {
        heading: "Hva er MiniFit?",
      },
      MiniFitSwiperCard: {
        cardText:
          "MiniFit har vært en fantastisk opplevelse for barna våre. De elsker det!",
        cardAuthor: "Anna og Erik, Foreldre",
      },

      LastSection: {
        heading: "Vi gjør familier friskere og lykkeligere!",
        text: "Velkommen til verdens mest inkluderende treningssenter! Vi er stolte av vårt brede og varierte treningsopplegg, slik at du har tilgang til det du trenger for å oppnå mestring, fremgang og ta vare på din fysiske og mentale helse. Vi gir deg alle verktøyene du trenger for å nå dine mål, mens barna dine kan leke og utvikle seg.",
        welcomeText: "Alle er velkomne til FamilyFitness!",
      },
      Buttons: {
        buttonText: "",
      },

      Footer: {
        link1: "Om oss",
        link2: "Finn ditt senter",
        link3: "Kundestøtte",
        link4: "Medlemskap",
      },
    },
  },

  sv: {
    translation: {
      languageName: "Swedish",
      Member: {
        heading: "Ett träningscenter som passar hela familjen",
        text: "Med oss får du som förälder tid att ta hand om dig själv och din kropp, medan ditt barn kan leka i en trygg miljö.",
      },

      SectionTwo: {
        accessible: "Tillgängligt för alla",
        thousandsOfClasses: "Tusentals klasser",
        safeAndEducational: "Säkert och utbildande",
        hundredsOfCenters: "Hundratals center",
        ourVision: "Vår vision",
        exploreClasses: "Utforska klasser",
        aboutMiniFit: "Om MiniFit",
        findYourCenter: "Hitta ditt center",
      },

      MiniFitSwiper: {
        heading: "Vad är MiniFit?",
      },
      MiniFitSwiperCard: {
        cardText:
          "MiniFit har varit en fantastisk upplevelse för våra barn. De älskar det!",
        cardAuthor: "Anna och Erik, Föräldrar",
      },

      LastSection: {
        heading: "Vi gör familjer friskare och lyckligare!",
        text: "Välkommen till världens mest inkluderande träningscenter! Vi är stolta över vårt breda och varierade träningsutbud, så att du har tillgång till det du behöver för att känna behärskning, framsteg och ta hand om din fysiska och mentala hälsa. Vi ger dig alla verktyg du behöver för att nå dina mål, medan dina barn kan leka och utvecklas.",
        welcomeText: "Alla är välkomna till FamilyFitness!",
      },
      Buttons: {
        buttonText: "",
      },

      Footer: {
        link1: "Om oss",
        link2: "Hitta ditt center",
        link3: "Kundsupport",
        link4: "Medlemskap",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
