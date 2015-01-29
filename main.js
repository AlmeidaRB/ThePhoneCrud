var blogPage = {
  init: function () {
    blogPage.initStyling();
    blogPage.initEvents();
  },
  initStyling: function () {
    blogPage.renderAllPosts(posts);
  },
  initEvents: function () {

    $('.box form').on('submit', function (event) {
      event.preventDefault();
      blogPage.createPost();
    });

    $("section").on('click', '.showEditForm', function (event) {
      $(this).closest('article').find('.form').toggleClass('active');
    });

    $('section').on('click', '.deletePost', blogPage.deletePost);

    // update post
    $('section').on('click', '.editWholePost', blogPage.updatePost);

  },
  createPost: function () {
    var newPost = {
      name: $('.box input[name="name"]').val(),
      phone: $('.box input[name="phone"]').val(),
      photo: $('.box input[name="photo"]').val(),
      isPublished: true
    };

    posts.push(newPost);
    blogPage.renderAllPosts(posts);

    $('.box input').val('');
    $('.box textarea').val('');




  },
  updatePost: function () {

    var thisIndex = $(this).closest('article').data('index');

    var updatedPost = {
      name: $(this).closest('article').find('input.editName').val(),
      phone: $(this).closest('article').find('input.editPhone').val(),
      photo: $(this).closest('article').find('input.editPhoto').val(),

      isPublished: true
    };

    posts.splice(thisIndex, 1, updatedPost);
    blogPage.renderAllPosts(posts);

  },
  deletePost: function (event) {

    var postIndex = $(this).closest('article').data('index');

    console.log(postIndex);
    posts.splice(postIndex, 1);
    blogPage.renderAllPosts(posts);


  },
  compileTmpl: function (data, tmpl) {
    var tmpl = _.template(tmpl);
    return tmpl(data);
  },
  renderAllPosts: function (allPosts) {
    var tmplStr = "";
    var compiledTmpl = _.template($("#postTmpl").html());

    _.each(allPosts, function (post, index, arr) {
      post.idx = index;
      tmplStr += compiledTmpl(post);

    });

    $("section").html(tmplStr);
  }
};

$(document).ready(function () {
  blogPage.init();
});
