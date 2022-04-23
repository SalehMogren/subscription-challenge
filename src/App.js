import { PaymentCard } from "./paymentCard";
import { PlanCard } from "./planCard";

const Background = ({ children }) => {
  return (
    <div className='bg-gradient-to-b from-darkPurple to-pureBlack min-h-screen '>
      <div className='backdrop-blur-sm'>{children}</div>
    </div>
  );
};

function App() {
  return (
    <Background>
      {/* Container */}
      <div className='container p-8 md:flex md:justify-around gap-2'>
        <PlanCard />
        <PaymentCard />
      </div>
    </Background>
  );
}

export default App;
