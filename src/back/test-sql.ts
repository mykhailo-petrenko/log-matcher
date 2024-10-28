import Database from 'better-sqlite3';


export function testSql() {
  // const database = new Database(':memory:');
  const database = new Database('./data/test.sqlite');
  database.prepare("DROP TABLE IF EXISTS lorem").run();
  database.prepare("CREATE TABLE lorem (info TEXT)").run();

  const insert = database.prepare('INSERT INTO lorem (info) VALUES (@info)');

  const insertMany = database.transaction((rows) => {
    for (const row of rows) insert.run(row);
  });


  insertMany([
    {'info': '1i'},
    {'info': 'i2'},
    {'info': 'i3'},
    {'info': 'i4'},
  ]);


  const stmt = database.prepare('SELECT info FROM lorem');


  console.log(stmt.all());
}
