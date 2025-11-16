const posts = [
	{
		name: "Vincent van Gogh",
		username: "vincey1853",
		location: "Zundert, Netherlands",
		avatar: "images/avatar-vangogh.jpg",
		post: "images/post-vangogh.jpg",
		comment: "just took a few mushrooms lol",
		likes: 21
	},
	{
		name: "Gustave Courbet",
		username: "gus1819",
		location: "Ornans, France",
		avatar: "images/avatar-courbet.jpg",
		post: "images/post-courbet.jpg",
		comment: "i'm feelin a bit stressed tbh",
		likes: 4
	},
	{
		name: "Joseph Ducreux",
		username: "jd1735",
		location: "Paris, France",
		avatar: "images/avatar-ducreux.jpg",
		post: "images/post-ducreux.jpg",
		comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
		likes: 152
	}
]



const postsContainer = document.getElementById("postsContainer");


posts.forEach((post) => {
	const section = document.createElement("section");
	section.classList.add("post");

	section.innerHTML = `
      <div class="user-info">
        <img class="avatar-image" src="${post.avatar}" alt="${post.name}'s Avatar" />
        <div>
          <h4 class="username">${post.name}</h4>
          <p class="location">${post.location}</p>
        </div>
      </div>
      <img class="post-image" src="${post.post}" alt="${post.name}'s Post" />
      <div class="body">
        <span><img class="icon" src="images/icon-heart.png" alt="Heart Icon" /></span>
        <span><img class="icon" src="images/icon-comment.png" alt="Comment Icon" /></span>
        <span><img class="icon" src="images/icon-dm.png" alt="DM Icon" /></span>
        <p class="likes">${post.likes} likes</p>
        <p><strong>${post.username}</strong> ${post.comment}</p>
      </div>
    `;

	postsContainer.appendChild(section);
});
