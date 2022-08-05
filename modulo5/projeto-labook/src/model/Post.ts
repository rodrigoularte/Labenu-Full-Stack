export enum POST_TYPE {
  NORMAL = "NORMAL",
  EVENTO = "EVENTO"
}

export interface PostInput {
  photo: string,
  description: string,
  type: POST_TYPE
}

export class Post {

  constructor(
    private id: string,
    private photo: string,
    private description: string,
    private postedAt: string,
    private type: POST_TYPE
  ) {}

  public getId() {
    return this.id
  }

  public getPhoto() {
    return this.photo
  }

  public getDescription() {
    return this.description
  }

  public getPostedAt() {
    return this.postedAt
  }
  
  public getType() {
    return this.type
  }

  static toPostModel(data: any): Post {
    return new Post(data.id, data.photo, data.description, data.postedAt, data.type)
  }
  
}