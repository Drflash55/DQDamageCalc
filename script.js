$(document).ready(function() {
  $("p").hide()
});

function calculate(wep, arm, helm, skill) {
 return Math.floor((wep * (0.6597 + 0.013202 * skill)*((arm+helm)*0.0028))*82);
}

function OnClick() {
  console.log("Clicc!");
  let wep = $("#wep").val();
  let arm = $("#arm").val();
  let helm = $("hel").val();
  let skill = $("#skill").val();
  
  const BaseDamage = calculate(wep, arm, helm, skill);
  
  console.log(wep,arm,helm,skill)
  console.log(BaseDamage);
  
};
