class blog {
    constructor(title, detail) {
      this.title = title;
      this.detail = detail;
    }
  
    addTitle() {
      var title_card = document.createElement("h1");
      title_card.setAttribute("id", "blog-title");
      console.log(title_card);
      document.getElementById("card-text").appendChild(title_card);
      title_card.innerHTML += this.title;
    }
  
    addDescription() {
      var description_card = document.createElement("p");
      description_card.setAttribute("id", "blog-description");
      console.log(description_card);
      document.getElementById("card-text").appendChild(description_card);
      description_card.innerHTML += this.detail;
    }
  }
  
  var add = document.getElementById("addBlog");
  add.addEventListener("click", function () {
    document.getElementById("popupContact").style.display = "block";
  });
  
  var remove = document.getElementById("close");
  remove.addEventListener("click", function () {
    document.getElementById("popupContact").style.display = "none";
  });
  
  var post = document.getElementById("post");
  post.addEventListener("click", function () {
    document.getElementById("popupContact").style.display = "none";
    var image = document.createElement("img");
    image.src = "./assets/javascript.png";
    document.getElementById("card-text").appendChild(image);
  
    var title = document.getElementById("title").value;
    var detail = document.getElementById("detail").value;
  
    var new_blog = new blog(title, detail);
    new_blog.addTitle();
    new_blog.addDescription();
  });
