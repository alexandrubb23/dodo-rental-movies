const HeadingPageTitle = ({ title }: { title: string }) => {
  return (
    <hgroup>
      <h1 className='heading-page-title__text'>{title}</h1>
    </hgroup>
  );
};

export default HeadingPageTitle;
