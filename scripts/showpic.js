function showPic(whichpic)
{
    var source = whichpic.getAttribute("href")
    var placeholder = document.getElementById("placeholder")
    var text = whichpic.getAttribute("title")
    var description = document.getElementById("description")

    description.firstChild.nodeValue = text
    placeholder.setAttribute("src",source)
}

createholder()
function createholder()
{
    //alert("createing holder");
    var myimgholderdiv = document.createElement('div');
    myimgholderdiv.setAttribute('id','placeholderdiv');

    var myimgholder = document.createElement('img');
    myimgholder.setAttribute('id','placeholder');
    myimgholder.setAttribute('src',"images/placeholder.jfif");
    myimgholder.setAttribute('alt',"my image gallery");
    //alert(myimgholder.id)

    var mydesc = document.createElement('p');
    mydesc.setAttribute('id','description');
    var mytext = document.createTextNode('Choose an image');
    mydesc.appendChild(mytext);
    //alert(mydesc.nodeValue);

    var pnode = document.getElementById('pupypics');

    myimgholderdiv.appendChild(myimgholder);
    pnode.appendChild(mydesc)
    pnode.appendChild(myimgholderdiv)
    //pnode.appendChild(myimgholder)
    //pnode.appendChild(mydesc)
    //alert('created holder!')
}
//addonloadfn(createholder)