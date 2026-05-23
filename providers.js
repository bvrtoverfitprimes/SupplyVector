/* =========================================================
   Supply Vector — Apparel providers + optimization
   ========================================================= */

window.SV_PROVIDERS = {
  'Cotton fabric': [
    { name: 'Arvind Limited',         city: 'Ahmedabad, IN', loc: [23.03,  72.58], scores: { cost: 75, speed: 60, resilience: 70, sustain: 70, ethics: 75, tariffs: 60, emissions: 60, supplier: 78, geo: 70 } },
    { name: 'Welspun India',          city: 'Anjar, IN',     loc: [23.13,  70.04], scores: { cost: 78, speed: 65, resilience: 72, sustain: 65, ethics: 72, tariffs: 60, emissions: 58, supplier: 75, geo: 70 } },
    { name: 'Esquel Group',           city: 'Guilin, CN',    loc: [25.27, 110.29], scores: { cost: 70, speed: 80, resilience: 60, sustain: 75, ethics: 65, tariffs: 35, emissions: 65, supplier: 70, geo: 45 } },
    { name: 'Texhong Textile',        city: 'Shanghai, CN',  loc: [31.23, 121.47], scores: { cost: 82, speed: 78, resilience: 55, sustain: 55, ethics: 55, tariffs: 30, emissions: 55, supplier: 62, geo: 40 } },
    { name: 'Naveena Group',          city: 'Karachi, PK',   loc: [24.86,  67.01], scores: { cost: 86, speed: 50, resilience: 50, sustain: 55, ethics: 60, tariffs: 65, emissions: 55, supplier: 52, geo: 35 } },
    { name: 'Vardhman Textiles',      city: 'Ludhiana, IN',  loc: [30.90,  75.85], scores: { cost: 76, speed: 65, resilience: 72, sustain: 70, ethics: 75, tariffs: 60, emissions: 62, supplier: 78, geo: 70 } },
    { name: 'Cone Denim',             city: 'Greensboro, US',loc: [36.07, -79.79], scores: { cost: 45, speed: 90, resilience: 88, sustain: 75, ethics: 90, tariffs: 95, emissions: 75, supplier: 85, geo: 95 } },
  ],
  'Polyester blends': [
    { name: 'Toray Industries',       city: 'Tokyo, JP',     loc: [35.68, 139.69], scores: { cost: 50, speed: 80, resilience: 88, sustain: 80, ethics: 88, tariffs: 70, emissions: 75, supplier: 88, geo: 92 } },
    { name: 'Reliance Industries',    city: 'Mumbai, IN',    loc: [19.08,  72.88], scores: { cost: 75, speed: 65, resilience: 70, sustain: 60, ethics: 68, tariffs: 65, emissions: 55, supplier: 75, geo: 70 } },
    { name: 'Hyosung TNC',            city: 'Seoul, KR',     loc: [37.57, 126.98], scores: { cost: 60, speed: 78, resilience: 82, sustain: 78, ethics: 82, tariffs: 70, emissions: 70, supplier: 82, geo: 82 } },
    { name: 'Far Eastern New Century',city: 'Taipei, TW',    loc: [25.04, 121.56], scores: { cost: 65, speed: 75, resilience: 75, sustain: 72, ethics: 75, tariffs: 60, emissions: 68, supplier: 76, geo: 60 } },
    { name: 'Indorama Ventures',      city: 'Bangkok, TH',   loc: [13.75, 100.50], scores: { cost: 72, speed: 70, resilience: 72, sustain: 70, ethics: 72, tariffs: 65, emissions: 65, supplier: 72, geo: 72 } },
    { name: 'Sinopec',                city: 'Shanghai, CN',  loc: [31.23, 121.47], scores: { cost: 88, speed: 75, resilience: 55, sustain: 45, ethics: 50, tariffs: 30, emissions: 45, supplier: 60, geo: 38 } },
  ],
  'Dyes & finishing': [
    { name: 'Huntsman Textile Effects',city: 'Singapore, SG',loc: [ 1.35, 103.82], scores: { cost: 55, speed: 82, resilience: 85, sustain: 78, ethics: 88, tariffs: 75, emissions: 72, supplier: 86, geo: 92 } },
    { name: 'DyStar Group',           city: 'Singapore, SG', loc: [ 1.35, 103.82], scores: { cost: 60, speed: 78, resilience: 80, sustain: 82, ethics: 82, tariffs: 75, emissions: 78, supplier: 80, geo: 92 } },
    { name: 'Archroma',               city: 'Reinach, CH',   loc: [47.49,   7.59], scores: { cost: 42, speed: 70, resilience: 92, sustain: 92, ethics: 92, tariffs: 75, emissions: 82, supplier: 92, geo: 96 } },
    { name: 'Atul Ltd',               city: 'Valsad, IN',    loc: [20.61,  72.92], scores: { cost: 76, speed: 60, resilience: 68, sustain: 62, ethics: 72, tariffs: 65, emissions: 58, supplier: 72, geo: 68 } },
    { name: 'Kiri Industries',        city: 'Vadodara, IN',  loc: [22.31,  73.18], scores: { cost: 80, speed: 60, resilience: 65, sustain: 60, ethics: 68, tariffs: 65, emissions: 55, supplier: 68, geo: 68 } },
  ],
  'Thread': [
    { name: 'Coats Group',            city: 'Uxbridge, UK',  loc: [51.54,  -0.48], scores: { cost: 60, speed: 78, resilience: 88, sustain: 82, ethics: 92, tariffs: 70, emissions: 75, supplier: 88, geo: 92 } },
    { name: 'American & Efird',       city: 'Mt. Holly, US', loc: [35.30, -81.02], scores: { cost: 55, speed: 88, resilience: 82, sustain: 75, ethics: 88, tariffs: 92, emissions: 72, supplier: 82, geo: 92 } },
    { name: 'Amann Group',            city: 'Bönnigheim, DE',loc: [49.04,   9.10], scores: { cost: 48, speed: 75, resilience: 92, sustain: 88, ethics: 92, tariffs: 70, emissions: 82, supplier: 92, geo: 96 } },
    { name: 'Madeira Garnfabrik',     city: 'Freiburg, DE',  loc: [47.99,   7.85], scores: { cost: 50, speed: 75, resilience: 88, sustain: 85, ethics: 88, tariffs: 70, emissions: 78, supplier: 88, geo: 95 } },
  ],
  'Buttons & fasteners': [
    { name: 'YKK Fastening',          city: 'Tokyo, JP',     loc: [35.68, 139.69], scores: { cost: 50, speed: 88, resilience: 92, sustain: 82, ethics: 92, tariffs: 70, emissions: 78, supplier: 92, geo: 92 } },
    { name: 'KEE Group',              city: 'Hong Kong, HK', loc: [22.32, 114.17], scores: { cost: 72, speed: 82, resilience: 70, sustain: 62, ethics: 70, tariffs: 45, emissions: 62, supplier: 72, geo: 52 } },
    { name: 'Morito Co.',             city: 'Osaka, JP',     loc: [34.69, 135.50], scores: { cost: 55, speed: 82, resilience: 85, sustain: 80, ethics: 88, tariffs: 70, emissions: 72, supplier: 85, geo: 92 } },
    { name: 'Cammeby Buttons',        city: 'Brooklyn, US',  loc: [40.65, -73.95], scores: { cost: 50, speed: 92, resilience: 80, sustain: 72, ethics: 88, tariffs: 95, emissions: 70, supplier: 80, geo: 95 } },
  ],
  'Zippers': [
    { name: 'YKK Zippers',            city: 'Tokyo, JP',     loc: [35.68, 139.69], scores: { cost: 50, speed: 88, resilience: 92, sustain: 82, ethics: 92, tariffs: 70, emissions: 78, supplier: 92, geo: 92 } },
    { name: 'SBS Zipper',             city: 'Quanzhou, CN',  loc: [24.87, 118.68], scores: { cost: 88, speed: 78, resilience: 60, sustain: 50, ethics: 55, tariffs: 30, emissions: 50, supplier: 62, geo: 40 } },
    { name: 'Riri Group',             city: 'Mendrisio, CH', loc: [45.87,   8.98], scores: { cost: 38, speed: 70, resilience: 92, sustain: 92, ethics: 92, tariffs: 75, emissions: 82, supplier: 92, geo: 96 } },
    { name: 'Talon Zippers',          city: 'Atlanta, US',   loc: [33.75, -84.39], scores: { cost: 52, speed: 90, resilience: 82, sustain: 72, ethics: 88, tariffs: 92, emissions: 72, supplier: 82, geo: 92 } },
  ],
  'Woven labels': [
    { name: 'Avery Dennison',         city: 'Mentor, US',    loc: [41.66, -81.34], scores: { cost: 55, speed: 88, resilience: 88, sustain: 82, ethics: 92, tariffs: 92, emissions: 78, supplier: 88, geo: 92 } },
    { name: 'SML Group',              city: 'Hong Kong, HK', loc: [22.32, 114.17], scores: { cost: 72, speed: 82, resilience: 72, sustain: 68, ethics: 72, tariffs: 45, emissions: 62, supplier: 72, geo: 52 } },
    { name: 'Checkpoint Systems',     city: 'Thorofare, US', loc: [39.85, -75.13], scores: { cost: 60, speed: 82, resilience: 82, sustain: 75, ethics: 88, tariffs: 92, emissions: 72, supplier: 82, geo: 92 } },
    { name: 'r-pac International',    city: 'Long Island, US',loc:[40.78, -73.50], scores: { cost: 58, speed: 88, resilience: 80, sustain: 75, ethics: 85, tariffs: 92, emissions: 72, supplier: 82, geo: 92 } },
  ],
  'Hangtags & paper': [
    { name: 'Avery Dennison',         city: 'Mentor, US',    loc: [41.66, -81.34], scores: { cost: 55, speed: 88, resilience: 88, sustain: 82, ethics: 92, tariffs: 92, emissions: 78, supplier: 88, geo: 92 } },
    { name: 'Trimco Group',           city: 'Hong Kong, HK', loc: [22.32, 114.17], scores: { cost: 70, speed: 82, resilience: 72, sustain: 68, ethics: 72, tariffs: 45, emissions: 62, supplier: 72, geo: 52 } },
    { name: 'Paxar',                  city: 'Sayreville, US',loc: [40.45, -74.36], scores: { cost: 60, speed: 82, resilience: 82, sustain: 72, ethics: 88, tariffs: 92, emissions: 72, supplier: 80, geo: 92 } },
  ],
  'Trim & elastic': [
    { name: 'Best Pacific Intl.',     city: 'Dongguan, CN',  loc: [23.02, 113.75], scores: { cost: 82, speed: 78, resilience: 62, sustain: 58, ethics: 62, tariffs: 30, emissions: 58, supplier: 68, geo: 40 } },
    { name: 'Penn Elastic',           city: 'Reading, US',   loc: [40.34, -75.93], scores: { cost: 55, speed: 88, resilience: 82, sustain: 72, ethics: 88, tariffs: 92, emissions: 72, supplier: 82, geo: 92 } },
    { name: 'Sun Hing Industries',    city: 'Hong Kong, HK', loc: [22.32, 114.17], scores: { cost: 72, speed: 78, resilience: 72, sustain: 62, ethics: 68, tariffs: 45, emissions: 62, supplier: 68, geo: 52 } },
    { name: 'Stretchline',            city: 'Colombo, LK',   loc: [ 6.93,  79.86], scores: { cost: 80, speed: 70, resilience: 65, sustain: 68, ethics: 72, tariffs: 55, emissions: 62, supplier: 70, geo: 60 } },
  ],
  'Shipping cartons': [
    { name: 'Smurfit Westrock',       city: 'Dublin, IE',    loc: [53.35,  -6.26], scores: { cost: 60, speed: 80, resilience: 88, sustain: 92, ethics: 92, tariffs: 70, emissions: 88, supplier: 88, geo: 96 } },
    { name: 'International Paper',    city: 'Memphis, US',   loc: [35.15, -90.05], scores: { cost: 65, speed: 88, resilience: 88, sustain: 75, ethics: 88, tariffs: 92, emissions: 72, supplier: 85, geo: 92 } },
    { name: 'Nine Dragons Paper',     city: 'Dongguan, CN',  loc: [23.02, 113.75], scores: { cost: 88, speed: 78, resilience: 65, sustain: 60, ethics: 60, tariffs: 30, emissions: 55, supplier: 65, geo: 40 } },
    { name: 'Mondi Group',            city: 'Vienna, AT',    loc: [48.21,  16.37], scores: { cost: 55, speed: 80, resilience: 88, sustain: 88, ethics: 92, tariffs: 70, emissions: 82, supplier: 88, geo: 96 } },
  ],
};

// Curated city dataset for autocomplete (origin & destination)
window.SV_CITIES = [
  ['Los Angeles, US',    34.05, -118.24],
  ['New York, US',       40.71,  -74.01],
  ['Chicago, US',        41.88,  -87.63],
  ['Houston, US',        29.76,  -95.37],
  ['Dallas, US',         32.78,  -96.80],
  ['Atlanta, US',        33.75,  -84.39],
  ['Miami, US',          25.76,  -80.19],
  ['Seattle, US',        47.61, -122.33],
  ['San Francisco, US',  37.77, -122.42],
  ['Toronto, CA',        43.65,  -79.38],
  ['Mexico City, MX',    19.43,  -99.13],
  ['São Paulo, BR',     -23.55,  -46.63],
  ['Lima, PE',          -12.05,  -77.04],
  ['London, UK',         51.51,   -0.13],
  ['Manchester, UK',     53.48,   -2.24],
  ['Rotterdam, NL',      51.92,    4.48],
  ['Antwerp, BE',        51.22,    4.40],
  ['Hamburg, DE',        53.55,    9.99],
  ['Berlin, DE',         52.52,   13.40],
  ['Paris, FR',          48.86,    2.35],
  ['Madrid, ES',         40.42,   -3.70],
  ['Milan, IT',          45.46,    9.19],
  ['Vienna, AT',         48.21,   16.37],
  ['Warsaw, PL',         52.23,   21.01],
  ['Istanbul, TR',       41.01,   28.97],
  ['Dubai, AE',          25.20,   55.27],
  ['Mumbai, IN',         19.08,   72.88],
  ['Delhi, IN',          28.61,   77.21],
  ['Bangalore, IN',      12.97,   77.59],
  ['Dhaka, BD',          23.81,   90.41],
  ['Karachi, PK',        24.86,   67.01],
  ['Colombo, LK',         6.93,   79.86],
  ['Bangkok, TH',        13.75,  100.50],
  ['Ho Chi Minh, VN',    10.82,  106.63],
  ['Hanoi, VN',          21.03,  105.85],
  ['Singapore, SG',       1.35,  103.82],
  ['Kuala Lumpur, MY',    3.14,  101.69],
  ['Jakarta, ID',        -6.21,  106.85],
  ['Manila, PH',         14.60,  120.98],
  ['Hong Kong, HK',      22.32,  114.17],
  ['Shenzhen, CN',       22.54,  114.06],
  ['Guangzhou, CN',      23.13,  113.26],
  ['Shanghai, CN',       31.23,  121.47],
  ['Beijing, CN',        39.90,  116.41],
  ['Taipei, TW',         25.04,  121.56],
  ['Seoul, KR',          37.57,  126.98],
  ['Tokyo, JP',          35.68,  139.69],
  ['Osaka, JP',          34.69,  135.50],
  ['Sydney, AU',        -33.87,  151.21],
  ['Melbourne, AU',     -37.81,  144.96],
  ['Cape Town, ZA',        -33.92,   18.42],
  ['Lagos, NG',              6.45,    3.40],
  ['Nairobi, KE',           -1.29,   36.82],
  ['Cairo, EG',             30.04,   31.24],
  // Americas
  ['Vancouver, CA',         49.25, -123.12],
  ['Montreal, CA',          45.50,  -73.57],
  ['Monterrey, MX',         25.67, -100.31],
  ['Guadalajara, MX',       20.66,  -103.35],
  ['Bogotá, CO',             4.71,  -74.07],
  ['Buenos Aires, AR',     -34.60,  -58.38],
  ['Santiago, CL',         -33.45,  -70.67],
  ['Guaxupé, BR',          -21.31,  -46.72],
  ['Porto Alegre, BR',     -30.03,  -51.23],
  // Europe
  ['Zurich, CH',            47.38,    8.54],
  ['Geneva, CH',            46.20,    6.15],
  ['Basel, CH',             47.56,    7.59],
  ['Amsterdam, NL',         52.37,    4.90],
  ['Eindhoven, NL',         51.44,    5.48],
  ['Brussels, BE',          50.85,    4.35],
  ['Frankfurt, DE',         50.11,    8.68],
  ['Munich, DE',            48.14,   11.58],
  ['Stuttgart, DE',         48.78,    9.18],
  ['Cologne, DE',           50.94,    6.96],
  ['Dusseldorf, DE',        51.23,    6.78],
  ['Hannover, DE',          52.37,    9.74],
  ['Stockholm, SE',         59.33,   18.07],
  ['Gothenburg, SE',        57.71,   11.97],
  ['Skellefteå, SE',        64.75,   20.95],
  ['Helsinki, FI',          60.17,   24.94],
  ['Espoo, FI',             60.25,   24.66],
  ['Oslo, NO',              59.91,   10.75],
  ['Copenhagen, DK',        55.68,   12.57],
  ['Trelleborg, SE',        55.37,   13.16],
  ['Bordeaux, FR',          44.84,   -0.58],
  ['Lyon, FR',              45.75,    4.84],
  ['Toulouse, FR',          43.60,    1.44],
  ['Barcelona, ES',         41.39,    2.15],
  ['Seville, ES',           37.39,   -5.99],
  ['Lisbon, PT',            38.72,   -9.14],
  ['Rome, IT',              41.90,   12.49],
  ['Venice, IT',            45.44,   12.32],
  ['Düsseldorf, DE',        51.23,    6.78],
  ['Krakow, PL',            50.06,   19.94],
  ['Prague, CZ',            50.08,   14.44],
  ['Bucharest, RO',         44.43,   26.10],
  ['Budapest, HU',          47.50,   19.04],
  ['Athens, GR',            37.98,   23.73],
  ['Dublin, IE',            53.35,   -6.26],
  ['Zurich, CH',            47.38,    8.54],
  ['Luxembourg City, LU',   49.61,    6.13],
  // Middle East & Africa
  ['Abu Dhabi, AE',         24.47,   54.37],
  ['Riyadh, SA',            24.69,   46.72],
  ['Jeddah, SA',            21.54,   39.18],
  ['Tel Aviv, IL',          32.07,   34.79],
  ['Casablanca, MA',        33.59,   -7.62],
  ['Addis Ababa, ET',        9.02,   38.75],
  ['Johannesburg, ZA',     -26.20,   28.04],
  ['Accra, GH',              5.56,   -0.20],
  // Asia-Pacific
  ['Chengdu, CN',           30.57,  104.07],
  ['Wuhan, CN',             30.60,  114.30],
  ['Suzhou, CN',            31.30,  120.60],
  ['Ningbo, CN',            29.87,  121.54],
  ['Dongguan, CN',          23.02,  113.75],
  ['Tianjin, CN',           39.08,  117.20],
  ['Qingdao, CN',           36.07,  120.38],
  ['Xi an, CN',             34.27,  108.95],
  ['Nagoya, JP',            35.18,  136.91],
  ['Kyoto, JP',             35.02,  135.76],
  ['Yokohama, JP',          35.44,  139.64],
  ['Incheon, KR',           37.46,  126.71],
  ['Busan, KR',             35.10,  129.03],
  ['Ho Chi Minh, VN',       10.82,  106.63],
  ['Da Nang, VN',           16.05,  108.21],
  ['Penang, MY',             5.41,  100.33],
  ['Surabaya, ID',          -7.25,  112.75],
  ['Colombo, LK',            6.93,   79.86],
  ['Dhaka, BD',             23.81,   90.41],
  ['Hyderabad, IN',         17.39,   78.49],
  ['Chennai, IN',           13.08,   80.27],
  ['Pune, IN',              18.52,   73.86],
  ['Kolkata, IN',           22.57,   88.36],
  ['Ahmedabad, IN',         23.03,   72.58],
  ['Surat, IN',             21.17,   72.83],
  ['Auckland, NZ',         -36.86,  174.77],
  ['Brisbane, AU',         -27.47,  153.02],
  ['Perth, AU',            -31.95,  115.86],
  ['Karachi, PK',           24.86,   67.01],
  ['Lahore, PK',            31.55,   74.34],
  ['Dhaka, BD',             23.81,   90.41],
  // US additional
  ['Boston, US',            42.36,  -71.06],
  ['Philadelphia, US',      39.95,  -75.17],
  ['Phoenix, US',           33.45, -112.07],
  ['San Diego, US',         32.72, -117.16],
  ['Denver, US',            39.74, -104.98],
  ['Minneapolis, US',       44.98,  -93.27],
  ['Detroit, US',           42.33,  -83.05],
  ['Nashville, US',         36.17,  -86.78],
  ['Portland, US',          45.52, -122.68],
  ['Las Vegas, US',         36.17, -115.14],
  ['Pittsburgh, US',        40.44,  -79.99],
  ['Cleveland, US',         41.50,  -81.69],
  ['Charlotte, US',         35.23,  -80.84],
  ['Columbus, US',          39.96,  -82.99],
];

/* ---------- Optimization ---------- */

// Calculate distance between two lat/lng points (Haversine formula)
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Calculate geographic diversity score for a set of locations
function calculateDiversityScore(locations) {
  if (locations.length < 2) return 100;

  let totalDist = 0;
  let count = 0;
  for (let i = 0; i < locations.length; i++) {
    for (let j = i + 1; j < locations.length; j++) {
      totalDist += calculateDistance(
        locations[i][0], locations[i][1],
        locations[j][0], locations[j][1]
      );
      count++;
    }
  }
  const avgDist = totalDist / count;
  // Normalize: 0-2000km → 0-50 score, 2000-10000km → 50-100 score
  return Math.min(100, 50 + (avgDist / 200));
}

// Calculate route logistics score (proximity to origin/destination)
function calculateLogisticsScore(provider, origin, destination) {
  const distToOrigin = calculateDistance(
    provider.loc[0], provider.loc[1],
    origin.loc[0], origin.loc[1]
  );
  const distToDest = calculateDistance(
    provider.loc[0], provider.loc[1],
    destination.loc[0], destination.loc[1]
  );

  // Average distance, penalize distances > 10,000km
  const avgDist = (distToOrigin + distToDest) / 2;
  const score = Math.max(0, 100 - (avgDist / 150));
  return Math.max(0, Math.min(100, score));
}

// Calculate regional concentration risk
function calculateConcentrationRisk(providers) {
  const regions = {};
  for (const p of providers) {
    // Extract country code from city (last 2 chars)
    const country = p.city.split(', ').pop();
    regions[country] = (regions[country] || 0) + 1;
  }

  const maxConcentration = Math.max(...Object.values(regions));
  const concentrationRatio = maxConcentration / providers.length;

  // Lower concentration = higher resilience
  // 100% in one country = 0 score, evenly distributed = 100 score
  return Math.round((1 - concentrationRatio) * 100 + 20);
}

// Advanced optimization algorithm
window.SV_pickBest = function (providers, priorities, origin, destination) {
  const totalW = Object.values(priorities).reduce((a, b) => a + b, 0) || 1;

  // Calculate base score for each provider
  const scored = providers.map(p => {
    let baseScore = 0;

    // 1. Priority-weighted scores (70% weight)
    for (const k in priorities) {
      baseScore += (p.scores[k] || 0) * (priorities[k] || 0);
    }
    baseScore = (baseScore / totalW) * 0.7;

    // 2. Logistics score (15% weight) - proximity to origin/dest
    if (origin && destination) {
      const logisticsScore = calculateLogisticsScore(p, origin, destination);
      baseScore += logisticsScore * 0.15;
    }

    // 3. Individual resilience factors (15% weight)
    const resilience = (
      (p.scores.supplier || 0) * 0.4 +
      (p.scores.geo || 0) * 0.3 +
      (p.scores.resilience || 0) * 0.3
    ) * 0.15;
    baseScore += resilience;

    return { ...p, baseScore: Math.round(baseScore) };
  });

  // Sort by base score
  scored.sort((a, b) => b.baseScore - a.baseScore);

  // Return best provider with final score
  const best = scored[0];
  return { ...best, score: best.baseScore };
};

// Generate and rank multiple supply chain routes
window.SV_optimizeRoutes = function (components, providers, priorities, origin, destination) {
  const routes = [];
  const numRoutes = 4;

  // For each component, get top candidates
  const componentCandidates = {};
  for (const comp of components) {
    const providerList = providers[comp] || [];
    const scored = providerList.map(p => ({
      ...p,
      ...SV_pickBest([p], priorities, origin, destination)
    }));
    scored.sort((a, b) => b.score - a.score);
    componentCandidates[comp] = scored.slice(0, Math.min(3, scored.length));
  }

  // Generate route combinations
  function generateRoutes(compIndex, currentRoute, usedProviders) {
    if (compIndex >= components.length) {
      // Calculate route-level score
      const routeProviders = Object.values(currentRoute);

      // 1. Average provider scores (60% weight)
      const avgProviderScore = routeProviders.reduce((sum, p) => sum + p.score, 0) / routeProviders.length;

      // 2. Geographic diversity (20% weight)
      const locations = routeProviders.map(p => p.loc);
      const diversityScore = calculateDiversityScore(locations);

      // 3. Concentration risk (20% weight)
      const concentrationScore = calculateConcentrationRisk(routeProviders);

      const finalScore = Math.round(
        avgProviderScore * 0.6 +
        diversityScore * 0.2 +
        concentrationScore * 0.2
      );

      routes.push({
        providers: { ...currentRoute },
        score: finalScore,
        diversityScore,
        concentrationScore
      });
      return;
    }

    const comp = components[compIndex];
    const candidates = componentCandidates[comp] || [];

    for (const candidate of candidates) {
      const providerKey = `${candidate.city}|${candidate.name}`;

      // Allow reusing providers but prefer diversity
      const penalty = usedProviders.has(providerKey) ? 5 : 0;
      const adjustedCandidate = { ...candidate, score: candidate.score - penalty };

      const newUsedProviders = new Set(usedProviders);
      newUsedProviders.add(providerKey);

      generateRoutes(
        compIndex + 1,
        { ...currentRoute, [comp]: adjustedCandidate },
        newUsedProviders
      );

      // Limit combinations to avoid explosion
      if (routes.length >= numRoutes * 10) break;
    }
  }

  generateRoutes(0, {}, new Set());

  // Sort routes by score and return top N
  routes.sort((a, b) => b.score - a.score);
  return routes.slice(0, numRoutes);
};

/* ---------- Lat/Lng lookup by name (loose match) ---------- */
window.SV_findCity = function (text) {
  if (!text) return null;
  const q = text.trim().toLowerCase();
  if (!q) return null;
  // Exact-prefix first, then substring
  let hit = window.SV_CITIES.find(c => c[0].toLowerCase().startsWith(q));
  if (!hit) hit = window.SV_CITIES.find(c => c[0].toLowerCase().includes(q));
  return hit ? { name: hit[0], loc: [hit[1], hit[2]] } : null;
};
