exports.index = function (req, res) {
    res.render("index", {
        title: "Start",
        listItems: [
            {id: 1, text: "test"},
            {id: 2, text: "hi"}
        ],
        url: "/home",
        name: "Home",
        text: "Go to home"
    });
};