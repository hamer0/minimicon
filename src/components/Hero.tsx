interface HeroProps {
  iconCount?: number;
}

const Hero = ({iconCount}:HeroProps) => {
    return (
      <hgroup className="hero">
        <h1>minimal SVG icons for your UI</h1>
        <h2>{iconCount && `${iconCount} Icons · `}MIT License · 100% Free forever</h2>
      </hgroup>
    )
  }

export default Hero