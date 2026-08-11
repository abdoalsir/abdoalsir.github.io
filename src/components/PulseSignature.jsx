export default function PulseSignature() {
  return (
    <div className="pulse-wrap" aria-hidden="true">
      <svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg">
        <path
          className="pulse-line"
          d="M0,130 L90,130 L110,130 L125,60 L145,190 L165,110 L185,130 L260,130
             C 300,130 300,90 340,90 C 380,90 380,150 420,150
             C 460,150 460,70 500,70 L520,70 L640,45"
        />
        <circle className="pulse-dot" cx="640" cy="45" r="6" />
      </svg>
    </div>
  )
}
