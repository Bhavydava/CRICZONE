import featuredNewsImg from '../assets/featured_news.png';
import matchActionImg from '../assets/match_action.png';
import stadiumViewImg from '../assets/stadium_view.png';

export const HEADLINE_STORY = {
  id: "headline-1",
  title: "IPL in 2026: The league that begins before the first ball",
  subtitle: "IPL 2026 opens with billion-dollar valuations, talent forged by the league and a nation completely hooked - proof that this league is no longer just cricket, but an ecosystem in itself",
  timeAgo: "3H AGO",
  category: "IPL 2026",
  image: featuredNewsImg,
  content: `
    <p>It is Monday morning in the week that IPL 2026 begins, and a five-star hotel in Bengaluru has given over its ballrooms to cricket. Not to cricket meetings, not to dinners celebrating cricket - to cricket itself, or at least the version of it that exists before a ball is bowled.</p>
    
    <p>The rooms have been booked since the weekend. Inside each one: lights, a camera crew, a stylist, a director with a shot list, and IPL stars in full kit being told where to stand. The players move between ballrooms the way they rotate strike: quick and purposeful. A line or two of dialogue. A product held at a specific angle for a specific number of seconds. Then next door. Some of the A-list Indian stars will get through four shoots before the morning is done. And this is not a Bengaluru quirk; the same drill is playing out in Mumbai, Delhi, Chennai and other IPL cities too. Pre-season practice camp will happen in the evening.</p>

    <p>Sit with that image for a moment, because it contains almost everything you need to know about where this league is. On Tuesday night, the valuations came in. USD 1.78 billion for Royal Challengers Bengaluru. USD 1.6 billion for Rajasthan Royals. Nobody blinked. If anything, there was mild disappointment that the two-billion mark hadn't been breached.</p>

    <p>Consider what that actually means. Seven of the 10 captains leading franchises this season - Rajat Patidar, Ruturaj Gaikwad, Shreyas Iyer, Rishabh Pant, Ajinkya Rahane, Shubman Gill, Riyan Parag - were not in the squad that lifted the T20 World Cup. The team that won could afford to leave them out. When the IPL was conceived, the most optimistic version of its promise was something like this: that India would develop so much talent that selection itself became an embarrassment of choices.</p>

    <p>That promise was always suspected of being a little grandiose. It wasn't. If anything, it undersold what was coming. That this is where IPL 19 begins is not incidental, and not just in the moral sense. The M. Chinnaswamy Stadium is where the league itself began in 2008. For 17 years after that, the caravan opened elsewhere because RCB never won and earned the right to open the season. Until now. There is something almost literary about that, except the literature is complicated.</p>

    <p>In June last year, after RCB won their first title, crowds poured onto the streets of Bengaluru to celebrate with the winning team. Eleven people died in a stampede outside the stadium. They were not watching cricket. They were celebrating what the IPL had spent nearly two decades telling them was worth celebrating, worth everything. They came out because they were happy. And they did not go home.</p>

    <p>A plaque was unveiled at the stadium two days ago. Eleven seats will be kept empty in their honour. The famous ol' stadium of Indian cricket has been a hive of construction activity even 24 hours out.</p>
  `
};

export const ESSENTIAL_READS = [
  {
    id: "essential-1",
    title: "'Second season will test them mentally' - Shashank on Sooryavanshi, Arya",
    timeAgo: "MARCH 28, 2026",
    category: "IPL 2026",
    image: matchActionImg,
    content: `
      <p>Shashank Singh believes the upcoming season will be a significant mental test for young stars like Sooryavanshi and Arya. After a breakout first season, the pressure of expectations and more intense scouting from opponents will require a stronger mental approach.</p>
    `
  },
  {
    id: "essential-2",
    title: "IPL Pulse: Billion-dollar teams, broken bowlers, flowing hair",
    timeAgo: "MARCH 28, 2026",
    category: "IPL 2026",
    image: stadiumViewImg,
    content: `
      <p>The latest edition of IPL Pulse dives into the staggering billion-dollar valuations of franchises, the physical toll on fast bowlers in the modern game, and the iconic styles defining the 2026 season.</p>
    `
  },
  {
    id: "essential-3",
    title: "MS Dhoni likely to miss first two weeks of IPL 2026",
    timeAgo: "MARCH 28, 2026",
    category: "IPL 2026",
    image: featuredNewsImg,
    content: `
      <p>CSK fans face a nervous wait as reports suggest MS Dhoni might miss the opening two weeks of the 2026 season due to a minor muscle strain. The veteran keeper-batsman is currently undergoing rehabilitation.</p>
    `
  },
  {
    id: "essential-4",
    title: "Australia go 1-0 up with comfortable win despite Stafanie Taylor century",
    timeAgo: "MARCH 28, 2026",
    category: "WOMEN'S SERIES",
    image: matchActionImg,
    content: `
      <p>Australia took a 1-0 lead in the series with a dominant performance. Despite a valiant century from Stafanie Taylor, the Australian bowling unit held their nerve to secure a comfortable victory.</p>
    `
  }
];

export const EXTENDED_BULLETIN_DATA = [
  {
    id: "extended-1",
    title: "Kolkata Knight Riders: A rebuild reliant on availability and...",
    timeAgo: "20H AGO",
    category: "IPL 2026",
    image: featuredNewsImg,
    content: `
      <p>KKR's strategy for the 2026 season hinges on the availability of their key international players. The team has undergone a significant rebuild, focusing on versatile all-rounders and a strong core of local talent.</p>
    `
  },
  {
    id: "extended-2",
    title: "Connor Esterhuizen takes his chance",
    timeAgo: "22H AGO",
    category: "SOUTH AFRICA TOUR OF NEW ZEALAND, 2026",
    image: matchActionImg,
    content: `
      <p>South African youngster Connor Esterhuizen has made a massive impact during the ongoing tour of New Zealand. His aggressive batting at the top of the order has provided South Africa with the momentum they needed in the T20 series.</p>
    `
  },
  {
    id: "extended-3",
    title: "Mumbai Indians: #6 in 2026?",
    timeAgo: "22H AGO",
    category: "IPL 2026",
    image: stadiumViewImg,
    content: `
      <p>Mumbai Indians are hunting for their sixth IPL title in 2026. After a disappointing previous season, the five-time champions have revamped their coaching staff and added fresh power to their middle order.</p>
    `
  }
];

export const ALL_NEWS = [
  HEADLINE_STORY,
  ...ESSENTIAL_READS,
  ...EXTENDED_BULLETIN_DATA
];
