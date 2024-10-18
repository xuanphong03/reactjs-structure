import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>Product Detail</h1>
      <h2>Product id: {id}</h2>
    </div>
  );
}
