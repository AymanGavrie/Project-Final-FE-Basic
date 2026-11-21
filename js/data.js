/* ------------------------------------------------------------
   1. HISTORY ERAS (history.html timeline)
   ------------------------------------------------------------ */
const eras = [
  {
    id: "newton-heath",
    range: "1878–1902",
    title: "Newton Heath",
    badge: "1878",
    image: "assets/images/united-trinity.jpg",
    imageAlt: "The United Trinity statue outside Old Trafford.",
    caption: "The United Trinity statue outside Old Trafford, honouring George Best, Denis Law and Bobby Charlton.",
    story: [
      "Formed in 1878 by workers from the Lancashire and Yorkshire Railway at Newton Heath, the team played as Newton Heath LYR.",
      "By 1902 the club was close to bankruptcy. John Henry Davies rescued it, and the club was renamed Manchester United.",
    ],
  },
  {
    id: "busby-munich",
    range: "1945–1969",
    title: "Busby Babes & Munich",
    badge: "1958",
    image: "assets/images/munich-memorial.jpg",
    imageAlt: "The Munich clock at Old Trafford, dated 6 February 1958.",
    caption: "The Munich clock on the stadium wall, dated 6 February 1958.",
    story: [
      "Sir Matt Busby built a young side around homegrown players, later called the Busby Babes. They won back-to-back league titles in 1956 and 1957.",
      "On 6 February 1958 the team flying home from a European Cup tie crashed at Munich. Eight players died, along with staff and journalists.",
      "Busby survived and rebuilt. In 1968 United beat Benfica 4–1 at Wembley to win the European Cup.",
    ],
  },
  {
    id: "ferguson",
    range: "1986–2013",
    title: "Sir Alex Ferguson Era",
    badge: "1993",
    image: "assets/images/old-trafford-hero.jpg",
    imageAlt: "The stands at Old Trafford beneath the Sir Alex Ferguson Stand sign.",
    caption: "The Sir Alex Ferguson Stand, named after the manager who led the club for 26 years.",
    story: [
      "Alex Ferguson arrived in 1986. In 1993 the club ended a 26-year wait for the league title.",
      "The Class of '92 (Beckham, Giggs, Scholes, Neville, Butt and the Neville brothers) came through the academy together, and the 1999 Treble followed.",
      "Ferguson won 13 Premier League titles before retiring in 2013.",
    ],
  },
  {
    id: "modern",
    range: "2013–Present",
    title: "Modern Era",
    badge: "2017",
    image: "assets/images/old-trafford-pitch.jpg",
    imageAlt: "An aerial view of Old Trafford with the pitch and stands.",
    caption: "The stadium today, still the home of the club.",
    story: [
      "After Ferguson, the club changed managers several times and went through a difficult rebuilding period.",
      "The club won the 2016–17 UEFA Europa League in Stockholm, and later added domestic cups, including the 2023–24 FA Cup.",
      "The next chapter is still being written.",
    ],
  },
];

/* ------------------------------------------------------------
   2. CLUB LEGENDS (index.html spotlight)
   ------------------------------------------------------------ */
const legends = [
  {
    name: "Sir Matt Busby",
    era: "1945–1969",
    image: "assets/images/busby-team-1957.jpg",
    imageAlt: "The 1957 Manchester United squad, with Matt Busby (manager) at the right of the back row.",
    credit: "Team photo, 1957. Public domain.",
    achievements: ["Manager for over two decades", "European Cup winner, 1968", "Rebuilt the club after Munich"],
  },
  {
    name: "Sir Bobby Charlton",
    era: "1956–1973",
    image: "assets/images/legends-charlton.jpg",
    imageAlt: "Portrait of Bobby Charlton in 1966.",
    credit: "Photo by Ron Kroon / Anefo. CC0.",
    achievements: ["249 goals for United", "1966 World Cup winner with England", "European Cup winner, 1968"],
  },
  {
    name: "Sir Alex Ferguson",
    era: "1986–2013",
    image: "assets/images/legends-ferguson.jpg",
    imageAlt: "Portrait of Alex Ferguson.",
    credit: "Photo by Austin Osuide. CC BY 2.0.",
    achievements: ["13 Premier League titles", "1999 Treble", "Two Champions League wins"],
  },
  {
    name: "Eric Cantona",
    era: "1992–1997",
    image: "assets/images/legends-cantona.jpg",
    imageAlt: "Eric Cantona at a public event in 2011.",
    credit: "Photo by James Boyes. CC BY 2.0.",
    achievements: ["Four league titles", "Two FA Cups", "Five seasons at Old Trafford"],
  },
];

/* ------------------------------------------------------------
   3. ICONIC MATCHES (history.html)
   ------------------------------------------------------------ */
const matches = [
  {
    title: "1968 European Cup Final",
    date: "29 May 1968",
    venue: "Wembley Stadium, London",
    score: "4–1",
    opponent: "Benfica",
    summary: "The first English club to win the European Cup. George Best, Brian Kidd and Bobby Charlton scored. Busby had waited 10 years for this.",
  },
  {
    title: "1999 UEFA Champions League Final",
    date: "26 May 1999",
    venue: "Camp Nou, Barcelona",
    score: "2–1",
    opponent: "Bayern Munich",
    summary: "Two goals in injury time turned the match. Football fans still quote the commentary from that night.",
  },
  {
    title: "2008 UEFA Champions League Final",
    date: "21 May 2008",
    venue: "Luzhniki Stadium, Moscow",
    score: "1–1 (6–5 pens)",
    opponent: "Chelsea",
    summary: "The first all-English final. United won on penalties after a goalless extra time, with Edwin van der Sar saving from Nicolas Anelka.",
  },
];

/* ------------------------------------------------------------
   4. 1998/99 TREBLE (trophies.html feature)
   ------------------------------------------------------------ */
const treble = [
  {
    date: "Mid May 1999",
    text: "Premier League title sealed on the last weeks of the season.",
  },
  {
    date: "22 May 1999",
    text: "FA Cup final at Wembley. United beat Newcastle United 2–0.",
  },
  {
    date: "26 May 1999",
    text: "Champions League final at Camp Nou. Two injury-time goals beat Bayern Munich 2–1.",
  },
];

/* ------------------------------------------------------------
   5. TROPHY CABINET (trophies.html)
   category: "league" | "domestic-cups" | "european"
   seasons: { year, manager } for each winning season.
   ------------------------------------------------------------ */
const trophies = [
  {
    id: "league",
    name: "First Division / Premier League",
    category: "league",
    count: 20,
    description: "The top-flight league title. United have been champions 20 times, the most of any English club.",
    seasons: [
      { year: "1907–08", manager: "Ernest Mangnall" },
      { year: "1910–11", manager: "Ernest Mangnall" },
      { year: "1951–52", manager: "Matt Busby" },
      { year: "1955–56", manager: "Matt Busby" },
      { year: "1956–57", manager: "Matt Busby" },
      { year: "1964–65", manager: "Matt Busby" },
      { year: "1966–67", manager: "Matt Busby" },
      { year: "1992–93", manager: "Alex Ferguson" },
      { year: "1993–94", manager: "Alex Ferguson" },
      { year: "1995–96", manager: "Alex Ferguson" },
      { year: "1996–97", manager: "Alex Ferguson" },
      { year: "1998–99", manager: "Alex Ferguson" },
      { year: "1999–2000", manager: "Alex Ferguson" },
      { year: "2000–01", manager: "Alex Ferguson" },
      { year: "2002–03", manager: "Alex Ferguson" },
      { year: "2006–07", manager: "Alex Ferguson" },
      { year: "2007–08", manager: "Alex Ferguson" },
      { year: "2008–09", manager: "Alex Ferguson" },
      { year: "2010–11", manager: "Alex Ferguson" },
      { year: "2012–13", manager: "Alex Ferguson" },
    ],
  },
  {
    id: "fa-cup",
    name: "FA Cup",
    category: "domestic-cups",
    count: 13,
    description: "England's oldest knockout competition, first played in 1871–72.",
    seasons: [
      { year: "1908–09", manager: "Ernest Mangnall" },
      { year: "1947–48", manager: "Matt Busby" },
      { year: "1962–63", manager: "Matt Busby" },
      { year: "1976–77", manager: "Tommy Docherty" },
      { year: "1982–83", manager: "Ron Atkinson" },
      { year: "1984–85", manager: "Ron Atkinson" },
      { year: "1989–90", manager: "Alex Ferguson" },
      { year: "1993–94", manager: "Alex Ferguson" },
      { year: "1995–96", manager: "Alex Ferguson" },
      { year: "1998–99", manager: "Alex Ferguson" },
      { year: "2003–04", manager: "Alex Ferguson" },
      { year: "2015–16", manager: "Louis van Gaal" },
      { year: "2023–24", manager: "Erik ten Hag" },
    ],
  },
  {
    id: "league-cup",
    name: "EFL / League Cup",
    category: "domestic-cups",
    count: 6,
    description: "The League Cup, founded in 1960 and now known as the EFL Cup.",
    seasons: [
      { year: "1991–92", manager: "Alex Ferguson" },
      { year: "2005–06", manager: "Alex Ferguson" },
      { year: "2008–09", manager: "Alex Ferguson" },
      { year: "2009–10", manager: "Alex Ferguson" },
      { year: "2016–17", manager: "José Mourinho" },
      { year: "2022–23", manager: "Erik ten Hag" },
    ],
  },
  {
    id: "community-shield",
    name: "FA Community / Charity Shield",
    category: "domestic-cups",
    count: 21,
    description: "Played between the league champions and the FA Cup winners. United have won it 17 times outright and shared it 4 times.",
    seasons: [], // Season list not yet added. Add { year, manager } objects here.
    note: "Season list to be added.",
  },
  {
    id: "european-cup",
    name: "European Cup / UEFA Champions League",
    category: "european",
    count: 3,
    description: "Europe's premier club competition. United won it in 1968, 1999 and 2008.",
    seasons: [
      { year: "1967–68", manager: "Matt Busby" },
      { year: "1998–99", manager: "Alex Ferguson" },
      { year: "2007–08", manager: "Alex Ferguson" },
    ],
  },
  {
    id: "europa-league",
    name: "UEFA Europa League",
    category: "european",
    count: 1,
    description: "Won in 2017 in Stockholm, beating Ajax 2–0.",
    seasons: [{ year: "2016–17", manager: "José Mourinho" }],
  },
  {
    id: "cup-winners-cup",
    name: "European Cup Winners' Cup",
    category: "european",
    count: 1,
    description: "Won in 1991 in Rotterdam, beating Barcelona 2–1.",
    seasons: [{ year: "1990–91", manager: "Alex Ferguson" }],
  },
  {
    id: "super-cup",
    name: "European Super Cup",
    category: "european",
    count: 1,
    description: "Contested between the Champions League and Cup Winners' Cup winners.",
    seasons: [{ year: "1991", manager: "Alex Ferguson" }],
  },
  {
    id: "intercontinental",
    name: "Intercontinental Cup",
    category: "european",
    count: 1,
    description: "Played between the European and South American champions. United won it in Tokyo in 1999.",
    seasons: [{ year: "1999", manager: "Alex Ferguson" }],
  },
  {
    id: "club-world-cup",
    name: "FIFA Club World Cup",
    category: "european",
    count: 1,
    description: "The world club championship. United won it in Yokohama in 2008.",
    seasons: [{ year: "2008", manager: "Alex Ferguson" }],
  },
];

/* Summary numbers used on trophies.html */
const honourTotals = {
  total: 68,
  domestic: 60, // league 20 + FA Cup 13 + League Cup 6 + Community Shield 21
  europeanAndWorld: 8, // European Cup 3 + Europa League 1 + Cup Winners' Cup 1 + Super Cup 1 + Intercontinental 1 + Club World Cup 1
};
