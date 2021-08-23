{

'use strict';

/*document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
});*/

  const titleClickHandler = function(event){
    event.preventDefault();
    console.log('Link was clicked!');
    console.log('event', event);

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */
  const clickedElement = this;
    console.log('clickedElement:', clickedElement);

    clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('article');

  for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelect = clickedElement.getAttribute("href");
    console.log('Link was clicked', articleSelect);

  /* [IN PROGRESS] find the correct article using the selector (value of 'href' attribute) */
  const articleTarget = document.querySelector(articleSelect);
    console.log('The selected article is', articleTarget);

  /* [IN PROGRESS] add class 'active' to the correct article */
  const clickedArticle = this;
    console.log('clickedArticle:', articleTarget);

    articleTarget.classList.add('active');

}

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

function generateTitleLinks(){

/* Delete the contents of the link list in the left column */
  const titleList = document.querySelector(optTitleListSelector).innerHTML = '';
    console.log('Show title list!', titleList);

/* Actions executed on all articles */
  const articles = document.querySelectorAll(optArticleSelector);
    console.log('Show posts list!', articles);
  for(let article of articles){
    console.log(article);

/* For each article read its id and write it to const */
    const articleId = article.getAttribute("id");
      console.log('Show articles ID', articleId);

/* For each article find an element with a title and write its contents to a const */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log('Show articles title', articleTitle);

/* For each article based on this information, create the HTML code for the link and save it to a const */
  const linkHtml = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('Show generated HTML link!', linkHtml);

/* For each article insert the created HTML code into the link list in the left column */
  const html = document.querySelector('.titles');
  html.insertAdjacentHTML('afterend', linkHtml);

  }
}

generateTitleLinks();

}
