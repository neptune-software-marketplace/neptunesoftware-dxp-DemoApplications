boxFeed.setBusy(true);
apiRestAPI1();
carouselFeedInterval = setInterval(function () {
    carouselFeed.next();
}, 3500);
