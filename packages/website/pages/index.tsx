import type {NextPage} from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import {Background} from '../components/background'
import Speaker, {Speakers} from '../components/speaker'
import {Logo, LogoFooter} from '../components/logo'
import {HeadingSection, Heading2} from '../components/text'
import {Section} from '../components/section'
import {Social, Slack, Facebook, LinkedIn, Youtube, Twitter} from '../components/social'
import {Menu} from '../components/menu'

const Home: NextPage = () => {
  return (
    <>
      <Background />
      <Head>
        <title>Cabane.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Logo />
        <Menu />
        <Section>
          <HeadingSection>Où et quand?</HeadingSection>
          <Heading2>
            <div>Samedi le quatre septembre</div>
            <div>deux milles vingt et un</div>
            <div>
              au{' '}
              <a href="https://goo.gl/maps/XYD7qjswCu3jTHiE6" target="_blank" rel="noreferrer">
                Manège Militaire.
              </a>
            </div>
          </Heading2>
        </Section>
        <Section>
          <HeadingSection>
            Journée dédiée à nous, les développeurs de la ville de Québec
          </HeadingSection>
          <Heading2>Viens échanger sur une multitude de sujets dans une ambiance festive.</Heading2>
        </Section>
        <HeadingSection>Les conférences</HeadingSection>
        <Speakers>
          <Speaker.Box>
            <Speaker.Image src="/images/speakers/remi.jpg" alt="Rémi Prévost" />
            <Speaker.Text>
              <Speaker.Title>Bâtir une culture d'engineering robuste et explicite</Speaker.Title>
              <Speaker.Description href="https://www.linkedin.com/in/remiprev/">
                Rémi Prévost
              </Speaker.Description>
            </Speaker.Text>
          </Speaker.Box>
          <Speaker.Box>
            <Speaker.Image src="/images/speakers/karol.jpg" alt="Karol Deland" />
            <Speaker.Text>
              <Speaker.Title> Simplifier le développement de microservices avec Dapr</Speaker.Title>
              <Speaker.Description href="https://www.linkedin.com/in/karoldeland/">
                Karol Deland
              </Speaker.Description>
            </Speaker.Text>
          </Speaker.Box>
          <Speaker.Box>
            <Speaker.Image src="/images/speakers/william.jpg" alt="William Fortin" />
            <Speaker.Text>
              <Speaker.Title>DesignOps</Speaker.Title>
              <Speaker.Description href="https://www.linkedin.com/in/williamfortin/">
                William Fortin
              </Speaker.Description>
            </Speaker.Text>
          </Speaker.Box>
        </Speakers>
        <Section>
          <HeadingSection>Nos sponsors</HeadingSection>
          <Heading2>
            Un énorme merci à nos sponsors sans qui cette journée ne pourrait pas être possible.
          </Heading2>
        </Section>
        <Section>
          <HeadingSection>Suivez-nous!</HeadingSection>
          <Social>
            <Slack />
            <Facebook />
            <LinkedIn />
            <Youtube />
            <Twitter />
          </Social>
        </Section>
        <LogoFooter />
      </Page>
    </>
  )
}

const Page = styled.div`
  position: absolute;
  top: 0;
  padding: 38px;
`

export default Home
