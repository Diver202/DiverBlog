// function Publish() {
//     // Get input values
//     let title = document.querySelector('#title').value;
//     let words = document.querySelector('#words').value;
//     let thumbnail = document.querySelector("#thumbnail").files[0];
//     // Retrieve existing content from localStorage or initialize an empty array
//     let content = JSON.parse(localStorage.getItem('contents')) || [];

//     // Create a blog object
//     let blog = {
//         title: title, 
//         words: words,
//         thumbnail: thumbnail
//     };

//     // Add the new blog to the content array
//     content.push(blog);

//     // Update localStorage with the modified content array
//     localStorage.setItem('contents', JSON.stringify(content));
// }
