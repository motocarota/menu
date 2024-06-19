function chunkArray(arr, n = 2){
  const chunkLen = Math.max(arr.length/n ,1);
  let chunks = [];
  for (let i = 0; i < n; i++) {
      if(chunkLen * (i + 1) <= arr.length) {
        chunks.push(arr.slice(chunkLen * i, chunkLen * (i + 1)));
      }
  }
  return chunks; 
}
export default chunkArray