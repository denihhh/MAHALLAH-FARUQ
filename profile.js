function displayImage(input) {
            const fileInput = input.files[0];
            if (fileInput) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    document.querySelector('.pic img').src = e.target.result;
                    document.querySelector('.profilepic').src = e.target.result;

                };
                reader.readAsDataURL(fileInput);
            }
        }

        function toggleEditForm() {
            const editForm = document.getElementById('editForm');
            editForm.style.display = (editForm.style.display === 'none') ? 'block' : 'none';
        }

        function saveChanges() {
            const email = document.getElementById('email').value;
            const liveEmail = document.getElementById('liveEmail').value;
            const address = document.getElementById('address').value;
            const phoneNo = document.getElementById('phoneNo').value;


            // Update the corresponding elements on the page
            document.getElementById('displayEmail').innerText = email;
            document.getElementById('displayLiveEmail').innerText = liveEmail;
            document.getElementById('displayAddress').innerText = address;
            document.getElementById('displayPhoneNo').innerText = phoneNo;


            // Close the edit form
            toggleEditForm();
        }