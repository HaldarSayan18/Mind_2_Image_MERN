import React from 'react';
import '../styles/CreatePost.css';
import TextField from '@mui/material/TextField';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import Button from '@mui/material/Button';

const ImgGeneratorForm = (
    {
        post,
        setPost,
        createPostLoading,
        setcreatePostLoading,
        generateImgLoading,
        setGenerateImgLoading,
    }) => {
    const generateImgFunc = () => {
        setGenerateImgLoading(true);
    }
    const createImgFunc = () => {
        setcreatePostLoading(true);
    }

    // const handleChange = (e) => {
    //     setPost({ ...post, prompt: e.target.value })
    // };
    return (
        <form className='img-generator-form'>
            <div className="top">
                <div className="title">
                    Generate Image with Prompt
                </div>
                <div className="desc">
                    Write your detailed prompt according to the image you want!
                </div>
            </div>
            <div className="body">
                {/* author */}
                <TextField
                    label="Author Name"
                    color='primary'
                    // variant='filled'
                    placeholder='Enter your name'
                    name="name"
                    sx={{
                        input: { color: "white" },
                    }}
                    focused
                    value={post.name}
                    // onChange={handleChange}
                    onChange={(e) => setPost({ ...post, name: e.target.value })}
                />
                {/* img prompt area */}
                {/* <label>IMAGE PROMPT</label> */}
                <textarea
                    color='none'
                    // variant='filled'
                    placeholder='Write your prompt to generate image...'
                    name="prompt"
                    rows={5}
                    value={post.prompt}
                    // onChange={handleChange}
                    onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                />
                <p>** You can post the AI Generated Image</p>
            </div>
            <div className="actions">
                <Button
                    type='button'
                    color='secondary'
                    variant='contained'
                    loading={generateImgLoading}
                    isDisabled={post.prompt === ""}
                    onClick={()=>generateImgFunc()}
                >
                    <AutoAwesomeIcon /> Generate Image
                </Button>
                <Button
                    type='button'
                    color='warning'
                    variant='contained'
                    loading={createPostLoading}
                    isDisabled={post.name === "" || post.prompt === "" || post.photo === ""}
                    onClick={()=>createImgFunc()}
                >
                    <AutoFixNormalIcon /> Post Image
                </Button>
            </div>
        </form>
    )
}

export default ImgGeneratorForm
