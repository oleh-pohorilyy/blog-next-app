import axios, { AxiosInstance, AxiosPromise } from 'axios'
import { ICommentedPost, IPost } from 'model'

class BlogApiClient {
  _client: AxiosInstance

  constructor() {
    this._client = axios.create({
      baseURL: 'https://simple-blog-api.crew.red',
    })

    this._client.interceptors.request.use((req) => {
      return req
    }, this._handleError)

    this._client.interceptors.response.use((res) => {
      console.log(res)
      return res
    }, this._handleError)
  }

  _handleError(error: any) {
    console.log(error)
  }

  getPosts(): AxiosPromise<Array<IPost>> {
    return this._client.get('/posts')
  }

  getPost(id: number): AxiosPromise<ICommentedPost> {
    return this._client.get(`/posts/${id}`, { params: { id } })
  }

  createPost(title: string, body: string): AxiosPromise<void> {
    return this._client.post('/posts', { title, body })
  }
}

const client = new BlogApiClient()

export default client
