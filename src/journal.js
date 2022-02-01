function Entry(passage) {
  this.passage = passage.toLowerCase();
}

Entry.prototype.wordCount = function() {
  let wordCount = 0
  let passageArray = this.passage.split(" ");
  wordCount = passageArray.length;
  return wordCount;
}

Entry.prototype.vowelCount = function() {
  const vowelArray = ['e', 'a', 'i', 'o', 'u'];
  let vowelCount = 0;
  let consonantCount = 0;
  const thisArray = [vowelCount, consonantCount];
  let letterArray = this.passage.split("");
  letterArray.forEach(function(letter) {
    if (vowelArray.includes(letter)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  });
  return thisArray;
}


let myEntry = new Entry("Call me Ishmael. Some years ago, never mind how long precisely, having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation.");

// this.vowels = 0;
// this.consonants = 0;

//  passage to use : Call me Ishmael. Some years ago, never mind how long precisely, having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off, then, I account it high time tozz get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.


// function countup(passage) {
//   let myCount = 0
//   let passageArray = passage.split(" ");
//   console.log(passageArray);
//   console.log(typeof passageArray);
//   myCount = passageArray.length;
//   return myCount;
// }