import prompt_sync from "prompt-sync";
const prompt = prompt_sync({ sigint: true });

export function GST() {
    var count = prompt("Enter Number of items that you bought : ");
    let sum = 0;

    console.log('Number of items : ', count);

    for (let index = 0;
        index < count;
        index++) {

        var valueOfitem = prompt("Enter the value of item " + (index + 1) + ": ");






        sum += Number(valueOfitem)   //sum=sum+Number(valueOfitem) 
        var gst = sum * 0.18
        var totalAmountWithGst = Number(sum + gst)
    }
    console.log("Total Basic amount of product=", sum,)
    console.log('GST 18% =', gst)
    return 'total amount including GST', totalAmountWithGst
}