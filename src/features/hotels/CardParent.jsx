import Card from "./Card";
import SkeletonCard from "./SkeletonCard";

export default function CardsParent({ data, isLoading }) {
  return (
    <>
      {!isLoading ? (
        data.map((item) => <Card item={item} key={item.id} />)
      ) : (
        <SkeletonCard count={3} />
      )}
    </>
  );
}
