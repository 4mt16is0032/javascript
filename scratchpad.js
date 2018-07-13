/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

sallary=600000;
var tax_amount=0;
var net_amount=0;

if(sallary>0 && sallary<300000){
  tax_amount=0;
}
else if(sallary>=300000 && sallary<800000){
  tax_amount=sallary*(10/100);
}
else if(sallary>=800000 && sallary<120000){
  tax_amount=sallary*(20/100);
}
else{
  tax_amount=sallary*(25/100);
}
net_sallary=sallary-tax_amount;
console.log("net sallary is:"+net_sallary);
  

/*
Exception: ReferenceError: sallar is not defined
@Scratchpad/1:17:1
*/
/*
Exception: ReferenceError: sallary_tax is not defined
@Scratchpad/1:26:1
*/