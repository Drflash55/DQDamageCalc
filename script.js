$(document).ready(function() {
  $("p").hide()
});

function calculate(wep, arm, helm, skill) {
 return Math.floor((wep * (0.6597 + 0.013202 * skill)*((arm+helm)*0.0028))*82);
}

const Paragraph = $("p")
const BaseText = Paragraph.text();
function OnClick() {
  console.log("Clicc!");
  let wep = $("#wep").val();
  let arm = $("#arm").val();
  let helm = $("#hel").val();
  let skill = $("#skill").val();
  
  const BaseDamage = calculate(wep, arm, helm, skill);
  
  console.log(wep,arm,helm,skill)
  console.log(BaseDamage);
  
  let DamageArray = [];
  
  //No Inner
  DamageArray.push(BaseDamage*0.95);
  DamageArray.push(BaseDamage*1);
  DamageArray.push(BaseDamage*1.05);
  
  //With Inner
  DamageArray.push(BaseDamage*1.8*0.95);
  DamageArray.push(BaseDamage*1.8*1);
  DamageArray.push(BaseDamage*1.8*1.05);
  
  //With Enhanced Inner
  DamageArray.push(BaseDamage*1.9*0.95);
  DamageArray.push(BaseDamage*1.9*1);
  DamageArray.push(BaseDamage*1.9*1.05);
  
  const regExp = /\((\d)\)/g;
  let text = BaseText;
  const matches = text.matchAll(regExp);
  
  for (const match of matches) {
    console.log(match[0]);
    text.replace(`(${match[0]})`, DamageArray[parseInt(match[0])]);
  };
  
  Paragraph.text(text);
  Paragraph.fadeIn();
  
};
