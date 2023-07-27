
    document.addEventListener('DOMContentLoaded', function() {
      // Function to handle click event for anchor tags with class "redirect_links"
      function handleRedirectLinkClick(event) {
        // Prevent the default behavior of the anchor tag
        event.preventDefault();

        // Get the ID of the clicked anchor
        var linkId = event.target.id;

        // Create a new XMLHttpRequest object to fetch the content from the HTML page
        var xhr = new XMLHttpRequest();

        // Specify the URL of the HTML page to load based on the clicked link ID
        var url = './resilence/' +linkId + '.html'; // Assuming the HTML pages have the same name as the link ID

        // Configure the XMLHttpRequest
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
              // If the request is successful, insert the fetched content into the "content_div"
              document.getElementById('content_div').innerHTML = xhr.responseText;
            } else {
              console.error('Error loading content: ' + xhr.status);
            }
          }
        };

        // Send the XMLHttpRequest
        xhr.send();
      }

      // Add event listeners to all anchor tags with class "redirect_links"
      var redirectLinks = document.querySelectorAll('.redirect_links');
      redirectLinks.forEach(function(link) {
        link.addEventListener('click', handleRedirectLinkClick);
      });
    });


    const correctPassword = "test";

        function promptPassword() {
            const enteredPassword = prompt("Enter the password to access the website:");
            if (enteredPassword === correctPassword) {
                // Password correct, show the content
                xhr.open('GET', './index.html', true);
            } else {
                // Password incorrect, show an error message
                alert("Incorrect password. Please try again.");
                promptPassword(); // Optional: Retry prompting for the password
            }
        }

        // Call the function to prompt for the password when the page loads
        promptPassword();