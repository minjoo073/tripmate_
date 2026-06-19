// Wikimedia Commons에서 도시 사진을 해상도별로 가져오는 helper.
// 본 앱(tripmate/constants/destinationImages.ts)과 동일한 소스 + 라이선스.

const FILEPATH = "https://commons.wikimedia.org/wiki/Special:FilePath/";

const CITY_FILE: Record<string, string> = {
  오사카: "Osaka_Castle_02bs3200.jpg",
  도쿄: "Skyscrapers_of_Shinjuku_2009_January.jpg",
  나고야: "Nagoya_Station_-_View_from_the_Main_Building_in_Nagoya_Campus_of_Aichi_University_2022-6-29.jpg",
  방콕: "4Y1A1159_Bangkok_(33536795515).jpg",
  다낭: "Dragon_Bridge,_Da_Nang_during_day_-_20230819_(cropped).jpg",
  파리: "La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques,_Paris_août_2014_(2).jpg",
  발리: "TanahLot_2014.JPG",
  바르셀로나: "Aerial_view_of_Barcelona,_Spain_(51227309370)_edited.jpg",
  뉴욕: "View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_(cropped).jpg",
  프라하: "Prague_(6365119737).jpg",
  이스탄불: "Historical_peninsula_and_modern_skyline_of_Istanbul.jpg",
  리스본: "Lisboa_-_Portugal_(52597836992).jpg",
  싱가포르: "Marina_Bay_Sands_(I).jpg",
};

export function cityKey(dest?: string): string {
  return (dest ?? "").split(/[,·]/)[0].trim();
}

// 우선순위: 로컬(public/dest/*.jpg) → Wikimedia. Hero/FinalCTA 처럼 LCP 중요한 곳은
// 반드시 LOCAL_DESTINATIONS에 있는 도시로 골라 — Wikimedia 외부 호스팅은 dev에서 429 자주 발생.
export const LOCAL_DESTINATIONS: Record<string, string> = {
  파리: "/dest/paris.jpg",
  이스탄불: "/dest/istanbul.jpg",
  오사카: "/dest/osaka.jpg",
};

export function getDestinationImage(dest?: string, width = 1600): string {
  const key = cityKey(dest);
  if (LOCAL_DESTINATIONS[key]) return LOCAL_DESTINATIONS[key];
  const file = CITY_FILE[key] ?? CITY_FILE.파리;
  return `${FILEPATH}${encodeURIComponent(file)}?width=${width}`;
}

export const DESTINATIONS = Object.keys(CITY_FILE);
