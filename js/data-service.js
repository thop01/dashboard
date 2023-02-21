export function getData(url,callback){
    fetch(url)
    .then(myData => myData.json())
    .then(jsondata => callback(jsondata));
}

