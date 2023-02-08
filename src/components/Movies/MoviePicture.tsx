const MoviePicture = ({
  picture,
  title,
}: {
  picture: string;
  title: string;
}) => {
  return (
    <div style={{ display: 'flex' }}>
      <img src={picture} alt={title} />
    </div>
  );
};

export default MoviePicture;
