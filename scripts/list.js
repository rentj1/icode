/**
 * Created by tongjie on 15/4/6.
 */
(function(){
    var sideList = document.getElementById("list");
    var sidehtml = [];
    var items = datastore.side;

    for(var i=0; i<items.length; i++) {
        sidehtml[i] = '<li><a href="../'+items[i].href+'" title="" class="tit">'+ items[i].title + '</a></li>';
    }
    sideList.innerHTML = '<ul class="mod-list">' + sidehtml.join('') + '</ul>';


}());
