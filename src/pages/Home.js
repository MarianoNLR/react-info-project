import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import NoticesList from '../components/collections/NoticesList'
import SearchBar from '../components/SearchBar'

class Home extends Component {

  constructor(props){
    super(props)
    this.onSearch = this.onSearch.bind(this)
  }

  state = {
    filter: '',
  }

  onSearch = (filterValue) => {
    this.setState({filter : filterValue})
  }

  render() {
    return (
      <>
        <Container className='container-results'>
          <SearchBar changeValue={this.onSearch}></SearchBar>
          <NoticesList filter={this.state.filter}></NoticesList>
        </Container>
      </>
    )
  }
}

export default Home