// For now, just show all posts
const params = new URLSearchParams(window.location.search);
const selectedKeyword = params.get('keyword');
console.log(selectedKeyword);

const posts = document.querySelectorAll('.post');

if (selectedKeyword) {
  posts.forEach(post => {
    keywords = post.dataset.keywords.split(',');
    if (keywords.includes(selectedKeyword)) {
      post.classList.add('show');
    }
  });
} else {
  posts.forEach(post => post.classList.add('show'));
}
