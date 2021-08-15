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
  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelect = clickedElement.getAttribute("href");
    console.log('Link was clicked', articleSelect);

  /* [IN PROGRESS] find the correct article using the selector (value of 'href' attribute) */
  const articleTarget = document.querySelector('articleSelect');
    console.log('The selected article is', articleTarget);

  /* [IN PROGRESS] add class 'active' to the correct article */
  const clickedArticle = this;
    console.log('clickedArticle:', articleTarget);

    clickedArticle.classList.add('active');

}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
