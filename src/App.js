//react
import React, { Component } from 'react';
//components
import Header from "./components/Header"
import SearchBox from "./components/SearchBox"
import UserDiv from "./components/UserDiv"
import FieldsDiv from './components/FieldsDiv';

//axios get call to random users api
import { getUsers } from "./API"

class App extends Component {

  state = {
    users: [],
    displayUsers: [],
    sortOrder: "asc",
    textValue: ""
  }

  async componentDidMount() {

    const { data } = await getUsers()


    const users = data.results.map(segment => {
      return {
        id: segment.login.uuid,
        name: `${segment.name.first} ${segment.name.last}`,
        phone: segment.phone,
        dob: this.convertDate(segment.dob.date),
        image: segment.picture.large,
        email: segment.email
      }
    })

    this.setState({ users: users })
    this.setState({ displayUsers: users})
  }

  convertDate = date => {

    let str = ""
    //0--4-67-89
    //XXXX-MM-DD
    console.log(date)
    if (date.charAt(5) === "0") {
      str += date.substring(6, 8)
      if (date.charAt(8) === "0") {
        str += date.substring(9, 10)
      } else {
        str += date.substring(8, 10)
      }
    }
    else {
      str += date.substring(5, 8)
      if (date.charAt(8) === "0") {
        str += date.substring(9, 10)
      } else {
        str += date.substring(8, 10)
      }
    }
    str += `-${date.substring(0, 4)}`

    return str
  }

  sortName = () => {

    this.state.sortOrder === "dec" ? this.setState({ sortOrder: "asc" }) : this.setState({ sortOrder: "dec" })

    const namesUnsorted = this.state.displayUsers.map(user => user.name)
    if (this.state.sortOrder === "asc") {

      const namesSorted = namesUnsorted.sort()
      this.setState({ displayUsers: this.sort(namesSorted) })
    } else if (this.state.sortOrder === "dec") {

      const namesSorted = namesUnsorted.reverse()
      this.setState({ displayUsers: this.sort(namesSorted) })
    }
  }

  sort = order => {
    const orderedIndices = []

    for (let i = 0; i < order.length;) {
      for(let it = 0; it < order.length; it++) {

        if(this.state.displayUsers[it].name === order[i]) {

          orderedIndices.push(it)
          i++
        }
      }
    }
    
    const sorted = []

    for (const index of orderedIndices) sorted.push(this.state.displayUsers[index])

    return sorted
  }

  filterNames = async e => {

    const value  = await e.target.value.toLowerCase()

    console.log(value)
    
    value !== "" ? this.setState({ textValue: value}) : this.setState({ textValue: this.state.textValue.substring(0, value.length)})

      this.setState({ displayUsers: this.state.users.filter( user => 
        (user.name.substring(0, this.state.textValue.length).toLowerCase() === this.state.textValue.toLowerCase())
        )
      })
  }

  render = () => {
    return <>
      <Header />
      <main>
        <SearchBox textValue={this.state.textValue} filterNames={this.filterNames} />
        <FieldsDiv sortName={this.sortName} />

        {this.state.displayUsers.map(user =>
          <UserDiv key={user.id} name={user.name} image={user.image}
            phone={user.phone} email={user.email} dob={user.dob} />
        )}
      </main>
    </>
  }
}

export default App