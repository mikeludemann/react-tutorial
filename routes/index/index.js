exports.index = function (req, res) {
    res.render("index", {
        title: "Start",
        listItems: [
            {id: 1, separator: ".", text: "test"},
            {id: 2, separator: ".", text: "hi"}
        ],
        url: "/home",
        name: "Home",
        text: "Go to home"
    });
};