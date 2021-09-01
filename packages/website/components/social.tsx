import React from 'react'
import styled from 'styled-components'

import * as tokens from '@cabane/tokens'

export const Slack = () => (
  <SocialLink href="https://join.slack.com/t/cabane-io/shared_invite/zt-6k4pey50-MpKULjBFybAasn0lRgxlhQ">
    <i className="fab fa-slack-hash fa-2x"></i>
  </SocialLink>
)

export const Facebook = () => (
  <SocialLink href="https://www.facebook.com/cabaneio">
    <i className="fab fa-facebook fa-2x"></i>
  </SocialLink>
)

export const LinkedIn = () => (
  <SocialLink href="https://www.linkedin.com/company/cabaneio/about">
    <i className="fab fa-linkedin fa-2x"></i>
  </SocialLink>
)

export const Youtube = () => (
  <SocialLink href="https://www.youtube.com/channel/UCHh1T6-UMXfTbecQv_fLVSA">
    <i className="fab fa-youtube fa-2x"></i>
  </SocialLink>
)

export const Twitter = () => (
  <SocialLink href="https://twitter.com/cabaneio">
    <i className="fab fa-twitter fa-2x"></i>
  </SocialLink>
)

const SocialLink = styled.a`
  margin-right: 55px;
  color: ${tokens.textContent};
`

export const Social = styled.div`
  display: flex;
`
