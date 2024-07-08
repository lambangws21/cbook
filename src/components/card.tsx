interface cardProps {
  children: React.ReactNode;
}

const Card = ({ children }: cardProps) => {
  return (
    <div className="mx-auto w-[223mm] h-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-xl rounded-3xl border border-white border-opacity-10 shadow-lg p-8 mb-4">
      {children}
    </div>
  );
};



export default Card;
