

export class ModulaUser {
	public modulaUserId:String;
	public userFirst:String;
	public userLast:String;
	public userStatus:String;
	public schoolCode:String;
	public eMail:String;

	constructor(profile){
		this.modulaUserId = profile.username;
		this.userFirst = profile.user_first;
		this.userLast = profile.user_last;
		this.userStatus = profile.standing;
		this.school_id = profile.school_id;
		this.eMail = profile.email;
	}
}