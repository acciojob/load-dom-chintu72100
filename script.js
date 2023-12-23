//your JS code here. If required.
<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Get the body element
        var body = document.body;

        // Check if the body is empty
        if (body.innerHTML.trim() === '') {
            // If the body is empty, write the string "DOM load success"
            body.innerHTML = 'DOM load success';
        }
    });
</script>