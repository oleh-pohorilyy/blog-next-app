import { IComment } from './IComment'
import { IPost } from './IPost'

export interface ICommentedPost extends IPost {
  id: number
  title: string
  body: string
  comments: Array<IComment>
}
