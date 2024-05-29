import { useEffect, useMemo } from 'react';
import { useMap } from 'react-kakao-maps-sdk';

const ReSetttingMapBoundsSingle = ({ points }) => {
  const map = useMap();

  const bounds = useMemo(() => {
    const bounds = new kakao.maps.LatLngBounds();

    if (points && points.lat && points.lng) {
      bounds.extend(new kakao.maps.LatLng(points.lat, points.lng));
    } else {
      console.error('Invalid points data:', points);
    }

    return bounds;
  }, [points]);

  useEffect(() => {
    if (map && bounds) {
      map.setBounds(bounds);
    } else {
      console.error('Map or bounds is undefined');
    }
  }, [map, bounds]);

  return null;
};

export default ReSetttingMapBoundsSingle;
