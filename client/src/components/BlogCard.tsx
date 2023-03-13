import React from 'react'
import sampleImg from "../assets/img/sample-img-01.jpg"

const BlogCard: React.FC = () => {
  return (
    <div className='blog-card'>
        <img src={ sampleImg } alt='sample pic' className='thumbnail-pic'/>
        <div className='blog-card-text'>
            <h2>Coffee sugar, chicory seasonal espresso barista americano</h2>
            <p className='date'>JUNE 25, 2020 | MUSIC</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. <span><a href=''>Read More...</a></span></p>
        </div>
    </div>
  )
}

export default BlogCard
