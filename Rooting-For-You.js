const judgeVegetable = function (vegetables, metric) {
  let num = 0;
  let submitterName = '';
  for( let i = 0 ; i < vegetables.length ; i++){
    if(vegetables[i][metric] > num){
      num = vegetables[i][metric];
      submitterName = vegetables[i]["submitter"];
    }
  }
  return submitterName;
}


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));