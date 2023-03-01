/*
window.onload = myonload

function myonload()
{
    alert("onloading")
    //prepareLinks();
    //preparClickEevents();
    //imgload();
    addonloadfn(preparClickEevents);
    addonloadfn(prepareLinks);
    addonloadfn(imgload);
    alert("load!")
}
*/

addonloadfn(imgload);
addonloadfn(prepareLinks);
addonloadfn(preparClickEevents);

function preparClickEevents(){
    _preparClickEevents('button','button is-normal',onmyClick3);
}

function _preparClickEevents(tag,cls,func){
    var links = document.getElementsByTagName(tag);

    for(var i=0;i<links.length;i++)
    {
        if (links[i].getAttribute("class") == cls)
        {
            links[i].onclick = function(){
                func();
                return false;
            }
        }

    }
}

function imgload()
{
    //alert('imgload!')
    onmyClick3()
}
var myHeaders = new Headers();
//myHeaders.append("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx");
//myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};
myurl='https://www.mxnzp.com/api/verifycode/code?len=5&type=0&app_id=omtwnnt8fprrjgyv&app_secret=MVNYSHM4MklmYVl4amxOOWlzbWc5Zz09'

function onmyClick3()
{

    //alert('Enter')
    fetch(myurl, requestOptions)
        .then(response => response.json())
        .then(res => logjsonitem(res))
        .catch(error => console.log('error', error));

}

