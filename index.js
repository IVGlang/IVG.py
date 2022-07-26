function sections(mode) {
    var root = document.getElementById("main");
    root.removeChild(document.getElementById("panel"));
    
    var main = document.createElement("div");
    main.id = "panel";
    main.style.display = "grid";
    main.style.margin = "0.5em";
    main.style.gridTemplateColumns = "1fr";
    main.style.gridGap = "0.5em";
    
    if (mode == "news") { 
        main.style.gridAutoRows = "minmax(0, 20em)";
        wine = document.createElement("div");
        wine.style.border = "1px solid black";
        wine.style.borderRadius = "0.5em";
        wine.style.overflow = "scroll";
          
        for (item of [["Welcome!", ""]]) {
            
        }
    
        main.appendChild(wine);
    } else if (mode == "blog") {
        main.style.gridTemplateColumns = "1fr 4.5fr";
        main.style.gridAutoRows = "minmax(0, 20em)";
          
        info = document.createElement("div");
        info.style.border = "1px solid black";
        info.style.borderRadius = "0.5em";
          
        wine = document.createElement("div");
        wine.style.border = "1px solid black";
        wine.style.borderRadius = "0.5em";
        wine.style.overflow = "scroll";
             
        main.appendChild(info);
        main.appendChild(wine);
    } else if (mode == "softs") {
        main.style.gridTemplateColumns = "1fr 1fr 1fr";
        for (item of [
                     ["Notes", [], []],
                     ]) {
            soft = document.createElement("div");
            soft.style.border = "1px solid black";
            soft.style.borderRadius = "0.5em";

            title = document.createElement("p");
            title.appendChild(document.createTextNode(item[0]));
            title.id = "title";
            soft.appendChild(title);

            main.appendChild(soft);
        }
    } else if (mode == "archive") {
        main.style.gridTemplateColumns = "1fr 1fr 1fr";
    }
    root.appendChild(main);
}
  
window.onload = function() {
    var window = document.getElementById("window");
    var main = document.getElementById("main");
    var news = document.getElementById("news");
    var blog = document.getElementById("blog");
    var softs = document.getElementById("softs");
    var archive = document.getElementById("archive");
    sections("news");
    
    news.onclick = function() {
        sections("news");
    }
    blog.onclick = function() {
        sections("blog");
    }
    softs.onclick = function() {
        sections("softs");
    }
    archive.onclick = function() {
        sections("archive");
    }
};
