import React, { useState } from 'react';
import '../styles/CreatePost.css';
import ImgGeneratorForm from '../components/ImgGeneratorForm';
import GeneratedImgCard from '../components/GeneratedImgCard';

const CreatePost = () => {
  const [post, setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generateImgLoading, setGenerateImgLoading] = useState(false);
  const [createPostLoading, setcreatePostLoading] = useState(false);
  return (
    <div className='post-container'>
      <ImgGeneratorForm
        post={post}
        setPost={setPost}
        createPostLoading={createPostLoading}
        setcreatePostLoading={setcreatePostLoading}
        generateImgLoading={generateImgLoading}
        setGenerateImgLoading={setGenerateImgLoading}
      />
      <GeneratedImgCard src={post?.photo} loading={generateImgLoading} />
    </div>
  )
}

export default CreatePost
