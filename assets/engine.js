export function shuffled(items, random = Math.random) {
  const result = [...items];
  for (let i=result.length-1;i>0;i--) { const j=Math.floor(random()*(i+1)); [result[i],result[j]]=[result[j],result[i]]; }
  return result;
}
export function maxImposters(count) { return Math.min(3, Math.floor((count-1)/2)); }
export function createRound({players,imposterCount,mode='classic',pool,used=[],random=Math.random}) {
  if(players.length<3 || players.length>20) throw new Error('Choose 3–20 players.');
  if(!Number.isInteger(imposterCount)||imposterCount<1||imposterCount>maxImposters(players.length)) throw new Error('Choose fewer imposters for this group.');
  const eligible=pool.filter(w=>mode!=='undercover'||w.decoy);
  if(!eligible.length) throw new Error('Select a category with words for this mode.');
  let history=[...used];
  let available=eligible.filter(w=>!history.includes(w.word.toLocaleLowerCase()));
  if(!available.length) {history=[];available=eligible;}
  const prompt=available[Math.floor(random()*available.length)];
  const imposters=shuffled(players.map((_,i)=>i),random).slice(0,imposterCount);
  return {players:[...players],imposters,prompt,mode,starter:Math.floor(random()*players.length),used:[...history,prompt.word.toLocaleLowerCase()]};
}
export function resolveVote(round,suspects) {
  const unique=[...new Set(suspects)];
  if(unique.length!==round.imposters.length||unique.some(i=>!Number.isInteger(i)||i<0||i>=round.players.length)) throw new Error(`Choose exactly ${round.imposters.length} suspect(s).`);
  const caught=unique.filter(i=>round.imposters.includes(i));
  return {caught,missed:round.imposters.filter(i=>!unique.includes(i)),civiliansWin:caught.length===round.imposters.length};
}
