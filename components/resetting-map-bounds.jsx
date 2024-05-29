// import { useEffect, useMemo } from 'react';
// import { useMap } from 'react-kakao-maps-sdk';

// const ReSetttingMapBounds = ({ points, isSingle = false }) => {
//   const map = useMap();
//   const bounds = useMemo(() => {
//     const bounds = new kakao.maps.LatLngBounds();

//     if (isSingle) {
//       bounds.extend(new kakao.maps.LatLng(points?.lat, points?.lng));

//       return bounds;
//     } else {
//       points?.forEach(point => {
//         bounds.extend(new kakao.maps.LatLng(point.lat, point.lng));
//       });
//       return bounds;
//     }
//   }, [points]);

//   useEffect(() => {
//     if (isSingle) {
//       map.setBounds(bounds);
//       return;
//     }

//     if (isSingle === false && points?.length > 0) {
//       map.setBounds(bounds);
//       return;
//     }
//   }, [points, bounds, map]);

//   return null;
// };

// export default ReSetttingMapBounds;

import React, { useEffect, useMemo } from 'react';
import { useMap } from 'react-kakao-maps-sdk';

const ReSetttingMapBounds = ({ points, isSingle = false }) => {
  const map = useMap();

  const bounds = useMemo(() => {
    if (typeof window === 'undefined' || typeof window.kakao === 'undefined') {
      return null;
    }

    const bounds = new kakao.maps.LatLngBounds();

    if (isSingle) {
      bounds.extend(new window.kakao.maps.LatLng(points?.lat, points?.lng));
    } else {
      points?.forEach(point => {
        bounds.extend(new window.kakao.maps.LatLng(point.lat, point.lng));
      });
    }

    return bounds;
  }, [points, isSingle]);

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      typeof window.kakao === 'undefined' ||
      !bounds
    ) {
      console.error('Kakao Maps API is not loaded or bounds is not defined');
      return;
    }

    if (isSingle) {
      map.setBounds(bounds);
    } else if (points?.length > 0) {
      map.setBounds(bounds);
    }
  }, [points, bounds, map, isSingle]);

  return null;
};

export default ReSetttingMapBounds;
