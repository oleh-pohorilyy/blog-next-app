import { IComment } from './IComment'
import { IPost } from './IPost'

export interface ICommentedPost extends IPost {
  comments: Array<IComment>
}
