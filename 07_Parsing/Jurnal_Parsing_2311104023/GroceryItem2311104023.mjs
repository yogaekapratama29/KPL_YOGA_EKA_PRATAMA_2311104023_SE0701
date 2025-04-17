import fs from 'fs';

class GlossaryItem2311104023 {
  static ReadJSON() {
    const rawData = fs.readFileSync('jurnal7_3_2311104023.json');
    const data = JSON.parse(rawData);

    const entry = data.glossary.GlossDiv.GlossList.GlossEntry;

    console.log("Glossary Entry:");
    console.log(`ID: ${entry.ID}`);
    console.log(`Term: ${entry.GlossTerm}`);
    console.log(`Acronym: ${entry.Acronym}`);
    console.log(`Abbreviation: ${entry.Abbrev}`);
    console.log(`Definition: ${entry.GlossDef.para}`);
    console.log(`See Also: ${entry.GlossDef.GlossSeeAlso.join(', ')}`);
    console.log(`Gloss See: ${entry.GlossSee}`);
  }
}

GlossaryItem2311104023.ReadJSON();
