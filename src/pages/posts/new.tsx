import { useState } from 'react'
import { toast } from 'react-toastify'

import api from 'api/blogApi'
import { Container, Surface, Input, Button, Title } from 'common'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { MainLayout } from 'src/layouts'
import { isEmptyOrWhiteSpace } from 'src/utils/string'
import styled from 'styled-components'

const Block = styled(Surface)`
  padding: 8px;
  margin-top: 16px;
`

const ButtonsBlock = styled(Block)`
  display: flex;
  justify-content: center;

  & > :first-child {
    margin-right: 8px;
  }
`

const NewPost: NextPage = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const router = useRouter()

  const createPost = async () => {
    if (isEmptyOrWhiteSpace(title) || isEmptyOrWhiteSpace(body)) {
      toast.error('Please fill all fields!')
      return
    }

    const { status } = await api.createPost(title, body)
    if (status == 201) {
      toast.success('Post created!')
      router.push('/')
    }
  }

  return (
    <MainLayout>
      <Container>
        <Block>
          <Title>Title</Title>
          <Input
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </Block>

        <Block>
          <Title>Body</Title>
          <Input
            value={body}
            onChange={(e) => setBody(e.currentTarget.value)}
          />
        </Block>

        <ButtonsBlock>
          <Button onClick={() => router.push('/')}>Back</Button>
          <Button onClick={createPost}>Create</Button>
        </ButtonsBlock>
      </Container>
    </MainLayout>
  )
}

export default NewPost
