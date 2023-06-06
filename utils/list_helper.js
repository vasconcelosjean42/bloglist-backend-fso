const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const total = blogs.reduce((prev, {likes}) => {
    return prev + likes
  }, 0)
  
  return blogs.length === 0
    ? 0
    : total
}

const favoriteBlog = (blogs) => {
  const value = Math.max(...blogs.map(blog => blog.likes))
  const blog = blogs.find(b => b.likes === value)
  return blogs.length === 0
   ? 0
   : blog
}

const mostBlogs = (blogs) => {
  const blog = blogs.reduce((prev, cur) => {
    if(prev.find(c => cur.author === c.author)){
      prev = prev.map(c => c.author === cur.author ?
      {
        author: c.author,
        blogs: c.blogs + 1
      } : c)
    }else{
      const newBlog = {
        author: cur.author,
        blogs: 1
      }
      prev = prev.concat(newBlog)
    }
    return(
      prev
    )
  }, [])
  console.log(blog)
  return blogs.length === 0
  ? 0
  : blog.filter(bl => bl.blogs === Math.max(...blog.map(b => b.blogs)))[0]
} 

const mostLikes = (blogs) => {
  const blog = blogs.reduce((prev, cur) => {
    if(prev.find(c => cur.author === c.author)){
      prev = prev.map(c => c.author === cur.author ?
      {
        author: c.author,
        likes: c.likes + cur.likes
      } : c)
    }else{
      const newBlog = {
        author: cur.author,
        likes: cur.likes
      }
      prev = prev.concat(newBlog)
    }
    return(
      prev
    )
  }, [])
  console.log(blog)
  return blogs.length === 0
  ? 0
  : blog.filter(bl => bl.likes === Math.max(...blog.map(b => b.likes)))[0]
} 

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
