document.addEventListener("DOMContentLoaded", function() {
            // Array of preset titles
            const titles = [document.title, "The best free botlist"];
            
            let currentIndex = 0;
            
            // Function to change the document title
            function changeTitle() {
                document.title = titles[currentIndex];
                currentIndex = (currentIndex + 1) % titles.length;
            }
            
            // Initial call to set the first title
            changeTitle();
            
            // Set interval to change title every 10 seconds
            setInterval(changeTitle, 10000);
        });
