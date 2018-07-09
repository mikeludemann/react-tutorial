exports.home = function (req, res) {
    res.render("Home", {
        title: "Home",
        url: "/",
        name: "start",
        text: "Go to start"
    });
};