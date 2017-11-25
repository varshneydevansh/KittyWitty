console.log('Kittens of the world');

let filenames = [
  "first.jpg",
  "second.jpg",
  "third.jpg",
  "fourth.jpg",
  "fifth.jpg",
  "sixth.jpg",
  "77501.jpg",
  "111674.jpg",
  "251840.jpg",
  "541336.jpg",
  "686384.jpg",
  "709355.jpg"
];

let imgs = document.getElementsByTagName('img');

for (imgElt of imgs){
  let r = Math.floor(Math.random() * filenames.length);
  let file = 'kittens/'+filenames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  console.log(url);
}
