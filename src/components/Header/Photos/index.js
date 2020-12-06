import React, {Component} from "react"
import Header from "../Header/index"
import Footer from "../Footer/index"

export default class Posts extends Component{

  constructor(){
    super();
    this.state={
      photos: [],
      loading: false,
    }
  }
 async getLoading(){
  this.setState({
    loading: true,
  })
  const data = await fetch("https://jsonplaceholder.typicode.com/photos").then((res) => res.json())
  this.setState({
    photos: data,
    loading: false,
  })
  }
async componentDidMount(){
   await this.getLoading();
  }

  render(){
    const {photos} = this.state;
    return(
      <>
      <Header/>
      {this.state.loading && <h1>LOADING...</h1>}
        <ul>
    {photos.map((post) => <li>{post.name}</li>)}
        </ul>
      <Footer/>
      </>
    )
  }
}
