let position = 0;
       
        function previousImage() {
            const javascriptCarouselImageSelector = document.getElementById("javascriptCarouselImages")

            if ( position !==0 ) {
                position += 400;
            }

            javascriptCarouselImageSelector.style.transform = `translateX(${position}px)`;
        }

        function nextImage() {
            const javascriptCarouselImageSelector = document.getElementById("javascriptCarouselImages")

            if ( position >-1200 ) {
                position += -400;
            }

            javascriptCarouselImageSelector.style.transform = `translateX(${position}px)`;
        }