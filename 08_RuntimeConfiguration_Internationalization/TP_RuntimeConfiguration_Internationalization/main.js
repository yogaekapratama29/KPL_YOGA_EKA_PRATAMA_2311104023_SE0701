import readline from 'readline';
import CovidConfig from './CovidConfig.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const config = new CovidConfig();

function tanyaSuhu() {
  return new Promise(resolve => {
    rl.question(`Berapa suhu badan anda saat ini? Dalam nilai ${config.satuan}: `, answer => {
      resolve(parseFloat(answer));
    });
  });
}

function tanyaHariDemam() {
  return new Promise(resolve => {
    rl.question('Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ', answer => {
      resolve(parseInt(answer));
    });
  });
}

function evaluasi(suhu, hari) {
  let suhuNormal = false;
  if (config.satuan === 'celcius') {
    suhuNormal = suhu >= 36.5 && suhu <= 37.5;
  } else {
    suhuNormal = suhu >= 97.7 && suhu <= 99.5;
  }

  const hariAman = hari < config.batasHariDemam;

  if (suhuNormal && hariAman) {
    console.log(config.pesanDiterima);
  } else {
    console.log(config.pesanDitolak);
  }
}

async function main() {
  const suhu = await tanyaSuhu();
  const hari = await tanyaHariDemam();
  evaluasi(suhu, hari);

  rl.question('Apakah ingin mengubah satuan suhu? (y/n) ', jawab => {
    if (jawab.toLowerCase() === 'y') {
      config.UbahSatuan();
      console.log(`Satuan diubah ke ${config.satuan}`);
    }
    rl.close();
  });
}

main();
