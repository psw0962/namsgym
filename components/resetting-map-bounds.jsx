import { useEffect, useMemo } from 'react';
import { useMap } from 'react-kakao-maps-sdk';

const ReSetttingMapBounds = ({ points, isSingle = false }) => {
  const map = useMap();
  const bounds = useMemo(() => {
    const bounds = new kakao.maps.LatLngBounds();

    if (isSingle) {
      bounds.extend(new kakao.maps.LatLng(points?.lat, points?.lng));

      return bounds;
    } else {
      points?.forEach(point => {
        bounds.extend(new kakao.maps.LatLng(point.lat, point.lng));
      });
      return bounds;
    }
  }, [points]);

  useEffect(() => {
    if (isSingle) {
      map.setBounds(bounds);
      return;
    }

    if (isSingle === false && points?.length > 0) {
      map.setBounds(bounds);
      return;
    }
  }, []);

  return <></>;
};

export default ReSetttingMapBounds;
