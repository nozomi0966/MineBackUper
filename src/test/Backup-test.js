var assert = require("assert");
var backup = require("../main/Backup.js");
describe("Backup", function() {
    it("getDatas", function() {
        assert.equal('New World', backup.getDatas()[0]);
    });
    it("copyData", function() {
        var dt = new Date();
        assert.equal('/Users/nozomi/.minecraft/hoge'+ "-"+dt.getFullYear().toString() + "-" +dt.getMonth().toString() + "-" + dt.getDate().toString(), backup.copyData('hoge'));
    });
});