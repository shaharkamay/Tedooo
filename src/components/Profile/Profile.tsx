import React from 'react'
import styled from 'styled-components'

const ProfileImage = styled.img`
    border-radius: 50%;
    height: 2.5rem;
    aspect-ratio: 1/1;
    object-fit: cover;
    margin-block: 9px; // according to figma design
`;

function Profile() {
  return (
    <ProfileImage src="https://s3-alpha-sig.figma.com/img/221a/056c/8648ad917d5ce4117fc3c56ceb4adf90?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EiC-Vudzx~0sYZJFgi7xDIM7OiHCf8J~2wlRixKBgPvKrd6ieZCeFj9JIwMglPwPTFpja4TKQxhJBtDjfnM9WsOJkNl56Ss3FFL-U7IPGtpB28m2A0Qbs6blc7wzgW70AG4tOIWCObBcjfzmxXK33zaqmELIKNsZodHPiwVgC8puLHEpMbRGc65AGiJg9erQTg-e3fJW2vfCok-~o3U-Bw1-eo-SmwWdKRc5xSPiFN9v9tRvrp2j2rZM5ED~0H4fXn9hieVFaOPp2huahp9nZWS-X38SH0U2u4NIt1~5MI~ugkqC9lnbKyNrcH9gJIk3JF62448-odiALgK-OabvoQ__" />
  )
}

export default Profile