class OldPrinter {
    specificPrint() {
        return "🖨️ Printed with OldPrinter";
    }
}

class PrinterAdapter {
    constructor(oldPrinter) {
        this.oldPrinter = oldPrinter;
    }

    print() {
        return this.oldPrinter.specificPrint();
    }
}

const adapter = new PrinterAdapter(new OldPrinter());
console.log(adapter.print()); 