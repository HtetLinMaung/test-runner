import { MongoClient } from "mongodb";

export default function getMongoDbClient(
  host: string,
  database: string,
  username: string,
  password: string,
  port: number = 27017
) {
  return new MongoClient(
    `mongodb://${username}:${password}@${host}:${port}/${database}`
  );
}
