exports.contact = function (req, res) {
    res.render("contact", {
        headTitle: "Contact",
        persons: [
            { firstName: "Test", secondName: "", lastName: "Tester" },
            { firstName: "Max", secondName: "Maximum", lastName: "Maxi" }
        ],
        salutation: "Mr.",
        title: "Dr.",
        firstName: "Test",
        secondName: "",
        lastName: "Tester",
        street: "Test Street",
        streetNumber: "1a",
        postalcode: "A2E34",
        place: "New York",
        country: "United States",
        telephone: "+0400 12354090",
        telefax: "+0400 3991505",
        email: "test@test.com",
        homepage: "google.de"
    });
};