import AnimatedText from "../components/AnimatedText";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import console from "../assets/game consoles.png";
import "../index.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <AnimatedText text="WELCOME TO GAMESWAP" home={true} />
      <Container
        direction="left"
        image={console}
        heading="WHAT IS GAMESWAP?"
        text="Welcome to GameSwap, where gamers unite to expand their gaming libraries without breaking the bank. GameSwap is your one-stop destination for connecting with fellow gamers to exchange or lend video games. Say goodbye to the hassle of expensive purchases and hello to a vibrant community of gamers eager to share their favorite titles. Whether you're looking to discover new adventures, save money on game acquisitions, or simply connect with like-minded enthusiasts, GameSwap is here to revolutionize your gaming experience. Join us today and unlock a world of endless gaming possibilities."
      />
      <Container
        direction="right"
        image={console}
        heading="BROWSE GAME LISTINGS"
        text="Dive into a vast collection of game listings spanning various platforms and genres and explore curated selections of popular, trending, and rare titles available for swap. Easily filter and search for specific games based on platform, genre, popularity, or availability status."
      />
      <Container
        direction="left"
        image={console}
        heading="ACCESS OUR COMUNITY FORUMS"
        text="Access our bustling gaming community forums to immerse yourself in a world of shared passion. Engage in lively discussions, swap gaming tales, and tap into the collective wisdom of seasoned players. Stay ahead of the curve with updates on gaming trends, events, and announcements, all while forging lasting friendships with fellow enthusiasts. GameSwap isn't just about swapping games; it's about connecting gamers"
      />
      <Container
        direction="center"
        heading="CREATING PROFILES"
        text="Personalize your gaming journey by creating a unique profile that reflects your gaming interests and preferences. Showcase the games you own, games you're willing to swap, and your wishlist for future exchanges. Build trust within the community by maintaining an updated profile and engaging with other users."
      />
      <Footer />
    </>
  );
}

export default Home;
