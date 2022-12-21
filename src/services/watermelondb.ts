import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import { schemas } from "../database/model/schema";
import { User } from "../database/model/User";

const adapter = new SQLiteAdapter({
	schema: schemas
});

export const database = new Database({
	adapter,
	modelClasses: [User]
});
