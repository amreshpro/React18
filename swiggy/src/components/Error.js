import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
        <h1>OOps</h1>
        <h1>Page not found</h1>
        <Link to="/" className="btn">Go to Home</Link>
    </div>
  )
}