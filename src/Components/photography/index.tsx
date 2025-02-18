import { useEffect, useState } from "react";
// @ts-ignore
import LocomotiveScroll from "locomotive-scroll";
import Masonry from "../../blocks/Components/Masonry/Masonry.tsx";
import {HeadingContainer, ImageContainer} from "./styles.ts";
import ImageTrail from "../../blocks/Animations/ImageTrail/ImageTrail.tsx";

const Photography = () => {
  const username = "saiteja_varma"
  const accessKey = "OVUoxEiut5uORPCunxb7GIgNXld-Fe34udZGqUlK5w8"
  const [imageUrls, setImageUrls] = useState([]); // State to store image URLs
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState<string|null>(null); // State to handle error

  useEffect(() => {
    // Fetch images from Unsplash API
    const fetchImages = async () => {
      try {
        //@ts-ignore
        let allImages = [];
        // Fetch first batch (page 1)
        const response1 = await fetch(
            `https://api.unsplash.com/users/${username}/photos?client_id=${accessKey}&per_page=30&page=1&order_by=popular`
        );
        const data1 = await response1.json();
        //@ts-ignore
        const urls1 = data1.map((photo) => {
          return {
            id: photo.id,
            image: photo.urls.regular,
            height: photo.height / 10
          };
        });
        //@ts-ignore
        allImages = [...allImages, ...urls1];

        // Fetch second batch (page 2)
        const response2 = await fetch(
            `https://api.unsplash.com/users/${username}/photos?client_id=${accessKey}&per_page=30&page=2&order_by=popular`
        );
        const data2 = await response2.json();
        //@ts-ignore
        const urls2 = data2.map((photo) => {
          return {
            id: photo.id,
            image: photo.urls.regular,
            height: photo.height / 10
          };
        });
        allImages = [...allImages, ...urls2];
        //@ts-ignore
        setImageUrls(allImages); // Store the combined URLs in the state
      } catch (error) {
        setError('Error fetching images');
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchImages();
  }, [username, accessKey]); // Re-run the effect if username or accessKey changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <HeadingContainer>
          <div style={{position:"absolute", width: "100%", height: "100%", zIndex:"1"}}>
            <ImageTrail
                key={"key"}
                items={[
                  "https://images.unsplash.com/photo-1704395014320-4f4661fae47a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1738189810352-a13f4a62c08c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1723027418825-e708d94c24c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1738189792210-18485651c66d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1723982698499-6427eab8acf6?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ]}
                variant={2}
            />
          </div>
          <div style={{pointerEvents: "none"}}>
            As a passionate photographer, I travel the world with my camera in hand,
            capturing the beauty and stories of the places I visit. Each image tells a unique
            story, from the vast landscapes to the intimate moments that unfold before me
          </div>

        </HeadingContainer>
        <ImageContainer>
          <Masonry data={imageUrls}/>
        </ImageContainer>
      </div>
  );
}

export default Photography;
