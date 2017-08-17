var me = [["mantas", "akilanas", 1994], ["Lacina", "Kone", 1994]]
var alder = "";
var currentYear = new Date();
function run(id = -1) {
    return function (profil) {
        if (id != -1) {
            return profil[id][0] + " " + profil[id][1] + ":\nFødt " + profil[id][2] + "\nog er " + (currentYear.getFullYear() - profil[id][2]);
        }
        else {
            var array = [];
            for (var i = 0; i < me.length; i++) {
                array.push(profil[i][0] + " " + profil[i][1] + ":Født " + profil[i][2] + "og er " + (currentYear.getFullYear() - profil[i][2]));
            }
            return array;
        }


    }
}
var index = run(1);
console.log(index(me));
console.log(me.length)
