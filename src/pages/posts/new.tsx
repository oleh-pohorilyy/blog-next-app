import { useState } from 'react'

import api from 'api/blogApi'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { MainLayout } from 'src/layouts'
import { isEmptyOrWhiteSpace } from 'src/utils/string'

const NewPost: NextPage = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const router = useRouter()

  const createPost = () => {
    if (isEmptyOrWhiteSpace(title) || isEmptyOrWhiteSpace(body)) {
      alert('Fields can not be empty!')
      return
    }

    api.createPost(title, body)
  }

  return (
    <MainLayout>
      <textarea
        onChange={(e) => setTitle(e.currentTarget.value)}
        name=""
        id=""
        placeholder="Type here title..."
      ></textarea>
      <textarea
        onChange={(e) => setBody(e.currentTarget.value)}
        name=""
        id=""
        placeholder="Type here body..."
      ></textarea>
      <button onClick={createPost}>Create</button>
      <button onClick={() => router.push('/')}>Back</button>
    </MainLayout>
  )
}

export default NewPost
