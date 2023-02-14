import SanityImage from "components/SanityImage";


const components = {
  types: {
    image: ({ value }: any) => {
      return <SanityImage {...value} />;
    },
  },
};

export default components
