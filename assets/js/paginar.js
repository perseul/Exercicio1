function paginar(id){
    var div = document.getElementById(id);

    if(id === 1){
        var page2 = document.getElementById(2);
        var page3 = document.getElementById(3);

        div.style.display = 'block';
        page2.style.display = 'none';
        page3.style.display = 'none';
    }

    if(id === 2){
        var page1 = document.getElementById(1);
        var page3 = document.getElementById(3);

        div.style.display = 'block';
        page1.style.display = 'none'
        page3.style.display = 'none';
    }

    if(id === 3){
        var page1 = document.getElementById(1);
        var page2 = document.getElementById(2);

        div.style.display = 'block';
        page1.style.display = 'none';
        page2.style.display = 'none';
    }
}