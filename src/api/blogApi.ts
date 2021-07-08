import axios, { AxiosInstance, AxiosPromise } from 'axios'
import { IPost } from 'model'

class BlogApiClient {
  _client: AxiosInstance

  constructor() {
    this._client = axios.create({
      baseURL: 'https://simple-blog-api.crew.red',
    })

    this._client.interceptors.request.use((req) => req, this._handleError)

    this._client.interceptors.response.use((res) => res, this._handleError)
  }

  _handleError(error: any) {
    console.log(error)
  }

  getPosts(): AxiosPromise<Array<IPost>> {
    return this._client.get('/posts')
  }

  getPost(id: string): AxiosPromise<IPost> {
    return this._client.get(`/posts/${id}`, { params: { id } })
  }

  createPost(title: string, body: string): AxiosPromise<void> {
    return this._client.post('/posts', { title, body })
  }
}

const api = new BlogApiClient()

export default api
