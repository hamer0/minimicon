interface HeroProps {
  iconCount?: number;
}

const Hero = ({iconCount}:HeroProps) => {
    return (
      <hgroup className="hero">
        <h1>minimal SVG icons for your UI</h1>
        <h2>{iconCount && `${iconCount} icons · `}MIT license · 100% free forever</h2>
      </hgroup>
    )
  }

export default Hero