"use strict";
function calculateTax6(income, taxYear = 2023) {
    if (taxYear > 2022)
        return income + 2;
    return income + 1;
}
console.log(calculateTax6);
//# sourceMappingURL=index.js.map