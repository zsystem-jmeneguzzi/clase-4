import './Header.css';

export default function Header({ title, subtitle }) {
  return (
    <div className="Header-container">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}