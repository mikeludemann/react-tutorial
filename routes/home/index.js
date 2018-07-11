exports.home = function (req, res) {
    res.render("Home", {
        title: "Home",
        fieldElements: [
            { id: "FirstName", headline: "First Name", type: "text", name: "First", value: "", placeholder: "First Name" },
            { id: "LastName", headline: "Last Name", type: "text", name: "Last", value: "", placeholder: "Last Name" }
        ],
        url: "/",
        nameTo: "start",
        text: "Go to start"
    });
};