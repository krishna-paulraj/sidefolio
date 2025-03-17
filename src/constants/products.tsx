import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";
import cf1 from "public/images/cf-1.png";
import cf2 from "public/images/cf-2.png";
import cf3 from "public/images/cf-3.png";
import al1 from "public/images/al-1.png";
import al2 from "public/images/al-2.png";
import al3 from "public/images/al-3.png";

export const products = [
  {
    href: "https://crowd-funding-zeta-two.vercel.app",
    title: "Crowd Funding",
    description:
      "A web3 app that aims to create a transparent and secure funding system for people investing in organizations.",
    thumbnail: cf1,
    images: [cf1, cf2, cf3],
    stack: ["Nextjs", "Tailwindcss", "Smart Contracts"],
    slug: "crowd-funding",
    content: (
      <div>
        <p>
          👥 Our app targets two key user groups:
          <br />
          Organizations: Create proposals for their projects or startups and
          seek funding to be raised within a specified period.
          <br />
          Investors: Review these proposals, donate any amount they wish, and in
          return, receive voting power (vPov)
        </p>
        <p>
          🔢 How vPov Works:
          <br />
          Voting power is calculated at the end of the funding round as:
          Donation Amount / Total Funding
          <br />
          vPov gives investors a say in how their funding is used and allows
          them to vote on subsequent proposals.
        </p>{" "}
        <p>
          🗳️ The Role of vPov:
          <br />
          After the funding is secured, it’s locked up until the organization
          submits a new proposal to unlock a percentage of the funds.
          <br />
          Investors then vote on these proposals to determine if the funds
          should be released.
        </p>
        <p>
          💻 Powered by Smart Contracts:
          <br />
          Our entire system is driven by smart contracts and can be viewed on
          the blockchain, ensuring a secure, transparent, and tamper-proof
          process for managing and distributing funds.
          <br />
          Looking forward to seeing this project come to life and making a
          significant impact in the crowdfunding space!
        </p>
      </div>
    ),
  },
  {
    href: "https://todo-adbwdumpt-krishnapaulrajs-projects.vercel.app",
    title: "Alertify",
    description: "A todo web app with integrated calender and notes.",
    thumbnail: al1,
    images: [al1, al2, al3],
    stack: ["Nextjs", "Tailwindcss", "MongoDB"],
    slug: "alertify",
    content: (
      <div>
        <p>
          Exciting news! I&apos;m thrilled to announce the launch of Alertify,
          my brand new to-do app. With Alertify, you can easily add, undo, and
          delete your to-dos, all while enjoying the peace of mind that comes
          with cloud saving. Plus, you can choose between light and dark mode to
          fit your preferences.
          <br />
          <br />
          Alertify was built with a variety of top-notch technologies, including
          Next.js as the JavaScript Framework, Mongo DB for database management,
          Next.js In-build router for connection integration, Clerk for user
          authentication, and Shardcn as the UI library. And thanks to Vercel,
          deployment is a breeze!
          <br />
          <br />
          Check out Alertify today and streamline your to-do list like never
          before.
          <br />
          <br />
          GitHub: https://github.com/krishna-paulraj/alertify-todo-app
        </p>{" "}
      </div>
    ),
  },
];
