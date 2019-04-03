//const backgroundImg = document.getElementById('background-img');
const targets = document.querySelectorAll('img');

// lazyload images
var lazyLoad = function (targets) {
    // create an intersection observer to lazy load
    var io = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            // check if entry is in view
            if (entry.isIntersecting) {
                var img = entry.target;
                if(img.classList.contains('svg') || img.classList.contains('phone-img')) {
                    img.classList.add('fade-in');
                }
                const src = img.getAttribute('data-lazy');
                img.setAttribute('src', src);
                // image is not visible
                // remove observable
                observer.disconnect();
            }
        });
    });

    // call observer over each image
    io.observe(targets);
}
// run lazyload function over images
targets.forEach(lazyLoad);