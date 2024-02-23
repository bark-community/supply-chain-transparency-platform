// components/HeroSection.js
import React from "react";
import { SignInIcon } from "../icons";
import { Button, LinkButton } from "../primitives/Button";
import { Container } from "../primitives/Container";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <Container className={styles.heroContainer}>
      <div className={styles.heroInfo}>
        <h1 className={styles.heroTitle}>
          BARK: Revolutionizing Disaster Relief&nbsp;Charities with Solana Blockchain
        </h1>
        <p className={styles.heroLead}>
          Empowering Efficient Disbursement&nbsp;Transparent Supply Chains.
          The BARK: Disbursement and Supply Chain Platform is a state-of-the-art solution built on the Solana blockchain, specifically tailored for disaster relief and charity foundations.
        </p>
      </div>
      <div className={styles.heroActions}>
        <Button icon={<SignInIcon />} onClick={() => signIn()}>
          Sign in
        </Button>
        <LinkButton
          href="https://barkprotocol.net/docs/"
          target="_blank"
          variant="secondary"
        >
          Documentation
        </LinkButton>
      </div>
    </Container>
  );
}

export default HeroSection;

// pages/index.js
import React from "react";
import { GetServerSideProps } from "next";
import * as Server from "../lib/server";
import Feature from "../components/Feature";
import HeroSection from "../components/HeroSection";
import styles from "./index.module.css";

export default function Index() {
  return (
    <MarketingLayout>
      <HeroSection />
      <Container className={styles.section}>
        <h2 className={styles.sectionTitle}>Features</h2>
        <div className={styles.featuresGrid}>
          <Feature
            description={
              <>
                A collaborative whiteboard app with included share menu,
                documents listing, users, groups, permissions, and more.
              </>
            }
            title="Whitepaper"
          />
          {/* Add other Feature components here */}
        </div>
      </Container>
    </MarketingLayout>
  );
}

// If logged in, redirect to dashboard
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await Server.getServerSession(req, res);

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: DASHBOARD_URL,
      },
    };
  }

  return {
    props: {},
  };
};
