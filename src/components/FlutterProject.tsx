// src/components/FlutterProject.tsx

import { Carousel, Col, Container, Row } from 'react-bootstrap';
import React, { useRef, useState } from 'react';

import CardComponent from '../Card';

interface VideoItem {
  src: string;
  caption: string;
}

const videoItems: VideoItem[] = [
  {
    src: 'video/CollapseDragDrop.mp4',
    caption: 'Rearrange items with drag & drop.',
  },
  {
    src: 'video/AddAndDeleteProducts.mp4',
    caption: 'Add and remove products seamlessly.',
  },
  {
    src: 'video/AddNewCategoryAndColor.mp4',
    caption: 'Create and color-code categories.',
  },
  {
    src: 'video/AddProductToShoppingList.mp4',
    caption: 'Scan or add items to your shopping list.',
  },
  {
    src: 'video/ThresholdAndShoppingList.mp4',
    caption: 'Set thresholds for shopping alerts.',
  },
  {
    src: 'video/UseFillLevel.mp4',
    caption: 'Switch to fill-level tracking for single-item products.',
  },
];

interface FlutterProjectProps {
  onVideoClick: (src: string) => void;
}

const FlutterProject: React.FC<FlutterProjectProps> = ({ onVideoClick }) => {
  const [index, setIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
    const currentVideo = videoRefs.current[index];
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
    }
    const nextVideo = videoRefs.current[selectedIndex];
    if (nextVideo) {
      nextVideo.play().catch((error) => console.log('Play failed:', error));
    }
  };

  const handleVideoEnd = () => {
    const nextIndex = (index + 1) % videoItems.length;
    setIndex(nextIndex);
    const nextVideo = videoRefs.current[nextIndex];
    if (nextVideo) {
      nextVideo
        .play()
        .catch((error) => console.log('Auto-play failed:', error));
    }
  };

  return (
    <section id='flutter' className='mb-5'>
      <Container>
        <h2>Flutter Project</h2>
        <Row>
          <Col md={4} className='mb-4'>
            <CardComponent
              title='Inventory-App'
              text='A Flutter app for inventory management with barcode scanning and shopping list features.'
              imgSrc='/portfolio-page-new/images/InventoryImage.png'
              githubLink='https://github.com/myhster/inventory-app'
            />
          </Col>
          <Col md={6} className='mb-4'>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              interval={null}
              controls={true}
              indicators={true}
              className='custom-carousel'
            >
              {videoItems.map((item, idx) => (
                <Carousel.Item key={idx}>
                  <video
                    ref={(el) => {
                      videoRefs.current[idx] = el;
                    }}
                    width='100%'
                    height='auto'
                    style={{
                      maxHeight: '315px',
                      objectFit: 'contain',
                      cursor: 'pointer',
                    }}
                    src={item.src}
                    autoPlay={idx === 0}
                    muted
                    controls
                    className='d-block w-100'
                    onClick={() => onVideoClick(item.src)}
                    onEnded={handleVideoEnd}
                  />
                  <div className='video-caption'>
                    <p>{item.caption}</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FlutterProject;
