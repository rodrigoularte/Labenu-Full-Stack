export class Friendship {
  constructor(
    private idUser: string,
    private idFriend: string
  ) {}

  public getIdUser() {
    return this.idUser
  }

  public getIdFriend() {
    return this.idFriend
  }

  static toFriendshipModel(data: any): Friendship {
    return new Friendship(data.idUser, data.idFriend)
  }
}