import { Grid, PhotosGalleryItem } from '..';

export const PhotosGallery = ({ pictures }) => {
  return (
    <Grid>
      {pictures.map(({ id, avg_color, alt, src: { large } }) => {
        return (
          <PhotosGalleryItem
            key={id}
            avg_color={avg_color}
            alt={alt}
            src={large}
          />
        );
      })}
    </Grid>
  );
};
