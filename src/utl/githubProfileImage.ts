export default function getGithubProfileImage(username?: string) {
	if(!username){
		return "https://www.account.p3heavenlybeauty.com/images/noProfilePlaceholder.png";
	}

	return `https://github.com/${username}.png`;
}
