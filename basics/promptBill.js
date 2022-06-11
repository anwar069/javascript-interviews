import prompt_sync from "prompt-sync";
const prompt = prompt_sync({ sigint: true });

export function printBill() {
    let count = prompt('Enter the number of product: ')
    console.log('count products number :', count);
    let collectionOfProduct = [];
    let productTotal = 0;
    let discount = 0;
    for (let index = 0; index < count; index++) {
        let product = {};

        product["name"] = prompt('Enter name of product: ' + (index + 1) + ": ");
        product["Qty"] = Number(prompt('Enter Qty of product: ' + (index + 1) + ": "));
        product["price"] = Number(prompt('Enter price of product: ' + (index + 1) + ": "));

        productTotal += (product["price"] * product["Qty"]);
        collectionOfProduct.push(product);
    }
    let gst = productTotal * 0.18;
    let totalWithGst = productTotal + gst
    if (productTotal >= 5000) {
        discount = totalWithGst - (productTotal * 0.10)
    }



    console.log(collectionOfProduct)
    // console.log('Product Total = ', 'RS.', productTotal.toFixed(2));
    // console.log('GST 18% =', 'RS.', gst.toFixed(2));
    // console.log('Total Amount =', 'RS.', totalWithGst.toFixed(2));
    // console.log('Discount =', 'RS.', (productTotal * 0.10).toFixed(2))
    // console.log('Discounted Total =', 'RS.', discount);

    console.log("\n\n\n");
    console.log("=============================================");
    console.log("============= Customer Bill =================");
    console.log("Name \t\t Price \t\t Qty \t\t Amount");
    for (let index = 0; index < collectionOfProduct.length; index++) {
        const element = collectionOfProduct[index];
        console.log(element.name, " \t\t", element.price, " \t\t", element.Qty, " \t\t", element.Qty * element.price);
    }
    console.log(" \t\t", " \t\t", "Total: \t", productTotal);
    console.log(" \t\t", " \t\t", "GST 18%: \t", gst);
    console.log(" \t\t", " \t\t", "Grand Total: \t", totalWithGst);
}

// this file is no showing in github directory