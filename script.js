$(function() {
  $("p").hide()
  const BaseText = $("p").text();
  
  function calculate(wep, arm, helm, skill) {
   return Math.floor((wep * (0.6597 + 0.013202 * skill)*((arm+helm)*0.0028))*82);
  }
  
  function commarize(num) {
    // Alter numbers larger than 1k
    if (num >= 1e3) {
      var units = ["k", "M", "B", "T", "qd", "Qn", "sx", "Sp", "O", "N", "de"];

      // Divide to get SI Unit engineering style numbers (1e3,1e6,1e9, etc)
      let unit = Math.floor(((this).toFixed(0).length - 1) / 3) * 3
      // Calculate the remainder
      var num = (this / ('1e'+unit)).toFixed(2)
      var unitname = units[Math.floor(unit / 3) - 1]

      // output number remainder + unitname
      return num + unitname
    }
    
    return this.toLocaleString()
  }


  console.log($("p").text())
  console.log(BaseText)
  $("form button").click(function() {
    console.log("Clicc!");
    let wep = $("#wep").val();
    let arm = $("#arm").val();
    let helm = $("#hel").val();
    let skill = $("#skill").val();

    const BaseDamage = calculate(wep, arm, helm, skill);

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

    console.log(matches)
    console.log(text)
    console.log(BaseText)
    console.log("Checking matches");
    for (const match of matches) {
      let toChange = commarize(DamageArray[match[1]]) + "\n"
      if ((parseInt(match[1]) - 1) % 3) {
        toChange += "\n"
      }
      text = text.replace(match[0], toChange);
    };
    console.log("Done matches");

    $("p").text(text);
    $("p").fadeIn();

  });
});
