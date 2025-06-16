import React from 'react';
import '../styles/CreatePost.css';
import CircularProgress from '@mui/material/CircularProgress';

const GeneratedImgCard = ({ src, loading }) => {
    return (
        <div className='generated-img-container'>
            {loading ? <>
                <CircularProgress color='warning' style={{
                    marginRight:"10px"
                }}
                />
                Generating your image...
            </> : (<>{
                src ? <img className='generated-img' alt='generated-img' /> : <>
                    Write a prompt to generate the image
                </>
            }</>)}
            {/* <img className='generated-img' alt='generated-img' /> */}
        </div>
    )
}

export default GeneratedImgCard
