import pkg from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {}
];

const client = await pkg.connect(
  'mongodb://localhost:27017/',
  { useNewUrlParser: true, useUnifiedTopology: true }
  );
  const coll = client.db('student-lists').collection('applicants');
  const cursor = coll.aggregate(agg);
  const result = await cursor.toArray();
  await client.close();
  console.log("connection_successful")