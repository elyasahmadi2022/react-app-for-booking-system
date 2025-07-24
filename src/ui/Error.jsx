export default function Error({error}) {
  return <div className="w-full h-screen flex items-center justify-center">
    
      <strong className=" text-4xl text-center">Something went wrong</strong>
      <p>{error}</p>
    
  </div>;
}
