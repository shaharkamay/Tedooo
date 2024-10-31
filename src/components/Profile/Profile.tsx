import React from 'react'
import styled from 'styled-components'

const ProfileImage = styled.img`
    border-radius: 50%;
    height: 2.5rem;
    aspect-ratio: 1/1;
    object-fit: cover;
    margin-block: 9px; // according to figma design
`;

function Profile({ src, alt }: { src: string, alt?: string }) {
  return (
    <ProfileImage src={src} alt={alt} />
  )
}

export default Profile