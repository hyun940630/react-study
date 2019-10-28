import React, { Component } from "react";

class User extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.user !== nextProps.user;
  }

  render() {
    const { username } = this.props.user;

    console.log("%s가 렌더링되고 있어요!!", username);

    return <div>{username}</div>;
  }
}

export default User;

// 가장 작은 단위의 component입니다.
