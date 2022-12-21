import { Model } from "@nozbe/watermelondb";
import { date, field, readonly, text } from "@nozbe/watermelondb/decorators";

export class User extends Model {
	static table = "users";

	@text("name") name!: string;
	@field("email") email!: string;
	@field("github") github?: string;
	@readonly @date("created_at") createdAt!: Date;
	@readonly @date("updated_at") updatedAt!: Date;
}
