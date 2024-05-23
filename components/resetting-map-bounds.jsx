import { useEffect, useMemo } from 'react';
import { useMap } from 'react-kakao-maps-sdk';

const ReSetttingMapBounds = ({ points }) => {
  const map = useMap();
  const bounds = useMemo(() => {
    const bounds = new kakao.maps.LatLngBounds();
    points.forEach(point => {
      bounds.extend(new kakao.maps.LatLng(point.lat, point.lng));
    });
    return bounds;
  }, [points]);

  useEffect(() => {
    if (points.length > 0) {
      map.setBounds(bounds);
    }
  }, [points, bounds, map]);

  return null;
};

export default ReSetttingMapBounds;
