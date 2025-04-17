import fs from 'fs';

class TeamMembers2311104023 {
  static ReadJSON() {
    const rawData = fs.readFileSync('jurnal7_1_2311104023.json');
    const data = JSON.parse(rawData);

    console.log(`Name: ${data.firstName} ${data.lastName} (${data.age}, ${data.gender})`);
    const address = data.address;
    console.log(`Address: ${address.streetAddress}, ${address.city}, ${address.state}`);

    console.log('Courses:');
    data.courses.forEach(course => {
      console.log(`- ${course.code}: ${course.name}`);
    });
  }
}


TeamMembers2311104023.ReadJSON();


