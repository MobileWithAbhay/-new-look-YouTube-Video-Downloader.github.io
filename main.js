var YouTube=document.querySelector('.YouTube');
var format=document.querySelector('.format');
var hidden=document.querySelector('.hidden');
var Idurl=document.querySelector('.Idurl');
var result1=document.querySelector('.result1');
var thumbnail=document.querySelector('thumbnail');

function preview(){
  if(YouTube.value.indexOf("https://youtu.be/") != -1){
    var url1 = YouTube.value.replace("https://youtu.be/","https://www.youtube.com/embed/");
    document.querySelector('.result1').innerHTML = `<iframe width="100%" height="190" src="${url1}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  }
  else if(YouTube.value.indexOf("https://www.youtube.com/watch?v=") != -1){
    var url1 = YouTube.value.replace("https://www.youtube.com/watch?v=","https://www.youtube.com/embed/");
    document.querySelector('.result1').innerHTML = `<iframe width="100%" height="190" src="${url1}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
   }
  else if (YouTube.value.indexOf("https://youtube.com/shorts/") != -1){
    var url1 = YouTube.value.replace("https://youtube.com/shorts/", "https://www.youtube.com/embed/");
    var urlSe = url1.replace("?feature=share", "");
    document.querySelector('.result1').innerHTML = `<iframe width="100%" height="190" src="${urlSe}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
}

function GetId(){
  if(YouTube.value!=""){
    if(YouTube.value.indexOf("https://youtu.be/") != -1){
     var url1 = YouTube.value.replace("https://youtu.be/","");
    document.querySelector('.Idurl').value=url1;
    }
   else if(YouTube.value.indexOf("https://www.youtube.com/watch?v=") != -1){
     var url1 = YouTube.value.replace("https://www.youtube.com/watch?v=","");
    document.querySelector('.Idurl').value=url1;
    }
   else if (YouTube.value.indexOf("https://youtube.com/shorts/") != -1){
     var url1 = YouTube.value.replace("https://youtube.com/shorts/", "");
     var urlSe = url1.replace("?feature=share", "");
     document.querySelector('.Idurl').value= urlSe;
    }
  }
}

function Getdownload(){
 GetId();
  if(YouTube.value!=""){
    switch (format.value){
      case "Thumbnail":
         hidden.classList.add('active');
         result1.classList.add('active');
         var url2 = `https://img.youtube.com/vi/${Idurl.value}/maxresdefault.jpg`;
         document.querySelector('.result1').innerHTML = `<img src="${url2}" class="thumbnail"/>`;
         document.querySelector('.form-control').value = url2;
         document.querySelector('.result2').innerHTML = `<button class="Get" onclick="download()">Download Video Thumbnail</button>`;
      break;
      case "mp3":
         hidden.classList.add('active');
         result1.classList.add('active');
         var url2 = `https://loader.to/api/button/?url=https://youtu.be/${Idurl.value}&f=mp3`;
         document.querySelector('.result2').innerHTML = `<iframe style="width:100%;height:45px;border:hidden;overflow:hidden;" scrolling="no" src="${url2}"></iframe>`;
         preview();
      break;
      case "m4a":
         hidden.classList.add('active');
         result1.classList.add('active');
         var url2 = `https://loader.to/api/button/?url=https://youtu.be/${Idurl.value}&f=m4a`;
         document.querySelector('.result2').innerHTML = `<iframe style="width:100%;height:45px;border:hidden;overflow:hidden;" scrolling="no" src="${url2}"></iframe>`;
         preview();
      break;
      case "360":
         hidden.classList.add('active');
         result1.classList.add('active');
         var url2 = `https://loader.to/api/button/?url=https://youtu.be/${Idurl.value}&f=360`;
         document.querySelector('.result2').innerHTML = `<iframe style="width:100%;height:45px;border:hidden;overflow:hidden;" scrolling="no" src="${url2}"></iframe>`;
         preview();
      break;
      case "480":
         hidden.classList.add('active');
         result1.classList.add('active');
         var url2 = `https://loader.to/api/button/?url=https://youtu.be/${Idurl.value}&f=480`;
         document.querySelector('.result2').innerHTML = `<iframe style="width:100%;height:45px;border:hidden;overflow:hidden;" scrolling="no" src="${url2}"></iframe>`;
         preview();
      break;
      case "720":
         hidden.classList.add('active');
         result1.classList.add('active');
         var url2 = `https://loader.to/api/button/?url=https://youtu.be/${Idurl.value}&f=720`;
         document.querySelector('.result2').innerHTML = `<iframe style="width:100%;height:45px;border:hidden;overflow:hidden;" scrolling="no" src="${url2}"></iframe>`;
         preview();
      break;
      case "1080":
         hidden.classList.add('active');
         result1.classList.add('active');
         var url2 = `https://loader.to/api/button/?url=https://youtu.be/${Idurl.value}&f=1080`;
         document.querySelector('.result2').innerHTML = `<iframe style="width:100%;height:45px;border:hidden;overflow:hidden;" scrolling="no" src="${url2}"></iframe>`;
         preview();
      break;
      case "4k":
         hidden.classList.add('active');
         result1.classList.add('active');
         var url2 = `https://loader.to/api/button/?url=https://youtu.be/${Idurl.value}&f=4k`;
         document.querySelector('.result2').innerHTML = `<iframe style="width:100%;height:45px;border:hidden;overflow:hidden;" scrolling="no" src="${url2}"></iframe>`;
         preview();
      break;
      case "8k":
         hidden.classList.add('active');
         result1.classList.add('active');
         var url2 = `https://loader.to/api/button/?url=https://youtu.be/${Idurl.value}&f=8k`;
         document.querySelector('.result2').innerHTML = `<iframe style="width:100%;height:45px;border:hidden;overflow:hidden;" scrolling="no" src="${url2}"></iframe>`;
         preview();
      break;
    }
  }
  else {
    alert('Enter Your YouTube Url');
  }
}
var url = document.querySelector('.form-control');
function download(){
     const anchor = document.createElement("a");
     anchor.href =  url.value;
     anchor.download = 'MWC.jpg';
     document.body.appendChild(anchor);
     anchor.click();
     document.body.removeChild(anchor);
 }
