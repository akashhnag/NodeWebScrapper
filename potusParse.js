const rp=require('request-promise');
const $=require('cheerio');

module.exports=function potusParse(url){
    rp(url)
  .then(function(html) {
      console.log({
        'name':$('.firstHeading',html).text(),
        'birthday':$('.bday',html).text()
      });
      
  })
  .catch(function(err) {
    //handle error
    console.log(err);
    
  });
}

