import fs from 'fs';

class CovidConfig {
  constructor(configPath = 'covid_config.json') {
    const defaults = {
      CONFIG1: 'celcius',
      CONFIG2: 14,
      CONFIG3: 'Anda tidak diperbolehkan masuk ke dalam gedung ini',
      CONFIG4: 'Anda dipersilahkan untuk masuk ke dalam gedung ini'
    };

    try {
      const rawData = fs.readFileSync(configPath);
      const config = JSON.parse(rawData);

      this.satuan = config.satuan_suhu ? defaults[config.satuan_suhu] : defaults.CONFIG1;
      this.batasHariDemam = config.batas_hari_deman ? defaults[config.batas_hari_deman] : defaults.CONFIG2;
      this.pesanDitolak = config.pesan_ditolak ? defaults[config.pesan_ditolak] : defaults.CONFIG3;
      this.pesanDiterima = config.pesan_diterima ? defaults[config.pesan_diterima] : defaults.CONFIG4;
    } catch (error) {
      this.satuan = defaults.CONFIG1;
      this.batasHariDemam = defaults.CONFIG2;
      this.pesanDitolak = defaults.CONFIG3;
      this.pesanDiterima = defaults.CONFIG4;
    }
  }

  UbahSatuan() {
    if (this.satuan === 'celcius') {
      this.satuan = 'fahrenheit';
    } else {
      this.satuan = 'celcius';
    }
  }
}

export default CovidConfig;
