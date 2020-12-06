import React, {Component} from "react"
import Header from "../Header/index"
import Footer from "../Footer/index"
export default class Posts extends Component{

  constructor(){
    super();
    this.state={
      posts: [],
      loading: false,
    }
  }
 async getLoading(){
  this.setState({
    loading: true,
  })
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json())
  this.setState({
    posts: data,
    loading: false,
  })
  }
async componentDidMount(){
   await this.getLoading();
  }

  render(){
    const {posts} = this.state;
    return(
      <>
      <Header/>
      {this.state.loading && <h1>LOADING...</h1>}
        <ul>
    {posts.map((post) => <li>{post.name}</li>)}
        </ul>
      <Footer/>
      </>
    )
  }
}
