var templates = {};

templates.post = [
"<article data-index='<%= idx %>'>",
"<h3><%= name %></h3>",
"<p><a href=tel:'<%= phone %>'>'phone'</a></p>",
"<p><button class='deletePost'>Delete</button> <button</p>",
"<img src='<%= photo %>'>",

"</article>"

].join("");


templates.sidebar = "<p><%= selftext %></p>";
