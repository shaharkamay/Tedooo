import React from 'react'
import styled from 'styled-components'

const ProfileImage = styled.div`
    background-color: red;
    border-radius: 50%;
    width: 2.5rem;
`;

function Profile() {
  return (
    <ProfileImage></ProfileImage>
  )
}

export default Profile