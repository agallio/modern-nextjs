export default function OldIndex() {
  return null;
}

export function getServerSideProps() {
  return {
    redirect: {
      destination: "/old/static",
      permanent: false,
    },
  };
}
