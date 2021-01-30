import React from 'react';

const data = {
    velopert: {
        name: '김민준',
        description: '리액트를 좋아하는 개발자'
    },
    xtring: {
        name: "황현",
        description: '리액트에 입문한 프론트앤드 개발자'
    }
}

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];

    if (!profile) {
        return <div>존재하지 않는 사용자입니다!</div>
    }

    return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile;