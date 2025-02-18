import React, { useState, useEffect, useMemo, useRef } from "react";
import { useTransition, a } from "@react-spring/web";

import "./Masonry.css";

interface MasonryItem {
  id: string | number;
  height: number;
  image: string;
  // Add any additional properties if needed
}

interface GridItem extends MasonryItem {
  x: number;
  y: number;
  width: number;
  height: number; // This represents the actual height of the item
}

interface MasonryProps {
  data: MasonryItem[];
}

const Masonry: React.FC<MasonryProps> = ({ data }) => {
  const [columns, setColumns] = useState<number>(2);
  //@ts-ignore
  const [gap, setGap] = useState<number>(40); // Further increased gap

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia("(min-width: 1000px)").matches) {
        setColumns(3); // 3 columns on medium screens
      } else if (window.matchMedia("(min-width: 600px)").matches) {
        setColumns(2); // 2 columns on small screens
      } else {
        setColumns(1); // 1 column on mobile devices
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [heights, gridItems] = useMemo<[number[], GridItem[]]>(() => {
    const heights = new Array(columns).fill(0); // Array to keep track of the heights of each column
    const gridItems = data.map((child) => {
      const column = heights.indexOf(Math.min(...heights)); // Get the column with the smallest height
      const x = (width / columns) * column; // The X position based on the column, no need to add gap here
      const y = heights[column] + gap; // The Y position is the current height of the column with gap
      heights[column] += child.height + gap; // Update the column's height, considering the gap

      return {
        ...child,
        x,
        y,
        width: (width / columns) - gap, // Ensure the width fits with the gap
        height: child.height, // Use the actual height of the image
      };
    });
    return [heights, gridItems];
  }, [columns, data, width, gap]);

  const transitions = useTransition<
      GridItem,
      { x: number; y: number; width: number; height: number; opacity: number }
  >(gridItems, {
    keys: (item) => item.id,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
      <div
          ref={ref}
          className="masonry"
          style={{ height: Math.max(...heights), overflow: "hidden" }} // Ensuring no horizontal overflow
      >
        {transitions((style, item) => (
            <a.div key={item.id} style={style}>
              <div
                  style={{
                    backgroundColor: "#ffffff", // Set background if needed
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
              />
            </a.div>
        ))}
      </div>
  );
};

export default Masonry;
