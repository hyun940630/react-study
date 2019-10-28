import React, { Component } from "react";
import UserList from "./UserList";
import { List, Record } from "immutable";

// User를 위한 Record 생성
const User = Record({
  id: null,
  username: null
});

// Data를 위한 Record 생성
const Data = Record({
  input: "",
  users: List()
});

class App extends Component {
  id = 3;

  state = {
    data: Data({
      input: "",
      users: List([
        User({
          id: 1,
          username: "velopert"
        }),
        User({
          id: 2,
          username: "mjkim"
        })
      ])
    })
  };

  onChange = e => {
    const { value } = e.target;
    const { data } = this.state;

    this.setState({
      data: data.set("input", value)
    });
  };

  onButtonClick = () => {
    const { data } = this.state;

    this.setState({
      data: data.set("input", "").update("users", users =>
        users.push(
          new User({
            id: this.id++,
            username: data.get("input")
          })
        )
      )
    });
  };

  render() {
    const { onChange, onButtonClick } = this;
    const {
      data: { input, users }
    } = this.state;

    return (
      <div>
        <div>
          <input onChange={onChange} value={input} />
          <button onClick={onButtonClick}>추가</button>
        </div>
        <h1>사용자 목록</h1>
        <div>
          <UserList users={users} />
        </div>
      </div>
    );
  }
}

export default App;
