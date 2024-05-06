// types
import { comment, linkitem } from "@/app/types";

// React Icon
import { FaHome } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { FaUserFriends } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { SlUserFemale } from "react-icons/sl";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

// header nav items
export const navItems: linkitem[] = [
  { label: "home", link: "", icon: FaHome },
  { label: "contact us", link: "contact", icon: MdMessage },
  { label: "about us", link: "about", icon: FaUserFriends },
  { label: "services", link: "services", icon: GrServices },
];

// footer 

// social links
export const socialLinks: linkitem[] = [
  {
    label: "facebook",
    link: "https://www.facebook.com/",
    // icon: "facebook",
    icon: FaFacebook,
  },
  {
    label: "whatsApp",
    link: "https://www.whatsapp.com/",
    // icon: "whatsapp",
    icon: FaWhatsapp,
  },
  {
    label: "instagram",
    link: "https://www.instagram.com/",
    // icon: "instagram",
    icon: FaInstagram
    ,
  },
];

// comments
export const comments: comment[] = [

  {
    name: "ahmed",
    comment: "I highly recommend this business",
    icon: CiUser
  },
  {
    name: "aya",
    comment: "Their customer service is second to none",
    icon: SlUserFemale
  }
  ,
  {
    name: "abdallah",
    comment: "The product quality is consistently outstanding, exceeding my expectations every time",
    icon: CiUser
  }
];

export const serCards = [
  {
    title: "locate",
    icon: FaMapMarkerAlt,
    desc: "search & locate your city",
  },
  {
    title: "gPS",
    icon: MdGpsFixed,
    desc: "get your current location",
  },
  {
    title: "weather",
    icon: TiWeatherPartlySunny,
    desc: "know the weather in your city",
  },
  {
    title: "timeZone",
    icon: MdOutlineAccessTimeFilled,
    desc: "descover local time zones of another countires",
  },
];

// countries
export const countries = [
  {
    id: 1,
    name: "egypt",
    city: "cairo",
    api: "cairo",
    desc: `Egypt, country located in the northeastern corner of Africa.
    Egypt’s heartland, the Nile River valley and delta, was the
    home of one of the principal civilizations of the ancient
    Middle East and, like Mesopotamia farther east, was the site
    of one of the world’s earliest urban and literate societies.
    Pharaonic Egypt thrived for some 3,000 years`,
    color: "#e01a4f",
    x: 54.3,
    y: 30.7
  },
  {
    id: 2,
    name: "palestine",
    city: "Beit al-Maqdis",
    api: "jerusalem",
    desc: `Jerusalem has been a prized possession and much fought over. Archaeological work in the area suggests that the city was inhabited as far back as 4000BC Its earliest known name may be Jebusite, the translation of a Canaanite town. Together with the later arriving Philistines, they are believed to be the earliest known ancestors to present day Palestinians News The history of Jerusalem The history of Jerusalem is the history of a living city perhaps unlike that of any other in the world. Jerusalem has been a prized possession and much fought over Published On 9 Dec 2003 9 Dec 2003 Save articles to read later and create your own reading list. History A capital question UN resolutions The old city of Jerusalem Jerusalem (al-Quds in Arabic) represents the heart of three world religions: a holy place for Islam, Judaism and Christianity, yet it is also a dangerous flashpoint to one of the world’s most intractable conflicts, the Palestine-Israel issue. Jerusalem is Islam’s third holiest site and home to the al-Aqsa mosque (Muslims worldwide faced this mosque in prayer before the direction was changed to the mosque in Makka). It also holds the Dome of the Rock, where the Prophet Muhammad ascended on his night journey to heaven. The al-Haram al-Sharif, or the Noble Sanctuary as it is also called, is held by Jews and Muslims alike to be the place where the Prophet Ibrahim was prevented from sacrificing his son Ismail (or Isaac to Christians and Jews) by God’s intervention`,
    color: "#53b3cb",
    x: 56.3,
    y: 25.7,
  },
  {
    id: 3,
    name: "al andalus",
    city: "córdoba",
    api: "madrid",
    desc: `Al-Andalus was the Muslim-ruled area of the Iberian Peninsula, encompassing modern-day Gibraltar, Portugal, Spain, and Southern France. The term refers to the Islamic states that governed these territories between 711 and 1492. At its zenith, Al-Andalus extended over most of the peninsula and parts of present-day southern France (Septimania) under Umayyad rule. The region's boundaries fluctuated due to conquests, a process often termed the Reconquista in Western historiography, eventually contracting southward to the Emirate of Granada.
    During the 10th century, Al-Andalus fostered a significant number of accomplished physicians. Many traveled to Baghdad, where they studied Greek medical texts with renowned translators Thabit ibn Qurra and Thabit ibn Sinan. Upon their return, they were accommodated in the governmental complex of Madinat al-Zahra. Ahmad ibn Harran, one of these physicians, was appointed to oversee a dispensary offering free medical care and food to impoverished patients`,
    color: "#f9c22e",
    x: 45.3,
    y: 20.7,
  },
  {
    id: 4,
    name: "the arabian peninsula",
    city: "makkah al-Mukarramah",
    api: "riyadh",
    desc: `Makkah is the capital of Mecca Province in western Saudi Arabia and the holiest city in Islam. It is located 70 km (43 mi) inland from Jeddah on the Red Sea, in a narrow valley 277 m (909 ft) above sea level. Its last recorded population was 2,385,509 in 2022, with a metropolitan population of 2.4 million, making it the third-most populated city in Saudi Arabia after Riyadh and Jeddah. Around 44.5% of the population are Saudi citizens, and approximately 55.5% are foreigners from other Muslim countries. Pilgrims more than triple the population number every year during the Ḥajj pilgrimage, observed in the twelfth Hijri month of Dhūl-Ḥijjah. Mecca welcomed over 10.8 million international visitors in 2023, making it one of the 10 most visited cities in the world. Mecca is revered in Islam as the birthplace of the Islamic prophet Muhammad. The Hira cave atop the Jabal al-Nur ("Mountain of Light"), just outside the city, is where Muslims believe the Quran was first revealed to Muhammad. Visiting Mecca for the Ḥajj is an obligation upon all able Muslims. The Great Mosque of Mecca, known as the Masjid al-Haram, is home to the Ka'bah, believed by Muslims to have been built by Abraham and Ishmael. It is Islam's holiest site and the direction of prayer (qibla) for all Muslims worldwide`,
    color: "seagreen",
    x: 59.3,
    y: 32.7,
  },
  {
    id: 5,
    name: "iraq",
    city: "baghdad",
    api: "baghdad",
    desc: `Ancient Middle Eastern city. The city’s ruins are located about 55 mi (89 km) south of Baghdad, near the modern city of Al-Ḥillah, Iraq. Babylon was one of the most famous cities in antiquity. Probably first settled in the 3rd millennium BC, it came under the rule of the Amorite kings around 2000 BC. It became the capital of Babylonia and was the chief commercial city of the Tigris and Euphrates river system. Destroyed by Sennacherib in 689 BC, it was later rebuilt. It attained its greatest glory as capital of the Neo-Babylonian empire under Nebuchadrezzar II (r. 605–c. 561 BC). Alexander the Great, who took the city in 331 BC, died there. Evidence of its topography comes from excavations, cuneiform texts, and descriptions by the Greek historian Herodotus. Most of the ruins are from the city built by Nebuchadrezzar. The largest city in the world at the time, it contained many temples, including the great temple of Marduk with its associated ziggurat, which was apparently the basis for the story of the Tower of Babel. The Hanging Gardens, a simulated hill of vegetation-clad terracing, was one of the Seven Wonders of the World`,
    color: "#575cdf",
    x: 59.3,
    y: 25.7,
  },
];