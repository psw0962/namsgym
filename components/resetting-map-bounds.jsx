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

import { useEffect, useMemo } from 'react';
import { useMap } from 'react-kakao-maps-sdk';

const ReSettingMapBounds = ({ points, isSingle = false }) => {
  const map = useMap();

  const bounds = useMemo(() => {
    const bounds = new kakao.maps.LatLngBounds();
    if (isSingle) {
      if (points) {
        bounds.extend(new kakao.maps.LatLng(points.lat, points.lng));
      }
    } else {
      points?.forEach(point => {
        bounds.extend(new kakao.maps.LatLng(point.lat, point.lng));
      });
    }
    return bounds;
  }, [points, isSingle]);

  useEffect(() => {
    if (points && points.length > 0) {
      map.setBounds(bounds);
    }
  }, [points, bounds, map]);

  return null;
};

export default ReSettingMapBounds;
