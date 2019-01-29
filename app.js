const rp=require('request-promise');
const url='https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
const $=require('cheerio');
const potusParse=require('./potusParse');

rp(url).then((html)=>{
    let presidents_list=[];
    for(i=0;i<45;i++){
       presidents_list.push($('big > a', html)[i].attribs.href);
       //potusParse('https://en.wikipedia.org/'+$('big > a', html)[i].attribs.href)
       potusParse('https://en.wikipedia.org/'+presidents_list[i])
    }
      
})
.catch((err)=>
{
    console.log(err);
    
})