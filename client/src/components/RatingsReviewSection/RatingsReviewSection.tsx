import React, { useState, useEffect } from 'react';
import ReviewsFilter from '../ReviewsFilter/ReviewsFilter';
import ReviewsPagination from '../ReviewsPagination';
import Review from '../Review';

type ReviewDataType = {
  parents: {
    id: string;
  }[];
  id: string;
  traveledWith: string;
  entryDate: number;
  travelDate: number;
  ratings: {
    general: {
      general: number;
    };
    aspects: {
      location: number;
      service: number;
      priceQuality: number;
      food: number;
      room: number;
      childFriendly: number;
      interior: number;
      size: number;
      activities: number;
      restaurants: number;
      sanitaryState: number;
      accessibility: number;
      nightlife: number;
      culture: number;
      surrounding: number;
      atmosphere: number;
      noviceSkiArea: number;
      advancedSkiArea: number;
      apresSki: number;
      beach: number;
      entertainment: number;
      environmental: number;
      pool: number;
      terrace: number;
    };
  };
  titles: {
    nl: string;
  };
  texts: {
    nl: string;
  };
  user: string;
  locale: string;
};

const RatingsReviewSection = () => {
  const [reviews, setReviews] = useState<ReviewDataType[]>([
    {
      parents: [
        {
          id: '',
        },
      ],
      id: '',
      traveledWith: '',
      entryDate: 0,
      travelDate: 0,
      ratings: {
        general: {
          general: 0,
        },
        aspects: {
          location: 0,
          service: 0,
          priceQuality: 0,
          food: 0,
          room: 0,
          childFriendly: 0,
          interior: 0,
          size: 0,
          activities: 0,
          restaurants: 0,
          sanitaryState: 0,
          accessibility: 0,
          nightlife: 0,
          culture: 0,
          surrounding: 0,
          atmosphere: 0,
          noviceSkiArea: 0,
          advancedSkiArea: 0,
          apresSki: 0,
          beach: 0,
          entertainment: 0,
          environmental: 0,
          pool: 0,
          terrace: 0,
        },
      },
      titles: {
        nl: '',
      },
      texts: {
        nl: '',
      },
      user: '',
      locale: '',
    },
  ]);

  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>('entryDate');
  const [filterOption, setFilterOption] = useState<string>('');
  const [numberOfReviews, setNumberOfReviews] = useState<number>(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/reviews?start=${1}&limit=${5}&sortBy=${sortBy}&filterBy=${filterOption}`
        );
        const data = await response.json();
        setTotalPages(Math.ceil(data.filtered.length / 5));
        setCurrentPage(1);
        setReviews(data.limited);
        setNumberOfReviews(data.filtered.length);
      } catch (err) {
        console.error('Error fetching reviews:', err);
      }
    };

    fetchReviews();
  }, [sortBy, filterOption]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/reviews?start=${
            (currentPage - 1) * 5 + 1
          }&limit=${currentPage * 5}&sortBy=${sortBy}&filterBy=${filterOption}`
        );
        const data = await response.json();
        setReviews(data.limited);
      } catch (err) {
        console.error('Error fetching reviews:', err);
      }
    };

    fetchReviews();
  }, [currentPage]);

  const filterOptionArray = [
    { value: '', label: 'All' },
    { value: 'FAMILY', label: 'Family' },
    { value: 'FRIENDS', label: 'Friends' },
    { value: 'OTHER', label: 'Other' },
    { value: 'COUPLE', label: 'Couple' },
    { value: 'SINGLE', label: 'Single' },
  ];

  const reviewMap = reviews.map((el) => {
    const title = Object.values(el.titles)[0];
    const body = Object.values(el.texts)[0];
    return (
      <Review
        key={el.id}
        reviewAverages={el.ratings.aspects}
        title={title}
        body={body}
        user={el.user}
        entryDate={el.entryDate}
        locale={el.locale}
        general={el.ratings.general.general}
      />
    );
  });

  return (
    <div>
      <ReviewsFilter
        filterOptionArray={filterOptionArray}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
        setSortBy={setSortBy}
        sortBy={sortBy}
      />
      <ReviewsPagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfReviews={numberOfReviews}
      />

      {reviewMap}
    </div>
  );
};

export default RatingsReviewSection;
