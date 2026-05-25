export default function Logo({ size = 20, className = '' }) {
  return (
    <img
      src="/logo.png"
      alt="MargDarshak"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

