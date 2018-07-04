exports.index = function (req, res) {
    res.render("index",{
        title: "Home",
        text: "Hi, I am Mike"
    });
};