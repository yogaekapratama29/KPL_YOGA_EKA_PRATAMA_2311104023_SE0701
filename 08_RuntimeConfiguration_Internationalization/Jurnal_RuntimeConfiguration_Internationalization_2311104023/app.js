import fs from "fs";
import readline from "readline";


const defaultConfig = {
  lang: "en",
  transfer: {
    threshold: 25000000,
    low_fee: 6500,
    high_fee: 15000,
  },
  methods: ["RTO (real-time)", "SKN", "RTGS", "BI FAST"],
  confirmation: {
    en: "yes",
    id: "ya",
  },
};


let config;
try {
  const data = fs.readFileSync("bank_transfer_config.json", "utf8");
  config = JSON.parse(data);
} catch (error) {
  config = defaultConfig;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const lang = config.lang.toLowerCase() === "id" ? "id" : "en";


const messages = {
  en: {
    promptAmount: "Please insert the amount of money to transfer:",
    fee: "Transfer fee =",
    total: "Total amount =",
    method: "Select transfer method:",
    confirm: `Please type "${config.confirmation.en}" to confirm the transaction:`,
    success: "The transfer is completed",
    fail: "Transfer is cancelled",
  },
  id: {
    promptAmount: "Masukkan jumlah uang yang akan di-transfer:",
    fee: "Biaya transfer =",
    total: "Total biaya =",
    method: "Pilih metode transfer:",
    confirm: `Ketik "${config.confirmation.id}" untuk mengkonfirmasi transaksi:`,
    success: "Proses transfer berhasil",
    fail: "Transfer dibatalkan",
  },
};


function startApp() {
  rl.question(`${messages[lang].promptAmount}\n`, (input) => {
    const amount = parseInt(input);
    if (isNaN(amount)) {
      console.log("Invalid input. Please enter a number.");
      return startApp();
    }
    processTransfer(amount);
  });
}

function processTransfer(amount) {
  const fee = amount <= config.transfer.threshold
    ? config.transfer.low_fee
    : config.transfer.high_fee;
  const total = amount + fee;

  console.log(`${messages[lang].fee} ${fee}`);
  console.log(`${messages[lang].total} ${total}`);
  showMethods();
}

function showMethods() {
  console.log(`\n${messages[lang].method}`);
  config.methods.forEach((method, index) => {
    console.log(`${index + 1}. ${method}`);
  });

  rl.question("\nChoose a method (1-" + config.methods.length + "): ", (choice) => {
    const index = parseInt(choice) - 1;
    if (index >= 0 && index < config.methods.length) {
      console.log(`You selected: ${config.methods[index]}`);
      confirmTransfer();
    } else {
      console.log("Invalid selection. Please try again.");
      showMethods();
    }
  });
}

function confirmTransfer() {
  rl.question(`\n${messages[lang].confirm}\n`, (input) => {
    const expected = config.confirmation[lang];
    if (input.trim().toLowerCase() === expected) {
      console.log(`\n${messages[lang].success}`);
    } else {
      console.log(`\n${messages[lang].fail}`);
    }
    rl.close();
  });
}

startApp();
