function getRealElement(node){
    if(node.nodeType == 1)
        return node;

    if(node.nextSibling)
        return getRealElement(node.nextSibling);

    return null;
}

function showCertainElementSibling(tag) {
    var headers = document.getElementsByTagName(tag)
    for (var i = 0; i < headers.length; i++)
    {
        node = getRealElement(headers[i].nextSibling)
        //alert('element: '+ i + ' is '+ node.tagName)
    }
}

function insertAfter(newElement,targetElement)
{
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function showHeaders()
{
    var tag = 'h1'
    showCertainElementSibling(tag);
}

showHeaders()

function moveElement(elementID,final_x,final_y,interval){
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;

    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left)
    var ypos = parseInt(elem.style.top)
    if(xpos==final_x && ypos == final_y){
        return true;
    }

    if(xpos < final_x) {
        var dist = Math.ceil((final_x-xpos)/10);
        xpos = xpos + dist;
    }
    if(ypos < final_y){
      var dist = Math.ceil((final_y-ypos)/10);
      ypos = ypos + dist;
    }

    if(xpos > final_x){
        var dist = Math.ceil((final_x-xpos)/10);
        xpos = xpos - dist;
    }
    if(ypos > final_y) {
        var dist = Math.ceil((final_y-ypos)/10);
        ypos = ypos - dist;
    }

    elem.style.left = xpos + 'px';
    elem.style.top  = ypos + 'px';

    var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
    movement = setTimeout(repeat,interval)
}

function positionMessage(){
    var elem = document.getElementById("message");
    elem.style.position = 'absolute';
    elem.style.left = '50px'
    elem.style.top = '100px'
    //alert('posi')
    moveElement("message",200,100,10)
}

addonloadfn(positionMessage)

function addonloadfn(fn)
{
    var oldonload = window.onload;

    if (typeof window.onload != 'function'){
        window.onload = fn;
    }else{
        window.onload = function(){
            oldonload()
            fn();
            //alert('Enter new!')
        }
    }

}