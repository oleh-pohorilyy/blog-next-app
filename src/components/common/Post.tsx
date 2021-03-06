import React from 'react'

import styled from 'styled-components'

const PostCard = styled.article`
  background-color: #232323;
  margin: 16px 0;
  padding: 8px 16px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 100%;
    background-color: #555555;
  }
`

const PostTitle = styled.article`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
`

const PostBody = styled.article`
  padding-left: 8px;
`

interface PostProps {
  title: string
  body: string
  cutLength?: number
}

const Post: React.FC<PostProps> = ({ title, body, cutLength }) => {
  const toCut = Math.min(body.length, cutLength ?? body.length)
  const trimmed = body.substring(0, toCut).trim()

  return (
    <PostCard>
      <PostTitle>{title}</PostTitle>
      <PostBody>
        {trimmed}
        {trimmed.length !== body.length ? '...' : ''}
      </PostBody>
    </PostCard>
  )
}

export { Post }
