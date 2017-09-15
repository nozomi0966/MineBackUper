var assert = require("assert");
var backup = require("../main/Backup.js");
describe("Backup", function() {
    it("getDatas", function() {
        assert.equal('New World', backup.getDatas()[0]);
    });
});