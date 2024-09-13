function addComment(postId) {
    const name = document.getElementById(`name${postId}`).value;
    const comment = document.getElementById(`comment${postId}`).value;
    const commentSection = document.getElementById(`comments${postId}`);

    if (name && comment) {
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<strong>${name}</strong>: ${comment}`;
        commentSection.appendChild(newComment);

        // Clear input fields after submission
        document.getElementById(`name${postId}`).value = '';
        document.getElementById(`comment${postId}`).value = '';
    } else {
        alert('Please enter both name and comment.');
    }
}