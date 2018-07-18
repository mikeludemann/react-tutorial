exports.media = function (req, res) {
    res.render("media", {
        title: "Media",
        image: [
            { imageSource: "assets/image.png", defaultText: "Superman Logo", width: "200px", height: "200px" }
        ],
        url: "/",
        nameTo: "start",
        text: "Go to start"
    });
};