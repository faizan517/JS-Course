var names = [

    ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
    ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
    ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
    ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"]

];

function replace(replaceWith, newValue) {
    var arr = []
    var nestedArr = []

    for (let i = 0; i < names.length; i++) {
        for (let j = 0; j < names[i].length; j++) {
            if (names[i][j] === replaceWith) {
                nestedArr.push(newValue)
            }
            else {
                nestedArr.push(names[i][j])
            }
            arr.push(nestedArr)
            nestedArr=[]

        }
    return arr    
    }

}
var result = replace("Sana","Zeeshan")
console.log(result)

