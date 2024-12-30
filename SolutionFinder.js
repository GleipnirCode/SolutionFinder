let HumanA = {};
let HumanB = {};
const Actions = ["talks to", "writes to", "tells a joke to", "makes an compliment to", "smiles to", "flirts with"];
const Feelings = ["sad", "depressed", "confused", "disappointed", "ok", "happy"];

findSolution();

async function init()
{
    console.log("Try to find relationship solution...");
    await delay("6000");
    HumanA.name = "Dani";
    changeFeeling(HumanA);
    while(HumanA.mood == "happy" || HumanA.mood == "ok")
    {
        changeFeeling(HumanA);
    }
    HumanB.name = "Sebastian";
    HumanB.mood = "sad";
}

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function findSolution()
{
    let action;
    let human;
    await init();
    console.log(HumanA.name + " feels " + HumanA.mood + " and "+ HumanB.name + " feels " + HumanB.mood);
    await delay("1500");
    while(HumanA.mood != "happy" || HumanB.mood != "happy")
    {
        human = getHuman();
        HumanB = getOtherHuman(human);
        HumanA = human;
        //Start think process
        console.log(HumanA.name + " is thinking...");
        await delay(getThinkSpeed(HumanA));
        //Do action
        action = getAction();
        console.log(HumanA.name + " " + action + " " + HumanB.name);
        await delay("1500");
        //Evaluate reaction
        changeFeeling(HumanB, action);
        console.log(HumanA.name + " feels " + HumanA.mood + " and " + HumanB.name + " feels " + HumanB.mood);
        await delay("1500");
    }
    console.log(HumanA.name + " and " + HumanB.name + " are happy :)");
}
function getThinkSpeed(human){
    if(human.name == "Dani"){return 2000;}else{return 4000;}
}
function changeFeeling(human, action){
    if(action == "tells a joke to" || action == "makes an compliment to" || action == "smiles to" ||action ==  "flirts with"){
        if(human.mood == "ok" || human.mood == "happy"){human.mood = "happy"}else{human.mood = "ok"};
    }else{ human.mood = Feelings[Math.abs(Math.round((Math.random() * Feelings.length - 1)))];} 
}
function getAction(){
    return Actions[Math.abs(Math.round((Math.random() * Actions.length - 1)))]; 
}
function getHuman(){
    let id = Math.round(Math.random() * 2.5); 
    if(id <= 1){return HumanA;}else{return HumanB;}
}
function getOtherHuman(human){
    if(human.name == HumanA.name){return HumanB;}else{return HumanA;}
}
