import api from 'api/blogApi'
import { IPost, IThunkAction, ICommentedPost } from 'model'
import { postsActions } from 'redux/actions'

export const getPosts =
  (): IThunkAction<Array<IPost>> => async (dispatch, _) => {
    const { data } = await api.getPosts()
    //Mapping due to bad posts in database
    const mappedPosts = data.filter((d) => {
      d.body = d.body ?? 'Empty post body'
      d.title = d.title ?? 'Empty post title'
      return d
    })

    dispatch(postsActions.setPosts(mappedPosts))
    return mappedPosts
  }

export const getPost =
  (id: string): IThunkAction<ICommentedPost> =>
  async (dispatch, _) => {
    const { data } = await api.getPost(id)
    //Mapping due to bad posts in database
    data.body = data.body ?? 'Empty post body'
    data.title = data.title ?? 'Empty post title'
    dispatch(postsActions.setCommentedPost(data))
    return data
  }
