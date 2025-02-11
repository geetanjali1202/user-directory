function fetchUserDetails() {
    const userId = document.getElementById("userId").value;
    if (!userId) {
        alert("Please enter a User ID");
        return;
    }

    fetch(`http://localhost:3000/user/${userId}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById("userDetails").classList.add("hidden");
                document.getElementById("error").classList.remove("hidden");
            } else {
                document.getElementById("profilePic").src = data.profilePic;
                document.getElementById("name").innerText = data.name;
                document.getElementById("designation").innerText = data.designation;
                document.getElementById("email").innerText = data.email;
                
                document.getElementById("userDetails").classList.remove("hidden");
                document.getElementById("error").classList.add("hidden");
            }
        })
        .catch(error => console.error("Error fetching data:", error));
}
