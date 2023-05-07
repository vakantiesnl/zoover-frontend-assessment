import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReviewsPageHeader from '../ReviewsPageHeader';
import RatingsStatisticsSection from '../RatingsStatisticsSection';
import RatingsReviewSection from '../RatingsReviewSection/RatingsReviewSection';

const PageContainer = styled.div`
  max-width: 1200px;
  font-family: ;
  box-sizing: border-box;
`;

const PageWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

type ReviewAveragesType = {
  generalAvg: number;
  aspecsAvg: {
    location: number;
    priceQuality: number;
    childFriendly: number;
    restaurants: number;
    sanitaryState: number;
    pool: number;
  };
  traveledWithAvg: {
    FAMILY: number;
    FRIENDS: number;
    OTHER: number;
    COUPLE: number;
    SINGLE: number;
  };
};

const ReviewsPage = () => {
  const [reviewAverages, setReviewAverages] = useState<ReviewAveragesType>({
    generalAvg: 0,
    aspecsAvg: {
      location: 0,
      priceQuality: 0,
      childFriendly: 0,
      restaurants: 0,
      sanitaryState: 0,
      pool: 0,
    },
    traveledWithAvg: {
      FAMILY: 0,
      FRIENDS: 0,
      OTHER: 0,
      COUPLE: 0,
      SINGLE: 0,
    },
  });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:8080/reviews/average');
        const data = await response.json();
        setReviewAverages(data);
      } catch (err) {
        console.error('Error fetching reviews:', err);
      }
    };

    fetchReviews();
  }, []);

  return (
    <PageWrap>
      <PageContainer>
        <ReviewsPageHeader
          title="XXXXX Accommodation"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        dolores quis alias vitae earum fugiat! Nesciunt nihil et aliquid
        consectetur dicta inventore quasi, neque reprehenderit nobis molestias,
        voluptates impedit. Reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        dolores quis alias vitae earum fugiat! Nesciunt nihil et aliquid
        consectetur dicta inventore quasi, neque reprehenderit nobis molestias,
        voluptates impedit. Reiciendis."
          reviewAverages={reviewAverages}
        />
        <RatingsStatisticsSection
          heading="The average ratings for this accommodation"
          type="stars"
          reviewAverages={reviewAverages.aspecsAvg}
        />
        <RatingsStatisticsSection
          heading="The percentages of traveledWith"
          type="meter"
          reviewAverages={reviewAverages.traveledWithAvg}
        />
        <RatingsReviewSection />
      </PageContainer>
    </PageWrap>
  );
};

export default ReviewsPage;
