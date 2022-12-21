import { appSchema, tableSchema } from "@nozbe/watermelondb/Schema";

export const schemas = appSchema({
	version: 1,
	tables: [
		tableSchema({
			name: "users",
			columns: [
				{ name: "name", type: "string" },
				{ name: "email", type: "string" },
				{ name: "github", type: "string", isOptional: true },
				{ name: "created_at", type: "number" },
				{ name: "updated_at", type: "number" }
			]
		})
	]
});
