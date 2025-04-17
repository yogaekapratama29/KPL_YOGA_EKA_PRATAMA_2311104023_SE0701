import fs from "fs";

export class BankTransferConfig {
  constructor() {
    this.configPath = "bank_transfer_config.json";
    this.defaultConfig = {
      lang: "en",
      transfer: {
        threshold: 25000000,
        low_fee: 6500,
        high_fee: 15000
      },
      methods: ["RTO (real-time)", "SKN", "RTGS", "BI FAST"],
      confirmation: {
        en: "yes",
        id: "ya"
      }
    };
    this.config = this.loadConfig();
  }

  loadConfig() {
    try {
      const data = fs.readFileSync(this.configPath, "utf8");
      return JSON.parse(data);
    } catch (err) {
      return this.defaultConfig;
    }
  }
}
